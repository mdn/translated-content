---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/parseInt
---
{{jsSidebar("Objects")}}

Die **`parseInt()`** Methode liest ein String-Argument ein und gibt eine ganze Zahl im angegebenen Zahlensystem zurück.

{{EmbedInteractiveExample("pages/js/globalprops-parseint.html")}}

## Syntax

    parseInt(string, radix);

### Parameter

- `string`
  - : Umzuwandelnder Wert. Wenn `string` kein String ist, wird er zu einem String konvertiert (durch die abstrakte Operation [`ToString`](http://www.ecma-international.org/ecma-262/6.0/#sec-tostring)). Führende Leerzeichen im String werden ignoriert.

- `radix`
  - : Eine ganze Zahl zwischen 2 und 36, die die Basis eines mathematischen Zahlensystems ist, in der der String geschrieben ist. 10 steht für das gebräuchliche Dezimalsystem.

### Rückgabewert

Eine ganze Zahl des übergebenen Strings. Wenn das erste Zeichen nicht zu einer Zahl konvertiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beschreibung

Die `parseInt` Funktion konvertiert das erste Argument zu einem String, analysiert diesen und gibt eine ganze Zahl oder `NaN` zurück. Wenn nicht `NaN` zurückgegeben wird, ist der Wert des ersten Arguments eine gültige ganze Zahl im entsprechenden Zahlensystem. Zum Beispiel wird im 10er-Zahlensystem von einer Dezimalzahl ausgegangen, im 8er-System von einer Oktalzahl, im 16er-System von einer Hexadezimalzahl und so weiter. Für die Basis eines Zahlensystems größer als `10` sind Buchstaben des Alphabets Repräsentanten für Zahlen größer als `9`. Zum Beispiel werden für Hexadezimalezahlen (Basis 16) die Buchstaben `A` bis `F` eingesetzt.

Wenn `parseInt` ein Zeichen findet, welches keine Ziffer im spezifizierten Zahlensystem ist wird dieses und alle folgenden Zeichen ignoriert. `parseInt` schneidet Nachkommstellen ab. Führende und nachgestellte Leerzeichen sind erlaubt.

Weil einige Zahlen mit einem `e` Zeichen in ihrer String-Repräsentation (z. B. **`6.022e23`**), führt der Einsatz von `parseInt` zum Abschneiden von nummerischer Wert und unerwarteten Ergebnissen, wenn große oder kleine Zahlen verwendet werden. `parseInt` sollte nicht als Ersatz für {{jsxref("Math.floor()")}} eingesetzt werden.

Wenn _radix_ `undefined` oder 0 ist (oder fehlt), nimmt JavaScript folgendes an:

- Wenn `string` mit `"0x"` oder `"0X"` beginnt, wird das Hexadezimalsystem verwendet.
- Wenn `string` mit `"0"` beginnt, wird das Oktal- oder Dezimalsystem verwendet (Implementierungsabhängig). ECMAScript 5 spezifiziert das Dezimalsystem, jedoch unterstützen das nicht alle Browser. **Deswegen sollte der Parameter `radix` immer angegeben werden**
- Wenn `string` mit einem anderen Zeichen beginnt, wird das Dezimalsystem verwendet.

Wenn das erste Zeichen nicht zu einer Zahl konvertiert werden kann, gibt `parseInt` `NaN` zurück.

Für arithmetische Zwecke ist `NaN` in keinem Zahlensystem eine Zahl. Man kann die Funktion {{jsxref("isNaN", "isNaN()")}} aufrufen, um zu prüfen, ob das Ergebnis von `parseInt` `NaN` ist. Wenn `NaN` in einer arithmetischen Operation eingesetzt wird, ist das Ergebnis auch immer `NaN`.

Um Zahlen in String-Repräsentationen in verschiedenen Zahlensystemen zu konvertieren nutze folgendes:
`intValue.toString(radix)`.

## Beispiele

### Einsatz von `parseInt`

Alle folgenden Beispiele geben **`15` **zurück:

```js
parseInt(" 0xF", 16);
parseInt(" F", 16);
parseInt("17", 8);
parseInt(021, 8);
parseInt("015", 10);
parseInt(15.99, 10);
parseInt("15,123", 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);
```

Alle folgenden Beispiele geben **`NaN`** zurück:

```js
parseInt("Hello", 8); // Not a number at all
parseInt("546", 2);   // Digits are not valid for binary representations
```

Alle folgenden Beispiele geben **`-15`** zurück:

```js
parseInt("-F", 16);
parseInt("-0F", 16);
parseInt("-0XF", 16);
parseInt(-15.1, 10);
parseInt(" -17", 8);
parseInt(" -15", 10);
parseInt("-1111", 2);
parseInt("-15e1", 10);
parseInt("-12", 13);
```

Die folgenden Beispiele geben **`4`** zurück:

```js
parseInt(4.7, 10);
parseInt(4.7 * 1e22, 10);       // Sehr große Zahl wird zu 4
parseInt(0.00000000000434, 10); // Sehr kleine Zahl wird zu 4
```

Das folgende Beispiel gibt **`224`** zurück:

```js
parseInt("0e0", 16);
```

## Oktal-Interpretationen ohne radix

Obwohl ECMAScript 3 es nicht empfahl und ECMAScript 5 es verbietet, interpretieren viele Implementierungen einen mit `"0"` beginnende String als Oktalzahl. Das folgende Beispiel hat ein Ergebnis im Oktal- oder Dezimalsystem. **Das Zahlensystem sollte immer angegeben werden, um solche Verwirrungen zu vermeiden.**

```js
parseInt("0e0"); // 0
parseInt("08"); // 0, '8' ist keine oktale Ziffer.
```

### ECMAScript 5 entfernt oktale Interpretation

Die ECMAScript 5 Spezifikation der `parseInt` Funktion erlaubt es nicht mehr einen mit `0` beginnenden String als Oktalzahl zu interpretieren. ECMAScript 5 Stand:

Die `parseInt` Funktion produziert eine ganze Zahl, indem der Inhalt vom string Argument interpretiert wird, abhängig vom in radix angegebenen Zahlensystem. Führende Whitespaces werden ignoriert. Wenn radix `undefined` oder `0` ist, wird von `10` ausgegangen, außer die Zahl beginnt mit den Zeichen `0x` oder `0X`, dann wird `16` für radix angenommen.

Das unterscheidet sich von der ECMAScript 3 Spezifikation, welche Oktalinterpretationen nicht empfiehlt, sie aber erlaubt.

Weil viele Implementierungen dieses Verhalten seit 2013 nicht geändert haben und auch ältere Browser unterstützt werden müssen, **sollte immer das radix-Argument gesetzt werden.**

## Eine strenge parse-Funktion

Es ist manchmal nützliche eine strenge Funktion für die Umwandlung von ganzen Zahlen zu verwenden. Reguläre Ausdrücke können helfen:

```js
filterInt = function (value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

console.log(filterInt('421'));               // 421
console.log(filterInt('-421'));              // -421
console.log(filterInt('+421'));              // 421
console.log(filterInt('Infinity'));          // Infinity
console.log(filterInt('421e+0'));            // NaN
console.log(filterInt('421hop'));            // NaN
console.log(filterInt('hop1.61803398875'));  // NaN
console.log(filterInt('1.61803398875'));     // NaN
```

## Spezifikationen

| Spezifikation                                                                            | Status                       | Komment              |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                                 | {{Spec2('ES1')}}         | Initiale Definition. |
| {{SpecName('ES5.1', '#sec-15.1.2.2', 'parseInt')}}                     | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-parseint-string-radix', 'parseInt')}}         | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-parseint-string-radix', 'parseInt')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.parseInt")}}

## Siehe auch

- {{jsxref("parseFloat", "parseFloat()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("isNaN", "isNaN()")}}
- {{jsxref("Number.toString()")}}
- {{jsxref("Object.valueOf")}}
