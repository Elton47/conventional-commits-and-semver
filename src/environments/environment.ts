// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { environmentCommon } from "src/environments/environment.common";

export const environment = {
  ...environmentCommon, // Override any common environment variable values down below (inside this object `...{`), i.e.: `cacheStorage: sessionStorage` and/or add additional environment-specific properties
  cacheStorage: sessionStorage
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
