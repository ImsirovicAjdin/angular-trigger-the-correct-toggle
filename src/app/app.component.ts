import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  public show: any[] = [];

  brands = [
    {
      name: 'Ford',
      cars: {
        first: {
          color: 'red',
          year: 2017, 
          model: 'Escort'
        } 
      }
    },
    {
      name: 'VW',
      cars: {
        first: {
          color: 'green',
          year: 2018,
          model: 'Polo'
        } 
      }
    }
  ];
}
