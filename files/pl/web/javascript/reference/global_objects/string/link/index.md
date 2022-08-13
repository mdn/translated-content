---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
tags:
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/link
original_slug: Web/JavaScript/Referencje/Obiekty/String/link
---
{{JSRef}}

## Podsumowanie

Tworzy [łącze hipertekstowe](http://www.w3.org/TR/html401/struct/links.html#adef-href), które wywołuje inny URL.

## Składnia

    str.link(url)

### Parametry

- `url`
  - : Jakikolwiek łańcuch określony w `href` ze znacznika `a`; powinien być umieszczany poprawny URL (relatywny lub absolutny).

## Opis

Linki tworzymy poprzez metodę `link` stającą się elementami tablicy `links` z obiektu `document`. Zobacz `document.links`.

## Przykłady

### Przykład: Zastosowanie `link()`

Następujący przykład wyświetla słowo "MDN" jako odnośnik hipertekstowy, poprzez który użytkownik będzie mógł przejść na stronę domową Netscape:

```js
var hotText="MDN";
var URL="https://developer.mozilla.org/";

console.log("Kliknij, aby powrócić do " + hotText.link(URL));
// Kliknij, aby powrócić do <a href="https://developer.mozilla.org">MDN</a>
```
