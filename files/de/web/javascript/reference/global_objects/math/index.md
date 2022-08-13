---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
tags:
  - JavaScript
  - Math
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math
---
{{JSRef}}

**Math** ist ein Standardobjekt, das Eigenschaften und Methoden für mathematische Konstanten und Funktionen besitzt. Es ist kein Funktionsobjekt.

## Beschreibung

Im Unterschied zu den anderen globalen Objekten hat `Math` keinen Konstruktor. Alle Eigenschaften und Methoden von `Math` sind statisch. Um die Konstante Pi zu erreichen, wird `Math.PI` genutzt. Die Sinusfunktion wird mit `Math.sin(x)` ausgeführt, wobei x der Methodenparameter ist. Konstanten sind so präzise wie der Typ `number` in JavaScript.

## Eigenschaften

- {{jsxref("Math.E")}}
  - : Eulersche Zahl und die Basis für den natürlichen Logarithmus (gerundet 2,718).

- {{jsxref("Math.LN2")}}
  - : Natürlicher Logarithmus von 2 (gerundet 0,693).
- {{jsxref("Math.LN10")}}
  - : Natürlicher Logarithmus von 10 (gerundet 2,303).
- {{jsxref("Math.LOG2E")}}
  - : Logarithmus zur Basis 2 von der Eulerschen Zahl (gerundet 1,443).
- {{jsxref("Math.LOG10E")}}
  - : Logarithmus zur Basis 10 von der Eulerschen Zahl (gerundet 0,434).
- {{jsxref("Math.PI")}}
  - : Kreiszahl Pi, welche als Verhältnis zwischen Kreisumfang und Durchmesser definiert ist (gerundet 3,14159).
- {{jsxref("Math.SQRT1_2")}}
  - : Quadratwurzel aus 1/2 oder 1 geteilt durch die Quadratwurzel von 2 (gerundet 0,707).
- {{jsxref("Math.SQRT2")}}
  - : Quadratwurzel aus 2 (gerundet 1,414).

## Methoden

> **Hinweis:** Die trigonometrischen Funktionen (`sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`, `atan2()`) erwarten Parameter und geben Rückgabewerte im Bogenmaß zurück. Um dieses in das Gradmaß umzurechnen, teilt man durch `(Math.PI / 180)` und multipliziert das Ergebnis mit der Bogenmaß.

> **Hinweis:** Bei vielen mathematischen Funktionen ist die Präzision implementationsabhängig. Das bedeutet, dass es bei verschiedenen Browsern verschiedene Ergebnisse geben kann. Auch in der gleichen JavaScript-Umgebung auf verschiedenen Betriebssystemen oder Architekturen können Abweichungen entstehen.

- {{jsxref("Global_Objects/Math/abs", "Math.abs(x)")}}
  - : Gibt den Betrag einer Zahl zurück.
- {{jsxref("Global_Objects/Math/acos", "Math.acos(x)")}}
  - : Gibt den Arcus Cosinus einer Zahl zurück.
- {{jsxref("Global_Objects/Math/acosh", "Math.acosh(x)")}}
  - : Gibt den Areacosinus Hyperbolicus einer Zahl zurück.
- {{jsxref("Global_Objects/Math/asin", "Math.asin(x)")}}
  - : Gibt den Arcus Sinus einer Zahl zurück.
- {{jsxref("Global_Objects/Math/asinh", "Math.asinh(x)")}}
  - : Gibt den Areasinus Hyperbolicus einer Zahl zurück.
- {{jsxref("Global_Objects/Math/atan", "Math.atan(x)")}}
  - : Gibt den Arcus Tangens einer Zahl zurück.
- {{jsxref("Global_Objects/Math/atanh", "Math.atanh(x)")}}
  - : Gibt den Areatangens Hyperbolicus einer Zahl zurück.
