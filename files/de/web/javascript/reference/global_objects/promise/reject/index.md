---
title: Promise.reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/reject
---
{{JSRef}}Die **`Promise.reject(reason)`** Methode gibt ein `Promise` Objekt zurück, das mit dem angegebenen Grund **`reason`** abgelehnt wurde.

## Syntax

    Promise.reject(reason);

### Parameter

- reason
  - : Der Grund warum diese `Promise` abgelehnt wurde.

### Rückgabewerte

Ein {{jsxref("Promise")}}, das mit dem angegeben Grund abgelehnt wurde

## Beschreibung

Die statische `Promise.reject` Funktion gibt ein `Promise` zurück, das abgelehnt wurde. Für Debugging zwecke, sowie gezielte Fehlerverarbeitung ist es empfehlenswert, als `reason` eine `instanceof `{{jsxref("Error")}}. zu verwenden.

## Beispiele

### Verwendung der Promise.reject() Methode

```js
Promise.reject(new Error('fail')).then(function(error) {
  // nicht aufgerufen
}, function(error) {
  console.log(error); // Stacktrace
});
```

## Spezifikationen

| Specification                                                                        | Status                       | Comment                                 |
| ------------------------------------------------------------------------------------ | ---------------------------- | --------------------------------------- |
| {{SpecName('ES2015', '#sec-promise.reject', 'Promise.reject')}} | {{Spec2('ES2015')}}     | Initial definition in an ECMA standard. |
| {{SpecName('ESDraft', '#sec-promise.reject', 'Promise.reject')}} | {{Spec2('ESDraft')}} |                                         |

## Browserkompatibilität

{{Compat("javascript/promise","Promise.reject")}}

## Siehe auch

- {{jsxref("Promise")}}
- [Selective error catching using the BlueBird Promise library](https://github.com/petkaantonov/bluebird#error-handling)
