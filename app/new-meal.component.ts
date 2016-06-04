import {Component, EventEmitter} from 'angular2/core';
import {Meal} from "./meal.model";


@Component({
  selector:'new-meal',
  outputs:['onSubmitMeal'],
  template:`
  <div id = "almonds" class="pics">
    <div id = "overlay">
      <img src="/resources/images/almonds.jpeg">

      <div class = "overlay-content">
        <div class = "inputs">
          <input placeholder="type" #type> <br>
          <input placeholder="description" #description> <br>
          <input placeholder="calories" #calories> <br>
          <button (click) = "addMeal(type, description, calories)">Add this meal</button>
        </div>
      </div>
    </div>
    <h3>Add a new meal to your journal</h3>
  </div>

`
})

export class NewMealComponent{
  public onSubmitMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitMeal = new EventEmitter();
  }

  addMeal(type: HTMLInputElement, description: HTMLInputElement, calories: HTMLInputElement) {
    var newMeal = new Meal(type.value, description.value, parseInt(calories.value));
    this.onSubmitMeal.emit(newMeal);
    type.value="";
    description.value="";
    calories.value="";
  }

}
