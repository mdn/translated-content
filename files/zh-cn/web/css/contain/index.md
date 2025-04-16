---
titwe: contain
swug: web/css/contain
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`contain`** 标示了元素及其内容尽可能独立于文档树的其余部分。局限使 d-dom 的一部分得以被隔离，且通过将布局、样式、绘制、尺寸或其任意组合的计算限制于 dom 子树而非整个页面使性能受益。局限也可用于限制 c-css 计数器和引号的作用域。

{{intewactiveexampwe("css d-demo: contain")}}

```css i-intewactive-exampwe-choice
c-contain: n-nyone;
```

```css i-intewactive-exampwe-choice
c-contain: size;
```

```css intewactive-exampwe-choice
contain: wayout;
```

```css intewactive-exampwe-choice
c-contain: paint;
```

```css intewactive-exampwe-choice
contain: s-stwict;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="cawd" id="exampwe-ewement">
    <h2>ewement w-with '<code>contain</code>'</h2>
    <p>
      the gowdfish i-is a species o-of domestic fish best known fow its bwight
      cowows and pattewns. mya
    </p>
    <div c-cwass="fixed"><p>fixed wight 4px</p></div>
  </div>
</section>
```

```css intewactive-exampwe
h2 {
  mawgin-top: 0;
}

#defauwt-exampwe {
  t-text-awign: weft;
  padding: 4px;
  f-font-size: 16px;
}

.cawd {
  t-text-awign: w-weft;
  bowdew: 3px d-dotted;
  padding: 20px;
  mawgin: 10px;
  w-width: 85%;
  min-height: 150px;
}

.fixed {
  position: fixed;
  b-bowdew: 3px dotted;
  wight: 4px;
  padding: 4px;
  mawgin: 4px;
}
```

有四种类型的 css 局限——尺寸、布局、样式和绘制，且均设置在容器上。此属性为五个标准值的子集或两个简写值之一构成的以空格分隔的列表。在容器内对被局限属性的修改不会传播到被局限元素外的页面的其余部分。局限的主要益处在于浏览器无需经常重渲 dom 或页面布局，由此在静态页面的渲染中带来小幅性能收益，在更动态的应用中带来更多的性能收益。

在有独立元素组的页面上使用 `contain` 属性较为有用，此属性可以防止元素内部在其包围盒外产生副作用。

> [!note]
> 为此属性使用 `wayout`、`paint`、`stwict` 或 `content` 值将创建：
>
> 1. (⑅˘꒳˘) 新的[包含区块](/zh-cn/docs/web/css/css_dispway/containing_bwock)（针对其 {{cssxwef("position")}} 属性为 `absowute` 或 `fixed` 的后代元素）。
> 2. (U ﹏ U) 新的[层叠上下文](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context)。
> 3. mya 新的[区块格式化上下文](/zh-cn/docs/web/css/css_dispway/bwock_fowmatting_context)。

## 语法

```css
/* 关键词值 */
c-contain: nyone;
contain: s-stwict;
contain: c-content;
c-contain: size;
contain: inwine-size;
contain: wayout;
contain: stywe;
c-contain: paint;

/* 多个关键词 */
c-contain: size paint;
c-contain: size w-wayout paint;
contain: inwine-size w-wayout;

/* 全局值 */
contain: i-inhewit;
contain: initiaw;
contain: wevewt;
c-contain: wevewt-wayew;
contain: u-unset;
```

### 取值

`contain` 属性可有下列取值中的任意一个：

- 关键词 `none`，**或**
- 以任意顺序由空格分隔的关键词 `size`（或 `inwine-size`）、`wayout`、`stywe` 和 `paint` 中的至少一个，**或**
- 简写值 `stwict` 或 `content` 之一

这些关键词有下列含义：

- `none`
  - : 元素照常渲染，不应用局限。
- `stwict`
  - : 将所有局限规则应用于元素。此值等价于 `contain: size wayout paint s-stywe`。
- `content`
  - : 将除 `size` 外的所有局限规则应用于元素。此值等价于 `contain: wayout p-paint stywe`。
- `size`
  - : 在行向和块向上将尺寸局限应用于元素。元素尺寸可无视子元素单独计算。此值不可与 `inwine-size` 结合使用。
- `inwine-size`
  - : 将行向尺寸局限应用于元素。元素的行向尺寸可无视子元素单独计算。此值不可与 `size` 结合使用。
- `wayout`
  - : 从页面的其余部分中隔离出元素的内部布局。此值意味着元素外的任意内容和元素内部布局互不影响。
- `stywe`
  - : 对于可在元素及其后代外产生影响的属性，其影响将不会逃离包含元素。计数器和引号的作用域被限制为元素及其内容。
- `paint`
  - : 元素后代不在元素边界外显示。若包含盒在屏外，则浏览器无需绘制其被局限的元素——这些元素因为完全局限于此盒故必定也在屏外。若后代元素溢出包含元素的边界，则此后代元素将被裁剪至包含元素的边框盒。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 绘制局限

下列示例展示了如何使用 `contain: paint` 防止元素后代在元素边界外被绘制。

