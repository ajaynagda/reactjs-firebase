import React, { Component } from 'react';
import Header from './Header';
import MessageList from './MessageList';
import firebase from 'firebase';
import MessageBox from './MessageBox';

class App extends Component {
	
constructor(props){
  super(props);
  
  var config = {
    apiKey: "AIzaSyD-RgAK3UR2NYCA3dcJWHWI6NhVKpuEJXk",
    authDomain: "reactfirebase-362e5.firebaseapp.com",
    databaseURL: "https://reactfirebase-362e5.firebaseio.com",
    projectId: "reactfirebase-362e5",
    storageBucket: "",
    messagingSenderId: "250794692444"
  };
  firebase.initializeApp(config);
  
}	
	
  render() {
    return (
      <div>
		<Header title="Simple Firebase App" />
        <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
        </div>
		
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageBox db={firebase} />
              </div>
            </div>
 
 
			
      </div>
    );
  }
}

export default App;