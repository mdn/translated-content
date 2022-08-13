---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
tags:
  - JavaScript
  - URI
translation_of: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
original_slug: Web/JavaScript/Referencje/Obiekty/encodeURIComponent
---
{{jsSidebar("Objects")}}

## Podsumowanie

Koduje każdy komponent Jednolitego Identyfikatora Zasobu (URI) poprzez zamianę, każdego wystąpienia pewnych znaków jedną, dwoma lub trzema sekwencjami ucieczki reprezentujące kodowanie UTF-8 znaku.

## Składnia

    encodeURIComponent(str);

### Parametry

- `str`
  - : Komponent Jednolitego Identyfikatora Zasobu.

## Opis

`encodeURIComponent()` zamienia wszystkie znaki na sekwencje ucieczki poza znakami: alfabetycznymi, cyframi, `- _ . ! ~ * ' ( )`

Ze względów bezpieczeństwa, powinieneś wywoływać `encodeURIComponent` na każdym parametrze podanym przez użytkownika, który będzie podany jako część URI. Na przykład, użytkownik mógł wpisać "`Thyme &time=again`" dla zmiennej `comment`. Nie użycie `encodeURIComponent` na tej zmiennej da `comment=Thyme%20&time=again`. Zauważ, że znak ampersand (_&_) i znak równości (_=_ ) oznaczają nową parę kluczy i wartość. Więc, zamiast wysyłać klucz `comment` równy `Thyme &time=again`, dostaniesz dwa klucze POST, jeden równy "Thyme" , a drugi (`time`) równy again.

## Zobacz także

- {{jsxref("decodeURI", "decodeURI()")}}
- {{jsxref("encodeURI", "encodeURI()")}}
- {{jsxref("decodeURIComponent", "decodeURIComponent()")}}
