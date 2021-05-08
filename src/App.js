import './App.css';
import './components/User';
import User from './components/User';

//Render içinde User'ı çağırıyoruz. User da Card'ı çağırıyor.

function App() {
  return (
    <div className="App-header">
        <p>
          Bekleyenler
        </p>
        <User/>
    </div>

  );
}

export default App;
