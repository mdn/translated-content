---
title: border-image-outset
slug: Web/CSS/border-image-outset
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Rahmen
  - Grafik
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/border-image-outset
---
{{CSSRef("CSS Borders")}}

## Übersicht

Die `border-image-outset` CSS Eigenschaft beschreibt, um welchem Wert der Randbildbereich über die Borderbox hinausragt.

{{cssinfo}}

## Syntax

{{csssyntax}}

    border-image-outset: Seiten                  /* Ein-Wert Syntax   */  z. B. border-image-outset: 30%;
    border-image-outset: vertikal horizontal     /* Zwei-Werte Syntax   */  z. B. border-image-outset: 10% 30%;
    border-image-outset: oben horizontal unten   /* Drei-Werte Syntax */  z. B. border-image-outset: 30px 30% 45px;
    border-image-outset: oben rechts unten links /* Vier-Werte syntax  */  z. B. border-image-outset: 7px 12px 14px 5px;

    border-image-repeat: inherit

### Werte

- _Seiten_
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} Wert, der den Betrag angibt, um welchen der Randbildbereich die Borderbox in allen vier Richtungen überragt.
- _horizontal_
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} Wert, der den Betrag angibt, um welchen der Randbildbereich die Borderbox in beiden horizontalen Richtungen überragt.
- _vertikal_
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} Wert, der den Betrag angibt, um welchen der Randbildbereich die Borderbox in beiden vertikalen Richtungen überragt.
- _oben_
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} Wert, der den Betrag angibt, um welchen der Randbildbereich über den oberen Rand der Borderbox hinausragt.
- _unten_
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} Wert, der den Betrag angibt, um welchen der Randbildbereich über den unteren Rand der Borderbox hinausragt.
- _rechts_
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} Wert, der den Betrag angibt, um welchen der Randbildbereich über den rechten Rand der Borderbox hinausragt.
- _links_
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} Wert, der den Betrag angibt, um welchen der Randbildbereich über den linken Rand der Borderbox hinausragt.
- `inherit`
  - : Ist ein Schlüsselwort, das angibt, dass alle vier Werte vom berechneten Wert des Elternelements geerbt werden.

## Spezifikation

| Spezifikation                                                                                            | Status                                   | Kommentar                |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------ |
| {{SpecName('CSS3 Backgrounds', '#border-image-outset', 'border-image-outset')}} | {{Spec2('CSS3 Backgrounds')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.border-image-outset")}}
