import { Component, EventEmitter } from 'angular2/core';
import {Meal} from './meal.model';
import {MealComponent} from './meal.component';
import {EditMealComponent} from './edit-meal.component';
import {NewMealComponent} from './new-meal.component';
import {FilterHealthyPipe} from './health.pipe';

@Component({
  selector: 'meal-list',
  inputs:['mealList'],
  outputs:['onMealSelect'],
  pipes:[FilterHealthyPipe],
  directives:[MealComponent, EditMealComponent, NewMealComponent],
  template:`
    <select (change)="onChange($event.target.value)">
      <option value="all">Show all</option>
      <option value="healthy">healthy</option>
      <option value = "unhealthy">unhealthy</option>
    </select>

    <meal-display *ngFor="#currentMeal of mealList | filterHealthy:filter"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
    <edit-meal *ngIf="selectedMeal" [meal] = "selectedMeal">
    </edit-meal>
    <new-meal (onSubmitMeal)="addMealToList($event)"></new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filter: string="all";
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log("MealListComponent: " + clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  onChange(filterOption): void {
    this.filter = filterOption;
  }
  addMealToList(meal: Meal): void {
    console.log(this.mealList);
    this.mealList.push(meal);
    if(meal.calories <= 500){
      meal.isHealthy();

    }
  }
}
