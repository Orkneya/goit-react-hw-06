import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./components/counter/counter";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("tasks"));
    if (savedData) {
      return savedData;
    }
    return contacts;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [searchItem, setSearchItem] = useState("");
  const delateTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Counter />
      <ContactForm onAdd={addTask} />
      <SearchBox seachItem={searchItem} onChange={setSearchItem} />
      <ContactList contacts={visibleTasks} onDelete={delateTask} />
    </div>
  );
}

export default App;
