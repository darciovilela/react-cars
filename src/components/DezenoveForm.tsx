import { Car } from '../interfaces/cars';
import { emptyCar } from '../interfaces/cars';
import { useForm } from '../hooks/useForm';

interface IProps {
  setDate: Function;
  activeRecord: Car;
}

export const DezenoveForm: React.FC<IProps> = ({ setDate, activeRecord }) => {
  const { formState, handleChange, handleSubmit } = useForm(
    setDate,
    activeRecord,
    emptyCar,
    { dezenove: true, vinte: false }
  );

  return (
    <div>
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
