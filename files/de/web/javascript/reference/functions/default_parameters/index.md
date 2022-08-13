---
title: Default parameters
slug: Web/JavaScript/Reference/Functions/Default_parameters
tags:
  - ECMAScript 2015
  - Functions
  - JavaScript
translation_of: Web/JavaScript/Reference/Functions/Default_parameters
---
{{jsSidebar("Functions")}}

**Standard Funktionsparameter** erlaubt es formale Parameter mit vorgegebenen Werten zu initialisieren, wenn beim Funktionsaufruf kein Wert oder `undefined` übergeben wird.

{{EmbedInteractiveExample("pages/js/functions-default.html")}}

## Syntax

```js
function [name]([param1[ = defaultValue1 ][, ..., paramN[ = defaultValueN ]]]) {
   statements
}
```

## Beschreibung

In JavaScript haben Funktionsparameter standardmäßig den Default-Wert {{jsxref("undefined")}}. Manchmal ist es jedoch sinnvoll einen anderen Default-Wert zu setzen. Hier helfen Default-Parameter weiter.

In der Vergangenheit war die allgemeine Strategie für das Setzen von Default-Werten das Testen von Parameterwerten im Body der Funktion und dem Zuordnen eines Default-Wertes, wenn dieser `undefined` ist. Wenn in dem folgenden Beispiel bei dem Aufruf kein Wert für `b` mitgegeben wird, würde der Wert `undefined` sein. Bei der Auswertung von `a*b` und dem Aufruf von `multiply` wird als Rückgabewert `NaN` zurückgegeben. Im Beispiel wird deshalb dieser Rückgabewert in der zweiten Zeile der Funktion aufgefangen:

```js
function multiply(a, b) {
  b = (typeof b !== 'undefined') ?  b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5);    // 5
```

Mit dem Default-Parameter in ES2015 ist die Prüfung im Funktionskörper nicht mehr nötig. Jetzt kann man einfach `1` als den Standardwert für `b` in dem Funktionskopf definieren:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5);    // 5
```

## Beispiele

### Übergeben von `undefined` und anderen falsy Werten

In dem zweiten Aufruf, auch wenn das erste Argument explizit auf `undefined` gesetzt ist (jedoch nicht `null` oder andere {{Glossary("Falsy", "Falsy-Werte")}}, ist der Wert des Arguments `num` beim Aufruf der Default-Wert.

```js
function test(num = 1) {
  console.log(typeof num);
}

test();          // 'number' (num wird auf 1 gesetzt)
test(undefined); // 'number' (num wird auf 1 gesetzt)

// test with other falsy values:
test('');        // 'string' (num wird auf '' gesetzt)
test(null);      // 'object' (num wird auf null gesetzt)
```

### Auswerten beim Aufruf

Das Standard-Argument wird zum Zeitpunkt des Aufrufs ausgewertet. Somit wird - anders als z.B. in Python - ein neues Objekt bei jedem Funktionsaufruf erzeugt.

```js
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); //[1]
append(2); //[2], nicht [1, 2]
```

Das Gleiche gilt für Funktionen und Variablen:

```js
function callSomething(thing = something()) {
 return thing;
}

function something(){
  return "sth";
}

callSomething();  //sth
```

### Default-Parameter stehen nachfolgenden Default-Parametern zur Verfügung

Die bereits angetroffenen Parameter stehen den späteren Standardparametern zur Verfügung:

```js
function singularAutoPlural(singular, plural = singular+"s",
                            rallyingCry = plural + " ATTACK!!!") {
  return [singular, plural, rallyingCry ];
}

//["Gecko","Geckos", "Geckos ATTACK!!!"]
singularAutoPlural("Gecko");

//["Fox","Foxes", "Foxes ATTACK!!!"]
singularAutoPlural("Fox","Foxes");

//["Deer", "Deer", "Deer ... change."]
singularAutoPlural("Deer", "Deer", "Deer peaceably and respectfully
   petition the government for positive change.")
```

Diese Funktionalität wird in einer geradlinigen Weise angenähert und zeigt, wie viele Randfälle behandelt werden:

```js
function go() {
  return ":P"
}

function withDefaults(a, b = 5, c = b, d = go(), e = this,
                      f = arguments, g = this.value) {
  return [a,b,c,d,e,f,g];
}

function withoutDefaults(a, b, c, d, e, f, g){
  switch(arguments.length){
    case 0:
      a
    case 1:
      b = 5
    case 2:
      c = b
    case 3:
      d = go();
    case 4:
      e = this
    case 5:
      f = arguments
    case 6:
      g = this.value;
    default:
  }
  return [a,b,c,d,e,f,g];
}

withDefaults.call({value:"=^_^="});
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]


withoutDefaults.call({value:"=^_^="});
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### Funktionen definiert innerhalb des Funktionskörpers

Eingeführt in Gecko 33 {{geckoRelease(33)}}. Funktionen die innerhalb eines Funktionskörper deklariert werden, können nicht von Default-Parametern referenziert werden und führen zu einem {{jsxref("ReferenceError")}} (aktuell wird ein {{jsxref("TypeError")}} erzeugt, siehe {{bug(1022967)}}). Default-Parameter werden stets zuerst ausgewertet, Funktionsdeklarationen innerhalb von Funktionskörpern erst hinterher.

```js
// Funktioniert nicht! Wirft einen ReferenceError.
function f(a = go()) {
  function go(){return ":P"}
}
```

### Paramater ohne Default nach Default-Parameter

Vor Gecko 26 {{geckoRelease(26)}} erzeugte der folgende Code einen {{jsxref("SyntaxError")}}. Dieses wurde in {{bug(777060)}} behoben und funktioniert wie erwartet in späteren Versionen. Bei Aufruf werden Parameter noch immer von links nach rechts angegeben. Default-Parameter werden überschrieben, auch wenn spätere Parameter keinen Default haben:

```js
function f(x=1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

### Zerstörter Parameter mit Standardwertzuordnung

Sie können die Standardwertzuordnung mit der [destrukturierende Zuordnung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) Schreibweise verwenden:

```js
function f([x, y] = [1, 2], {z: z} = {z: 3}) {
  return x + y + z;
}

f(); // 6
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar            |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-function-definitions', 'Function Definitions')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-function-definitions', 'Function Definitions')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{CompatibilityTable}}

{{Compat("javascript.functions.default_parameters")}}

## Siehe auch

- [Original Vorschlag von ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values)
