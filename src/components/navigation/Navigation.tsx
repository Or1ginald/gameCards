import React from 'react';

import { NavLink } from 'react-router-dom';

import { appNavigation } from '../../constants';

import style from './Navigation.module.css';

import { ReturnComponentType } from 'types';

export const Navigation = (): ReturnComponentType => (
  <div className={style.nav}>
    <div className={style.wrap}>
      <div className={style.navList}>
        {appNavigation.map(({ id, title, link }) => (
          <NavLink className={style.listItem} to={link} key={id}>
            <div className={style.navElement}>{title}</div>
          </NavLink>
        ))}
      </div>
    </div>
  </div>
);
