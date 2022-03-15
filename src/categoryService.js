import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDocs, orderBy, query } from "firebase/firestore"
import { categories } from "./stores";

const firebaseConfig = {
    apiKey: "AIzaSyBio4Ug5aHAzSDuk-MznChaIpIr2kJXPmI",
    authDomain: "drungers-b64c6.firebaseapp.com",
    projectId: "drungers-b64c6",
    storageBucket: "drungers-b64c6.appspot.com",
    messagingSenderId: "21154461583",
    appId: "1:21154461583:web:812819a7ad37d94cef3dfa"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore()

export async function getCategories() {
    const snapshot = await getDocs(collection(db, 'categories'))
    const map = snapshot.docs.map(doc => doc.data());

    map.forEach(category => {
        category.runs.forEach(run => {
            const timeStr = run.time
            const minSplit = timeStr.split(':')
            const secSplit = minSplit[1].split('.')

            const time = new Date(0)
            time.setMinutes(minSplit[0])
            time.setSeconds(secSplit[0])
            time.setMilliseconds(secSplit[1])

            run.time = time
        })
    });

    console.log(map);
    categories.set(map)
}