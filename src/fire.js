import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDN3DzGrKVFQbduAiQZy5TjnLASTtoEOlo",
    authDomain: "vm2018-31ced.firebaseapp.com",
    databaseURL: "https://vm2018-31ced.firebaseio.com",
    projectId: "vm2018-31ced",
    storageBucket: "vm2018-31ced.appspot.com",
    messagingSenderId: "903343305656"
};
const fire = firebase.initializeApp(config)
export { fire }
