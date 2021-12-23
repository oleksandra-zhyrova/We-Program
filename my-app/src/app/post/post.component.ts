import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post = 
  {

  title:"", 
  text:"", 
  id: -1
} 

 @Output() postid: EventEmitter<number> = new EventEmitter<number>()
 removePost() {
 this.postid.emit(this.post.id)
 } 

 constructor() { }

 ngOnInit(): void { }
}
