---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/parseFloat
---
{{jsSidebar("Objects")}}

Die **`parseFloat()`**-Funktion parst ein Zeichenketten-Argument und gibt eine Fließkommazahl zurück.

{r{EmbedInteractiveExample("pages/js/globalprops-parsefloat.html")}}

## Syntax

    parseFloat(value)

### Parameter

- `value`
  - : Der Wert, den man parsen möchte.

### Rückgabewert

Eine Fließkommazahl, die vom übergebenen Wert geparst wurde. Wenn der Wert nicht zu einer Zahl konvertiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

`parseFloat` ist eine Top-Level-Funktion und mit keinen Objekt assoziiert.

`parseFloat` übersetzt ihr Argument in eine Fließkommazahl. Trifft sie dabei auf ein anderes Zeichen als ein Vorzeichen (+ oder -), einen numerischen Werten (0-9), einen Dezimalpunkt, oder einen Exponenten, so gibt es den Wert zurück bis zu diesem Punkt und ignoriert dieses Zeichen, sowie alle nachfolgenden. Anführende und abschließende Leerzeichen sind erlaubt.

Wenn der Wert eine Zeichenkette ist und die ersten Zeichen nicht in eine Zahl konvertiert werden können, gibt `parseFloat` den Wert {{jsxref("NaN")}} zurück.

Für arithmetische Zwecke ist `NaN` keine Zahl für jede Basis eines Zahlensystems. Man kann die {{jsxref("isNaN")}}-Funktion aufrufen um festzustellen, ob `NaN` das Ergebnis von `parseFloat` ist. Wenn `NaN` Operand einer arithmetischen Operation ist, dann ist das Ergebnis ebenfalls `NaN`.

`parseFloat` kann ebenfalls den Wert `Infinity` parsen und zurückgeben. Man kann die {{jsxref("isFinite")}}-Funktion benutzen um festzustellen, ob das Ergebnis eine endliche Zahl ist (nicht `Infinity`, `-Infinity`, oder `NaN`).

`parseFloat` kann zudem Objekte parsen, wenn diese eine `toString`- oder `valueOf`-Methode haben. Das Ergebnis ist dasselbe, als wenn `parseFloat` mit dem Ergebnis einer dieser beiden Methoden ausgerufen wurde.

## Beispiele

### `parseFloat` Rückgabe einer Zahl

Die folgenden Beispiele geben alle **3.14** zurück

```js
parseFloat(3.14);
parseFloat("3.14");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14mehr nicht-Ziffer-Zeichen");

var foo = Object.create(null);
foo.toString = function () { return "3.14"; };
parseFloat(foo);

var foo = Object.create(null);
foo.valueOf = function () { return "3.14"; };
parseFloat(foo);
```

### `parseFloat` Rückgabe von `NaN`

Das folgende Beispiel gibt `NaN` zurück

```js
parseFloat("FF2");
```

### Eine striktere parse-Funktion

Unter bestimmten Umständen ist es hilfreich, einen strikteren Weg zu haben, um Fließkomma-Werte zu parsen. Reguläre Ausdrücke können hierbei helfen:

```js
var filterFloat = function (value) {
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
  return NaN;
}

console.log(filterFloat('421'));               // 421
console.log(filterFloat('-421'));              // -421
console.log(filterFloat('+421'));              // 421
console.log(filterFloat('Infinity'));          // Infinity
console.log(filterFloat('1.61803398875'));     // 1.61803398875
console.log(filterFloat('421e+0'));            // NaN
console.log(filterFloat('421hop'));            // NaN
console.log(filterFloat('hop1.61803398875'));  // NaN
```

Hinweis: Dies ist lediglich ein Beispiel, es akzeptiert keine zulässigen Zahlen wie `1.` oder `.5`.

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                             | {{Spec2('ES1')}}         | Initiale Definition. |
| {{SpecName('ES5.1', '#sec-15.1.2.3', 'parseFloat')}}                 | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-parsefloat-string', 'parseFloat')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-parsefloat-string', 'parseFloat')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatiblität

{{Compat("javascript.builtins.parseFloat")}}

## Siehe auch

- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
