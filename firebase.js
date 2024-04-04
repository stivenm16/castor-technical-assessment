// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB2HBts2TkFyBcdvKeH0OTPtVHxAd108bg',
  authDomain: 'castor-back.firebaseapp.com',
  projectId: 'castor-back',
  storageBucket: 'castor-back.appspot.com',
  messagingSenderId: '321485138191',
  appId: '1:321485138191:web:8fdaa165dca138ff43b67a',
  measurementId: 'G-KNFSP02H6L',
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db, app }
