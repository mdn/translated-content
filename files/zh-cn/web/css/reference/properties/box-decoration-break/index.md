---
title: box-decoration-break
slug: Web/CSS/Reference/Properties/box-decoration-break
---

**`box-decoration-break`** 属性用来定义当元素跨多行、多列或多页时，元素的片段应如何呈现。

{{InteractiveExample("CSS Demo: box-decoration-break")}}

```css interactive-example-choice
-webkit-box-decoration-break: slice;
box-decoration-break: slice;
```

```css interactive-example-choice
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
```

```html interactive-example
<section id="default-example">
  <div id="example-container">
    <span id="example-element">This text breaks across multiple lines.</span>
  </div>
</section>
```

```css interactive-example
#example-container {
  width: 14rem;
}

#example-element {
  background: linear-gradient(to bottom right, #6f6f6f, #000);
  color: white;
  box-shadow:
    8px 8px 10px 0 #ff1492,
    -5px -5px 5px 0 #00f,
    5px 5px 15px 0 #ff0;
  padding: 0 1em;
  border-radius: 16px;
  border-style: solid;
  margin-left: 10px;
  font: 24px sans-serif;
  line-height: 2;
}
```

指定的值将影响元素以下属性的表现：

- {{Cssxref("background")}}
- {{Cssxref("border")}}
- {{Cssxref("border-image")}}
- {{Cssxref("box-shadow")}}
- {{Cssxref("clip-path")}}
- {{Cssxref("margin")}}
- {{Cssxref("padding")}}

## 语法

```css
/* Keyword values */
box-decoration-break: slice;
box-decoration-break: clone;

/* Global values */
box-decoration-break: initial;
box-decoration-break: inherit;
box-decoration-break: unset;
```

`box-decoration-break` 的合法值包括下列几种：

### 值

- `slice`
  - : 元素被按照盒子被切割前的原始样式渲染，之后，针对每个行/列/页面将此假设框渲染成片段。请注意，假设框对于每个片段可以是不同的，因为如果中断发生在行内方向，则它使用自己的高度，如果中断发生在块方向，则它使用自己的宽度。有关详细信息，请参阅 CSS 规范。
- `clone`
  - : 每个框片段与指定的边框、填充和边距独立呈现。{{ Cssxref("border-radius") }}、{{ Cssxref("border-image") }}、{{ Cssxref("box-shadow") }}独立地应用于每个片段，每个片段的背景也是独立绘制的，这意味着使用 {{ Cssxref("background-repeat") }}`: no-repeat` 的背景图片仍然可能重复多次。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 行内盒子片段

包含换行符的内联元素：

```css
.example {
  background: linear-gradient(to bottom right, yellow, green);
  box-shadow:
    8px 8px 10px 0px deeppink,
    -5px -5px 5px 0px blue,
    5px 5px 15px 0px yellow;
  padding: 0em 1em;
  border-radius: 16px;
  border-style: solid;
  margin-left: 10px;
  font: 24px sans-serif;
  line-height: 2;
}

...
<span class="example">The<br>quick<br>orange fox</span>
```

... 效果：

![A screenshot of the rendering of an inline element styled with box-decoration-break:slice and styles given in the example.](box-decoration-break-inline-slice.png)

添加 `box-decoration-break: clone` 样式之后：

```css
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
```

... 效果：

![A screenshot of the rendering of an inline element styled with box-decoration-break:clone and styles given in the example](box-decoration-break-inline-clone.png)

你可以[尝试这两个例子](https://mdn.dev/archives/media/attachments/2014/07/12/8179/df096e9eb57177d8b7fdcd0c8f64ef18/box-decoration-break-inline.html)。

下面是一个使用大圆角值的内联元素示例。第二个“iM”在“i”和“M”之间有一个分界线，作为比较，第一个“iM”是没有换行符的。请注意，如果你将两个片段的呈现水平地排列在一起，就会导致非分段呈现。

![A screenshot of the rendering of the second inline element example.](box-decoration-break-slice-inline-2.png)

你可以[尝试这个例子](https://mdn.dev/archives/media/attachments/2014/07/12/8191/7a067e5731355081e856ea02b978ea2e/box-decoration-break-inline-extreme.html)。

### 块状盒子片段

与上述样式相似且没有碎片的块元素的表现：

![A screenshot of the rendering of the block element used in the examples without any fragmentation.](box-decoration-break-block.png)

将上述块分割成三列，表现为：

![A screenshot of the rendering of the fragmented block used in the examples styled with box-decoration-break:slice.](box-decoration-break-block-slice.png)

注意，垂直堆叠这些部分将导致非碎片渲染。

现在，同样的例子，但使用 `box-decoration-break` 的效果：

![A screenshot of the rendering of the fragmented block used in the examples styled with box-decoration-break:clone.](box-decoration-break-block-clone.png)

请注意，每个片段都具有相同的 border、box-shadow 和 background。

你可以[尝试这个例子](https://mdn.dev/archives/media/attachments/2014/07/12/8187/6288bde9d276d78e203c9f8b9a26ff65/box-decoration-break-block.html)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("break-after")}}、{{cssxref("break-before")}}、{{cssxref("break-inside")}}
