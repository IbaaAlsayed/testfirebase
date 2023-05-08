const firebaseConfig = {
    apiKey: "AIzaSyA9tChet-P5HLtlFz84Kw6qRE1whayv1Fk",
    authDomain: "testapp-firse.firebaseapp.com",
    databaseURL: "https://testapp-firse-default-rtdb.firebaseio.com",
    projectId: "testapp-firse",
    storageBucket: "testapp-firse.appspot.com",
    messagingSenderId: "1078815303349",
    appId: "1:1078815303349:web:7160d5fd13bd1abbd080fc"
  };
  firebase.initializeApp(firebaseConfig);
  var formdp=firebase.database().ref('testapp');
  document.getElementById('testapp').addEventListener("submit",submitform);
  function submitform(e){
    e.preventDefault();
    var fname=getElementVal('fname');
    var mname=getElementVal('mname');
    var lname=getElementVal('lname');
    savemsg(fname,mname,lname);
  }
const savemsg=(fname,mname,lname)=>{
  var contact=formdp.push();
  contact.set({
    fname: fname,
    mname: mname,
    lname: lname,

  });
};
  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  };
  const dbRef = firebase.database().ref();
  dbRef.child("users").child(fname).get().then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  