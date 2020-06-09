import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DishService {
	
  constructor() { }
	
  getDishes(): Promise<Dish[]> {
	  //return Promise.resolve(DISHES);
	  return of(DISHES).pipe(delay(2000)).toPromise();
  }
  
  getDish(id: string): Promise<Dish> {
	  //return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]
	  return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000)).toPromise();
  }
	
  getFeaturedDish(): Promise<Dish> {
	  //return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
	  return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000)).toPromise();
  }
}
