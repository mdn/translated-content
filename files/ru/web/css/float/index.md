---
title: float
slug: Web/CSS/float
---

Свойство float CSS указывает, что элемент должен быть взят из нормального потока и помещён вдоль левой или правой стороны его контейнера, где текст и встроенные элементы будут обтекать его.{{CSSRef}}

## Summary

CSS-свойство `float` указывает, что текущий элемент должен быть изъят из обычного flow (потока) и прижат к левой или правой стороне родительского элемента. Текст и inline элементы будут обтекать такой элемент.

**Плавающий элемент** - это любой элемент со свойством `float` отличным от `none`.

{{cssinfo}}

Поскольку `float` подразумевает использование блочной модели, это свойство изменяет вычисляемые значения {{cssxref("display")}} в следующих случаях:

| Specified value      | Computed value                                                |
| -------------------- | ------------------------------------------------------------- |
| `inline`             | `block`                                                       |
| `inline-block`       | `block`                                                       |
| `inline-table`       | `table`                                                       |
| `table-row`          | `block`                                                       |
| `table-row-group`    | `block`                                                       |
| `table-column`       | `block`                                                       |
| `table-column-group` | `block`                                                       |
| `table-cell`         | `block`                                                       |
| `table-caption`      | `block`                                                       |
| `table-header-group` | `block`                                                       |
| `table-footer-group` | `block`                                                       |
| `flex`               | `flex`, `float` не оказывает влияния на такие элементы        |
| `inline-flex`        | `inline-flex`, `float` не оказывает влияния на такие элементы |
| _other_              | _не меняются_                                                 |

> **Примечание:**If you're referring to this property from JavaScript as a member of the {{domxref("element.style")}} object, you must spell it as `cssFloat`. Also note that Internet Explorer versions 8 and older spelled this `styleFloat`. This is an exception to the rule that the name of the DOM member is the camel-case name of the dash-separated CSS name (and is due to the fact that "float" is a reserved word in JavaScript, as with the need to escape "class" as "className" and escape \<label>'s "for" as "htmlFor").

## Syntax

```css
float: left;
float: right;
float: none;

float: inherit;
```

### Values

- `left`
  - : Is a keyword indicating that the element must float on the left side of its containing block.
- `right`
  - : Is a keyword indicating that the element must float on the right side of its containing block.
- `none`
  - : Is a keyword indicating that the element must not float.

### Formal syntax

{{csssyntax("float")}}

## Examples

[Посмотреть живые примеры](/samples/cssref/float.html)

```html
<style type="text/css">
  div {
    border: solid red;
    max-width: 70ex;
  }
  h4 {
    float: left;
    margin: 0;
  }
</style>

<div>
  <h4>HELLO!</h4>
  This is some text. This is some text. This is some text. This is some text.
  This is some text. This is some text. This is some text. This is some text.
  This is some text. This is some text. This is some text. This is some text.
</div>
```

#### HELLO!

This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text. This is some text.

### How floats are positioned

As mentioned above, when an element is floated it is taken out of the normal flow of the document. It is shifted to the left or right until it touches the edge of it's containing box _or another floated element_.

In the image below, there are three red squares. Two are floated left and one is floated right. Note that the second "left" red square is placed to the right of the first. Additional squares would continue to stack to the right until they filled the containing box, after which they would wrap to the next line.

![](/@api/deki/files/4927/=floats.png)

### Clearing floats

In the example above, the floated elements are shorter vertically than the block of text they're floated within. However, if the text was not long enough to wrap below the bottom of all the floats, we might see unanticipated effects. If the paragraph above, for instance, only read "Lorem ipsum dolor sit amet," and was followed by another heading of the same style as the "Floats Example" heading, the second heading would appear between the red boxes. Most likely, we want the next heading to be aligned all the way to the left. To accomplish that, we'd need to clear the floats.

The simplest way to clear the floats in this example is to add the {{Cssxref("clear")}} property to the new heading we want to be sure is aligned left:

```css
h2.secondHeading {
  clear: both;
}
```

However, this method only works if there are no other elements within the same [block formatting context](/ru/docs/Web/CSS/block_formatting_context) that we _do_ want the heading to continue to appear next to horizontally. If our `H2` has siblings which are a sidebars floated to the left and right, using `clear` will force it to appear below both sidebars, which is probably not what we want.

If clearing floats on an element below them is not an option, another approach is to limit the block formatting context of the floats' container. Referring to the example above again, it appears that all three red boxes are within a `P` element. We can set the {{Cssxref("overflow")}} property on that P to `hidden` or `auto` to cause it to expand to contain them, but not allow them to drop out the bottom of it:

```css
p.withRedBoxes {
  overflow: hidden;
  height: auto;
}
```

> **Примечание:** Setting `overflow` to `scroll` will also contain any floated child elements, but will show scrollbars no matter the height of the content. Here we're setting `height` to `auto` even though that's the default to indicate that the container should grow to accommodate its content.

## Specifications

| Specification                                                  | Status                | Comment                                                                                                                                                 |
| -------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Box', '#float', 'float')}}                    | {{Spec2('CSS3 Box')}} | Lots of new values, not all clearly defined yet. Any differences in behavior unrelated to new features are expected to be unintentional; please report. |
| {{SpecName('CSS2.1', 'visuren.html#float-position', 'float')}} | {{Spec2('CSS2.1')}}   | No change.                                                                                                                                              |
| {{SpecName('CSS1', '#float', 'float')}}                        | {{Spec2('CSS1')}}     | Initial definition.                                                                                                                                     |

## Browser compatibility

{{Compat}}

## See also

- [Block formatting context](/ru/docs/Web/CSS/block_formatting_context)
