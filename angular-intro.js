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


DATA BINDING

String Interpolation ({{ data }})
Property Binding ([property]="data")
Event Binding ((event)="expression")
Two-Way-Binding ([(ngModel)]="data")

For Two-Way-Binding to work we need to enable ngModel directive. This is done by adding the FormsModule to the imports[] array in the AppModule. We then also have to add the import from @angular/forms in the app.module.ts file. import { FormsModule } from "@angular/forms"

==========
DIRECTIVES are INSTRUCTIONS in the DOM. Components are directives with a template. 
==========

Custom directive:
<p appTurnGreen>Recieves a green background!</p>

@Directive({
  selector: "[appTurnGreen]"
})
export class TurnGreenDirective {
  ...
}

The ngIf Directive (star is required because ngIf is a structural directive, it changes the structure of our DOM, it either adds the element or not)
<p *ngIf="serverCreated; else noServer"<Server was created, server name is {{ serverName }} </p>

<ng-template #noServer> <p>No server was created! </p> </ng-template>   where # is local reference to add paragraph conditionally


STYLING ELEMENTS DYNAMICLY with ngStyle
========================================
<p [ngStyle]="{backgroundColor: getColor()}" [ngClass]="{online: serverStatus === "online"}"> {{ "Server "}} with ID {{ serverId }} is {{ getServerSTatus() }} </p>

ngClass only adds CSS class if a certain condition is true > Built in ATTRIBUTE DIRECTIVE


OUTPUTING LISTS with ngFor
===========================
<app-server *ngFor="let server of servers"></app-server>
*/
