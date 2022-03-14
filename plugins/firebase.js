import Firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!Firebase.apps.length) {
  Firebase.initializeApp({
    apiKey: "AIzaSyAbOsI_xlYTxILfJlsrgpE0L_4WrVoO9qU",
    authDomain: "mychat-e5961.firebaseapp.com",
    projectId: "mychat-e5961",
    storageBucket: "mychat-e5961.appspot.com",
    messagingSenderId: "587819432384",
    appId: "1:587819432384:web:b5db76ce9b9e1b520f3025",
    measurementId: "G-FYGWST7MX6"
  });
}

export default (context, inject) => {
  const $fb = {
    app: Firebase.app,
    auth: Firebase.auth,
    firestore: Firebase.firestore,
  }
  inject('fb',$fb)
}






