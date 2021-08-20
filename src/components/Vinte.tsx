import { VinteForm } from './VinteForm';
import { ErrorBox } from './ErrorBox';
import { emptyCar } from '../interfaces/cars';
import { useList } from '../hooks/useList';

// inicio do estado com array vazio
export const Vinte = () => {
  const {
    car,
    activeRecord,
    setActiveRecord,
    setDate,
    deleteCar,
    loading,
    error,
  } = useList(emptyCar, 'vinte=true');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) return <ErrorBox error={error} />;

  return (
    <div>
      <h1>Best Selling in 2020</h1>
      <button onClick={() => setActiveRecord(emptyCar)}>Insert New</button>
      <VinteForm setDate={setDate} activeRecord={activeRecord} />
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
