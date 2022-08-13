---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/pop
---
{{JSRef("Global_Objects", "Array")}}

Die **`pop()`** Methode entfernt das **letzte** Element eines Arrays und gibt dieses zurück. Diese Methode ändert die Länge des Arrays.

{{EmbedInteractiveExample("pages/js/array-pop.html")}}

## Syntax

    arr.pop()

### Rückgabewert

Das entfernte Element aus dem Array; {{jsxref("undefined")}} wenn das Array leer ist.

## Beschreibung

Die `pop`-Methode entfernt das letzte Element eines Arrays und gibt dieses zurück.

`pop` ist bewusst generisch gehalten. DIese Methode kann mit {{jsxref("Function.call", "called", "", 1)}} oder {{jsxref("Function.apply", "applied", "", 1)}} auf einem Objekten aufgerufen werden, welches Arrays ähneln ist. Objekte, die keine `length` Eigenschaft enthalten, welches das letzt Element in dem Objekt markieren oder keine nullbasierten numerischen Eigenschaften widerspiegelt, verhalten sich möglicherweise nicht in einer Weise.

Wenn `pop()` auf einem leeren Array aufgerufen wird, so wird `undefined` zurückgegeben.

## Beispiele

### Entfernen des letzten Elements eines Arrays

Der folgende Code erzeugt ein Array `myFish`, das aus vier Elementen besteht. Im Anschluss daran wird das letzte Element entfernt.

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------ |
| ECMAScript 3rd Edition                                                                               | {{Spec2('ES3')}}         | Initiale Definition. Implementiert mit JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.4.4.6', 'Array.prototype.pop')}}                     | {{Spec2('ES5.1')}}     |                                                        |
| {{SpecName('ES6', '#sec-array.prototype.pop', 'Array.prototype.pop')}}         | {{Spec2('ES6')}}         |                                                        |
| {{SpecName('ESDraft', '#sec-array.prototype.pop', 'Array.prototype.pop')}} | {{Spec2('ESDraft')}} |                                                        |

## Browser-Kompatibilität

{{Compat("javascript.builtins.Array.pop")}}

## Siehe auch

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
