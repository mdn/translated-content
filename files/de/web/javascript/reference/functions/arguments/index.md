---
title: Arguments object
slug: Web/JavaScript/Reference/Functions/arguments
tags:
  - Functions
  - JavaScript
  - Reference
  - arguments
translation_of: Web/JavaScript/Reference/Functions/arguments
---
{{jsSidebar("Functions")}}

Das **`arguments`**-Objekt ist ein Array-ähnliches Objekt, das auf die übergebenen Parameter einer Funktion verweist.

{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}

## Syntax

    arguments

## Beschreibung

Das `arguments`-Objekt ist eine lokal verfügbare Variable in allen (Nicht-Pfeil-) Funktionen. Man kann auf die Parameter einer Funktion referenzieren, wenn man in einer Funktion das `arguments`-Objekt benutzt. Dieses Objekt enthält einen Eintrag für jeden übergebenen Parameter der Funktion. Der erste Eintrag beginnt beim Index 0. Wenn einer Funktion drei Parameter übergeben werden, kann wie folgt auf diese zugegriffen werden;

```js
arguments[0]
arguments[1]
arguments[2]
```

Die Parameter können auch überschrieben werden:

```js
arguments[1] = 'new value';
```

Das `arguments`-Objekt ist kein {{jsxref("Array")}}. Es ist ähnlich wie ein `Array`, hat aber keine Eigenschaften eines `Array`s mit Ausnahme von {{jsxref("Functions/arguments/length", "length")}}. Zum Beispiel ist die {{jsxref("Global_Objects/Array/pop", "pop")}}-Methode nicht vorhanden. Jedoch kann `arguments` zu einem echten `Array` konvertiert werden:

```js
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
const args = Array.from(arguments);
```

> **Warning:** Der Einsatz von slice auf arguments kann Optimierungen bei einigen JavaScript-Engines (z. B. bei V8 — [mehr Informationen](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)) verhindern. Wenn man sich darum kümmert, sollte ein neues Array erstellt werden, indem über das arguments-Objekt iteriert wird. Eine Alternative ist der Einsatz von `Array.apply` wie folgt:```js
> var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));)
>
> ```
>
> ```

Man kann das `arguments`-Objekt nutzen, um eine Funktion mit mehr übergebenen Parametern, als die der formalen Definition, zu verarbeiten. Diese Technik ist hilfreich für Funktionen mit variabler Parameteranzahl. Man kann {{jsxref("Functions/arguments/length", "arguments.length")}} nutzen, um die Anzahl der übergebenen Parameter festzustellen und dann jeden Parameter über das `arguments`-Objekt zu verarbeiten. (Um die Anzahl der deklarierten Parameter festzustellen, kann die {{jsxref("Functions/length", "Funktion.length")}} Eigenschaft genutzt werden.)

### Einsatz von `typeof` bei arguments

Der Typ von `arguments` ist `'object'`

```js
console.log(typeof arguments); // 'object'
```

Der Typ von individuellen Argumenten kann über den Index ermittelt werden.

```js
console.log(typeof arguments[0]); // Gibt den Typ des individuellen Arguments zurück
```

### Einsatz der Spread Syntax mit arguments

Man kann die {{jsxref("Array.from()")}} Methode oder den [spread operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_operator) nutzen, um arguments zu einem echten Array zu konvertieren:

```js
var args = Array.from(arguments);
var args = [...arguments];
```

## Eigenschaften

- {{jsxref("Functions/arguments/callee", "arguments.callee")}}
  - : Referenz zur aktuell ausgeführten Funktion.
- {{jsxref("Functions/arguments/caller", "arguments.caller")}} {{ Obsolete_inline() }}
  - : Referenz zur Funktion, die die aktuelle Funktion ausführt hat.
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : Anzahl der übergebenen Funktionsparameter.
- {{jsxref("Functions/arguments/@@iterator", "arguments[@@iterator]")}}
  - : Gibt ein Array-Iterator-Objekt zurück, welches die Werte an allen Indizes von arguments enthält.

## Beispiele

### Definition einer Funktion, die mehrere Strings konkateniert

Dieses Beispiel definiert eine Funktion, die mehrere Strings konkateniert. Der einzige formale Parameter der Funktion ist ein String, der die Zeichen enthält, die die einzelnen Elemente trennt. Die Funktion ist wie folgt definiert:

```js
function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

