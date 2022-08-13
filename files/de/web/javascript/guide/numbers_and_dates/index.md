---
title: Numbers and dates
slug: Web/JavaScript/Guide/Numbers_and_dates
tags:
  - Guide
  - JavaScript
  - l10n:priority
translation_of: Web/JavaScript/Guide/Numbers_and_dates
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Ausdruecke_und_Operatoren", "Web/JavaScript/Guide/Text_formatting")}}

Dieses Kapitel ist eine Einleitung in die Nutzung von Nummern und Daten in JavaScript.

## Nummern

In JavaScript sind alle Nummern als [double-precision 64-Bit Binärformat IEEE 754](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) umgesetzt (z.b. eine Zahl zwischen -(253 -1) und 253 -1). **Es gibt keinen extra Datentypen für ganze Zahlen** (z. B. Integer in anderen Programmiersprachen). Neben der Repräsentation von Gleitkommazahlen hat der Nummern Typ noch drei symbolische Werte: `+`{{jsxref("Infinity")}}, `-`{{jsxref("Infinity")}}, und {{jsxref("NaN")}} (not-a-number; keine Nummer). Siehe auch in das Kapitel [JavaScript Datentypen und Strukturen](/de/docs/Web/JavaScript/Datenstrukturen) für den Umgang mit anderen primitiven Typen in JavaScript.

Es gibt vier verschiedene Nummernliterale: Dezimal-, Binär-, Oktal- und Hexadezimalzahlen.

### Dezimalzahlen

```js
1234567890
42

// Vorsichtig mit führenden Nullen in der Darstellung:

0888 // wird zu 888 Dezimal
0777 // wird im non-strict Modus zu 511 in Dezimal
```

Zu beachten ist, dass das Dezimalliteral mit einer 0 beginnen kann, jedoch wird die Zahl als Oktalzahl interpretiert, wenn die nächste Zahl nach der 0 kleiner als 8 ist.

### Binärzahlen

Die Syntax von Binärzahlen schreibt vor, dass die Zahl mit einer 0 gefolgt von einem "B" (0b oder 0B) beginnen muss. Wenn die Ziffern nach dem 0b nicht 0 oder 1 sind, wird der folgenden [`SyntaxError`](/de/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) erzeugt: "Missing binary digits after 0b".

```js
var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607
```

### Oktalzahlen

Die Syntax von Oktalzahlen schreibt vor, dass die Nummern mit einer 0 beginnen. Dahinter sind Ziffern mit den Werten 0 bis 7 möglich. Wenn die Ziffern größer als 7 sind, wird die Zahl als Dezimalzahl interpretiert.

```js
var n = 0755; // 493
var m = 0644; // 420
```

Der Strict mode in ECMAScript 5 verbietet Oktalzahlen. Die Syntax der Oktalzahlen ist in ECMAScript 5 nicht vorhanden, jedoch wird es von allen Browser, durch eine führende 0, unterstützt: `0644 === 420` und`"\045" === "%"`. In ECMAScript 2015 sind Oktalzahlen mit dem Präfix `0o` unterstützt:

```js
var a = 0o10; // ES2015: 8
```

### Hexadezimalzahlen

