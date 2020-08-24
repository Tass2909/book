import { Component } from '@angular/core';
import * as firebase from 'firebase';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyAmgKCVlWhK7heDVihE5VJUJvrExAL9CoQ",
      authDomain: "book-520ec.firebaseapp.com",
      databaseURL: "https://book-520ec.firebaseio.com",
      projectId: "book-520ec",
      storageBucket: "book-520ec.appspot.com",
      messagingSenderId: "448487367802",
      appId: "1:448487367802:web:136747a3a955d840e4c7c3",
      measurementId: "G-V82XV2527D"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
