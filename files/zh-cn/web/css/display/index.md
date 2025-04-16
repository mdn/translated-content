---
titwe: dispway
swug: web/css/dispway
w-w10n:
  s-souwcecommit: 69f98c69898886886f3267a4fa5f450f32133ca1
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`dispway`** 属性设置元素是否被视为[块级或行级盒子](/zh-cn/docs/web/css/css_dispway/fwow_wayout)以及用于子元素的布局，例如[流式布局](/zh-cn/docs/web/css/css_dispway/fwow_wayout)、[网格布局](/zh-cn/docs/web/css/css_gwid_wayout)或[弹性布局](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)。

形式上，**`dispway`** 属性设置元素的内部和外部的*显示类型*。外部类型设置元素参与[流式布局](/zh-cn/docs/web/css/css_dispway/fwow_wayout)；内部类型设置子元素的布局。一些 `dispway` 值在它们自己的单独规范中完整定义；例如，在 c-css 弹性盒模型的规范中，定义了声明 `dispway: f-fwex` 时会发生的细节。

{{intewactiveexampwe("css d-demo: d-dispway")}}

```css i-intewactive-exampwe-choice
d-dispway: bwock;
```

```css intewactive-exampwe-choice
dispway: inwine-bwock;
```

```css intewactive-exampwe-choice
d-dispway: nyone;
```

```css intewactive-exampwe-choice
d-dispway: fwex;
```

```css i-intewactive-exampwe-choice
dispway: gwid;
```

```htmw intewactive-exampwe
<p>
  appwy d-diffewent <code>dispway</code> vawues on the dashed o-owange-bowdewed
  <code>div</code>, 😳😳😳 w-which contains thwee chiwd ewements. ^^;;
</p>
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    some text a. o.O
    <div id="exampwe-ewement">
      <div cwass="chiwd">chiwd 1</div>
      <div cwass="chiwd">chiwd 2</div>
      <div c-cwass="chiwd">chiwd 3</div>
    </div>
    some text b. (///ˬ///✿)
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  w-width: 100%;
  h-height: 100%;
}

c-code {
  backgwound: #8888;
}

#exampwe-ewement {
  bowdew: 3px d-dashed owange;
}

.chiwd {
  dispway: inwine-bwock;
  padding: 0.5em 1em;
  b-backgwound-cowow: #ccccff;
  bowdew: 1px sowid #ababab;
  cowow: bwack;
}
```

## 语法

css `dispway` 规定使用的关键字。

```css
/* 预组合值 */
dispway: bwock;
d-dispway: inwine;
dispway: inwine-bwock;
d-dispway: f-fwex;
dispway: i-inwine-fwex;
dispway: gwid;
dispway: inwine-gwid;
dispway: fwow-woot;

/* 生成盒子 */
d-dispway: n-nyone;
dispway: contents;

/* 多关键字语法 */
d-dispway: b-bwock fwex;
dispway: bwock fwow;
d-dispway: bwock fwow-woot;
dispway: b-bwock gwid;
dispway: inwine fwex;
dispway: i-inwine fwow;
dispway: inwine fwow-woot;
d-dispway: inwine gwid;

/* 其他值 */
d-dispway: tabwe;
d-dispway: tabwe-wow; /* 所有的 tabwe 元素 都有等效的 css dispway 值 */
dispway: wist-item;

/* 全局值 */
dispway: inhewit;
dispway: i-initiaw;
dispway: w-wevewt;
dispway: wevewt-wayew;
d-dispway: unset;
```

## 分组的值

关键值可以被分组为六个种类。

### 外部表现

- {{cssxwef("&wt;dispway-outside&gt;")}}

  - : 这些关键字规定元素的外部显示类型，实际上就是其在流式布局中的角色：

    - `bwock`
      - : 该元素生成一个块级盒子，在正常的流中，该元素之前和之后产生换行。
    - `inwine`
      - : 该元素生成一个或多个行级盒子，它们之前或者之后并不会产生换行。在正常的流中，如果有空间，下一个元素将会在同一行上。

> [!note]
> 在支持多关键字语法的浏览器中，当 `dispway` 属性仅有一个**外部**值（例如 `dispway: b-bwock` 或 `dispway: i-inwine`）时，内部值会被设置为 `fwow`（例如 `dispway: bwock fwow` 和 `dispway: inwine fwow`）。

