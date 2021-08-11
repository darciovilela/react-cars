import { useState, useEffect } from 'react';
import axios from 'axios';
import { Vinte } from './Vinte';

// estado inicial do form vazio
const emptyVinte: Vinte = {
  ranking: '',
  model: '',
  units: '',
};

interface IProps {
  setDate: Function;
}

export const VinteForm: React.FC<IProps> = ({ setDate }) => {
  const [formState, setFormState] = useState(emptyVinte);

  const Vinte = async (vinte: Vinte) => {
    const result = await axios.post<Vinte>('http://localhost:4000/cars', vinte);
  };

  const handleChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createVinte(formState);
    setDate(+new Date());
    setFormState(emptyVinte);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ranking:</label>
          <input
            className="center"
            type="text"
            name="year"
            value={formState.ranking}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Model:</label>
          <input
            className="center"
            type="text"
            name="champion"
            value={formState.model}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Units:</label>
          <input
            className="center"
            type="text"
            name="vice"
            value={formState.units}
            onChange={handleChange}
          />
        </div>
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};
function createVinte(formState: Vinte) {
  throw new Error('Function not implemented.');
}
