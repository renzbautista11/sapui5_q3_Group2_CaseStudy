sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
  "use strict";

  return Controller.extend("com.training.g2casestudy.controller.CreateView", {
    onInit: function () {
      // Memory-safe: only create if not existing (avoid duplicate models)
      if (!this.getView().getModel("vm")) {
        var oVM = new JSONModel({
          receivingPlant: "",
          deliveringPlant: "",
          products: [] // will be filled later
        });
        this.getView().setModel(oVM, "vm");
      }
    },

    onNavBack: function () {
      var oHistory = sap.ui.core.routing.History.getInstance();
      var sPrevHash = oHistory.getPreviousHash();

      if (sPrevHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getOwnerComponent().getRouter().navTo("RouteMainView", {}, true);
      }
    },

    onCancel: function () {
      this.onNavBack();
    },

    // Placeholders for next steps
    onValueHelpReceivingPlant: function () {},
    onValueHelpDeliveringPlant: function () {},
    onAddProduct: function () {},
    onDeleteProduct: function () {},
    onSave: function () {}
  });
});
