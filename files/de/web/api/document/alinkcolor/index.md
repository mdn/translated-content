---
title: Document.alinkColor
slug: Web/API/Document/alinkColor
translation_of: Web/API/Document/alinkColor
---
{{APIRef("DOM")}} {{ Deprecated_header() }}

Gibt das Farbattribut eines aktiven Links im Dokumenten body wieder oder setzt es. Ein Link wird in der Zeit eines `mousedown` und `mouseup` Events als "aktiv" bezeichnet .

## Syntax

    color = document.alinkColor
    document.alinkColor =color

`color` ist ein String der den Namen der Farbe (z.B., `"blue"`, `"darkblue"`, etc.) oder den Hexadezimalwert der Farbe(z.B., `#0000FF`) enthält. Die Farben samt zugehöriger Hexadezimalcodes können zum Teil hier oder auf ähnlichen Seiten eingesehen werden: <https://html-color-codes.info/>

## Anmerkungen

Der Default Wert dieser Eigenschaft in Mozilla Firefox ist rot (`#ee0000` in hexadezimal).

`document.alinkColor` ist laut [DOM Level 2 HTML](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268) veraltet. Eine Alternative wäre der CSS Selektor {{ Cssxref(":active") }}.

Eine weitere Alternative ist `document.body.aLink`, obwohl diese laut[ HTML 4.01](http://www.w3.org/TR/html401/struct/global.html#adef-alink) ebenfalls veraltet ist und der CSS Selektor präferiert wird.

[Gecko](en/Gecko) unterstützt sowohl `alinkColor`/`:active` als auch{{ Cssxref(":focus") }}. Der Internet Explorer 6 und 7 unterstützen lediglich `alinkColor`/`:active` für [HTML anchor (\<a>) links](en/HTML/Element/a) und verhält sich ähnlich wie `:focus` bei Gecko. `:focus` wird im IE nicht unterstützt.

## Browser compatibility

{{Compat("api.Document.alinkColor")}}
