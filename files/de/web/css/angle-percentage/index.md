---
title: <angle-percentage>
slug: Web/CSS/angle-percentage
tags:
  - CSS
  - CSS Datentyp
  - Einheiten
  - Werte
  - angle-percentage
translation_of: Web/CSS/angle-percentage
---
{{CSSRef}}

Der **`<angle-percentage>`** [CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/CSS_Types) stellt einen Wert dar, der entweder {{Cssxref("angle")}} oder ein {{Cssxref("percentage")}} sein kann.

## Syntax

Für `<angle-percentage>`-Werte sind alle Werte syntaktisch gültig, die auch bei {{Cssxref("angle")}} oder {{Cssxref("percentage")}} syntaktisch gültig sind.

## Verwendung mit calc()

Wenn `<angle-percentage>` ein zulässiger Typ ist, dann wird aus einem Prozentwert ein einfacher {{Cssxref("angle")}} errechnet. Daher kann `<angle-percentage>` in einem {{Cssxref("calc()")}}-Ausdruck verwendet werden.

## Spezifikationen

| Specification                                                                                            | Status                           | Comment                                               |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------- |
| {{SpecName('CSS4 Values', '#mixed-percentages', '&lt;angle-percentage&gt;')}} | {{Spec2('CSS4 Values')}} |                                                       |
| {{SpecName('CSS3 Values', '#mixed-percentages', '&lt;angle-percentage&gt;')}} | {{Spec2('CSS3 Values')}} | Definiert `<angle-percentage>`. `calc()` hinzugefügt. |

## Browser-Kompatibilität

{{Compat("css.types.angle-percentage")}}
