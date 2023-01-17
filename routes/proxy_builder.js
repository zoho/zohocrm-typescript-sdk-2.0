"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyBuilder = void 0;
const constants_1 = require("../utils/util/constants");
const request_proxy_1 = require("./request_proxy");
const sdk_exception_1 = require("../core/com/zoho/crm/api/exception/sdk_exception");
class ProxyBuilder {
    constructor() {
        this._password = "";
    }
    host(host) {
        this._host = host;
        return this;
    }
    port(port) {
        this._port = port;
        return this;
    }
    user(user) {
        this._user = user;
        return this;
    }
    password(password) {
        this._password = password;
        return this;
    }
    build() {
        if (this._host == null && this._port == null) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.MANDATORY_VALUE_ERROR, constants_1.Constants.MANDATORY_KEY_ERROR, constants_1.Constants.PROXY_MANDATORY_KEYS);
        }
        return new request_proxy_1.RequestProxy(this._host, this._port, this._user, this._password);
    }
}
exports.ProxyBuilder = ProxyBuilder;
//# sourceMappingURL=proxy_builder.js.map