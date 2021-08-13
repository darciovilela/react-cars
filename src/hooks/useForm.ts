import { useState, useEffect } from 'react';
import axios from 'axios';
import { Car, CarFlags, emptyCar } from '../interfaces/cars';

export const useForm = (
  setDate: Function,
  activeRecord: Car,
  emptyChampionship: Car,
  formParams: CarFlags
) => {
  const [formState, setFormState] = useState(activeRecord);

  useEffect(() => {
    setFormState(activeRecord);
  }, [activeRecord]);

  const createCar = async (car: Car) => {
    await axios.post<Car>('http://localhost:4000/cars', {
      ...car,
      ...formParams,
    });
  };

  const updateCar = async (car: Car) => {
    await axios.patch<Car>(`http://localhost:4000/cars/${car.id}`, car);
  };

  const handleChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (formState.id) {
      await updateCar(formState);
    } else {
      await createCar(formState);
    }
    setDate(+new Date());
    setFormState(emptyCar);
  };

  return { formState, handleChange, handleSubmit };
};
