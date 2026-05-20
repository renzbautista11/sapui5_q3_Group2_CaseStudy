sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("com.training.g2casestudy.controller.CreateView", {

        onNavBack: function () {
            this.getOwnerComponent().getRouter().navTo("RouteMainView");
        }

    });
});