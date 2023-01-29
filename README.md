# zen-store

An extremely simple react store works with React.useSyncExternalStore

## Install

```shell
npm i zen-store -S
```

## Usage

```jsx
import React, { useSyncExternalStore } from "react";
import ZenStore from 'zen-store';

const Store = new ZenStore(0);

function Button() {
    const handleClick = () => {
        Store.update(Store.getSnapshot() + 1)
    }
    return <button role="button" onClick={handleClick}>add</button>
}

function Counter() {
    const count = useSyncExternalStore(Store.subscribe.bind(Store), Store.getSnapshot.bind(Store));

    return <div role="counter">
        <i role="count">{count}</i>
        <Button />
    </div>
}
```