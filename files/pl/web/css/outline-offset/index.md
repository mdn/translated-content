---
title: outline-offset
slug: Web/CSS/outline-offset
tags:
  - CSS
  - CSS:Dokumentacje
  - CSS:Rozszerzenia_Mozilli
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/outline-offset
---
{{CSSRef}}

## Podsumowanie

W aplikacjach Mozilli `-moz-outline-offset` jest używane do ustawienia odstępu między konturem a krawędzią lub obramowaniem elementu. Kontur jest linią rysowaną wokół elementów, na zewnątrz krawędzi obramowania w celu wyróżnienia elementu.

{{cssinfo}}

Odstęp będzie przezroczysty (rodzic określi tło).

## Składnia

    -moz-outline-offset: <liczba> | inherit

### Wartości

- \<number>
  - : Szerokość odstępu.

## Przykłady

    hbox.example {
      /* Odsuwa kontur 2px od obramowania */
      -moz-outline-offset: 2px;
    }
