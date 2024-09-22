---
title: forced-color-adjust
slug: Web/CSS/forced-color-adjust
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{CSSRef}}

**`forced-color-adjust`** CSS 属性允许用户将某些元素从强制颜色模式中移除，这些值的控制权将交还给 CSS。

## 语法

```css
forced-color-adjust: auto;
forced-color-adjust: none;

/* 全局值 */
forced-color-adjust: inherit;
forced-color-adjust: initial;
forced-color-adjust: revert;
forced-color-adjust: revert-layer;
forced-color-adjust: unset;
```

`forced-color-adjust` 属性的值必须是以下关键字之一。

### 值

- `auto`
  - : 在强制颜色模式下，元素的颜色由{{Glossary("user agent","用户代理")}}调整。这是默认值。
- `none`
  - : 在强制颜色模式下，{{Glossary("user agent","用户代理")}}不会自动调整元素的颜色。

## 使用说明

此属性应仅用于进行支持用户颜色和对比度需求的更改。例如，如果你发现{{Glossary("user agent","用户代理")}}所做的颜色优化在高对比度或暗黑模式下体验不佳，可以使用此属性调整该模式下的结果，以提供更好的体验。**使用此属性时不应忽视用户的选择**。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 保留颜色

在下面的示例中，第一个盒子将使用用户设置的颜色方案。例如，在 Windows 高对比度模式黑色主题中，它将使用黑色背景和白色文本。第二个盒子将保留在 `.box` 类上设置的网站颜色。

通过使用 [`forced-colors`](/zh-CN/docs/Web/CSS/@media/forced-colors) 媒体特性，你可以在使用 `forced-color-adjust` 属性的同时添加任何其他针对强制颜色模式的优化。

#### CSS

```css
.box {
  border: 5px solid grey;
  background-color: #ccc;
  width: 300px;
  margin: 20px;
  padding: 10px;
}

@media (forced-colors: active) {
  .forced {
    forced-color-adjust: none;
  }
}
```

#### HTML

```html
<div class="box">
  <p>This is a box which should use your color preferences.</p>
</div>

<div class="box forced">
  <p>This is a box which should stay the colors set by the site.</p>
</div>
```

#### 结果

{{EmbedLiveSample("保留颜色", 640, 300)}}

下面的截图显示了 Windows 高对比度模式下的图像：

![在高对比度模式下，第一个盒子为黑色背景，第二个盒子为 CSS 中设置的灰色背景。](windows-high-contrast.jpg)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [为 Windows 高对比度模式设置样式，并采用强制色彩标准。](https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/)
- {{cssxref("print-color-adjust")}}
