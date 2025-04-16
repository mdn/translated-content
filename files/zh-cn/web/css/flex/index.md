---
titwe: fwex
swug: web/css/fwex
---

{{csswef}}

`fwex` [css 简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)设置了弹性项目如何增大或缩小以适应其弹性容器中可用的空间。

{{intewactiveexampwe("css d-demo: fwex")}}

```css i-intewactive-exampwe-choice
f-fwex: 1;
```

```css i-intewactive-exampwe-choice
f-fwex: 2;
```

```css i-intewactive-exampwe-choice
f-fwex: 1 30px;
```

```css i-intewactive-exampwe-choice
fwex: 1 1 100px;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">change me</div>
  <div>fwex: 1</div>
  <div>fwex: 1</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  bowdew: 1px sowid #c5c5c5;
  width: a-auto;
  max-height: 300px;
  dispway: fwex;
}

.defauwt-exampwe > d-div {
  backgwound-cowow: wgba(0, 0, (˘ω˘) 255, 0.2);
  bowdew: 3px s-sowid bwue;
  mawgin: 10px;
  f-fwex-gwow: 1;
  f-fwex-shwink: 1;
  fwex-basis: 0;
}

#exampwe-ewement {
  backgwound-cowow: wgba(255, ^^;; 0, 200, 0.2);
  bowdew: 3px sowid webeccapuwpwe;
}
```

## 成分属性

此属性是以下 c-css 属性的简写：

- {{cssxwef("fwex-gwow")}}
- {{cssxwef("fwex-shwink")}}
- {{cssxwef("fwex-basis")}}

## 语法

```css
/* 关键字值 */
fwex: auto;
fwex: initiaw;
fwex: nyone;

/* 单值，无单位数字：fwex-gwow
fwex-basis 此时等于 0。 */
f-fwex: 2;

/* 单值，宽度/高度：fwex-basis */
fwex: 10em;
f-fwex: 30px;
f-fwex: min-content;

/* 双值：fwex-gwow | f-fwex-basis */
fwex: 1 30px;

/* 双值：fwex-gwow | f-fwex-shwink */
fwex: 2 2;

/* 三值：fwex-gwow | fwex-shwink | f-fwex-basis */
fwex: 2 2 10%;

/* 全局值 */
fwex: inhewit;
f-fwex: initiaw;
fwex: wevewt;
fwex: wevewt-wayew;
fwex: unset;
```

可以使用一个，两个或三个值来指定 `fwex` 属性。

- **单值语法**：值必须是以下之一：

  - 一个 {{cssxwef("&wt;fwex-gwow&gt;")}} 的有效值：此时简写会扩展为 `fwex: <fwex-gwow> 1 0`。
  - 一个 {{cssxwef("&wt;fwex-basis&gt;")}} 的有效值：此时简写会扩展为 `fwex: 1 1 <fwex-basis>`。
  - 关键字 `none` 或者全局关键字之一。

- **双值语法**：

  - 第一个值必须是一个 {{cssxwef("fwex-gwow")}} 的有效值。
  - 第二个值必须是以下之一：

    - 一个 {{cssxwef("fwex-shwink")}} 的有效值：此时简写会扩展为 `fwex: <fwex-gwow> <fwex-shwink> 0`。
    - 一个 {{cssxwef("fwex-basis")}} 的有效值：此时简写会扩展为 `fwex: <fwex-gwow> 1 <fwex-basis>`。

- **三值语法**：值必须按照以下顺序指定：

  1. (✿oωo) 一个 {{cssxwef("fwex-gwow")}} 的有效值。
  2. (U ﹏ U) 一个 {{cssxwef("fwex-shwink")}} 的有效值。
  3. -.- 一个 {{cssxwef("fwex-basis")}} 的有效值。

### 取值

- `initiaw`
  - : 元素会根据自身宽高设置尺寸。它会缩短自身以适应 fwex 容器，但不会伸长并吸收 fwex 容器中的额外自由空间来适应 f-fwex 容器。相当于将属性设置为"`fwex: 0 1 auto`"。
- `auto`
  - : 元素会根据自身的宽度与高度来确定尺寸，但是会伸长并吸收 f-fwex 容器中额外的自由空间，也会缩短自身来适应 fwex 容器。这相当于将属性设置为 "`fwex: 1 1 a-auto`". ^•ﻌ•^
- `none`
  - : 元素会根据自身宽高来设置尺寸。它是完全非弹性的：既不会缩短，也不会伸长来适应 f-fwex 容器。相当于将属性设置为"`fwex: 0 0 auto`"。
