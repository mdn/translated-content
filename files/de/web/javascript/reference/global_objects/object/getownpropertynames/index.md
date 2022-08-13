---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
tags:
  - german
translation_of: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
---
{{JSRef}}

Die **`Object.getOwnPropertyNames()`** Methode gibt einen Array mit allen Eigenschaftsnamen (aufzählbar oder nicht) zurück, welche direkt auf einem Objekt gefunden werden.

## Syntax

    Object.getOwnPropertyNames(obj)

### Parameters

- `obj`
  - : Das Objekt dessen aufzählbaren und nicht aufzählbaren Eigenschaftsnamen gesucht sind.

## Beschreibung

Object.getOwnPropertyNames () gibt ein Array zurück, dessen Elemente Strings sind, die den aufzählbar und nicht aufzählbar Eigenschaften direkt auf dem Objekt gefunden werden. Die Reihenfolge der Enumerable-Objekte im Array steht im Einklang mit der Benutzung von einer exponierten Schleife {{jsxref ("Statements / for ... in", "for ... in")}} (oder durch {{jsxref ("Object.keys () ")}}) über die Eigenschaften des Objekts. Die Reihenfolge der nicht-aufzählbar Objekte im Array, und unter den aufzählbare Eigenschaften, ist nicht definiert.

## Beispiele

### `Benutzung von Object.getOwnPropertyNames()`

```js
var arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort()); // logs '0,1,2,length'

// Array-like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.getOwnPropertyNames(obj).sort()); // logs '0,1,2'

// Logging property names and values using Array.forEach
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  console.log(val + ' -> ' + obj[val]);
});
// logs
// 0 -> a
// 1 -> b
// 2 -> c

// non-enumerable property
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort()); // logs 'foo,getFoo'
```

Wenn Sie nur die aufzählbare Eigenschaften möchten, kann man die Funktion {{jsxref ("Object.keys ()")}} benutzen. Alternativ können auch Schlaufen {{jsxref ("Statements / for ... in", "for ... in")}} verwendet werden (dies gibt nicht nur die aufzählbaren Eigenschaften des Objektes, sondern auch entlang der Prototypkette zurück. Behoben kann diese mit der Methode {{jsxref ("Object.prototype.hasOwnProperty ()", "hasOwnProperty ()" )}}).

Items welche sich im Prototype chain befinden, werden nicht aufgelistet.

```js
function ParentClass() {}
ParentClass.prototype.inheritedMethod = function() {};

function ChildClass() {
  this.prop = 5;
  this.method = function() {};
}
ChildClass.prototype = new ParentClass;
ChildClass.prototype.prototypeMethod = function() {};

console.log(
  Object.getOwnPropertyNames(
    new ChildClass() // ['prop', 'method']
  )
);
```

### Nur unzählige Eigenschaften

Es wird die {{jsxref("Array.prototype.filter()")}} Funktion benötigt um alle zählbaren Schlüssel (erhalten mit {{jsxref("Object.keys()")}}) von einer Liste mit allen Schlüsseln (erhalten mit `Object.getOwnPropertyNames()`) zu vergleichen, welches nur die unzähligen Eigenschaften zurück lässt.

```js
var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter(function(key) {
  var indexInEnum = enum_only.indexOf(key);
  if (indexInEnum == -1) {
    // not found in enum_only keys mean the key is non-enumerable,
    // so return true so we keep this in the filter
    return true;
  } else {
    return false;
  }
});

console.log(nonenum_only);
```

## Notizen

Wenn bei ES5 das Argument der Methode kein primitives Objekt ist, wird der Funktionsaufruf ein {{jsxref("TypeError")}} werfen. In ES6 wird ein nicht-Objekt Argument automatisch in ein Objekt gecasted.

```js
Object.getOwnPropertyNames('foo');
// TypeError: "foo" is not an object (ES5 code)

Object.getOwnPropertyNames('foo');
// ['length', '0', '1', '2']  (ES6 code)
```

## Spezifikationen

| Specification                                                                                                    | Status                   | Comment                                               |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------ | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.4', 'Object.getOwnPropertyNames')}}                     | {{Spec2('ES5.1')}} | Initialdefinition. Implementiert in JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.getownpropertynames', 'Object.getOwnPropertyNames')}} | {{Spec2('ES6')}}     |                                                       |

## Browser Kompatibilität

{{Compat}}

## SpiderMonkey-spezifische Notizen

Vor SpiderMonkey 28 {{geckoRelease("28")}}, ignorierte die Funktion `Object.getOwnPropertyNames` unaufgelöste Eigenschaften eines {{jsxref("Error")}} Objektes. Dieser Fehler wurde in den letzten Versionen behoben ({{bug("724768")}}).

## Siehe auch

- [Enumerability and ownership of properties](/de/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.forEach()")}}
