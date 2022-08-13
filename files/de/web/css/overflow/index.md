---
title: overflow
slug: Web/CSS/overflow
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/overflow
---
{{ CSSRef() }}

## Übersicht

Die `overflow` Eigenschaft legt fest, ob Inhalte aus einem Element hinausragen dürfen oder, ob Scrollbalken beim Überlauf zum Einsatz kommen.

- Standardwert: visible
- Anwendbar auf: block, inline und table-cell Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: wie festgelegt

## Syntax

    overflow: visible | hidden | scroll | auto | inherit

### Werte

- visible
  - : Standardwert. Der Inhalt wird nicht abgeschnitten und kann aus dem Element hinausragen.
- hidden
  - : Der Inhalt wird abgeschnitten und es werden keine Scrollbalken angezeigt.
- scroll
  - : Es werden immer Scrollbalken angezeigt, auch wenn der Inhalt nicht überläuft.
- auto
  - : Hängt vom Browser ab. Firefox stellt Scrollbalken zur Verfügung, wenn der Inhalt überläuft.
- inherit
  - : Der Wert des Elternelements wird geerbt.

#### Mozilla Erweiterungen

- \-moz-scrollbars-none
  - : {{ obsolete_inline() }} stattdessen overflow:hidden
- \-moz-scrollbars-horizontal
  - : {{ Deprecated_inline() }} Verwendung von [`overflow-x`](/de/docs/Web/CSS/overflow-x "de/CSS/overflow-x") und [`overflow-y`](/de/docs/Web/CSS/overflow-y "de/CSS/overflow-y") wird bevorzugt.
- \-moz-scrollbars-vertical
  - : {{ Deprecated_inline() }} Verwendung von [`overflow-x`](/de/docs/Web/CSS/overflow-x "de/CSS/overflow-x") und [`overflow-y`](/de/docs/Web/CSS/overflow-y "de/CSS/overflow-y") wird bevorzugt.
- \-moz-hidden-unscrollable
  - : Deaktiviert das Scrollen für das Wurzelelement (\<html>, \<body>) und ist nur für interne Zwecke gedacht (z.B. Themes).

## Beispiele

    p {
         width: 12em;
         height: 6em;
         border: dotted;
         overflow: auto;   /* Scrollbalken erscheinen nur wenn nötig */
    }

`overflow: hidden`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

`overflow: scroll`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

`overflow: auto`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

`overflow: auto`
wenig Text

`overflow: visible`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

## Hinweise

Bis einschließlich Gecko 1.9.2 (Firefox 3.6), war die `overflow` Eigenschaft fälschlicherweise auch für Tabellengruppen verfügbar (`<thead>` , `<tbody>` , `<tfoot>`). Dieses Verhalten wurde in späteren Versionen korrigiert.

## Spezifikation

| Spezifikation                                                                        | Status                               | Kommentar                                                       |
| ------------------------------------------------------------------------------------ | ------------------------------------ | --------------------------------------------------------------- |
| {{SpecName('CSS3 Overflow', '#propdef-overflow', 'overflow')}} | {{Spec2('CSS3 Overflow')}} | Changed syntax to allow one or two keywords instead of only one |
| {{SpecName('CSS3 Box', '#propdef-overflow', 'overflow')}}         | {{Spec2('CSS3 Box')}}         | No change.                                                      |
| {{SpecName('CSS2.1', 'visufx.html#overflow', 'overflow')}}         | {{Spec2('CSS2.1')}}             | Initial definition.                                             |

{{cssinfo}}

## Browser Kompatibilität

{{Compat("css.properties.overflow")}}

## Siehe auch

- Ähnliche CSS Eigenschaften: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}

{{ languages( { "en": "en/CSS/overflow" } ) }}
