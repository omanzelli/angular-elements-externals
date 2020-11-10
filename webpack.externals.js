const webpack = require("webpack");

module.exports = {
  "externals": {
    // Angular core
    "rxjs": "rxjs",
    "@angular/core": "ng.core",
    "@angular/common": "ng.common",
    "@angular/common/http": "ng.common.http",
    "@angular/platform-browser": "ng.platformBrowser",
    "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic",
    "@angular/compiler": "ng.compiler",
    "@angular/elements": "ng.elements",
    "@angular/forms": "ng.forms",
    "@angular/router": "ng.router",
    "@angular/animations": "ng.animations",
    "@angular/cdk": "ng.cdk",
    "@angular/localize": "ng.localize",

    //// Kendo dependencies
    //"@progress/kendo-angular-buttons": "progress.kendo-angular-buttons",
    //"@progress/kendo-angular-common": "progress.kendo-angular-common",
    //"@progress/kendo-angular-l10n": "progress.kendo-angular-l10n",
    //"@progress/kendo-angular-popup": "progress.kendo-angular-popup",
    //"@progress/kendo-angular-dateinputs": "progress.kendo-angular-dateinputs",
    //"@progress/kendo-angular-dialog": "progress.kendo-angular-dialog",
    //"@progress/kendo-angular-dropdowns": "progress.kendo-angular-dropdowns",
    //"@progress/kendo-angular-gauges": "progress.kendo-angular-gauges",
    //"@progress/kendo-angular-inputs": "progress.kendo-angular-inputs",
    //"@progress/kendo-angular-intl": "progress.kendo-angular-intl",
    //"@progress/kendo-angular-layout": "progress.kendo-angular-layout",
    //"@progress/kendo-angular-menu": "progress.kendo-angular-menu",
    //"@progress/kendo-angular-tooltip": "progress.kendo-angular-tooltip",
    //"@progress/kendo-data-query": "progress.kendo-data-query",
    //"@progress/kendo-drawing": "progress.kendo-drawing",
    //"@progress/kendo-theme-default": "progress.kendo-theme-default",

    // AgGrid
    //"@ag-grid-community/all-modules": "aggrid.community.all",
    //"ag-grid-angular": "aggrid.angular",
    //"ag-grid-community": "aggrid.community",
    //"ag-grid-enterprise": "aggrid.enterprise",

    //// DevExtreme
    //"devextreme": "devextreme",
    //"devextreme-angular": "devextreme.angular",

    //// Vidrio
    //"@vidrio/chip-multi-selection": "vidrio.chip-multi-selection",
    //"@vidrio/common-parameters-manager-library": "vidrio.common-parameters-manager-library",
    //"@vidrio/common-periods-library": "vidrio.common-periods-library",
    //"@vidrio/generic-drawer-splitter-component": "vidrio.generic-drawer-splitter-component",
    //"@vidrio/menu-and-box-system-components": "vidrio.menu-and-box-system-components",
    //"@vidrio/search-box": "vidrio.search-box",
    //"@vidrio/two-way-multi-selection": "vidrio.two-way-multi-selection"
  }
};
