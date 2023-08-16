---
title: preserveAspectRatio
slug: Web/SVG/Attribute/preserveAspectRatio
---

{{SVGRef}}

O atributo **`preserveAspectRatio`** indica como um elemento com uma viewBox, fornecendo uma determinada proporção deve se ajustar a uma viewport com uma proporção diferente.

Because the aspect ratio of an SVG image is defined by the {{SVGAttr('viewBox')}} attribute, if this attribute isn't set, the `preserveAspectRatio` attribute has no effect (_with one exception, the {{SVGElement('image')}} element, as described below_).

## Example

```html
<svg viewBox="-1 -1 162 92" xmlns="https://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>

  <!-- (width>height) meet -->
  <svg
    preserveAspectRatio="xMidYMid meet"
    x="0"
    y="0"
    viewBox="0 0 100 100"
    width="20"
    height="10">
    <use href="#smiley" />
  </svg>
  <svg
    preserveAspectRatio="xMinYMid meet"
    x="25"
    y="0"
    viewBox="0 0 100 100"
    width="20"
    height="10">
    <use href="#smiley" />
  </svg>
  <svg
    preserveAspectRatio="xMaxYMid meet"
    x="50"
    y="0"
    viewBox="0 0 100 100"
    width="20"
    height="10">
    <use href="#smiley" />
  </svg>

  <!-- (width>height) slice -->
  <svg
    preserveAspectRatio="xMidYMin slice"
    x="0"
    y="15"
    viewBox="0 0 100 100"
    width="20"
    height="10">
    <use href="#smiley" />
  </svg>
  <svg
    preserveAspectRatio="xMidYMid slice"
    x="25"
    y="15"
    viewBox="0 0 100 100"
    width="20"
    height="10">
    <use href="#smiley" />
  </svg>
  <svg
    preserveAspectRatio="xMidYMax slice"
    x="50"
    y="15"
    viewBox="0 0 100 100"
    width="20"
    height="10">
    <use href="#smiley" />
  </svg>

  <!-- (width<height) meet -->
  <svg
    preserveAspectRatio="xMidYMin meet"
    x="75"
    y="0"
    viewBox="0 0 100 100"
    width="10"
    height="25">
    <use href="#smiley" />
  </svg>
  <svg
    preserveAspectRatio="xMidYMid meet"
    x="90"
    y="0"
    viewBox="0 0 100 100"
    width="10"
    height="25">
    <use href="#smiley" />
  </svg>
  <svg
    preserveAspectRatio="xMidYMax meet"
    x="105"
    y="0"
    viewBox="0 0 100 100"
    width="10"
    height="25">
    <use href="#smiley" />
  </svg>

  <!-- (width<height) slice -->
  <svg
    preserveAspectRatio="xMinYMid slice"
    x="120"
    y="0"
    viewBox="0 0 100 100"
    width="10"
    height="25">
    <use href="#smiley" />
  </svg>
  <svg
    preserveAspectRatio="xMidYMid slice"
    x="135"
    y="0"
    viewBox="0 0 100 100"
    width="10"
    height="25">
    <use href="#smiley" />
  </svg>
  <svg
    preserveAspectRatio="xMaxYMid slice"
    x="150"
    y="0"
    viewBox="0 0 100 100"
    width="10"
    height="25">
    <use href="#smiley" />
  </svg>

  <!-- none -->
  <svg
    preserveAspectRatio="none"
    x="0"
    y="30"
    viewBox="0 0 100 100"
    width="160"
    height="60">
    <use href="#smiley" />
  </svg>
</svg>
```

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html hidden
<svg viewBox="-1 -1 162 92" xmlns="https://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>

  <!-- (width>height) meet -->
  <rect x="0" y="0" width="20" height="10">
    <title>xMidYMid meet</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="20"
    height="10"
    preserveAspectRatio="xMidYMid meet"
    x="0"
    y="0">
    <use href="#smiley" />
  </svg>

  <rect x="25" y="0" width="20" height="10">
    <title>xMinYMid meet</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="20"
    height="10"
    preserveAspectRatio="xMinYMid meet"
    x="25"
    y="0">
    <use href="#smiley" />
  </svg>

  <rect x="50" y="0" width="20" height="10">
    <title>xMaxYMid meet</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="20"
    height="10"
    preserveAspectRatio="xMaxYMid meet"
    x="50"
    y="0">
    <use href="#smiley" />
  </svg>

  <!-- (width>height) slice -->
  <rect x="0" y="15" width="20" height="10">
    <title>xMidYMin slice</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="20"
    height="10"
    preserveAspectRatio="xMidYMin slice"
    x="0"
    y="15">
    <use href="#smiley" />
  </svg>

  <rect x="25" y="15" width="20" height="10">
    <title>xMidYMid slice</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="20"
    height="10"
    preserveAspectRatio="xMidYMid slice"
    x="25"
    y="15">
    <use href="#smiley" />
  </svg>

  <rect x="50" y="15" width="20" height="10">
    <title>xMidYMax slice</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="20"
    height="10"
    preserveAspectRatio="xMidYMax slice"
    x="50"
    y="15">
    <use href="#smiley" />
  </svg>

  <!-- (width<height) meet -->
  <rect x="75" y="0" width="10" height="25">
    <title>xMidYMin meet</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="10"
    height="25"
    preserveAspectRatio="xMidYMin meet"
    x="75"
    y="0">
    <use href="#smiley" />
  </svg>

  <rect x="90" y="0" width="10" height="25">
    <title>xMidYMid meet</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="10"
    height="25"
    preserveAspectRatio="xMidYMid meet"
    x="90"
    y="0">
    <use href="#smiley" />
  </svg>

  <rect x="105" y="0" width="10" height="25">
    <title>xMidYMax meet</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="10"
    height="25"
    preserveAspectRatio="xMidYMax meet"
    x="105"
    y="0">
    <use href="#smiley" />
  </svg>

  <!-- (width<height) slice -->
  <rect x="120" y="0" width="10" height="25">
    <title>xMinYMid slice</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="10"
    height="25"
    preserveAspectRatio="xMinYMid slice"
    x="120"
    y="0">
    <use href="#smiley" />
  </svg>

  <rect x="135" y="0" width="10" height="25">
    <title>xMidYMid slice</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="10"
    height="25"
    preserveAspectRatio="xMidYMid slice"
    x="135"
    y="0">
    <use href="#smiley" />
  </svg>

  <rect x="150" y="0" width="10" height="25">
    <title>xMaxYMid slice</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="10"
    height="25"
    preserveAspectRatio="xMaxYMid slice"
    x="150"
    y="0">
    <use href="#smiley" />
  </svg>

  <!-- none -->
  <rect x="0" y="30" width="160" height="60">
    <title>none</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="160"
    height="60"
    preserveAspectRatio="none"
    x="0"
    y="30">
    <use href="#smiley" />
  </svg>
