import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import { forgotPassSetPassTC } from '../../store/middlewares/forgotPassSetPassTC';
import {
  setErrorMessageNetworkAC,
  setErrorMessagePassAC,
} from '../../store/reducers/errorReducer';
import {
  getErrorNetworkMessage,
  getErrorValidMessage,
} from '../../store/selectors/confirmPassword';
import style from '../../style/Common.module.css';
import { Preloader } from '../preloader';

import { SetNewPassType } from 'api/forgotPasswordApi';
import { PATH, requestStatus } from 'enum';
import { useAppSelector } from 'hooks';
import { setAppStatusAC } from 'store/reducers';
import { getStatus } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { isPasswordValid } from 'utils';

export const CreateNewPassword = (): ReturnComponentType => {
  const [isLoadedData, setLoadedData] = useState(false);
  const [newPassword, setPassword] = useState('');

  const dispatch = useDispatch();

  const errorPassMessage = useAppSelector(getErrorValidMessage);
  const errorNetworkMessage = useAppSelector(getErrorNetworkMessage);
  const isLoading = useAppSelector(getStatus);

  /* const location = useLocation(); */

  const params = useParams<'token'>();
  const { token } = params as { token: string };

  /* const lastElement = 1;
  const partPath = location.pathname.split('/');
  const token = partPath[partPath.length - lastElement]; */
  console.log('token', token);

  const data: SetNewPassType = {
    password: newPassword,
    resetPasswordToken: token,
  };
  const onChangePasswordInputEnter = (e: any): void => {
    setPassword(e.currentTarget.value);
    dispatch(setErrorMessagePassAC(''));
    dispatch(setErrorMessageNetworkAC(''));
  };

  const onCreateButtonClick = (): void => {
    if (isPasswordValid(newPassword)) {
      dispatch(setAppStatusAC(requestStatus.loading));
      dispatch(forgotPassSetPassTC(data, setLoadedData));
      dispatch(setAppStatusAC(requestStatus.succeeded));
      setPassword('');
    } else {
      dispatch(setErrorMessagePassAC('invalid password ;-('));
    }
  };

  if (isLoadedData) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <div className={style.mainContainer}>
      {isLoading === 'loading' ? (
        <Preloader />
      ) : (
        <div className={style.content}>
          <div className={style.contentWrap}>
            <h2>Create new password</h2>
            {errorPassMessage && (
              <span style={{ color: 'red' }}> {errorPassMessage} </span>
            )}
            {errorNetworkMessage && (
              <span style={{ color: 'red' }}> {errorNetworkMessage} </span>
            )}
            <div className={style.inputCentering}>
              <input
                placeholder="Password"
                type="password"
                className={style.inputPassword}
                onChange={onChangePasswordInputEnter}
              />
            </div>
            <p> Create new password and we will send you further instructions to email</p>
            <div>
              <button className={style.btn} onClick={onCreateButtonClick}>
                Create new password
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
