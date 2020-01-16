import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController
    ) { }

  ngOnInit() {
  }

  async register() {
    const { username, password, cpassword } =  this
    if(password !== cpassword) {
      return console.error("Passwords don't match")
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@chyde.com', password)
      console.log(res)
    } catch(error) {
      console.dir(error)
    }
    
  }

  async showAlert() {
    const alert = this.alert.create({
      header,
      message,
      buttons: ["Ok"]
    })

    await alert.present
  }

}
