const Record = (props) => {
  const {data, onDel} = props;

  const onDelRecord = () => {
      onDel(data.id);
  }

  return (
      <div className="Record">
          <span className="Widget-Date">{data.date}</span>
          <span className="Widget-Dist">{data.dist}</span>
          <div className="Widget-Actions">
              <button className="Edit">✎</button>
              <button className="Delete" onClick={onDelRecord}>✘</button>
          </div>
      </div>
  )
}

export default Record;