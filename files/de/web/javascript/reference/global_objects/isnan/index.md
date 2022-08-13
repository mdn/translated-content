---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
tags:
  - JavaScript
  - Method
translation_of: Web/JavaScript/Reference/Global_Objects/isNaN
---
{{jsSidebar("Objects")}}

Die **`isNaN()`** Methode prüft, ob ein Wert {{jsxref("NaN")}} ist. Bemerkung: Aufgrund innerer Zwänge weist die `isNaN` Methode [interessante](#Description) Regeln auf. Alternativ kann die in ECMAScript 2015 definierte Methode {{jsxref("Number.isNaN()")}} genutzt werden.

{{EmbedInteractiveExample("pages/js/globalprops-isnan.html")}}

## Syntax

    isNaN(testWert)

### Parameter

- `testWert`
  - : Der zu testende Wert.

### Rückgabewert

**`true`** wenn der gegebene Wert {{jsxref("NaN")}} ist, andernfalls **`false`**.

## Beschreibung

### Die notwendigkeit einer `isNaN Methode`

Anders als bei allen anderen Werten in JavaScript, ist es nicht möglich mit den Gleichheitsoperatoren ({{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} and {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}) zu prüfen, ob ein Wert {{jsxref("NaN")}} ist oder nicht. `NaN == NaN` und `NaN === NaN` werden zu `false`ausgewertet. Aus diesem Grund wird eine `isNaN` Methode benötigt.

### Ursprünge des `NaNWertes`

`NaN` Werte werden generiert, wenn das Ergebnis einer arithmetischen Operation ein undefinierter Wert oder ein nicht repräsentierbarer Wert ist. Diese Werte entsprechen nicht unbedingt dem Überlauf von Wertebereichen. Ein `NaN` Ergebnis kann ebenfalls entstehen, wenn es für eine Operation keine primitive Zahl als Darstellung gibt.

Beispielsweise ist das Ergebnis einer Division von null durch null `NaN`. Jedoch ist das Ergebnis nicht `NaN` wenn andere Zahlen durch null geteilt werden.

### Verwirrende Spezialfälle

Schon seit den frühesten Versionen der `isNaN` Methodendefinition ist das Verhalten für nicht numerische Typen nicht trivial. Wenn der zu überprüfende Wert nicht vom Typ [Number](http://es5.github.com/#x8.5) ist, so wird dieser Wert zuerst in den Typ [Number](http://es5.github.com/#x8.5) konvertiert. Erst dann wird geprüft, ob der Wert {{jsxref("NaN")}} ist. Weil einige nicht numerischen Werte trotzdem als Zahlen interpretiert werden können (leere Strings und Werte vom Typ boolean können als Nullen und Einsen dargestellt werden) ist das `false`-Resultat der Funktion manchmal unerwartet. Der leere String ist ein Beispiel dafür, weil dieser definitiv keine Nummer ist. Das verwirrende ist jedoch dass "not a number" eine spezielle Repräsentation in den IEEE-754 Gleitkommazahlen besitzt. Aus diesem Grund kann die Methode so interpretiert werden, dass sie die Antwort auf die Frage gibt, ob ein Wert, der als Nummer interpretiert wird, eine IEEE-754 'Not a number' ist.

Die aktuelle Version von ECMAScript (ES2015) enthält die Methode {{jsxref("Number.isNaN()")}}. `Number.isNaN(x)` wird eine zuverlässige Möglichkeit sein um zu testen ob `x` den Wert `NaN` entspricht oder nicht. Mit `Number.isNaN` wird exakt abgefragt, ob es sich um eine Nummer handelt. Eine Alternative zu testen ob eine Variable `NaN` ist, ist die Abfrage `(x != x)`. Diese wird im Normalfall zu `false`ausgewertet, außer wenn der wert `NaN ist.`

Ein Polyfill für `isNaN` ist folgender (der Polyfill nutzt die einzigartigen Eigenschaften von `NaN`, dass dieses niemals gleichwertig mit `NaN` ist):

```js
var isNaN = function(value) {
    var n = Number(value);
    return n !== n;
}
```

## Beispiele

```js
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false

// strings
isNaN("37");      // false: "37" wird in die Nummer 37 konvertiert welche nicht NaN ist
isNaN("37.37");   // false: "37.37" wird in die Nummer 37.37 konvertiert welche nicht NaN ist
isNaN("37,5");    // true
isNaN("123ABC");  // true:  parseInt("123ABC") ist 123 aber Number("123ABC") ist NaN
isNaN("");        // false: der leere String wird zu 0 konvertiert welche nicht NaN ist
isNaN(" ");       // false: ein String mit Leerzeichen wird zu 0 konvertiert welche nicht NaN ist

// dates
isNaN(new Date());                // false
isNaN(new Date().toString());     // true

// Dieses ist das Beispiel, warum isNaN nicht zuverlässig ist.
isNaN("blabla")   // true: "blabla" wird zu einer Nummer konvertiert
                  // Das Konvertieren schlägt fehl und gibt NaN zurück
```

### Nützliche Spezialfälle

Es gibt weitere nützliche Wege `isNaN()` einzusetzen: Wenn `isNaN(x)` `false` zurückgibt, kann `x` in einer arithmetischen Operation eingesetzt werden, ohne dass diese zu `NaN` ausgewertet wird. Wenn `true` zurückgegeben wird, wird jede arithmetische Operation zu `NaN` ausgewertet. Das bedeutet, dass in JavaScript `isNaN(x) == true` gleich zu "`x - 0` ergibt `NaN`" (in JavaScript wird `x - 0 == NaN` immer false zurückgeben, was bedeutet, man kann es nicht testen). Aktuell geben `isNaN(x)`, `isNaN(x - 0)`, `isNaN(Number(x))`, `Number.isNaN(x - 0)`, und `Number.isNaN(Number(x))` immer das selbe Ergebnis zurück und `isNaN(x)` ist der kürzest mögliche Ausdruck.

Dieses kann zum Beispiel eingesetzt werden, um zu prüfen, ob ein Funktionsargument arithmetisch verarbeitet werden kann. Wenn diese Verarbeitung nicht möglich ist, kann ein Standardwert unterstützt werden oder irgendetwas anderes. Damit kann man sich die volle Vielseitigkeit, die JavaScript mit implizierten Typkonvertierungen abhängig vom Kontext unterstützt, zu nutze machen.

## Beispiele

```js
function increment(x) {
  if (isNaN(x)) x = 0;
  return x + 1;
};

// Gleicher Wirkung wie bei Number.isNaN():
function increment(x) {
  if (Number.isNaN(Number(x))) x = 0;
  return x + 1;
};

// In den folgenden Fällen ist für das Funktionsargument x
// isNaN(x) immer false, weil es keine Nummer ist,
// jedoch kann es in arithmetischen Operationen eingesetzt
// werden.
increment("");            // 1: "" is converted to 0
increment(new String());  // 1: String object representing an empty string is converted to 0
increment([]);            // 1: [] is converted to 0
increment(new Array());   // 1: Array object representing an empty array is converted to 0
increment("0");           // 1: "0" is converted to 0
increment("1");           // 2: "1" is converted to 1
increment("0.1");         // 1.1: "0.1" is converted to 0.1
increment("Infinity");    // Infinity: "Infinity" is converted to Infinity
increment(null);          // 1: null is converted to 0
increment(false);         // 1: false is converted to 0
increment(true);          // 2: true is converted to 1
increment(new Date());    // returns current date/time in milliseconds plus 1

// In den folgenden Fällen ist für das Funktionsargument x
// isNaN(x) immer false und x ist eine Nummer
increment(-1);            // 0
increment(-0.1);          // 0.9
increment(0);             // 1
increment(1);             // 2
increment(2);             // 3
// ... und so weiter ...
increment(Infinity);      // Infinity

// In den folgenden Fällen ist für das Funktionsargument x
// isNaN(x) immer true und x ist keine Nummer,
// weshalb die Funktion es mit 0 ersetzt und 1 zurück gibt.
increment(String);            // 1
increment(Array);             // 1
increment("blabla");          // 1
increment("-blabla");         // 1
increment(0/0);               // 1
increment("0/0");             // 1
increment(Infinity/Infinity); // 1
increment(NaN);               // 1
increment(undefined);         // 1
increment();                  // 1

// isNaN(x) ist immer identisch mit isNaN(Number(x)),
// aber die Präsenz wenn x ist immer zwingend erforderlich.
isNaN(x) == isNaN(Number(x)) // true für jeden Wert von x, auch x == undefined,
                             // weil isNaN(undefined) == true und Number(undefined) gibt NaN,
                             // aber ...
isNaN() == isNaN(Number())   // false, weil isNaN() == true und Number() == 0
```

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar            |
| ------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                 | {{Spec2('ES1')}}         | Initiale Definition. |
| {{SpecName('ES5.1', '#sec-15.1.2.4', 'isNaN')}}         | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-isnan-number', 'isNaN')}}         | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-isnan-number', 'isNaN')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.isNaN")}}

## Siehe auch

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