</svg>
```

```css hidden
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('topExample', '100%', 200)}}

## Syntax

```
preserveAspectRatio="<align> [<meetOrSlice>]"
```

Its value is made of one or two keywords: A required alignment value and an optional "meet or slice" reference as described below:

- Alignment value

  - : The alignment value indicates whether to force uniform scaling and, if so, the alignment method to use in case the aspect ratio of the {{ SVGAttr("viewBox") }} doesn't match the aspect ratio of the viewport. The alignment value must be one of the following keywords:

    - **none**
      Do not force uniform scaling. Scale the graphic content of the given element non-uniformly if necessary such that the element's bounding box exactly matches the viewport rectangle. _Note that if_ `<align>` _is_ `none`_, then the optional_ `<meetOrSlice>` _value is ignored_.
    - **xMinYMin** - Force uniform scaling.
      Align the `<min-x>` of the element's {{ SVGAttr("viewBox") }} with the smallest X value of the viewport.
      Align the `<min-y>` of the element's {{ SVGAttr("viewBox") }} with the smallest Y value of the viewport.
    - **xMidYMin** - Force uniform scaling.
      Align the midpoint X value of the element's {{ SVGAttr("viewBox") }} with the midpoint X value of the viewport.
      Align the `<min-y>` of the element's {{ SVGAttr("viewBox") }} with the smallest Y value of the viewport.
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

