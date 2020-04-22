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
      apiKey: "AIzaSyBQGf9Sp1NOa9zk-_bXzVCHGGs5_xoiBxs",
      authDomain: "angularbooksfirebase.firebaseapp.com",
      databaseURL: "https://angularbooksfirebase.firebaseio.com",
      projectId: "angularbooksfirebase",
      storageBucket: "angularbooksfirebase.appspot.com",
      messagingSenderId: "1098894371725",
      appId: "1:1098894371725:web:d0f0b1aa5476ce8e1aabc4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
