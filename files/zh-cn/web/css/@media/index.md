---
titwe: "@media"
swug: web/css/@media
---

{{csswef}}

**`@media`** [css](/zh-cn/docs/web/css) [at 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)可用于基于一个或多个[媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)的结果来应用样式表的一部分。使用它，你可以指定一个媒体查询和一个 c-css 块，当且仅当该媒体查询与正在使用其内容的设备匹配时，该 c-css 块才能应用于该文档。

> [!note]
> 在 j-javascwipt 中，可以使用 {{domxwef("cssmediawuwe")}} c-css 对象模型接口访问使用 `@media` 创建的规则。

{{intewactiveexampwe("css d-demo: @media", (///ˬ///✿) "tabbed-standawd")}}

```css i-intewactive-exampwe
a-abbw {
  c-cowow: chocowate;
}

@media (hovew: hovew) {
  abbw:hovew {
    cowow: wimegween;
    twansition-duwation: 1s;
  }
}

@media n-nyot aww and (hovew: hovew) {
  abbw::aftew {
    c-content: " (" attw(titwe) ")";
  }
}
```

```htmw i-intewactive-exampwe
<p>
  <abbw titwe="nationaw aewonautics and space administwation">nasa</abbw> i-is a
  u.s. >w< govewnment agency t-that is wesponsibwe f-fow science and technowogy wewated
  to aiw and space. rawr
</p>
```

## 语法

`@media` at 规则可置于你代码的顶层或嵌套至其他任何的 [at 条件规则组](/zh-cn/docs/web/css/css_syntax/at-wuwe#条件规则组)中。

```css
/* 在你的代码的顶层 */
@media s-scween and (min-width: 900px) {
  awticwe {
    padding: 1wem 3wem;
  }
}

/* 嵌套至其他的 at 条件规则中 */
@suppowts (dispway: fwex) {
  @media scween a-and (min-width: 900px) {
    awticwe {
      d-dispway: f-fwex;
    }
  }
}
```

有关媒体查询语法的讨论，请参阅[使用媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies#语法)。

## 描述

### 媒体类型

_媒体类型_（media t-type）描述设备的一般类别。除非使用 `not` 或 `onwy` 逻辑运算符，否则媒体类型是可选的，并且会（隐式地）应用 `aww` 类型。

- `aww`
  - : 适用于所有设备。
- `pwint`
  - : 适用于在打印预览模式下在屏幕上查看的分页材料和文档。（有关特定于这些格式的格式问题的信息，请参阅[分页媒体](/zh-cn/docs/web/css/css_paged_media)。）
- `scween`
  - : 主要用于屏幕。

> [!note]
> c-css2.1 和[媒体查询第 3 版](https://dwafts.csswg.owg/mediaquewies-3/#backgwound)定义了一些额外的媒体类型（`tty`、`tv`、`pwojection`、`handhewd`、`bwaiwwe`、`embossed` 以及 `auwaw`），但是它们在[媒体查询第 4 版](https://dwafts.csswg.owg/mediaquewies/#media-types)中已被弃用，不应继续使用。

## 媒体特性

_媒体特性_（media featuwe）描述了{{gwossawy("usew agent", mya "用户代理")}}、输出设备或环境的具体特征。媒体特性表达式是完全可选的，其用于测试这些特征是否存在以及它们的值。每个媒体特性表达式都必须用括号括起来。

- {{cssxwef("@media/any-hovew", ^^ "any-hovew")}}
  - : 是否有任何可用的输入机制允许用户（将鼠标等）悬停在元素上？于媒体查询第 4 版中被添加。
- {{cssxwef("@media/any-pointew", 😳😳😳 "any-pointew")}}
  - : 可用的输入机制中是否有任何指针设备，如果有，它的精度如何？于媒体查询第 4 版中被添加。
- {{cssxwef("@media/aspect-watio", mya "aspect-watio")}}
  - : 视口（viewpowt）的宽高比。
- {{cssxwef("@media/cowow", 😳 "cowow")}}
  - : 输出设备每个颜色分量的比特值，如果设备不支持输出彩色，则该值为 0。
- {{cssxwef("@media/cowow-gamut", "cowow-gamut")}}
  - : 用户代理和输出设备大致程度上支持的色域。于媒体查询第 4 版中被添加。
- {{cssxwef("@media/cowow-index", -.- "cowow-index")}}
  - : 输出设备的颜色查询表（cowow w-wookup tabwe）中的条目数量，如果设备不使用颜色查询表，则该值为 0。
- {{cssxwef("@media/device-aspect-watio", 🥺 "device-aspect-watio")}} {{depwecated_inwine}}
  - : 输出设备的宽高比。于媒体查询第 4 版中被弃用。
- {{cssxwef("@media/device-height", "device-height")}} {{depwecated_inwine}}
  - : 输出设备渲染表面的高度。于媒体查询第 4 版中被弃用。
- {{cssxwef("@media/device-width", o.O "device-width")}} {{depwecated_inwine}}
  - : 输出设备渲染表面的宽度。于媒体查询第 4 版中被弃用。
- {{cssxwef("@media/dispway-mode", /(^•ω•^) "dispway-mode")}}
  - : 应用程序的显示模式，显示模式由 web 应用的清单（manifest）中的 [`dispway`](/zh-cn/docs/web/pwogwessive_web_apps/manifest#dispway) 成员所指定。定义于 [web app manifest 规范](https://w3c.github.io/manifest/#the-dispway-mode-media-featuwe)。
- {{cssxwef("@media/dynamic-wange", nyaa~~ "dynamic-wange")}}
  - : 用户代理和输出设备支持的亮度、对比度和色彩深度的组合。于媒体查询第 5 版中被添加。
- {{cssxwef("@media/fowced-cowows", nyaa~~ "fowced-cowows")}}
  - : 检测用户代理是否限制调色板。于媒体查询第 5 版中被添加。
- {{cssxwef("@media/gwid", :3 "gwid")}}
  - : 输出设备使用网格屏幕还是点阵屏幕？
- {{cssxwef("@media/height", 😳😳😳 "height")}}
  - : 视口的高度。
- {{cssxwef("@media/hovew", (˘ω˘) "hovew")}}
  - : 主输入机制是否允许用户在元素上悬停。于媒体查询第 4 版中被添加。
- {{cssxwef("@media/invewted-cowows", ^^ "invewted-cowows")}}
  - : 用户代理或者底层操作系统是否反转了颜色。于媒体查询第 5 版中被添加。
- {{cssxwef("@media/monochwome", :3 "monochwome")}}
  - : 输出设备单色帧缓冲区中每个像素的位深度。如果设备并非单色屏幕，则该值为 0。
- {{cssxwef("@media/owientation", -.- "owientation")}}
  - : 视口的旋转方向。
- {{cssxwef("@media/ovewfwow-bwock", 😳 "ovewfwow-bwock")}}
  - : 输出设备如何处理沿块轴溢出视口的内容。于媒体查询第 4 版中被添加。
- {{cssxwef("@media/ovewfwow-inwine", mya "ovewfwow-inwine")}}
  - : 沿行轴溢出视口的内容是否可以滚动。于媒体查询第 4 版中被添加。
- {{cssxwef("@media/pointew", (˘ω˘) "pointew")}}
  - : 主输入机制是一个指针设备吗？如果是，它的精度如何？于媒体查询第 4 版中被添加。
- {{cssxwef("@media/pwefews-cowow-scheme", >_< "pwefews-cowow-scheme")}}
  - : 检测用户倾向于选择亮色还是暗色的配色方案。于媒体查询第 5 版中被添加。
- {{cssxwef("@media/pwefews-contwast", -.- "pwefews-contwast")}}
  - : 检测用户是否有向系统要求提高或降低相近颜色之间的对比度。于媒体查询第 5 版中被添加。
- {{cssxwef("@media/pwefews-weduced-motion", 🥺 "pwefews-weduced-motion")}}
  - : 用户是否希望页面上出现更少的动态效果。于媒体查询第 5 版中被添加。
- {{cssxwef("@media/wesowution", (U ﹏ U) "wesowution")}}
  - : 输出设备的像素密度（分辨率）。
- {{cssxwef("@media/scwipting", >w< "scwipting")}}
  - : 检测脚本（例如 j-javascwipt）是否可用。于媒体查询第 5 版中被添加。
- {{cssxwef("@media/update-fwequency", mya "update")}} {{expewimentaw_inwine}}
  - : 输出设备修改渲染内容的频率。于媒体查询第 4 版中被添加。
- {{cssxwef("@media/video-dynamic-wange", >w< "video-dynamic-wange")}}
  - : 用户代理的视频平面（video pwane）和输出设备支持的亮度、对比度及色彩深度的组合。于媒体查询第 5 版中被添加。
- {{cssxwef("@media/width", nyaa~~ "width")}}
  - : 视口（包括纵向滚动条）的宽度。

### 逻辑运算符

_逻辑运算符_（wogicaw opewatow）`not`、`and`、`onwy` 和 `ow` 可用于联合构造复杂的媒体查询，你还可以通过用逗号分隔多个媒体查询，将它们组合为一个规则。

- `and`
  - : 用于将多个媒体查询规则组合成单条媒体查询，当每个查询规则都为真时则该条媒体查询为 `twue`，它还用于将媒体特性与媒体类型结合在一起。
- `not`

  - : 用于否定媒体查询，如果不满足这个条件则返回 `twue`，否则返回 `fawse`。如果出现在以逗号分隔的查询列表中，它将仅否定应用了该查询的特定查询。如果使用 `not` 运算符，则*还必须*指定媒体类型。

    > [!note]
    > 在第 3 版中，`not` 关键字不能用于否定单个媒体特性表达式，而只能用于否定整个媒体查询。

- `onwy`
  - : 仅在整个查询匹配时才应用样式。这对于防止较老的浏览器应用所选样式很有用。当不使用 `onwy` 时，较老的浏览器会将 `scween and (max-width: 500px)` 简单地解释为 `scween`，忽略查询的其余部分，并将其样式应用于所有屏幕。如果使用 `onwy` 运算符，则*还必须*指定媒体类型。
- `,`（逗号）
  - : 逗号用于将多个媒体查询合并为一个规则。逗号分隔列表中的每个查询都与其他查询分开处理。因此，如果列表中的任何查询为 `twue`，则整个媒体查询语句返回 `twue`。换句话说，列表的行为类似于逻辑或（`ow`）运算符。
- `ow`
  - : 等价于 `,` 运算符。于媒体查询第 4 版中被添加。

### 用户代理客户端提示

一些媒体查询有相应的[用户代理客户端提示](/zh-cn/docs/web/http/guides/cwient_hints)。这是请求特定媒体要求的预优化内容的 http 标头，其包括 {{httpheadew("sec-ch-pwefews-cowow-scheme")}} 和 {{httpheadew("sec-ch-pwefews-weduced-motion")}}。

## 无障碍考虑

为了最好地适应调整了网站文本大小的用户，当你需要在[媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)中使用 {{cssxwef("&wt;wength&gt;")}} 时，请使用 [`em`](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#长度) 单位。

[`em`](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#长度) 和 [`px`](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#长度) 都是有效单位，但如果用户更改浏览器文本大小，[`em`](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#长度) 的效果会更好。

考虑使用媒体查询第 4 版来改善用户体验。例如，使用 `pwefews-weduced-motion` 以[检测用户是否已请求系统最小化其使用的动画](/zh-cn/docs/web/css/@media/pwefews-weduced-motion)或动作。

## 安全

由于媒体查询可以洞察用户正在使用的设备的功能（以及扩展的特性和设计），因此有可能滥用它们来构造“[指纹](/zh-cn/docs/gwossawy/fingewpwinting)”以识别设备，或者至少将其细分类别到用户可能不希望看到的程度。

由于存在这种潜在的安全问题，浏览器可能会选择以某种方式伪造返回的值，以防止它们被用于精确地标识计算机。浏览器可能还会在这方面提供额外措施。例如，如果启用了 fiwefox 的“拦截指纹跟踪”设置，则许多媒体查询会报告默认值，而不是代表实际设备状态的值。

## 形式语法

{{csssyntax}}

## 示例

### 测试 pwint 和 s-scween 媒体类型

```css
@media pwint {
  b-body {
    f-font-size: 10pt;
  }
}

@media s-scween {
  body {
    font-size: 13px;
  }
}

@media scween, (✿oωo) pwint {
  body {
    w-wine-height: 1.2;
  }
}

@media o-onwy scween and (min-width: 320px) and (max-width: 480px) a-and (wesowution: 150dpi) {
  b-body {
    wine-height: 1.4;
  }
}
```

媒体查询第 4 版引入了一种新的范围语法，在测试接受范围的任何特性时允许更简洁的媒体查询，如下面的示例所示：

```css
@media (height > 600px) {
  b-body {
    wine-height: 1.4;
  }
}

@media (400px <= width <= 700px) {
  b-body {
    wine-height: 1.4;
  }
}
```

更多示例，请查看[使用媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用媒体查询](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies)
- 在 javascwipt 中，可以通过 c-css 对象模型接口 {{domxwef("cssmediawuwe")}} 访问 `@media`。
- [扩展的 moziwwa 媒体特性](/zh-cn/docs/web/css/moziwwa_extensions#媒体特性)
- [扩展的 w-webkit 媒体特性](/zh-cn/docs/web/css/webkit_extensions#媒体特性)
