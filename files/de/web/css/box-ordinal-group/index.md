---
title: '-moz-box-ordinal-group'
slug: Web/CSS/box-ordinal-group
tags:
  - CSS
  - CSS Referenz
  - CSS:Mozilla Erweiterungen
  - Flexible Box
  - Non-standard
translation_of: Web/CSS/box-ordinal-group
translation_of_original: Web/CSS/-moz-box-ordinal-group
original_slug: Web/CSS/-moz-box-ordinal-group
---
{{CSSRef}}
{{warning("Dies ist eine Eigenschaft des ursprünglichen CSS Flexible Box Entwurfs und wurde in neueren Entwürfen ersetzt.")}}

Siehe [Flexbox](/de/docs/Web/Guide/CSS/Flexible_boxes "/en/CSS/Flexible_boxes") für mehr Informationen, was statt dieser Eigenschaft verwendet werden sollte.

## Übersicht

Kennzeichnet die Aufzählungsgruppe, zu der das Element gehört. Elemente mit einer geringeren Aufzählungsgruppe werden vor denen mit höherer Aufzählungsgruppe angezeigt.

## Werte

Werte müssen Ganzzahlen größer als null sein. Der Standardwert für diese Eigenschaft ist 1.

## Beispiele

```html
<style type="text/css">
  #Flexbox {
    display: -ms-box;
    display: -moz-box;
    display: -webkit-box;
  }

  #text1 {
    background: red;
    -ms-box-ordinal-group: 4;
    -moz-box-ordinal-group: 4;
    -webkit-box-ordinal-group: 4;
  }

  #text2 {
    background: green;
    -ms-box-ordinal-group: 3;
    -moz-box-ordinal-group: 3;
    -webkit-box-ordinal-group: 3;
  }

  #text3 {
    background: blue;
    -ms-box-ordinal-group: 2;
    -moz-box-ordinal-group: 2;
    -webkit-box-ordinal-group: 2;
  }

  #text4 {
    background: orange;
  }
</style>

<div id="Flexbox">
  <div id="text1">text 1</div>
  <div id="text2">text 2</div>
  <div id="text3">text 3</div>
  <div id="text4">text 4</div>
</div>
```
