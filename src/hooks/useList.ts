import { useEffect, useState } from 'react';
import axios from 'axios';
import { Car } from '../interfaces/cars';

// inicio do estado com array vazio
export const useList = (emptyCar: Car, urlParams: string) => {
  const [car, setCar] = useState<Car[]>([]);
  const [date, setDate] = useState(+new Date());
  const [activeRecord, setActiveRecord] = useState<Car>(emptyCar);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  // componentDidMount or variable date was changed
  useEffect(() => {
    const callFetchFunction = async () => {
      try {
        setLoading(true);
        setError(undefined);
        const result = await axios.get<Car[]>(
          `http://localhost:4000/cars?${urlParams}`
        );
        setCar(result.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    callFetchFunction();
  }, [date, urlParams]);

  const deleteCar = async (car: Car) => {
    await axios.delete<Car>(`http://localhost:4000/cars/${car.id}`);
    setDate(+new Date());
  };

  return {
    car,
    setDate,
    activeRecord,
    setActiveRecord,
    deleteCar,
    loading,
    error,
  };
};