Man kann eine beliebige Anzahl von Parametern der Funktion übergeben und es wird jedes Argument für den String eingesetzt.

```js
// returns "red, orange, blue"
myConcat(", ", "red", "orange", "blue");

// returns "elephant; giraffe; lion; cheetah"
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// returns "sage. basil. oregano. pepper. parsley"
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
```

### Definition einer Funktion, die HTML-Listen erstellt

Im Beispiel wird eine Funktion definiert, die einen String mit HTML für eine Liste zurückgibt. Der einzige formale Parameter der Funktion ist ein String, der "`u`" für eine ungeordnete Liste oder "`o`" für eine geordnete Liste enthält. Die Funktion ist wie folgt definiert:

```js
function list(type) {
  var result = "<" + type + "l><li>";
  var args = Array.prototype.slice.call(arguments, 1);
  result += args.join("</li><li>");
  result += "</li></" + type + "l>"; // end list

  return result;
}
```

Der Funktion kann eine variable Anzahl an Parametern übergeben werden und es wird jeder Parameter als Listeneintrag einer Liste hinzugefügt. Zum Beispiel:

```js
var listHTML = list("u", "One", "Two", "Three");

/* listHTML is:

"<ul><li>One</li><li>Two</li><li>Three</li></ul>"

*/
```

### Rest, default und Destrukturierende Parameter

Das `arguments`-Objekt kann in Verbindung mit [rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), und [destrukturierenden](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parametern eingesetzt werden.

```js
function foo (...args) {
  return args;
}
foo(1, 2, 3); // [1,2,3]
```

Wenn der Einsatz von [rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), und [destrukturierenden](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parametern nicht die [die Eigenschaften des `arguments` Objekts verändert, gibt es eine Unterschied zwischen dem strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode#Making_eval_and_arguments_simpler) und dem nicht strict mode.

Wenn eine nicht-strikte (non-strict) Funktion nicht [rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), oder [destrukturierende](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parameter enthält, referenzieren die Werte des `arguments` Objektes direkt auf die deklarierten Parameter und umgekehrt. Siehe dazu folgenden Quelltext:

```js
function func (a) {
  arguments[0] = 99; // Aktualisert auch arguments[0] und a
  console.log(a);
}
func(10); // 99
```

und

```js
function func (a) {
  a = 99; // Aktualisert auch arguments[0] und a
  console.log(arguments[0]);
}
func(10); // 99
```

Wenn eine nicht-strikte (non-strict) Funktion [rest](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters), [default](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), oder [destrukturierende](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Parameter enthält, referenzieren die Werte des `arguments` Objektes **nicht** direkt auf die deklarierten Parameter und umgekehrt. Die Werte in `arguments` sind die Werte, die der Funktion beim Aufruf übergeben werden:

```js
function func(a = 55) {
  arguments[0] = 99; // aktualisert arguments[0] aber nicht a
  console.log(a);
}
func(10); // 10
```

und

```js
function func(a = 55) {
  a = 99; // aktualisert a aber nicht arguments[0]
  console.log(arguments[0]);
}
func(10); // 10;
```

und

```js
function func(a = 55) {
  console.log(arguments[0]);
}
func(); // undefined;
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar                                            |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1 |
| {{SpecName('ES5.1', '#sec-10.6', 'Arguments Object')}}                                         | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES2015', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}} | {{Spec2('ES2015')}}     |                                                      |
| {{SpecName('ESDraft', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}} | {{Spec2('ESDraft')}} |                                                      |

## Browserkompatibilität

{{Compat("javascript.functions.arguments")}}

## Siehe auch

- {{jsxref("Function")}}
