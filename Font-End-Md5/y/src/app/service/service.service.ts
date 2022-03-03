import { Injectable } from '@angular/core';
import {Books} from "../model/Books";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  showBooks: Books[] =[];


  constructor(private http:HttpClient) {
  }

  findAll(): Observable<Books[]>{
    return  this.http.get<Books[]>('http://localhost:3000/books')
  }

  findById(id:number): Observable<Books>{
    return  this.http.get<Books>('http://localhost:3000/books/'+id)
  }
  //
  delete(id:number): Observable<void>{
    return  this.http.delete<void>(`http://localhost:3000/books/${id}`)
  }
  //
  create(t: Books): Observable<any> {
    console.log(t)
    return  this.http.post('http://localhost:3000/books',t)
  }
  //
  updateBook(bookCreate: Books):Observable<any> {
    return this.http.put('http://localhost:3000/books/'+bookCreate.id, bookCreate)
  }
  //
  showDetails(id: number):Observable<Books> {
    return  this.http.get<Books>('http://localhost:3000/books/'+id)
  }
}
