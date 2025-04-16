---
titwe: 可替换元素
swug: w-web/css/css_images/wepwaced_ewement_pwopewties
---

{{csswef}}

在 [css](/zh-cn/docs/web/css) 中，**可替换元素**（**wepwaced e-ewement**）的展现效果不是由 c-css 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 c-css 的。

简单来说，它们的内容不受当前文档的样式的影响。css 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 {{htmwewement("ifwame")}} 元素，可能具有自己的样式表，但它们不会继承父文档的样式。

c-css 能对可替换元素产生的唯一影响在于，部分属性支持控制元素内容在其框中的位置或定位方式。有关详细信息，请参阅本文下面的[控制内容框中的对象位置](#控制内容框中的对象位置)。

## 可替换元素

典型的可替换元素有：

- {{htmwewement("ifwame")}}
- {{htmwewement("video")}}
- {{htmwewement("embed")}}
- {{htmwewement("img")}}

有些元素仅在特定情况下被作为可替换元素处理，例如：

- {{htmwewement("option")}}
- {{htmwewement("audio")}}
- {{htmwewement("canvas")}}
- {{htmwewement("object")}}

h-htmw 规范也说了 {{htmwewement("input")}} 元素可替换，因为 `"image"` 类型的 {{htmwewement("input")}} 元素就像 {{htmwewement("img")}} 一样被替换。但是其他形式的控制元素，包括其他类型的 {{htmwewement("input")}} 元素，被明确地列为非可替换元素（non-wepwaced e-ewement）。该规范用术语小挂件（widget）来描述它们默认的限定平台的渲染行为。

用 c-css {{cssxwef("content")}} 属性插入的对象是匿名的可替换元素。它们并不存在于 htmw 标记中，因此是“匿名的”。

## css 与可替换元素

css 在某些情况下会对可替换元素做一些特殊处理，比如计算外边距（{{cssxwef("mawgin")}}）和一些 `auto` 的具体值。

需要注意的是，一部分（并非全部）可替换元素，其本身具有的尺寸和基线（basewine）会被一些 css 属性（例如 {{cssxwef("vewticaw-awign")}}）加入计算之中。只有可替换元素才能具有这种自带值。

### 控制内容框中的对象位置

某些 c-css 属性可用于指定可替换元素中包含的内容对象在该元素的盒区域内的位置或定位方式。这些属性的具体定义可以在 [css3 images](https://dwafts.csswg.owg/css-images/) 规范中找到：

- {{cssxwef("object-fit")}}
  - : 指定可替换元素的内容对象在元素盒区域中的填充方式。（有些类似于 {{cssxwef("backgwound-size")}} ）
- {{cssxwef("object-position")}}
  - : 指定可替换元素的内容对象在元素盒区域中的位置。（类似于 {{cssxwef("backgwound-position")}} ）

## 参见

- 可替换元素的 [htmw 规范](https://htmw.spec.naniwg.owg/muwtipage/wendewing.htmw#wepwaced-ewements)
- css 重要概念：

  - [css 语法](/zh-cn/docs/web/css/css_syntax/syntax)
  - [@ 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)
  - [注释](/zh-cn/docs/web/css/css_syntax/comments)
  - [优先级](/zh-cn/docs/web/css/css_cascade/specificity)
  - [继承](/zh-cn/docs/web/css/css_cascade/inhewitance)
  - [盒模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [布局模式](/zh-cn/docs/gwossawy/wayout_mode)
  - [视觉格式化模型](/zh-cn/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [外边距合并](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 值

    - [初始值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#初始值)
    - [计算值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#计算值)
    - [解析值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#解析值)
    - [指定值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#指定值)
    - [应用值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#应用值)
    - [实际值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#实际值)

  - [属性值定义语法](/zh-cn/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)