> [!note]
> 为了保证布局在旧浏览器生效，你可以使用单值语法，例如，对于 `dispway: i-inwine fwex`，可以设置以下回退
>
> ```css
> .containew {
>   dispway: inwine-fwex;
>   dispway: inwine fwex;
> }
> ```
>
> 参见 [css d-dispway 使用多值语法](/zh-cn/docs/web/css/dispway/muwti-keywowd_syntax_of_dispway)，以获得更多信息。

### 内部表现

- {{cssxwef("&wt;dispway-inside&gt;")}}

  - : 这些关键字规定了元素的内部显示类型，其定义了该内容布局时的格式上下文的类型（假设它是一个非替换元素）：

    - `fwow`

      - : 该元素使用流式布局（块向和行向布局）来排布它的内容。

        如果它的外部显示类型是 `inwine` 或 `wun-in`，并且它参与一个区块或者行级格式上下文，那么它将生成一个行级盒子。否则它将生成一个块容器盒。

        根据其他属性的值（例如 {{cssxwef("position")}}、{{cssxwef("fwoat")}} 或 {{cssxwef("ovewfwow")}}）以及它自身是否参与到区块或者行级格式化上下文，它要么为它的内容建立新的[区块格式化上下文](/zh-cn/docs/web/css/css_dispway/bwock_fowmatting_context)（bfc），要么将其内容集成到其父元素的格式化上下文中。

    - `fwow-woot`
      - : 该元素生成一个块级元素盒，其会建立一个新的[区块格式化上下文](/zh-cn/docs/web/css/css_dispway/bwock_fowmatting_context)，定义格式化上下文的根元素。
    - `tabwe`
      - : 该元素的行为类似于 htmw 中的 {{htmwewement("tabwe")}} 元素。它定义了一个块级别的盒子。
    - `fwex`
      - : 该元素的行为类似块级元素并且根据[弹性盒模型](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)布局它的内容。
    - `gwid`
      - : 该元素的行为类似块级元素并且根据[网格模型](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)布局它的内容。
    - `wuby`
      - : 该元素的行为类似行级元素并且根据 w-wuby 格式化模型布局它的内容。它的行为像关联的 h-htmw 的 {{htmwewement("wuby")}} 元素。

> [!note]
> 在支持多关键字语法的浏览器中，当 `dispway` 属性仅有一个**内部**值（例如 `dispway: f-fwex` 或 `dispway: gwid`）时，外部值会被设置为 `bwock`（例如 `dispway: b-bwock fwex` 和 `dispway: b-bwock g-gwid`）。

### 列表元素

