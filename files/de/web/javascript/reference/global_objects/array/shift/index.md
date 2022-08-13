---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/shift
---
{{JSRef}}

Die Methode **`shift()`** entfernt das **erste** Element eines Arrays und gibt dieses Element zurück. Diese Methode verändert die Länge des Arrays.

{{EmbedInteractiveExample("pages/js/array-shift.html")}}

## Syntax

    arr.shift()

### Rückgabewert

Das vom Array entfernte Element; {{jsxref("undefined")}} wenn das Array leer ist.

## Beschreibung

Die Methode `shift` entfernt das Element an der nullten Stelle, verschiebt die übrigen Elemente um einen Index nach unten und gibt den Wert des entfernten Elementes zurück. Ist die {{jsxref("Array.length", "length")}} Eigenschaft gleich 0, wird {{jsxref("undefined")}} zurückgegeben.

`shift` ist absichtlich generisch; diese Methode kann auf Array ähnlichen Objekten mit {{jsxref("Function.call", "call", "", 1)}} oder {{jsxref("Function.apply", "applied", "", 1)}} genutzt werden. Objekte, die keine `length` Eigenschaft enthalten, die die letzte in einer Reihe von aufeinanderfolgenden, nullbasierten numerischen Eigenschaften widerspiegelt, verhalten sich möglicherweise nicht in einer sinnvollen Weise.

## Beispiele

### Ein Element eines Arrays entfernen

Das folgende Skript zeigt das Array `myFish` bevor und nachdem das erste Element dieses Arrays entfernt wurde. Anschließend wird das entfernte Element angezeigt:

```js
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before: ' + myFish);
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

var shifted = myFish.shift();

console.log('myFish after: ' + myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log('Removed this element: ' + shifted);
// Removed this element: angel
```

### Einsatz von `shift()` in einer `while`-Schleife

Die shift() Methode wird oft in der Bedingung in einer `while` Schleife verwendet. Im folgenden Beispiel wird in jeder Iteration das nächste Element vom Array entfernt, bis das Array leer ist.

```js
var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = names.shift()) !== undefined ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John
```

## Spezifikationen

| Spezifikation                                                                                            | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                 | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.4.4.9', 'Array.prototype.shift')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-array.prototype.shift', 'Array.prototype.shift')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.shift', 'Array.prototype.shift')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.shift")}}

## Siehe auch

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
