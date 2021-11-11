import spinner from './spinner.svg';

interface Props {
  position?: any;
  fontColor?: string;
  spinnerWidth?: string;
  spinnerHeight?: string;
  loaderTitle?: string | number;
  display?: string;
  alignItems?: string;
  fontSize?: string | undefined;
  fontFamily?: string;
  padding?: number;
  margin?: string;
  color?: string | undefined;
}

export default function Spinner(props: Props) {
  const pos: any = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  const style = {
    display: 'flex',
    justifyContent: pos[props.position],
    alignItems: 'center',
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
    padding: 0,
    margin: '1em',
    color: props.fontColor,
  };

  const spinnerStyle = {
    marginLeft: '5px',
    width: props.spinnerWidth,
    height: props.spinnerHeight,
  };

  return (
    <div style={style}>
      {props.loaderTitle}
      <img src={spinner} alt="" style={spinnerStyle} />
    </div>
  );
}
