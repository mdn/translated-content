---
title: empty-cells
slug: Web/CSS/empty-cells
tags:
  - CSS
  - Dokumentacje
translation_of: Web/CSS/empty-cells
---
{{ CSSRef() }}

## Podsumowanie

Własność CSS **empty-cells** określa, jak program powinien wyświetlać obramowania i tła wokół komórek, które nie mają widocznej zawartości.

{{cssinfo}}

## Składnia

    empty-cells: show | hide | inherit

### Wartości

- {{ Cssxref("inherit") }}

  `show`

  - : obramowania i tła powinny być wyświetlane jak normalne komórki

- `hide`
  - : obramowania i tła nie powinny być wyświetlane

## Przykłady

    .contentbox td {
      empty-cells: show;
    }

## Specyfikacje

- [W3C Cascading Style Sheets, level 2 revision 1](http://www.w3.org/TR/CSS21/tables.html#empty-cells)
- [W3C Cascading Style Sheets, level 2](http://www.w3.org/TR/REC-CSS2/tables.html#empty-cells)
- [W3C Cascading Style Sheets, level 3](http://www.w3.org/Style/CSS/current-work#tables)

## Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | ?                |
| Firefox           | ?                |
| Netscape          | ?                |
| Opera             | ?                |
| Safari            | ?                |
