import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  //
  "/personajes"?: {};
  "/info"?: {};
  //
  "/page404"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<any>;
}