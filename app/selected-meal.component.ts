import { Component, EventEmitter } from 'angular2/core';
import {Meal} from "./meal.model";

@Component({
  selector: 'selectedCD',
  inputs: ['meal'], //coming from parent
  template: `
     <!--<input *ngIf="CD.store" type="checkbox" checked (click)="toggleStore(false)"/>
     <input *ngIf="!CD.store" type="checkbox" (click)="toggleStore(true)"/> -->
      <h3>{{meal.type}}</h3>
      <li>{{meal.description}}</li>
      <li>{{meal.calories}}</li>
  `
})

export class selectedMealComponent {
  public meal: Meal;

  constructor() {
  }


}
