---
title: Objekt Initialisierer
slug: Web/JavaScript/Reference/Operators/Object_initializer
tags:
  - ECMAScript 2015
  - JSON
  - JavaScript
  - Literal
  - Methods
  - Object
  - Primary Expression
  - computed
  - mutation
  - properties
translation_of: Web/JavaScript/Reference/Operators/Object_initializer
original_slug: Web/JavaScript/Reference/Operators/Objekt_Initialisierer
---
{{JsSidebar("Operators")}}

Objekte können mit [new Object()](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), [Object.create()](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create), oder mit der _literal_ Notation (_Initialisierungs_ Notation) initialisiert werden. Ein Objekt Initialisierer ist eine Komma getrennte Liste von null oder mehreren Paaren von Eigenschafts-Namen und zugehörigen Werten eines Objektes, eingeschlossen in geschwungene Klammern (`{}`).

{{EmbedInteractiveExample("pages/js/expressions-objectinitializer.html")}}

## Syntax

```js
var o = {};
var o = { a: "foo", b: 42, c: {} };

var a = "foo", b = 42, c = {};
var o = { a: a, b: b, c: c };

var o = {
  property: function ([parameters]) {},
  get property() {},
  set property(value) {},
};
```

### Neue Schreibweisen in ECMAScript 2015

Man sollte in der Kompatibilitätstabelle die Unterstützung dieser Schreibweisen nachschlagen. In Umgebungen, die diese nicht unterstützen, entstehen Syntaxfehler.

```js
// Kurzschreibweisen für Eigenschaftsnamen (ES2015)
var a = "foo", b = 42, c = {};
var o = { a, b, c };

// Kurzschreibweise Methoden Namen (ES2015)
var o = {
  property([parameters]) {}
};

// Berechnete Eigenschaftsnamen (ES2015)
var prop = "foo";
var o = {
  [prop]: "hey",
  ["b" + "ar"]: "there",
};
```

## Beschreibung

Ein Objekt Initialisierer ist ein Ausdruck welcher die Initialisierung eines {{jsxref("Object")}} beschreibt. Objekte bestehen aus Eigenschaften, welche verwendet werden, um ein Objekt zu beschreiben. Die Werte der Objekt Eigenschaften können {{Glossary("primitive")}} Datentypen oder andere Objekte enthalten.

### Objekte erzeugen

Ein leeres Objekt ohne Eigenschaften kann wie folgt erzeugt werden:

```js
var object = {};
```

Jedoch: die Vorteile der literalen oder Initialisierer Notation versetzen Sie in die Lage, Objekte inklusive Eigenschaften, innerhalb geschwungener Klammern, schneller zu erzeugen. Sie schreiben einfach eine Liste von Schlüssel:Werte Paaren, getrennt durch ein Komma. Der folgende Quellcode erzeugt ein Objekt mit drei Eigenschaften mit den Schlüsseln `"foo"`, `"age"` und `"baz"`. Die Werte dieser Schlüssel sind: die Zeichenkette `"bar"`, die Zahl `42` und die dritte Eigenschaft hat ein anderes Objekt als Wert.

```js
var object = {
  foo: "bar",
  age: 42,
  baz: { myProp: 12 },
}
```

### Auf Eigenschaften zugreifen

Sobald ein Objekt erzeugt worden ist, möchte man auf seine Eigenschaften lesend oder schreibend zugreifen. Auf die Eigenschaften eines Objektes kann mit der Punktnotation oder der Klammer-Notation zugegriffen werden. Siehe [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_Accessors) für weiter Informationen.

```js
object.foo; // "bar"
object["age"]; // 42

object.foo = "baz";
```

### Eigenschaften definieren

Wir haben bereits gelernt, wie man Eigenschaften mit Hilfe der Initialisierungs Syntax schreibt. Oft gibt es Variablen im Code, die Sie in einem Objekt verwenden möchten. Man sieht oft Quellcode wie den folgenden:

```js
var a = "foo",
    b = 42,
    c = {};

var o = {
  a: a,
  b: b,
  c: c
};
```

Mit ECMAScript 2015 ist eine kürzere Schreibweise verfügbar, um das Gleiche zu erreichen:

