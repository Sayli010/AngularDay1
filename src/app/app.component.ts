import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title =  'This is two way data binding';
  heading = "This is string interpollation";
  isDisabled = true;

  onSave(){
    // this.isDisabled  = !this.isDisabled;
    this.isDisabled == true ? this.isDisabled = false : this.isDisabled =  true;
  }
}
