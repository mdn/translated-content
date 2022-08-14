---
title: arguments.callee
slug: Web/JavaScript/Reference/Functions/arguments/callee
tags:
  - Deprecated
  - Functions
  - JavaScript
  - Property
  - arguments
translation_of: Web/JavaScript/Reference/Functions/arguments/callee
---
{{jsSidebar("Functions")}}

Die **`arguments.callee`**-Eigenschaft enthält die Referenz der aktuell ausgeführten Funktion.

## Beschreibung

`callee` ist eine Eigenschaft des `arguments`-Objektes. Sie kann eingesetzt werden, um aus dem Körper einer Funktion auf die aktuell ausgeführte Funktion zu referenzieren. Dieses ist sinnvoll, wenn der Name der Funktion unbekannt ist. Auch in einer anonymen Funktion (ohne Namen) funktioniert dieses.

> **Warning:** **Warnung**: Die Version 5 von ECMAScript (ES5) verbietet die nutzung von `arguments.callee() im`{{jsxref("Strict_mode", "strict mode")}}. Der Einsatz von `arguments.callee()`soll vermieden werden, wenn function-Ausdrücke einen Namen haben oder Funktionen deklariert werden, die sich selbst aufrufen müssen.

### Warum wurde `arguments.callee` vom ES5 strict mode entfernt?

(angepasst von [einer Stack Overflow-Antwort von olliej](http://stackoverflow.com/a/235760/578288))

Frühe Versionen von JavaScript erlauben keine benamten Funktions-Anweisungen. Aus diesem Grund ist es nicht möglich rekursive Funktions-Anweisungen zu schreiben.

Diese Syntax funktioniert, zum Beispiel:

```js
function factorial (n) {
    return !(n > 1) ? 1 : factorial(n - 1) * n;
}

[1, 2, 3, 4, 5].map(factorial);
```

aber:

```js
[1, 2, 3, 4, 5].map(function (n) {
    return !(n > 1) ? 1 : /* what goes here? */ (n - 1) * n;
});
```

funktioniert nicht. Um dieses problem zu lösen wurde `arguments.callee` hinzugefügt.

```js
[1, 2, 3, 4, 5].map(function (n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
```

Allerdings ist dieses eine schlechte Lösung , weil diese (in Verbindung mit anderen `arguments`, `callee`, and `caller`-Problemen) inlining und Endrekursion unmöglich macht (man kann es benutzen um Tracing zu realisieren, jedoch ist der beste Code immer suboptimal). Ein weiteres Problem liegt darin, dass rekursive Aufrufe ein unterschiedliches `this` bekommen können (siehe folgendes Beispiel):

```js
var global = this;

var sillyFunction = function(recursed) {
    if (!recursed) { return arguments.callee(true); }
    if (this !== global) {
        alert('This is: ' + this);
    } else {
        alert('This is the global');
    }
}

sillyFunction();
```

ECMAScript 3 löste das Problem indem benamte Funktions-Ausdrücke erlaubt wurden:

```js
[1, 2, 3, 4, 5].map(function factorial (n) {
    return !(n > 1) ? 1 : factorial(n - 1)*n;
});
```

Dieses hat zahlreiche Vorteile:

- Die Funktion kann wie jede andere Funktion im Code aufgerufen werden.
- Es wird keine Variable im äußeren Gültigkeitsbereich erstellt ([Ausnahme für IE 8 und kleiner](http://kangax.github.io/nfe/#example_1_function_expression_identifier_leaks_into_an_enclosing_scope))
- Es gibt eine bessere Performance wenn das arguments-Objekt genutzt wird

Eine andere Funktion die verboten wurde ist `arguments.callee.caller` oder spezifischer `Function.caller`. Warum ist das so? Zu jedem Zeitpunkt ist es möglich, den tiefsten Aufrufer von jeder Funktion auf dem Stack herauszufinden und weil das herausfinden des Aufrufer-Stacks hat einen hauptsächlichen Effekt: Es macht das Optimieren unmöglich oder sehr viel schwerer. Zum Beispiel ist es nicht Möglich `f` zu inlinen, wenn nicht sichergestellt ist, dass eine Funktion `f` nicht eine unbekannte Funktion aufruft. Das bedeutet, dass jeder Aufruf eine große Anzahl an Sicherheitsabfragen durchführen müsste um inlinen zu können.

```js
function f(a, b, c, d, e) { return a ? b * c : d * e; }
```

Wenn der JavaScript-Interpreter nicht garantieren kann, dass alle der unterstützten Argumente Nummern beim Aufruf sind, muss dieser Prüfungen für alle Argumente einfügen bevor der Code geinlinet werden kann oder die Funktion kann nicht geinlinet werden. In dieser Situation sollte ein guter Interpreter die Prüfungen neu anordnen, damit diese Optimal abgefragt werden und nur die Werte, die benutzt werden geprüft werden. Weil dieses in vielen Fällen nicht möglich ist, wird es in diesen unmöglich zu inlinen.

## Beispiele

### Einsatz von `arguments.callee` in einer anonymen rekursiven Funktion

Eine rekursive Funktion muss sich selber aufrufen können. Normalerweise referenziert eine Funktion sich selbst mit dem Namen. Weil eine anonyme Funktion (welche von einem [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function "JavaScript/Reference/Operators/Special/function") oder dem [`Function` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Function "JavaScript/Reference/Global_Objects/Function") erstellt werden kann) hat keinen Namen. Wenn also keine Variable diese Funktion referenziert, ist der einzige Weg die Funktion über `arguments.callee` aufzurufen.

Das folgende Beispiel definiert eine Funktion, welche wiederum eine Fakultätsfunktion Definiert und sie zurückgibt. Dieses Beispiel ist nicht sehr praktisch und es gibt fast keine Fälle, in denen dasselbe Ergebnis nicht mit [Funktionsausdrücken mit Namen](/de/docs/Web/JavaScript/Reference/Operators/function) erreicht werden kann.

```js
function create() {
   return function(n) {
      if (n <= 1)
         return 1;
      return n * arguments.callee(n - 1);
   };
}

var result = create()(5); // returns 120 (5 * 4 * 3 * 2 * 1)
```

### Der einsatz von `arguments.callee` mit keinen guten Alternativen

In einem Fall wie dem Folgenden gibt es jedoch keine Alternativen zu arguments.callee, so dass seine Veraltung ein Fehler sein könnte (siehe {{Bug("725398")}}):

```js
function createPerson(sIdentity) {
    var oPerson = new Function('alert(arguments.callee.identity);');
    oPerson.identity = sIdentity;
    return oPerson;
}

var john = createPerson('John Smith');

john();
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar                                            |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-10.6', 'Arguments Object')}}                                         | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}} | {{Spec2('ESDraft')}} |                                                      |

## Browserkompatibilität

{{Compat("javascript.functions.arguments.callee")}}

## Siehe auch

- {{jsxref("Function")}}
