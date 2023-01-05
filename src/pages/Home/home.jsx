import React from 'react';
import classNames from 'classnames/bind';

import styles from './home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const items = [
  {
    imgPath:
      'https://i.ytimg.com/vi/iDNW6byjx8k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZwaz53d18ZvzqjRTIUKKW-3TeJw',
    time: '1:10:10',
    logoChanel:
      'https://yt3.ggpht.com/Sgw7QBQkILCIIerBLkaK6i2mdp_NZiXyRGOYBugH2bIpPXvIHU-1wk_MVXmuyC8sImhbxXkUwJg=s68-c-k-c0x00ffffff-no-rj',
    title: 'Hello mọi người',
    nameChanel: 'Bùi Hoàng Tú',
    view: '30tr lượt xem',
    date: '4 năm trước',
  },
  {
    imgPath:
      'https://i.ytimg.com/vi/iDNW6byjx8k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZwaz53d18ZvzqjRTIUKKW-3TeJw',
    time: '1:10:10',
    logoChanel:
      'https://yt3.ggpht.com/Sgw7QBQkILCIIerBLkaK6i2mdp_NZiXyRGOYBugH2bIpPXvIHU-1wk_MVXmuyC8sImhbxXkUwJg=s68-c-k-c0x00ffffff-no-rj',
    title: 'Hello mọi người',
    nameChanel: 'Bùi Hoàng Tú',
    view: '30tr lượt xem',
    date: '4 năm trước',
  },
  {
    imgPath:
      'https://i.ytimg.com/vi/iDNW6byjx8k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZwaz53d18ZvzqjRTIUKKW-3TeJw',
    time: '1:10:10',
    logoChanel:
      'https://yt3.ggpht.com/Sgw7QBQkILCIIerBLkaK6i2mdp_NZiXyRGOYBugH2bIpPXvIHU-1wk_MVXmuyC8sImhbxXkUwJg=s68-c-k-c0x00ffffff-no-rj',
    title: 'Hello mọi người',
    nameChanel: 'Bùi Hoàng Tú',
    view: '30tr lượt xem',
    date: '4 năm trước',
  },
  {
    imgPath:
      'https://i.ytimg.com/vi/iDNW6byjx8k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZwaz53d18ZvzqjRTIUKKW-3TeJw',
    time: '1:10:10',
    logoChanel:
      'https://yt3.ggpht.com/Sgw7QBQkILCIIerBLkaK6i2mdp_NZiXyRGOYBugH2bIpPXvIHU-1wk_MVXmuyC8sImhbxXkUwJg=s68-c-k-c0x00ffffff-no-rj',
    title: 'Hello mọi người',
    nameChanel: 'Bùi Hoàng Tú',
    view: '30tr lượt xem',
    date: '4 năm trước',
  },
  {
    imgPath:
      'https://i.ytimg.com/vi/iDNW6byjx8k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZwaz53d18ZvzqjRTIUKKW-3TeJw',
    time: '1:10:10',
    logoChanel:
      'https://yt3.ggpht.com/Sgw7QBQkILCIIerBLkaK6i2mdp_NZiXyRGOYBugH2bIpPXvIHU-1wk_MVXmuyC8sImhbxXkUwJg=s68-c-k-c0x00ffffff-no-rj',
    title: 'Hello mọi người',
    nameChanel: 'Bùi Hoàng Tú',
    view: '30tr lượt xem',
    date: '4 năm trước',
  },
  {
    imgPath:
      'https://i.ytimg.com/vi/iDNW6byjx8k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZwaz53d18ZvzqjRTIUKKW-3TeJw',
    time: '1:10:10',
    logoChanel:
      'https://yt3.ggpht.com/Sgw7QBQkILCIIerBLkaK6i2mdp_NZiXyRGOYBugH2bIpPXvIHU-1wk_MVXmuyC8sImhbxXkUwJg=s68-c-k-c0x00ffffff-no-rj',
    title: 'Hello mọi người',
    nameChanel: 'Bùi Hoàng Tú',
    view: '30tr lượt xem',
    date: '4 năm trước',
  },
  {
    imgPath:
      'https://i.ytimg.com/vi/iDNW6byjx8k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZwaz53d18ZvzqjRTIUKKW-3TeJw',
    time: '1:10:10',
    logoChanel:
      'https://yt3.ggpht.com/Sgw7QBQkILCIIerBLkaK6i2mdp_NZiXyRGOYBugH2bIpPXvIHU-1wk_MVXmuyC8sImhbxXkUwJg=s68-c-k-c0x00ffffff-no-rj',
    title: 'Hello mọi người',
    nameChanel: 'Bùi Hoàng Tú',
    view: '30tr lượt xem',
    date: '4 năm trước',
  },
  {
    imgPath:
      'https://i.ytimg.com/vi/iDNW6byjx8k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZwaz53d18ZvzqjRTIUKKW-3TeJw',
    time: '1:10:10',
    logoChanel:
      'https://yt3.ggpht.com/Sgw7QBQkILCIIerBLkaK6i2mdp_NZiXyRGOYBugH2bIpPXvIHU-1wk_MVXmuyC8sImhbxXkUwJg=s68-c-k-c0x00ffffff-no-rj',
    title: 'Hello mọi người',
    nameChanel: 'Bùi Hoàng Tú',
    view: '30tr lượt xem',
    date: '4 năm trước',
  },
  {
    imgPath:
      'https://i.ytimg.com/vi/iDNW6byjx8k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZwaz53d18ZvzqjRTIUKKW-3TeJw',
    time: '1:10:10',
    logoChanel:
      'https://yt3.ggpht.com/Sgw7QBQkILCIIerBLkaK6i2mdp_NZiXyRGOYBugH2bIpPXvIHU-1wk_MVXmuyC8sImhbxXkUwJg=s68-c-k-c0x00ffffff-no-rj',
    title: 'Hello mọi người',
    nameChanel: 'Bùi Hoàng Tú',
    view: '30tr lượt xem',
    date: '4 năm trước',
  },
  {
    imgPath:
      'https://i.ytimg.com/vi/iDNW6byjx8k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZwaz53d18ZvzqjRTIUKKW-3TeJw',
    time: '1:10:10',
    logoChanel:
      'https://yt3.ggpht.com/Sgw7QBQkILCIIerBLkaK6i2mdp_NZiXyRGOYBugH2bIpPXvIHU-1wk_MVXmuyC8sImhbxXkUwJg=s68-c-k-c0x00ffffff-no-rj',
    title: 'Hello mọi người',
    nameChanel: 'Bùi Hoàng Tú',
    view: '30tr lượt xem',
    date: '4 năm trước',
  },
];

const home = () => {
  return (
    <div className={cx('home')}>
      <div className={cx('home__list')}>
        {items.map((item, index) => (
          <div className={cx('home__item')} key={index}>
            <div className={cx('home__item-thumb')}>
              <img src={item.imgPath} alt='' />
              <div className={cx('home__item-thumb-time')}>{item.time}</div>
            </div>
            <div className={cx('home__item__wrapper')}>
              <Link to='/channel'>
                <img src={item.logoChanel} alt='' />
              </Link>
              <div className={cx('home__item__wrapper-info')}>
                <h1 className={cx('home__item__wrapper-title')}>{item.title}</h1>
                <Link to='/channel'>
                  <p className={cx('home__item__wrapper-chanel')}>{item.nameChanel}</p>
                </Link>
                <nav>
                  <p className={cx('home__item__wrapper-view')}>{item.view}</p>
                  <p className={cx('home__item__wrapper-date')}>{item.date}</p>
                </nav>
              </div>
              <nav className={cx('home__item__wrapper-icon')}>
                <FontAwesomeIcon
                  className={cx('home__item__wrapper-icon--icon')}
                  icon={faEllipsisVertical}
                ></FontAwesomeIcon>
              </nav>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default home;
