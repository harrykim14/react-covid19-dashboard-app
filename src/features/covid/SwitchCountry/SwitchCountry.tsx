import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NativeSelect, FormControl } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { fetchAsyncGetCountry } from '../coivdSlice';

/* 
    @material-ui의 커스텀 스타일 정의법
    1. rafce 밖에서 스타일을 정의
    2. rafce 안에서 함수를 불러오기
    3. 해당 컴포넌트에서 style 적용
*/
const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320,
  },
}));

const SwitchCountry: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const countries = [
    'japan',
    'china',
    'korea, south',
    'us',
    'france',
    'italy',
    'spain',
    'united kingdom',
    'germany',
    'russia',
    'brazil',
    'taiwan',
    'thailand',
    'new zealand',
    'sweden',
    'india',
  ];

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          dispatch(fetchAsyncGetCountry(e.target.value))
        }
      >
          <option value="">WorldWide</option>
          {countries.map((country, idx) => (
              <option key={idx} value={country}>
                  {country}
              </option>
          ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCountry;
