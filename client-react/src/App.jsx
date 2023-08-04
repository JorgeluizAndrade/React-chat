import { useState } from 'react'
import './App.css'
import AuthPage from './components/AuthPage'
import ChatPage from './components/ChatPage'

function App() {
  const [user, setUser] = useState()
  return !user ? (
    <AuthPage onAuth={(user) => setUser(user)} />
  ) : (
    <ChatPage user={user} />
  );
  }
  
export default App
