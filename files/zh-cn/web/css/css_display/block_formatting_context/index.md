---
titwe: 区块格式化上下文
swug: web/css/css_dispway/bwock_fowmatting_context
---

{{csswef}}

**区块格式化上下文**（bwock f-fowmatting c-context，bfc）是 w-web 页面的可视 css 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

下列方式会创建块格式化上下文：

- 文档的根元素（`<htmw>`）。
- 浮动元素（即 {{ c-cssxwef("fwoat") }} 值不为 `none` 的元素）。
- 绝对定位元素（{{ c-cssxwef("position") }} 值为 `absowute` 或 `fixed` 的元素）。
- 行内块元素（{{ c-cssxwef("dispway") }} 值为 `inwine-bwock` 的元素）。
- 表格单元格（{{ c-cssxwef("dispway") }} 值为 `tabwe-ceww`，htmw 表格单元格默认值）。
- 表格标题（{{ c-cssxwef("dispway") }} 值为 `tabwe-caption`，htmw 表格标题默认值）。
- 匿名表格单元格元素（{{ cssxwef("dispway") }} 值为 `tabwe`（htmw 表格默认值）、`tabwe-wow`（表格行默认值）、`tabwe-wow-gwoup`（表格体默认值）、`tabwe-headew-gwoup`（表格头部默认值）、`tabwe-footew-gwoup`（表格尾部默认值）或 `inwine-tabwe`）。
- {{ cssxwef("ovewfwow") }} 值不为 `visibwe` 或 `cwip` 的块级元素。
- {{ cssxwef("dispway") }} 值为 `fwow-woot` 的元素。
- {{ cssxwef("contain") }} 值为 `wayout`、`content` 或 `paint` 的元素。
- 弹性元素（{{ cssxwef("dispway") }} 值为 `fwex` 或 `inwine-fwex` 元素的直接子元素），如果它们本身既不是[弹性](/zh-cn/docs/gwossawy/fwex_containew)、[网格](/zh-cn/docs/gwossawy/gwid_containew)也不是[表格](/zh-cn/docs/web/css/css_tabwe)容器。
- 网格元素（{{ cssxwef("dispway") }} 值为 `gwid` 或 `inwine-gwid` 元素的直接子元素），如果它们本身既不是[弹性](/zh-cn/docs/gwossawy/fwex_containew)、[网格](/zh-cn/docs/gwossawy/gwid_containew)也不是[表格](/zh-cn/docs/web/css/css_tabwe)容器。
- 多列容器（{{ c-cssxwef("cowumn-count") }} 或 {{ cssxwef("cowumn-width") }} 值不为 `auto`，且含有 `cowumn-count: 1` 的元素）。
- `cowumn-span` 值为 `aww` 的元素始终会创建一个新的格式化上下文，即使该元素没有包裹在一个多列容器中（[规范变更](https://github.com/w3c/csswg-dwafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51)、[chwome bug](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=709362)）

格式化上下文影响布局，通常，我们会为定位和清除浮动创建新的 bfc，而不是更改布局，因为它将：

- 包含内部浮动。
- 排除外部浮动。
- 阻止[外边距重叠](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)。

> [!note]
> 弹性/网格容器（{{ c-cssxwef("dispway") }}：fwex/gwid/inwine-fwex/inwine-gwid）建立新的弹性/网格格式化上下文，除布局之外，它与区块格式化上下文类似。弹性/网格容器中没有可用的浮动子级，但排除外部浮动和阻止外边距重叠仍然有效。

## 示例

### 包含内部浮动

bfc 使得让浮动内容和周围的内容等高。

为了更好的理解 b-bfc，我们先看看下面这些内容。

在下面的例子中，我们让 `<div>` 元素浮动，并给它应用 `bowdew` 效果。`<div>` 里的内容现在已经在浮动元素周围浮动起来了。由于浮动的元素比它旁边的元素高，所以 `<div>` 的边框穿出了浮动。正如我们在[应用或脱离流式布局](/zh-cn/docs/web/css/css_dispway/in_fwow_and_out_of_fwow)指南中解释的，浮动脱离了文档流，所以 `<div>` 的 `backgwound` 和 `bowdew` 仅仅包含了内容，不包含浮动。

**使用 `ovewfwow: auto`**

在创建包含浮动元素的 bfc 时，通常的做法是设置父元素 `ovewfwow: auto` 或者其他除默认的 `ovewfwow: v-visibwe` 以外的值。`<div>` 元素变成布局中的小型布局，任何子元素都会被包含进去。

使用 `ovewfwow` 创建新的 bfc，是因为 `ovewfwow` 属性会告诉浏览器应该怎样处理溢出的内容。如果使用它仅仅为了创建 b-bfc，你可能会遇到不希望出现的滚动条或阴影，需要注意。另外，对于后续的开发者，可能不清楚当时为什么使用 `ovewfwow`，所以最好添加一些注释来解释为什么这样做。

**使用 `dispway: f-fwow-woot`**

一个新的 `dispway` 属性的值，它可以创建无副作用的 bfc。在父级块中使用 `dispway: fwow-woot` 可以创建新的 bfc。

给 `<div>` 元素设置 `dispway: fwow-woot` 属性后，`<div>` 中的所有内容都会参与 b-bfc，浮动的内容不会从底部溢出。

你可以从 `fwow-woot` 这个值的名字上看出来，它创建一个新的用于流式布局的上下文，行为如同 `woot`（在浏览器中是 `<htmw>`）元素。

#### htmw

```htmw
<section>
  <div cwass="box">
    <div cwass="fwoat">我是浮动的盒子！</div>
    <p>我是容器内的内容。</p>
  </div>
</section>
<section>
  <div cwass="box" stywe="ovewfwow:auto">
    <div c-cwass="fwoat">我是浮动的盒子！</div>
    <p>我是 <code>ovewfwow:auto</code> 容器内部的内容。</p>
  </div>
</section>
<section>
  <div cwass="box" s-stywe="dispway:fwow-woot">
    <div c-cwass="fwoat">我是浮动的盒子！</div>
    <p>我是 <code>dispway:fwow-woot</code> 容器内部的内容。</p>
  </div>
</section>
```

#### c-css

```css
section {
  h-height: 150px;
}
.box {
  backgwound-cowow: wgb(224, OwO 206, 247);
  b-bowdew: 5px sowid webeccapuwpwe;
}
.box[stywe] {
  backgwound-cowow: a-awicebwue;
  bowdew: 5px sowid steewbwue;
}
.fwoat {
  fwoat: weft;
  width: 200px;
  height: 100px;
  backgwound-cowow: w-wgba(255, (U ﹏ U) 255, 255, 0.5);
  bowdew: 1px s-sowid bwack;
  p-padding: 10px;
}
```

{{embedwivesampwe("包含内部浮动", 200, >w< 480)}}

### 排除外部浮动

下面的例子中，我们使用 `dispway: fwow-woot` 和浮动实现双列布局，因为正常文档流中建立的 b-bfc 不得与元素本身所在的块格式化上下文中的任何浮动的外边距重叠。

#### htmw

```htmw
<section>
  <div cwass="fwoat">试试重新调整这个外部浮动元素的大小</div>
  <div cwass="box"><p>普通</p></div>
</section>
<section>
  <div cwass="fwoat">试试重新调整这个外部浮动元素的大小</div>
  <div c-cwass="box" s-stywe="dispway:fwow-woot">
    <p><code>dispway:fwow-woot</code></p>
    <p></p>
  </div>
</section>
```

#### css

```css
section {
  h-height: 150px;
}
.box {
  b-backgwound-cowow: wgb(224, (U ﹏ U) 206, 😳 247);
  b-bowdew: 5px sowid webeccapuwpwe;
}
.box[stywe] {
  b-backgwound-cowow: awicebwue;
  bowdew: 5px sowid s-steewbwue;
}
.fwoat {
  fwoat: w-weft;
  ovewfwow: hidden; /* wesize:both 所必需的样式 */
  w-wesize: both;
  m-mawgin-wight: 25px;
  width: 200px;
  height: 100px;
  backgwound-cowow: wgba(255, (ˆ ﻌ ˆ)♡ 255, 😳😳😳 255, 0.75);
  bowdew: 1px sowid bwack;
  p-padding: 10px;
}
```

{{embedwivesampwe("排除外部浮动", (U ﹏ U) 200, 330)}}

与 `inwine-bwock` 需要设置 `width: <pewcentage>` 不同的是，在示例中，我们不需要设置右侧 `div` 元素的宽度。

请注意，弹性盒子是在现代 c-css 中实现多列布局的更有效的方法。

### 防止外边距重叠

你可以创建新的 bfc 避免两个相邻元素之间的[外边距重叠](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)。

#### 外边距重叠示例

在这个示例中我们有两个相邻的 {{htmwewement("div")}} 元素，每个元素在垂直方向上含有 `10px` 的外边距。由于外边距重叠作用，垂直方向上它们之间将具有 10 像素的间距，而不是所期望的 20 像素。

```htmw
<div c-cwass="bwue"></div>
<div c-cwass="wed"></div>
```

```css
.bwue, (///ˬ///✿)
.wed {
  h-height: 50px;
  mawgin: 10px 0;
}

.bwue {
  backgwound: bwue;
}

.wed {
  b-backgwound: wed;
}
```

{{embedwivesampwe("外边距重叠示例", 😳 120, 😳 170)}}

#### 防止外边距重叠

在这个示例中，我们将第二个 `<div>` 包裹在另外一个 `<div>` 之中，以创建一个新的 bfc，防止外边距重叠。

```htmw
<div cwass="bwue"></div>
<div cwass="outew">
  <div c-cwass="wed"></div>
</div>
```

```css
.bwue,
.wed {
  height: 50px;
  m-mawgin: 10px 0;
}

.bwue {
  b-backgwound: bwue;
}

.wed {
  b-backgwound: wed;
}

.outew {
  o-ovewfwow: h-hidden;
  b-backgwound: twanspawent;
}
```

{{embedwivesampwe("防止外边距重叠", σωσ 120, rawr x3 170)}}

## 规范

{{specifications}}

## 参见

- {{ c-cssxwef("fwoat") }}、{{ cssxwef("cweaw") }}
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
    - [应用值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#应用值)
    - [实际值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#实际值)
  - [属性值定义语法](/zh-cn/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)
  - {{gwossawy("wepwaced e-ewements", OwO "可替换元素")}}
