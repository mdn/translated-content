---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
translation_of: Web/JavaScript/Reference/Global_Objects/Object/values
---
{{JSRef}}

Die Methode **`Object.values()`** gibt ein Array mit den Eigenschaftswerten eines gegebenen Objekts in der selben Reihenfolge wie eine {{jsxref("Statements/for...in", "for...in")}}-Schleife sie geben würde zurück (Der Unterschied ist dabei, dass eine for-in Schleife zusätzlich die Eigenschaften der Protoype-Kette aufzählt).

{{EmbedInteractiveExample("pages/js/object-values.html")}}

## Syntax

    Object.values(obj)

### Parameter

- `obj`
  - : Ein Objekt, dessen Eigenschaftswerte zurück gegeben werden sollen.

### Rückgabewert

Ein Array, welches die Eigenschaftswerte eines gegebenen Objekts enthält.

## Beschreibung

`Object.values()` gibt ein Array zurück, dessen Elemente mit den Werten der Eigenschaften eines gegebenen Objekts übereinstimmen. Die Reihenfolge der Eigenschaften ist die selbe, wie sie sich bei einem manuellen Durchlauf über die Eigenschaften ergeben würde.

## Beispiele

```js
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-ähnliches Objekt
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// Array-ähnliches Objekt mit zufälliger Sortierung der Eigenschaften
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo ist eine nicht aufzählbare Eigenschaft
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']
```

## Polyfill

Um `Object.values` auch in älteren Umgebungen zu nutzen, die diese Methode nicht nativ unterstützen, können Sie ein Polyfill im [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) oder im [es-shims/Object.values](https://github.com/es-shims/Object.values) Repository finden.

## Spezifikationen

| Specifikation                                                                        | Status                       | Kommentar         |
| ------------------------------------------------------------------------------------ | ---------------------------- | ----------------- |
| {{SpecName('ESDraft', '#sec-object.values', 'Object.values')}} | {{Spec2('ESDraft')}} | Erste Definition. |
| {{SpecName('ES8', '#sec-object.values', 'Object.values')}}         | {{Spec2('ES8')}}         |                   |

## Browser Kompatibilität

{{Compat}}

Siehe auch

- [Enumerability and ownership of properties](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}} {{experimental_inline}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
