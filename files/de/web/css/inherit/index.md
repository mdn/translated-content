---
title: inherit
slug: Web/CSS/inherit
tags:
  - CSS
  - CSS Kaskadierung
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/inherit
---
{{ CSSRef() }}

## Übersicht

Der `inherit` CSS Wert lässt das Element, für das es angegeben wurde, den [berechneten Wert](/de/docs/Web/CSS/berechneter_Wert) der Eigenschaft seines Elternelements annehmen. Er ist für jede CSS Eigenschaft erlaubt.

Für [vererbte Eigenschaften](/de/docs/Web/CSS/Vererbung "en/CSS/inheritance") bestärkt es das Standardverhalten und wird nur dafür benötigt, eine andere Regel zu überschreiben. Für [nicht vererbte Eigenschaften](/de/docs/Web/CSS/Vererbung "en/CSS/inheritance") gibt er ein Verhalten an, das normalerweise wenig Sinn macht. Stattdessen sollte {{cssxref("initial")}} verwendet werden oder {{cssxref("unset")}} auf die {{cssxref("all")}} Eigenschaft angewandt werden.

{{ Note("Vererbung wird immer vom Elternelement im Dokumentbaum durchgeführt, auch wenn das Elternelement nicht der beinhaltende Block ist.") }}

## Beispiel

     /* Mache Überschriften zweiter Ebene grün */
     h2 { color: green; }

     /* ...aber lasse jene in der Seitenleiste unberührt,
        sodass diese die Farbe ihres Elternelements verwenden */
     #sidebar h2 { color: inherit; }

In diesem Beispiel verwenden die `h2` Elemente innerhalb der Seitenleiste andere Farben. Zum Beispiel, falls eines davon der Kindknoten eines divs wäre, der auf folgende Regel passt

     div#current { color: blue; }

wäre es blau.

## Spezifikationen

| Spezifikation                                                                                | Status                               | Anmerkung                                                               |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------- |
| {{ SpecName('CSS3 Values', "#common-keywords", "inherit") }}             | {{ Spec2('CSS3 Values') }} | Keine signifikante Änderung bezüglich {{ SpecName('CSS2.1') }}. |
| {{ SpecName('CSS2.1', "cascade.html#value-def-inherit", "inherit") }} | {{ Spec2('CSS2.1') }}         | Ursprüngliche Definition                                                |

## Browser Kompatibilität

{{Compat("css.types.global_keywords.inherit")}}

## Siehe auch

- [Vererbung](/de/docs/Web/CSS/Vererbung)
- Die {{cssxref("all")}} CSS Eigenschaft
- Die CSS-weiten Eigenschaftswerte {{cssxref("initial")}}, {{cssxref("inherit")}} und {{cssxref("unset")}}.
