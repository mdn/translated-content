---
title: <image>
slug: Web/CSS/image
---

{{CSSRef}}

## 综述：

CSS 的\<image>数据类型描述的是 2D 图形。在 CSS 中有两种类型的图像：简单的静态图像，经常被一个在使用的 URL 引用，动态生成的图像，比如 DOM 树的部分元素样式渐变或者计算样式产生。

CSS 可以处理以下情形中的不同类型图像：

- _具有固有尺寸_（大小）的图像，即图像具有自己的原始尺寸（大小），比如一个 jpeg 格式的图像有他自己的固有尺寸（大小）；
- 图像具有多个固定尺寸，可在一个文件中存在多个不同版本的*尺寸，*比如有些.ico 格式的图像。在这种情况下，图像表现出来的固有尺寸将是这些尺寸较大的一个，也就是最接近外层包含它的容器纵横比的那个图像；
- *没有固定大小*但有固定纵横比的图像，像一些矢量图形，比如 SVG 格式的图像；
- *没有固定大小也没有固定宽高比*的图像，比如 CSS 渐变（图像）；

CSS 确定一个图像对象实际尺寸的依据有三条：(1) 图像的原始尺寸；(2) 用 CSS 属性指定的宽和高，比如{{ cssxref("width") }}, {{ cssxref("height") }} or {{ cssxref("background-size") }}中，(3) 图像对象默认大小，由图像使用用途的属性类型决定：

| 图像对象类型                                                                                                         | 默认的图像对象尺寸                                     |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| {{ cssxref("background-image") }}                                                                                    | DOM 元素的背景定位的范围尺寸（大小）                   |
| {{ cssxref("list-style-image") }}                                                                                    | 字符的 `1em` 尺寸（大小）                              |
| {{ cssxref("border-image") }}                                                                                        | DOM 元素的边框图像范围尺寸（大小）                     |
| {{ cssxref("cursor") }}                                                                                              | 浏览器定义的光标尺寸匹配在使用操作系统上常规的光标尺寸 |
| 用 CSS {{ cssxref("content") }}属性，和 CSS 伪元素 {{ cssxref("::after") }} 和 {{ cssxref("::before") }}替换元素内容 | 一个 `300px × 150px` 矩形                              |

图像对象的实际尺寸计算算法如下：

- 如果宽度和高度都被指定了，则使用这些值会作为图像对象实际尺寸；
- 如果指定了宽度和高度中的一个，恰好这个值匹配上了图像固有宽高比中的一个值，则另一个会使用固有宽高比来确定，否则就使用图像的原始大小来确定没定义的那个值；
- 如果宽度和高度都没有被指定，在不超过图像对象默认尺寸的前提下，将会根据图像的固有宽高比来计算图像对象的实际尺寸；如果图像没有固有宽高比，则会采用图像对象固有宽高比；如果图像对象也没有固有宽高比，则使用图像对象的默认大小（翻译可能会有误，求大神快来翻译）；

图像可以使用很多 CSS 属性，比如 {{ cssxref("background-image") }}, {{ cssxref("border-image") }}, {{ cssxref("content") }}, {{ cssxref("list-style-image") }} 和{{ cssxref("cursor") }}；

> **备注：** 不是所有的浏览器都支持任何类型的图像的任何属性，详情查看[浏览器兼容性](#浏览器兼容性)了全面的条目列表

## 语法

一个 \<image> CSS 数据类型可能表示成如下几种类型：

- 一个图像被引用为 CSS {{cssxref("&lt;url&gt;")}}数据类型使用 url() 方法；
- 一个 CSS{{cssxref("&lt;gradient&gt;")}};
- 页面的一个部分，定义在{{ cssxref("element", "element()") }}方法中；

## 示例

以下是有效的图像引用值：

```css
url(test.jpg)                          url() 方法，只要 test.jpg 是图像文件
linear-gradient(to bottom, blue, red)  一个 <gradient>标签
element(#colonne3)                     页面的一部分，使用了 element() 方法，
                                       如果 colonne3 是存在于页面中的一个元素 id 即可
```

以下是无效的图像引用值：

```
cervin.jpg                             图像文件必须使用 url() 方法定义
url(report.pdf)                        url() 方法指向的文件链接必须是一个图像文件
element(#fakeid)                       如果 fakeid 是一个不存在与页面的元素 id
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅：

- [Using CSS gradients](/zh-CN/docs/Web/Guide/CSS/Using_CSS_gradients), {{cssxref("&lt;gradient&gt;")}}, {{cssxref("linear-gradient","linear-gradient()")}}, {{cssxref("radial-gradient","radial-gradient()")}}, {{cssxref("repeating-linear-gradient","repeating-linear-gradient()")}}, {{cssxref("repeating-radial-gradient","repeating-radial-gradient()")}}
- {{cssxref("element","element()")}}
