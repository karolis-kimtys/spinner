import Spinner from './Spinner';

export default function App() {
  return (
    <div>
      <Spinner
        loaderTitle="Loading....."
        fontSize="50px"
        position="center"
        fontColor="blue"
        spinnerWidth="50px"
        spinnerHeight="50px"
        fontFamily="inherit"
      />
    </div>
  );
}
