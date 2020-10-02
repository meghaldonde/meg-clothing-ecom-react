import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyAZeyy0ZcQd4uliNfwaEf_MO_HVMpjGmu4",
    authDomain: "meg-clothing.firebaseapp.com",
    databaseURL: "https://meg-clothing.firebaseio.com",
    projectId: "meg-clothing",
    storageBucket: "meg-clothing.appspot.com",
    messagingSenderId: "208422510312",
    appId: "1:208422510312:web:aa01f2f903655e7450f35d"
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;