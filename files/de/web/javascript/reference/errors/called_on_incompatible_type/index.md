---
title: X.prototype.y called on incompatible type
slug: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
tags:
  - Error
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
original_slug: Web/JavaScript/Reference/Fehler/Called_on_incompatible_type
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    TypeError: Function.prototype.toString called on incompatible object (Firefox)
    TypeError: Function.prototype.bind called on incompatible target (Firefox)
    TypeError: Method Set.prototype.add called on incompatible receiver undefined (Chrome)
    TypeError: Bind must be called on a function (Chrome)

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist falsch gelaufen?

Wenn dieser Fehler auftritt, wird eine Funktion (auf eineem gegebenen Objekt) aufgerufen, wobei `this` nicht vom erwarteten Typ ist.

Dieser Fehler kann auftreten, wenn die {{jsxref("Function.prototype.call()")}} oder {{jsxref("Function.prototype.apply()")}} Methode mit einem `this` Argument genutzt werden, welches nicht dem erwarteten Typ entspricht.

Dieser Fehler kann auch auftreten, wenn eine Funktion (in einem Objekt gespeichert) als Argument in einer anderen Funktion genutzt wird. In diesem Fall ist das Objekt nicht `this` der Funktion. Um diesen Dall zu umgehen muss eine Lambda-Funktion unterstützt werden, welche den Aufruf markiert, oder die {{jsxref("Function.prototype.bind()")}} Funktion eingesetzt werden, um das richtige `this` Objekt zu nutzen.

## Beispiele

### Fehlerfälle

```js example-bad
var mySet = new Set;
['bar', 'baz'].forEach(mySet.add);
// mySet.add ist eine Funktion, aber "mySet" wird so nicht erfasst.

var myFun = function () {};
['bar', 'baz'].forEach(myFun.bind);
// myFun.bind ist eine Funktion, aber "myFun" wird nicht so erfasst.
```

### Gültiger Fälle

```js example-good
var mySet = new Set;
['bar', 'baz'].forEach(mySet.add.bind(mySet));
// Das funktioniert, weil "mySet" als this an die Funktion gebunden wird.

var myFun = function () {};
['bar', 'baz'].forEach(x => myFun.bind(x));
// Das funktioniert durch die "bind" Funktion. Es wird eine Lambda-Funktion erstellt, die die Argumente weiterleitet..
```

## Siehe auch

- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.bind()")}}
