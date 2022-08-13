---
title: page-break-inside
slug: Web/CSS/page-break-inside
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/page-break-inside
---
{{ CSSRef() }}

## Übersicht

Die `page-break-inside` Eigenschaft dient zur Regulierung von Seitenumbrüchen innerhalb des aktuellen Elements.

- Standardwert: `auto`
- Anwendbar auf: Blockelemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell, Seiten
- berechneter Wert: wie festgelegt

## Syntax

    page-break-inside: auto | avoid | inherit

### Werte

- auto
  - : Standardwert. Automatischer Seitenumbruch.
- avoid
  - : Ein Seitenumbruch innerhalb eines Elements wird vermieden.
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

    /* Vermeide Seitenumbruch innerhalb des Absatzes */
    p { page-break-inside: avoid;  }

## Browser Kompatibilität

| Browser           | ab Version |
| ----------------- | ---------- |
| Internet Explorer | 8.0        |
| Firefox (Gecko)   | ---        |
| Opera             | 7.0        |
| Safari (WebKit)   | 1.3 (312)  |

## Spezifikation

- [CSS 3 Paged Media #page-break-inside](http://www.w3.org/TR/css3-page/#page-break-inside)
- [CSS 2.1 Paged Media #page-break-inside](http://www.w3.org/TR/CSS2/page.html#propdef-page-break-inside)

## Siehe auch

- [`page-break-after`](/de/docs/Web/CSS/page-break-after "de/CSS/page-break-after"), [`page-break-before`](/de/docs/Web/CSS/page-break-before "de/CSS/page-break-before")
- [`orphans`](/de/docs/Web/CSS/orphans "de/CSS/orphans"), [`widows`](/de/docs/Web/CSS/widows "de/CSS/widows")

{{ languages( {"en": "en/CSS/page-break-inside" } ) }}
