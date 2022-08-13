---
title: 'TypeError: property "x" is non-configurable and can''t be deleted'
slug: Web/JavaScript/Reference/Errors/Cant_delete
tags:
  - Errors
  - JavaScript
  - Strict Mode
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cant_delete
original_slug: Web/JavaScript/Reference/Fehler/Cant_delete
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: property "x" is non-configurable and can't be deleted. (Firefox)
    TypeError: Cannot delete property 'x' of #<Object> (Chrome)

## Fehlertyp

{{jsxref("TypeError")}} nur im strict mode.

## Was ist falsch gelaufen?

Es wurde versucht eine EIgenschaft zu löschen, obwohl die Eigenschaft nicht Konfigurierbar ([non-configurable](/de/docs/Web/JavaScript/Data_structures#Properties)) ist. Das `configurable` Attribut gibt an, ob ein Eigenschaft von einem Objekt gelöscht werden kann und ob ein Attribut (anders als `writable`) geändert werden kann.

Dieser Fehler ist nur tritt nur im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) auf. In non-strict Quelltext, gibt die Operation `false` zurück.

## Beispiele

Nicht Konfigurierbare Eigenschaften sind nicht sehr häufig, aber sie können mit {{jsxref("Object.defineProperty()")}} oder {{jsxref("Object.freeze()")}} erstellt werden.

```js example-bad
'use strict';
var obj = Object.freeze({name: 'Elsa', score: 157});
delete obj.score;  // TypeError

'use strict';
var obj = {};
Object.defineProperty(obj, 'foo', {value: 2, configurable: false});
delete obj.foo;  // TypeError

'use strict';
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray.pop();  // TypeError
```

Es gibt auch einige nicht Konfigurierbare Eigenschaften, die in JavaScript eingebaut sind. Dazu zählen zum Beispiel die mathematischen Konstanten.

```js example-bad
'use strict';
delete Math.PI;  // TypeError
```

## Siehe auch

- [delete operator](/de/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
