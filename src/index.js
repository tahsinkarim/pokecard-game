import { Component } from "react";
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import Pokegame from './Pokegame';
class App extends Component {
  render() {
    return (
      <div>
        <Pokegame/>
      </div>
    );
  }
}
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App/>);
