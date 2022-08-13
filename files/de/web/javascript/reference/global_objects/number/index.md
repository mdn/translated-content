---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
tags:
  - JavaScript
  - Number
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number
---
{{JSRef}}

Das JavaScript Objekt **`Number`** ist ein Container Objekt (Wrapper Objekt), welches das Arbeiten mit numerischen Werten erlaubt. Ein `Number` Objekt wird erzeugt indem der `Number()` Konstruktor verwendet wird.

## Syntax

    new Number(value);

### Parameter

- `value`
  - : Ein numerischer Wert, der als Objekt erstellt werden soll.

## Beschreibung

Die hauptsächlichen Nutzungen des `Number` Objektes sind:

- Wenn der Parameter nicht zu einer Nummer konvertiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.
- In einem nicht-Konstruktor Kontext (z. B. ohne den {{jsxref("Operators/new", "new")}} Operator) führt `Number` zu einer Typkonvertierung.

## Eigenschaften

- {{jsxref("Number.EPSILON")}}
  - : Das kleinste Intervall zwischen zwei repräsentierbaren Zahlen.
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : Die größte sichere Ganzzahl in JavaScript (253 -1).
- {{jsxref("Number.MAX_VALUE")}}
  - : Die größte repräsentierbare Zahl.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : Die kleinste sichere Ganzzahl in JavaScript (-(253 -1)).
- {{jsxref("Number.MIN_VALUE")}}
  - : Die kleinste positive repräsentierbare Zahl. Das ist die positive Zahl, die am nächsten an `0` ist (aber nicht `0` ist).
- {{jsxref("Number.NaN")}}
  - : Spezieller "keine Zahl" Wert.
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : Spezieller Wert welcher negativ Unendlich repräsentiert; wird bei einem Overflow zurückgegeben.
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : Spezieller Wert welcher positiv Unendlich repräsentiert; wird bei einem Overflow zurückgegeben.
- {{jsxref("Number.prototype")}}
  - : Ermöglicht das Hinzufügen von Eigenschaften zu einem `Number` Objekt

## Methoden

- {{jsxref("Number.isNaN()")}}
  - : Gibt an, ob der übergebene Wert {{jsxref("Number.NaN", "NaN")}} ist.
- {{jsxref("Number.isFinite()")}}
  - : Gibt an, ob der übergebene Wert eine endliche Zahl ist.
- {{jsxref("Number.isInteger()")}}
  - : Gibt an, ob der übergebene Wert eine ganze Zahl ist.
- {{jsxref("Number.isSafeInteger()")}}
  - : Gibt an, ob der der übergebene Wert eine sichere ganze Zahl ist (eine ganze Zahl zwischen -(253 -1) und 253 -1).
- ~~{{jsxref("Number.toInteger()")}} {{obsolete_inline}}~~
  - : ~~Wurde eingesetzt um eine Zahl zu einer ganzen Zahl zu konvertieren. Die Funktion wurde entfernt.~~
- {{jsxref("Number.parseFloat()")}}
  - : Der Wert ist der gleiche wie bei der {{jsxref("parseFloat", "parseFloat()")}} Funktion des globalen Objektes.
- {{jsxref("Number.parseInt()")}}
  - : Der Wert ist der gleiche wie bei der {{jsxref("parseInt", "parseInt()")}} Funktion des globalen Objektes.

## `Number` Instanzen

Alle Instanzen von `Number` erben von {{jsxref("Number.prototype")}}. Das Prototyp Objekt des `Number` Konstruktors kann verändert werden, um alle Instanzen von `Number` zu beeinflussen.

### Methoden

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype', 'Methoden')}}

## Beispiele

### Einsatz des `Number` Objektes zur Zuweisung von numerischen Variablen

Das folgende Beispiel benutzt Eigenschaften des `Number` Objektes um Werte zu numerischen Variablen zuzuweisen:

```js
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
```

### Ganzzahlbereich von `Number`

Das folgende Beispiel zeigt die kleinste und größte Ganzzahl, welche mit `Number` Objekten repräsentiert werden kann (für Details siehe im ECMAScript Standard Kapitel _[6.1.6 The Number Type](https://tc39.github.io/ecma262/#sec-ecmascript-language-types-number-type)_):

```js
var biggestInt = 9007199254740992;
var smallestInt = -9007199254740992;
```

Wenn Daten im JSON Format eingelesen werden und Ganzzahlen den oben gezeigten Bereich übersteigen, kann es passieren, dass Fehler beim Erstellen von `Number` Objekten auftreten. Mit dem Einsatz von {{jsxref("String")}} können solche Fehler umgangen werden.

### Einsatz von `Number` zum Konvertieren eines `Date` Objekts

Das folgende Beispiel konvertiert ein {{jsxref("Date")}} Objekt in einen numerischen Wert. Dazu wird `Number` als Funktion verwendet:

```js
var d = new Date("December 17, 1995 03:24:00");
print(Number(d));
```

Ausgabe: "819199440000".

### Konvertiertung von Strings zu Nummern

```js
Number('123')     // 123
Number('12.3')    // 12.3
Number('123e-1')  // 12.3
Number('')        // 0
Number('0x11')    // 17
Number('0b11')    // 3
Number('0o11')    // 9
Number('foo')     // NaN
Number('100a')    // NaN
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1.                                                                                                                                                                                                                                                                                                                                        |
| {{SpecName('ES5.1', '#sec-15.7', 'Number')}}                 | {{Spec2('ES5.1')}}     |                                                                                                                                                                                                                                                                                                                                                                                              |
| {{SpecName('ES6', '#sec-number-objects', 'Number')}}         | {{Spec2('ES6')}}         | Neue Methoden und Properties hinzugefügt: {{jsxref("Number.EPSILON", "EPSILON")}}, {{jsxref("Number.isFinite", "isFinite")}}, {{jsxref("Number.isInteger", "isInteger")}}, {{jsxref("Number.isNaN", "isNaN")}}, {{jsxref("Number.parseFloat", "parseFloat")}}, {{jsxref("Number.parseInt", "parseInt")}} |
| {{SpecName('ESDraft', '#sec-number-objects', 'Number')}} | {{Spec2('ESDraft')}} |                                                                                                                                                                                                                                                                                                                                                                                              |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.Number")}}

## Siehe auch

- {{jsxref("NaN", "NaN")}}
- Das globale Objekt {{jsxref("Math", "Math")}}
- [Number type in details](https://medium.com/@maximus.koretskyi/javascripts-number-type-8d59199db1b6#.9whwe88tz)
