import GetData from './components/GetData';
import GetError from './components/GetError';
import GetLoading from './components/GetLoading';
import Spacer from './components/Spacer';
import './App.css';

function App() {
  return (
  <>
      <GetData/>
      <Spacer/>
      <GetError/>
      <Spacer/>
      <GetLoading/>
  </>
  );
}

export default App;
