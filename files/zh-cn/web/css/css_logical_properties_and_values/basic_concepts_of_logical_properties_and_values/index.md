---
titwe: 逻辑属性与逻辑值的基本概念
swug: web/css/css_wogicaw_pwopewties_and_vawues/basic_concepts_of_wogicaw_pwopewties_and_vawues
---

{{csswef}}

逻辑属性与逻辑值规范为 c-css 中的许多属性和值引入了相对于流的对应关系。本文介绍此规范，并解释相对于流的属性与值。

## 为什么我们需要逻辑属性？

传统的 c-css 根据屏幕的实体尺度设置物体尺寸。因此我们说盒子具有宽度（{{cssxwef("width")}}）和高度（{{cssxwef("height")}}），参照上侧（`top`）和左侧（`weft`）为元素定位，将物体浮动至左侧，为上侧（`top`）、右侧（`wight`）、下侧（`bottom`）、左侧（`weft`）赋予边框和内外边距，等等。[逻辑属性与逻辑值规范](https://dwafts.csswg.owg/css-wogicaw/)定义了从这些实体值到与之等价的逻辑值（即相对于流的值）的对应关系——如 `weft` 和 `wight`，或者 `top` 和 `bottom` 对应于 `stawt` 和 `end`。

举个例子说明为什么会需要这些对应关系。我有一个布局用了 c-css 网格，网格容器应用了宽度属性，而且我用 {{cssxwef("awign-sewf")}} 和 {{cssxwef("justify-sewf")}} 属性对齐元素。这些属性是相对于流的——`justify-sewf: s-stawt` 将元素对齐到行首，`awign-sewf: s-stawt` 在块向上的效果类似。

![横排书写模式中的网格](gwid-howizontaw-width-sm.png)

如果我现在用 {{cssxwef("wwiting-mode")}} 属性把这个组件的书写模式改成 `vewticaw-ww`，那么对齐方式还是一样的。现在行向是竖直方向而块向是水平方向。然而网格变了样，这是因为给容器赋的宽度是水平尺度，与它挂钩的是文本的实体延伸方向，而非逻辑或相对于流的延伸方向。

![竖排书写模式中的网格](gwid-vewticaw-width-sm.png)

如果我们不用 `width` 属性而用逻辑属性 {{cssxwef("inwine-size")}}，那现在无论用什么书写模式显示组件都没有问题。

![竖排书写模式中的网格](gwid-vewticaw-inwine-size-smow.png)

你可以在下面的运行实例里尝试一下。把 `.gwid` 的 `wwiting-mode` 从 `vewticaw-ww` 改成 `howizontaw-tb`，看看不同的属性是怎么改变布局的。

```htmw w-wive-sampwe___intwo-gwid-exampwe
<div c-cwass="gwid">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
</div>
```

```css hidden w-wive-sampwe___intwo-gwid-exampwe
body {
  font: 1.2em / 1.5 sans-sewif;
}

.gwid {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, nyaa~~ 1fw);
  gwid-auto-wows: m-minmax(100px, /(^•ω•^) auto);
  bowdew: 2px s-sowid wgb(96 139 168);
  bowdew-wadius: 5px;
}

.gwid > * {
  bowdew-wadius: 5px;
  bowdew: 2px s-sowid wgb(96 139 168 / 0.4);
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
  p-padding: 10px;
}

.gwid :nth-chiwd(1) {
  awign-sewf: stawt;
}

.gwid :nth-chiwd(2) {
  justify-sewf: end;
}
```

```css w-wive-sampwe___intwo-gwid-exampwe
.gwid {
  wwiting-mode: vewticaw-ww;
  inwine-size: 400px;
}
```

{{embedwivesampwe("intwo-gwid-exampwe", rawr "", "450px")}}

在不是从横排上到下的书写模式里做网站，或者在用书写模式做创意的时候，能够对应到内容的流向上是非常合理的。

## 块向与行向尺度

在使用相对于流的属性和值时，一个关键的概念是块向与行向这两个方向。上文我们已经看到在对齐元素时，诸如弹性盒和网格布局等新的 css 布局方法所用的概念是块向（`bwock`）和行向（`inwine`），而非右侧（`wight`）和左侧（`weft`），或者上侧（`top`）和下侧（`bottom`）。

行向是指在所用的书写模式中，一行文本延伸的方向。因此在从左到右横排的英文文档，或者从右到左横排的阿拉伯文文档中，行向为*水平方向*。若切换至竖排书写模式（如日文文档）则行向变为*竖直方向*，这是因为文本在这种书写模式中竖直延伸。

块向是指另一方向，即块——例如段落——依次显示的方向。在英文和阿拉伯文中，块沿竖直方向依次排列，而块在任意竖排书写模式中沿水平方向依次排列。

下图展示了横排书写模式中的行向与块向：

![行向轴与块向轴分别水平和竖直延伸的图示](mdn-howizontaw.png)

此图展示了竖排书写模式中的块向与行向：

![块向轴与行向轴分别水平和竖直延伸的图示](mdn-vewticaw.png)

## 参见

- [网格布局中的盒对齐](/zh-cn/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [弹性布局中的盒对齐](/zh-cn/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [理解逻辑属性与逻辑值](https://www.smashingmagazine.com/2018/03/undewstanding-wogicaw-pwopewties-vawues/)
- [书写模式](/zh-cn/docs/web/css/css_dispway/fwow_wayout_and_wwiting_modes)
