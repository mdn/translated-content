---
title: page-break-after
slug: Web/CSS/page-break-after
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/page-break-after
---
{{ CSSRef() }}

## Übersicht

Die `page-break-after` Eigenschaft dient zur Regulierung von Seitenumbrüchen nach dem aktuellen Element.

- Standardwert: `auto`
- Anwendbar auf: Blockelemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell, Seiten
- berechneter Wert: wie festgelegt

## Syntax

    page-break-after: auto | always | avoid | left | right | inherit

### Werte

- auto
  - : Standardwert. Automatischer Seitenumbruch.
- always
  - : Es wird immer ein Seitenumbruch nach einem Element eingefügt.
- avoid {{ Unimplemented_inline() }}
  - : Ein Seitenumbruch nach einem Element wird vermieden.
- left {{ Unimplemented_inline() }}
  - : Es wird ein Seitenumbruch eingefügt, sodass das folgende Element auf der nächsten linken Seite platziert wird.
- right {{ Unimplemented_inline() }}
  - : Es wird ein Seitenumbruch eingefügt, sodass das folgende Element auf der nächsten rechten Seite platziert wird.
- inherit {{ Unimplemented_inline() }}
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

    /* Überschriften auf eine neue Seite platzieren */
    h1,h2, h3 { page-break-after:always; }

## Browser Kompatibilität

| Browser           | ab Version    |
| ----------------- | ------------- |
| Internet Explorer | 4.0           |
| Firefox (Gecko)   | 1.0 (1.0) [*] |
| Opera             | 7.0           |
| Safari (WebKit)   | 1.2 (125)     |

\[\*] Gecko unterstützt nur `page-break-after:always`. Siehe {{ bug(132035) }}

## Spezifikation

- [CSS 3 Paged Media #page-break-after](http://www.w3.org/TR/css3-page/#page-break-after)
- [CSS 2.1 Paged Media #page-break-after](http://www.w3.org/TR/CSS2/page.html#propdef-page-break-after)

## Siehe auch

- [`page-break-before`](/de/CSS/page-break-before), [`page-break-inside`](/de/CSS/page-break-inside "de/CSS/page-break-inside")
- [`orphans`](/de/CSS/orphans "de/CSS/orphans"), [`widows`](/de/CSS/widows "de/CSS/widows")

{{ languages( {"en": "en/CSS/page-break-after" } ) }}
