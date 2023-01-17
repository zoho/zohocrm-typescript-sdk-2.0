"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthBuilder = void 0;
const constants_1 = require("../../utils/util/constants");
const sdk_exception_1 = require("../../core/com/zoho/crm/api/exception/sdk_exception");
const oauth_token_1 = require("./oauth_token");
class OAuthBuilder {
    id(id) {
        this._id = id;
        return this;
    }
    clientId(clientID) {
        this._clientID = clientID;
        return this;
    }
    clientSecret(clientSecret) {
        this._clientSecret = clientSecret;
        return this;
    }
    redirectURL(redirectURL) {
        this._redirectURL = redirectURL;
        return this;
    }
    refreshToken(refreshToken) {
        this._refreshToken = refreshToken;
        return this;
    }
    grantToken(grantToken) {
        this._grantToken = grantToken;
        return this;
    }
    accessToken(accessToken) {
        this._accessToken = accessToken;
        return this;
    }
    build() {
        if (this._grantToken == null && this._refreshToken == null && this._id == null && this._accessToken == null) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.MANDATORY_VALUE_ERROR, constants_1.Constants.MANDATORY_KEY_ERROR, constants_1.Constants.OAUTH_MANDATORY_KEYS);
        }
        return new oauth_token_1.OAuthToken(this._clientID, this._clientSecret, this._grantToken, this._refreshToken, this._redirectURL, this._id, this._accessToken);
    }
}
exports.OAuthBuilder = OAuthBuilder;
//# sourceMappingURL=oauth_builder.js.map