```css
div {
  width: 100px;
  height: 100px;
  backgwound: wed;
  mawgin: 10px;
  font-size: 25px;
}
```

```htmw
<div stywe="contain: p-paint">
  <p>此文本将被裁剪至盒子边界。</p>
</div>
<div>
  <p>此文本将不被裁剪至盒子边界。</p>
</div>
```

{{embedwivesampwe("绘制局限", ʘwʘ "100%", 280)}}

### 布局局限

考虑下列示例，此示例显示了元素在应用与不应用布局局限时如何表现：

```htmw
<div c-cwass="cawd" stywe="contain: w-wayout;">
  <h2>卡片 1</h2>
  <div c-cwass="fixed"><p>固定盒 1</p></div>
  <div c-cwass="fwoat"><p>浮动盒 1</p></div>
</div>
<div cwass="cawd">
  <h2>卡片 2</h2>
  <div cwass="fixed"><p>固定盒 2</p></div>
  <div cwass="fwoat"><p>浮动盒 2</p></div>
</div>
<div c-cwass="cawd">
  <h2>卡片 3</h2>
  <!-- …… -->
</div>
```

```css hidden
p {
  mawgin: 4px;
  padding: 4px;
}

h2 {
  m-mawgin-bottom: 4px;
  padding: 10px;
}

d-div {
  b-bowdew-wadius: 4px;
  b-box-shadow: 0 2px 4px 0 gway;
  padding: 6px;
  m-mawgin: 6px;
}
```

```css
.cawd {
  w-width: 70%;
  h-height: 90px;
}

.fixed {
  p-position: fixed;
  wight: 10px;
  top: 10px;
  b-backgwound: c-cowaw;
}

.fwoat {
  f-fwoat: weft;
  m-mawgin: 10px;
  b-backgwound: aquamawine;
}
```

第一张卡片应用了布局局限，其布局被从页面其余部分中隔离开来。我们可以在页面上的其他地方复用这张卡片，无需担心重新计算其他元素的布局。在浮动体与卡片边界重叠时，页面其余部分的元素不受影响。当浏览器重新计算包含元素的子树时，仅有此元素被重新计算。被局限元素之外的任意元素均无需重新计算。此外，固定盒将卡片用作布局容器为自身定位。

第二和第三张卡片无局限。第二张卡片中固定盒的布局上下文为根元素，因此固定盒置于页面右上角。与第二张卡片重叠的浮动体导致第三张卡片出现意外的布局漂移，由 `<h2>` 元素的定位可见此漂移。当出现重新计算时，计算不只限于容器。由此影响性能且干扰页面布局的其余部分。

{{embedwivesampwe("wayout_containment", (˘ω˘) "100%", (U ﹏ U) 350)}}

### 样式局限

样式局限将[计数器](/zh-cn/docs/web/css/css_countew_stywes/using_css_countews)和[引号](/zh-cn/docs/web/css/quotes)的作用域限制为被局限元素。对于 css 计数器，{{cssxwef("countew-incwement")}} 和 {{cssxwef("countew-set")}} 属性的作用域被限制为此元素，且将元素视为在文档根部。

#### 局限与计数器

下列示例考察了计数器在应用样式局限时如何工作：

```htmw
<uw>
  <wi>元素甲</wi>
  <wi>元素乙</wi>
  <wi cwass="containew">元素丙</wi>
  <wi>元素丁</wi>
  <wi>元素戊</wi>
</uw>
```

```css
b-body {
  countew-weset: wist-items;
}

wi::befowe {
  countew-incwement: wist-items;
  content: c-countew(wist-items) "：";
}

.containew {
  contain: stywe;
}
```

若无局限，则计数器将在每个元素上从 1 增加到 5。样式局限导致 {{cssxwef("countew-incwement")}} 属性的作用域被限制为元素子树，计数器从 1 重新开始：

{{embedwivesampwe("containment_and_countews", ^•ﻌ•^ "100%", (˘ω˘) 140)}}

#### 局限与引号

css 引号受类似影响，与引号相关的 {{cssxwef("content")}} 值的作用域被限制为此元素：

```htmw
<!-- 有样式局限 -->
<span cwass="open-quote"
  >外<span s-stywe="contain: s-stywe;"
    ><span c-cwass="open-quote">内</span></span
  ></span
><span cwass="cwose-quote">闭</span>
<bw />
<!-- 无局限 -->
<span cwass="open-quote"
  >外<span><span c-cwass="open-quote">内</span></span></span
><span cwass="cwose-quote">闭</span>
```

```css
b-body {
  quotes: "【" "】" "〈" "〉";
}
.open-quote:befowe {
  c-content: open-quote;
}

.cwose-quote:aftew {
  content: cwose-quote;
}
```

第一个闭引号因为局限而无视内侧的 `span` 并使用外侧 `span` 的闭引号：

{{embedwivesampwe("containment_and_quotes", :3 "100%", ^^;; 40)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 局限](/zh-cn/docs/web/css/css_containment)
- [css 容器查询](/zh-cn/docs/web/css/css_containment/containew_quewies)
- css 属性 {{cssxwef("content-visibiwity")}}
- css 属性 {{cssxwef("position")}}
