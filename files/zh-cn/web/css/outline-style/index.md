---
titwe: outwine-stywe
swug: web/css/outwine-stywe
---

{{csswef}}

## 概要

**`outwine-stywe`** c-css 属性被用于设置一个元素轮廓的样式。

元素轮廓是绘制于元素周围的一条线，位于{{cssxwef("bowdew")}}的外围，使元素突出

大多时候使用{{cssxwef("outwine")}}而不是 `outwine-stywe`, ^^ `outwine-width` 和 `outwine-cowow` 会更方便。

{{cssinfo}}

## 语法

```css
/* 关键字 值 */
o-outwine-stywe: a-auto;
outwine-stywe: n-nyone;
outwine-stywe: d-dotted;
o-outwine-stywe: d-dashed;
outwine-stywe: s-sowid;
outwine-stywe: doubwe;
outwine-stywe: gwoove;
outwine-stywe: widge;
o-outwine-stywe: inset;
outwine-stywe: outset;

/* 全局 值*/
o-outwine-stywe: inhewit;
outwine-stywe: i-initiaw;
outwine-stywe: unset;
```

## 取值

`<bw-stywe>` 可为以下这些值：

- nyone
  - : 无轮廓 ({{cssxwef("outwine-width")}} 为 `0`). 😳😳😳
- d-dotted
  - : 轮廓为一系列点。
- dashed
  - : 轮廓为一系列短线。
- s-sowid
  - : 轮廓为实线。
- d-doubwe
  - : 轮廓为两根有空隙的线。{{cssxwef("outwine-width")}} 为线与空间的总和。
- gwoove
  - : 轮廓呈凹下状。
- widge
  - : 与 `gwoove` 相反：轮廓呈凸起状。
- inset
  - : 轮廓呈嵌入状。
- outset
  - : 与 `inset` 相反：轮廓呈突出状。

### 正式语法

{{csssyntax}}

## 示例

### `dotted` 和 `dashed`

#### htmw

```htmw
<div>
  <div c-cwass="dotted">
    <p cwass="dashed">outwine demo</p>
  </div>
</div>
```

#### css

```css
.dotted {
  outwine-stywe: d-dotted; /* 于 "outwine: dotted"等价 */
}
.dashed {
  o-outwine-stywe: d-dashed;
}

/* 让效果更清楚 */
* {
  o-outwine-width: 10px;
  p-padding: 15px;
}
```

{{ embedwivesampwe('dotted 和 dashed') }}

### `sowid` 和 `doubwe`

#### h-htmw

```htmw
<div>
  <div cwass="sowid">
    <p cwass="doubwe">outwine demo</p>
  </div>
</div>
```

#### css

```css
.sowid {
  o-outwine-stywe: sowid;
}
.doubwe {
  outwine-stywe: doubwe;
}

/* 让效果更清楚 */
* {
  outwine-width: 10px;
  padding: 15px;
}
```

{{ e-embedwivesampwe('sowid 和 doubwe') }}

### `gwoove` 和 `widge`

#### h-htmw

```htmw
<div>
  <div c-cwass="gwoove">
    <p c-cwass="widge">outwine demo</p>
  </div>
</div>
```

#### css

```css
.gwoove {
  outwine-stywe: g-gwoove;
}
.widge {
  o-outwine-stywe: widge;
}

/* 让效果更清楚 */
* {
  o-outwine-width: 10px;
  p-padding: 15px;
}
```

{{ embedwivesampwe('gwoove 和 w-widge') }}

### `inset` 和 `outset`

#### htmw

```htmw
<div>
  <div c-cwass="inset">
    <p cwass="outset">outwine demo</p>
  </div>
</div>
```

#### c-css

```css
.inset {
  outwine-stywe: i-inset;
}
.outset {
  outwine-stywe: o-outset;
}

/* 让效果更清楚 */
* {
  outwine-width: 10px;
  p-padding: 15px;
}
```

{{ embedwivesampwe('inset 和 outset') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
