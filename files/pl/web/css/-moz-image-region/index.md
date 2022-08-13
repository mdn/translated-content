---
title: '-moz-image-region'
slug: Web/CSS/-moz-image-region
tags:
  - CSS
  - Non-standard
translation_of: Web/CSS/-moz-image-region
---
{{Non-standard_header}}{{ CSSRef() }}

## Podsumowanie

Dla określonych elementów i pseudoelementów XUL, które używają obrazka z własności {{ Cssxref("list-style-image") }}, ta własność określa obszar obrazka, który jest używany w miejsce całego obrazka. Pozwala to elementowi używać różnych fragmentów tego samego obrazka w celu ulepszenia wykonania.

Składnia jest podobna do własności {{ Cssxref("clip") }}. Wszystkie cztery wartości są określane względem górnego lewego rogu obrazka.

- Wartość początkowa `auto`
- Dotyczy: element XUL {{ XULElem("image") }} i pseudoelementy {{ Cssxref(":-moz-tree-image") }}, {{ Cssxref(":-moz-tree-twisty") }} oraz {{ Cssxref(":-moz-tree-checkbox") }}
- Dziedziczony: nie
- Procenty: nie dotyczą
- Wartość wyliczona: Dla wartości `rect()` prostokąt składający się z czterech wyliczonych wartości; w innym przypadku jako określone.

## Składnia

    -moz-image-region: rect(top, right, bottom, left);

## Przykłady

    #example-button {
      /* display only the 4x4 area from the top left of this image */
      list-style-image: url("chrome://example/skin/example.png");
      -moz-image-region: rect(0px, 4px, 4px, 0px);
    }
    #example-button:hover {
      /* use the 4x4 area to the right of the first for the hovered button */
      -moz-image-region: rect(0px, 8px, 4px, 4px);
    }