- Meet or slice reference

  - : The meet or slice reference is optional and, if provided, must be one of the following keywords:

    - **meet** (_the default_) - Scale the graphic such that:

      - aspect ratio is preserved
      - the entire {{ SVGAttr("viewBox") }} is visible within the viewport
      - the {{ SVGAttr("viewBox") }} is scaled up as much as possible, while still meeting the other criteria

      In this case, if the aspect ratio of the graphic does not match the viewport, some of the viewport will extend beyond the bounds of the {{ SVGAttr("viewBox") }} (i.e., the area into which the {{ SVGAttr("viewBox") }} will draw will be smaller than the viewport).

    - **slice** - Scale the graphic such that:

      - aspect ratio is preserved
      - the entire viewport is covered by the {{ SVGAttr("viewBox") }}
      - the {{ SVGAttr("viewBox") }} is scaled down as much as possible, while still meeting the other criteria

      In this case, if the aspect ratio of the {{ SVGAttr("viewBox") }} does not match the viewport, some of the {{ SVGAttr("viewBox") }} will extend beyond the bounds of the viewport (i.e., the area into which the {{ SVGAttr("viewBox") }} will draw is larger than the viewport).

## Elements

Seven elements are using this attribute: {{SVGElement("svg")}}, {{SVGElement("symbol")}}, {{SVGElement("image")}}, {{SVGElement("feImage")}}, {{SVGElement("marker")}}, {{SVGElement("pattern")}}, and {{SVGElement("view")}}.

### feImage

For {{SVGElement('feImage')}}, `preserveAspectRatio` defines how the referenced image should fit in the rectangle define by the `<feImage>` element.

| Value         | **\<align> \<meetOrSlice>?** |
| ------------- | ---------------------------- |
| Default value | `xMidYMid` `meet`            |
| Animatable    | Yes                          |

### image

For {{SVGElement('image')}}, `preserveAspectRatio` defines how the referenced image should fit in the rectangle define by the `<image>` element.

| Value         | **\<align> \<meetOrSlice>?** |
| ------------- | ---------------------------- |
| Default value | `xMidYMid` `meet`            |
| Animatable    | Yes                          |

### marker

For {{SVGElement('marker')}}, `preserveAspectRatio` indicates if a uniform scaling must be performed to fit the element viewport.

| Value         | **\<align> \<meetOrSlice>?** |
| ------------- | ---------------------------- |
| Default value | `xMidYMid` `meet`            |
| Animatable    | Yes                          |

### pattern

For {{SVGElement('pattern')}}, `preserveAspectRatio` indicates if a uniform scaling must be performed to fit the element viewport.

| Value         | **\<align> \<meetOrSlice>?** |
| ------------- | ---------------------------- |
| Default value | `xMidYMid` `meet`            |
| Animatable    | Yes                          |

### svg

For {{SVGElement('svg')}}, `preserveAspectRatio` indicates if a uniform scaling must be performed to fit the element viewport.

| Value         | **\<align> \<meetOrSlice>?** |
| ------------- | ---------------------------- |
| Default value | `xMidYMid` `meet`            |
| Animatable    | Yes                          |

### symbol

For {{SVGElement('symbol')}}, `preserveAspectRatio` indicates if a uniform scaling must be performed to fit the element viewport.

| Value         | **\<align> \<meetOrSlice>?** |
| ------------- | ---------------------------- |
| Default value | `xMidYMid` `meet`            |
| Animatable    | Yes                          |

### view

For {{SVGElement('view')}}, `preserveAspectRatio` indicates if a uniform scaling must be performed to fit the element viewport.

| Value         | **\<align> \<meetOrSlice>?** |
| ------------- | ---------------------------- |
| Default value | `xMidYMid` `meet`            |
| Animatable    | Yes                          |

## Specification

| Specification                                                                                      | Status                   | Comment            |
| -------------------------------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName("Filters 1.0", "#element-attrdef-feimage-preserveaspectratio", "preserveAspectRatio")}} | {{Spec2('Filters 1.0')}} |                    |
| {{SpecName("SVG2", "coords.html#PreserveAspectRatioAttribute", "preserveAspectRatio")}}            | {{Spec2("SVG2")}}        |                    |
| {{SpecName("SVG1.1", "coords.html#PreserveAspectRatioAttribute", "preserveAspectRatio")}}          | {{Spec2("SVG1.1")}}      | Initial definition |
