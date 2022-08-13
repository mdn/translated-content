---
title: border-image-slice
slug: Web/CSS/border-image-slice
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Ränder
  - Grafik
  - Layout
  - NeedsExample
  - Referenz
translation_of: Web/CSS/border-image-slice
---
{{CSSRef}}

## Übersicht

Die `border-image-slice` CSS Eigenschaft teilt das Bild, welches von {{cssxref("border-image-source")}} spezifiziert wird, in neun Regionen ein: Die vier Ecken, die vier Kanten und die Mitte. Diese werden von 4 Werten festgelegt.

[![The nine slices defined by the CSS border-image shorthand or border-image-slice longhand properties](/files/3814/border-image-slice.png)](/files/3814/border-image-slice.png)Vier Werte kontrollieren die Position der Schneidelinien, die das Bild einteilen. Werden nicht alle Werte definiert, werden sie von den anderen angegebenen, mit der üblichen 4-Werte CSS Syntax, abgeleitet.

Die Mitte des Bildes wird nicht im Rand verwendet, kann allerdings als Hintergrundbild benutzt werden, wenn das Schlüsselwort `fill` gesetzt wurde. Dies kann an jeder Position der CSS-Eigenschaft geschehen (vor, hinter oder zwischen anderen Werten).

Die Eigenschaften {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}}, {{cssxref("border-image-outset")}} definieren die weitere Verwendung des Bildes.

Die Kurzschreibweise {{cssxref("border-image")}} kann diese Eigenschaft zu ihrem Standardwert zurücksetzen.

{{cssinfo}}

## Syntax

```css
/* border-image-slice: slice */
border-image-slice: 30%;

/* border-image-slice: horizontal vertikal */
border-image-slice: 10% 30%;

/* border-image-slice: oben vertikal unten */
border-image-slice: 30 30% 45;

/* border-image-slice: oben rechts unten links */
border-image-slice: 7 12 14 5;

/* border-image-slice: … fill */
/* Der fill Wert kann zwischen beliebigen Werten platziert werden */
border-image-slice: 10% fill 7 12;

/* Globale Werte */
border-image-slice: inherit;
border-image-slice: initial;
border-image-slice: unset;
```

### Werte

- `slice`
  - : ist eine {{cssxref("&lt;number&gt;")}} oder eine {{cssxref("&lt;percentage&gt;")}}, welche den Abstand der vier Schneidelinien vom Rand festlegt. {{cssxref("&lt;length&gt;")}} Werte sind nicht erlaubt. Die {{cssxref("&lt;number&gt;")}} wird bei Rastergrafiken als _Pixel_, bei Vektorgrafiken als _Koordinaten_ angesehen. Des Weiteren sind {{cssxref("&lt;percentage&gt;")}} Werte relativ zu der Höhe, beziehungsweise der Breite des Bildes. Negative Werte sind nicht erlaubt und größere Werte als die Bildgröße werden zu `100%` konvertiert.
- _horizontal_
  - : ist eine {{cssxref("&lt;number&gt;")}} oder eine {{cssxref("&lt;percentage&gt;")}}, welche den Abstand der zwei horizontalen Schneidelinien, die von oben und unten, vom Rand festlegt. {{cssxref("&lt;length&gt;")}} Werte sind nicht erlaubt. Die {{cssxref("&lt;number&gt;")}} wird bei Rastergrafiken als _Pixel_, bei Vektorgrafiken als _Koordinaten_ angesehen. Des Weiteren sind {{cssxref("&lt;percentage&gt;")}} Werte relativ zu der Höhe, beziehungsweise der Breite des Bildes. Negative Werte sind nicht erlaubt und größere Werte als die Bildgröße werden zu `100%` konvertiert.
