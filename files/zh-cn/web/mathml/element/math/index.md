---
title: <math>
slug: Web/MathML/Element/math
---

{{MathMLRef}}

MathML 的顶级元素是`<math>`。所有有效的 MathML 实例必须被包括在 `<math>` 标记中。另外不可以在一个 `<math>` 元素中嵌套第二个 `<math>` 元素，但是 `<math>` 元素中可以有任意多的子元素。

## 属性

除了以下提到的属性， `<math>` 元素接受所有 {{ MathMLElement("mstyle") }} 元素的属性。

- class, id, style
  - : 用于配合[样式表](/zh-CN/docs/CSS)使用。
- dir
  - : 公式的整体方向。取值可以是 `ltr` (从左到右) 或者 `rtl` (从右到左).
- href
  - : 用于给公式设置一个超链接的 URI。
- mathbackground
  - : 背景颜色`。你可以使用#rgb`格式、 `#rrggbb` 格式和 [HTML 颜色名](/zh-CN/docs/CSS/color_value#Color_Keywords)。
- mathcolor
  - : 公式的文本颜色。`你可以使用#rgb`格式、 `#rrggbb` 格式和 [HTML 颜色名](/zh-CN/docs/CSS/color_value#Color_Keywords)。
- display

  - : 这个枚举属性指定本标记所括的 MathML 代码应该如何被显示。该属性有如下取值：

    - `block`, 使用该值会使该 MathML 元素显示于文本之外，成为一个独立的块元素，不受其所在的文本的影响。
    - `inline`, 使用该值使这段 MathML 显示为行内元素，放置于当前文本的区域中。除非改变文本的显示，否则无法移动这个 MathML 的显示位置。

    如果没有指定该属性值，默认值采用 `inline`。

- mod {{deprecated_inline}}
  - : 因为[display 属性](/zh-CN/docs/MathML/Element/math#attr-display)的出现而废弃。
    可用取值为：`display` (效果和`display="block"`一样) 和 and `inline`.
- overflow
  - : 指定当该数学公式超过了其运行的范围时应该如何表现。
    可能的取值为： `linebreak` (默认值), `scroll`, `elide`, `truncate`, `scale`.

## 范例

![Theorem of Pythagoras](/files/3157/math.jpg)

### HTML5 记号

```html
<!DOCTYPE html>
<html>
  <head>
    <title>MathML in HTML5</title>
  </head>
  <body>

  <math>
    <mrow>
      <mrow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mrow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>

  </body>
</html>
```

### XHTML 记号

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <title>MathML in XHTML</title>
</head>
<body>

  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
      <mrow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mrow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>

</body>
</html>
```

**注意：** XHTML 文档如果带有 MathML，必须将文档的 MIME 类型设置为`application/xhtml+xml`进行发送。一般来说可以通过将扩展名改为`.xhtml` 来实现对本地文件的修改。对于 Apache 服务器，你可以[配置`.htaccess`文件](http://httpd.apache.org/docs/2.2/mod/mod_mime.html#addtype) 来达到映射扩展名为正确的 MIME 类型的目的。因为 MathML 被放在一个 XML 文件中，你必须编写一个严格符合 XML 格式的文档。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## Gecko-specific 注释

Gecko 7.0 {{ geckoRelease("7.0") }} 添加了对所有 MathML 属性在顶级 math 元素上的支持。 (也就是说和添加一个{{ MathMLElement("mstyle") }}元素效果一样)。然而，`displaystyle` 属性直到 Gecko 8.0 {{ geckoRelease("8.0") }} 才 [被添加进实现](https://bugzilla.mozilla.org/show_bug.cgi?id=669719)。

纯文本的 fall-back (`alttext`) 或者指定替代图像的属性`altimg`, `altimg-width`, `altimg-height` 或 `altimg-valign` 目前都还没有在 Gecko 中实现。

## 另见

- HTML top-level element: {{ HTMLElement("html") }}
- SVG top-level element: {{ SVGElement("svg") }}
- MathML browser test: For [XHTML](https://www.eyeasme.com/Joe/MathML/MathML_browser_test) and [HTML5](https://eyeasme.com/Joe/MathML/HTML5_MathML_browser_test)
