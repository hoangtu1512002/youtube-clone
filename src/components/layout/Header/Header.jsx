import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faMicrophone, faVideoCamera, faBell } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '../../../assets/images/logo';
import { useStore, actions } from '../../../store';

const cx = classNames.bind(styles);

const Header = () => {
  const [state, distpatch] = useStore();
  return (
    <div className={cx('header')}>
      <div className={cx('header__left')}>
        <div className={cx('header__left-bars')} onClick={(e) => distpatch(actions.setSideBar(state))}>
          <FontAwesomeIcon className={cx('header__left-bars__icon')} icon={faBars}></FontAwesomeIcon>
        </div>
        <div className={cx('header__left-logo')}>
          <img src={images.logo} alt='' />
        </div>
      </div>
      <div className={cx('header__center')}>
        <div className={cx('header__center-search')}>
          <div className={cx('header__center-search__group')}>
            <input type='text' placeholder='Tìm kiếm' />
            <ul className={cx('header__center-search__suggest')}>
              <li>Quang linh vlog</li>
              <li>Quang linh vlog</li>
              <li>Quang linh vlog</li>
              <li>Quang linh vlog</li>
              <li>Quang linh vlog</li>
              <li>Quang linh vlog</li>
            </ul>
          </div>
          <button className={cx('header__center-search__btn')}>
            <FontAwesomeIcon
              className={cx('header__center-search__btn-icon')}
              icon={faMagnifyingGlass}
            ></FontAwesomeIcon>
          </button>
        </div>
        <div className={cx('header__center-search__mcr')}>
          <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
        </div>
      </div>
      <div className={cx('header__right')}>
        <div className={cx('header__right-renderer')}>
          <FontAwesomeIcon icon={faVideoCamera}></FontAwesomeIcon>
        </div>
        <div className={cx('header__right-noti')}>
          <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
        </div>
        <div className={cx('header__right-info')}>
          <nav className={cx('header__right-info__login')}>H</nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
