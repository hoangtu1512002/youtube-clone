import React from 'react';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import { useStore } from '../../../store';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const sideMenu = [
  {
    path: '/',
    name: 'Trang chủ',
    icon: faHouse,
  },
];

const Sidebar = () => {
  const [state] = useStore();

  return (
    <div className={cx('sidebar', state.sidebar ? '' : 'left')}>
      <ul className={cx('sidebar__list')}>
        {sideMenu.map((item, i) => (
          <li className={cx('sidebar__item')} key={i}>
            <NavLink
              className={cx('sidebar__link')}
              to={item.path}
              style={({ isActive }) => ({
                backgroundColor: isActive ? 'var(--bg-color)' : null,
              })}
            >
              <FontAwesomeIcon className='mr-6' icon={item.icon}></FontAwesomeIcon>
              {state.sidebar ? item.name : null}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
