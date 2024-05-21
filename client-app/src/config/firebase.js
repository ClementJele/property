// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAuwDO3C5bxDJD8VXL5D2trjvMTDIpmtng',
  authDomain: 'property-2b885.firebaseapp.com',
  projectId: 'property-2b885',
  storageBucket: 'property-2b885.appspot.com',
  messagingSenderId: '1008509952812',
  appId: '1:1008509952812:web:18f606bee587304f164289'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
