import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/home';
import Channel from '../pages/Channels/Channels';
import Watch from '../pages/Watch/Watch';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/channel' element={<Channel />}></Route>
      <Route path='/watch' element={<Watch />}></Route>
    </Routes>
  );
};

export { Router };
