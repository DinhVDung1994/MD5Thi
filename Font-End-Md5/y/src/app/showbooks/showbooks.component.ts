import { Component, OnInit } from '@angular/core';
import {Books} from "../model/Books";
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-showbooks',
  templateUrl: './showbooks.component.html',
  styleUrls: ['./showbooks.component.css']
})
export class ShowbooksComponent implements OnInit {
  p:number =1;
  showBooks: Books[] =[];
  showBook:Books = new Books(0, '', '', '')

  constructor(private bookService:ServiceService) {
  }

  findAll(){
    this.bookService.findAll().subscribe((data) =>{
      this.showBooks = data;
      console.log('Data---',data)
    })
  }

  ngOnInit(): void {
    this.findAll();
  }

  DeleteBook(id: number) {
    this.bookService.delete(id).subscribe(()=>{
      alert("Delete Successfully!")
      this.findAll();
    })
  }
  //
  showEdit(t: Books) {
    this.bookService.findById(t.id).subscribe((data)=>{
      this.showBook = data
    })
  }
  //
  CreateBook(t: Books) {
    this.bookService.create(t).subscribe(() =>{
      alert("Create Successfully!")
      this.resetInput()
      this.findAll();
    })
  }
  //
  UpdateBook(bCreate: Books) {
    this.bookService.updateBook(bCreate).subscribe((data) =>{
      alert("Update Successfully!")
      this.resetInput()
      this.findAll();

    })
  }
  resetInput(){
    this.showBook =new Books(0, '', '', '')
  }
  //
  showDetails(t: Books) {
    this.bookService.findById(t.id).subscribe((data)=>{
      this.showBook = data
    })
  }

}
