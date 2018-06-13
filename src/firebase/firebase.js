import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyDN3DzGrKVFQbduAiQZy5TjnLASTtoEOlo",
  authDomain: "vm2018-31ced.firebaseapp.com",
  databaseURL: "https://vm2018-31ced.firebaseio.com",
  projectId: "vm2018-31ced",
  storageBucket: "vm2018-31ced.appspot.com",
  messagingSenderId: "903343305656"
};

const devConfig = {
  apiKey: "AIzaSyDN3DzGrKVFQbduAiQZy5TjnLASTtoEOlo",
  authDomain: "vm2018-31ced.firebaseapp.com",
  databaseURL: "https://vm2018-31ced.firebaseio.com",
  projectId: "vm2018-31ced",
  storageBucket: "vm2018-31ced.appspot.com",
  messagingSenderId: "903343305656"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
