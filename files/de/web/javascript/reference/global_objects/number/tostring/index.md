---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
tags:
  - JavaScript
  - Method
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toString
---
{{JSRef}}

Die **`toString()`** Methode gibt einen string (Zeichenkette), die ein {{jsxref("Number")}} Objekt repräsentiert zurück.

{{EmbedInteractiveExample("pages/js/number-tostring.html")}}

## Syntax

    numObj.toString([radix])

### Parameter

- `radix`
  - : Optional. Eine ganze Zahl im Bereich von 2 bis 36 welche die Basis des Zahlensystems angibt, in dem die Zahl repräsentiert werden soll.

### Rückgabewert

Einen String, der das spezifizierte {{jsxref("Number")}} Objekt repräsentiert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wenn `toString()` als _radix_ Parameter eine Zahl kleiner 2 oder größer 36 übergeben bekommt, wird ein {{jsxref("RangeError")}} erzeugt.

## Beschreibung

Das {{jsxref("Number")}} Objekt überschreibt die `toString()` Methode des {{jsxref("Object")}} Objektes. Es erbt nicht von der {{jsxref("Object.prototype.toString()")}} Methode. Für {{jsxref( "Number")}} Objekte gibt die `toString()` Methode eine string-Repräsentation des Objektes in dem durch _radix_ spezifizierten Zahlensystem zurück.

Die `toString()` Methode analysiert das erste Argument und versucht eine string-Repräsentation im durch _radix_ beschriebenen Zahlensystem zurück zu geben. Für _radix_ (Basen) größer als 10 werden Buchstaben des Alphabets genutzt um Zahlen größer als 9 darzustellen. Zum Beispiel werden im Hexadezimalsystem (Basis 16) die Buchstaben `a` bis `f` eingesetzt.

Wenn der _radix_ Parameter nicht angegeben wird, wird 10, also das Dezimalsystem, angenommen.

Wenn das `numObj` Objekt negativ ist, wird das Vorzeichen beibehalten. Dieses Verhalten ist auch im Binärsystem so: Der zurückgegebene string ist eine positive Binärdarstellung des `numObj` Objekts mit einem vorangestellten Minus (`-)` Zeichen. Es wird kein Zweierkomplement verwendet.

Wenn das `numObj` Objekt keine ganze Zahl ist, wird ein Punkt (`.`) eingesetzt, um den ganzzahligen Teil von den Dezimalstellen zu trennen.

## Beispiele

### Einsatz von `toString`

```js
var count = 10;

console.log(count.toString());    // Ausgabe '10'
console.log((17).toString());     // Ausgabe '17'
console.log((17.2).toString());   // Ausgabe '17.2'

var x = 6;

console.log(x.toString(2));       // Ausgabe '110'
console.log((254).toString(16));  // Ausgabe 'fe'

console.log((-10).toString(2));   // Ausgabe '-1010'
console.log((-0xff).toString(2)); // Ausgabe '-11111111'
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.4.2', 'Number.prototype.tostring')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-number.prototype.tostring', 'Number.prototype.tostring')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-number.prototype.tostring', 'Number.prototype.tostring')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.toString")}}

## Siehe auch

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
