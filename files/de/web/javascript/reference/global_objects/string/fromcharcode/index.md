---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
translation_of: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
---
{{JSRef}}

Die statische Methode **`String.fromCharCode()`** gibt einen String zurück, der mit der angegebenen Folge von Unicode-Zeichen erstellt wurde.

## Syntax

    String.fromCharCode(num1[, ...[, numN]])

### Parameters

- `num1, ..., numN`
  - : Eine Folge von Zahlen als Unicode-Werte. Der Wertebreich liegt zwischen 0 und 65535 (0xFFFF). Zahlen, welche größer als 0xFFFF sind werden gekürzt.

### Rückgabewert

Ein String, der die den Unicode-Werten zugeordneten Zeichen enthält.

## Beschreibung

Diese Methode gibt einen String zurück und kein {{jsxref("String")}} Objekt.

Da `fromCharCode()` eine statische Methode von {{jsxref("String")}} ist, wird sie immer als `String.fromCharCode()`angewandt und nicht als Methode eines {{jsxref("String")}} Objekts, das erstellt wurde.

## Beispiele

### Verwendung von `fromCharCode()`

    String.fromCharCode(65, 66, 67);   // gibt "ABC" zurück
    String.fromCharCode(0x2014);       // gibt "—" zurück
    String.fromCharCode(0x12014);      // gibt auch "—" zurück. Die Ziffer 1 wird weggekürzt und ignoriert.

## Verwendung mit höheren Werten

Die meisten Unicode-Werte können mit einer 16-bit-Nummer dargestellt werden (wie in den Anfängen der JavaScript-Standardisierung erwartet) und `fromCharCode()` kann verwendet werden, um ein einzelnes Zeichen für die meisten gängigen Werde (d.h. UCS-2 Werte, die ein Subset von UTF-16 mit den am häufigsten vorkommenden Zeichen bilden) darzustellen. Um jedoch ALLE gültigen Unicode-Werte (bis zu 21 bits) darzustellen, ist `fromCharCode()` allein nicht ausreichend. Da die höheren Code Point Zeichen zwei "Ersatznummern" (mit niedrigerem Wert) verwenden, um ein einzelnes Zeichen darzustellen, kann {{jsxref("String.fromCodePoint()")}} (Teil des ES2015 Standards) verwendet werden, um ein solches Paar und damit auch diese Zeichen mit höheren Werten darzustellen.

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                                        |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------ |
| {{SpecName('ES1')}}                                                                             | {{Spec2('ES1')}}         | Erstdefinition. Implementiert in JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.3.2', 'StringfromCharCode')}}                     | {{Spec2('ES5.1')}}     |                                                  |
| {{SpecName('ES6', '#sec-string.fromcharcodes', 'String.fromCharCode')}}     | {{Spec2('ES6')}}         |                                                  |
| {{SpecName('ESDraft', '#sec-string.fromcharcodes', 'String.fromCharCode')}} | {{Spec2('ESDraft')}} |                                                  |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
