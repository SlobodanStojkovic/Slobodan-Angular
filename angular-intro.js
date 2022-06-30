/* 
Angular is a JavaScript Framework which allows you to create reactive Single-Page-Applications (SPAs).

ANGULAR Versioning
- AngularJS (Angular 1)
- Angular 2 (completely Re-Writen)
- Angular 4 (Angular 3 was skipped)
- Angular 10, 11, 12, ... > New version every 6 months, but is very backward compatible

TO START
install Angular CLI - a command line interface for Angular
To install first project `ng new my-first-angular-app --no-strict`

The first code that is being executed is the code inside src/app/main.ts

CREATING NEW COMPONENTS
Manually - create new folder inside app folder and inside of it component-name.component.ts file which will contain inside it:

import { Component } from "@angular/core"

// this is decorator with configuration
@Component({
  selector: "app-warning-alert",
  template:`<p>THis is a worning</p>` OR templateURL: with url to "./warning-alert.component.html",
  styleUrls: ["./warning-alert.component.css"]
})
export class ComponentNameComponent {

}

and in app.component.html insert <app-warning-alert></app-warning-alert>
in app.module.ts we need to add in declarations array our new Component and import it at top

CREATE NEW COMPONENTS via Angular CLI
In terminal we run `ng generate component component-name` or short `ng g c component-name`, then we output them in app.component.html


*/
