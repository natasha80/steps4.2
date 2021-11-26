import { useState } from 'react';
import './App.css';
import TrainingForm from "./components/TrainingForm";
import TrainingList from "./components/TrainingList";
import { nanoid } from "nanoid";

function App() {
    const [records, setRecords] = useState([]);
    const onAddRecord = (date, dist) => {
        const isExist = records.find((el, i, arr) => {
            if (el.date === date) {
                arr[i].dist = Number(arr[i].dist) + Number(dist);
                return true;
            } else {
                return false;
            }
        });
        if (isExist) {
            setRecords(prevRecords => [...prevRecords]);
        } else {
            setRecords(prevRecords => [...prevRecords, {
                id: nanoid(),
                date: date,
                dist: dist,
                dateFormat: new Date(date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'))
            }]);
        }
    }

    const onDeleteHandler = (id) => {
        setRecords(prevRecords => prevRecords.filter(record => record.id !== id ));
    }

    return (
        <div className="App">
            <TrainingForm onAdd={onAddRecord} />
            {records.length > 0 ? <TrainingList records={records} onDelete={onDeleteHandler} /> : null }
        </div>
    );
}

export default App;