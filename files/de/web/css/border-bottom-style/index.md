---
title: border-bottom-style
slug: Web/CSS/border-bottom-style
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/border-bottom-style
---
{{CSSRef}}

## Übersicht

Die `border-bottom-style` Eigenschaft legt die Rahmenart des unteren Rahmens fest.

{{cssinfo}}

## Syntax

    border-bottom-style: {{csssyntax("border-bottom-style")}}

### Werte

- none
  - : Standardwert. Es wird kein unterer Rahmen gezeichnet und die Breite wird auf '0' zurückgesetzt.
- hidden
  - : Genau wie bei `none` wird kein Rahmen angezeigt. Das Verhalten unterscheidet sich jedoch beim "Collapsing Border Model" innerhalb von Tabellen.
    Wenn [`border-collapse: collapse`](/de/CSS/border-collapse "de/CSS/border-collapse") gesetzt wurde, wird auch an den angrenzenden Nachbarzellen kein Rahmen dargestellt.
- dotted
  - : Punktierte Linie.
- dashed
  - : Gestrichelte Linie.
- solid
  - : Durchgehende Linie.
- double
  - : Zwei durchgehende Linien mit Zwischenraum. Die zwei Linien und der Zwischenraum sind jeweils ein Drittel der [`border-bottom-width`](/De/CSS/Border-bottom-width "De/CSS/Border-bottom-width") Angabe groß.
- groove
  - : Der Rahmen wirkt eingekerbt (3D-Effekt).
- ridge
  - : Der Rahmen wirkt wie eine Kante (3D-Effekt).
- inset
  - : Durch den Rahmen wirkt das ganze Element eingetieft (3D-Effekt).
- outset
  - : Durch den Rahmen wirkt das ganze Element herausgehoben (3D-Effekt).
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

    .beispielEins {
      border-bottom-style: dashed;      /* gestrichelt */
    }

    .beispielZwei {
      border-bottom-style: groove;      /* Einkerbung */
    }

    .beispielDrei {
     border-bottom-style: hidden;       /* Collapsing Border Model */
     border-collapse: collapse;
    }

## Spezifikation

| Spezifikation                                                                                                    | Status                                   | Anmerkung              |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------- |
| {{ SpecName('CSS3 Backgrounds', '#border-bottom-style', 'border-bottom-style') }}     | {{ Spec2('CSS3 Backgrounds') }} | keine Änderung         |
| {{ SpecName('CSS2.1', 'box.html#border-style-properties', 'border-bottom-style') }} | {{ Spec2('CSS2.1') }}             | Standardwert definiert |

## Browser Kompatibilität

{{Compat("css.properties.border-bottom-style")}}

## Siehe auch

- {{ Cssxref("border-bottom") }}, {{ Cssxref("border-bottom-color") }}, and {{ Cssxref("border-bottom-width") }}
- {{ Cssxref("border-left-style") }}, {{ Cssxref("border-right-style") }}, {{ Cssxref("border-top-style") }}, and {{ Cssxref("border-style") }}