```js
var a = "foo",
    b = 42,
    c = {};

// Kurzschreibweise für Eigenschaftsnamen in ES2015
var o = { a, b, c };

// In anderen Worten
console.log(); // true
```

#### Doppelte Eigenschaftsnamen

Bei Verwendung des gleichen Namens für Ihre Eigenschaften, wird die zweite Eigenschaft die erste überschreiben.

```js
var a = {x: 1, x: 2};
console.log(a); // { x: 2}
```

Im strikten Modus von ECMAScript 5 wurden doppelte Eigenschaftsnamen als {{jsxref("SyntaxError")}} gewertet. Mit der Einführung von berechneten Eigenschaftsnamen in ECMAScript 2015 wurde diese Einschränkung entfernt, was Duplikate zur Laufzeit möglich macht.

```js
function haveES2015DuplicatePropertySemantics(){
  "use strict";
  try {
    ({ prop: 1, prop: 2 });

    // No error thrown, duplicate property names allowed in strict mode
    return true;
  } catch (e) {
    // Error thrown, duplicates prohibited in strict mode
    return false;
  }
}
```

### Methoden Definitionen

Eine Eigenschaft eines Objekts kann auch auf eine [Funktion](/de/docs/Web/JavaScript/Reference/Functions) oder einen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) oder [Setter](/de/docs/Web/JavaScript/Reference/Functions/set)-Methode verweisen.

```js
var o = {
  property: function ([parameters]) {},
  get property() {},
  set property(value) {},
};
```

In ECMAScript 2015 gibt es eine kürzere Schreibweise, mit der das Schlüsselwort "function" überflüssig wird.

```js
// Kurzschreibweise für Methoden Namen (ES2015)
var o = {
  property([parameters]) {},
  * generator() {}
};
```

In ECMAScript 2015 gibt es eine Möglichkeit Eigenschaften mit einer Generatorfunktion zu definierten:

```js
var o = {
  *generator() {
    ........
  }
};
```

Diese ist gleich zur ES5 ähnlichen Notation (aber ECMAScript 5 hat keine Generatorfunktionen):

```js
var o = {
  generator = function* () {
    ........
  }
}
```

Für weitere Informationen und Beispiele zu Methoden, siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).

### Berechnete Bezeichnernamen

Beginnend mit ECMAScript 2015, unterstützt die Objekt Initialisierer Syntax auch berechnete Bezeichnernamen für Objekt Eigenschaften. Das gestatt dem Programmierer einen Ausdruck in eckigen Klammern anzugeben, aus welchem der Bezeichnernamen für die Objekt Eigenschaft berechnet wird. Die Schreibweise dafür ist analog zu der Klammer-Notation für den [Zugriff auf Objekt Eigenschaften](/de/docs/Web/JavaScript/Reference/Operators/Property_Accessors) welche Sie bereits benutzt haben. Dieselbe Syntax kann nun für Eigenschaften Bezeichner verwendet werden:

```js
// Computed property names (ES2015)
var i = 0;
var a = {
  ["foo" + ++i]: i,
  ["foo" + ++i]: i,
  ["foo" + ++i]: i
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3

var param = 'size';
var config = {
  [param]: 12,
  ["mobile" + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config); // { size: 12, mobileSize: 4 }
```

### Spread Eigenschaften

