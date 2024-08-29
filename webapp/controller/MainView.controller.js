//La funcion sap.ui.define tiene dos argumentos.
//El primero es un array con dependencias para incorporar en la instancia del controlador
//El segundo  es el codigo con la función que devuelve la instancia del controlador
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
//La funcion recibe como parámetro el Controller que se cargó en la dependencia
function (Controller) {
    "use strict";

    //Dentro de onInit va la lógica
    return Controller.extend("dbtrust.invoices.controller.MainView", {
        onInit: function () {

        }
    });
});
