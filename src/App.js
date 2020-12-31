import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <div className="app" style={{ backgroundImage: "url(/images/bg-desktop-dark.jpg)", backgroundRepeat: 'no-repeat' }}>
      <Todo />
    </div>
  );
}

export default App;
