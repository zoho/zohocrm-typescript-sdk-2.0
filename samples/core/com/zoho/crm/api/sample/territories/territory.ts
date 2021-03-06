import { TerritoriesOperations } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/territories/territories_operations";
import { APIException } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/territories/api_exception";
import { ResponseHandler } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/territories/response_handler";
import { ResponseWrapper } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/territories/response_wrapper";
import { Territory } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/territories/territory";
import { APIResponse } from "@zohocrm/typescript-sdk-2.0/routes/controllers/api_response";
import { User } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/users/user";
import { Criteria } from "@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/custom_views/criteria";
export class Territories {

	/**
	 * <h3> Get Territories </h3>
	 * This method is used to get the list of territories enabled for your organization and print the response.
	 */
	public static async getTerritories() {

		//Get instance of TerritoriesOperations Class
		let territoriesOperations: TerritoriesOperations = new TerritoriesOperations();

		//Call getTerritories method
		let response: APIResponse<ResponseHandler> = await territoriesOperations.getTerritories();

		if (response != null) {

			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

				return;
			}

			//Get object from response
			let responseObject: ResponseHandler = response.getObject();

			if (responseObject != null) {

				//Check if expected ResponseWrapper instance is received 
				if (responseObject instanceof ResponseWrapper) {

					//Get the array of obtained Territory instances
					let territories: Territory[] = responseObject.getTerritories();

					territories.forEach(territory => {

						//Get the CreatedTime of each Territory
						console.log("Territory CreatedTime: " + territory.getCreatedTime());

						//Get the ModifiedTime of each Territory
						console.log("Territory ModifiedTime: " + territory.getModifiedTime());

						//Get the manager User instance of each Territory
						let manager: User = territory.getManager();

						//Check if manager is not null
						if (manager != null) {
							//Get the Name of the Manager
							console.log("Territory Manager User-Name: " + manager.getName());

							//Get the ID of the Manager
							console.log("Territory Manager User-ID: " + manager.getId());
						}

						//Get the ParentId of each Territory
						console.log("Territory ParentId: " + territory.getParentId());

						// Get the Criteria instance of each Territory
						let criteria: Criteria = territory.getCriteria();

						//Check if criteria is not null
						if (criteria != null) {
							this.printCriteria(criteria);
						}

						//Get the Name of each Territory
						console.log("Territory Name: " + territory.getName());

						//Get the modifiedBy User instance of each Territory
						let modifiedBy: User = territory.getModifiedBy();

						//Check if modifiedBy is not null
						if (modifiedBy != null) {
							//Get the Name of the modifiedBy User
							console.log("Territory Modified By User-Name: " + modifiedBy.getName());

							//Get the ID of the modifiedBy User
							console.log("Territory Modified By User-ID: " + modifiedBy.getId());
						}

						//Get the Description of each Territory
						console.log("Territory Description: " + territory.getDescription());

						//Get the ID of each Territory
						console.log("Territory ID: " + territory.getId());

						//Get the createdBy User instance of each Territory
						let createdBy: User = territory.getCreatedBy();

						//Check if createdBy is not null
						if (createdBy != null) {
							//Get the Name of the createdBy User
							console.log("Territory Created By User-Name: " + createdBy.getName());

							//Get the ID of the createdBy User
							console.log("Territory Created By User-ID: " + createdBy.getId());
						}
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof APIException) {
					//Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					//Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

					console.log("Details");

					//Get the details map
					let details: Map<string, any> = responseObject.getDetails();

					if (details != null) {
						Array.from(details.keys()).forEach(key => {
							console.log(key + ": " + details.get(key));
						});
					}

					//Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
			}
		}
	}

	/**
	 * <h3> Get Territory </h3>
	 * This method is used to get the single territory and print the response.
	 * @param territoryId The ID of the Territory to be obtainted
	 */
	public static async getTerritory(territoryId: bigint) {

		//example
		//let territoryId = 34096430505351n;

		//Get instance of TerritoriesOperations Class
		let territoriesOperations: TerritoriesOperations = new TerritoriesOperations();

		//Call getTerritory method that takes territoryId as parameter
		let response: APIResponse<ResponseHandler> = await territoriesOperations.getTerritory(territoryId);

		if (response != null) {

			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

				return;
			}

			//Get object from response
			let responseObject: ResponseHandler = response.getObject();

			if (responseObject != null) {

				//Check if expected ResponseWrapper instance is received 
				if (responseObject instanceof ResponseWrapper) {

					//Get the array of obtained Territory instances
					let territories: Territory[] = responseObject.getTerritories();

					territories.forEach(territory => {

						//Get the CreatedTime of each Territory
						console.log("Territory CreatedTime: " + territory.getCreatedTime());

						//Get the ModifiedTime of each Territory
						console.log("Territory ModifiedTime: " + territory.getModifiedTime());

						//Get the manager User instance of each Territory
						let manager: User = territory.getManager();

						//Check if manager is not null
						if (manager != null) {
							//Get the Name of the Manager
							console.log("Territory Manager User-Name: " + manager.getName());

							//Get the ID of the Manager
							console.log("Territory Manager User-ID: " + manager.getId());
						}

						//Get the ParentId of each Territory
						console.log("Territory ParentId: " + territory.getParentId());

						// Get the Criteria instance of each Territory
						let criteria: Criteria = territory.getCriteria();

						//Check if criteria is not null
						if (criteria != null) {
							this.printCriteria(criteria);
						}

						//Get the Name of each Territory
						console.log("Territory Name: " + territory.getName());

						//Get the modifiedBy User instance of each Territory
						let modifiedBy: User = territory.getModifiedBy();

						//Check if modifiedBy is not null
						if (modifiedBy != null) {
							//Get the Name of the modifiedBy User
							console.log("Territory Modified By User-Name: " + modifiedBy.getName());

							//Get the ID of the modifiedBy User
							console.log("Territory Modified By User-ID: " + modifiedBy.getId());
						}

						//Get the Description of each Territory
						console.log("Territory Description: " + territory.getDescription());

						//Get the ID of each Territory
						console.log("Territory ID: " + territory.getId());

						//Get the createdBy User instance of each Territory
						let createdBy: User = territory.getCreatedBy();

						//Check if createdBy is not null
						if (createdBy != null) {
							//Get the Name of the createdBy User
							console.log("Territory Created By User-Name: " + createdBy.getName());

							//Get the ID of the createdBy User
							console.log("Territory Created By User-ID: " + createdBy.getId());
						}
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof APIException) {
					//Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					//Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

					console.log("Details");

					//Get the details map
					let details: Map<string, any> = responseObject.getDetails();

					if (details != null) {
						Array.from(details.keys()).forEach(key => {
							console.log(key + ": " + details.get(key));
						});
					}

					//Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
			}
		}
	}

	private static async printCriteria(criteria: Criteria) {
		if (criteria.getComparator() != null) {
			console.log("Territory Criteria Comparator: " + criteria.getComparator().getValue());
		}

		if (criteria.getField() != null) {
			console.log("Territory Criteria Field: " + criteria.getField());
		}

		if (criteria.getValue() != null) {
			console.log("Territory Criteria Value: " + criteria.getValue().toString());
		}

		let criteriaGroup: Criteria[] = criteria.getGroup();

		if (criteriaGroup != null) {
			criteriaGroup.forEach(eachCriteria => {
				this.printCriteria(eachCriteria);
			});
		}

		if (criteria.getGroupOperator() != null) {
			console.log("Territory Criteria Group Operator: " + criteria.getGroupOperator().getValue());
		}
	}
}