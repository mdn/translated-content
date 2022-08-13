---
title: Object.assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Object
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Object/assign
---
{{JSRef}}

Die Methode **`Object.assign()`** kopiert die Werte aller aufzählbaren, eigenen Eigenschaften von einem oder mehreren Quellobjekten in ein Zielobjekt. Es wird das Zielobjekt zurückgegeben.

{{EmbedInteractiveExample("pages/js/object-assign.html")}}

## Syntax

    Object.assign(target, ...sources)

### Parameter

- `target`
  - : Das Zielobjekt.
- `sources`
  - : Das(Die) Quellobjekt(e).

### Rückgabewert

Das Zielobjekt.

## Beschreibung

Eigenschaften in dem Zielobjekt werden von Eigenschaften aus dem Quellobjekt überschrieben, wenn sie den gleichen Schlüssel haben.

Die Methode `Object.assign()` kopiert nur _aufzählbare_ und _eigene_ Eigenschaften eines Quellobjekts ins Zielobjekt. Sie verwendet `[[Get]]` bei der Quelle und `[[Set]]` beim Ziel, d.h. es werden getters und setters aufgerufen. Daher _weist_ es Eigenschaften zu statt sie nur zu kopieren oder neue Eigenschaften zu definieren. Daher ist die Methode ungeeignet, um neue Eigenschaften zu einem Prototypen hinzufügen wenn die Quellen getters enthalten. Zum Kopieren von Eigenschaftsdefinitionen, einschließlich ihrer Aufzählbarkeit, in Prototypen sollten daher {{jsxref("Object.getOwnPropertyDescriptor()")}} und {{jsxref("Object.defineProperty()")}} verwendet werden.

Sowohl {{jsxref("String")}}- als auch {{jsxref("Symbol")}}-Eigenschaften werden kopiert.

Im Fehlerfall, weil z.B. eine Eigenschaft schreibgeschützt ist, wird ein {{jsxref("TypeError")}} erzeugt. Das Zielobjekt kann verändert sein, wenn ein Eigenschaft schon zuvor hinzugefügt wurde.

Es gilt zu beachten, dass `Object.assign()` keine Ausnahme bei {{jsxref("null")}} oder {{jsxref("undefined")}} Quellwerten erzeugt.

## Beispiele

### Klonen eines Objekts

```js
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### Warnung bei tiefem Clonen

Für tiefes Clonen müssen andere Alternativen eingesetzt werden, weil `Object.assign()` Werte von Eigenschaften kopiert. Wenn ein Quellwert eine Referenz zu einem Objekt ist, wird nur die Referenz kopiert.

```js
function test() {
  'use strict';

  let obj1 = { a: 0 , b: { c: 0}};
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

  obj1.a = 1;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

  obj2.a = 2;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
  console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}

  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
  console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}

  // Deep Clone
  obj1 = { a: 0 , b: { c: 0}};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
}

test();
```

### Objekte zusammenführen

```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
```

### Objekte mit gleichen Eigenschaften zusammenführen

```js
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

Eigenschaften werden von anderen Objekten mit gleichen Eigenschaften später in Parameterreihenfolge überschrieben.

### Kopieren von Symboltyp-Eigenschaften

```js
var o1 = { a: 1 };
var o2 = { [Symbol('foo')]: 2 };

var obj = Object.assign({}, o1, o2);
console.log(obj); // { a: 1, [Symbol("foo")]: 2 } (siehe Bug 1207182 in Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```

### Eigenschaften der Prototypkette und nicht aufzählbare Eigenschaften können nicht kopiert werden

```js
var obj = Object.create({ foo: 1 }, { // foo is on obj's prototype chain.
  bar: {
    value: 2  // bar is a non-enumerable property.
  },
  baz: {
    value: 3,
    enumerable: true  // baz is an own enumerable property.
  }
});

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

### Primitive Datentypen werden in Objekte gepackt

```js
var v1 = 'abc';
var v2 = true;
var v3 = 10;
var v4 = Symbol('foo');

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitives will be wrapped, null and undefined will be ignored.
// Note, only string wrappers can have own enumerable properties.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

### Fehler unterbrechen den laufenden Kopiervorgang

```js
var target = Object.defineProperty({}, 'foo', {
  value: 1,
  writable: false
}); // target.foo is a read-only property

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" is read-only
// The Exception is thrown when assigning target.foo

console.log(target.bar);  // 2, the first source was copied successfully.
console.log(target.foo2); // 3, the first property of the second source was copied successfully.
console.log(target.foo);  // 1, exception is thrown here.
console.log(target.foo3); // undefined, assign method has finished, foo3 will not be copied.
console.log(target.baz);  // undefined, the third source will not be copied either.
```

### Kopieren von Zugriffsmethoden

```js
var obj = {
  foo: 1,
  get bar() {
    return 2;
  }
};

var copy = Object.assign({}, obj);
console.log(copy);
// { foo: 1, bar: 2 }, the value of copy.bar is obj.bar's getter's return value.

// This is an assign function that copies full descriptors
function completeAssign(target, ...sources) {
  sources.forEach(source => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});
    // by default, Object.assign copies enumerable Symbols too
    Object.getOwnPropertySymbols(source).forEach(sym => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

var copy = completeAssign({}, obj);
console.log(copy);
// { foo:1, get bar() { return 2 } }
```

## Polyfill

Dieses {{Glossary("Polyfill","polyfill")}} unterstützt keine Symboleigenschaften, da ES5 ohnehin keine Symbole hat:

```js
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
```

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-object.assign', 'Object.assign')}}     | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-object.assign', 'Object.assign')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Object.assign")}}

## Siehe auch

- {{jsxref("Object.defineProperties()")}}
- [Aufzählbarkeit und Zugehörigkeit von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
