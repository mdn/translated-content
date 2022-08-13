---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/push
---
{{JSRef}}

Die **`push()`** Methode fügt ein oder mehr Elemente am Ende eines Arrays hinzu und gibt die neue Länge des Arrays zurück.

{{EmbedInteractiveExample("pages/js/array-push.html")}}

## Syntax

    arr.push(element1 [, ... [, elementN]])

### Parameter

- `elementN`
  - : Die Elemente, die am Ende des Arrays eingefügt werden.

### Rückgabewert

Den neuen Wert der {{jsxref("Array.length", "length")}} Eigenschaft (Länge des Arrays), nachdem die Methode ausgeführt wurde.

## Beschreibung

Die `push` Methode fügt Werte an das Ende eines Arrays an.

`push` ist absichtlich generisch gehalten. Die Methode kann mit Hilfe von {{jsxref("Function.call", "call()")}} und {{jsxref("Function.apply", "apply()")}} auch auf Array ähnliche Objekte angewendet werden. Die Methode wählt anhand der `length` Eigenschaft den Punkt aus, an dem die Werte eingefügt werden. Falls die `length` Eigenschaft nicht in eine Zahl umgewandelt werden kann, wird 0 als Index verwendet. Das gilt auch für den Fall, dass die `length` Eigenschaft nicht vorhanden ist. Die `length` Eigenschaft wird daraufhin erstellt.

Obwohl {{jsxref("Global_Objects/String", "Strings", "", 1)}} native, Array-ähnliche Objekte sind, sind sie in Anwendungen dieser Methode nicht geeignet, da Strings unveränderlich sind. Gleiches gilt für das native, Array-ähnliche Objekt {{jsxref("Functions/arguments", "arguments", "", 1)}}.

## Beispiele

### Elemente zu einem Array hinzufügen

Der folgende Quelltext erstellt ein `sports` Array mit zwei Elementen und fügt anschließend zwei weitere Elemente hinzu. Die Variable `total` enthält die neue Länge des Arrays.

```js
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  // 4
```

### Zwei Arrays zusammenführen

Dieses Beispiel benutzt {{jsxref("Function.apply", "apply()")}}, um alle Elemente eines zweiten Arrays hinzuzufügen.

Diese Methode sollte _nicht_ benutzt werden, wenn das zweite Array (`moreVegs` in diesem Beispiel) sehr lang ist, weil die maximale Anzahl der Parametern, die eine Funktion haben kann, in der Praxis limitiert ist. Siehe {{jsxref("Function.apply", "apply()")}} für mehr Details.

    var vegetables = ['parsnip', 'potato'];
    var moreVegs = ['celery', 'beetroot'];

    // Fügt das zweite Array an das erste Array an
    // Equivalent zu vegetables.push('celery', 'beetroot');
    Array.prototype.push.apply(vegetables, moreVegs);

    console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']

### Objekte wie ein Array behandeln

Wie oben angedeutet ist, ist `push` extra generisch gehalten, was man zu seinem Vorteil nutzen kann. `Array.prototype.push` kann gut auf ein Objekt angewendet werden, wie das Beispiel zeigt. Zu beachten ist, dass kein Array erstellt wird, um eine Menge von Objekten zu speichern. Stattdessen werden die Objekte in dem Objekt selbst gespeichern, indem wir `call` auf der `Array.prototype.push` Methode einsetzen, um die Methode glauben zu lassen, wir arbeiten mit einem Array. Es funktioniert einfach, dank der Art und Weise, wie JavaScript es uns erlaubt, den Ausführungskontext nach Belieben festzulegen.

```js
var obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length wird automatisch erhöht,
        // wenn ein Objekt hinzugefügt wird
        [].push.call(this, elem);
    }
};

// ein paar leere Objekte zu Illustrationszwecken hinzufügen
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2
```

Zu beachten ist, dass `obj` kein Array ist. Die Methode `push` erhöht erfolgreich die `length` Eigenschaft von `obj`, so als würde sie mit einem Array arbeiten.

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                             | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.4.4.7', 'Array.prototype.push')}}                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-array.prototype.push', 'Array.prototype.push')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.push', 'Array.prototype.push')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.push")}}

## Siehe auch

- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
