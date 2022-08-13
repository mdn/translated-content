---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
tags:
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/anchor
original_slug: Web/JavaScript/Referencje/Obiekty/String/anchor
---
{{JSRef}}

## Podsumowanie

Tworzy kotwicę HTML {{HTMLElement("a")}} do użycia jako cel odnośnika.

## Składnia

    str.anchor(name)

### Parametry

- `name`
  - : Łańcuch znaków.

## Opis

Use the `anchor()` method to programmatically create and display an anchor in a document.

W składni łańcuch znaków reprezentuje literał tekstowy, który ma zobaczyć użytkownik. Łańcuch `name` reprezentuje atrybut `name` znacznika `a`.

Kotwice stworzone za pomocą metody `anchor` stają się elementami tablicy `document.anchors`.

## Przykłady

### Przykład: Zastosowanie `anchor()`

Następujący przykład wewnątrz kodu HTML elementu `script`:

```js
var myString = "Tabela zawartości";

document.body.innerHTML = myString.anchor("contents_anchor");
```

spowoduje otrzymanie na wyjściu kodu HTML:

```js
<a name="contents_anchor">Tabela zawartości</a>
```

## Zobacz także

- {{jsxref("String.prototype.link()")}}
