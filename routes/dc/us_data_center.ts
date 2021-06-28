import { DataCenter } from './data_center'
import { Environment } from './environment';

/**
 * This class represents the properties of Zoho CRM in US Domain.
 */
export class USDataCenter extends DataCenter {

    private static PRODUCTION_ENVIRONMENT :Environment;

    private static SANDBOX_ENVIRONMENT :Environment;

    private static DEVELOPER_ENVIRONMENT :Environment;

    /**
     * This method represents the Zoho CRM Production environment in US domain
     * @returns {Environment} An instance of Environment
     */
    public static PRODUCTION(): Environment {
        if(this.PRODUCTION_ENVIRONMENT == null) {
            this.PRODUCTION_ENVIRONMENT = DataCenter.setEnvironment("https://www.zohoapis.com", new USDataCenter().getIAMUrl(), new USDataCenter().getFileUploadUrl());
        }

        return this.PRODUCTION_ENVIRONMENT;
    }

    /**
     * This method represents the Zoho CRM Sandbox environment in US domain
     * @returns {Environment} An instance of Environment
     */
    public static SANDBOX(): Environment {
        if(this.SANDBOX_ENVIRONMENT == null) {
            this.SANDBOX_ENVIRONMENT = DataCenter.setEnvironment("https://sandbox.zohoapis.com", new USDataCenter().getIAMUrl(), new USDataCenter().getFileUploadUrl());
        }

        return this.SANDBOX_ENVIRONMENT;
    }

    /**
     * This method represents the Zoho CRM Developer environment in US domain
     * @returns {Environment} An instance of Environment
     */
    public static DEVELOPER(): Environment {
        if(this.DEVELOPER_ENVIRONMENT == null) {
            this.DEVELOPER_ENVIRONMENT = DataCenter.setEnvironment("https://developer.zohoapis.com", new USDataCenter().getIAMUrl(), new USDataCenter().getFileUploadUrl());
        }

        return this.DEVELOPER_ENVIRONMENT;
    }

    public getIAMUrl() {
        return "https://accounts.zoho.com/oauth/v2/token";
    }

    public getFileUploadUrl(){
        return "https://content.zohoapis.com";
    }
}