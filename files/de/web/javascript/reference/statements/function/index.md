---
title: Funktion
slug: Web/JavaScript/Reference/Statements/function
translation_of: Web/JavaScript/Reference/Statements/function
original_slug: Web/JavaScript/Reference/Statements/funktion
---
{{jsSidebar("Statements")}}

Die **Funktionsdeklaration** definiert eine Funktion mit den angegebenen Parametern.

Es kann auch eine Funktion mit dem {{jsxref("Function")}}-Konstruktor und einem {{jsxref("Operators/function", "Funktionsausdruck")}} deklariert werden.

## Syntax

    function name([param,[, param,[..., param]]]) {
       [statements]
    }

- `name`
  - : Der Funktionsname.

- `param`
  - : Der Name des Arguments, der an die Funktion übergeben werden soll. Eine Funktion kann bis zu 255 Argumente haben.

- `statements`
  - : Die Ausdrücke, aus denen der Funktionskörper besteht.

## Beschreibung

Eine Funktion, die mit der Funktionsdeklaration erstellt wurde, ist ein `Function` -Objekt und hat alle Eigenschaften, Methoden und Verhalten des **Function**-Objekts. Siehe {{jsxref("Function")}} für detaillierte Information über Funktionen.

Eine Funktion kann auch mit einem Ausdruck erzeugt werden (siehe {{jsxref("Operators/function", "function expression")}}).

Standardmäßig geben Funktionen `undefined`zurück. Um einen beliebigen anderen Wert zurückzugeben muss die Funktion einen {{jsxref("Statements/return", "return")}}-Ausdruck haben, der den Wert der Rückgabe angibt.

### Bedingungskreierte Funktionen

Funktionen können bedingungskreiert werden. Das heißt: Eine Funktionsanweisung kann innerhalb einer `if`-Anweisung verschachtelt werden. Die meisten modernen Browser, abseits von Mozilla, werden solche konditionsbasierten Deklarationen als unkonditionelle Deklarationen behandeln und die Funktion erstellen, ob wahr oder nicht, siehe [dieser Artikel](http://kangax.github.io/nfe/#function-statements) für eine Übersicht. Deshalb sollten sie so nicht verwendet werden. Stattdessen sollten Funktionsausdrücke für eine konditionelle Erstellung verwendet werden.

### Hochziehen der Funktionsdeklaration

Funktionsdeklarationen in Javascript ziehen die Funktionsdefinition hoch. D. h. Funktionen können benutzt werden noch bevor sie deklariert wurden:

```js
hochgezogen(); // loggt "foo"

function hochgezogen() {
  console.log("foo");
}
```

Zu beachten ist aber, dass {{jsxref("Operators/function", "Funktionsausdrücke")}} nicht hochgezogen werden:

```js
nichtHochgezogen(); // TypeError: nichtHochgezogen is not a function

var nichtHochgezogen = function() {
   console.log("bar");
};
```

## Beispiele

### Mit `function`

Der folgende Code deklariert eine Funktion, die die Summe aller Verkäufe zurückgibt, wenn sie die Anzahl der verkauften Einheiten `a`, `b`, und `c`übergeben bekommt.

```js
function berechne_verkäufe(einheit_a, einheit_b, einheit_c) {
   return einheit_a*79 + einheit_b * 129 + einheit_c * 699;
}
```

## Spezifikationen

| Spezifikation                                                                                    | Status                   | Kommentar                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------ | -------------------------------------------------- |
| {{SpecName('ES6', '#sec-function-definitions', 'Function definitions')}} | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ES5.1', '#sec-13', 'Function definition')}}                         | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES3', '#sec-13', 'Function definition')}}                         | {{Spec2('ES3')}}     |                                                    |
| {{SpecName('ES1', '#sec-13', 'Function definition')}}                         | {{Spec2('ES1')}}     | Initial definition. Implemented in JavaScript 1.0. |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
- {{jsxref("Function")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Statements/function*", "function* statement")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Functions/Arrow_functions", "Arrow functions")}}
- {{jsxref("GeneratorFunction")}}
