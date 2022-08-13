---
title: get Array[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@species
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Array/@@species
---
{{JSRef}}

Die **`Array[@@species]`** Zugriffseigenschaft gibt den Array Konstruktor zurück.

## Syntax

    Array[Symbol.species]

### Rückgabewert

Der {{jsxref("Array")}} Konstruktor.

## Beschreibung

Die `species` Zugriffseigenschaft gibt den Standard-Konstruktor des `Array` Objekts zurück. Unterklassen können die Zuweisung Überschreiben, um die Konstruktorzuweisung ändern.

## Beispiele

Die `species` Eigenschaft gibt die Standard-Konstruktor-Funktion, welches der `Array` Konstruktor für `Array` Objekte ist.

```js
Array[Symbol.species]; // function Array()
```

In einem abgeleiteten Collection Objekt (z. B. ein benutzerdefiniertes Array `MyArray`), ist der `MyArray` der species des `MyArray` Konstruktors. Manchmal möchte man in abgeleiteten Klassenden Oberklassenkonstruktor zurückgeben. Dieses kann mit Überschreiben erreicht werden:

```js
class MyArray extends Array {
  // Overwrite MyArray species to the parent Array constructor
  static get [Symbol.species]() { return Array; }
}
```

## Spezifikationen

| Spezifikation                                                                                            | Status                       | Kommentar           |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES6', '#sec-get-array-@@species', 'get Array [ @@species ]')}}     | {{Spec2('ES6')}}         | Initial Definition. |
| {{SpecName('ESDraft', '#sec-get-array-@@species', 'get Array [ @@species ]')}} | {{Spec2('ESDraft')}} |                     |

## Browserkompatibilität

{{Compat("javascript.builtins.Array.@@species")}}

## Siehe auch

- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
