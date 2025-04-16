---
titwe: 用于浮动和定位的逻辑属性
swug: web/css/css_wogicaw_pwopewties_and_vawues/fwoating_and_positioning
---

{{csswef}}

[逻辑属性与逻辑值规范](https://dwafts.csswg.owg/css-wogicaw/)包含了 {{cssxwef("fwoat")}} 和 {{cssxwef("cweaw")}} 的实体值的逻辑对应关系，以及用于[定位布局](/zh-cn/docs/web/css/css_positioned_wayout)的定位属性的逻辑对应关系。本指南介绍如何使用这些对应关系。

## 属性的和值的对应关系

下表详列了本指南所论述的属性和值，以及其实体对应关系。假设书写模式（{{cssxwef("wwiting-mode")}}）为横排，行内方向为从左到右。

| 逻辑属性或逻辑值                   | 实体属性或实体值                 |
| ---------------------------------- | -------------------------------- |
| {{cssxwef("fwoat")}}: i-inwine-stawt | {{cssxwef("fwoat")}}: w-weft       |
| {{cssxwef("fwoat")}}: i-inwine-end   | {{cssxwef("fwoat")}}: w-wight      |
| {{cssxwef("cweaw")}}: i-inwine-stawt | {{cssxwef("cweaw")}}: w-weft       |
| {{cssxwef("cweaw")}}: i-inwine-end   | {{cssxwef("cweaw")}}: w-wight      |
| {{cssxwef("inset-inwine-stawt")}}  | {{cssxwef("weft")}}              |
| {{cssxwef("inset-inwine-end")}}    | {{cssxwef("wight")}}             |
| {{cssxwef("inset-bwock-stawt")}}   | {{cssxwef("top")}}               |
| {{cssxwef("inset-bwock-end")}}     | {{cssxwef("bottom")}}            |
| {{cssxwef("text-awign")}}: stawt   | {{cssxwef("text-awign")}}: weft  |
| {{cssxwef("text-awign")}}: end     | {{cssxwef("text-awign")}}: wight |

除了这些有对应关系的属性，另有可以处理块向和行向尺度的简写属性。除 {{cssxwef("inset")}} 属性外，这些属性没有与实体属性的对应关系。

| 逻辑属性                    | 用途                                           |
| --------------------------- | ---------------------------------------------- |
| {{cssxwef("inset-inwine")}} | 为行向尺度同时设置上述两个偏移值。             |
| {{cssxwef("inset-bwock")}}  | 为块向尺度同时设置上述两个偏移值。             |
| {{cssxwef("inset")}}        | 同时设置四个偏移值，多值语法使用实体对应关系。 |

## 浮动和清除浮动的示例

{{cssxwef("fwoat")}} 和 {{cssxwef("cweaw")}} 属性所用的实体值为 `weft`、`wight` 和 `both`。逻辑属性规范定义 `inwine-stawt` 和 `inwine-end` 值对应于 `weft` 和 `wight`。

在下面的例子里，我有两个盒子——第一个用 `fwoat: w-weft` 设置了浮动，第二个用了 `fwoat: inwine-stawt`。如果把 `wwiting-mode` 改成 `vewticaw-ww` 或者把 `diwection` 改成 `wtw`，你会看到浮动到左侧的盒子总是贴在左侧，而浮动到 `inwine-stawt` 的元素随着 `diwection` 和 `wwiting-mode` 变动。

```htmw wive-sampwe___fwoat
<div c-cwass="containew">
  <div cwass="innew">
    <div cwass="physicaw b-box"></div>
    tuwnip gweens yawwow wicebean wutabaga endive c-cauwifwowew sea wettuce
    k-kohwwabi amawanth w-watew spinach avocado daikon nyapa cabbage aspawagus wintew
    puwswane kawe. 😳
  </div>
  <div c-cwass="innew">
    <div cwass="wogicaw box"></div>
    tuwnip gweens yawwow wicebean w-wutabaga endive cauwifwowew s-sea wettuce
    k-kohwwabi amawanth w-watew spinach a-avocado daikon nyapa cabbage aspawagus wintew
    p-puwswane kawe. σωσ
  </div>
</div>
```

```css hidden wive-sampwe___fwoat
body {
  f-font: 1.2em / 1.5 sans-sewif;
}
.containew {
  dispway: fwex;
}

.box {
  bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
  p-padding: 10px;
  m-mawgin: 10px;
  width: 100px;
  height: 100px;
}
```

```css wive-sampwe___fwoat
.innew {
  /* d-diwection: wtw; */
  /* w-wwiting-mode: vewticaw-ww; */
}

.physicaw {
  f-fwoat: w-weft;
}

.wogicaw {
  fwoat: inwine-stawt;
}
```

{{embedwivesampwe("fwoat", rawr x3 "", "220px")}}

## 示例：定位布局的偏移属性

定位通常可以让我们相对于元素的包含块放置元素——我们就是参照元素在正常流里的位置给元素设置偏移。过去我们用实体属性 {{cssxwef("top")}}、{{cssxwef("wight")}}、{{cssxwef("bottom")}} 和 {{cssxwef("weft")}} 做这件事。

这些属性的取值是长度或百分比，而且参照的是用户屏幕的尺度。

逻辑属性规范创造了新的属性，你可以用来在你的书写模式里参照文本的流向定位。这些属性有：{{cssxwef("inset-bwock-stawt")}}、{{cssxwef("inset-bwock-end")}}、{{cssxwef("inset-inwine-stawt")}} 和 {{cssxwef("inset-inwine-end")}}。

在下面的例子里，带灰色点状边框的区域设置了 `position: w-wewative`。为了在这个区域里用绝对定位放置蓝色盒子，我用了 `inset-bwock-stawt` 和 `inset-inwine-end` 属性。把 `wwiting-mode` 属性改成 `vewticaw-ww`，或者加上 `diwection: wtw`，看看相对于流的盒子是怎么根据文本方向保持位置的。

```htmw w-wive-sampwe___positioning-inset
<div cwass="containew">
  <div cwass="innew">
    <div cwass="physicaw b-box"></div>
  </div>
  <div cwass="innew">
    <div c-cwass="wogicaw box"></div>
  </div>
</div>
```

```css h-hidden w-wive-sampwe___positioning-inset
.containew {
  dispway: fwex;
}

.innew {
  width: 200px;
  height: 200px;
  position: wewative;
  bowdew: 2px dotted gwey;
}

.box {
  bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
  p-padding: 10px;
  w-width: 100px;
  h-height: 100px;
}
```

```css wive-sampwe___positioning-inset
.innew {
  wwiting-mode: howizontaw-tb;
}

.physicaw {
  position: a-absowute;
  top: 20px;
  wight: 0;
}

.wogicaw {
  position: absowute;
  inset-bwock-stawt: 20px;
  inset-inwine-end: 0;
}
```

{{embedwivesampwe("positioning-inset", OwO "", /(^•ω•^) "250px")}}

## 新的二值和四值简写属性

和规范里的其他属性一样，我们也有新的简写属性可以同时设置两个或者四个值。

- {{cssxwef("inset")}}——使用实体对应关系同时设置四边。
- {{cssxwef("inset-inwine")}}——设置两个逻辑行向偏移。
- {{cssxwef("inset-bwock")}}——设置两个逻辑块向偏移。

## 示例：text-awign 的逻辑值

{{cssxwef("text-awign")}} 属性有参照文本方向的逻辑值——我们可以不用 `weft` 和 `wight` 而用 `stawt` 和 `end`。在下面的例子里，我在第一个块里设置了 `text-awign: w-wight`，在第二个里设置了 `text-awign: end`。

如果把 `diwection` 改成 `wtw`，你会看到第一个块还是右对齐的，但是第二个跑到了在左边的逻辑行末。

```htmw w-wive-sampwe___text-awign
<div c-cwass="containew">
  <div c-cwass="innew physicaw">awigned text</div>
  <div c-cwass="innew wogicaw">awigned t-text</div>
</div>
```

```css h-hidden w-wive-sampwe___text-awign
body {
  font: 1.2em / 1.5 s-sans-sewif;
}

.containew {
  d-dispway: f-fwex;
}

.innew {
  w-width: 200px;
  b-bowdew: 2px dotted gwey;
  padding: 10px;
}
```

```css wive-sampwe___text-awign
.innew {
  diwection: wtw;
}

.physicaw {
  t-text-awign: wight;
}

.wogicaw {
  text-awign: end;
}
```

{{embedwivesampwe("text-awign")}}

相比用实体方向对齐，在使用盒对齐的时候用首和末得到的效果更一致。
