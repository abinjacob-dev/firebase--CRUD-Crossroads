import { Firebase } from "./firebase/config";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          Firebase.auth().createUserWithEmailAndPassword("abin@gmail.com", '123456')
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    // 
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
          // READ
          // Firebase.firestore()
          //   .collection("products")
          //   .get()
          //   .then((snapshot) => {
          //     snapshot.forEach((obj) => {
          //       console.log(obj.data(), obj.id);
          //     });
          //   });
          // CREATE
          // Firebase.firestore().collection('products').add({
          //   name : "MI",
          //   price:30
          // })
          // DELETE
          // Firebase.firestore().collection('products').doc('bYJuV2189evdPjPeKhjh').delete().then(()=>{
          //   console.log("Deleted")
          // })
          // // UPDATE
          // Firebase.firestore().collection('products').doc('Urig1LexnCNo8BY4AOU1').set({
          //   name:"Updated",
          //   price:21
          // })
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
