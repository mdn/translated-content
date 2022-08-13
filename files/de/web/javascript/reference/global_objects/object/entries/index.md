---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
tags:
  - Entries
  - Iterieren
  - JavaScript
  - Méthode
  - Objekt
  - Referenz
  - Schleife
translation_of: Web/JavaScript/Reference/Global_Objects/Object/entries
---
{{JSRef}}

**`Object.entries()`** ist eine Methode für Objekte. Zurückgegeben wird ein Array mit den Eigenschaften des Objektes. Diese Eigenschaften werden in Key-Value-Paaren als zählbare strings zurückgegeben.

Im Gegensatz zur {{jsxref("Statements/for...in", "for...in")}}-Schleife werden dabei nicht die constructor- Eigenschaften zurückgegeben, die das Objekt von seinem `prototype` geerbt hat.

Die Reihenfolge der Key-Value-Paare ist dabei die gleiche wie bei einer {{jsxref("Statements/for...in", "for...in")}}-Schleife. Sie hängt nicht davon ab, wie das ursprüngliche Objekt aufgebaut ist. Ist eine bestimmte Reihenfolge erwünscht, muss der Array sortiert werden:
`Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));`.

{{EmbedInteractiveExample("pages/js/object-entries.html")}}

## Syntax

    Object.entries(obj)

### Parameter

- `obj`
  - : Ein Objekt besitzt Eigenschaften in Form von Key-Value-Paaren.

### Rückgabewert

Zurückgegeben wird ein Array mit den Key-Value-Paaren (`[key, value]`) eines Objektes in Form von zählbaren strings.

## Beschreibung

`Object.entries()` erzeugt einen Array auf Basis eines Objekts. Die Eigenschaften des Objekts werden im Array als Key-Value-Paare gespeichert.
Die Reihenfolge der Eigenschaften ist dabei gleich einer manuellen Iteration über das Objekt.

## Beispiele

```js
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// Array-ähnliches Objekt
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// Array-ähnliches Objekt mit zufälliger Reihenfolge der Keys
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo- Eigenschaft ist nicht zählbar
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// Das Argument, das kein Objekt ist, wird in ein Objekt umgewandelt
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// Gibt einen Leeren Array zurück, da primitive Datentypen keine eigenen Eigenschaften haben
console.log(Object.entries(100)); // [ ]

// Elegant über Key-Value-Paare iterieren
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Mit array extras über Key-Value-Paare iterieren
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

### Ein `Object` in ein `Map-Objekt` umwandeln

Der {{jsxref("Map", "new Map()")}}-constructor akzeptiert zählbare `entries`. Mithilfe von `Object.entries` kann ein {{jsxref("Object")}} in ein {{jsxref("Map")}}-Objekt umgewandelt werden:

```js
const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }
```

### Durch das `Object` iterieren

Mit der Technik der [destrukturierenden Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Destrukturierende_Zuweisung) kann durch Objekte iteriert werden.

```js
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"
```

## Polyfill

Um `Object.entries` auch in älteren Umgebungen zu nutzen, die diese Methode nicht nativ unterstützen, sind Polyfills im [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) (ohne IE) order im [es-shims/Object.entries](https://github.com/es-shims/Object.entries)-Repository finden. Untenstehender Polyfill ist ebenfalls verwendbar:

```js
if (!Object.entries) {
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}
```

Sollten Sie auch IE < 9 unterstützen müssen, brauchen sie jedoch zusätzlich den `Object.keys`-Polyfill, zu finden auf {{jsxref("Object.keys")}}.

## Spezifikationen

| Specification                                                                        | Status                       | Comment              |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ESDraft', '#sec-object.entries', 'Object.entries')}} | {{Spec2('ESDraft')}} | Initiale Definition. |
| {{SpecName('ES8', '#sec-object.entries', 'Object.entries')}}     | {{Spec2('ES8')}}         |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Object.entries")}}

## Siehe auch

- [Enumerability and ownership of properties](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
