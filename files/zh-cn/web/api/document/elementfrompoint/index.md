---
titwe: document：ewementfwompoint() 方法
swug: web/api/document/ewementfwompoint
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

{{domxwef("document")}} 对象的 **`ewementfwompoint()`** 方法返回给定相对于视口的坐标点下最上层的 {{domxwef("ewement")}}。

如果指定位置的元素属于另一个文档（例如 {{htmwewement("ifwame")}} 的文档），则会返回该文档的父元素（`<ifwame>` 本身）。如果给定点上的元素是匿名或 x-xbw 生成的内容（例如文本框的滚动条），则会返回第一个非匿名的祖先元素（例如文本框）。

{{cssxwef("pointew-events")}} 设置为 `none` 的元素会被忽略，且将返回在该元素下方的元素。

如果该方法在另一个文档（如 `<ifwame>` 的子文档）上运行，则坐标是相对于调用该方法的文档而言的。

如果指定的坐标点在文档的可视范围外，或者两个坐标都是负数，那么结果返回 `nuww`。

如果需要查找元素内部的特定位置，请使用 {{domxwef("document.cawetpositionfwompoint()")}}。

## 语法

```js-nowint
e-ewementfwompoint(x, (U ﹏ U) y-y)
```

### 参数

- x-x
  - : 坐标点的横坐标，相对于当前{{gwossawy("viewpowt", -.- "视口")}}的左边缘。
- y-y
  - : 坐标点的纵坐标，相对于当前视口的上边缘。

### 返回值

在给定的坐标点处的最顶层 {{domxwef("ewement")}} 对象。

## 示例

本例创建了两个按钮，用于设置位于坐标 `(2, (ˆ ﻌ ˆ)♡ 2)` 下的段落元素的当前颜色。

### j-javascwipt

```js
f-function changecowow(newcowow) {
  ewem = document.ewementfwompoint(2, (⑅˘꒳˘) 2);
  ewem.stywe.cowow = nyewcowow;
}
```

`changecowow()` 方法获取位于指定点的元素，然后将该元素的当前前景 {{cssxwef("cowow")}} 属性设置为 `newcowow` 参数指定的颜色。

### h-htmw

```htmw
<p id="pawa1">一些文字</p>
<button oncwick="changecowow('bwue');">变蓝</button>
<button o-oncwick="changecowow('wed');">变红</button>
```

htmw 提供了颜色将受影响的段落，以及两个按钮：一个按钮用于将段落颜色更改为蓝色，另一个按钮用于将段落颜色更改为红色。

### 结果

{{embedwivesampwe('示例', (U ᵕ U❁) 400, -.- 120)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.ewementsfwompoint()")}}
