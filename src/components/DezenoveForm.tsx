import { useState, useEffect } from 'react';
import axios from 'axios';
import { Dezenove } from './Dezenove';

// estado inicial do form vazio
const emptyDezenove: Dezenove = {
  ranking: '',
  model: '',
  units: '',
};

interface IProps {
  setDate: Function;
}

export const DezenoveForm: React.FC<IProps> = ({ setDate }) => {
  const [formState, setFormState] = useState(emptyDezenove);

  const Dezenove = async (dezenove: Dezenove) => {
    const result = await axios.post<Dezenove>(
      'http://localhost:4000/cars',
      dezenove
    );
  };

  const handleChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createDezenove(formState);
    setDate(+new Date());
    setFormState(emptyDezenove);
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
function createDezenove(formState: Dezenove) {
  throw new Error('Function not implemented.');
}
