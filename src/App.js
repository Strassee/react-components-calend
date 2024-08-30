import Calendar from './Calendar';
import './App.css';

function App() {
  const now = new Date(2024, 1, 28);
  return (
    <Calendar date={now} />
  );
}

export default App;
