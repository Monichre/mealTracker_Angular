export class Meal {
  public healthy: boolean = false;
  constructor(public type: string, public description: string, public calories: number){

  }

  isHealthy(){
    this.healthy = true;
  }


}
