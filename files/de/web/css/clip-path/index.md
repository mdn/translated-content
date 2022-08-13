---
title: clip-path
slug: Web/CSS/clip-path
tags:
  - CSS
  - Experimentell
  - Layout
  - NeedsBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/clip-path
---
{{CSSRef}}{{SeeCompatTable}}

## Übersicht

Die **clip-path** CSS Eigenschaft verhindert, dass ein Teil eines Elements angezeigt wird, indem es einen Schnittbereich definiert, der angezeigt werden soll, d. h. nur ein bestimmter Bereich des Elements wird angezeigt.

Der Schnittbereich ist ein Pfad, der als URL, die eine Inline- oder externe SVG-Grafik oder eine Formfunktion wie [circle()](/de/docs/Web/SVG/Element/circle) definiert wird. Die `clip-path` Eigenschaft ersetzt die nun als veraltet geltende [clip](/de/docs/Web/CSS/clip) Eigenschaft.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwortwerte */
clip-path: none;
clip-path: fill-box;
clip-path: stroke-box;
clip-path: view-box;

/* Bildwerte */
clip-path: url(resources.svg#c1);
clip-path: linear-gradient(blue, transparent);

/* Geometriewerte */
clip-path: inset(100px 50px);
clip-path: circle(50px at 0 100px);
clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

/* Globale Werte */
clip-path: inherit;
clip-path: initial;
clip-path: unset;
```

### Werte

- `<clip-source>`
  - : Repräsentiert eine URL, die ein Schnittpfad Element referenziert.
- `<basic-shape>`
  - : Eine Grundform Funktion, wie sie in der [CSS Shapes Specifikation](/de/docs/Web/CSS/basic-shape) definiert wird. Eine Grundform macht Gebrauch von der angegebenen Referenzbox, um die Grundform zu skalieren und positionieren. Falls keine Referenzbox angegeben wurde, wird `border-box` als Referenzbox verwendet.
- `<geometry-box>`
  - : Falls in Kombination mit `<basic-shape>` angegeben, gibt dieser Wert die Referenzbox für die Grundform an. Falls alleine angegeben, werden die Ränder der angegebenen Box inklusive etwaiger Randformen (z. B. definiert durch {{cssxref("border-radius")}}) als Schnittpfad verwendet.
- `fill-box`
  - : Verwendet den Objektrahmen als Referenzbox.
- `stroke-box`
  - : Verwendet die Strichrahmenbox als Referenzbox.
- `view-box`
  - : Verwendet den nähesten SVG-Viewport als Referenzbox. Falls ein {{SVGAttr("viewBox")}} Attribut für das den SVG-Viewport erstellende Element angegeben wurde, wird die Referenzbox am Ursprung des Koordinatensystems positioniert, das durch das `viewBox` Attribut erzeugt wird und die Ausmaße der Referenzbox werden auf die Breite und Höhe des `viewBox` Attributs gesetzt.
- `none`
  - : Es wird kein Schnittpfad erzeugt.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
/* Inline-SVG  */
.target {
  clip-path: url(#c1);
}

/* externes SVG */
.anothertarget {
  clip-path: url(resources.svg#c1);
}

/* Kreis */
.circleClass {
  clip-path: circle(15px at 20px 20px);
}
```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar                                            |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName("CSS Masks", "#the-clip-path", 'clip-path')}}                 | {{Spec2('CSS Masks')}} | Erweitert die Anwendung auf HTML Elemente            |
| {{SpecName('SVG1.1', 'masking.html#ClipPathProperty', 'clip-path')}} | {{Spec2('SVG1.1')}}     | Ursprüngliche Definition (gilt nur für SVG Elemente) |

## Browser Kompatibilität

{{Compat("css.properties.clip-path")}}

## Siehe auch

- {{cssxref("clip-rule")}}, {{cssxref("mask")}}, {{cssxref("filter")}}
- [SVG Elemente auf HTML Inhalt anwenden](/de/docs/SVG_Elemente_auf_HTML_Inhalt_anwenden)
- {{SVGAttr("clip-path")}} SVG Attribut
