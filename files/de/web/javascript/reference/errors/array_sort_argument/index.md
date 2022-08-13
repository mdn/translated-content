---
title: 'TypeError: invalid Array.prototype.sort argument'
slug: Web/JavaScript/Reference/Errors/Array_sort_argument
tags:
  - Error
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Array_sort_argument
original_slug: Web/JavaScript/Reference/Fehler/Array_sort_argument
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: invalid Array.prototype.sort argument (Firefox)

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

Das Argument von {{jsxref("Array.prototype.sort()")}} erwartet entweder {{jsxref("undefined")}} oder eine Funktion, welche die Operanden vergleicht.

## Beispiele

### Nicht valide Fälle

```js example-bad
[1, 3, 2].sort(5);  // TypeError

var cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key] || 'asc');  // TypeError
```

### Valide Fälle

```js example-good
[1, 3, 2].sort();   // [1, 2, 3]


var cmp = { asc: (x, y) => x >= y, dsc: (x, y) => x <= y };
[1, 3, 2].sort(cmp[this.key || 'asc']); // [1, 2, 3]
```

## Siehe auch

- {{jsxref("Array.prototype.sort()")}}
