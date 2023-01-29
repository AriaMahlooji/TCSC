import React from 'react';
//import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './SerchCard.css'


const SearchCard = props => { 
  return (
    <form >
      <div className={`${styles['form-control']}`}>
        <input placeholder='Enter Parcel Tracking Id' type="text"/>
      </div>
      <Button type="submit">Search Parcel</Button>
    </form>
  );
};

export default SearchCard;