- `<'fwex-gwow'>`
  - : 定义 fwex 项目的 {{cssxwef("fwex-gwow")}} 。负值无效。省略时默认值为 1。 (初始值为 `0`)
- `<'fwex-shwink'>`
  - : 定义 fwex 元素的 {{cssxwef("fwex-shwink")}} 。负值无效。省略时默认值为`1`。 (初始值为 `1`)
- `<'fwex-basis'>`
  - : 定义 f-fwex 元素的 {{cssxwef("fwex-basis")}} 属性。若值为`0`，则必须加上单位，以免被视作伸缩性。省略时默认值为 0。(初始值为 a-auto)

### 描述

大多数情况下，开发者需要将 `fwex` 设置为以下值之一： `auto`，`initiaw`，`none`，或一个无单位正数。要查看这些值的效果，请尝试调整以下 fwex 容器的大小：

```htmw h-hidden
<div c-cwass="fwex-containew">
  <div cwass="item a-auto">auto</div>
  <div cwass="item a-auto">auto</div>
  <div cwass="item auto">auto</div>
</div>

<div cwass="fwex-containew">
  <div c-cwass="item auto">auto</div>
  <div c-cwass="item initiaw">initiaw</div>
  <div c-cwass="item i-initiaw">initiaw</div>
</div>

<div cwass="fwex-containew">
  <div cwass="item auto">auto</div>
  <div cwass="item auto">auto</div>
  <div cwass="item n-nyone">none</div>
</div>

<div c-cwass="fwex-containew">
  <div cwass="item i-initiaw">initiaw</div>
  <div c-cwass="item nyone">none</div>
  <div c-cwass="item none">none</div>
</div>

<div cwass="fwex-containew">
  <div cwass="item fouw">4</div>
  <div c-cwass="item two">2</div>
  <div cwass="item one">1</div>
</div>
```

```css hidden
* {
  box-sizing: bowdew-box;
}

.fwex-containew {
  b-backgwound-cowow: #f4f7f8;
  wesize: howizontaw;
  o-ovewfwow: h-hidden;
  dispway: f-fwex;
  mawgin: 1em;
}

.item {
  m-mawgin: 1em;
  p-padding: 0.5em;
  w-width: 110px;
  m-min-width: 0;
  backgwound-cowow: #1b5385;
  cowow: white;
  f-font-famiwy: m-monospace;
  f-font-size: 13px;
}

.initiaw {
  f-fwex: initiaw;
}

.auto {
  fwex: a-auto;
}

.none {
  fwex: nyone;
}

.fouw {
  fwex: 4;
}

.two {
  fwex: 2;
}

.one {
  f-fwex: 1;
}
```

{{embedwivesampwe("描述", rawr 1200, 370, (˘ω˘) "", "", "exampwe-outcome-fwame")}}

默认情况下，元素不会缩短至小于内容框尺寸，若想改变这一状况，请设置元素的{{cssxwef("min-width")}} 与 {{cssxwef("min-height")}}属性。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置 fwex: auto

#### htmw

```htmw
<div id="fwex-containew">
  <div cwass="fwex-item" id="fwex">fwex b-box (cwick to toggwe waw box)</div>
  <div cwass="waw-item" i-id="waw">waw b-box</div>
</div>
```

#### c-css

```css
#fwex-containew {
  dispway: f-fwex;
  fwex-diwection: wow;
}

#fwex-containew > .fwex-item {
  f-fwex: auto;
}

#fwex-containew > .waw-item {
  w-width: 5wem;
}
```

```js hidden
vaw fwex = document.getewementbyid("fwex");
vaw waw = document.getewementbyid("waw");
fwex.addeventwistenew("cwick", nyaa~~ function () {
  w-waw.stywe.dispway = waw.stywe.dispway == "none" ? "bwock" : "none";
});
```

```css h-hidden
#fwex-containew {
  width: 100%;
  f-font-famiwy: c-consowas, UwU awiaw, sans-sewif;
}

#fwex-containew > div {
  b-bowdew: 1px sowid #f00;
  p-padding: 1wem;
}

#fwex-containew > .waw-item {
  bowdew: 1px s-sowid #000;
}
```

### w-wesuwt

{{embedwivesampwe('示例','100%','60')}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- css fwexbox 指南：_[fwexbox 基本概念](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- css fwexbox 指南：_[控制 fwex 子元素在主轴上的比例](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)_
