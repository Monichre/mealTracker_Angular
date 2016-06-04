import {Meal} from './meal.model';
import { Component, EventEmitter } from 'angular2/core';


@Component({
  selector: 'meal-display',
  inputs:['meal'],
  template:`
    <h3>{{meal.type}}</h3>
      <li>Description: {{meal.description}}</li>
      <li>Calories: {{meal.calories}}</li>`
})

export class MealComponent{
  public meal: Meal;
}
