---
title: Object.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
translation_of: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
---
{{JSRef}}

Die **`Object.getPrototypeOf()`** Methode gibt den Prototyp (den Wert der internen `[[Prototype]]` Eigenschaft) des angegebenen Objekts _obj_ zurück

## Syntax

    Object.getPrototypeOf(obj)

### Parameter

- `obj`
  - : Das Objekt, dessen Prototyp zurückgegeben werden soll.

### Rückgabewert

Der Prototyp des Objekts _obj_ wird zurückgegeben. Wenn keine Eigenschaften vererbt werden, wird {{jsxref("null")}} zurück gegeben.

## Beispiele

```js
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

## Notizen

In ES5 wird eine {{jsxref("TypeError")}} exception geworfen, falls der Parameter obj kein Objekt ist . In ES2015 wird der Parameter _obj_ in ein {{jsxref("Object")}} umgewandelt.

```js
Object.getPrototypeOf('foo');
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf('foo');
// String.prototype                  (ES2015 code)
```

## Spezifikation

| Specification                                                                                            | Status                       | Comment             |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.2', 'Object.getPrototypeOf')}}                     | {{Spec2('ES5.1')}}     | Initial definition. |
| {{SpecName('ES6', '#sec-object.getprototypeof', 'Object.getProtoypeOf')}}         | {{Spec2('ES6')}}         |                     |
| {{SpecName('ESDraft', '#sec-object.getprototypeof', 'Object.getProtoypeOf')}} | {{Spec2('ESDraft')}} |                     |

## Browserkompatibilität

{{Compat}}

## Opera-spezfische Notizen

Even though older Opera versions don't support `Object.getPrototypeOf()` yet, Opera supports the non-standard {{jsxref("Object.proto", "__proto__")}} property since Opera 10.50.

## Siehe auch

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Object.prototype.__proto__")}}
- John Resig's post on [getPrototypeOf](http://ejohn.org/blog/objectgetprototypeof/)
- {{jsxref("Reflect.getPrototypeOf()")}}
