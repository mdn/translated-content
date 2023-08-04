---
title: float
slug: Web/CSS/float
---

{{CSSRef}}

`float` CSS 属性指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动（文档流）中移除，但是仍然保持部分的流动性（与[绝对定位](/zh-CN/docs/Web/CSS/position#absolute_positioning)相反）。

{{EmbedInteractiveExample("pages/css/float.html")}}

**浮动元素**是 `float` 的计算值非 `none` 的元素。

由于 `float` 意味着使用块布局，它在某些情况下会修改 {{cssxref("display")}} 值的计算值：

| 指定值               | 计算值      |
| -------------------- | ----------- |
| `inline`             | `block`     |
| `inline-block`       | `block`     |
| `inline-table`       | `table`     |
| `table-row`          | `block`     |
| `table-row-group`    | `block`     |
| `table-column`       | `block`     |
| `table-column-group` | `block`     |
| `table-cell`         | `block`     |
| `table-caption`      | `block`     |
| `table-header-group` | `block`     |
| `table-footer-group` | `block`     |
| `inline-flex`        | `flex`      |
| `inline-grid`        | `grid`      |
| _other_              | _unchanged_ |

> **备注：** 如果要在 JavaScript 中把 `float` 属性当作 {{domxref("HTMLElement.style")}} 对象的一个成员来操作，那么在旧版本的浏览器中，你必须拼写成 `cssFloat`。另外还要注意到在 Internet Explorer 8 和更老的 IE 当中，要使用 `styleFloat` 属性。这是 DOM 驼峰命名和 CSS 所用的连字符分隔命名法对应关系中的一个特例（这是因为在 JavaScript 中“float”是一个保留字，因为同样的原因，“class”被改成了“className” 、`<label>` 的“for”被改成了“htmlFor”）。

## 语法

```css
/* Keyword values */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;

/* Global values */
float: inherit;
float: initial;
float: revert;
float: unset;
```

`float` 属性的值被指定为单一的关键字，值从下面的值列表中选择。

### 值

- `left`
  - : 表明元素必须浮动在其所在的块容器左侧的关键字。
- `right`
  - : 表明元素必须浮动在其所在的块容器右侧的关键字。
- `none`
  - : 表明元素不进行浮动的关键字。
- `inline-start`
  - : 关键字，表明元素必须浮动在其所在块容器的开始一侧，在 `ltr` 脚本中是左侧，在 `rtl` 脚本中是右侧。
- `inline-end`
  - : 关键字，表明元素必须浮动在其所在块容器的结束一侧，在 `ltr` 脚本中是右侧，在 `rtl` 脚本中是左侧。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 浮动元素是如何定位的

正如我们前面提到的那样，当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到**另外一个浮动的元素**。

在下面的图片中，有三个红色的正方形。其中有两个向左浮动，一个向右浮动。要注意到第二个向左浮动的正方形被放在第一个向左浮动的正方形的右边。如果还有更多的正方形这样浮动，它们会继续向右堆放，直到填满容器一整行，之后换行至下一行。

浮动元素至少要与其最高的嵌套浮动子元素一样高。我们给父元素设置了 `width: 100%`，并将其设为浮动元素，以确保其高度足够包含其中的浮动子元素，并确保其宽度足以容纳这些元素，我们不必与其相邻的元素。

#### HTML

```html
<section>
  <div class="left">1</div>
  <div class="left">2</div>
  <div class="right">3</div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
    sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id
    iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa
    aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus
    congue.
  </p>
</section>
```

#### CSS

```css
section {
  box-sizing: border-box;
  border: 1px solid blue;
  width: 100%;
  float: left;
}

div {
  margin: 5px;
  width: 50px;
  height: 150px;
}

.left {
  float: left;
  background: pink;
}

.right {
  float: right;
  background: cyan;
}
```

#### 结果

{{EmbedLiveSample('浮动元素是如何定位的','400','180')}}

### 清除浮动

有时，你可能想要强制元素移至任何浮动元素下方。比如说，你可能希望某个段落与浮动元素保持相邻的位置，但又希望这个段落从头开始强制独占一行。请参考 {{cssxref("clear")}} 中的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [块级格式化上下文（Block formatting context）](/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
- 使用 {{cssxref("clear")}} 强制元素移至浮动元素下方。
