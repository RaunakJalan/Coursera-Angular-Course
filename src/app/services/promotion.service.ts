import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
//import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private  http: HttpClient) { }
  
  getPromotions(): Observable<Promotion[]> {
	  //return Promise.resolve(PROMOTIONS);;
	  return this.http.get<Promotion[]>(baseURL + 'promotions');
  }
  
  getPromotion(id: string): Observable<Promotion> {
	  //return Promise.resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]);
	  return this.http.get<Promotion>(baseURL + 'promotions/' + id);
 }
	
  getFeaturedPromotion(): Observable<Promotion> {
	  //return Promise.resolve(PROMOTIONS.filter((promo) => promo.featured)[0]);
	  return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotion => promotion[0]));
  }
	  
}
