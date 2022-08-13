---
title: Object.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
tags:
  - ECMAScript 5
  - Erweiterbarkeit
  - JavaScript
  - Méthode
  - Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
---
{{JSRef}}

Die Methode **`Object.isExtensible()`** bestimmt, ob ein Objekt erweiterbar ist. Das heißt, es können dem Objekt neue Eigenschaften hinzugefügt werden.

## Syntax

    Object.isExtensible(obj)

### Parameter

- `obj`
  - : Das Objekt, das überprüft werden soll.

### Rückgabewert

Ein {{jsxref("Boolean")}}, der angibt, ob das übergebene Objekt erweiterbar ist.

## Beschreibung

Standardmäßig sind Objekte erweiterbar: Es ist möglich, ihnen neue Eigenschaften zuzuweisen und sie dadurch zu verändern. In Engines, die {{jsxref("Object.proto", "__proto__")}} {{deprecated_inline}} unterstützen, kann auch deren \_\_proto\_\_ Eigenschaft geändert werden. Ein Objekt kann mittels {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}} oder {{jsxref("Object.freeze()")}} explizit als nicht-erweiterbar markiert werden.

## Beispiele

```js
// Neue Objekte sind erweiterbar.
var empty = {};
Object.isExtensible(empty); // === true

// ...aber das kann sich ändern.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// Versiegelte Objekte sind per Definition nicht erweiterbar.
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// Eingefrorene Objekte sind ebenfalls per Definition nicht erweiterbar.
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false
```

## Anmerkungen

In ES5 muss das Argument der Methode ein echtes Objekt sein. Ist dies nicht der Fall, wird ein {{jsxref("TypeError")}} geworfen. In ES2015 hingegen wird ein Nicht-Objekt einfach als nicht-erweiterbares Objekt behandelt, sodass von der Methode `false`zurückgegeben wird.

```js
Object.isExtensible(1);
// TypeError: 1 is not an object (ES5 code)

Object.isExtensible(1);
// false                         (ES2015 code)
```

## Spezifikationen

| Specification                                                                                        | Status                       | Comment                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.13', 'Object.isExtensible')}}                 | {{Spec2('ES5.1')}}     | Initial definition. Implemented in JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.isextensible', 'Object.isExtensible')}}         | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-object.isextensible', 'Object.isExtensible')}} | {{Spec2('ESDraft')}} |                                                      |

## Browser-Kompatibilität

{{Compat}}

## Zusätzliches Material

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.isExtensible()")}}
