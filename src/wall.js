import { getFirestore, collection, query, getDocs } from "./lib/store.js";
import { initializeApp } from "./lib/app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJFFgAGrhQR0M3s_GU7Fpn73BEtJBczGM",
  authDomain: "mock-test-58b99.firebaseapp.com",
  projectId: "mock-test-58b99",
  storageBucket: "mock-test-58b99.appspot.com",
  messagingSenderId: "459838310938",
  appId: "1:459838310938:web:cfe979f75194ab534c9fa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const paintPost = () => {
  const q = query(collection(db, "posts"));

  getDocs(q).then((querySnapshot) => {

    const container = document.getElementById('food');
    container.innerHTML = '';

    querySnapshot.forEach((doc) => {
      const post = doc.data();
      console.log(post)
      container.innerHTML += `<div class="w3-quarter">
  <img src="/w3images/sandwich.jpg" alt="Sandwich" style="width:100%">
  <h3>${post.title}</h3>
  <p>${post.description}</p>
  </div>`;
    });

  })
}

window.addEventListener('load', paintPost);