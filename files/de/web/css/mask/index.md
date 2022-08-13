---
title: mask
slug: Web/CSS/mask
tags:
  - CSS
  - Layout
  - NeedsBrowserCompatibility
  - Referenz
  - SVG
  - Web
translation_of: Web/CSS/mask
---
{{CSSRef}}

## Übersicht

The `mask` property in CSS allows users to alter the visibility of an item by either partially or fully hiding the item. This is accomplished by either masking or clipping the image at specific points.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
mask: none;

/* Bildwerte */
mask: url(mask.png);                       /* Pixelbild, das als Maske verwendet wird */
mask: url(masks.svg#star);                 /* Element mit SVG-Grafik, die als Maske verwendet wird */

/* Kombinierte Werte */
mask: url(masks.svg#star) luminance;       /* Element mit SVG-Grafik, die als Helligkeitsmaske verwendet wird */
mask: url(masks.svg#star) 40px 20px;       /* Element mit SVG-Grafik, die als Maske verwendet wird, die 40px vom oberen Rand und 20px vom linken Rand positioniert ist */
mask: url(masks.svg#star) 0 0/50px 50px;   /* Element mit SVG-Grafik, die als Maske mit einer Breite und Höhe von 50px verwendet wird */
mask: url(masks.svg#star) repeat-x;        /* Element mit SVG-Grafik, die als horizontal wiederholte Maske verwendet wird */
mask: url(masks.svg#star) stroke-box;      /* Element mit SVG-Grafik, die als Maske verwendet wird, die sich bis zur Box erstreckt, die von der Kontur eingeschlossen wird */
mask: url(masks.svg#star) exclude;         /* Element mit SVG-Grafik, die als Maske verwendet wird und deren nicht überlappende Teile mit dem Hintergrund kombiniert werden */

/* Globale Werte */
mask: inherit;
mask: initial;
mask: unset;
```

### Werte

Falls der Wert ein URL Wert ist, wird das Element als SVG-Maske verwendet, dass durch die URI referenziert wird.

{{csssyntax}}

## Beispiele

```css
.target {
  mask: url(#c1);
}

.anothertarget {
  mask: url(resources.svg#c1);
}
```

## Spezifikationen

| Spezifikation                                                                    | Status                       | Kommentar                                                                                                                                                                         |
| -------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("CSS Masks", "#the-mask", 'mask')}}                     | {{Spec2("CSS Masks")}} | Erweitert die Benutzung auf HTML Elemente. Erweitert die Syntax, indem sie als eine Kurzschreibweise für die neuen `mask-*` Eigenschaften in dieser Spezifikation definiert wird. |
| {{SpecName('SVG1.1', 'masking.html#MaskProperty', 'mask')}} | {{Spec2('SVG1.1')}}     | Ursprüngliche Definition                                                                                                                                                          |

## Browser Kompatibilität

{{Compat("css.properties.mask")}}

## Siehe auch

- {{Cssxref("clip-path")}}, {{Cssxref("filter")}}
- [SVG Effekte auf HTML Inhalte anwenden](/de/docs/SVG_Effekte_auf_HTML_Inhalte_anwenden)
- [SVG](/de/docs/Web/SVG)
