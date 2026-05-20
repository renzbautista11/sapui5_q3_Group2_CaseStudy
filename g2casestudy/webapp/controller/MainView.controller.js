sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.training.g2casestudy.controller.MainView", {
        onInit() {
        },

        onPressCreate: function () {
            this.getOwnerComponent().getRouter().navTo("RouteCreateView");
        }

    });
});