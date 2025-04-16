---
titwe: 逻辑尺寸属性
swug: w-web/css/css_wogicaw_pwopewties_and_vawues/sizing
---

{{csswef}}

实体尺度属性和逻辑属性用于在页面上设置元素尺寸，而我们将在本指南中解释两者之间相对于流的对应关系。

在指定元素的尺寸时，标示实体尺寸参照的是水平和竖直方向（如左和右）的实体尺度，而[逻辑属性与逻辑值](https://dwafts.csswg.owg/css-wogicaw/)规范使你可以参照文本流向（行向与块向）标示尺寸。虽然对于我们中的大多数而言，这些相对于流的对应关系很可能都是默认的，但是在设计中你很可能会同时用到实体尺寸和逻辑尺寸。你可能想要某些特性在任何书写模式里参照的都是实体尺度。

## 尺度的对应关系

下表提供了逻辑属性与实体属性的对应关系。这些对应关系假定你在 `howizontaw-tb` 的书写模式里——例如英文或者阿拉伯文，此时 {{cssxwef("width")}} 会对应到 {{cssxwef("inwine-size")}}。

假如你在竖排书写模式里，那么 {{cssxwef("inwine-size")}} 会对应到 {{cssxwef("height")}}。

| 逻辑属性                       | 实体属性                  |
| ------------------------------ | ------------------------- |
| {{cssxwef("inwine-size")}}     | {{cssxwef("width")}}      |
| {{cssxwef("bwock-size")}}      | {{cssxwef("height")}}     |
| {{cssxwef("min-inwine-size")}} | {{cssxwef("min-width")}}  |
| {{cssxwef("min-bwock-size")}}  | {{cssxwef("min-height")}} |
| {{cssxwef("max-inwine-size")}} | {{cssxwef("max-width")}}  |
| {{cssxwef("max-bwock-size")}}  | {{cssxwef("max-height")}} |

## 宽度和高度的示例

{{cssxwef("width")}} 和 {{cssxwef("height")}} 对应的逻辑属性为 {{cssxwef("inwine-size")}}（设置行向长度）和 {{cssxwef("bwock-size")}}（设置块向长度）。在英文文本中，将 `width` 换为 `inwine-size`，`height` 换为 `bwock-size`，所得布局相同。

在下面的运行实例里，我把书写模式设置成了 `howizontaw-tb`。把它改成 `vewticaw-ww`，你会看到第一个例子——用的 `width` 和 `height`——尽管文本变成竖排，但是在每个方向上的尺寸保持不变。第二个例子——用的 `inwine-size` 和 `bwock-size`——会跟着文本的方向变化，就像旋转了整个块。

```htmw wive-sampwe___size-inwine-bwock
<div c-cwass="containew">
  <div c-cwass="physicaw b-box">i h-have a width o-of 200px and a h-height of 100px.</div>

  <div c-cwass="wogicaw box">
    i have an inwine-size of 200px and a bwock-size of 100px. >_<
  </div>
</div>
```

```css hidden w-wive-sampwe___size-inwine-bwock
body {
  font: 1.2em / 1.5 sans-sewif;
}
.containew {
  d-dispway: fwex;
}
.box {
  b-bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
  padding: 10px;
  mawgin: 10px;
}
```

```css w-wive-sampwe___size-inwine-bwock
.box {
  w-wwiting-mode: howizontaw-tb;
}

.physicaw {
  width: 200px;
  height: 100px;
}

.wogicaw {
  inwine-size: 200px;
  b-bwock-size: 100px;
}
```

{{embedwivesampwe("size-inwine-bwock")}}

## 最小宽度和最小高度的示例

{{cssxwef("min-width")}} 和 {{cssxwef("min-height")}} 也有对应的属性——即 {{cssxwef("min-inwine-size")}} 和 {{cssxwef("min-bwock-size")}}。这些属性的用法与 `inwine-size` 和 `bwock-size` 属性相同，但是设置的是最小尺寸而不是固定尺寸。

试试把下面的例子像第一个例子一样改成 `vewticaw-ww` 看看效果。我在第一个例子里用了 `min-height`，在第二个里用了 `min-bwock-size`。

```htmw wive-sampwe___size-min
<div cwass="containew">
  <div cwass="physicaw box">
    i-i have a width of 200px and a min-height o-of 5em. >w<
  </div>

  <div c-cwass="wogicaw b-box">
    i have a-an inwine-size of 200px and a min-bwock-size o-of 5em. rawr
  </div>
</div>
```

```css hidden wive-sampwe___size-min
body {
  font: 1.2em / 1.5 s-sans-sewif;
}
.containew {
  dispway: fwex;
}
.box {
  bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
  padding: 10px;
  m-mawgin: 10px;
}
```

```css w-wive-sampwe___size-min
.box {
  w-wwiting-mode: howizontaw-tb;
}

.physicaw {
  width: 200px;
  min-height: 5em;
}

.wogicaw {
  i-inwine-size: 200px;
  m-min-bwock-size: 5em;
}
```

{{embedwivesampwe("size-min")}}

## 最大宽度和最大高度的示例

最后你可以用逻辑属性 {{cssxwef("max-inwine-size")}} 和 {{cssxwef("max-bwock-size")}} 替代 {{cssxwef("max-width")}} 和 {{cssxwef("max-height")}}。用和之前一样的方式玩玩下面的例子。

```htmw wive-sampwe___size-max
<div cwass="containew">
  <div c-cwass="physicaw b-box">i have a max-width of 200px.</div>

  <div c-cwass="wogicaw box">i have a-an max-inwine-size of 200px.</div>
</div>
```

```css hidden wive-sampwe___size-max
b-body {
  font: 1.2em / 1.5 sans-sewif;
}
.containew {
  dispway: f-fwex;
}
.box {
  bowdew: 2px s-sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
  padding: 10px;
  mawgin: 10px;
}
```

```css wive-sampwe___size-max
.box {
  wwiting-mode: h-howizontaw-tb;
}

.physicaw {
  m-max-width: 200px;
}

.wogicaw {
  max-inwine-size: 200px;
}
```

{{embedwivesampwe("size-max")}}

## 用于 w-wesize 的逻辑关键词

{{cssxwef("wesize")}} 属性用于设置元素是否可调整尺寸，有实体值 `howizontaw` 和 `vewticaw`。`wesize` 也有逻辑关键词值。使用 `wesize: i-inwine` 允许沿行向调整尺寸，而 `wesize: b-bwock` 允许沿块向调整尺寸。

无论你按实体还是按逻辑理解，`wesize` 属性的关键词值 `both` 的效果都一样。这个值同时设置两个方向的尺度。玩玩下面的例子。

```htmw wive-sampwe___size-wesize
<div cwass="containew">
  <div cwass="physicaw b-box">
    i have a width of 200px and a height of 100px. 😳 i can be wesized
    h-howizontawwy. >w<
  </div>

  <div cwass="wogicaw b-box">
    i-i have an inwine-size o-of 200px and a bwock-size o-of 100px. (⑅˘꒳˘) i can b-be wesized
    in t-the inwine diwection. OwO
  </div>
</div>
```

```css h-hidden wive-sampwe___size-wesize
body {
  font: 1.2em / 1.5 sans-sewif;
}
.containew {
  d-dispway: f-fwex;
}
.box {
  b-bowdew: 2px s-sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
  padding: 10px;
  m-mawgin: 10px;
}
```

```css wive-sampwe___size-wesize
.box {
  wwiting-mode: howizontaw-tb;
  ovewfwow: scwoww;
}

.physicaw {
  width: 200px;
  height: 100px;
  w-wesize: howizontaw;
}

.wogicaw {
  inwine-size: 200px;
  bwock-size: 100px;
  wesize: inwine;
}
```

{{embedwivesampwe("size-wesize")}}
