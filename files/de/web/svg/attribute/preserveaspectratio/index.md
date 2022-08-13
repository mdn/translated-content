---
title: preserveAspectRatio
slug: Web/SVG/Attribute/preserveAspectRatio
translation_of: Web/SVG/Attribute/preserveAspectRatio
---
« [SVG Attribute reference home](/en/SVG/Attribute "en/SVG/Attribute")

In einigen Fällen, meistens wenn man das {{ SVGAttr("viewBox") }} Attribut benutzt, ist es wünschenswert die Grafik so zu skalieren, dass sie auch mit ungleichem (non-uniform) Seitenverhältnis den gesamten viewport einnimmt. Ein anderer Fall wäre es, mit gleichmäßiger (uniform) Skalierung die Seitenverhältnise der Grafik beizubehalten.

Das Attribut `preserveAspectRatio` legt fest, ob gleich- oder ungleichmäßige Skalierung angewandt wird.

Bei allen Elementen, die dieses Attribut unterstützen (siehe oben), außer dem {{ SVGElement("image") }} Element, ist `preserveAspectRatio` nur wirksam, wenn auch ein Wert für {{ SVGAttr("viewBox") }} im gleichen Element angegeben wurde. Für diese Elemente ist, wenn das Attribut {{ SVGAttr("viewBox") }} nicht angegeben wurde, `preserveAspectRatio` nicht aktiviert.

In {{ SVGElement("image") }} Elementen, gibt `preserveAspectRatio` an, wie die darin verlinkten Bilder sich in den Referenz-Rahmen einpassen und ob die Seitenverhältnisse des verlinkten Bildes, unter Beachtung des momentanen Benutzer-Koordinatensystems, beibehalten werden sollen.

## Verwendungskontext

| Kategorien         | None                                                                                         |
| ------------------ | -------------------------------------------------------------------------------------------- |
| Inhalt             | <align> [<meetOrSlice>]                                                                      |
| Animierbar         | Ja                                                                                           |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/coords.html#PreserveAspectRatioAttribute) |

- \<align>
  - : Der `<align>` Parameter bestimmt ob gleichmäßige Skalierung benutzt wird und wenn dies der Fall ist, die Ausrichtungs-Methode die genutzt wird, im Fall, dass das Seitenverhältnis der {{ SVGAttr("viewBox") }} nicht dem Seitenverhältnis des viewports entspricht. Der `<align>` Parameter muss einen der folgenden Werte enthalten:\* **none**
    Keine einheitliche Skalierung erzwingen. Skaliere die Grafiken des gegebenen Elements ungleichmäßig, wenn notwendig, so dass die bounding-box (Begrenzungs-Rahmen) exakt dem viewport-rectangle (Rechteck des Sichtbereichs) entspricht.
    (Bemerkung: Wenn `<align>` den Wert `none` enthält, wird der Wert für `<meetOrSlice>` ignoriert.)
    - **xMinYMin** - Erzwinge gleichmäßige Skalierung.
      Richte `<min-x>` der Element-{{ SVGAttr("viewBox") }} am kleinsten X-Wert des viewports aus.
      Richte `<min-y>` der Element-{{ SVGAttr("viewBox") }} am kleinsten Y-Wert des viewports aus.
    - **xMidYMin** - Erzwinge gleichmäßige Skalierung.
      Richte den X-Wert des Mittelpunktes der Element-{{ SVGAttr("viewBox") }} am X-Wert des viewport-Mittelpunktes aus.
      Richte den `<min-y>` der Element-{{ SVGAttr("viewBox") }} am kleinsten Y-Wert des viewports aus.
    - **xMaxYMin** - Force uniform scaling.
      Align the `<min-x>+<width>` of the element's {{ SVGAttr("viewBox") }} with the maximum X value of the viewport.
      Align the `<min-y>` of the element's {{ SVGAttr("viewBox") }} with the smallest Y value of the viewport.
    - **xMinYMid** - Force uniform scaling.
      Align the `<min-x>` of the element's {{ SVGAttr("viewBox") }} with the smallest X value of the viewport.
      Align the midpoint Y value of the element's {{ SVGAttr("viewBox") }} with the midpoint Y value of the viewport.
    - **xMidYMid** (the default) - Force uniform scaling.
      Align the midpoint X value of the element's {{ SVGAttr("viewBox") }} with the midpoint X value of the viewport.
      Align the midpoint Y value of the element's {{ SVGAttr("viewBox") }} with the midpoint Y value of the viewport.
    - **xMaxYMid** - Force uniform scaling.
      Align the `<min-x>+<width>` of the element's {{ SVGAttr("viewBox") }} with the maximum X value of the viewport.
      Align the midpoint Y value of the element's {{ SVGAttr("viewBox") }} with the midpoint Y value of the viewport.
    - **xMinYMax** - Force uniform scaling.
      Align the `<min-x>` of the element's {{ SVGAttr("viewBox") }} with the smallest X value of the viewport.
      Align the `<min-y>+<height>` of the element's {{ SVGAttr("viewBox") }} with the maximum Y value of the viewport.
    - **xMidYMax** - Force uniform scaling.
      Align the midpoint X value of the element's {{ SVGAttr("viewBox") }} with the midpoint X value of the viewport.
      Align the `<min-y>+<height>` of the element's {{ SVGAttr("viewBox") }} with the maximum Y value of the viewport.
    - **xMaxYMax** - Force uniform scaling.
      Align the `<min-x>+<width>` of the element's {{ SVGAttr("viewBox") }} with the maximum X value of the viewport.
      Align the `<min-y>+<height>` of the element's {{ SVGAttr("viewBox") }} with the maximum Y value of the viewport.
- \<meetOrSlice>

  - : The `<meetOrSlice>` parameter is optional and, if provided, is separated from the `<align>` value by one or more spaces and then must be one of the following strings:\* **meet** (the default) - Scale the graphic such that:

        *   aspect ratio is preserved
        *   the entire {{ SVGAttr("viewBox") }} is visible within the viewport
        *   the {{ SVGAttr("viewBox") }} is scaled up as much as possible, while still meeting the other criteria

        In this case, if the aspect ratio of the graphic does not match the viewport, some of the viewport will extend beyond the bounds of the {{ SVGAttr("viewBox") }} (i.e., the area into which the {{ SVGAttr("viewBox") }} will draw will be smaller than the viewport).

    - **slice** - Scale the graphic such that:

      - aspect ratio is preserved
      - the entire viewport is covered by the {{ SVGAttr("viewBox") }}
      - the {{ SVGAttr("viewBox") }} is scaled down as much as possible, while still meeting the other criteria

      In this case, if the aspect ratio of the {{ SVGAttr("viewBox") }} does not match the viewport, some of the {{ SVGAttr("viewBox") }} will extend beyond the bounds of the viewport (i.e., the area into which the {{ SVGAttr("viewBox") }} will draw is larger than the viewport).

## Example

## Elements

The following elements can use the `preserveAspectRatio` attribute

- {{ SVGElement("svg") }}
- {{ SVGElement("symbol") }}
- {{ SVGElement("image") }}
- {{ SVGElement("feImage") }}
- {{ SVGElement("marker") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("view") }}
