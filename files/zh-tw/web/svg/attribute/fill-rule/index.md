---
title: fill-rule
slug: Web/SVG/Attribute/fill-rule
---

« [SVG Attribute reference home](/zh-TW/docs/Web/SVG/Attribute)

The `fill-rule` attribute indicates the algorithm which is to be used to determine what side of a path is inside the shape. For a simple, non-intersecting path, it is intuitively clear what region lies "inside"; however, for a more complex path, such as a path that intersects itself or where one subpath encloses another, the interpretation of "inside" is not so obvious.

## Usage context

<table>
  <tbody>
    <tr>
      <th scope="row">Categories</th>
      <td>Presentation attribute</td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td><strong>nonzero</strong> | evenodd | inherit</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a href="https://www.w3.org/TR/SVG/painting.html#FillRuleProperty"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

The `fill-rule` property provides two options for how the inside of a shape is determined:

- nonzero
  - : This value determines the "insideness" of a point in the shape by drawing a ray from that point to infinity in any direction and then examining the places where a segment of the shape crosses the ray. Starting with a count of zero, add one each time a path segment crosses the ray from left to right and subtract one each time a path segment crosses the ray from right to left. After counting the crossings, if the result is zero then the point is outside the path. Otherwise, it is inside.
- evenodd
  - : This value determines the "insideness" of a point in the shape by drawing a ray from that point to infinity in any direction and counting the number of path segments from the given shape that the ray crosses. If this number is odd, the point is inside; if even, the point is outside.

## Examples

## Elements

The following elements can use the `fill-rule` attribute

- [Shape elements](/zh-TW/docs/Web/SVG/Element#Shape) »
- [Text content elements](/zh-TW/docs/Web/SVG/Element#TextContent) »

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
