import './App.scss';
import Css from './page/Css';
import Image from './page/Image';
import Home from './page/Home';

import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';
import Router from './page/Router';
import Stateprops from './page/Stateprops';
import GitDeploy from './page/GitDeploy';

function App() {
  return (
    <BrowserRouter basename='/r-basic'>
    <div className="wrap">
      <header>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="/css">css활용</Link>
          <Link to="/img">img 활용</Link>
          <Link to="/router" state='a100'>router(패이지이동)</Link>
          <Link to="/props">State&props</Link>
          <Link to="/gitDeploy">Github Deploy</Link>
        </nav>
      </header>

      <main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/css' element={<Css/>} />
        <Route path='/img' element={<Image/>} />
        <Route path='/props' element={<Stateprops data ='33333' name='props'/>} />
        <Route path='/router' element={<Router/>} />
        <Route path='/gitDeploy' element={<GitDeploy/>} />
      </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
} 
export default App;
