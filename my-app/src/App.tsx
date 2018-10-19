import * as React from 'react';
import { Blogs } from './components/Blogs';
import { ConnectedForm } from './components/ConnectedForm';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ConnectedForm />
        <Blogs />
      </div>
    );
  }
}

export default App;
