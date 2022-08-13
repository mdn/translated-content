---
title: 'TypeError: "x" is not a non-null object'
slug: Web/JavaScript/Reference/Errors/No_non-null_object
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/No_non-null_object
original_slug: Web/JavaScript/Reference/Fehler/No_non-null_object
---
{{JSSidebar("Errors")}}

## Fehlermeldung

    TypeError: "x" is not a non-null object (Firefox)
    TypeError: Property description must be an object: "x" (Chrome)
    TypeError: Invalid value used in weak set (Chrome)

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

Ein Objekt wird erwartete aber nicht übergeben. {{jsxref("null")}} ist kein Objekt und funktioniert nicht. In dieser Situation wird ein normales Objekt erwartet.

## Beispiele

### Eigehscgaftsbeschreibung erwartet

Wenn Methoden wie {{jsxref("Object.create()")}} oder {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.defineProperties()")}} eingesetzt werden, wird als optionale Beschreibung ein Beschreibungsobjekt erwartet. Wenn kein Objekt übergeben wird (z. B. eine Zahl), wird ein Fehler erzeugt:

```js example-bad
Object.defineProperty({}, 'key', 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, 'key', null);
// TypeError: null is not a non-null object
```

Ein valides Beschreibungsobjekt kann wie folgendes aussehen:

```js example-good
Object.defineProperty({}, 'key', { value: 'foo', writable: false });
```

### `WeakMap` und `WeakSet` Objekte benötigen Objektschlüssel

{{jsxref("WeakMap")}} und {{jsxref("WeakSet")}} Objekte speichern Objektschlüssel. Man kann keine anderen Schlüssel verwenden.

```js example-bad
var ws = new WeakSet();
ws.add('foo');
// TypeError: "foo" is not a non-null object
```

Stattdessen sollte folgendes verwendet werden:

```js example-good
ws.add({foo: 'bar'});
ws.add(window);
```

## Siehe auch

- {{jsxref("Object.create()")}}
- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}
