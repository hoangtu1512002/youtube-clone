import React from 'react';
import classNames from 'classnames/bind';
import styles from './Watch.module.scss';

const cx = classNames.bind(styles);

const Watch = () => {
  return (
    <div className={cx('watch', 'grid', 'grid-cols-3', 'gap-10')}>
      <div className={cx('watch__content', 'col-span-2', 'h-9', 'bg-slate-600')}></div>
      <div className={cx('watch__suggest', 'h-9', 'bg-slate-700')}></div>
    </div>
  );
};

export default Watch;
