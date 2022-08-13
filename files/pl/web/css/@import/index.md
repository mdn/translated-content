---
title: '@import'
slug: Web/CSS/@import
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/@import
---
{{ CSSRef() }}

### Podsumowanie

`@import` pozwala użytkownikom importować reguły stylów z innych arkuszy stylów.

### Składnia

    @import "url";
    @import "url"media1,media2,...;
    @import url("url");
    @import url("url")media1;

### Notatki

W związku z tym, że program użytkownika może pominąć wyszukiwanie zasobów dla niewspieranych typów mediów, autorzy mogą określić reguły `@import` zależne od mediów. Te warunkowe importowanie określa się przy użyciu oddzielonych przecinkami [typów mediów](pl/CSS/@media#Media_types) po URI. W przypadku braku jakiegokolwiek typu mediów import jest bezwarunkowy. Określenie `all` dla medium przynosi ten sam efekt.



### Przykłady

    @import url("fineprint.css") print;
    @import url("bluish.css") projection, tv;

### Specyfikacje

- [CSS 2.1](http://www.w3.org/TR/CSS21/cascade.html#at-import)

### Zgodność z przeglądarką

### Zobacz także

{{ Cssxref("@media") }}, {{ Cssxref("@font-face") }}

{{ languages( { "en": "en/CSS/@import", "fr": "fr/CSS/@import" } ) }}
