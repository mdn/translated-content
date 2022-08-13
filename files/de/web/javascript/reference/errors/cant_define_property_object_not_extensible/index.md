---
title: 'TypeError: can''t define property "x": "obj" is not extensible'
slug: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible
original_slug: Web/JavaScript/Reference/Fehler/Cant_define_property_object_not_extensible
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: can't define property "x": "obj" is not extensible (Firefox)
    TypeError: Cannot define property: "x", object is not extensible. (Chrome)

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

Normalerweise ist ein Objekt erweiterbar und neue Eigenschaften können hinzugefügt werden. In diesem Fall markiert {{jsxref("Object.preventExtensions()")}} ein Objekt als nicht mehr erweiterbar, so dass ein Objekt nur noch die Eigenschaften haben kann, die es vor dem Aufruf hatte.

## Beispiele

Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) wird ein `TypeError` erzeugt, wenn versucht wird eine Eigenschaft zu einem nicht erweiterbaren Objekt hinzuzufügen. Im normalen Modus wird das Hinzufügen einfach ignoriert.

```js example-bad
'use strict';

var obj = {};
Object.preventExtensions(obj);

obj.x = 'foo';
// TypeError: can't define property "x": "obj" is not extensible
```

Im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) und normalen Modus wird ein Fehler erzeugt, wenn {{jsxref("Object.defineProperty()")}} benutzt wird, um eine Eigenschaft zu einem nicht erweiterbaren Objekt hinzuzufügen.

```js example-bad
var obj = { };
Object.preventExtensions(obj);

Object.defineProperty(obj,
  'x', { value: "foo" }
);
// TypeError: can't define property "x": "obj" is not extensible
```

Um diesen Fehler zu vermeiden muss entweder der Aufruf von {{jsxref("Object.preventExtensions()")}} entfernt werden oder die Position des Aufrufes so verschoben werden, dass das Hinzufügen von Eigenschaften davor passiert und das Objekt erst danach als nicht erweiterbar markiert wird. Natürlich kann auch die neue Eigenschaft entfernt werden, wenn sie nicht benötigt wird.

```js example-good
'use strict';

var obj = {};
obj.x = 'foo'; // add property first and only then prevent extensions

Object.preventExtensions(obj);
```

## Siehe auch

- {{jsxref("Object.preventExtensions()")}}
