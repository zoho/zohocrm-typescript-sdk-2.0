"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JPDataCenter = void 0;
const data_center_1 = require("./data_center");
/**
 * This class represents the properties of Zoho CRM in Japan Domain.
 * @extends DataCenter
*/
class JPDataCenter extends data_center_1.DataCenter {
    /**
     * This method represents the Zoho CRM Production environment in Japan domain
     * @returns {Environment} An instance of Environment
    */
    static PRODUCTION() {
        if (this._PRODUCTION == null) {
            this._PRODUCTION = data_center_1.DataCenter.setEnvironment("https://www.zohoapis.jp", this.JP.getIAMUrl(), this.JP.getFileUploadUrl(), "jp_prd");
        }
        return this._PRODUCTION;
    }
    /**
     * This method represents the Zoho CRM Sandbox environment in Japan domain
     * @returns {Environment} An instance of Environment
    */
    static SANDBOX() {
        if (this._SANDBOX == null) {
            this._SANDBOX = data_center_1.DataCenter.setEnvironment("https://sandbox.zohoapis.jp", this.JP.getIAMUrl(), this.JP.getFileUploadUrl(), "jp_sdb");
        }
        return this._SANDBOX;
    }
    /**
     * This method represents the Zoho CRM Developer environment in Japan domain
     * @returns {Environment} An instance of Environment
    */
    static DEVELOPER() {
        if (this._DEVELOPER == null) {
            this._DEVELOPER = data_center_1.DataCenter.setEnvironment("https://developer.zohoapis.jp", this.JP.getIAMUrl(), this.JP.getFileUploadUrl(), "jp_dev");
        }
        return this._DEVELOPER;
    }
    getIAMUrl() {
        return "https://accounts.zoho.jp/oauth/v2/token";
    }
    getFileUploadUrl() {
        return "https://content.zohoapis.jp";
    }
}
exports.JPDataCenter = JPDataCenter;
JPDataCenter.JP = new JPDataCenter();
//# sourceMappingURL=jp_data_center.js.map