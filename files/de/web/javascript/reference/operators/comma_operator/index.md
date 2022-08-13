---
title: Kommaoperator
slug: Web/JavaScript/Reference/Operators/Comma_Operator
tags:
  - JavaScript
  - Operator
translation_of: Web/JavaScript/Reference/Operators/Comma_Operator
---
{{jsSidebar("Operators")}}

Der **Kommaoperator** wertet jeden Operanden (von links nach rechts) aus und gibt den Wert des letzten Operanden zurück.

{{EmbedInteractiveExample("pages/js/expressions-commaoperators.html")}}

## Syntax

    ausdruck1, ausdruck2, ausdruck3...

## Parameter

- `ausdruck1, ausdruck2, ausdruck3...`
  - : Beliebige Ausdrücke.

## Beschreibung

Der Kommaoperator kann eingesetzt werden, um mehrere Ausdrücke an einer Stelle zu verwenden, die nur einen Ausdruck erwartet. Der häufigste Anwendungsfall für diesen Operator ist das Bereitstellen mehrerer Parameter in einer `for` Schleife.

## Beispiele

Gegeben ist `a` in einem 2-dimensionalen Array mit 10 Elementen auf jeder Seite. Der folgende Code verwendet den Kommaoperator um zwei Variablen auf einmal hochzuzählen.

Der folgende Code gibt in der Konsole die Werte der diagonalen Elemente im Array aus:

```js
for (var i = 0, j = 9; i <= 9; i++, j--)
  console.log('a[' + i + '][' + j + '] = ' + a[i][j]);
```

Zu Beachten ist, dass das Komma in Zuweisungen, wie etwa bei der `var` Deklaration, nicht den erwarteten Effekt des Kommaoperators zu haben scheint, da Zuweisungen nicht in einem Ausdruck existieren. Im folgenden Beispiel wird `a` auf den Wert von `b = 3` gesetzt (welcher 3 ist), aber `c = 4` wird dennoch ausgewertet und dessen Ergebnis wird in der Konsole ausgegeben (i.e., 4). Das ist auf die [Operator precedence](/de/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) zurückzuführen.

```js
// Zu Beachten ist, dass nachfolgend globals erstellt werden,
// die im Strict Mode nicht zulässig sind.

a = b = 3, c = 4; // Rückgabe von 4 in der Konsole
console.log(a); // 3 (ganz links)

x = (y = 5, z = 6); // Rückgabe von 6 in der Konsole
console.log(x); // 6 (ganz rechts)
```

Der Kommaoperator ist völlig anders als das Komma in Arrays, Objekten, Funktionsargumenten und -parametern.

### Verarbeitung und dann zurückgeben

Ein weiteres Beispiel für die Verwendung des Kommaoperators ist die Verarbeitung vor der Rückgabe. Wie oben beschrieben, wird das letzte Element zurückgegeben, jedoch auch alle weiteren werden verarbeitet. So könnte folgendes gemacht werden:

```js
function myFunc() {
  var x = 0;

  return (x += 1, x); // ist das Gleiche wie return ++x;
}
```

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar           |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ESDraft', '#sec-comma-operator', 'Comma operator')}} | {{Spec2('ESDraft')}} |                     |
| {{SpecName('ES6', '#sec-comma-operator', 'Comma operator')}}     | {{Spec2('ES6')}}         |                     |
| {{SpecName('ES5.1', '#sec-11.14', 'Comma operator')}}             | {{Spec2('ES5.1')}}     |                     |
| {{SpecName('ES1', '#sec-11.14', 'Comma operator')}}                 | {{Spec2('ES1')}}         | Initiale Definition |

## Browserkompatibilität

{{Compat("javascript.operators.comma")}}

## Siehe auch

- [for Schleife](/de/docs/Web/JavaScript/Reference/Statements/for)
