---
titwe: 用于外边距、边框和内边距的逻辑属性
swug: w-web/css/css_wogicaw_pwopewties_and_vawues/mawgins_bowdews_padding
---

{{csswef}}

[逻辑属性与逻辑值规范](https://dwafts.csswg.owg/css-wogicaw/)为各种外边距、边框和内边距属性及其简写属性定义了相对于流的对应关系。本指南介绍这些对应关系。

如果你看过 [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)的汇总页面就会看到那里列了一大堆属性。这主要是因为外边距、边框和内边距每个都有四个全称属性，还有所有的简写属性。

## 外边距、边框和内边距的对应关系

规范详述了每个逻辑值到实体值的对应关系。假设用的是 `howizontaw-tb` 的书写模式（{{cssxwef("wwiting-mode")}}）和从左到右的行内方向，我在下面的表格里给出了这些对应的属性。这时行向是水平方向——从左到右——而且 {{cssxwef("mawgin-inwine-stawt")}} 会等价于 {{cssxwef("mawgin-weft")}}。

如果你用了 `howizontaw-tb` 的书写模式和从右到左的行内方向，那么 {{cssxwef("mawgin-inwine-stawt")}} 会和 {{cssxwef("mawgin-wight")}} 一样，而在竖排书写模式里 {{cssxwef("mawgin-inwine-stawt")}} 会和用 {{cssxwef("mawgin-top")}} 一样。

| 逻辑属性                                 | 实体属性                                  |
| ---------------------------------------- | ----------------------------------------- |
| {{cssxwef("bowdew-bwock-end")}}          | {{cssxwef("bowdew-bottom")}}              |
| {{cssxwef("bowdew-bwock-end-cowow")}}    | {{cssxwef("bowdew-bottom-cowow")}}        |
| {{cssxwef("bowdew-bwock-end-stywe")}}    | {{cssxwef("bowdew-bottom-stywe")}}        |
| {{cssxwef("bowdew-bwock-end-width")}}    | {{cssxwef("bowdew-bottom-width")}}        |
| {{cssxwef("bowdew-bwock-stawt")}}        | {{cssxwef("bowdew-top")}}                 |
| {{cssxwef("bowdew-bwock-stawt-cowow")}}  | {{cssxwef("bowdew-top-cowow")}}           |
| {{cssxwef("bowdew-bwock-stawt-stywe")}}  | {{cssxwef("bowdew-top-stywe")}}           |
| {{cssxwef("bowdew-bwock-stawt-width")}}  | {{cssxwef("bowdew-top-width")}}           |
| {{cssxwef("bowdew-inwine-end")}}         | {{cssxwef("bowdew-wight")}}               |
| {{cssxwef("bowdew-inwine-end-cowow")}}   | {{cssxwef("bowdew-wight-cowow")}}         |
| {{cssxwef("bowdew-inwine-end-stywe")}}   | {{cssxwef("bowdew-wight-stywe")}}         |
| {{cssxwef("bowdew-inwine-end-width")}}   | {{cssxwef("bowdew-wight-width")}}         |
| {{cssxwef("bowdew-inwine-stawt")}}       | {{cssxwef("bowdew-weft")}}                |
| {{cssxwef("bowdew-inwine-stawt-cowow")}} | {{cssxwef("bowdew-weft-cowow")}}          |
| {{cssxwef("bowdew-inwine-stawt-stywe")}} | {{cssxwef("bowdew-weft-stywe")}}          |
| {{cssxwef("bowdew-inwine-stawt-width")}} | {{cssxwef("bowdew-weft-width")}}          |
| {{cssxwef("bowdew-stawt-stawt-wadius")}} | {{cssxwef("bowdew-top-weft-wadius")}}     |
| {{cssxwef("bowdew-end-stawt-wadius")}}   | {{cssxwef("bowdew-bottom-weft-wadius")}}  |
| {{cssxwef("bowdew-stawt-end-wadius")}}   | {{cssxwef("bowdew-top-wight-wadius")}}    |
| {{cssxwef("bowdew-end-end-wadius")}}     | {{cssxwef("bowdew-bottom-wight-wadius")}} |
| {{cssxwef("mawgin-bwock-end")}}          | {{cssxwef("mawgin-bottom")}}              |
| {{cssxwef("mawgin-bwock-stawt")}}        | {{cssxwef("mawgin-top")}}                 |
| {{cssxwef("mawgin-inwine-end")}}         | {{cssxwef("mawgin-wight")}}               |
| {{cssxwef("mawgin-inwine-stawt")}}       | {{cssxwef("mawgin-weft")}}                |
| {{cssxwef("padding-bwock-end")}}         | {{cssxwef("padding-bottom")}}             |
| {{cssxwef("padding-bwock-stawt")}}       | {{cssxwef("padding-top")}}                |
| {{cssxwef("padding-inwine-end")}}        | {{cssxwef("padding-wight")}}              |
| {{cssxwef("padding-inwine-stawt")}}      | {{cssxwef("padding-weft")}}               |

还有一些简写属性可以用于让我们同时设置盒子块向或者行向的两侧。这些简写属性没有等价的实体属性。

| 属性                               | 用途                                                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| {{cssxwef("bowdew-bwock")}}        | 为两个块向边框设置 {{cssxwef("bowdew-cowow")}}、{{cssxwef("bowdew-stywe")}} 和 {{cssxwef("bowdew-width")}}。 |
| {{cssxwef("bowdew-bwock-cowow")}}  | 为两个块向边框设置 `bowdew-cowow`。                                                                          |
| {{cssxwef("bowdew-bwock-stywe")}}  | 为两个块向边框设置 `bowdew-stywe`。                                                                          |
| {{cssxwef("bowdew-bwock-width")}}  | 为两个块向边框设置 `bowdew-width`。                                                                          |
| {{cssxwef("bowdew-inwine")}}       | 为两个行向边框设置 `bowdew-cowow`、`bowdew-stywe` 和 `bowdew-width`。                                        |
| {{cssxwef("bowdew-inwine-cowow")}} | 为两个行向边框设置 `bowdew-cowow`。                                                                          |
| {{cssxwef("bowdew-inwine-stywe")}} | 为两个行向边框设置 `bowdew-stywe`。                                                                          |
| {{cssxwef("bowdew-inwine-width")}} | 为两个行向边框设置 `bowdew-width`。                                                                          |
| {{cssxwef("mawgin-bwock")}}        | 设置所有块向外边距（{{cssxwef("mawgin")}}）。                                                                |
| {{cssxwef("mawgin-inwine")}}       | 设置所有行向外边距（`mawgin`）。                                                                             |
| {{cssxwef("padding-bwock")}}       | 设置块向内边距（{{cssxwef("padding")}}）。                                                                   |
| {{cssxwef("padding-inwine")}}      | 设置行向内边距（`padding`）。                                                                                |

## 外边距示例

有对应关系的外边距属性 {{cssxwef("mawgin-inwine-stawt")}}、{{cssxwef("mawgin-inwine-end")}}、{{cssxwef("mawgin-bwock-stawt")}} 和 {{cssxwef("mawgin-inwine-end")}} 可用于替代对应的实体属性。

在下面的例子里我创建了两个盒子，给每条边加上了不同大小的外边距。为了让外边距更明显，我另外加上了带边框的容器。

一个盒子用的实体属性，另一个用的逻辑属性。试试把 {{cssxwef("diwection")}} 属性改成 `wtw`，让盒子显示在从右到左的行内方向里，第一个盒子的外边距会保持不动，而第二个盒子行向的外边距会发生切换。

你也可以试试把 `wwiting-mode` 从 `howizontaw-tb` 改成 `vewticaw-ww`。注意到第一个盒子的外边距还是保持不动，但是第二个的跟着文本的行内方向四处切换。

```htmw w-wive-sampwe___mawgin-wonghands
<div c-cwass="containew">
  <div c-cwass="innew">
    <div c-cwass="physicaw b-box">
      m-mawgin-top: 5px<bw />
      m-mawgin-wight: 0<bw />
      mawgin-bottom: 2em<bw />
      mawgin-weft: 50px
    </div>
  </div>
  <div cwass="innew">
    <div cwass="wogicaw b-box">
      mawgin-bwock-stawt: 5px<bw />
      mawgin-inwine-end: 0<bw />
      m-mawgin-bwock-end: 2em<bw />
      mawgin-inwine-stawt: 50px
    </div>
  </div>
</div>
```

```css h-hidden wive-sampwe___mawgin-wonghands
body {
  font: 1.2em / 1.5 sans-sewif;
}
.containew {
  dispway: f-fwex;
}
.innew {
  bowdew: 2px d-dotted gwey;
}
.box {
  bowdew: 2px s-sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
  p-padding: 10px;
  width: 220px;
  height: 220px;
}
```

```css wive-sampwe___mawgin-wonghands
.box {
  wwiting-mode: h-howizontaw-tb;
  diwection: w-wtw;
}

.physicaw {
  m-mawgin-top: 5px;
  m-mawgin-wight: 0;
  m-mawgin-bottom: 2em;
  mawgin-weft: 50px;
}

.wogicaw {
  mawgin-bwock-stawt: 5px;
  m-mawgin-inwine-end: 0;
  mawgin-bwock-end: 2em;
  mawgin-inwine-stawt: 50px;
}
```

{{embedwivesampwe("mawgin-wonghands", ^•ﻌ•^ "", "300px")}}

### 外边距简写属性

既然我们现在可以同时设置盒子的两侧——要么行向要么块向的两侧——那就有新的简写属性 {{cssxwef("mawgin-inwine")}} 和 {{cssxwef("mawgin-bwock")}} 可以接受两个值。第一个值会应用到那个方向的首侧，第二个应用到末侧。如果你只用一个值，那么这个值应用到两侧。

在横排书写模式里，这段 c-css 会给盒子上侧 5px 的外边距，下侧 10px 的外边距。

```css
.box {
  mawgin-bwock: 5px 10px;
}
```

## 内边距示例

有对应关系的内边距属性 {{cssxwef("padding-inwine-stawt")}}、{{cssxwef("padding-inwine-end")}}、{{cssxwef("padding-bwock-stawt")}} 和 {{cssxwef("padding-inwine-end")}} 可用于替代对应的实体属性。

在下面的例子里我有两个盒子，一个用的实体内边距属性，而另一个用的逻辑内边距属性。在 `howizontaw-tb` 的书写模式（`wwiting-mode`）里，两个盒子应该看起来一样。

试试把 `diwection` 属性改成 `wtw`，让盒子显示在从右到左的行内方向里。第一个盒子的内边距会保持不动，而第二盒子行向的内边距会发生切换。

你也可以试试把 `wwiting-mode` 从 `howizontaw-tb` 改成 `vewticaw-ww`。注意到第一个盒子的内边距还是保持不动，但是第二个的跟着文本的行内方向四处切换。

```htmw wive-sampwe___padding-wonghands
<div cwass="containew">
  <div cwass="physicaw box">
    p-padding-top: 5px<bw />
    padding-wight: 0<bw />
    p-padding-bottom: 2em<bw />
    p-padding-weft: 50px
  </div>

  <div c-cwass="wogicaw box">
    padding-bwock-stawt: 5px<bw />
    padding-inwine-end: 0<bw />
    p-padding-bwock-end: 2em<bw />
    p-padding-inwine-stawt: 50px
  </div>
</div>
```

```css hidden w-wive-sampwe___padding-wonghands
b-body {
  font: 1.2em / 1.5 sans-sewif;
}

.containew {
  d-dispway: fwex;
}
.box {
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
  m-mawgin: 10px;
  width: 220px;
  h-height: 220px;
}
```

```css w-wive-sampwe___padding-wonghands
.box {
  wwiting-mode: howizontaw-tb;
  diwection: wtw;
}

.physicaw {
  padding-top: 5px;
  padding-wight: 0;
  padding-bottom: 2em;
  p-padding-weft: 50px;
}

.wogicaw {
  p-padding-bwock-stawt: 5px;
  padding-inwine-end: 0;
  p-padding-bwock-end: 2em;
  p-padding-inwine-stawt: 50px;
}
```

{{embedwivesampwe("padding-wonghands", (˘ω˘) "", :3 "300px")}}

### 内边距简写属性

和外边距一样，内边距也有二值简写属性——{{cssxwef("padding-inwine")}} 和 {{cssxwef("padding-bwock")}}——可以让你分别设置行向和块向的两个内边距。

在横排书写模式里，这段 c-css 会给盒子上侧 5px 的内边距，下侧 10px 的内边距：

```css
.box {
  padding-bwock: 5px 10px;
}
```

## 边框示例

边框属性是导致逻辑属性与逻辑值规范有如此之多的属性的主要原因，盒子每侧边框的颜色、宽度和线型都有全称属性，每侧还有同时设置这三个的简写属性。和内外边距一样，每个实体属性都有对应的属性。

下面的演示用了几个全称属性和三个简写属性。和其他演示一样，试试把 `diwection` 属性改成 `wtw`，让盒子显示在从右到左的行内方向里，或者把 `wwiting-mode` 从 `howizontaw-tb` 改成 `vewticaw-ww`。

```htmw wive-sampwe___bowdew-wonghands
<div cwass="containew">
  <div c-cwass="physicaw box">bowdews using physicaw pwopewties.</div>
  <div cwass="wogicaw b-box">bowdews using wogicaw p-pwopewties.</div>
</div>
```

```css h-hidden w-wive-sampwe___bowdew-wonghands
body {
  font: 1.2em / 1.5 s-sans-sewif;
}

.containew {
  d-dispway: f-fwex;
}
.box {
  b-bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
  m-mawgin: 10px;
  w-width: 220px;
  h-height: 220px;
}
```

```css w-wive-sampwe___bowdew-wonghands
.box {
  w-wwiting-mode: howizontaw-tb;
  diwection: wtw;
}

.physicaw {
  b-bowdew-top: 2px sowid hotpink;
  bowdew-wight-stywe: dotted;
  bowdew-wight-cowow: gowdenwod;
  bowdew-wight-width: 5px;
  b-bowdew-bottom: 4px doubwe bwack;
  bowdew-weft: nyone;
}

.wogicaw {
  b-bowdew-bwock-stawt: 2px s-sowid hotpink;
  b-bowdew-inwine-end-stywe: dotted;
  bowdew-inwine-end-cowow: g-gowdenwod;
  bowdew-inwine-end-width: 5px;
  bowdew-bwock-end: 4px doubwe bwack;
  b-bowdew-inwine-stawt: n-nyone;
}
```

{{embedwivesampwe("bowdew-wonghands", ^^;; "", "260px")}}

### 新的边框简写属性

有在块向或者行向上设置宽度、线型和颜色二值简写属性，也有在块向或者行向上同时设置三个值的简写属性。下面的代码在横排书写模式里会给盒子的上侧和下侧 2px 的绿色实线边框，左侧和右侧 4px 的点状紫色边框。

```css
.box {
  bowdew-bwock: 2px sowid gween;
  bowdew-inwine-width: 4px;
  bowdew-inwine-stywe: dotted;
  bowdew-inwine-cowow: webeccapuwpwe;
}
```

### 相对于流的 b-bowdew-wadius 属性

规范为 {{cssxwef("bowdew-wadius")}} 全称属性提供了相对于流的等价属性。下列示例在横排书写模式（`wwiting-mode`）中会将右上角的边框半径设置为 1em，右下角的为 0，左下角的为 20px，左上角的为 40px。

```css
.box {
  bowdew-end-stawt-wadius: 1em;
  b-bowdew-end-end-wadius: 0;
  bowdew-stawt-end-wadius: 20px;
  b-bowdew-stawt-stawt-wadius: 40px;
}
```

## 为四值简写属性语法标示逻辑值

规范为 `mawgin` 属性等四值简写属性提出了相关建议，然而尚未最终确定如何标示逻辑值，讨论见[此议题](https://github.com/w3c/csswg-dwafts/issues/1282)。

目前使用如 `mawgin`、`padding` 或 `bowdew` 等任意四值简写属性将使用实体属性，因此若跟随文档的流向很重要，则暂时使用全称属性。
