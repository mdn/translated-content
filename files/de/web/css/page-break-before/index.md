---
title: page-break-before
slug: Web/CSS/page-break-before
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/page-break-before
---
{{ CSSRef() }}

## Übersicht

Die `page-break-before` Eigenschaft dient zur Regulierung von Seitenumbrüchen vor dem aktuellen Element.

- Standardwert: `auto`
- Anwendbar auf: Blockelemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell, Seiten
- berechneter Wert: wie festgelegt

## Syntax

    page-break-before: auto | always | avoid | left | right | inherit

### Werte

- auto
  - : Standardwert. Automatischer Seitenumbruch.
- always
  - : Es wird immer ein Seitenumbruch vor einem Element eingefügt.
- avoid {{ Unimplemented_inline() }}
  - : Ein Seitenumbruch vor einem Element wird vermieden.
- left {{ Unimplemented_inline() }}
  - : Es wird ein Seitenumbruch eingefügt, sodass das folgende Element auf der nächsten linken Seite platziert wird.
- right {{ Unimplemented_inline() }}
  - : Es wird ein Seitenumbruch eingefügt, sodass das folgende Element auf der nächsten rechten Seite platziert wird.
- inherit {{ Unimplemented_inline() }}
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

    /* Vermeide Seitenumbruch vor dem div-Element */
    div.note { page-break-before: avoid;  }

## Browser Kompatibilität

| Browser           | ab Version    |
| ----------------- | ------------- |
| Internet Explorer | 4.0           |
| Firefox (Gecko)   | 1.0 (1.0) [*] |
| Opera             | 7.0           |
| Safari (WebKit)   | 1.2 (125)     |

\[\*] Gecko unterstützt nur `page-break-before:always`. Siehe {{ bug(132035) }}

## Spezifikation

- [CSS 3 Paged Media #page-break-before](http://www.w3.org/TR/css3-page/#page-break-before)
- [CSS 2.1 Paged Media #page-break-before](http://www.w3.org/TR/CSS2/page.html#propdef-page-break-before)

## Siehe auch

- [`page-break-after`](/de/CSS/page-break-after), [`page-break-inside`](/de/CSS/page-break-inside)
- [`orphans`](/de/CSS/orphans "de/CSS/orphans"), [`widows`](/de/CSS/widows "de/CSS/widows")

{{ languages( {"en": "en/CSS/page-break-before" } ) }}
