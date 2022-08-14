---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/construct
---
{{JSRef}}Die statische Methode **`Reflect`\*\***`.construct()`\*\* verhält sich wie der [`new` operator](/de/docs/Web/JavaScript/Reference/Operators/new), allerdings in Form einer Funktion.Sie ist das Equivalent zu `new target(...args)`. Es existiert zudem die Option, einen anderen Prototyp zu definieren.{{EmbedInteractiveExample("pages/js/reflect-construct.html")}}

## Syntax

    Reflect.construct(target, listeDerArgumente[, newTarget])

### Parameter

- target
  - : Die Funktion, die aufgerufen werden soll.
- listeDerArgumente
  - : Ein Array ähnliches Objekt welches die Parameter spezifiziert, mit denen die Zielfunktion aufgerufen wird.
- `newTarget` {{optional_inline}}
  - : Der Construktor dessen Typ genutzt werden soll. Siehe auch den [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target) Operator. Wenn `newTarget` nicht existiert, ist es `target`.

### Rückgabewert

Eine neue Instanz des `target` (oder `newTarget`, wenn vorhanden), Initialisiert durch das `target` als Konstruktor mit den gegebenen Parametern.

### Ausnahmen

Es wird ein {{jsxref("TypeError")}} geworfen, Wenn `target` or `newTarget` keine Konstruktoren sind.

## Beschreibung

`Reflect.construct` erlaubt es dir, einen Konstruktor mit einer variablen Anzahl von Parametern aufzurufen. (Was auch möglich ist, bai Verwendung des [spread operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_operator) in Kombination mit dem [new operator](/de/docs/Web/JavaScript/Reference/Operators/new)).

```js
var obj = new Foo(...args);
var obj = Reflect.construct(Foo, args);
```

### `Reflect.construct()` vs `Object.create()`

Befor wir mit der Einführung von `Reflect` beginnen. Objekte können durch von `Object.create()` mithilfe einer beliebigen Kombination aus Konstruktor und Prototyp erstellt werden.

```js
function OneClass() {
    this.name = 'one';
}

function OtherClass() {
    this.name = 'other';
}

// Calling this:
var obj1 = Reflect.construct(OneClass, args, OtherClass);

// ...has the same result as this:
var obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);

console.log(obj1.name); // 'one'
console.log(obj2.name); // 'one'

console.log(obj1 instanceof OneClass); // false
console.log(obj2 instanceof OneClass); // false

console.log(obj1 instanceof OtherClass); // true
console.log(obj2 instanceof OtherClass); // true
```

Obwohl das Endergebnis das gleiche ist, gibt es einen wichtigen Unterschied im Prozess.

Wenn `Object.create()` und `Function.prototype.apply()` verwendet werden, zeigt der `new.target` Operator innerhalb der als Konstruktor verwendeten Funktion auf `undefined`, da das `newTarget` nicht zum Erstellen des Objekts verwendet wird.

Wenn Sie dagegen `Reflect.construct()` aufrufen, zeigt der `new.target` Operator auf den `newTarget` Parameter, sofern angegeben und auf `target`, falls nicht.

```js
function OneClass() {
    console.log('OneClass');
    console.log(new.target);
}
function OtherClass() {
    console.log('OtherClass');
    console.log(new.target);
}

var obj1 = Reflect.construct(OneClass, args);
// Output:
//     OneClass
//     function OneClass { ... }

var obj2 = Reflect.construct(OneClass, args, OtherClass);
// Output:
//     OneClass
//     function OtherClass { ... }

var obj3 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);
// Output:
//     OneClass
//     undefined
```

## Beispiele

### Verwendung `Reflect.construct()`

```js
var d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar                 |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------- |
| {{SpecName('ES2015', '#sec-reflect.construct', 'Reflect.construct')}} | {{Spec2('ES2015')}}     | Ursprüngliche Definition. |
| {{SpecName('ESDraft', '#sec-reflect.construct', 'Reflect.construct')}} | {{Spec2('ESDraft')}} |                           |

## Browser kompabilität

{{Compat("javascript.builtins.Reflect.construct")}}

## See also

- {{jsxref("Reflect")}}
- [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)
- [`new.target`](/en-US/docs/Web/JavaScript/Reference/Operators/new.target)
