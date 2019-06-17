import firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDTq3qT4Rg9eNG4zZsgCRwc7Xew5dU0S-A",
  authDomain: "easy-recipes-f63d5.firebaseapp.com",
  databaseURL: "https://easy-recipes-f63d5.firebaseio.com",
  projectId: "easy-recipes-f63d5",
  storageBucket: "easy-recipes-f63d5.appspot.com",
  messagingSenderId: "633895486547",
  appId: "1:633895486547:web:cd6c942d71bef03d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();