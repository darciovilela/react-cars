import { DezenoveForm } from './DezenoveForm';
import { emptyCar } from '../interfaces/cars';
import { useList } from '../hooks/useList';

export const Dezenove = () => {
  const {
    car,
    setDate,
    activeRecord,
    setActiveRecord,
    deleteCar,
    loading,
    error,
  } = useList(emptyCar, 'dezenove=true');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div>
      <h1>Best Selling in 2019</h1>
      <button onClick={() => setActiveRecord(emptyCar)}>Insert New</button>
      <DezenoveForm setDate={setDate} activeRecord={activeRecord} />
      <table className="center">
        <thead className="table-head">
          <tr>
            <th>E</th>
            <th>X</th>
            <th>Ranking</th>
            <th>Model</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {car.map((item) => {
            return (
              <tr
                key={item.id}
                className={activeRecord === item ? 'active' : ''}
              >
                <td>
                  <button
                    onClick={() => {
                      setActiveRecord(item);
                    }}
                  >
                    E
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteCar(item)}>X</button>
                </td>
                <td>{item.ranking}</td>
                <td>{item.model}</td>
                <td>{item.units}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
