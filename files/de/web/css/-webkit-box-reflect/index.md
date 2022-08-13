---
title: '-webkit-box-reflect'
slug: Web/CSS/-webkit-box-reflect
tags:
  - CSS
  - Eigenschaft
  - Non-standard
  - Referenz
translation_of: Web/CSS/-webkit-box-reflect
---
{{Non-standard_header}}{{CSSRef}}

## Übersicht

Die `-webkit-box-reflect` [CSS](/de/docs/Web/CSS) Eigenschaft reflektiert den Inhalt eines Elements in einer bestimmten Richtung.

> **Warning:** **Hinweis:** Dieses Feature ist **nicht dazu gedacht, auf Webseiten verwendet zu werden**. Um Reflektionen im Web zu erreichen, ist der Standardweg die Benutzung der CSS {{cssxref("element", "element()")}} Funktion.

{{cssinfo}}

## Syntax

```css
/* Richtungswerte */
-webkit-box-reflect: above;
-webkit-box-reflect: below;
-webkit-box-reflect: left;
-webkit-box-reflect: right;

/* Versatzwert */
-webkit-box-reflect: below 10px;

/* Maskenwert */
-webkit-box-reflect: below 0 linear-gradient(transparent, white);

/* Globale Werte */
-webkit-box-reflect: inherit;
-webkit-box-reflect: initial;
-webkit-box-reflect: unset;
```

### Werte

- `above`_,_ `below`_,_ `right`_,_ `left`
  - : Sind Schlüsselwörter, die angeben, in welche Richtung die Reflektion stattfinden soll.
- `<length>`
  - : Gibt die Größe der Reflektion an.
- `<image>`
  - : Beschreibt die Maske, die auf die Reflektion angewendet werden soll.

### Formale Syntax

{{csssyntax}}

## Spezifikationen

Diese Eigenschaft ist nicht standardisiert und wird nicht Teil von CSS sein. Der Standardweg, um eine Reflektion in CSS zu erzeugen, ist die Verwendung der CSS Funktion {{cssxref("element", "element()")}}.

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- Die Apple [Documentation](http://developer.apple.com/library/safari/documentation/appleapplications/reference/safaricssref/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW16)
- Die Webkit [Spezifikation](https://www.webkit.org/blog/182/css-reflections/)
- Lea Verous Artikel bezüglich Reflektion unter Vernwendung von [standardisierten CSS Features](http://lea.verou.me/2011/06/css-reflections-for-firefox-with-moz-element-and-svg-masks/).
