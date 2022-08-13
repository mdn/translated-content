---
title: Funktionsausdruck
slug: Web/JavaScript/Reference/Operators/function
tags:
  - Funktion
  - JavaScript
  - Operator
  - Primary Expressions
translation_of: Web/JavaScript/Reference/Operators/function
---
{{jsSidebar("Operators")}}

Das Schlüsselwort **`function`** kann benutzt werden, um eine Funktion innerhalb eines Ausdrucks zu definieren.

Man kann Funktionen auch mit Hilfe des [`Function`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function)-Konstruktors oder als [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) definieren.

{{EmbedInteractiveExample("pages/js/expressions-functionexpression.html")}}

## Syntax

    var meineFunktion = function [name]([param1[, param2[, ..., paramN]]]) {
       statements
    };

Seit ES2015 können außerdem [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) benutzt werden.

### Parameter

- `name`
  - : Der Funktionsname. Kann weggelassen werden, wenn es sich um eine _anonyme_ Funktion handelt. Der Name ist nur im Funktionskörper referenzierbar.
- `paramN`
  - : Der Name eines Argumentes, welches der Funktion übergeben wird.
- `statements`
  - : Die Befehle, aus denen der Funktionskörper besteht.

## Beschreibung

Ein Funktionsausdruck ist einem Funktionsstatement sehr ähnlich und hat fast die gleiche Syntax (siehe [Funktionsstatement](/de/docs/Web/JavaScript/Reference/Statements/function)). Der größte Unterschied zwischen einem Funktionsausdruck und einem Funktionsstatement ist der _Funktionsname,_ der in der Funktionsausdruck weggelassen werden kann, um eine anonyme Funktion zu erstellen. Ein Funktionsausdruck kann als **IIFE** (Immediately Invoked Function Expression) genutzt werden, die sofort nach Definition ausgeführt wird. Im Kapitel [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) finden sich weitere Informationen.

### Hoisting von Funktionsausdrücken

Funktionsausdrücke in Javascript werden nicht automatisch an den Beginn des Scopes gehoben (hoisted), anders als {{jsxref("Statements/function", "Funktionsdeklarationen", "#Hochziehen_der_Funktionsdeklaration")}}. Funktionsausdrücke können nicht vor Definition im Code aufgerufen werden.

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function() {
   console.log('bar');
};
```

### Benannte Funktionsausdrücke

Wenn man die aktuelle Funktion innerhalb des Funktionskörpers referenzieren will, muss ein Benannter Funktionsausdruck erstellt werden. **Dieser Name ist nur im Funktionskörper referenzierbar.** Das verhindert den Gebrauch der nicht standardisierten [`arguments.callee`](/de/docs/Web/JavaScript/Reference/Functions/arguments/callee) Eigenschaft.

```js
var math = {
  'fakultaet': function fakultaet(n) {
    if (n <= 1)
      return 1;
    return n * fakultaet(n - 1);
  }
};

math.fakultaet(3) //3;2;1;
```

Die Variable, der ein Funktionsausdruck zugewiesen wurde, hat eine `name` Eigenschaft. Wenn der Name der Funktion ausgelassen wird, wird dies der Variablenname sein (implizierter Name). Ist die Funktion benannt, wird in der Eigenschaft der Funktionsname zu finden sein (expliziter Name). Dies trifft auch auf [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) zu (diese haben keinen Namen so dass der Variablenname nur implizit gesetzt werden kann)

```js
var foo = function() {}
foo.name // "foo"

var foo2 = foo
foo2.name // "foo"

var bar = function baz() {}
bar.name // "baz"

console.log(foo === foo2); // true
console.log(typeof baz);   // undefined
console.log(bar === baz);  // false (Fehler, weil baz == undefined)
```

## Beispiele

Das folgende Beispiel definiert eine unbenannte Funktion und weist sie `x` zu. Die Funktion gibt das Quadrat ihres Argumentes zurück.

```js
var x = function(y) {
   return y * y;
};
```

Meistens werden Funktionsausdrücke in [Callbacks](/de/docs/Glossary/Callback_function) genutzt:

```js
button.addEventListener('click', function(event) {
    console.log('button wurde geklickt!')
})
```

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-function-definitions', 'Function definitions')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-function-definitions', 'Function definitions')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-13', 'Function definition')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES3', '#sec-13', 'Function definition')}}                             | {{Spec2('ES3')}}         | Initiale Fefinition. Implementiert in JavaScript 1.5. |

## Browserkompatibilität

{{Compat("javascript.operators.function")}}

## Siehe auch

- {{jsxref("Arrow_functions", "Arrow functions")}}
- {{jsxref("Functions_and_function_scope", "Funktionen und Funktionsgültigkeitsbereiche")}}
- {{jsxref("Function")}}
- {{jsxref("Statements/function", "Funktionsstatement")}}
- {{jsxref("Statements/function*", "function* Statement")}}
- {{jsxref("Operators/function*", "function* Ausdruck")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Statements/async_function", "Asynchrone Funktion")}}
- {{jsxref("Operators/async_function", "Asynchroner Funktionsausdruck")}}
