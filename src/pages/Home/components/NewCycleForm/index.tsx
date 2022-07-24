import { useFormContext } from 'react-hook-form';
import { FormContainer, MinutesAmountInpupt, TaskInput } from './styles';

export function NewCycleForm() {
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1"></option>
        <option value="Projeto 2 "></option>
        <option value="Projeto 3"></option>
        <option value="Projeto 4"></option>
        <option value="Banana"></option>
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInpupt
        type="number"
        id="minutesAmount"
        placeholder="00"
        min={1}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
