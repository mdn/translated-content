---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
tags:
  - JavaScript
  - Method
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toExponential
---
{{JSRef}}

Die **`toExponential()`** Methode gibt eine string-Repräsentation eines {{jsxref("Number")}} Objektes in Exponentialdarstellung zurück.

{{EmbedInteractiveExample("pages/js/number-toexponential.html")}}

## Syntax

    numObj.toExponential([fractionDigits])

### Parameter

- `fractionDigits`
  - : Optional. Eine ganze Zahl, die die Anzahl der Nachkommastellen angibt. Der Standardwert ist die Anzahl der Nachkommastellen, die benötigt werden, um die Zahl genau darzustellen.

### Rückgabewert

Eine string, der das gegebene {{jsxref("Number")}} Objekt in Exponentialdarstellung repräsentiert. Das bedeutet, dass eine Stelle vor dem Komma steht und auf `fractionDigits` Stellen nach dem Komma gerundet wird.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wenn `fractionDigits` zu klein oder groß ist. Werte zwischen 0 und 20 (inklusiv) werden keinen zu keinem {{jsxref("RangeError")}} führen. Manche Implementierungen erlauben es auch kleinere oder größere Wert einzusätzen.
- {{jsxref("TypeError")}}
  - : Wenn die Methode auf einem Objekt, welches nicht vom Typ {{jsxref("Number")}} ist, aufgerufen wird.

## Beschreibung

Wenn das `fractionDigits` Argument nicht angegeben wird, ist der Standardwert die Anzahl der Stellen, die benötigt werden um die Zahl ohne Verluste darzustellen.

Wenn die `toExponential()` Methode für nummerische Literale engesetzt werden und das nummerische Literal keine Nachkommastellen besitzt, sollte ein Leerzeichen nach der Zahl hinzugefügt werden. Das sorgt dafür, dass der Punkt des Methodenaufrufes nicht als Dezimaltrenner (Komma) interpretiert wird.

Wenn eine Zahl mehr Stellen hat, als im `fractionDigits` Argument definiert wurde, wird die Zahl zur nächst liegenden Zahl gerundet, die mit `fractionDigits` Stellen dargestellt werden kann. Weiter Informationen zum Runden sind im Artikel {{jsxref("Number.prototype.toFixed", "toFixed()")}} zu finden, die ebenfalls auf `toExponential()` zutreffen.

## Beispiele

### Einsatz von `toExponential()`

```js
var numObj = 77.1234;

console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
console.log(77.1234.toExponential()); // logs 7.71234e+1
console.log(77 .toExponential());     // logs 7.7e+1
```

## Spezifikationen

| Spezifikation                                                                                                                    | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                                         | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.5. |
| {{SpecName('ES5.1', '#sec-15.7.4.6', 'Number.prototype.toExponential')}}                                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-number.prototype.toexponential', 'Number.prototype.toExponential')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-number.prototype.toexponential', 'Number.prototype.toExponential')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.toExponential")}}

## Siehe auch

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
