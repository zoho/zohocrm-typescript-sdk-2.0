"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Territory = exports.MasterModel = void 0;
class Territory {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the id
     * @returns A bigint representing the id
     */
    getId() {
        return this.id;
    }
    /**
     * The method to set the value to id
     * @param id A bigint representing the id
     */
    setId(id) {
        this.id = id;
        this.keyModified.set("id", 1);
    }
    /**
     * The method to get the name
     * @returns A string representing the name
     */
    getName() {
        return this.name;
    }
    /**
     * The method to set the value to name
     * @param name A string representing the name
     */
    setName(name) {
        this.name = name;
        this.keyModified.set("name", 1);
    }
    /**
     * The method to get the subordinates
     * @returns A boolean representing the subordinates
     */
    getSubordinates() {
        return this.subordinates;
    }
    /**
     * The method to set the value to subordinates
     * @param subordinates A boolean representing the subordinates
     */
    setSubordinates(subordinates) {
        this.subordinates = subordinates;
        this.keyModified.set("subordinates", 1);
    }
    /**
     * The method to check if the user has modified the given key
     * @param key A string representing the key
     * @returns A number representing the modification
     */
    isKeyModified(key) {
        if (this.keyModified.has(key)) {
            return this.keyModified.get(key);
        }
        return null;
    }
    /**
     * The method to mark the given key as modified
     * @param key A string representing the key
     * @param modification A number representing the modification
     */
    setKeyModified(key, modification) {
        this.keyModified.set(key, modification);
    }
}
exports.MasterModel = Territory;
exports.Territory = Territory;
//# sourceMappingURL=territory.js.map