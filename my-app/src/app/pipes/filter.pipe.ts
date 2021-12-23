import { Pipe, PipeTransform } from '@angular/core';
import { Post } from "../app.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

transform(post: Post[], titleSearch: string): Post[] {


    if(!titleSearch.trim())
    {
      return post
    } 


console.log('__search_0 = ', titleSearch)

var str = titleSearch.substring(10, titleSearch.length);
console.log('__search_1= ', str)

if(titleSearch.startsWith("title_____"))
{
      return post.filter(item=> {
        return item.title.toLowerCase().includes(str.toLowerCase())
      })
}
else if (titleSearch.startsWith("text______"))
{
return post.filter(item=> {
        return item.text.toLowerCase().includes(str.toLowerCase())
      })
}

return post

}

}
