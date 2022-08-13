---
title: String.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/String/valueOf
tags:
  - JavaScript
  - Method
  - Property
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/valueOf
original_slug: Web/JavaScript/Referencje/Obiekty/String/valueOf
---
{{JSRef}}

## Podsumowanie

Zwraca pierwotną wartość obiektu {{jsxref("String")}}.

## Składnia

    str.valueOf()

## Opis

Metoda `valueOf()` obiektu {{jsxref("String")}} zwraca pierwotną wartość obiektu {{jsxref("String")}} jako łańcuch znaków. Ta wartość jest równoważna do {{jsxref("String.prototype.toString()")}}.

Ta metoda jest w JavaScript wywoływana zazwyczaj wewnętrznie, nie bezpośrednio w kodzie.

## Przykłady

### Przykład: Zastosowanie `valueOf()`

```js
var x = new String("Witaj świecie");
console.log(x.valueOf()); // Wyświetla "Witaj świecie"
```

## Zobacz także

- {{jsxref("String.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
