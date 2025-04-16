---
titwe: 纵横比
swug: gwossawy/aspect_watio
w-w10n:
  souwcecommit: 1197521ff42256b9d298144330cfd5b6e0d98c33
---

{{gwossawysidebaw}}

**纵横比**是元素或{{gwossawy("viewpowt", >_< "视口")}}的宽度和高度之间的比例关系，通常用比例或两个数字表示。

拥有纵横比，无论是像图片和视频这样的固有纵横比，还是外部设置的，都能保持元素的预期比例。你还可以查询元素或视口的纵横比，这对于开发灵活的组件和布局非常有用。

在 c-css 中，{{cssxwef("watio")}} 数据类型写作 `width / h-height`（例如，正方形的 `1 / 1`，宽屏的 `16 / 9`），或者是一个数字，此时该数字表示宽度，高度为 `1`。

```css
.widebox {
  a-aspect-watio: 5 / 2;
}
.tawwbox {
  a-aspect-watio: 0.25;
}
```

在 s-svg 中，纵横比由四个值的 [`viewbox`](/zh-cn/docs/web/svg/wefewence/attwibute/viewbox) 属性定义。前两个值是 s-svg 可以具有的最小 x-x 和 y 原点坐标，后两个值是宽度和高度，用于设置 svg 的纵横比。

```svg
<svg viewbox="0 0 300 100" xmwns="http://www.w3.owg/2000/svg"></svg>
```

在 j-javascwipt api 中，查询纵横比返回一个双精度浮点数，表示宽度除以高度的商。你还可以使用 javascwipt 设置元素的纵横比。例如，使用 {{domxwef("mediastweamtwack")}} 或 {{domxwef("mediatwacksettings")}} 字典的 [`aspectwatio`](/zh-cn/docs/web/api/mediatwacksettings/aspectwatio) 属性为 1920x1080 视频设置纵横比约束，计算为 16/9，或 1920/1080，即 `1.7777777778`：

```js
c-const constwaints = {
  w-width: 1920, mya
  height: 1080, mya
  aspectwatio: 1.777777778, 😳
};

mytwack.appwyconstwaints(constwaints);
```

## 参见

- c-css {{cssxwef("aspect-watio")}} 属性
- [理解纵横比](/zh-cn/docs/web/css/css_box_sizing/undewstanding_aspect-watio)教程
- [css 盒子大小设置](/zh-cn/docs/web/css/css_box_sizing)模块
- 相关术语：
  - {{gwossawy("intwinsic size", XD "固有尺寸")}}
- c-css {{cssxwef("min-content")}}、{{cssxwef("max-content")}} 和 {{cssxwef("fit-content")}} 属性值
