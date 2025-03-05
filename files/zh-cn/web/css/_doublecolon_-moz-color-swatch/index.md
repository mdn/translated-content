---
title: ::-moz-color-swatch
slug: Web/CSS/::-moz-color-swatch
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}{{Non-standard_header}}

**`::-moz-color-swatch`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)是用于表示在 `type="color"` 的 {{HTMLElement("input")}} 中选择的颜色的 [Mozilla 扩展](/zh-CN/docs/Web/CSS/Mozilla_Extensions)。

> [!NOTE]
> 除了 `<input type="color">` 以外，使用 `::-moz-color-swatch` 不会匹配任何内容，也没有任何效果。

## 语法

```css
::-moz-color-swatch {
  /* ... */
}
```

## 示例

### HTML

```html
<input type="color" value="#de2020" />
```

### CSS

```css
input[type="color"]::-moz-color-swatch {
  border-radius: 10px;
  border-style: none;
}
```

### 结果

{{EmbedLiveSample("示例", 300, 50)}}

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- 其他浏览器也使用类似的伪元素：

  - {{cssxref("::-webkit-color-swatch")}}，WebKit 和 Blink（Safari、Chrome 和 Opera）支持的伪元素
