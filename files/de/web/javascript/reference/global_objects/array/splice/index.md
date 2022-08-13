---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/splice
---
{{JSRef}}

Die **`splice()`** Methode ändert den Inhalt eines Arrays durch das Entfernen vorhandener Elemente und/oder Hinzufügen neuer Elemente.

{{EmbedInteractiveExample("pages/js/array-splice.html")}}

## Syntax

    array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

### Parameter

- `start`

  - : Index ab welchem das Array geändert werden soll. Falls `start` größer als die Länge des Arrays ist, wird `start` auf die Länge des Arrays gesetzt.

    Falls `start` negativ ist, beginnt die Änderung entsprechend viele Stellen rückwärts vom Ende des Arrays (d.h. hat `start` den Wert -n ist dies gleichbedeutend mit `array.length - n`) und wird auf 0 gesetzt wenn der absolute Wert von `start` größer als die Länge des Arrays ist.

- `deleteCount` {{optional_inline}}

  - : Gibt die Anzahl der zu entfernenden alten Array Elemente an.

    Wenn `deleteCount` weggelassen wird oder wenn der Wert größer oder gleich `array.length - start` ist (d. h. wenn der Wert größer oder gleich der Anzahl der von `start` aus verbleibenden Elemente ist), wird das ganze Array ab dem Index `start` gelöscht.

    Wenn `deleteCount` 0 oder negativ ist, werden keine Elemente entfernt. In diesem Fall sollte man mindestens ein neues Element als weiteren Parameter übergeben, da das Array sonst nicht geändert wird.

- `item1, item2, ...` {{optional_inline}}
  - : Die Elemente, die dem Array ab dem Index `start` hinzugefügt werden sollen. Falls keine Elemente angegeben werden, entfernt `splice` lediglich Elemente des Arrays.

### Rückgabewert

Ein Array, welches die entfernten Elemente enthält. Wenn nur ein Element entfernt wurde, wird ein Array mit nur einem Element zurückgegeben. Wenn kein Element entfernt wurde, wird ein leeres Array zurückgegeben.

## Beschreibung

Wenn die Anzahl der neu hinzugefügten Elemente ungleich der Anzahl der entfernten Elemente ist, wird die Länge des Arrays geändert. Bei gleicher Anzahl werden vorhandene Elemente sozusagen ersetzt.

## Beispiele

### Entfernen von 0 (null) Elementen bei Index 2 und Einfügen von "drum"

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

### Entfernen von o (null) Elementen bei Index 2 und Einfügen von "drum" und "guitar"

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum', 'guitar');

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

### Entfernen von 1 Element bei Index 3

```js
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]
```

### Entfernen von 1 Element bei Index 2 und Einfügen von "trumpet"

```js
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, 'trumpet');

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
```

### Entfernen von 2 Elementen bei Index 0 und Einfügen von "parrot", "anemone" und "blue"

```js
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
```

### Entfernen von 2 Elementen vom Index 2

```js
var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
```

### Entfernen von einem Element bei Index -2

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
```

### Entfernen von allen Elementen nach Index 2 (inklusiv)

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommenter                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.4.4.12', 'Array.prototype.splice')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-array.prototype.splice', 'Array.prototype.splice')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.splice', 'Array.prototype.splice')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.splice")}}

## Siehe auch

- {{jsxref("Array.prototype.push()", "push()")}} / {{jsxref("Array.prototype.pop()", "pop()")}} — hinzufügen/entfernen von Elementen vom Ende des Arrays
- {{jsxref("Array.prototype.unshift()", "unshift()")}} / {{jsxref("Array.prototype.shift()", "shift()")}} — hinzufügen/entfernen von Elementen vom Beginn eines Arrays
- {{jsxref("Array.prototype.concat()", "concat()")}} — gibt ein neues Array bestehend aus dem aktuellen Array kombiniert mit anderen Arrays und oder Werten
