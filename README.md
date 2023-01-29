# zen-store

<img align="right" width="92" height="92" title="zen"
     src="https://user-images.githubusercontent.com/37395391/215339187-0aefcfe1-8ac8-46ff-a1f7-a2f59d451a75.png">

[![NPM version](https://img.shields.io/npm/v/@jasonpang/zen-store)](https://www.npmjs.com/package/@jasonpang/zen-store)

An extremely simple react store works with React.useSyncExternalStore

* Zero dependency.

## Install

```shell
npm i @jasonpang/zen-store -S
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