- {{jsxref("Global_Objects/Math/atan2", "Math.atan2(y, x)")}}
  - : Gibt den Arcus Tangens aus dem Quotienten der Argumente zurück.
- {{jsxref("Global_Objects/Math/cbrt", "Math.cbrt(x)")}}
  - : Gibt die Kubikwurzel einer Zahl zurück.
- {{jsxref("Global_Objects/Math/ceil", "Math.ceil(x)")}}
  - : Gibt die kleinste ganze Zahl zurück, die größer oder gleich dem Parameter ist.
- {{jsxref("Global_Objects/Math/clz32", "Math.clz32(x)")}}
  - : Gibt die Anzahl der voranstehenden 0-Bits einer 32-Bit-Repräsentation zurück.
- {{jsxref("Global_Objects/Math/cos", "Math.cos(x)")}}
  - : Gibt den Cosinus einer Zahl zurück.
- {{jsxref("Global_Objects/Math/cosh", "Math.cosh(x)")}}
  - : Gibt den Cosinus Hyperbolicus einer Zahl zurück.
- {{jsxref("Global_Objects/Math/exp", "Math.exp(x)")}}
  - : Gibt Ex zurück, wobei x der Parameter und E die Eulersche Zahl ist.
- {{jsxref("Global_Objects/Math/expm1", "Math.expm1(x)")}}
  - : Gibt exp(x) - 1 zurück.
- {{jsxref("Global_Objects/Math/floor", "Math.floor(x)")}}
  - : Rundet eine Zahl auf eine ganze Zahl ab.
