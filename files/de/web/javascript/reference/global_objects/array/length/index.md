---
title: Array.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
tags:
  - Array
  - JavaScript
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/length
---
{{JSRef}}

Die **`length`** Eigenschaft eines Objektes vom Typ `Array` setzt die Anzahl der Elemente in einem Array oder gibt diese Anzahl zurück. Der Wert ist eine vorzeichenlose, 32-Bit Ganzzahl, welche größer als der größte Index im Array ist.

{{EmbedInteractiveExample("pages/js/array-length.html")}}

## Beschreibung

Der Wert der `length` Eigenschaft ist ein positive, ganze Zahl und hat einen Wert kleiner als 232.

```js
var namelistA = new Array(4294967296); //4294967296 = 232
var namelistC = new Array(-100) //negative sign

console.log(namelistA.length); //RangeError: Invalid array length
console.log(namelistC.length); //RangeError: Invalid array length



var namelistB = [];
namelistB.length = Math.pow(2,32)-1; //set array length less than 2 to the 32nd power
console.log(namelistB.length);

//4294967295
```

Man kann die `length` Eigenschaft eines Array zu jeder Zeit ändern, um das Array zu kürzen. Wenn ein Array mit dem Ändern der `length` Eigenschaft vergrößert wird, erhöht sich die Anzahl der der tatsächlichen Elemente. Wenn z. B. `length` auf 3 gesetzt wird und die aktuelle länge 2 ist, dann enthält das Array 3 Elemente, wobei das dritte Element `undefined` ist.

```js
var arr = [1, 2, 3];
printEntries(arr);

arr.length = 5; // set array length to 5 while currently 3.
printEntries(arr);

function printEntries(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    console.log(arr[i]);
  }
  console.log('=== printed ===');
}

// 1
// 2
// 3
// === printed ===
// 1
// 2
// 3
// undefined
// undefined
// === printed ===
```

Jedoch sagt die `length` Eigenschaft nicht zwangsläufig etwas über die Anzahl der definierten Werte in einem Array aus. Mehr dazu im Artikel [Beziehung zwischen Längen und nummerischen Eigenschaften](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#Relationship_between_length_and_numerical_properties "Relationship between length and numerical properties").

{{js_property_attributes(1, 0, 0)}}

- `Writable`: Wenn das Attribut auf `false` gesetzt ist, kann der Wert der Eigenschaft nicht mehr geändert werden.
- `Configurable`: Wenn das Attribut auf `false` gesetzt ist, wird jeder Versuch scheitern, die Werte der Attribute `Writable`, ` Configurable und `` Enumerable  `zu ändern.
- `Enumerable`: Wenn das Attribut auf `true` gesetzt ist, wird das Attribut während [for](/de/docs/Web/JavaScript/Reference/Statements/for) oder [for..in](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen iteriert.

## Beispiele

### Iterieren über ein Array

Im folgenden Beispiel wird über das `numbers` Array iteriert. Dabei wird die `length` Eigenschaft verwendet, um festzustellen, wie viele Elemente das Array enthält. Der Wert jedes Elements wird dabei verdoppelt.

```js
var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}
// numbers enthält jetzt die Werte: [2, 4, 6, 8, 10]
```

### Verkürzung eines Arrays

Das folgende Beispiel verkürzt das Array `numbers` auf eine Länge von 3, wenn die Länge größer als 3 ist.

```js
var numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers);        // [1, 2, 3]
console.log(numbers.length); // 3
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Komment              |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Initiale Definition. |
| {{SpecName('ES5.1', '#sec-15.4.5.2', 'Array.length')}}                                         | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-properties-of-array-instances-length', 'Array.length')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-properties-of-array-instances-length', 'Array.length')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompabilität

{{Compat("javascript.builtins.Array.length")}}

## Siehe auch

- {{jsxref("Array")}}
