---
title: <mspace>
slug: Web/MathML/Element/mspace
l10n:
  sourceCommit: 67cbfbf7a408e7180137b286247025bc40716642
---

{{MathMLRef}}

**`<mspace>`** [MathML](/zh-CN/docs/Web/MathML) 元素用来显示一段空白，空白的大小由它自身的属性设置。

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)以及下列属性：

- `depth`
  - : [`<length-percentage>`](/zh-CN/docs/Web/CSS/length-percentage) 值，表示空白（在基线下方）的深度。
- `height`
  - : [`<length-percentage>`](/zh-CN/docs/Web/CSS/length-percentage) 值，表示空白（在基线上方）的高度。
- `width`
  - : [`<length-percentage>`](/zh-CN/docs/Web/CSS/length-percentage) 值，表示空白的宽度。

> [!NOTE]
> 对于 `depth`、`height`、`width` 属性，一些浏览器可能也接受[旧版 MathML 长度值](/zh-CN/docs/Web/MathML/Values#旧版_mathml_长度)。

## 示例

```html-nolint
<math display="block">
  <mn>1</mn>
  <mspace depth="40px" height="20px" width="100px"
          style="background: lightblue;"/>
  <mn>2</mn>
</math>
```

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("mpadded") }}
- {{ MathMLElement("mphantom") }}
