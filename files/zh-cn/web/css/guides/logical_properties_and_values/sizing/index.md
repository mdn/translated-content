---
title: 逻辑尺寸属性
slug: Web/CSS/Guides/Logical_properties_and_values/Sizing
---

实体尺度属性和逻辑属性用于在页面上设置元素尺寸，而我们将在本指南中解释两者之间相对于流的对应关系。

在指定元素的尺寸时，标示实体尺寸参照的是水平和竖直方向（如左和右）的实体尺度，而[逻辑属性与逻辑值](https://drafts.csswg.org/css-logical/)规范使你可以参照文本流向（行向与块向）标示尺寸。虽然对于我们中的大多数而言，这些相对于流的对应关系很可能都是默认的，但是在设计中你很可能会同时用到实体尺寸和逻辑尺寸。你可能想要某些特性在任何书写模式里参照的都是实体尺度。

## 尺度的对应关系

下表提供了逻辑属性与实体属性的对应关系。这些对应关系假定你在 `horizontal-tb` 的书写模式里——例如英文或者阿拉伯文，此时 {{CSSXref("width")}} 会对应到 {{CSSXref("inline-size")}}。

假如你在竖排书写模式里，那么 {{CSSXref("inline-size")}} 会对应到 {{CSSXref("height")}}。

| 逻辑属性                       | 实体属性                  |
| ------------------------------ | ------------------------- |
| {{CSSXref("inline-size")}}     | {{CSSXref("width")}}      |
| {{CSSXref("block-size")}}      | {{CSSXref("height")}}     |
| {{CSSXref("min-inline-size")}} | {{CSSXref("min-width")}}  |
| {{CSSXref("min-block-size")}}  | {{CSSXref("min-height")}} |
| {{CSSXref("max-inline-size")}} | {{CSSXref("max-width")}}  |
| {{CSSXref("max-block-size")}}  | {{CSSXref("max-height")}} |

## 宽度和高度的示例

{{CSSXref("width")}} 和 {{CSSXref("height")}} 对应的逻辑属性为 {{CSSXref("inline-size")}}（设置行向长度）和 {{CSSXref("block-size")}}（设置块向长度）。在英文文本中，将 `width` 换为 `inline-size`，`height` 换为 `block-size`，所得布局相同。

在下面的运行实例里，我把书写模式设置成了 `horizontal-tb`。把它改成 `vertical-rl`，你会看到第一个例子——用的 `width` 和 `height`——尽管文本变成竖排，但是在每个方向上的尺寸保持不变。第二个例子——用的 `inline-size` 和 `block-size`——会跟着文本的方向变化，就像旋转了整个块。

```html live-sample___size-inline-block
<div class="container">
  <div class="physical box">I have a width of 200px and a height of 100px.</div>

  <div class="logical box">
    I have an inline-size of 200px and a block-size of 100px.
  </div>
</div>
```

```css hidden live-sample___size-inline-block
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-inline-block
.box {
  writing-mode: horizontal-tb;
}

.physical {
  width: 200px;
  height: 100px;
}

.logical {
  inline-size: 200px;
  block-size: 100px;
}
```

{{EmbedLiveSample("size-inline-block")}}

## 最小宽度和最小高度的示例

{{CSSXref("min-width")}} 和 {{CSSXref("min-height")}} 也有对应的属性——即 {{CSSXref("min-inline-size")}} 和 {{CSSXref("min-block-size")}}。这些属性的用法与 `inline-size` 和 `block-size` 属性相同，但是设置的是最小尺寸而不是固定尺寸。

试试把下面的例子像第一个例子一样改成 `vertical-rl` 看看效果。我在第一个例子里用了 `min-height`，在第二个里用了 `min-block-size`。

```html live-sample___size-min
<div class="container">
  <div class="physical box">
    I have a width of 200px and a min-height of 5em.
  </div>

  <div class="logical box">
    I have an inline-size of 200px and a min-block-size of 5em.
  </div>
</div>
```

```css hidden live-sample___size-min
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-min
.box {
  writing-mode: horizontal-tb;
}

.physical {
  width: 200px;
  min-height: 5em;
}

.logical {
  inline-size: 200px;
  min-block-size: 5em;
}
```

{{EmbedLiveSample("size-min")}}

## 最大宽度和最大高度的示例

最后你可以用逻辑属性 {{CSSXref("max-inline-size")}} 和 {{CSSXref("max-block-size")}} 替代 {{CSSXref("max-width")}} 和 {{CSSXref("max-height")}}。用和之前一样的方式玩玩下面的例子。

```html live-sample___size-max
<div class="container">
  <div class="physical box">I have a max-width of 200px.</div>

  <div class="logical box">I have an max-inline-size of 200px.</div>
</div>
```

```css hidden live-sample___size-max
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-max
.box {
  writing-mode: horizontal-tb;
}

.physical {
  max-width: 200px;
}

.logical {
  max-inline-size: 200px;
}
```

{{EmbedLiveSample("size-max")}}

## 用于 resize 的逻辑关键词

{{CSSXref("resize")}} 属性用于设置元素是否可调整尺寸，有实体值 `horizontal` 和 `vertical`。`resize` 也有逻辑关键词值。使用 `resize: inline` 允许沿行向调整尺寸，而 `resize: block` 允许沿块向调整尺寸。

无论你按实体还是按逻辑理解，`resize` 属性的关键词值 `both` 的效果都一样。这个值同时设置两个方向的尺度。玩玩下面的例子。

```html live-sample___size-resize
<div class="container">
  <div class="physical box">
    I have a width of 200px and a height of 100px. I can be resized
    horizontally.
  </div>

  <div class="logical box">
    I have an inline-size of 200px and a block-size of 100px. I can be resized
    in the inline direction.
  </div>
</div>
```

```css hidden live-sample___size-resize
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
  display: flex;
}
.box {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  margin: 10px;
}
```

```css live-sample___size-resize
.box {
  writing-mode: horizontal-tb;
  overflow: scroll;
}

.physical {
  width: 200px;
  height: 100px;
  resize: horizontal;
}

.logical {
  inline-size: 200px;
  block-size: 100px;
  resize: inline;
}
```

{{EmbedLiveSample("size-resize")}}
