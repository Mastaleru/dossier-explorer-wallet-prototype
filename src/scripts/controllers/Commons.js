export default class Commons {
    static DELETE_ITEMS_PLACEHOLDER = "[DELETE_ITEMS_PLACEHOLDER]";

    /**
     * This method updates the error message for a model.
     * The model has to include a proxified object named "error", with at least two fields: "hasError" and "errorMessage".
     * These view-model attributes will be updated and reflected back to UI.
     * @param {Proxy} model - the model to be updated
     * @param {string} errorMsg - the error message that will be set inside the error model
     */
    static updateErrorMessage(model, errorMsg = '') {
        model.setChainValue('error.hasError', errorMsg !== '');
        model.setChainValue('error.errorMessage', errorMsg);
    }

    static validateSeedForm(SEED) {
        // Validate seed according to specifications
        return true;
    }
}