Hexadezimalzahlen können geschrieben werden, indem der Präfix `0x` oder `0X` genutzt wird. Wenn die Ziffern nach 0x nicht eines der Zeichen 0123456789ABCDEF entspricht, wird folgender [`SyntaxError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) erzeugt: "Identifier starts immediately after numeric literal".

    0xFFFFFFFFFFFFFFFFF // 295147905179352830000
    0x123456789ABCDEF   // 81985529216486900
    0XA                 // 10

### Potenzierung

    1E3   // 1000
    2e6   // 2000000
    0.1e2 // 10

## `Number` Objekt

Das vordefinierte {{jsxref("Number")}} Objekt enthält Eigenschaften für nummerische Konstanten, wie zum Beispiel Maximalwerte, not-a-number (keine Nummer) und Unendlich. Man kann die Werte dieser Eigenschaften nicht ändern. Die Eigenschaften werden folgendermaßen eingesetzt:

```js
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
```

Man verweist immer auf die Eigenschaften des vordefinierten `Number` Objekt (wie oben gezeigt) und nicht auf die Eigenschaft eines selbst erstellten `Number` Objektes.

Die folgende Tabelle fasst du Eigenschaften des `Number` Objektes zusammen:

| Eigenschaft                                          | Beschreibung                                                                                                                          |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.MAX_VALUE")}}             | Die größte repräsentierbare Zahl                                                                                                      |
| {{jsxref("Number.MIN_VALUE")}}             | Die kleinste repräsentierbare Zahl                                                                                                    |
| {{jsxref("Number.NaN")}}                     | Spezieller Wert für "keine Zahl" ("not a number")                                                                                     |
| {{jsxref("Number.NEGATIVE_INFINITY")}} | Spezieller Wert für negativ Unendlich; wird bei einem Overflow zurückgegeben.                                                         |
| {{jsxref("Number.POSITIVE_INFINITY")}} | Spezieller Wert für positiv Unendlich; wird bei einem Overflow zurückgegeben.                                                         |
| {{jsxref("Number.EPSILON")}}                 | Der Unterschied zwischen eins und der kleinsten Zahl größer als eins, die als {{jsxref("Number")}} repräsentiert werden kann. |
| {{jsxref("Number.MIN_SAFE_INTEGER")}}     | Kleinste sichere ganze Zahl in JavaScript.                                                                                            |
| {{jsxref("Number.MAX_SAFE_INTEGER")}}     | Größte sichere ganze Zahl in JavaScript.                                                                                              |

| Methode                                          | Beschreibung                                                                                                                                                                                                            |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Number.parseFloat()")}}     | Liest eine String-Argument ein und gibt eine Floating-Point Zahl zurück. Macht das gleiche wie die globale {{jsxref("parseFloat", "parseFloat()")}} Funktion.                                               |
| {{jsxref("Number.parseInt()")}}         | Liest eine String-Argument ein und gibt eine ganze Zahl in der spezifizierten Basis zurück. Macht das gleiche wie die globale {{jsxref("parseInt", "parseInt()")}} Funktion.                                |
| {{jsxref("Number.isFinite()")}}         | Erkennt, ob ein übergebener Wert eine endliche Zahl ist.                                                                                                                                                                |
| {{jsxref("Number.isInteger()")}}     | Erkennt, ob ein übergebener Wert eine ganze Zahl ist.                                                                                                                                                                   |
| {{jsxref("Number.isNaN()")}}             | Erkennt, ob ein übergebener Wert {{jsxref("Global_Objects/NaN", "NaN")}} ist. Diese Funktion ist eine robustere Version der globalen {{jsxref("Global_Objects/isNaN", "isNaN()")}} Funktion |
| {{jsxref("Number.isSafeInteger()")}} | Erkennt, ob ein übergebener Wert eine sichere ganze Zahl ist.                                                                                                                                                           |

Der `Number` Prototyp enthält Methoden zum Zurückgeben von Informationen eines `Number` Objekts in verschiedenen Formaten. Die folgende Tabelle fasst die Methoden von `Number.prototype` zusammen:

| Methode                                                                  | Beschreibung                                                                                                 |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| {{jsxref("Number.toExponential", "toExponential()")}} | Gibt eine String-Repräsentation der Zahl in Exponential-Notation zurück.                                     |
| {{jsxref("Number.toFixed", "toFixed()")}}                 | Gibt eine String-Repräsentation der Zahl in Festkomma-Notation zurück.                                       |
| {{jsxref("Number.toPrecision", "toPrecision()")}}         | Gibt eine String-Repräsentation der Zahl in einer spezifizierten Präzision in der Festkomma-Notation zurück. |

## `Math` Objekt

Das eingebaute {{jsxref("Math")}} Objekt hat Eigenschaften und Methoden für mathematische Konstanten und Funktionen. Zum Beispiel enthält die Eigenschaft `PI` des `Math` Objektes den Wert von Pi (3,141...), welche wie folgt in einer Anwendung eingesetzt wird:

```js
Math.PI
```

Genauso sind mathematische Standardfunktionen Methoden von `Math`. Dabei sind trigonometrische, logarithmische, exponentielle und ander Funktionen enthalten. Zum Beispiel wird eine trigonometrische Funktion wie folgt eingesetzt:

```js
Math.sin(1.56)
```

Alle trigonometrischen Funktionen von `Math` erwarten Argumente im Radiantenmaß.

Die folgende Tabelle fasst die Methoden des `Math` Objektes zusammen:

| Methode                                                                                                                                                                                                                                                                                | Beschreibung                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("Math.abs", "abs()")}}                                                                                                                                                                                                                                               | Absoluter Wert.                                                                                                                     |
| {{jsxref("Math.sin", "sin()")}}, {{jsxref("Math.cos", "cos()")}}, {{jsxref("Math.tan", "tan()")}}                                                                                                                                                           | Trigonometrische Standardfunktionen; Argumente im Radiantenmaß.                                                                     |
| {{jsxref("Math.asin", "asin()")}}, {{jsxref("Math.acos", "acos()")}}, {{jsxref("Math.atan", "atan()")}}, {{jsxref("Math.atan2", "atan2()")}}                                                                                             | Inverse trigonometrische Standardfunktionen; Rückgabewert im Radiantenmaß.                                                          |
| {{jsxref("Math.sinh", "sinh()")}}, {{jsxref("Math.cosh", "cosh()")}}, {{jsxref("Math.tanh", "tanh()")}}                                                                                                                                               | Hyperbolische trigonometrische Standardfunktionen; Rückgabewert im Radiantenmaß.                                                    |
| {{jsxref("Math.asinh", "asinh()")}}, {{jsxref("Math.acosh", "acosh()")}}, {{jsxref("Math.atanh", "atanh()")}}                                                                                                                                   | Inverse hyperbolische trigonometrische Standardfunktionen; Rückgabewert im Radiantenmaß.                                            |
| {{jsxref("Math.pow", "pow()")}}, {{jsxref("Math.exp", "exp()")}}, {{jsxref("Math.expm1", "expm1()")}}, {{jsxref("Math.log10", "log10()")}}, {{jsxref("Math.log1p", "log1p()")}}, {{jsxref("Math.log2", "log2()")}} | Exponential- und Logarithmus-Funktionen.                                                                                            |
| {{jsxref("Math.floor", "floor()")}}, {{jsxref("Math.ceil", "ceil()")}}                                                                                                                                                                                         | Gibt die größte/kleinste ganze Zahl kleiner/größer oder gleich dem Argument zurück.                                                 |
| {{jsxref("Math.min", "min()")}}, {{jsxref("Math.max", "max()")}}                                                                                                                                                                                                     | Gibt den kleinsten oder den größten Wert aus einer mit Komma getrennten Liste von Zahlen.                                           |
| {{jsxref("Math.random", "random()")}}                                                                                                                                                                                                                                       | Gibt eine Zufallszahl zwischen 0 und 1 zurück.                                                                                      |
| {{jsxref("Math.round", "round()")}}, {{jsxref("Math.fround", "fround()")}}, {{jsxref("Math.trunc", "trunc()")}},                                                                                                                                  | Rundungs- und Abschnittsfunktionen.                                                                                                 |
| {{jsxref("Math.sqrt", "sqrt()")}}, {{jsxref("Math.cbrt", "cbrt()")}}, {{jsxref("Math.hypot", "hypot()")}}                                                                                                                                           | Quadratwurzel, kubische Wurzel, Quadratwurzel von der Summe von Quadrierten Argumenten.                                             |
| {{jsxref("Math.sign", "sign()")}}                                                                                                                                                                                                                                           | Das Vorzeichen einer Zahl, welches Angibt, ob eine Zahl positiv, negativ oder null ist.                                             |
| {{jsxref("Math.clz32", "clz32()")}}, {{jsxref("Math.imul", "imul()")}}                                                                                                                                                                                         | Anzahl der führenden 0-Bits in der 32-Bit Binärrepräsentation. Das Resultat der C-Ähnlichen 32-Bit Multiplikation von 2 Argumenten. |

Im Gegensatz zu vielen Anderen Objekten, erzeigt man nie selber ein neues `Math` Objekt. Man benutzt immer das globale Objekt.

## `Date` Objekt

JavaScript hat keinen Datums-Datentypen. Allerdings kann das {{jsxref("Date")}} Objekt und seine Methoden genutzt werden, um mit Daten und Zeiten in einer Applikation zu arbeiten. Das `Date`-Objekt hat sehr viele Methoden für das Einstellen, Abfragen und Manipulieren von Daten. Es hat keine Eigenschaften.

JavaScript verarbeitet Daten ähnlich wie es in Java gemacht wird. In beiden Sprachen sind viele Methoden gleich und beide Sprachen speichern das Datum als Unix Zeitstempel, also die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00, ab.

Der Wertebereich eines `Date` Objektes ist zwischen -100.000.000 und 100.000.000 Tagen relativ zum 1. Januar 1970 UTC.

Das erstellen eines `Date` Objektes:

```js
var dateObjectName = new Date([parameters]);
```

Dabei ist `dateObjectName` der Name der Variablen, in der das erstellte `Date` Objekt gespeichert wird.

Unter `parameters` können folgenden Werte eingesetzt werden:

- Nichts: Erstellt das aktuelle Datum mit der aktuellen Zeit. Zum Beispiel: `today = new Date();`.
- Eine Stringrepräsentation eines Datums mit folgenden Werten: "Monat Tag, Jahr Stunde:Minute:Sekunde". Zum Beispiel: `var Xmas95 = new Date("December 25, 1995 13:30:00")`. Wenn die Stunden, Minuten und Sekunden nicht angegeben werden, werden diese auf 0 gesetzt.
- Eine Menge von ganzen Zahlen für das Jahr, den Monat und den Tag. Zum Beispiel: `var Xmas95 = new Date(1995, 11, 25)`.
- Eine Menge von ganzen Zahlen für das Jahr, den Monat, den Tag, die Stunde, die Minute und die Sekunde. Zum Beispiel: `var Xmas95 = new Date(1995, 11, 25, 9, 30, 0)`.

### Methoden des `Date` Objektes

Das Methoden des `Date` Objektes für die Behandlung von Daten und Zeiten werden in folgende Kategorien eingeteilt:

- "set"-Methoden für das Einstellten von Datums- und Zeit-Werten eines `Date`-Objektes.
- "get"-Methoden für das Abfragen von Datums- und Zeit-Werten eines `Date`-Objektes.
- "to"-Methoden für das Erstellen von String-Werten eines `Date`-Objektes.
- "parse"- und "UTC"-Methoden für das Einlesen von String-Werten.

Mit den "get"- und "set"-Methoden können Sekunden, Minuten, Stunden, Tag des Monats, Wochentag, Monat und Jahr separat eingestellt und abgefragt werden. Es gibt eine `getDay`-Methode, welche den Wochentag zurückgibt, es gibt aber keine vergleichbare `setDay`-Methode, weil der Wochentag automatisch eingestellt wird. Diese Methoden benutzen ganze Zahlen um folgende Werte darzustellen:

- Sekunden und Minuten: 0 bis 59
- Stunden: 0 bis 23
- Tage: 0 (Sonntage) bis 6 (Samstag)
- Tag (des Monats): 1 bis 31
- Monat: 0 (Januar) bis 11 (Dezember)
- Jahr: Jahre seit 1900

Angenommen, man erstellt folgendes Datum:

```js
var Xmas95 = new Date("December 25, 1995");
```

Dann gibt `Xmas95.getMonth()` 11 zurück und `Xmas95.getFullYear()` gibt 1995 zurück.

Die `getTime` und `setTime` Methoden sind nützlich für das Vergleichen von Daten. Die `getTime` Methode gibt die Anzahl der Millisekunden seit dem 1. Januar 1970 00:00:00 eines `Date`-Objektes zurück.

Der folgende Quelltext zeigt, wie die Anzahl der vergangenen Tage des aktuellen Jahres ermittelt werden kann:

```js
var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Stellt den Tag und den Monat ein
endYear.setFullYear(today.getFullYear()); // Stellt das Jahr auf das aktuelle Jahr
var msPerDay = 24 * 60 * 60 * 1000; // Anzahl der Millisekunden pro Tag
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); //gibt die vergangenen Tage des aktuellen Jahres zurück
```

Diese Beispiel erstellt ein `Date`-Objekt namens `today`, welches das aktuelle Datum und die aktuelle Zeit enthält. Danach wird ein das `Date`-Objekt `endYear` erstellt und das Jahr wird auf das aktuelle Jahr eingestellt. Zum Schluss wird, mithilfe der Millisekunden pro Tag, die Anzahl der Tage zwischen `today` und `endYear` berechnet. Dafür wird die `getTime` Methode eingesetzt und es wird auf eine ganze Zahl von Tagen gerundet.

Die `parse` Methode ist nützlich, um ein `Date`-Objekt aus einem String zu erstellen. Zum Beispiel verwendet der folgende Quelltext `parse` und `setTime` um das `IPOdate` einzustellen:

```js
var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
```

### Beispiel

Im folgenden Beispiel, gibt die `JSClock()` Funktion die Zeit in dem Format einer digitalen Uhr zurück.

```js
function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = "" + ((hour > 12) ? hour - 12 : hour);
  if (hour == 0)
    temp = "12";
  temp += ((minute < 10) ? ":0" : ":") + minute;
  temp += ((second < 10) ? ":0" : ":") + second;
  temp += (hour >= 12) ? " P.M." : " A.M.";
  return temp;
}
```

Die `JSClock` Funktion erstellt als erstes ein neues `Date` Objekt mit dem Namen `time`. Weil dabei keine Argumente angegeben werden, wird `time` mit dem aktuellen Datum und der aktuellen Zeit erstellt. Danach werden die Methoden `getHours`, `getMinutes`, und `getSeconds` eingesetzt, um den Wert der aktuellen Stunde, Minute und Sekunde in den Variablen `hour`, `minute`, und `second` zu speichern.

Die nächsten vier Statements bauen einen String-Wert mit der Zeit zusammen. Das erste Statement erstellt eine Variable `temp` und weist dieser einen Wert mit einem bedingten Ausdruck zu; wenn `hour` größer als 12 ist wird `hour - 12` zugewiesen, andernfalls nur `hour`. Wenn `hour` dann 0 ist, wird `hour` auf 12 gesetzt.

Die nächsten Statement hängt einen den `minute`-Wert an `temp` heran. Wenn der Wert von `minute` kleiner als 10 ist, fügt der Bedingte Ausdruck einen String mit einer Null und einem Doppelpunkt an; andernfalls wird nur ein Doppelpunkt angehängt. Danach werden die Sekunden auf die gleiche weise angehängt.

Zum Schluss fügt ein bedingter Ausdruck "P.M." an `temp` an, wenn die `hour` größer oder gleich 12 ist. Andernfalls wird "A.M." an `temp` angefügt.

{{PreviousNext("Web/JavaScript/Guide/Ausdruecke_und_Operatoren", "Web/JavaScript/Guide/Text_formatting")}}
