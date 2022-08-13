---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
tags:
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/concat
original_slug: Web/JavaScript/Referencje/Obiekty/String/concat
---
{{JSRef}}

## Podsumowanie

Łączy tekst dwóch lub więcej łańcuchów znaków i zwraca nowy łańcuch.

## Składnia

    str.concat(string2, string3[, ..., stringN])

### Parametry

- `string2...stringN`
  - : Łańcuchy znaków mające być dołączone do tego łańcucha.

## Opis

`concat()` łączy tekst jednego lub więcej łańcuchów znaków i zwraca nowy łańcuch znaków. Zmiana tekstu w jednym łańcuchu znaków nie ma wpływu na drugi łańcuch.

## Przykłady

### Przykład: Zastosowanie `concat()`

Następujący przykład łączy łańcuchy znaków w nowy łańcuch znaków.

```js
var s1="Och, ";
var s2="jaki piękny ";
var s3="poranek.";
var s4=s1.concat(s2,s3); // zwraca "Och, jaki piękny poranek."
```
