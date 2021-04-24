	var config = {
    apiKey: "AIzaSyDeqh47ap41ajuoVJ2rWlvy5Dn_VtqkA-o",
    authDomain: "covidhelpbase.firebaseapp.com",
    databaseURL: "https://covidhelpbase-default-rtdb.firebaseio.com",
    projectId: "covidhelpbase",
    storageBucket: "covidhelpbase.appspot.com",
    messagingSenderId: "622436412535",
    appId: "1:622436412535:web:957247ee20cd488a64ea72",
    measurementId: "G-447S5PKE0H"
  };
   firebase.initializeApp(config);
	
	
	
	
	var CityV,PhoneNoV,AddressV,MessageV;
	function Ready(){
	CityV=document.getElementById('CityNameBox').value;
	//PhoneNoV=document.getElementById('PhoneNoBox').value;
	//AddressV=document.getElementById('AddressBox').value;
	//MessageV=document.getElementById('MessageBox').value;
	}
	
	
	document.getElementById('Submit').onclick = function(){
	Ready();
	firebase.database().ref('Data').set({
	//City :CityV
	//Phone :PhoneNoV
//	Address :AddressV
	//Message :MessageV
	
	});
	
	}