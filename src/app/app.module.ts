import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "AIzaSyA0V-ZWEEtV4jzuoiiAvbrDXtGJ_SCq0qo",
  authDomain: "realtime-presence-61c8c.firebaseapp.com",
  databaseURL: "https://realtime-presence-61c8c.firebaseio.com",
  projectId: "realtime-presence-61c8c",
  storageBucket: "realtime-presence-61c8c.appspot.com",
  messagingSenderId: "783657477687",
  appId: "1:783657477687:web:2d2dc05db7433d5bb941b2",
  measurementId: "G-KLTTY7FV94"
};


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 3. Initialize FIREBASE
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
