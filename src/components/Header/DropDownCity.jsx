import sprite from '../../assets/symbol-defs.svg';
import { useState } from 'react';
import React from 'react';
import Select from 'react-select';

import '../Header/DropDownCity.module.css';
import css from '../Header/DropDownCity.module.css';
// import './react-select.scss';

export const DropDownCity = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCity, setCurrentCity] = useState('');

  const handleDropDown = () => {
    setIsOpen(!isOpen);

    console.log(isOpen);
    // console.log('object');
    // const x = document.getElementById('cityDropDown');
    // console.log(x);
    // document.getElementById('cityDropDown').classList.toggle('show');
  };

  const options = [
    { value: 'Dubai', label: 'Dubai' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Budapest', label: 'Budapest' },
    { value: 'Berlin', label: 'Berlin' },
  ];

  const getValue = () => {
    return currentCity ? options.find(c => c.value === currentCity) : '';
  };

  const onChange = newValue => {
    setCurrentCity(newValue.value);
  };

  const customStyles = {
    control: provided => ({
      ...provided,
      backgroundColor: '#313131',
      border: 'none',
      color: '#ffffff',
      ':hover': {
        borderColor: 'none',
      },
      width: '150px',
      padding: '10px',
      borderRadius: '14px',
    }),
    menue: provided => ({
      ...provided,
      backgroundColor: '#313131',
      fontSize: '15px',
      fontWeight: '500',
      lineHeight: '50px',
      borderColor: 'transparent',
      ':hover': {
        borderColor: 'transparent',
      },
      borderRadius: '14px',
    }),

    menuList: provided => ({
      ...provided,
      backgroundColor: '#424242',
      borderRadius: '14px',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? '#525252'
        : state.isFocused
        ? '#616161'
        : '#424242',
      color: state.isSelected ? '#33b7bc' : 'white',
      fontSize: '15px',
      fontWeight: '500',
      lineHeight: '20px',
      cursor: 'pointer',
      ':hover': {
        color: '#33b7bc',
      },
    }),
    singleValue: provided => ({
      ...provided,
      color: 'white',
    }),
    placeholder: provided => ({
      ...provided,
      display: 'none',
      color: 'white',
    }),
    indicatorSeparator: () => ({
      display: 'none', // Скрываем разделитель индикатора выбора
    }),
    indicator: provided => ({
      ...provided,
      display: 'none',
    }),
    // Добавьте другие стили, если необходимо
  };

  const customDropdownIndicator = props => {
    return (
      <div {...props}>
        <svg width="10px" height="10px">
          <use xlinkHref={sprite + '#icon-Group-3'}></use>
        </svg>
      </div>
    );
  };
  return (
    <div className={css.div}>
      <button type="button" className={css.btn} onClick={handleDropDown}>
        <svg width="10px" height="10px">
          <use xlinkHref={sprite + '#icon-Group-3'}></use>
        </svg>
      </button>
      <Select
        // className={css.dropDownList}
        classNamePrefix="custom-select"
        options={options}
        value={getValue()}
        onChange={onChange}
        styles={customStyles}
        components={{ DropdownIndicator: customDropdownIndicator }}
      />
      {/* <ul
        id="cityDropDown"
        className={isOpen === true ? css.show : css.dropDownList}
      >
        <li className={css.dropdownContent}>Dubai</li>
        <li className={css.dropdownContent}>Paris</li>
        <li className={css.dropdownContent}>Budapest</li>
        <li className={css.dropdownContent}>Berlin</li>
      </ul> */}
    </div>
  );
};
