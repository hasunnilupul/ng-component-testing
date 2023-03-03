import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  posts:Array<Post>=[
    {id:1, title: "Toggle variable", icon: "toggle_on", url: "light-switch"},
    {id:1, title: "Event Listening", icon: "ads_click", url: "event-listen"}
  ];

}

interface Post{
  id: Number;
  title:String;
  icon: String;
  url: String;
}