- _vertical_
  - : ist eine {{cssxref("&lt;number&gt;")}} oder eine {{cssxref("&lt;percentage&gt;")}}, welche den Abstand der zwei vertikalen Schneidelinien, die von rechts und links, vom Rand festlegt. {{cssxref("&lt;length&gt;")}} Werte sind nicht erlaubt. Die {{cssxref("&lt;number&gt;")}} wird bei Rastergrafiken als _Pixel_, bei Vektorgrafiken als _Koordinaten_ angesehen. Des Weiteren sind {{cssxref("&lt;percentage&gt;")}} Werte relativ zu der Höhe, beziehungsweise der Breite des Bildes. Negative Werte sind nicht erlaubt und größere Werte als die Bildgröße werden zu `100%` konvertiert.
- _top_
  - : ist eine {{cssxref("&lt;number&gt;")}} oder eine {{cssxref("&lt;percentage&gt;")}}, welche den Abstand der oberen Schneidelinie vom Rand festlegt. {{cssxref("&lt;length&gt;")}} Werte sind nicht erlaubt. Die {{cssxref("&lt;number&gt;")}} wird bei Rastergrafiken als _Pixel_, bei Vektorgrafiken als _Koordinaten_ angesehen. Des Weiteren sind {{cssxref("&lt;percentage&gt;")}} Werte relativ zu der Höhe, beziehungsweise der Breite des Bildes. Negative Werte sind nicht erlaubt und größere Werte als die Bildgröße werden zu `100%` konvertiert.
- _bottom_
  - : ist eine {{cssxref("&lt;number&gt;")}} oder eine {{cssxref("&lt;percentage&gt;")}}, welche den Abstand der unteren Schneidelinie vom Rand festlegt. {{cssxref("&lt;length&gt;")}} Werte sind nicht erlaubt. Die {{cssxref("&lt;number&gt;")}} wird bei Rastergrafiken als _Pixel_, bei Vektorgrafiken als _Koordinaten_ angesehen. Des Weiteren sind {{cssxref("&lt;percentage&gt;")}} Werte relativ zu der Höhe, beziehungsweise der Breite des Bildes. Negative Werte sind nicht erlaubt und größere Werte als die Bildgröße werden zu `100%` konvertiert.
- _right_
  - : ist eine {{cssxref("&lt;number&gt;")}} oder eine {{cssxref("&lt;percentage&gt;")}}, welche den Abstand der rechten Schneidelinie vom Rand festlegt. {{cssxref("&lt;length&gt;")}} Werte sind nicht erlaubt. Die {{cssxref("&lt;number&gt;")}} wird bei Rastergrafiken als _Pixel_, bei Vektorgrafiken als _Koordinaten_ angesehen. Des Weiteren sind {{cssxref("&lt;percentage&gt;")}} Werte relativ zu der Höhe, beziehungsweise der Breite des Bildes. Negative Werte sind nicht erlaubt und größere Werte als die Bildgröße werden zu `100%` konvertiert.
- _left_
  - : ist eine {{cssxref("&lt;number&gt;")}} oder eine {{cssxref("&lt;percentage&gt;")}}, welche den Abstand der linken Schneidelinie vom Rand festlegt. {{cssxref("&lt;length&gt;")}} Werte sind nicht erlaubt. Die {{cssxref("&lt;number&gt;")}} wird bei Rastergrafiken als _Pixel_, bei Vektorgrafiken als _Koordinaten_ angesehen. Des Weiteren sind {{cssxref("&lt;percentage&gt;")}} Werte relativ zu der Höhe, beziehungsweise der Breite des Bildes. Negative Werte sind nicht erlaubt und größere Werte als die Bildgröße werden zu `100%` konvertiert.
- `fill`
  - : ist ein Schlüsselwort, das die mittlere Region des Bildes über dem Hintergrundbild abbildet. Seine Größe wird dabei jeweils an die der oberen und linken Bildregionen angepasst.
- `inherit`
  - : ist ein Schlüsselwort, welches bewirkt, dass alle vier Werte von den berechneten Werten des Elternelements übernommen (vererbt) werden.

### Formale Syntax

{{csssyntax}}

## Spezifikationen

| Spezifikation                                                                                            | Status                                   | Kommentar                |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------ |
| {{SpecName('CSS3 Backgrounds', '#border-image-slice', 'border-image-slice')}} | {{Spec2('CSS3 Backgrounds')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.border-image-slice")}}
