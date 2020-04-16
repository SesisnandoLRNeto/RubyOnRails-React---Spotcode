import  React, { Fragment } from 'react';
import Routes from './routes';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/common/menu';
 
const App = () => {
  return(
    <Fragment>
      <BrowserRouter>
        <Menu/>
        <Routes/>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;