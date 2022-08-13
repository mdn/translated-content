---
title: border-collapse
slug: Web/CSS/border-collapse
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/border-collapse
---
{{ CSSRef() }}

### Podsumowanie

Własność border-collapse jest używana do stworzenia połączonych obramowań. Ma ona duży wpływ na wygląd i styl komórek tabeli. Wyświetlanie obramowań tabeli jest podzielone w CSS2 na dwie kategorie - "połączone" i "rozdzielone". Własność ta definiuje, którego rodzaju wyświetlania użyć. W modelu połączonych obramowań sąsiadujące komórki tabel współdzielą obramowania. W modelu rozdzielonych obramowań sąsiadujące komórki mają swoje własne odrębne obramowania (odległość między nimi określona jest przez własność 'border-spacing').

- {{ Xref_cssinitial() }}: {{ Cssxref("separate") }}
- {{ Xref_cssinherited() }}: Tak
- Media : {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}:

### Składnia

    border-collapse: value

### Wartości

- **inherit** : Ustawia wprost wartość tej własności na wartość rodzica.
- **separate** : Używa modelu wyświetlania "rozdzielonych obramowań".
- **collapse** : Używa modelu wyświetlania "połączonych obramowań".

### Przykłady

[Zobacz przykład](/samples/cssref/border-collapse.html)

    <table border="1" style="border-collapse: collapse" bordercolor="#111111" width="500">

    <table border="1" style="border-collapse: separate" bordercolor="#111111" width="500">

### Notatki

W modelu wyświetlania "połączonych obramowań" wartość 'border-style' ustawiona na "inset" zachowuje się jak "groove", zaś "outset" zachowuje się jak "ridge". CSS2 definiuje, że wartością początkową dla tej własności jest "collapse", jednak CSS2.1 oraz Mozilla/Opera określają lub zachowują się tak, że wartością początkową jest "separate".

### Specyfikacje

- [CSS 2.1](http://www.w3.org/TR/CSS21/tables.html#collapsing-borders)
- [CSS 3](http://www.w3.org/TR/REC-CSS2/tables.html#borders)

### Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | 5.5              |
| Netscape          | 7                |
| Opera             | 5                |

### Zobacz także

{{ Cssxref("border-spacing") }}





{{ languages( { "en": "en/CSS/border-collapse", "es": "es/CSS/border-collapse", "fr": "fr/CSS/border-collapse" } ) }}
