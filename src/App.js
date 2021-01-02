import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-desktop-dark.jpg)`, backgroundRepeat: 'no-repeat' }}>
      <Todo />
    </div>
  );
}

export default App;