Die Vorschlag von [Rest/Spread Eigenschaft für ECMAScript](https://github.com/tc39/proposal-object-rest-spread) (Stage 4) fügt [Spread](/de/docs/Web/JavaScript/Reference/Operators/Spread_operator) Eigenschaften zu Objektliteralen hinzu. Er kopiert eigene aufzählbare Eigenschaften des genutzten Objektes in ein neues Objekt.

Oberflächliches Clonen (ausgenommen Eigenschaften) oder Verschmelzen von Objekten ist nun mit einer Kürzeren Syntax als {{jsxref("Object.assign()")}} möglich.

```js
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: 'bar', x: 42 };

var mergeObj = { ...obj1, ...obj2 };
// Object { foo: 'baz', x: 42, y: 13 }
```

Zu beachten ist, dass {{jsxref("Object.assign()")}} [Setters](/de/docs/Web/JavaScript/Reference/Functions/set) benutzt, was der Spread Operator nicht macht.

### Prototypmutationen

Eine Eigenschaft Definition der Form `__proto__: Wert` oder `"__proto__": Wert` erzeugt keine Eigenschaft mit dem Namen `__proto__`. Wenn der angegebene Wert ein Objekt oder [`null`](/de/docs/Web/JavaScript/Reference/Global_Objects/null) ist, wird stattdessen der `[[Prototyp]]` des erzeugten Objektes auf den angegebenen Wert geändert. (Das Objekt wird nicht verändert, falls der Wert kein Objekt oder null ist.)

```js
var obj1 = {};
assert(Object.getPrototypeOf(obj1) === Object.prototype);

var obj2 = { __proto__: null };
assert(Object.getPrototypeOf(obj2) === null);

var protoObj = {};
var obj3 = { "__proto__": protoObj };
assert(Object.getPrototypeOf(obj3) === protoObj);

var obj4 = { __proto__: "not an object or null" };
assert(Object.getPrototypeOf(obj4) === Object.prototype);
assert(!obj4.hasOwnProperty("__proto__"));
```

Pro Objekt-Literal ist nur eine einzelne Prototypmutation erlaubt: mehrfache Prototyp Mutationen führen zu einem Syntax Fehler.

Eigenschaftsdefinitionen welche nicht von der Doppelpunkt Notation Gebrauch machen, sind keine Prototyp Mutationen: es sind Eigenschaftsdefinitionen die sich verhalten wie jede andere Definition von Eigenschaftsbezeichnern auch.

```js
var __proto__ = "variable";

var obj1 = { __proto__ };
assert(Object.getPrototypeOf(obj1) === Object.prototype);
assert(obj1.hasOwnProperty("__proto__"));
assert(obj1.__proto__ === "variable");

var obj2 = { __proto__() { return "hello"; } };
assert(obj2.__proto__() === "hello");

var obj3 = { ["__prot" + "o__"]: 17 };
assert(obj3.__proto__ === 17);
```

## Objektliteral-Notation vs JSON

Die Objekt-Literal Notation ist nicht dasselbe wie die JavaScript Object Notation ([JSON](/de/docs/Glossary/JSON)). Obwohl sie ähnlich aussehen, gibt es Unterschiede zwischen ihnen:

- JSON erlaubt nur Eigenschaftsdefinitionen mit `"Eigenschaft": Wert` Syntax. Der Eigenschaftsname muss in doppelten Anführungszeichen geschrieben werden, und die Definition kann nicht in Kurzschreibweise erfolgen.
- In JSON können die Werte nur Strings, Zahlen, Arrays, `true`, `false`, `null` oder andere (JSON) Objekte sein.
- Ein Funktionswert (siehe "Methoden" oben) kann in JSON keinem Wert zugeordnet werden.
- Objekte wie {{��ky�ڵ}} werden nach dem Aufruf von {{��ky�R8�Z��}}, in einen String umgewandelt, .
- {{jsxref("JSON.parse()")}} weist berechnete Eigenschaftsnamen zurück und wirft eine Fehlermeldung.

## Spezifikationen

| Spezifikation                                                                                    | Status                       | Kommentar                                                                                                                            |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ES1')}}                                                                         | {{Spec2('ES1')}}         | Initiale Definition.                                                                                                                 |
| {{SpecName('ES5.1', '#sec-11.1.5', 'Object Initializer')}}                     | {{Spec2('ES5.1')}}     | [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) und [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) hinzugefügt. |
| {{SpecName('ES2015', '#sec-object-initializer', 'Object Initializer')}} | {{Spec2('ES2015')}}     | Kurzschreibweise für Methoden-/Eigenschaftsnamen und berechnete Eigenschaftsnamen hinzugefügt.                                       |
| {{SpecName('ESDraft', '#sec-object-initializer', 'Object Initializer')}} | {{Spec2('ESDraft')}} |                                                                                                                                      |
| [Rest/Spread Properties for ECMAScript](https://github.com/tc39/proposal-object-rest-spread)     | Entwurf                      | Stage 4 (Fertig).                                                                                                                    |

## Browserkompatibilität

{{Compat("javascript.operators.object_initializer")}}

## Siehe auch

- [Eigenschaftszugriffe](/de/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
- [`get`](/de/docs/Web/JavaScript/Reference/Functions/get) / [`set`](/de/docs/Web/JavaScript/Reference/Functions/set)
- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
