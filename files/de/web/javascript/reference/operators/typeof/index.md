---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
tags:
  - JavaScript
  - Operator
  - Unary
translation_of: Web/JavaScript/Reference/Operators/typeof
---
{{jsSidebar("Operators")}}

Der **`typeof`** Operator gibt einen String zurück, der den Typ des unausgewerteten Operanden beschreibt.

{{EmbedInteractiveExample("pages/js/expressions-typeof.html")}}

## Syntax

Dem `typeof` Operator folgt sein Operand:

    typeof Operand

### Parameter

`Operand` ist ein Ausdruck, dessen Typ zurückgegeben werden soll. Dies kann ein Objekt oder ein {{Glossary("Primitiv", "primitive")}} sein.

Klammern sind optional.

## Beschreibung

Die folgende Tabelle fasst die möglichen Rückgabewerte von `typeof` zusammen. Mehr Informationen zu Typen und primitiven Datentypen sind auf der Seite [JavaScript Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Data_structures) zu finden.

| Typ                                                    | Rückgabewert               |
| ------------------------------------------------------ | -------------------------- |
| Undefined                                              | `"undefined"`              |
| Null                                                   | `"object" `(see below)     |
| Boole'scher Wert                                       | `"boolean"`                |
| Zahl                                                   | `"number"`                 |
| Zeichenkette                                           | `"string"`                 |
| Symbol (neu in ECMAScript 2015)                        | `"symbol"`                 |
| Host-Objekt (von der JS-Umgebung bereitgestellt)       | _implementierungsabhängig_ |
| Funktionsobjekt (implementiert [[Call]] nach ECMA-262) | `"function"`               |
| Alle anderen Objekte                                   | `"object"`                 |

## Beispiele

```js
// Zahlen
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // obwohl es "Not-A-Number" ist
typeof Number(1) === 'number'; // niemals so verwenden!


// Zeichenketten
typeof '' === 'string';
typeof 'bla' === 'string';
typeof `template literal` === 'string'
typeof '1' === 'string' // Eine Zahl in einem String ist ein String
typeof (typeof 1) === 'string'; // typeof gibt immer einen String zurück
typeof String(1) === 'string'; // String konvertiert alles in einen String


// Boole'sche Werte
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // niemals so verwenden!


// Symbols
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'


// Undefined
typeof undefined === 'undefined';
typeof declaredBugUndefinedVariable === 'undefined'
typeof undeclaredVariable === 'undefined';


// Objekte
typeof {a:1} === 'object';

// Array.isArray oder Object.prototype.toString.call verwenden,
// um reguläre Objekte von Arrays zu unterscheiden
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // Siehe im Artikel Reguläre Ausdrücke für Historisch bedingte Ergebnisse


// Folgende Beispiele sind verwirrend, nicht verwenden!
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String("abc") === 'object';


// Funktionen
typeof function(){} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';
```

### `null`

```js
// This stands since the beginning of JavaScript
typeof null === 'object';
```

In der ersten JavaScript-Implementierung bestanden JavaScript-Werte aus einem Typenbezeichner und dem eigentlichen Wert. Der Typenbezeichner für Objekte war 0. `null` wurde durch den NULL-Zeiger dargestellt (auf den meisten Plattformen 0x00). Infolgedessen besaß `null` den Typenbezeichner 0, wodurch der seltsame Rückgabewert für `typeof` entstand. ([Quelle](http://www.2ality.com/2013/10/typeof-null.html))

Es gab einen Korrekturvorschlag für ECMAScript, der aber [abgelehnt wurde](http://wiki.ecmascript.org/doku.php?id=harmony:typeof_null). Dadurch wäre `typeof null === 'null'` gewesen.

### Einsatz des `new` Operators

```js
// Alle Konstruktorfunktionen, welche mit dem 'new' Schlüsselwort benutzt werden,
// haben als ergebnis ein Objekte mit typeof 'object'
var str = new String('String');
var num = new Number(100);

typeof str; // It will return 'object'
typeof num; // It will return 'object'

// Es gibt die Ausnahme mit Objekten des Function-Konstruktors in Javascript

var func = new Function();

typeof func; // gibt 'function' zurück
```

### Notwendigkeit von Klammern in der Syntax

```js
// Klammern sind sehr hilfreich beim ermitteln von Datentypen.
var iData = 99;

typeof iData + ' Wisen'; // It will return 'number Wisen'
typeof (iData + ' Wisen'); // It will return 'string'
```

### Reguläre Ausdrücke

Aufrufbare reguläre Ausdrücke waren eine nicht standardkonforme Erweiterung in manchen Browsern.

```js
typeof /s/ === 'function'; // Chrome 1-12, nicht ECMAScript 5.1-konform
typeof /s/ === 'object';   // Firefox 5+, ECMAScript 5.1-konform
```

### Temporal Dead Zone errors

Vor ECMAScript 2015 war bei `typeof` immer garantiert, dass ein String in jeder Lage zurückgegeben wird. Mit dem Hinzufügen von nicht hochgezogenen, blockweisen [`let`](/de/docs/Web/JavaScript/Reference/Statements/let) and [`const`](/de/docs/Web/JavaScript/Reference/Statements/const) Variablen, kann es zu [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)s kommen, wenn die Variablen nicht nicht definiert sind. Das steht im Kontrast zu nicht definierten Variablen, welche mit `typeof` 'undefined' zurück geben. Blockvariablen haben eine [temporäre tote Zone](/de/docs/Web/JavaScript/Reference/Statements/let#Zeitweilig_tote_Zonen_und_Fehler_mit_let) vom Start des Blockes bis zum Durchführen der Initialisierung. In dieser Zeit kann dieser Fehler auftreten.

```js
typeof undeclaredVariable === 'undefined';
typeof newLetVariable; let newLetVariable; // ReferenceError
typeof newConstVariable; const newConstVariable = 'hello'; // ReferenceError
```

### Ausnahmen

Alle aktuellen Browser zeigen ein nicht standardisiertes hochgezogenes Objekt {{domxref("document.all")}} mit dem Typ Undefined.

```js
typeof document.all === 'undefined';
```

Obwohl die Spezifikation benutzerdefinierte Typen-Tags für nicht standardmäßige exotische Objekte zulässt, müssen diese Typ-Tags sich von den vordefinierten unterscheiden. `document.all` hat das Typ-Tag `'undefined'` und wird alsAusnahmeverstoß der Regeln klassifiziert.

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-typeof-operator', 'The typeof Operator')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-typeof-operator', 'The typeof Operator')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-11.4.3', 'The typeof Operator')}}             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES3', '#sec-11.4.3', 'The typeof Operator')}}                 | {{Spec2('ES3')}}         |                                                       |
| {{SpecName('ES1', '#sec-11.4.3', 'The typeof Operator')}}                 | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |

## Browserkompatibilität

{{Compat("javascript.operators.typeof")}}

## IE-Spezifischer Hinweis

In IE 6, 7 und 8 sind viele Hostobjekte als Objekte statt Funktionen typisiert, zum Beispiel:

```js
typeof alert === 'object'
```

## Siehe auch

- [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof "/en-US/docs/JavaScript/Reference/Operators/instanceof")
- [Warum typeof nicht mehr "sicher" ist (englisch)](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15)
