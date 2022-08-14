---
title: Function.name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
tags:
  - ECMAScript 2015
  - Function
  - JavaScript
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Function/name
---
{{JSRef}}

Die nur lesende Eigenschaft **`name`** eines {{jsxref("Function")}} Objektes welche den Namen, der beim erstellen angegeben wurde enthält oder `"anonymous"` für anonyme Funktionen.

{{EmbedInteractiveExample("pages/js/function-name.html")}}{{js_property_attributes(0,0,1)}}

> **Note:** Zu beachten ist, dass in nicht standardisierten implementierungen vor ES2015 das `configurable` Attribute ebenfalls `false` ist.

## Beispiele

### Name bei Funktionsanweisungen

Die `name` Eigenschaft gibt den Namen einer Funktionsanweisung:

```js
function doSomething() {}
doSomething.name; // logs "doSomething"
```

### Name bei `Function` Konstruktoren

Funktionen, die mit der Syntax `new Function(...)` oder nur `Function(...)` erstellt werden, erstellen {{jsxref("Function")}} mit dem Namen "anonymous".

```js
(new Function).name; // "anonymous"
```

### Gefolgerte Funktionsnamen

Bei Variablen und Methoden kann der Name von anonymen Funktionen von ihrer syntaktischen Position gefolgert werden (neu in ECMAScript 2015).

```js
var f = function() {};
var object = {
  someMethod: function() {}
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
```

Funktionen mit einem Namen lassen sich mittels {{jsxref("Operators/Function", "Funktionanweisung", "", 1)}} definieren:

```js
var object = {
  someMethod: function object_someMethod() {}
};
console.log(object.someMethod.name); // logs "object_someMethod"

try { object_someMethod } catch(e) { console.log(e); }
// ReferenceError: object_someMethod is not defined
```

Man kann den Namen einer Funktion nicht ändern, weil diese Eigenschaft schreibgeschützt ist:

```js
var object = {
  // anonyme Funktionsdefinition
  someMethod: function() {}
};

object.someMethod.name = 'someMethod';
console.log(object.someMethod.name); // leerer String, someMethod ist anonym
```

Um sie zu ändern, kann {{jsxref("Object.defineProperty()")}} eingesetzt werden.

### Kurzform von Methodennamen

```js
var o = {
  foo(){}
};
o.foo.name; // "foo";
```

### Gebundene Funktionsnamen

{{jsxref("Function.bind()")}} erzeugt eine Funktion mit dem Namen, der sich aus `"bound "` und dem Namen der Funktion zusammensetzt.

```js
function foo() {};
foo.bind({}).name; // "bound foo"
```

### Funktionsnamen für Getter und Setter

Beim Einsatz von [`get`](/de/docs/Web/JavaScript/Reference/Functions/get) und [`set`](/de/docs/Web/JavaScript/Reference/Functions/set) Zugriffseigenschaften wird "get" oder "set" im Funktionsnamen auftauchen.

```js
var o = {
  get foo(){},
  set foo(x){}
};

var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo"
```

### Funktionsnamen in Klassen

Über `obj.constructor.name` lässt sich die "Klasse" eines Objekts überprüfen (jedoch sollten die unten stehende Warnung berücksichtigt werden):

```js
function Foo() {}  // ES2015 Syntax: class Foo {}

var fooInstance = new Foo();
console.log(fooInstance.constructor.name); // logs "Foo"
```

