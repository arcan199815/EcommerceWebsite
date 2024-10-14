import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestingService {
  //http : HttpClient | undefined;
  constructor(private http : HttpClient) { }

  userSignUp(data:any){
    console.warn("service call");
  }
}
