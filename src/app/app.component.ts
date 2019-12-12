import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    vamsi="krishna";
    subbu=""
  title = 'myapp1';
  call(){
  this.subbu="shiney"

  }
}
