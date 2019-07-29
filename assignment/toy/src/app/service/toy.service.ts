import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Toy } from '../model/toy.model';

@Injectable({
  providedIn: 'root'
})
export class ToyService {

  url: any = 'http://localhost:4000/toys';

  constructor(private http: HttpClient) { }

  createToy(data: any) {

    const body = {
      name: data.name,
      description: data.description,
      cost: data.cost,
      photo: data.photo
    };
    return this.http.post(this.url + '/upload', body);
  }
}
