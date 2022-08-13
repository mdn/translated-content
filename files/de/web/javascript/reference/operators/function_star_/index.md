---
title: function* Ausdruck
slug: Web/JavaScript/Reference/Operators/function*
tags:
  - ECMAScript 2015
  - Function
  - Iterator
  - JavaScript
  - Operator
  - Primary Expression
translation_of: Web/JavaScript/Reference/Operators/function*
---
{{jsSidebar("Operators")}}

Das **`function*`** Schlüsselwort kann benutzt werden, um Generatorfunktionen in einem Ausdruck zu definieren.

{{EmbedInteractiveExample("pages/js/expressions-functionasteriskexpression.html")}}

## Syntax

    function* [name]([param1[, param2[, ..., paramN]]]) {
       statements
    }

### Parameter

- `name`
  - : Der Funktionsname. Kann weggelassen werden, wenn es ein _anonymen_ Funktion ist. Der Name ist nur im Funktionskörper referenzierbar.
- `paramN`
  - : Der Name eines Argumentes, welches der Funktion übergeben wird. Eine Funktion kann bis zu 255 Argumente haben.
- `statements`
  - : Die Statements, die den Rumpf der Funktion darstellen.

## Beschreibung

Ein `function*` Ausdruck sehr ähnlich zu {{jsxref('Statements/function*', 'function* Statements')}} und hat die selbe Syntax. Der Hauptunterschied zwischen einem `function*` Ausdruck und `function*` Statement ist der _Funktionsname_, welcher in einem `function*` Ausdruck weggelassen werden kann, um eine _anonyme_ Funktion zu erstellen. Mehr Informationen sind im Kapitel [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) enthalten.

## Beispiele

Das folgende Beispiel definiert eine namenlose Generatorfunktion und weist diese `x` zu. Die Funktion liefert das Quadrat ihres Argumentes:

```js
var x = function*(y) {
   yield y * y;
};
```

## Spezifikationen

| Spezifikation                                            | Status                       | Komment              |
| -------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#', 'function*')}}     | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#', 'function*')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.operators.function_star")}}

## Siehe auch

- {{jsxref("Statements/function*", "function* Statement")}}
- {{jsxref("GeneratorFunction")}} Objekt
- [Das Iterator Protokoll](/de/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} Objekt
- {{jsxref("Statements/function", "Funktionsstatement")}}
- {{jsxref("Operators/function", "Funktionsausdruck")}}
- {{jsxref("Functions_and_function_scope", "Funktionen und Funktionsgültigkeitsbereiche")}}