> **Warning:** **Warnung:** Der Skriptinterpreter wird die eingebaute `Function.name` Eigenschaft nur setzen, wenn eine Funktion keine eigene Eigenschaft mit dem Namen _name_ hat (siehe Kapitel [9.2.11 der ECMAScript2015 Sprachdefinition](https://www.ecma-international.org/ecma-262/6.0/#sec-setfunctionname)). Jedoch spezifiziert ES2015 das _static_ Schlüsselwort so, dass statische Methoden als eigene Eigenschaft des Klassenkonstruktorfunktion gesetzt wird (ECMAScript2015, [14.5.14.21.b](https://www.ecma-international.org/ecma-262/6.0/#sec-runtime-semantics-classdefinitionevaluation) + [12.2.6.9](https://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer-runtime-semantics-propertydefinitionevaluation)).

Aus diesem Grund kann der Klassenname für jede Klasse mit einer statischen Methodeneigenschaft `name()` nicht bestimmt werden:

```js
class Foo {
  constructor() {}
  static name() {}
}
```

Mit einer `static name()` Methode hält `Foo.name` nicht mehr den aktuellen Klassennamen bereit, sondern eine Referenz zu dem `name()` Funktionsobjekt. Die oben stehende Klassendefinition in ES2015 Syntax kann in ES5 Syntax für Chrome oder Firefox wie folgt übersetzt werden:

```js
function Foo() {}
Object.defineProperty(Foo, 'name', { writable: true});
Foo.name = function() {};
```

Beim Versuch die Klasse von `fooInstance` mithilfe von `fooInstance.constructor.name` herauszufinden, bekommt man nicht den Klassennamen, sondern eine Referenz auf die statische Methode. Beispiel:

```js
var fooInstance = new Foo();
console.log(fooInstance.constructor.name); // logs function name()
```

Man sieht zudem in der Beispiel der ES5 Syntax für Chrome und Firefox, dass die Definition der statischen `Foo.name` Methode überschreibbar (_writable_) wird. Wird nicht angegeben, ist der Standard für solche Definition nur lesend (_read-only_).

```js
Foo.name = 'Hello'
console.log(Foo.name); // logs "Hello" if class Foo has a static name() property but "Foo" if not.
```

Aus diesem Grund darf man sich nicht darauf verlassen, dass `Function.name` immer den Klassennamen zurück gibt.

### Symbols als Funktionsnamen

Wenn ein {{jsxref("Symbol")}} als Funktionsnamen genutzt wird und das Symbol eine Beschreibung (description) hat, ist der Methodennamen gleich der Beschreibung in eckigen Klammern.

```js
var sym1 = Symbol("foo");
var sym2 = Symbol();
bar o = {
  [sym1]: function(){},
  [sym2]: function(){}
};

o[sym1].name; // "[foo]"
o[sym2].name; // ""
```

## JavaScript-Kompressoren und -Minimierer

> **Warning:** **Warnung:** Beim der Benutzung von `Function.name` ist Vorsicht geboten, wenn Codetransformtionen, wie JavaScript Kompressoren (Minimierer) oder Obfuscators, zum Einsatz kommen. Diese Werkzeuge werden häufig im Zuge von Werkzeugketten zum Bauen von JavaScript-Programmen eingesetzt um die Größe eines Programms zu für den Produktivbetrieb zu minimieren. Solche Werkzeuge ändern die Funktionsnamen häufig beim Erstellen.

Quelltext wie dieser:

```js
function Foo() {};
var foo = new Foo();

if (foo.constructor.name === 'Foo') {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log('Oops!');
}
```

wird manchmal zu folgendem Quelltext komprimiert:

```js
function a() {};
var b = new a();
if (b.constructor.name === 'Foo') {
  console.log("'foo' is an instance of 'Foo'");
} else {
  console.log('Oops!');
}
```

In der nicht komprimierten Version läuft das Programm in den true-Zweig und gibt `'foo' is an instance of 'Foo'` aus. Die komprimierte Version verhält sich anders und läuft in den else-Zweig. Wenn man sich `Function.name` zurückerinnert, wie in obigen Beispielen, muss beachtet werden, dass Kompressoren die Methodennamen nicht ändert oder nicht annimmt, dass eine Funktion nur in diesem Quelltext benutzt.

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-name', 'name')}}                             | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-function-instances-name', 'name')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Function.name")}}
