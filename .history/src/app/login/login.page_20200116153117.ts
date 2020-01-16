import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(public afAuth: AngularFireAuth, public user: UserService) { }

  ngOnInit() {
  }

  async login() {
    const { username, password } = this
    try {
        // A niche hack created with the '@gmail.com' on username
        const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@chyde.com', password)

        if(res.user) {
          this.user.setUser({
            username,
            uid: res.user.uid
          })
        }
    } catch(err) {
      console.dir(err)
      if(err.code === "auth/operation-not-allowed") {
        console.log("User not found")
      }
    }
  }

}
