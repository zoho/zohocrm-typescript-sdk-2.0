import { UserSignature } from './user_signature';

import { Constants } from '../utils/util/constants';

import { Utility } from '../utils/util/utility';

import { SDKException } from '../core/com/zoho/crm/api/exception/sdk_exception';

import { Token } from '../models/authenticator/token';

import { TokenStore } from '../models/authenticator/store/token_store';

import { SDKConfig } from './sdk_config';

import { Environment } from '../routes/dc/environment';

import { Initializer } from './initializer';

import * as LoggerFile from './logger/logger';

import { RequestProxy } from './request_proxy';

import * as fs from 'fs';

import * as path from "path";

export class InitializeBuilder {
    private _environment: Environment;

    private _store: TokenStore;

    private _user: UserSignature;

    private _token: Token;

    private _resourcePath: string;

    private _requestProxy: RequestProxy | undefined;

    private _sdkConfig: SDKConfig;

    private _logger: LoggerFile.Logger;

    private errorMessage: string;

    private initializer: Initializer;

    constructor() {
        (async () => {
            this.initializer = await Initializer.getInitializer();

            this.errorMessage = (await this.initializer != null) ? Constants.SWITCH_USER_ERROR : Constants.INITIALIZATION_ERROR;

            if (this.initializer != null) {
                this._user = await this.initializer.getUser();

                this._environment = await this.initializer.getEnvironment();

                this._token = await this.initializer.getToken();

                this._sdkConfig = await this.initializer.getSDKConfig();
            }
            return this;
        })();
    }

    public async initialize() {
        Utility.assertNotNull(this._user, this.errorMessage, Constants.USERSIGNATURE_ERROR_MESSAGE);

        Utility.assertNotNull(this._environment, this.errorMessage, Constants.ENVIRONMENT_ERROR_MESSAGE);

        Utility.assertNotNull(this._token, this.errorMessage, Constants.TOKEN_ERROR_MESSAGE);

        Utility.assertNotNull(this._store, this.errorMessage, Constants.STORE_ERROR_MESSAGE);

        Utility.assertNotNull(this._sdkConfig, this.errorMessage, Constants.SDK_CONFIG_ERROR_MESSAGE);

        Utility.assertNotNull(this._resourcePath, this.errorMessage, Constants.RESOURCE_PATH_ERROR_MESSAGE);

        if (this._logger == null) {
            this._logger = LoggerFile.Logger.getInstance(LoggerFile.Levels.INFO, path.join(__dirname, "..", Constants.LOGFILE_NAME));
        }

        Initializer.initialize(this._user, this._environment, this._token, this._store, this._sdkConfig, this._resourcePath, this._logger, this._requestProxy);
    }

    public async switchUser() {
        Utility.assertNotNull(Initializer.getInitializer(), Constants.SDK_UNINITIALIZATION_ERROR, Constants.SDK_UNINITIALIZATION_MESSAGE);

        Initializer.switchUser(this._user, this._environment, this._token, this._sdkConfig, this._requestProxy);
    }

    public logger(logger: LoggerFile.Logger): InitializeBuilder {
        this._logger = logger;

        return this;
    }

    public token(token: Token): InitializeBuilder {
        Utility.assertNotNull(token, this.errorMessage, Constants.TOKEN_ERROR_MESSAGE);

        this._token = token;

        return this;
    }

    public SDKConfig(sdkConfig: SDKConfig): InitializeBuilder {
        Utility.assertNotNull(sdkConfig, this.errorMessage, Constants.SDK_CONFIG_ERROR_MESSAGE);

        this._sdkConfig = sdkConfig;

        return this;
    }

    public requestProxy(requestProxy: RequestProxy): InitializeBuilder {
        this._requestProxy = requestProxy;

        return this;
    }

    public resourcePath(resourcePath: string): InitializeBuilder {
        if (resourcePath == null || resourcePath.length <= 0) {
            throw new SDKException(this.errorMessage, Constants.RESOURCE_PATH_ERROR_MESSAGE);
        }

        if (!fs.statSync(resourcePath).isDirectory()) {
            throw new SDKException(this.errorMessage, Constants.RESOURCE_PATH_INVALID_ERROR_MESSAGE);
        }

        this._resourcePath = resourcePath;

        return this;
    }

    public user(user: UserSignature): InitializeBuilder {
        Utility.assertNotNull(user, this.errorMessage, Constants.USERSIGNATURE_ERROR_MESSAGE);

        this._user = user;

        return this;
    }

    public store(store: TokenStore): InitializeBuilder {
        Utility.assertNotNull(store, this.errorMessage, Constants.STORE_ERROR_MESSAGE);

        this._store = store;

        return this;
    }

    public environment(environment: Environment): InitializeBuilder {
        Utility.assertNotNull(environment, this.errorMessage, Constants.ENVIRONMENT_ERROR_MESSAGE);

        this._environment = environment;

        return this;
    }
}