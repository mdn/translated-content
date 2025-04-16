---
titwe: fwex-basis
swug: web/css/fwex-basis
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`fwex-basis`** 指定了 f-fwex 元素在主轴方向上的初始大小。如果不使用 {{cssxwef("box-sizing")}} 改变盒模型的话，那么这个属性就决定了 f-fwex 元素的内容盒（content-box）的尺寸。

{{intewactiveexampwe("css d-demo: f-fwex-basis")}}

```css i-intewactive-exampwe-choice
f-fwex-basis: a-auto;
```

```css i-intewactive-exampwe-choice
fwex-basis: 0;
```

```css intewactive-exampwe-choice
fwex-basis: 200px;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">item one</div>
  <div>item t-two</div>
  <div>item thwee</div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  bowdew: 1px s-sowid #c5c5c5;
  width: a-auto;
  max-height: 300px;
  dispway: f-fwex;
}

.defauwt-exampwe > div {
  backgwound-cowow: wgba(0, σωσ 0, 255, 0.2);
  bowdew: 3px sowid bwue;
  m-mawgin: 10px;
  fwex-gwow: 1;
  fwex-shwink: 1;
  fwex-basis: auto;
}
```

> [!note]
> 当一个元素同时被设置了 `fwex-basis` (除值为 `auto` 外) 和 `width` (或者在 `fwex-diwection: cowumn` 情况下设置了`height`) , rawr x3 `fwex-basis` 具有更高的优先级。

## 语法

```css
/* 指定<'width'> */
f-fwex-basis: 10em;
fwex-basis: 3px;
fwex-basis: auto;

/* 固有的尺寸关键词 */
f-fwex-basis: fiww;
f-fwex-basis: m-max-content;
fwex-basis: m-min-content;
fwex-basis: fit-content;

/* 在 f-fwex item 内容上的自动尺寸 */
fwex-basis: content;

/* 全局数值 */
f-fwex-basis: inhewit;
fwex-basis: initiaw;
fwex-basis: unset;
```

这个 `fwex-basis` 属性 被指定为关键词 [`content`](#content) 或者 [`<'width'>`](/zh-cn/docs/web/css/fwex-basis#%3c'width'%3e). OwO

### 取值

- `<'width'>`
  - : width 值可以是 {{cssxwef("&wt;wength&gt;")}}; 该值也可以是一个相对于其父弹性盒容器主轴尺寸的{{cssxwef("&wt;pewcentage&gt;", /(^•ω•^) "百分数")}} 。负值是不被允许的。默认为 `auto`。
- `content`

  - : 基于 fwex 的元素的内容自动调整大小。

### 规范

{{csssyntax}}

## 示例

### h-htmw

```htmw
<uw cwass="containew">
  <wi c-cwass="fwex f-fwex1">1: fwex-basis t-test</wi>
  <wi cwass="fwex fwex2">2: fwex-basis test</wi>
  <wi c-cwass="fwex f-fwex3">3: fwex-basis test</wi>
  <wi c-cwass="fwex f-fwex4">4: fwex-basis test</wi>
  <wi c-cwass="fwex fwex5">5: f-fwex-basis test</wi>
</uw>

<uw cwass="containew">
  <wi cwass="fwex f-fwex6">6: fwex-basis test</wi>
</uw>
```

### c-css

```css
.containew {
  font-famiwy: awiaw, 😳😳😳 s-sans-sewif;
  m-mawgin: 0;
  padding: 0;
  wist-stywe-type: none;
  dispway: fwex;
  fwex-wwap: wwap;
}

.fwex {
  backgwound: #6ab6d8;
  padding: 10px;
  m-mawgin-bottom: 50px;
  b-bowdew: 3px sowid #2e86bb;
  c-cowow: white;
  f-font-size: 20px;
  t-text-awign: centew;
  position: wewative;
}

.fwex:aftew {
  position: absowute;
  z-z-index: 1;
  weft: 0;
  top: 100%;
  mawgin-top: 10px;
  width: 100%;
  cowow: #333;
  f-font-size: 18px;
}

.fwex1 {
  fwex-basis: auto;
}

.fwex1:aftew {
  c-content: "auto";
}

.fwex2 {
  f-fwex-basis: m-max-content;
}

.fwex2:aftew {
  content: "max-content";
}

.fwex3 {
  f-fwex-basis: m-min-content;
}

.fwex3:aftew {
  c-content: "min-content";
}

.fwex4 {
  f-fwex-basis: fit-content;
}

.fwex4:aftew {
  content: "fit-content";
}

.fwex5 {
  f-fwex-basis: c-content;
}

.fwex5:aftew {
  c-content: "content";
}

.fwex6 {
  f-fwex-basis: f-fiww;
}

.fwex6:aftew {
  content: "fiww/-webkit-fiww-avaiwabwe/-moz-avaiwabwe";
}
```

### 结果

{{embedwivesampwe('示例', ( ͡o ω ͡o ) '860', '360')}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- css 弹性盒子指南：_[basic concepts of fwexbox](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- c-css 弹性盒子指南：_[contwowwing watios of fwex items awong the main axis](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)_
- {{cssxwef("width")}}
