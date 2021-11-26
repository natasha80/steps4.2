import Record from "./Record";

const TrainingList = (props) => {
    const { records, onDelete } = props;
    const sorted = records.sort((a, b) =>  b.dateFormat - a.dateFormat);
    const onDelHandler = (id) => {
        onDelete(id);
    }

    return (
        <div className="TrainingList">
            <div className="List-Header">
                <span>Дата (ДД.ММ.ГГ)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </div>
            <div className="List-Table">
                {sorted.map(record => <Record key={record.id} data={record} onDel={onDelHandler} />)}
            </div>
        </div>
    )
}

export default TrainingList;