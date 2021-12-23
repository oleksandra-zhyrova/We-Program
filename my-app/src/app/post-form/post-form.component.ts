
import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Post } from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  title = ''
  text = ''
  
  @Output() addPostUser: EventEmitter<Post> = new EventEmitter<Post>()

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
      if (this.text.trim() && this.title.trim()) {
        const post: Post = {
          title: this.title,
          text:  this.text
        }
        this.addPostUser.emit(post)

        console.log('Add Post: ',post)
        this.text = ''
        this.title = ''
      }
    }


myMouseClicked(){

}


onLoadDefault() {

}

 titleSearching = ''
 @Output() titleSearch = new EventEmitter<string>()

// onChangeSearch(change: string) {
//  this.titleSearch.emit(change)
// }

filterByTitle(change: string){
  console.log('filterByTitle: ',"title_____"+change)
  this.titleSearch.emit("title_____" + change)
}
filterByText(change: string){
  console.log('filterByText: ', "text______" + change)
  this.titleSearch.emit("text______"+change)
}
}
