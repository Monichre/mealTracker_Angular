import { Component, EventEmitter } from 'angular2/core';
import {MealListComponent} from './meal-list.component';
import {Meal} from './meal.model';

@Component ({
  selector: 'my-app',
  directives:[MealListComponent],
  template:`
  <div class = "content">
    <h1>Meal Tracker</h1>
    <h2>An every day food journal for your fatass</h2>
    <meal-list
      [mealList] = "meals"
      (onMealSelect)="mealWasSelected($event)">
    </meal-list>
  </div>
  `
})


export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal('spaghetti', 'bolognese', 400),
      new Meal('Prime Rib', 'mashed potatoes and asparagus', 1000),
      new Meal('Hamburger', 'no cheese or mayo', 600)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log("parent");
  }
}
