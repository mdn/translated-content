---
title: border-bottom-right-radius
slug: Web/CSS/border-bottom-right-radius
---

{{CSSRef}}

The **`border-bottom-right-radius`** CSS property sets the rounding of the bottom-right corner of the element.

```css
/* The corner is a circle */
/* border-bottom-right-radius: radius */
border-bottom-right-radius: 3px;

/* Percentage values */
border-bottom-right-radius: 20%; /* corner of a circle if box is a square or else corner of a rectangle */
border-bottom-right-radius: 20% 20%; /* same as above */ /* 20% of horizontal(width) and vertical(height) */
border-bottom-right-radius: 20% 10%; /* 20% of horizontal(width) and 10% of vertical(height) */

/*The corner is an ellipsis */
/* border-bottom-right-radius: horizontal vertical */
border-bottom-right-radius: 0.5em 1em;

border-bottom-right-radius: inherit;
```

The rounding can be a circle or an ellipse, or if one of the value is `0` no rounding is done and the corner is square.

![border-bottom-right-radius.png](/@api/deki/files/6134/=border-bottom-right-radius.png)

A background, being an image or a color, is clipped at the border, even a rounded one; the exact location of the clipping is defined by the value of the {{cssxref("background-clip")}} property.

> **备注：** If the value of this property is not set in a {{cssxref("border-radius")}} shorthand property that is applied to the element after the `border-bottom-right-radius` CSS property, the value of this property is then reset to its initial value by the [shorthand property](/zh-CN/docs/Web/CSS/Shorthand_properties).

{{cssinfo}}

## Syntax

With one value:

- the value is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} denoting the radius of the circle to use for the border in that corner.

With two values:

- the first value is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} denoting the horizontal semi-major axis of the ellipsis to use for the border in that corner.
- the second value is a {{cssxref("&lt;percentage&gt;")}} denoting the vertical semi-major axis of the ellipsis to use for the border in that corner.

### Values

- `<length-percentage>`
  - : Denotes the size of the circle radius or the semi-major and semi-minor axes of the ellipsis. As absolute length it can be expressed in any unit allowed by the CSS {{cssxref("&lt;length&gt;")}} data type. Percentages for the horizontal axis refer to the width of the box, percentages for the vertical axis refer to the height of the box. Negative values are invalid.

### Formal syntax

{{csssyntax}}

## Examples

<table class="standard-table">
  <thead>
    <tr>
      <th>Live example</th>
      <th>Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 1.5em">
        <div
          style="
            background-color: lightgreen;
            border: solid 1px black;
            border-bottom-right-radius: 40px 40px;
            width: 100px;
            height: 100px;
          "
        >
          <div class="hidden">.</div>
        </div>
      </td>
      <td>
        An arc of circle is used as the border
        <pre class="brush: css">
div {
  border-bottom-right-radius: 40px 40px;
}
</pre
        >
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em">
        <div
          style="
            background-color: lightgreen;
            border: solid 1px black;
            border-bottom-right-radius: 40px 20px;
            width: 100px;
            height: 100px;
          "
        >
          <div class="hidden">.</div>
        </div>
      </td>
      <td>
        An arc of ellipse is used as the border
        <pre class="brush: css">
div {
  border-bottom-right-radius: 40px 20px;
}
</pre
        >
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em">
        <div
          style="
            background-color: lightgreen;
            border: solid 1px black;
            border-bottom-right-radius: 40%;
            width: 100px;
            height: 100px;
          "
        >
          <div class="hidden">.</div>
        </div>
      </td>
      <td>
        The box is a square: an arc of circle is used as the border
        <pre class="brush: css">
div {
  border-bottom-right-radius: 40%;
}
</pre
        >
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em">
        <div
          style="
            background-color: lightgreen;
            border: solid 1px black;
            border-bottom-right-radius: 40%;
            width: 100px;
            height: 200px;
          "
        >
          <div class="hidden">.</div>
        </div>
      </td>
      <td>
        The box is not a square: an arc of ellipse is used as the border
        <pre class="brush: css">
div {
  border-bottom-right-radius: 40%;
}
</pre
        >
      </td>
    </tr>
    <tr>
      <td style="padding: 1.5em">
        <div
          style="
            border: black 3px double;
            border-bottom-right-radius: 40%;
            height: 100px;
            width: 100px;
            background-color: rgb(250, 20, 70);
            background-clip: content-box;
          "
        >
          <div class="hidden">.</div>
        </div>
      </td>
      <td>
        The background color is clipped at the border
        <pre class="brush: css">
div {
  border-bottom-right-radius:40%;
  border-style: black 3px double;
  background-color: rgb(250,20,70);
  background-clip: content-box;
}
</pre
        >
      </td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The border-radius-related CSS properties: the CSS shorthand {{cssxref("border-radius")}}, the properties for the other corners: {{cssxref("border-top-right-radius")}}, {{cssxref("border-top-left-radius")}}, and {{cssxref("border-bottom-left-radius")}}.
