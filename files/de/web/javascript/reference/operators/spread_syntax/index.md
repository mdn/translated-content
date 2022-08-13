---
title: Spread syntax
slug: Web/JavaScript/Reference/Operators/Spread_syntax
translation_of: Web/JavaScript/Reference/Operators/Spread_syntax
---
{{jsSidebar("Operators")}}Die **Spread-Syntax** erlaubt es, einen einzelnen Array-Ausdruck oder String an Stellen zu expandieren, an denen Null oder mehr Argumente (für Funktionsaufrufe) oder Elemente (für Array-Literale) erwartet werden, oder einen Objekt-Ausdruck an Stellen zu expandieren, an denen Null oder mehr Schlüssel-Wert-Paare (für Objektliterale) erwartet werden.{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}

## Syntax

Für Funktionsaufrufe:

    myFunction(...iterableObj);

Für Array-Literale oder Strings:

    [...iterableObj, '4', 'fünf', 6];

Für Objektliterale (neu in ECMAScript 2018):

    let objClone = { ...obj };

## Beispiele

### Spread in Funktionsaufrufen

#### Apply ersetzen

Es ist üblich {{jsxref( "Function.prototype.apply")}} zu benutzen, wenn man die Elemente eines Arrays als Argumente eines Funktionsaufrufs nutzen möchte.

```js
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);
```

Mit der Spread-Syntax lässt sich das ganze wie folgt schreiben:

```js
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);
```

Jedes Argument der Argumentliste kann die Spread-Syntax verwenden, und sie kann auch mehrfach verwendet werden.

```js
function myFunction(v, w, x, y, z) { }
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### Apply bei new

Beim Aufruf eines Konstruktors mit `new`, ist es nicht möglich ein Array und `apply` **direkt** zu benutzen (`apply` führt `[[Call]]` und nicht `[[Construct]]` aus). Allerdings kann dank der Spread-Syntax ein Array mit `new` verwendet werden:

```js
var dateFields = [1970, 0, 1];  // 1. Januar 1970
var d = new Date(...dateFields);
```

Um `new` mit einem Array ohne die Spread-Syntax zu nutzen, müsste man das **indirekt** mit _Partial Application_ umsetzen:

```js
function applyAndNew(constructor, args) {
  function partial () {
    return constructor.apply(this, args);
  };
  if (typeof constructor.prototype === "object") {
    partial.prototype = Object.create(constructor.prototype);
  }
  return partial;
}


function myConstructor () {
  console.log("arguments.length: " + arguments.length);
  console.log(arguments);
  this.prop1="val1";
  this.prop2="val2";
};

var myArguments = ["hi", "wie", "geht's", "dir", "kumpel", null];
var myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments);
// (internal log of myConstructor):           arguments.length: 6
// (internal log of myConstructor):           ["hi", "wie", "geht's", "dir", "kumpel", null]
// (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}
```

### Spread bei Array-Literalen

#### Ein mächtigeres Array-Literal

Ohne Spread-Syntax ist die Array-Literal-Syntax nicht ausreichend, um ein neues Array zu erzeugen, das aus einem bereits existierenden Array besteht. Man muss dann auf imperative Programmierung mit einer Kombination aus `push`, `splice`, `concat`, etc. umsteigen. Mit Spread-Syntax wird der Code kurz und bündig:

```js
var parts = ['Schultern', 'Knie'];
var lyrics = ['Kopf', ...parts, 'und', 'Zehen'];
// ["Kopf", "Schultern", "Knie", "und", "Zehen"]
```

Genau wie bei Argumentlisten von Funktionsaufrufen kann `...` überall und mehrach bei Array-Literalen benutzt werden.

#### Ein Array kopieren

```js
var arr = [1, 2, 3];
var arr2 = [...arr]; // wie arr.slice()
arr2.push(4);

// arr2 enthält[1, 2, 3, 4]
// arr bleibt unverändert
```

**Bemerkung:** Spread-Syntax geht beim Kopieren eines Arrays effektiv eine Ebene tief. Daher kann es für das Kopieren mehrdimensionaler Arrays ungeeignet sein, wie das folgende Beispiel zeigt (dasselbe gilt für {{jsxref("Object.assign()")}} und Spread-Syntax).

```js
var a = [[1], [2], [3]];
var b = [...a];
b.shift().shift(); // 1
// Auch Array a wurde verändert. [[], [2], [3]]
```

#### Eine bessere Möglichkeit, Arrays zu verketten

{{jsxref("Array.concat")}} wird oft verwendet, um ein Array an das Ende eines bestehenden Arrays anzuhängen. Ohne Spread-Syntax wird dies wie folgt gemacht:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Hänge alle Elemente von arr2 an arr1
arr1 = arr1.concat(arr2);
```

