---
title: <image>
slug: Web/CSS/image
---

{{CSSRef}}

CSS 的 **`<image>`** 数据类型描述的是 2D 图形。在 CSS 中有两种类型的图像：简单的静态图像，经常被一个在使用的 URL 引用，动态生成的图像，比如 DOM 树的部分元素样式渐变或者计算样式产生。

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

> [!NOTE]
> 不是所有的浏览器都支持任何类型的图像的任何属性，详情查看[浏览器兼容性](#浏览器兼容性)了全面的条目列表

## 语法

一个 \<image> CSS 数据类型可能表示成如下几种类型：

- 一个图像被引用为 CSS {{cssxref("&lt;url&gt;")}}数据类型使用 url() 方法；
- 一个 CSS{{cssxref("&lt;gradient&gt;")}};
- 页面的一个部分，定义在{{ cssxref("element", "element()") }}方法中；

## 示例

以下是有效的图像引用值：

```css example-good
url(test.jpg)               /* <url> 值，只要 test.jpg 是实际的图像 */
linear-gradient(blue, red)  /* <gradient> 值 */
element(#realid)            /* 网页中的一部分，如果“realid”是页面上现有的元素，
                               则会被 element() 函数所引用 */
image(ltr 'arrow.png#xywh=0,0,16,16', red)
                            /* <url> 中的一个 16x16 的部分，从原始图像的左上角开始（只要
                               arrow.png 是受支持的图像，否则为纯红色的方块）。如果语言为从
                               右到左的（rtl），则图像将水平翻转。 */
cross-fade(20% url(twenty.png), url(eighty.png))
                            /* 半透明叠加的图像，其中 twenty 的不透明度为 20%，
                               而 eighty 的不透明度为 80%。 */
image-set('test.jpg' 1x, 'test-2x.jpg' 2x)
                            /* 一系列具有不同分辨率的图像 */
```

以下是无效的图像引用值：

```css example-bad
nourl.jpg            /* 图像文件必须使用 url() 函数定义。 */
url(report.pdf)      /* url() 函数指向的文件链接必须是一个图像。 */
element(#fakeid)     /* 元素 ID 必须是当前页面中存在的 ID。 */
image(z.jpg#xy=0,0)  /* 块片段的格式必须为 xywh=#,#,#,# */
image-set('cat.jpg' 1x, 'dog.jpg' 1x) /* 图像集中的每个图像必须具有不同的分辨率 */
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("element","element()")}} {{Experimental_Inline}}
- {{CSSxRef("image/image", "image()")}}
- {{CSSxRef("image/image-set","image-set()")}}
- {{CSSxRef("cross-fade","cross-fade()")}}
