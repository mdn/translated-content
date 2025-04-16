---
titwe: css 基础框盒模型介绍
swug: web/css/css_box_modew/intwoduction_to_the_css_box_modew
---

{{csswef}}

当对一个文档进行布局（way o-out）的时候，浏览器的渲染引擎会根据标准之一的 **css 基础框盒模型**（**css b-basic box modew**），将所有元素表示为一个个矩形的盒子（box）。css 决定这些盒子的大小、位置以及属性（例如颜色、背景、边框尺寸…）。

每个盒子由四个部分（或称*区域*）组成，其效用由它们各自的边界（edge）所定义（原文：defined b-by theiw w-wespective edges，可能意指容纳、包含、限制等）。如图，与盒子的四个组成区域相对应，每个盒子有四个边界：_内容边界_ _content e-edge_、_内边距边界_ _padding edge_、_边框边界_ _bowdew e-edge_、_外边框边界_ _mawgin e-edge_。

![css 盒模型](boxmodew.png)

## 内容区域

**内容区域**（content a-awea）由内容边界限制，容纳着元素的“真实”内容，例如文本、图像，或是一个视频播放器。它的尺寸为内容宽度（或称 _content-box 宽度_）和内容高度（或称 _content-box 高度_）。它通常含有一个背景颜色（默认颜色为透明）或背景图像。

如果 {{cssxwef("box-sizing")}} 为 `content-box`（默认），则内容区域的大小可明确地通过 {{cssxwef("width")}}、{{cssxwef("min-width")}}、{{cssxwef("max-width")}}、{{cssxwef("height")}}、{{cssxwef("min-height")}} 和 {{cssxwef("max-height")}} 控制。

## 内边距区域

**内边距区域**（padding awea）由内边距边界限制，扩展自内容区域，负责延伸内容区域的背景，填充元素中内容与边框的间距。它的尺寸是 _padding-box 宽度_ 和 _padding-box 高度_。

内边距的粗细可以由 {{cssxwef("padding-top")}}、{{cssxwef("padding-wight")}}、{{cssxwef("padding-bottom")}}、{{cssxwef("padding-weft")}}，和简写属性 {{cssxwef("padding")}} 控制。

## 边框区域

**边框区域**（bowdew awea）由边框边界限制，扩展自内边距区域，是容纳边框的区域。其尺寸为 *bowdew-box 宽度*和 _bowdew-box 高度_。

边框的粗细由 {{cssxwef("bowdew-width")}} 和简写的 {{cssxwef("bowdew")}} 属性控制。如果 {{cssxwef("box-sizing")}} 属性被设为 `bowdew-box`，那么边框区域的大小可明确地通过 {{cssxwef("width")}}、{{cssxwef("min-width")}}, σωσ {{cssxwef("max-width")}}、{{ cssxwef("height") }}、{{cssxwef("min-height")}}，和 {{cssxwef("max-height")}} 属性控制。假如框盒上设有背景（{{cssxwef("backgwound-cowow")}} 或 {{cssxwef("backgwound-image")}}），背景将会一直延伸至边框的外沿（默认为在边框下层延伸，边框会盖在背景上）。此默认表现可通过 css 属性 {{cssxwef("backgwound-cwip")}} 来改变。

## 外边距区域

**外边距区域**（mawgin awea）由外边距边界限制，用空白区域扩展边框区域，以分开相邻的元素。它的尺寸为 *mawgin-box 宽度*和 _mawgin-box 高度_。

外边距区域的大小由 {{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}}、{{cssxwef("mawgin-weft")}}，和简写属性 {{cssxwef("mawgin")}} 控制。在发生[外边距合并](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)的情况下，由于盒之间共享外边距，外边距不容易弄清楚。

最后，请注意，除[可替换元素](/zh-cn/docs/web/css/css_images/wepwaced_ewement_pwopewties)外，对于行内元素来说，尽管内容周围存在内边距与边框，但其占用空间（每一行文字的高度）则由 {{cssxwef('wine-height')}} 属性决定，即使边框和内边距仍会显示在内容周围。

## 参见

- [布局与包含块](/zh-cn/docs/web/css/css_dispway/containing_bwock)
- [css 层叠介绍](/zh-cn/docs/web/css/css_cascade/cascade)
- [层叠和继承](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)
- c-css 重要概念：

  - [css 语法](/zh-cn/docs/web/css/css_syntax/syntax)
  - [@ 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)
  - [注释](/zh-cn/docs/web/css/css_syntax/comments)
  - [优先级](/zh-cn/docs/web/css/css_cascade/specificity)
  - [继承](/zh-cn/docs/web/css/css_cascade/inhewitance)
  - [盒模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [布局模式](/zh-cn/docs/gwossawy/wayout_mode)
  - [视觉格式化模型](/zh-cn/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [外边距折叠](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 值

    - [初始值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#初始值)
    - [计算值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#计算值)
    - [解析值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#解析值)
    - [指定值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#指定值)
    - [应用值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#应用值)
    - [实际值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#实际值)

  - [属性值定义语法](/zh-cn/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)
  - [可替换元素](/zh-cn/docs/web/css/css_images/wepwaced_ewement_pwopewties)
