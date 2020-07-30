# adblock-detector-hook

React hook to detect ad blockers.

## simple usage

```tsx
import { useAdBlockDetector } from 'adblock-detector-hook';

export const YourComponent = () => {
  const { detected } = useAdBlockDetector();

  return <div>AdBlocker Detected: {JSON.stringify(detected)}</div>;
};
```

## lazy detection

By default, this hook checks for the presence of adblocker when mounting components.

If you want to disable this feature and detect it when you need it, use the `lazy` option and the `check` function.

`detected` will be `false` until the `check` function is executed.

```tsx
import { useAdBlockDetector } from 'adblock-detector-hook';

export const YourComponent = () => {
  const { detected, check } = useAdBlockDetector({ lazy: true });

  return (
    <>
      <button onClick={check}>Check AdBlocker</button>
      <div>AdBlocker Detected: {JSON.stringify(detected)}</div>
    </>
  );
};
```

## detection logics

if the `HEAD` request to `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js` fails, it is determined that AdBlocker exists.

Note that this hook will not work if the browser is offline (always the `detected` value is set to `false`)
