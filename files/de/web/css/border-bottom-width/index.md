---
title: border-bottom-width
slug: Web/CSS/Border-bottom-width
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-bottom-width
---
{{CSSRef}}

## Übersicht

Die `border-bottom-width` Eigenschaft legt die Breite des unteren Rahmens fest.

{{cssinfo("border-bottom-width")}}

## Syntax

    border-bottom-width: {{csssyntax("border-bottom-width")}}

### Werte

- \<Länge>
  - : Eine [Längenangabe](/de/CSS/Einheiten#L.c3.a4ngen "de/CSS/Einheiten#L.c3.a4ngen") die, die Rahmenstärke explizit angibt. Es sind keine negativen Werte erlaubt.
- thin
  - : Eine dünne Rahmenlinie (1px).
- medium
  - : Standardwert. Eine mitteldicke Rahmenlinie (3px).
- thick
  - : Eine dicke Rahmenlinie (5px).
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

    .beispielEins {
      border-bottom-width: 10px;
    }

    .beispielZwei {
      border-bottom-width: thin;
    }

## Spezifikation

| Spezifikation                                                                                                    | Status                                   | Anmerkung              |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------- |
| {{ SpecName('CSS3 Backgrounds', '#the-border-width', 'border-bottom-width') }}         | {{ Spec2('CSS3 Backgrounds') }} | Keine Änderung         |
| {{ SpecName('CSS2.1', 'box.html#border-width-properties', 'border-bottom-width') }} | {{ Spec2('CSS2.1') }}             | Standardwert definiert |

## Browser Kompatibilität

{{Compat("css.properties.border-bottom-width")}}

## Siehe auch

- {{Cssxref("border")}}, {{Cssxref("border-bottom")}}, {{Cssxref("border-bottom-style")}} und {{Cssxref("border-bottom-color")}}
- {{Cssxref("border-left-width")}}, {{Cssxref("border-right-width")}}, {{Cssxref("border-top-width")}} und {{Cssxref("border-width")}}
