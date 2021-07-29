"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitializeBuilder = void 0;
const constants_1 = require("../utils/util/constants");
const utility_1 = require("../utils/util/utility");
const sdk_exception_1 = require("../core/com/zoho/crm/api/exception/sdk_exception");
const initializer_1 = require("./initializer");
const LoggerFile = __importStar(require("./logger/logger"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class InitializeBuilder {
    constructor() {
        (async () => {
            this.initializer = await initializer_1.Initializer.getInitializer();
            this.errorMessage = (await this.initializer != null) ? constants_1.Constants.SWITCH_USER_ERROR : constants_1.Constants.INITIALIZATION_ERROR;
            if (this.initializer != null) {
                this._user = await this.initializer.getUser();
                this._environment = await this.initializer.getEnvironment();
                this._token = await this.initializer.getToken();
                this._sdkConfig = await this.initializer.getSDKConfig();
            }
            return this;
        })();
    }
    async initialize() {
        utility_1.Utility.assertNotNull(this._user, this.errorMessage, constants_1.Constants.USERSIGNATURE_ERROR_MESSAGE);
        utility_1.Utility.assertNotNull(this._environment, this.errorMessage, constants_1.Constants.ENVIRONMENT_ERROR_MESSAGE);
        utility_1.Utility.assertNotNull(this._token, this.errorMessage, constants_1.Constants.TOKEN_ERROR_MESSAGE);
        utility_1.Utility.assertNotNull(this._store, this.errorMessage, constants_1.Constants.STORE_ERROR_MESSAGE);
        utility_1.Utility.assertNotNull(this._sdkConfig, this.errorMessage, constants_1.Constants.SDK_CONFIG_ERROR_MESSAGE);
        utility_1.Utility.assertNotNull(this._resourcePath, this.errorMessage, constants_1.Constants.RESOURCE_PATH_ERROR_MESSAGE);
        if (this._logger == null) {
            this._logger = LoggerFile.Logger.getInstance(LoggerFile.Levels.INFO, path.join(__dirname, "..", constants_1.Constants.LOGFILE_NAME));
        }
        initializer_1.Initializer.initialize(this._user, this._environment, this._token, this._store, this._sdkConfig, this._resourcePath, this._logger, this._requestProxy);
    }
    async switchUser() {
        utility_1.Utility.assertNotNull(initializer_1.Initializer.getInitializer(), constants_1.Constants.SDK_UNINITIALIZATION_ERROR, constants_1.Constants.SDK_UNINITIALIZATION_MESSAGE);
        initializer_1.Initializer.switchUser(this._user, this._environment, this._token, this._sdkConfig, this._requestProxy);
    }
    logger(logger) {
        this._logger = logger;
        return this;
    }
    token(token) {
        utility_1.Utility.assertNotNull(token, this.errorMessage, constants_1.Constants.TOKEN_ERROR_MESSAGE);
        this._token = token;
        return this;
    }
    SDKConfig(sdkConfig) {
        utility_1.Utility.assertNotNull(sdkConfig, this.errorMessage, constants_1.Constants.SDK_CONFIG_ERROR_MESSAGE);
        this._sdkConfig = sdkConfig;
        return this;
    }
    requestProxy(requestProxy) {
        this._requestProxy = requestProxy;
        return this;
    }
    resourcePath(resourcePath) {
        if (resourcePath == null || resourcePath.length <= 0) {
            throw new sdk_exception_1.SDKException(this.errorMessage, constants_1.Constants.RESOURCE_PATH_ERROR_MESSAGE);
        }
        if (!fs.statSync(resourcePath).isDirectory()) {
            throw new sdk_exception_1.SDKException(this.errorMessage, constants_1.Constants.RESOURCE_PATH_INVALID_ERROR_MESSAGE);
        }
        this._resourcePath = resourcePath;
        return this;
    }
    user(user) {
        utility_1.Utility.assertNotNull(user, this.errorMessage, constants_1.Constants.USERSIGNATURE_ERROR_MESSAGE);
        this._user = user;
        return this;
    }
    store(store) {
        utility_1.Utility.assertNotNull(store, this.errorMessage, constants_1.Constants.STORE_ERROR_MESSAGE);
        this._store = store;
        return this;
    }
    environment(environment) {
        utility_1.Utility.assertNotNull(environment, this.errorMessage, constants_1.Constants.ENVIRONMENT_ERROR_MESSAGE);
        this._environment = environment;
        return this;
    }
}
exports.InitializeBuilder = InitializeBuilder;
//# sourceMappingURL=initialize_builder.js.map