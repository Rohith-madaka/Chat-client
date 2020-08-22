import React from 'react';
import './App.css';
import Chat from './components/Chat';
import ChatHistory from './components/ChatHistory'


function App() {
  return (
    <div>
      <Chat/>
      <ChatHistory/>
    </div> 
  );
}

export default App;
