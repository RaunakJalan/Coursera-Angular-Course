import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  
  getPromotions(): Promise<Promotion[]> {
	  //return Promise.resolve(PROMOTIONS);;
	  return of(PROMOTIONS).pipe(delay(2000)).toPromise();
  }
  
  getPromotion(id: string): Promise<Promotion> {
	  //return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
	  return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe(delay(2000)).toPromise();
 }
	
  getFeaturedPromotion(): Promise<Promotion> {
	  //return Promise.resolve(PROMOTIONS.filter((promo) => promo.featured)[0]);
	  return of(PROMOTIONS.filter((lead) => lead.featured)[0]).pipe(delay(2000)).toPromise();
  }
	  
}
