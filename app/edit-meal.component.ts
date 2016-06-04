import { Component, EventEmitter } from 'angular2/core';
import {Meal} from "./meal.model";

@Component({
  selector: 'edit-meal',
  inputs: ['meal'], //coming from parent
  template: `
  <div class = "meal-form">
    <h3>Edit your meal information:</h3>
      <input [(ngModel)]="meal.type"/> <br>
      <input [(ngModel)]="meal.description"/> <br>
      <input [(ngModel)]="meal.calories"/> <br>
  </div>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
