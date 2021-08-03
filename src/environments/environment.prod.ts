import { environmentCommon } from "src/environments/environment.common";

export const environment = {
  ...environmentCommon, // Override any common environment variable values down below, i.e.: `production: true` and/or add additional environment-specific properties
  production: true
};