- {{jsxref("Global_Objects/Math/fround", "Math.fround(x)")}}
  - : Gibt die am nächsten liegende [einfache genaue](http://de.wikipedia.org/wiki/Einfache_Genauigkeit) Gleitkommazahl des Parameters zurück.
- {{jsxref("Global_Objects/Math/hypot", "Math.hypot([x[,y[,…]]])")}}
  - : Gibt die Quadratwurzel aus der Summe der quadrierten Parameterwerte zurück.
- {{jsxref("Global_Objects/Math/imul", "Math.imul(x)")}}
  - : Gibt das Ergebnis einer 32-Bit-Ganzzahlmultiplikation zurück.
- {{jsxref("Global_Objects/Math/log", "Math.log(x)")}}
  - : Gibt den natürlichen Logarithmus (loge oder ln) einer Zahl zurück.
- {{jsxref("Global_Objects/Math/log1p", "Math.log1p(x)")}}
  - : Gibt den natürlichen Logarithmus (loge oder ln) einer mit 1 addierten Zahl zurück.
- {{jsxref("Global_Objects/Math/log10", "Math.log10(x)")}}
  - : Gibt den Logarithmus zur Basis 10 einer Zahl zurück.
- {{jsxref("Global_Objects/Math/log2", "Math.log2(x)")}}
  - : Gibt den Logarithmus zur Basis 2 einer Zahl zurück.
- {{jsxref("Global_Objects/Math/max", "Math.max([x[,y[,…]]])")}}
  - : Gibt die größte von null oder mehr Zahlen zurück.
- {{jsxref("Global_Objects/Math/min", "Math.min([x[,y[,…]]])")}}
  - : Gibt die kleinste von null oder mehr Zahlen zurück.
- {{jsxref("Global_Objects/Math/pow", "Math.pow(x,y)")}}
  - : Gibt die Potenz zweier Zahlen zurück (xy).
- {{jsxref("Global_Objects/Math/random", "Math.random()")}}
  - : Gibt eine Pseudozufallszahl zwischen 0 und 1 zurück.
- {{jsxref("Global_Objects/Math/round", "Math.round(x)")}}
  - : Gibt den ganzzahlig gerundeten Wert des Parameters zurück.

- {{jsxref("Global_Objects/Math/sign", "Math.sign(x)")}}
  - : Gibt das Vorzeichen (positiv, negativ, 0) von x zurück.
- {{jsxref("Global_Objects/Math/sin", "Math.sin(x)")}}
  - : Gibt den Sinus einer Zahl zurück.
- {{jsxref("Global_Objects/Math/sinh", "Math.sinh(x)")}}
  - : Gibt den Sinus Hyperbolicus einer Zahl zurück.
- {{jsxref("Global_Objects/Math/sqrt", "Math.sqrt(x)")}}
  - : Gibt die positive Quadratwurzel einer Zahl zurück.
- {{jsxref("Global_Objects/Math/tan", "Math.tan(x)")}}
  - : Gibt den Tangens einer Zahl zurück.
- {{jsxref("Global_Objects/Math/tanh", "Math.tanh(x)")}}
  - : Gibt den Tangens Hyperbolicus einer Zahl zurück.
- `Math.toSource()` {{Non-standard_inline() }}
  - : Gibt die Zeichenkette `"Math"` zurück.
- {{jsxref("Global_Objects/Math/trunc", "Math.trunc(x)")}}
  - : Gibt den ganzzahligen Teil der Zahl `x`, ohne jede Nachkommastellen, zurück.

## Das `Math` Objekt erweitern

Wie die meisten der Standard-JavaScript Objekte kann auch das `Math` Objekt um benutzerdefinierten Eigenschaften und Methoden erweitert werden. Zum Erweitern des `Math` Objektes wird nicht `prototype` genutzt. Stattdessen wird `Math` direkt erweitert.

    Math.propName = propValue;
    Math.methodName = methodRef;

Im folgenden Beispiel wird eine Methode zum `Math` Objekt hinzugefügt, welche den größten gemeinsamen Teiler von einer Liste von Argumenten ermittelt.

```js
/* Variadic function -- Returns the greatest common divisor of a list of arguments */
Math.gcd = function () {
  if(arguments.length == 2) {
    if(arguments[1] == 0) {
      return arguments[0];
    } else {
      return Math.gcd(arguments[1], arguments[0] % arguments[1]);
    }
  } else if (arguments.length > 2) {
    var result = Math.gcd(arguments[0], arguments[1]);
    for (var i = 2; i < arguments.length; i++) {
      result = Math.gcd(result, arguments[i]);
    }
    return result;
  }
}
```

Zum Ausprobieren:

```js
console.log(Math.gcd(20, 30, 15, 70, 40)); // `5`
```

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| {{SpecName('ES5.1', '#sec-15.8', 'Math')}}             | {{Spec2('ES5.1')}}     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| {{SpecName('ES6', '#sec-math-object', 'Math')}}     | {{Spec2('ES6')}}         | Die neuen Methoden {{jsxref("Math.log10()", "log10()")}}, {{jsxref("Math.log2()", "log2()")}}, {{jsxref("Math.log1p()", "log1p()")}}, {{jsxref("Math.expm1()", "expm1()")}}, {{jsxref("Math.cosh()", "cosh()")}}, {{jsxref("Math.sinh()", "sinh()")}}, {{jsxref("Math.tanh()", "tanh()")}}, {{jsxref("Math.acosh()", "acosh()")}}, {{jsxref("Math.asinh()", "asinh()")}}, {{jsxref("Math.atanh()", "atanh()")}}, {{jsxref("Math.hypot()", "hypot()")}}, {{jsxref("Math.trunc()", "trunc()")}}, {{jsxref("Math.sign()", "sign()")}}, {{jsxref("Math.imul()", "imul()")}}, {{jsxref("Math.fround()", "fround()")}}, {{jsxref("Math.cbrt()", "cbrt()")}} und {{jsxref("Math.clz32()", "clz32()")}} hinzugefügt. |
| {{SpecName('ESDraft', '#sec-math-object', 'Math')}} | {{Spec2('ESDraft')}} |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Browserkompatibilität

{{Compat("javascript.builtins.Math")}}

## Siehe auch

- {{jsxref("Number")}}
