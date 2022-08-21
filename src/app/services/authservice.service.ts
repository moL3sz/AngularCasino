import { Injectable, NgZone } from '@angular/core';
import { User } from 'src/core/models/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  userData: any;
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      }
      else {
        localStorage.setItem('user', 'null');

      }
    })
  }

  async SignIn(email: string, password: string): Promise<boolean> {
    try {
      const result = await this.afAuth
        .signInWithEmailAndPassword(email, password);
      console.log(result.user)
      this.SetUserData(result.user);
      return true
    } catch (error) {

      return false
    }
  }
  SignUp(email: string, password: string, nickname: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        (result.user as unknown as User).nickname = nickname
        this.SetUserData(result.user);
      })
      .catch((error) => {
        console.error(error)

      });
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;

  }
  SetUserData(user: any) {
    try {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(
        `users/${user.uid}`
      );
      const userData: User = {
        uid: user.uid,
        email: user.email,
        nickname: user.nickname || '',
        avatar: user.avatar || ''
      };
      userRef.set(userData, {
        merge: true,
      });

    }
    catch (e) {
      console.log(e)
    }

  }

}
