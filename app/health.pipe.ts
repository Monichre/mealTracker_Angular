import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "filterHealthy",
  pure: false
})

export class FilterHealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredDoneState = args[0];
    if(desiredDoneState === "healthy") {
      return input.filter(function(meal) {
        return meal.healthy=== true;
      });
    } else if (desiredDoneState === "unhealthy") {
      return input.filter(function(meal) {
        return meal.healthy === false;
      });
    } else {
      return input;
    }
  }
}
