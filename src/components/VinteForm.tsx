import { ErrorBox } from './ErrorBox';
import { Car } from '../interfaces/cars';
import { emptyCar } from '../interfaces/cars';
import { useForm } from '../hooks/useForm';

interface IProps {
  setDate: Function;
  activeRecord: Car;
}

export const VinteForm: React.FC<IProps> = ({ setDate, activeRecord }) => {
  const { formState, handleChange, handleSubmit, error } = useForm(
    setDate,
    activeRecord,
    emptyCar,
    { dezenove: false, vinte: true }
  );

  return (
    <div>
      {error && <ErrorBox error={error} />}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ranking:</label>
          <input
            className="center"
            type="text"
            name="ranking"
            value={formState.ranking}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Model:</label>
          <input
            className="center"
            type="text"
            name="model"
            value={formState.model}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Units:</label>
          <input
            className="center"
            type="text"
            name="units"
            value={formState.units}
            onChange={handleChange}
          />
        </div>
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};
