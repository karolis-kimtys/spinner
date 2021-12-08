import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  spinner: any;
  rotationTime: string;
  rotationSteps: string;
  animationLength: string;
}

Spinner.defaultProps = {
  justifyContent: 'center',
  textVisible: true,
  spinnerVisible: true,
  loaderTitle: 'Loading...',
  fontSize: '16px',
  fontFamily: 'inherit',
  fontColor: 'black',
  spinnerWidth: '20px',
  spinnerHeight: '20px',
  margin: '0px',
  padding: '1em 0 1em 0',
  spinner: spinner,
  rotationTime: '1s',
  rotationSteps: '8',
  animationLength: 'infinite',
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
    padding: props.padding || '1em',
    margin: props.margin || '1em',
    color: props.fontColor || 'black',
  };

  const rotation: any = keyframes`
    to {
      transform: rotate(360deg);
    }
  `;

  const SpinnerStyle = styled.img`
    animation: ${rotation} ${props.rotationTime} steps(${props.rotationSteps})
      ${props.animationLength};
    width: ${props.spinnerWidth};
    height: ${props.spinnerHeight};
    margin-left: 5px;
  `;

  return (
    <div style={style}>
      {props.textVisible && props.loaderTitle}
      {props.spinnerVisible && <SpinnerStyle src={props.spinner} alt="" />}
    </div>
  );
}
