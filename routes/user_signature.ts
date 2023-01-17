import { Constants } from '../utils/util/constants';

import { SDKException } from '../core/com/zoho/crm/api/exception/sdk_exception';
/**
 * This class represents the Zoho CRM User.
 */
export class UserSignature {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}