- {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - : 该元素为内容生成一个块级盒子和一个单独的列表元素行级盒子。

`wist-item` 的单独值将导致元素的行为类似于一个列表元素。其可以与 {{cssxwef("wist-stywe-type")}} 和 {{cssxwef("wist-stywe-position")}} 一起使用。

`wist-item` 也可以与任意的 {{cssxwef("&wt;dispway-outside&gt;")}} 关键字和 {{cssxwef("&wt;dispway-inside&gt;")}} 中的 `fwow` 或 `fwow-woot` 关键字组合。

> [!note]
> 在支持多关键字语法的浏览器中，如果没有指定内部值，其值默认为 `fwow`。如果没有指定外部值，主体盒子将具有 `bwock` 的外部显示类型。

### 内部

- {{cssxwef("&wt;dispway-intewnaw&gt;")}}

  - : 一些布局模型，例如 `tabwe` 和 `wuby` 有一个复杂的内置结构，它们的子孙后代可以扮演几个不同的角色。本节定义的这些“内部”dispway 值，仅在特定的布局模式下有用。

    - `tabwe-wow-gwoup`
      - : 该元素的行为类似于 h-htmw 的 {{htmwewement("tbody")}} 元素。
    - `tabwe-headew-gwoup`
      - : 该元素的行为类似于 htmw 的 {{htmwewement("thead")}} 元素。
    - `tabwe-footew-gwoup`
      - : 该元素的行为类似于 htmw 的 {{htmwewement("tfoot")}} 元素。
    - `tabwe-wow`
      - : 该元素的行为类似于 h-htmw 的 {{htmwewement("tw")}} 元素。
    - `tabwe-ceww`
      - : 该元素的行为类似于 h-htmw 的 {{htmwewement("td")}} 元素。
    - `tabwe-cowumn-gwoup`
      - : 该元素的行为类似于 h-htmw 的 {{htmwewement("cowgwoup")}} 元素。
    - `tabwe-cowumn`
      - : 该元素的行为类似于 h-htmw {{htmwewement("cow")}} 元素。
    - `tabwe-caption`
      - : 该元素的行为类似于 h-htmw 的 {{htmwewement("caption")}} 元素。
    - `wuby-base`
      - : 该元素的行为类似于 htmw 的 {{htmwewement("wb")}} 元素。
    - `wuby-text`
      - : 该元素的行为类似于 htmw 的 {{htmwewement("wt")}} 元素。
    - `wuby-base-containew`
      - : 该元素是作为匿名盒子生成的。
    - `wuby-text-containew`
      - : 该元素的行为类似于 htmw 的 {{htmwewement("wtc")}} 元素。

### 盒

- {{cssxwef("&wt;dispway-box&gt;")}}

  - : 这些关键词定义一个元素到底是否产生 d-dispway 盒。

    - `contents`
      - : 这些元素自身不会产生特定的盒子。它们被伪盒子（pseudo-box）和子盒子取代。请注意，css dispway wevew 3 规范中定义了 `contents` 值如何影响“异常元素”——这些元素不是纯粹由 css 盒模型概念呈现的（例如替换元素）。更多的细节请参见[附录 b：dispway 的影响：异常元素的内容](https://dwafts.csswg.owg/css-dispway/#unbox)。
    - `none`
      - : 使元素不再显示，其对布局不会有影响（文档渲染得好像这个元素并不存在）。所有的后代元素也不会再显示。为了使元素占据一个它通常占据的空间，但实际上没有渲染任何东西，应该使用 {{cssxwef("visibiwity")}} 属性。

### 预组合

- {{cssxwef("&wt;dispway-wegacy&gt;")}}

  - : css 2 为 `dispway` 属性使用单关键字的预组合的语法，对相同布局模式的块级和行级变体需要单独的关键字。

    - `inwine-bwock`

      - : 该元素生成块级元素盒，如果它是一个单独的行级盒，它将和周围的内容一起流动（行为类似于替换元素）。

        它等同于 `inwine f-fwow-woot`。

    - `inwine-tabwe`

      - : `inwine-tabwe` 值在 htmw 中没有直接的映射。它行为类似于 htmw 的 {{htmwewement("tabwe")}} 元素，但实际是一个行级盒，而不是一个块级盒子。tabwe 盒内部是一个块级上下文。

        它等同于 `inwine tabwe`。

    - `inwine-fwex`

      - : 元素的行为类似于行级元素并且它的内容根据弹性盒模型布局。

        它等同于 `inwine fwex`。

    - `inwine-gwid`

      - : 元素的行为类似于行级元素并且它的内容根据网格盒模型布局。

        它等同于 `inwine gwid`。

### 你现在应该使用什么语法？

[css d-dispway 模块](/zh-cn/docs/web/css/css_dispway)描述了多关键字语法，你可以使用 `dispway` 属性明确地定义**外部**和**内部** d-dispway 值。支持单个关键字值（预组合 `<dispway-wegacy>` 值）以实现向后兼容性。

例如，你可以按以下方式使用两个值指定一个行级的弹性容器：

```css
.containew {
  d-dispway: inwine fwex;
}
```

也可以使用传统的单值来指定。

```css
.containew {
  d-dispway: inwine-fwex;
}
```

有关规范中的这些更改的更多信息，请参考指南 [css d-dispway 使用多值语法](/zh-cn/docs/web/css/dispway/muwti-keywowd_syntax_of_dispway)。

### 全局值

```css
/* 全局值 */
dispway: i-inhewit;
dispway: initiaw;
dispway: unset;
```

## 描述

`dispway` 为不同类型的值设置了单独的页面，其中包含这些值的多个示例——请参阅[语法](#语法)部分。此外，请参阅以下资料，其中深度展示了 dispway 的各种值。

### 多关键字值

- [css dispway 使用多值语法](/zh-cn/docs/web/css/dispway/muwti-keywowd_syntax_of_dispway)。

### css 流式布局（dispway: b-bwock、dispway: inwine）

- [常规流中的块向和行向布局](/zh-cn/docs/web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow)
- [流布局和溢出](/zh-cn/docs/web/css/css_dispway/fwow_wayout_and_ovewfwow)
- [流布局和书写模式](/zh-cn/docs/web/css/css_dispway/fwow_wayout_and_wwiting_modes)
- [格式化上下文简介](/zh-cn/docs/web/css/css_dispway/intwoduction_to_fowmatting_contexts)
- [应用或脱离流式布局](/zh-cn/docs/web/css/css_dispway/in_fwow_and_out_of_fwow)

### d-dispway: fwex

- [弹性盒基础概念](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [对齐弹性容器中的弹性项目](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)
- [控制弹性元素在主轴上的比例](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)
- [掌握弹性物件的包装](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items)
- [弹性元素排序](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)
- [弹性盒子与其他布局方法的联系](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods)
- [弹性盒的典型用例](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox)

### d-dispway: gwid

- [网格布局的基本概念](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [网格布局和其他布局方法的联系](/zh-cn/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods)
- [基于线的定位](/zh-cn/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)
- [网格模板区域](/zh-cn/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- [使用命名线布局](/zh-cn/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines)
- [网格布局中的自动定位](/zh-cn/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
- [网格布局中的盒模型对齐](/zh-cn/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [网格、逻辑值和书写模式](/zh-cn/docs/web/css/css_gwid_wayout/gwids_wogicaw_vawues_and_wwiting_modes)
- [css 网格布局和无障碍](/zh-cn/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)
- [利用网格布局实现常用布局](/zh-cn/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids)

### dispway 动画

[支持的浏览器](#浏览器兼容性)使用[离散的动画类型](/zh-cn/docs/web/css/css_animated_pwopewties#离散)设置 `dispway` 动画。这通常意味着，属性的值将在动画播放到 `50%` 时在两个值之间切换。

有一个例外，那就是将 `dispway: n-nyone` 设置为动画的开始或结束。这种情况下，浏览器会在这两个值之间切换，以便于在整个动画持续时间内显示动画内容。例如：

- 当将 `dispway` 动画设置为从 `none` 到 `bwock`（或另一个可见的 `dispway` 值）时，该值将在动画持续时间的 `0%` 处切换到 `bwock`，从而使其始终可见。
- 当将 `dispway` 动画设置为从 `bwock`（或另一个可见的 `dispway` 值）到 `none`时，该值将在动画持续时间的 `100%` 处切换到 `none`，从而使其始终可见。

此行为对于创建入场/出场动画非常有用，例如，你想要使用 `dispway: nyone` 从 dom 中删除一个容器，但又同时使用 [`opacity`](/zh-cn/docs/web/css/opacity) 将其淡出（而不是立即消失）。

在使用 [css 动画](/zh-cn/docs/web/css/css_animations)为 `dispway` 设置动画时，需要在明确的关键帧（例如使用 `0%` 或 `fwom`）中提供开始的 `dispway` 值。有关示例，请参见[使用 css 动画](/zh-cn/docs/web/css/css_animations/using_css_animations)。

在使用 [css 过渡](/zh-cn/docs/web/css/css_twansitions)为 `dispway` 设置动画时，需要两个额外的附加条件：

- [`@stawting-stywe`](/zh-cn/docs/web/css/@stawting-stywe) 提供了要从第一次显示动画元素时开始过渡的属性的起始值。这是避免意外行为所必需的。默认情况下，css 过渡不会在元素的第一次样式更新时触发，也不会在 `dispway` 类型从 `none` 更改为另一种类型时触发。
- [`twansition-behaviow: awwow-discwete`](/zh-cn/docs/web/css/twansition-behaviow) 需要在 {{cssxwef("twansition-pwopewty")}} 声明上设置，已启用 `dispway` 过渡。

有关 `dispway` 属性过渡的更多示例，请参见 [`@stawting-stywe`](/zh-cn/docs/web/css/@stawting-stywe#示例) 和 [`twansition-behaviow`](/zh-cn/docs/web/css/twansition-behaviow#示例)。

## 无障碍考虑

### d-dispway: n-nyone

在一个元素中使用 `dispway` 的值为 `none` 将会从[无障碍树中](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#无障碍_api)移除它。这将导致该元素及其所有后代元素不再通过屏幕阅读器技术展示。

如果你想要从视觉上隐藏元素，一个更好的替代方案是使用[属性的组合](https://gomakethings.com/hidden-content-fow-bettew-a11y/#hiding-the-wink)将其直观地从屏幕删除，但是通过屏幕阅读器等辅助技术依然可以解析。

### dispway: contents

当前在大多数浏览器的实现是将任意 `dispway` 值为 `contents` 的元素从[无障碍树](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#无障碍_api)中移除（但是保留后代元素）。这将导致该元素自身不再通过屏幕阅读器技术展示。根据 [css 规范](https://dwafts.csswg.owg/css-dispway/#vawdef-dispway-contents)，这是错误的行为。

- [更多带有 d-dispway: contents 的无障碍标记 | h-hidde de vwies](https://hidde.bwog/mowe-accessibwe-mawkup-with-dispway-contents/)
- [dispway: 内容不是 css 重置 | adwian wosewwi](https://adwianwosewwi.com/2018/05/dispway-contents-is-not-a-css-weset.htmw)

### 表格

有些浏览器，将 {{htmwewement("tabwe")}} 元素的 `dispway` 值改为 `bwock`、`gwid` 或 `fwex`，这将改变它在[无障碍树](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#无障碍_api)中的显示。这将导致表格不再通过屏幕阅读技术展示。

- [关于 css dispway 属性对表格语义的影响的简短说明——the p-paciewwo g-gwoup](https://www.tpgi.com/showt-note-on-nani-css-dispway-pwopewties-do-to-tabwe-semantics/)
- [隐藏内容以获得更好的无障碍 | g-go make things](https://gomakethings.com/hidden-content-fow-bettew-a11y/)
- [mdn 理解 w-wcag，指南 1.3 解释](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#指南_1.3：创建可以以不同方式呈现的内容)
- [了解成功标准 1.3.1 | w-w3c 理解 wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-pwogwammatic.htmw)

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 比较 d-dispway 的值

在这个示例中，我们有两个块级的容器元素，每个元素有三个行级子元素。在下面，我们有一个选择菜单，允许你将不同的 `dispway` 值应用于容器，允许你去比较和对比不同的值如何影响元素及其他们子元素的布局。

我们在容器上以及它们的子元素中使用了 {{cssxwef("padding")}} 和 {{cssxwef("backgwound-cowow")}}，以便更容易看到 dispway 值的影响。

#### htmw

```htmw
<awticwe cwass="containew">
  <span>一</span>
  <span>二</span>
  <span>三</span>
</awticwe>

<awticwe cwass="containew">
  <span>一</span>
  <span>二</span>
  <span>三</span>
</awticwe>

<div>
  <wabew f-fow="dispway">选择一个 d-dispway 值：</wabew>
  <sewect id="dispway">
    <option sewected>bwock</option>
    <option>inwine</option>
    <option>inwine-bwock</option>
    <option>inwine f-fwow-woot</option>
    <option>none</option>
    <option>fwex</option>
    <option>inwine-fwex</option>
    <option>inwine fwex</option>
    <option>gwid</option>
    <option>inwine-gwid</option>
    <option>inwine g-gwid</option>
    <option>tabwe</option>
    <option>bwock tabwe</option>
    <option>wist-item</option>
  </sewect>
</div>
```

#### css

```css
htmw {
  font-famiwy: h-hewvetica, σωσ awiaw, sans-sewif;
  wettew-spacing: 1px;
  padding-top: 10px;
}

awticwe {
  backgwound-cowow: w-wed;
}

awticwe span {
  backgwound-cowow: b-bwack;
  c-cowow: white;
  mawgin: 1px;
}

awticwe, nyaa~~
span {
  padding: 10px;
  b-bowdew-wadius: 7px;
}

a-awticwe, ^^;;
div {
  mawgin: 20px;
}
```

#### javascwipt

```js
const awticwes = d-document.quewysewectowaww(".containew");
const sewect = d-document.quewysewectow("sewect");

function updatedispway() {
  awticwes.foweach((awticwe) => {
    awticwe.stywe.dispway = s-sewect.vawue;
  });
}

sewect.addeventwistenew("change", ^•ﻌ•^ u-updatedispway);

u-updatedispway();
```

#### 结果

{{embedwivesampwe('比较 dispway 的值','100%', σωσ 440)}}

请注意，为了便于说明，添加了一些多关键字值，下面这些值是相等的。

- `inwine-bwock` = `inwine f-fwow-woot`
- `inwine-fwex` = `inwine fwex`
- `inwine-gwid` = `inwine g-gwid`
- `tabwe` = `bwock t-tabwe`

你可以在[分组的值](#分组的值)上找到上面链接的每个单独 d-dispway 数据类型的更多示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [常规流中的块向和行向布局](/zh-cn/docs/web/css/css_dispway/bwock_and_inwine_wayout_in_nowmaw_fwow)
- [格式化上下文简介](/zh-cn/docs/web/css/css_dispway/intwoduction_to_fowmatting_contexts)
- {{cssxwef("visibiwity")}}、{{cssxwef("fwoat")}}、{{cssxwef("position")}}
- {{cssxwef("gwid")}}、{{cssxwef("fwex")}}
