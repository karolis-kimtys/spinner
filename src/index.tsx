import React from 'react';
import { keyframes } from 'styled-components';

import spinner from './spinner.svg';

interface Props {
  position?: any;
  fontColor?: string;
  spinnerWidth?: string;
  spinnerHeight?: string;
  loaderTitle?: string | number;
  display?: string;
  alignItems?: string;
  fontSize?: string;
  fontFamily?: string;
  padding?: string;
  margin?: string;
  color?: string;
  textVisible: boolean;
  spinnerVisible: boolean;
}

Spinner.defaultProps = {
  justifyContent: 'center',
  textVisible: true,
  spinnerVisible: true,
  loaderTitle: 'Loading...',
  fontSize: '16px',
  fontFamily: 'inherit',
  fontColor: 'black',
  spinnerWidth: '25px',
  spinnerHeight: '25px',
};

export default function Spinner(props: Props) {
  const pos: any = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  const style = {
    display: 'flex',
    justifyContent: pos[props.position] || 'center',
    alignItems: 'center',
    fontSize: props.fontSize || '16px',
    fontFamily: props.fontFamily || 'inherit',
    padding: 0,
    margin: '1em',
    color: props.fontColor || 'black',
  };

  const rotation: any = keyframes`
    to {
      transform: rotate(360deg);
    }
  `;

  const spinnerStyle = {
    marginLeft: '5px',
    animation: `rotation 1s steps(8, end) infinite`,
    width: props.spinnerWidth || '25px',
    height: props.spinnerHeight || '25px',
  };

  return (
    <div style={style}>
      {props.textVisible && props.loaderTitle}
      {props.spinnerVisible && (
        <img src={spinner} alt="" style={spinnerStyle} />
      )}
    </div>
  );
}
