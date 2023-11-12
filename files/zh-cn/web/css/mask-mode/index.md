---
title: mask-mode
slug: Web/CSS/mask-mode
---

{{CSSRef}}{{SeeCompatTable}}

**`mask-mode`**[CSS](/zh-CN/docs/Web/CSS)属性指示由{{cssxref("mask-image")}} 指向的遮罩被视为亮度或阿尔法遮罩。

```css
/* 关取值的键字 */
mask-mode: alpha;
mask-mode: luminance;
mask-mode: match-source;

/* 多个类型的值 */
mask-mode: alpha, match-source;

/* 全局变量的值 */
mask-mode: inherit;
mask-mode: initial;
mask-mode: unset;
```

{{cssinfo}}

## 语法

下面列出 `mask-mode` 的一个或多个关键字值，以逗号分隔。

### Values

- `alpha`
  - : 此关键字指示应使用掩码层图像的透明度（阿尔法通道）值作为掩码值。
- `luminance`
  - : 此关键字指示掩膜层图像的亮度值应用作掩码值。
- `match-source`

  - : 如果{{cssxref("mask-image")}}属性是`<mask-source>`类型，掩模层图像的亮度值会被作为掩模值。

    如果它是类型{{cssxref("&lt;image&gt;")}}，掩码层图像的 alpha 值应用作掩码值。

### 形式语法

{{csssyntax}}

## 示例

### CSS

```css
#masked {
  width: 227px;
  height: 200px;
  background: blue linear-gradient(red, blue);
  mask-image: url(mdn.svg);
  mask-mode: alpha; /* Can be changed in the live sample */
}
```

```html hidden
<div id="masked"></div>
<select id="maskMode">
  <option value="alpha">alpha</option>
  <option value="luminance">luminance</option>
  <option value="match-source">match-source</option>
</select>
```

```js hidden
var maskMode = document.getElementById("maskMode");
maskMode.addEventListener("change", function (evt) {
  document.getElementById("masked").style.maskMode = evt.target.value;
});
```

### 结果

{{EmbedLiveSample("示例", 240, 240)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
