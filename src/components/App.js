import React, {  PropTypes } from 'react';
import Header from './common/Header';
import { BrowserRouter } from 'react-router';

class App extends  React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header/>

        </div>
      </BrowserRouter>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };


export default App;
