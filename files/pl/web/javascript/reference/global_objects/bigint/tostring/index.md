---
title: BigInt.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toString
tags:
  - BigInt
  - JavaScript
  - Metodă
  - Prototyp
  - toString()
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt/toString
original_slug: Web/JavaScript/Referencje/Obiekty/BigInt/toString
---
{{JSRef}}

Metoda **`toString()`** zwraca ciąg znaków (_string_), reprezentujący dany obiekt {{jsxref("BigInt")}}. Końcowy znak "n" nie jest częścią wynikowego ciągu znaków.

{{EmbedInteractiveExample("pages/js/bigint-tostring.html")}}

## Składnia

    bigIntObj.toString([podstawa])

### Parametry

- `podstawa`{{optional_inline}}
  - : Argument opcjonalny. Liczba całkowita w zakresie od 2 do 36, reprezentująca bazę systemu liczbowego, w którym ma być przedstawiona dana wartość {{jsxref("BigInt")}}.

### Zwracana wartość

Ciąg znaków reprezentujący dany obiekt {{jsxref("BigInt")}}.

### Wyjątki

- {{jsxref("RangeError")}}
  - : Jeśli do metody `toString()` przekazana jest podstawa systemu mniejsza niż 2 lub większa niż 36, wyrzucany jest błąd {{jsxref("RangeError")}}.

## Opis

Obiekt {{jsxref("BigInt")}} nadpisuje metodę `toString()` obiektu {{jsxref("Object")}}; nie dziedziczy metody {{jsxref("Object.prototype.toString()")}}. Dla obiektów {{jsxref( "BigInt")}}, metoda `toString()` zwraca ciąg znaków reprezentujący daną wartość w systemie pozycyjnym o zadanej bazie.

Metoda `toString()` parsuje pierwszy argument i próbuje zwrócić ciąg znaków reprezentujący daną wartość w systemie o zadanej podstawie (bazie). Dla systemów o podstawie większej niż 10, do reprezentacji cyfr większych niż 9 używane są kolejne litery alfabetu łacińskiego. Przykładowo, dla wartości w systemie szesnastkowym (o podstawie równej 16), używane są litery od `a` do `f`.

Jeśli `podstawa` nie jest podana, zakłada się, że preferowaną bazą systemu jest 10.

Jeśli wartość `bigIntObj` jest ujemna, znak jest zachowywany. Dzieje się tak nawet wtedy, gdy podstawą jest 2; zwracany ciąg cyfr jest dodatnią reprezentacją `bigIntObj`, poprzedzoną znakiem `-`, **nie** dopełnieniem dwójkowym `bigIntObj`.

## Przykłady

### Użycie `toString`

```js
17n.toString();      // '17'
66n.toString(2);     // '1000010'
254n.toString(16);   // 'fe'
-10n.toString(2);    // -1010'
-0xffn.toString(2);  // '-11111111'
```

### `BigInt` z ujemnym zerem

Nie ma obiektów `BigInt` reprezentujących ujemne zero, tak jak nie ma ujemnych zer wśród liczb całkowitych.. `-0.0` jest zmiennoprzecinkową koncepcją zmiennoprzecinkową IEEE, która pojawia się w języku JavaScript jedynie w typie {{jsxref("Number")}}.

```js
(-0n).toString();      // '0'
BigInt(-0).toString(); // '0'
```

## Specyfikacje

| Specyfikacja                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-bigint.prototype.tostring', 'BigInt.prototype.toString()')}} |

## Wsparcie przeglądarek

{{Compat("javascript.builtins.BigInt.toString")}}

## Zobacz też

- {{jsxref("BigInt.prototype.toLocaleString()")}}
- {{jsxref("BigInt.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
