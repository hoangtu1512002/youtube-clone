import classNames from 'classnames/bind';

import Header from './components/layout/Header/Header';
import Sidebar from './components/layout/Sidebar/Sidebar';
import { Router } from './router';
import styles from './App.scss';

import { useStore } from './store';

const cx = classNames.bind(styles);

function App() {
  const [state] = useStore();

  return (
    <div className={cx('container')}>
      <Header></Header>

      <div className={cx('wrapper')}>
        <div>
          <Sidebar></Sidebar>
        </div>
        <div className={cx('content', state.sidebar ? '' : 'full')}>
          <Router></Router>
        </div>
      </div>
    </div>
  );
}

export default App;
