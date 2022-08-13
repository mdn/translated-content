---
title: Boxmodell
slug: Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
original_slug: Web/CSS/CSS_Boxmodell/Einführung_in_das_CSS_Boxmodell
---
{{ CSSRef() }}

## Übersicht

Eine Box hat in CSS vier Bereiche: **margin edge** (weiß außen), **border edge** (grau), **padding edge** (grün), und **content edge** (weiß mitte). Das Folgende Diagramm zeigt die unterschiedlichen Höhen und Breiten anhand der Eigenschaften, die Veränderungen an einer CSS Box zulassen:

![Thanks to Hannes Kraft.](https://mdn.mozillademos.org/files/11243/%3DCSS_Boxmodell_changed.png)

## Details

- Die komplette Breite eines Elements berechnet sich wie folgt:
  - : `margin-left + border-left-width + padding-left + width + padding-right + border-right-width + margin-right`
- Die komplette Höhe eines Elements berechnet sich wie folgt:
  - : `margin-top + border-top-width + padding-top + height + padding-bottom + border-bottom-width + margin-bottom`
- Der MS Internet Explorer verwendet die [width](/de/CSS/width "de/CSS/width")- und die [height](/de/CSS/height "de/CSS/height")-Eigenschaft als Innenabstand des Rahmens, nicht des padding-Bereiches.
  - : `width = padding-left + width + padding-right`
    `height = padding-top + height + padding-bottom`

## Spezifikation

- [CSS 2.1 #Box model](http://www.w3.org/TR/CSS21/box.html#box-dimensions)

## Siehe auch

- [width](/de/CSS/width "de/CSS/width"), [height](/de/CSS/height "de/CSS/height")
- [padding](/de/CSS/padding "de/CSS/padding"), [border](/de/CSS/border "de/CSS/border"), [margin](/de/CSS/margin "de/CSS/margin")
- [position](/De/CSS/position "De/CSS/position"), [left](/De/CSS/Left "De/CSS/Left"), [top](/De/CSS/Top "De/CSS/Top"), [right](/De/CSS/Right "De/CSS/Right"), [bottom](/De/CSS/Bottom "De/CSS/Bottom")
