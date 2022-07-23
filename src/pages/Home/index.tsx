import { Play } from 'phosphor-react';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInpupt,
  Separator,
  StartcontdownButton,
  TaskInput,
} from './styles';

export function Home() {
  const { register, handleSubmit, watch } = useForm();

  function handleCreateNewCycle(data) {
    // event.preventDefault();
  }

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
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
            step={10}
            min={10}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartcontdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartcontdownButton>
      </form>
    </HomeContainer>
  );
}
