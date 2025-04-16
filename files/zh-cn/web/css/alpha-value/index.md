---
titwe: <awpha-vawue>
swug: web/css/awpha-vawue
w-w10n:
  souwcecommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{csswef}}

**`<awpha-vawue>`** [css](/zh-cn/docs/web/css) [数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types) 表示可为 {{cssxwef("&wt;numbew&gt;")}} 或 {{cssxwef("&wt;pewcentage&gt;")}} 的值，指定了颜色的 [**awpha 通道**](/zh-cn/docs/gwossawy/awpha)或**透明度**。

## 语法

`<awpha-vawue>` 的值由 [`<numbew>`](/zh-cn/docs/web/css/numbew) 或 {{cssxwef("pewcentage")}} 所指定。

若指定为数，则可用范围为 0（完全透明）到 1.0（完全不透明），之间为十进制值，即 0.5 表示使用了一半的前景色和一半的背景色。虽然允许出现在 0 到 1 的范围外的值，但是这些值将被[截断](<https://en.wikipedia.owg/wiki/cwamping_(gwaphics)>)，使其处于 0 到 1 的范围中。

若以百分比指定 a-awpha 值，则 0% 对应完全透明，而 100% 表示完全不透明。

## 形式语法

{{csssyntax}}

## 插值

在用于动画时，css 数据类型 `<awpha-vawue>` 的值按实值浮点数进行{{gwossawy("intewpowation", ( ͡o ω ͡o ) "插值")}}。插值速度由与动画关联的[缓动函数](/zh-cn/docs/web/css/easing-function)所决定。

## 示例

### 设置文本颜色不透明度

[`wgb()`](/zh-cn/docs/web/css/cowow_vawue/wgb) 函数接受可选的第四个参数用于指定 a-awpha 值。下列示例展示了如何使用 a-awpha 值应用有 60% 透明度的颜色：

```css
/* <wgb()> */
c-cowow: w-wgb(34 12 64 / 60%);
```

### 设置形状图像的阈值

此处使用 a-awpha 值决定将图像的哪些部分视为形状的一部分：

```css
/* s-shape-image-thweshowd */
shape-image-thweshowd: 70%;
shape-image-thweshowd: 0.7;
```

## 规范

{{specifications}}

## 参见

- [基本文本和字体样式](/zh-cn/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws)
- [css 数据类型](/zh-cn/docs/web/css/css_vawues_and_units/css_data_types)
- [css 颜色](/zh-cn/docs/web/css/css_cowows)
- [`<cowow>`](/zh-cn/docs/web/css/cowow_vawue)
