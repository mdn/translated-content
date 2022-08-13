---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
tags:
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/search
original_slug: Web/JavaScript/Referencje/Obiekty/String/search
---
{{JSRef}}

## Podsumowanie

Wykonuje przeszukanie dla dopasowanych wyrażeń regularnych i tego obiektu {{jsxref("String")}}.

## Składnia

    str.search(regexp)

### Parametry

- `regexp`
  - : Nazwa wyrażenia regularnego. Może być to nazwa zmiennej lub literał.

## Opis

Jeśli sukces, rezultat przeszukania indeksu wyrażenia regularnego wewnątrz łańcucha znaków. Inaczej zwróci -1.

Kiedy chcesz wiedzieć gdzie jest znaleziony wzorzec w łańcuchu znaków zastosuj `search()` (podobne do wyrażenia regularnego metody {{jsxref("RegExp.prototype.test()", "test()")}}); aby uzyskać więcej informacji (lecz wolniej wykonywanie) zastosuj {{jsxref("String.prototype.match()", "match()")}} (podobne do wyrażenia regularnego metody {{jsxref("RegExp.prototype.exec()", "exec()")}} method).

## Przykłady

### Przykład: Zastosowanie `search`()

Następujący przykład drukuje wiadomość, która zależy od sukcesu testu.

```js
function testinput(re, str){
   var midstring;
   if (str.search(re) != -1) {
      midstring = " contains ";
   } else {
      midstring = " does not contain ";
   }
   console.log (str + midstring + re.source);
}
```
