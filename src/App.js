import Calendar from './Calendar';
import './App.css';

function App() {
  // const now = new Date(2025, 0, 27);
  const date = new Date();
  const now = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return (
    <Calendar date={now} />
  );
}

export default App;
