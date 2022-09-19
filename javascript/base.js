
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCG4K-GewaQQ5fx8PXl1JsSLAmKPLAQs3M",
    authDomain: "sibe-f91dd.firebaseapp.com",
    projectId: "sibe-f91dd",
    storageBucket: "sibe-f91dd.appspot.com",
    messagingSenderId: "187458115385",
    appId: "1:187458115385:web:323fb34c8f4adacda13ae8",
    measurementId: "G-K5Z40ENF7M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
