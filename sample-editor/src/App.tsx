import React from 'react'

import { FirebaseAuth, signInWithRedirect, signOut, useFirebaseAuth } from './components/FirebaseAuth';

const Content: React.FC = () => {
  const { userId, userName } = useFirebaseAuth()
  return (
    <div>
      {userName} ({userId}) is signedIn
    </div>
  )
}

const App: React.FC<{ history: History}> = ({ history }) => {
  const NotSignedIn = React.useCallback(() => {
    return <button onClick={() => signInWithRedirect()}>signIn</button>
  }, []);
  const Loading = React.useCallback(() => {
    return <div>loading now...</div>;
  }, []);
  
  return (
    <FirebaseAuth NotSignedIn={NotSignedIn} Loading={Loading}>
      <button onClick={signOut}>sign out</button>
    </FirebaseAuth>
  )
};

export default App;