Mit Spread-Syntax wird daraus:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
```

{{jsxref("Array.unshift")}} wird oft verwendet, um ein Array von Werten am Anfang eines bestehenden Arrays einzufügen. Ohne Spread-Syntax wird dies wie folgt gemacht:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// Alle Items von arr2 auf arr1 voranstellen
Array.prototype.unshift.apply(arr1, arr2) // arr1 ist jetzt [3, 4, 5, 0, 1, 2]
```

Bei der Spread-Syntax wird dies zu \[Beachten Sie jedoch, dass dies ein neues Array `arr1` erzeugt. Im Gegensatz zu {{jsxref("Array.unshift")}} ändert es nicht das ursprüngliche Array `arr1` in-place]:

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr2, ...arr1]; // arr1 ist jetzt [3, 4, 5, 0, 1, 2]
```

### Spread für Objektliterale

Der Vorschlag zu [Rest-/Spread-Attributen für ECMAScript](https://github.com/tc39/proposal-object-rest-spread) (Stufe 4) fügt Spread-Attribute zu [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) hinzu. Dadurch werden die abzählbaren Attribute von einem gegebenen Objekt zu einem neuen hinzugefügt.

Flaches Klonen (ohne `prototype`) oder Zusammenführen von Objekten ist nun mit einer kürzeren Syntax als {{jsxref("Object.assign()")}} möglich.

```js
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

Beachten Sie, dass {{jsxref("Object.assign()")}}} im Gegensatz zur Spread-Syntax [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) auslöst.

Beachten Sie, dass Sie die Funktion {{jsxref("Object.assign()")}} weder ersetzen noch nachahmen können:

```js
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) => ( { ...objects } );

var mergedObj = merge ( obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: "baz", y: 13 } }

var mergedObj = merge ( {}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: "baz", y: 13 } }
```

Im obigen Beispiel funktioniert der Spread-Operator nicht wie erwartet: er klappt ein Array von Argumenten aus und liefert ein Array dieser, aufgrund des rest Parameters.

### Nur für iterierbare Objekte

Spread-Syntax (anders als bei Spread-Eigenschaften) kann nur auf [iterierbare Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) angewendet werden:

```js
var obj = {'key1': 'value1'};
var array = [...obj]; // TypeError: obj is not iterable
```

### Spread mit mehreren Werten

Beachten Sie bei der Verwendung von Spread-Syntax für Funktionsaufrufe die Möglichkeit der Überschreitung der Argumentlängenbegrenzung der JavaScript-Engine. Siehe [`apply()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/apply "Die Methode apply() ruft eine Funktion mit einem vorgegeben Wert für this auf sowie weiteren Argumenten, die als Array (oder Array-ähnliches Objekt) bereitgestellt werden.") für weitere Details.

## Rest-Syntax (Parameter)

Rest-Syntax sieht genauso aus wie die Spread-Syntax und wird für das Destrukturieren von Arrays und Objekten eingesetzt. Rest-Syntax ist sozusagen das Gegenteil von Spread-Syntax: Spread klappt die einzelnen Bestandteile eines Arrays aus, während Rest verschiedene einzelne Elemente zu einem Array zusammenfasst. Siehe [Rest-Parameter.](/de/docs/Web/JavaScript/Reference/Functions_and_function_scope/rest_parameters)

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar                                                                                                                                                                                                                             |
| -------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES2015', '#sec-array-initializer')}}     | {{Spec2('ES2015')}}     | Definiert in mehreren Abschnitten der Spezifikation: [Array Initializer](http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer), [Argument Lists](http://www.ecma-international.org/ecma-262/6.0/#sec-argument-lists) |
| {{SpecName('ESDraft', '#sec-array-initializer')}}     | {{Spec2('ESDraft')}} | Keine Änderungen                                                                                                                                                                                                                      |
| {{SpecName('ESDraft', '#sec-object-initializer')}} | {{Spec2('ESDraft')}} | Definiert in [Object Initializer](https://tc39.github.io/ecma262/2018/#sec-object-initializer)                                                                                                                                        |

## Browser-Kompatibilität

{{Compat("javascript.operators.spread")}}

## Siehe auch

- [Rest-Parameters](/de/docs/Web/JavaScript/Reference/Functions_and_function_scope/rest_parameters) (ebenfalls ‘`...`’)
