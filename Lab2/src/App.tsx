import { useState } from 'react';
// import './App.css';  
import Header from './components/Header';
import Grocery from './components/Grocery';

// Define types
type Task = string;

interface GroceryType {
  title: string;
  id: number;
  tasks: Task[];
}

function App() {
  // Define state with proper typing
  const [groceries, setGroceries] = useState<GroceryType[]>([
    {
      title: 'Humber',
      tasks: ['Task 1', 'Task 2', 'Task 3'],
      id: 1,
    },
    {
      title: 'MERN',
      tasks: ['Lab', 'Project', 'Quiz'],
      id: 2,
    },
    {
      title: 'Java',
      tasks: ['Group Discussion', 'Exam', 'Assignment'],
      id: 3,
    },
  ]);

  let ol = () => {};

  return (
    <>
      <h1>{groceries.map((e)=>{
        return <Grocery title={e.title} id={e.id} quantity={e}/>
      })}</h1>
      <Header />
    </>
  );
}

export default App;
