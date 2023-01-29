import React, { useSyncExternalStore } from 'react';
import ZenStore from './index';
import { fireEvent, render, screen } from '@testing-library/react';

const CountStore = new ZenStore(0);

function Button() {
  const handleClick = () => {
    CountStore.update(CountStore.getSnapshot() + 1);
  };
  return (
    <button role="button" onClick={handleClick}>
      add
    </button>
  );
}

function Counter() {
  const count = useSyncExternalStore(
    CountStore.subscribe.bind(CountStore),
    CountStore.getSnapshot.bind(CountStore)
  );

  return (
    <div role="counter">
      <i role="count">{count}</i>
      <Button />
    </div>
  );
}

describe('<Counter />', () => {
  it('Counter should be rendered', async () => {
    render(<Counter />);
    const element = await screen.findByRole('counter');
    expect(element).toBeTruthy();
  });

  it('Button click should be handled to counter action', async () => {
    render(<Counter />);
    const button = await screen.findByRole('button');
    const count = await screen.findByRole('count');

    expect(count.textContent).toBe('0');

    fireEvent.click(button);

    expect(count.textContent).toBe('1');
  });
});
