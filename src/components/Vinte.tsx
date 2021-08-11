import { useState, useEffect } from 'react';
import axios from 'axios';
import { VinteForm } from './VinteForm';

export interface Vinte {
  id?: string;
  ranking: string;
  model: string;
  units: string;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const Vinte = () => {
  const [vinte, setVinte] = useState<Vinte[]>([]);
  const [date, setDate] = useState(+new Date());

  // componentDidMount or variable date was changed
  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Vinte[]>('http://localhost:4000/cars');
      setVinte(result.data);
    };
    callFetchFunction();
  }, [date]);

  if (!vinte.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>Best Selling in 2019</h1>
      <VinteForm setDate={setDate} />
      <table className="center">
        <thead className="dezenove-table-head">
          <tr>
            <th>Ranking</th>
            <th>Model</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody className="dezenove-table-body">
          {vinte.map((item) => {
            return (
              <tr>
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
