---
title: <shape>
slug: Web/CSS/shape
tags:
  - CSS
  - CSS Datentyp
  - Layout
  - Reference
  - Référence(2)
  - Web
translation_of: Web/CSS/shape
---
{{ CSSRef() }}

## Übersicht

Der `<shape>` [CSS](/de/docs/Web/CSS "CSS") Datentyp beschreibt die genaue Form eines Bereichs. Dieser Bereich wird benutzt, um zu definieren, auf welchen Teil eines Elements Eigenschaften wie {{ Cssxref("clip") }} angewendet werden.

In der aktuellen Spezifikation kann ein `<shape>`, obwohl er entworfen wurde, um beliebige Formen zu beschreiben, ausschließlich einen rechteckigen Bereich repräsentieren, der durch die Funktion `rect()` definiert wird.

## Die `rect()` Funktion

Die `rect()` Funktion erstellt einen Bereich in Form eines Rechtecks.

### Syntax

    rect(top, right, bottom, left)

#### Werte

![rect.png](/@api/deki/files/5730/=rect.png)

- _top_
  - : Ist eine {{cssxref("&lt;length&gt;")}}, die den Versatz der Oberkante des Rechtecks relativ zur Oberkante der Element Box beschreibt.

- _right_
  - : Ist eine {{cssxref("&lt;length&gt;")}}, die den Versatz der rechten Kante des Rechtecks relativ zur linken Kante der Element Box beschreibt.

- _bottom_
  - : Ist eine {{cssxref("&lt;length&gt;")}}, die den Versatz der Unterkante des Rechtecks relativ zur Oberkante der Element Box beschreibt.

- _left_
  - : Ist eine {{cssxref("&lt;length&gt;")}}, die den Versatz der linken Kante des Rechtecks relativ zur linken Kante der Element Box beschreibt.

### Interpolation

Werte des `<shape>` Datentyps, welche Rechtecke darstellen, können interpoliert werden, um Animationen zu erlauben. In diesem Fall werden sie über ihre `top`, `right`, `bottom` und `left` Komponenten interpoliert, wovon jede als reale Fließkommazahl behandelt wird. Die Geschwindigkeit der Interpolation wird bestimmt durch die [Timing Funktion](/de/docs/Web/CSS/Timing_Funktion "timing-function") associated with the animation.

### Beispiel

     img.clip04 {
       clip: rect(10px, 20px, 20px, 10px);
     }

## Spezifikation

| Spezifikation                                                                                    | Status                       | Kommentar                                                    |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------ |
| {{ SpecName('CSS2.1', 'visufx.html#value-def-shape', '&lt;shape&gt;') }} | {{ Spec2('CSS2.1') }} | Definiert durch die {{ cssxref("clip") }} Eigenschaft |

## Browser Kompatibilität

{{Compat("css.types.shape")}}

## Siehe auch

- Verwandte CSS Eigenschaften: {{ Cssxref("clip") }}
- Die [-moz-image-rect()](/de/docs/Web/CSS/-moz-image-rect "en/CSS/-moz-image-rect") Funktion mit ähnlichen Koordinaten wie `rect()`.
