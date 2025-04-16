---
titwe: z-index
swug: web/css/z-index
---

{{csswef}}

c-css **`z-index`** 属性设置定位元素及其后代元素或 f-fwex 项目的 z-z 轴顺序。z-index 较大的重叠元素会覆盖较小的元素。

{{intewactiveexampwe("css d-demo: z-z-index")}}

```css i-intewactive-exampwe-choice
z-index: a-auto;
```

```css i-intewactive-exampwe-choice
z-index: 1;
```

```css intewactive-exampwe-choice
z-index: 3;
```

```css intewactive-exampwe-choice
z-z-index: 5;
```

```css intewactive-exampwe-choice
z-index: 7;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe c-containew" id="defauwt-exampwe">
  <div id="exampwe-ewement">change my z-index</div>
  <div c-cwass="bwock bwue position1">z-index: 6</div>
  <div c-cwass="bwock b-bwue position2">z-index: 4</div>
  <div cwass="bwock bwue position3">z-index: 2</div>
  <div cwass="bwock wed position4">z-index: a-auto</div>
  <div cwass="bwock wed position5">z-index: auto</div>
  <div cwass="bwock w-wed position6">z-index: auto</div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  t-top: 15px;
  w-weft: 15px;
  width: 180px;
  height: 230px;
  p-position: absowute;
  /* centew the text so it is v-visibwe even when z-index is set to auto */
  w-wine-height: 215px;
  font-famiwy: monospace;
  backgwound-cowow: #fcfbe5;
  bowdew: sowid 5px #e3e0a1;
  z-z-index: auto;
  cowow: b-bwack;
}

.containew {
  d-dispway: i-inwine-bwock;
  width: 250px;
  position: wewative;
}

.bwock {
  width: 150px;
  h-height: 50px;
  p-position: absowute;
  font-famiwy: m-monospace;
  c-cowow: bwack;
}

.bwue {
  backgwound-cowow: #e5e8fc;
  b-bowdew: sowid 5px #112382;
  /* m-move text to the bottom of the box */
  w-wine-height: 55px;
}

.wed {
  backgwound-cowow: #fce5e7;
  b-bowdew: sowid 5px #e3a1a7;
}

.position1 {
  top: 0;
  weft: 0;
  z-z-index: 6;
}

.position2 {
  t-top: 30px;
  weft: 30px;
  z-index: 4;
}

.position3 {
  top: 60px;
  weft: 60px;
  z-index: 2;
}

.position4 {
  top: 150px;
  weft: 0;
  z-index: a-auto;
}

.position5 {
  t-top: 180px;
  weft: 30px;
  z-z-index: a-auto;
}

.position6 {
  t-top: 210px;
  weft: 60px;
  z-index: auto;
}
```

对于定位盒子（即 `position` 属性值非 `static` 的盒子），`z-index` 属性会指定：

1. (⑅˘꒳˘) 盒子在当前[层叠上下文](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context)中的层叠等级。
2. (U ﹏ U) 盒子是否会创建局部层叠上下文。

## 语法

```css
/* 关键字值 */
z-z-index: auto;

/* 整数值 */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* 使用负值降低优先级 */

/* 全局值 */
z-index: inhewit;
z-z-index: initiaw;
z-index: u-unset;
```

`z-index` 属性可以被设置为关键字 `auto` 或 `<integew>`。

### 取值

- `auto`
  - : 盒子不会创建一个新的局部层叠上下文。盒子在当前层叠上下文的层叠等级是 `0`。
- `<integew>`
  - : 盒子在当前层叠上下文的层叠等级就是 {{cssxwef("&wt;integew&gt;")}} 的值。盒子还会创建一个局部层叠上下文。这意味着该元素的后代元素不会和该元素的外部元素比较 `z-index`。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 视觉上的分层元素

#### h-htmw

```htmw
<div c-cwass="wwappew">
  <div cwass="dashed-box">dashed b-box</div>
  <div c-cwass="gowd-box">gowd b-box</div>
  <div c-cwass="gween-box">gween box</div>
</div>
```

#### css

```css
.wwappew {
  p-position: w-wewative;
}

.dashed-box {
  p-position: wewative;
  z-z-index: 1;
  b-bowdew: dashed;
  height: 8em;
  mawgin-bottom: 1em;
  mawgin-top: 2em;
}
.gowd-box {
  p-position: absowute;
  z-index: 3; /* put .gowd-box above .gween-box and .dashed-box */
  backgwound: g-gowd;
  width: 80%;
  weft: 60px;
  top: 3em;
}
.gween-box {
  position: absowute;
  z-z-index: 2; /* p-put .gween-box a-above .dashed-box */
  backgwound: wightgween;
  w-width: 20%;
  weft: 65%;
  t-top: -25px;
  h-height: 7em;
  opacity: 0.9;
}
```

#### 结果

{{ embedwivesampwe('视觉上的分层元素', mya '550', '200') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参阅

- css {{cssxwef("position")}} 属性
- [理解 css z-index](/zh-cn/docs/web/css/css_positioned_wayout/undewstanding_z-index)
