---
title: String.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
translation_of: Web/JavaScript/Reference/Global_Objects/String/slice
---
{{JSRef}}

Die **`slice()`** Methode extrahiert einen Teilbereich eines Strings und gibt einen neuen String zurück.

## Syntax

    str.slice(AnfangIndex[, EndIndex])

### Parameters

- `AnfangIndex`
  - : Der nullbasierte Index von welchem mit der Extraktion begonnen wird. Wenn dieser negativ ist, wird er als `strLength + AnfangIndex,`wobei `strLength` die länge des Strings darstellt, (bspw., wenn `AnfangIndex` `-3` ist, wird es als `strLength - 3 gewertet`). Wenn `beginIndex` größer oder gleich length des Strings ist, gibt `slice()` einen leeren String zurück.
- `EndIndex`
  - : Optional. Der nullbasierte Index _vor_ welchem die Extraktion beendet wird. Der Charakter an diesem Index wird nicht mit einbezogen. Wenn `EndIndex`ausgelassen wird, extrahiert `slice()` bis zum Ende des Strings. Wenn `EndIndex`negativ ist, wird es wie `strLength + EndIndex` gewertet, wobei strLength sich auf die Länge des Strings bezieht (z.B.: wenn E`ndIndex` `-3 ist, wird es gewertet wie ``strLength - 3).`

### Return value

Ein neuer String, welcher die extrahierte Sektion des Strings enthält.

## Beschreibung

`slice()` extrahiert den Text eines Strings und gibt einen neuen zurück. Änderungen im einen String wirken sich nicht auf den anderen String aus.

`slice()` extrahiert bis, aber nicht einschließlich, `EndIndex. ``str.slice(1, 4)` extrahiert den zweiten Charakter bis zum vierten (Character mit den Indexen 1, 2, und 3).

Als Beispiel, `str.slice(2, -1)` extrahiert den dritten Charakter bis zum zweiten, bis zum letzten Charakter im String.

## Beispiele

### `Benutzen von slice()` um einen neuen String zu erzeugen

Das folgende Beispiel benutzt `slice()` um einen neuen String zu erzeugen.

```js
var str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2); // OUTPUT: he morn
console.log(str3); // OUTPUT: morning is upon u
console.log(str4); // OUTPUT: is upon us.
console.log(str5); // OUTPUT: ""
```

### Benutzen von `slice()` mit negativen Indexen

Das folgende Beispiel benutzt `slice()` mit negativen Indexen.

```js
var str = 'The morning is upon us.';
str.slice(-3);     // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1);  // returns 'The morning is upon us'
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.4.13', 'String.prototype.slice')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-string.prototype.slice', 'String.prototype.slice')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-string.prototype.slice', 'String.prototype.slice')}} | {{Spec2('ESDraft')}} |                                                       |

## Browser kompatibilität

{{Compat}}

## See also

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.substring()")}}
- {{jsxref("Array.prototype.slice()")}}
