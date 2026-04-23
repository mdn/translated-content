---
title: -moz-force-broken-image-icon
slug: Web/CSS/Reference/Properties/-moz-force-broken-image-icon
l10n:
  sourceCommit: db9ccd6c2746b3f34b0951d8e59ea1c581312d9d
---

{{Non-standard_header}}{{Deprecated_Header}}

**`-moz-force-broken-image-icon`** 扩展 CSS 属性可用于强制显示损坏图像图标，即使损坏的图像具有 `alt` 属性。

## 语法

### 值

- {{cssxref("&lt;integer&gt;")}}
  - : 值为 `1` 表示即使图像具有 [`alt`](/zh-CN/docs/Web/HTML/Reference/Elements/img#alt) 属性，也会显示损坏的图像图标。当值为 `0` 时，图像将按常规显示，仅显示 `alt` 属性。

> [!NOTE]
> 即使将值设置为 `1`，`alt` 属性仍会显示，并与损坏的图像图标一起呈现。

## 形式定义

{{CSSInfo}}

## 形式语法

```plain
-moz-force-broken-image-icon = {{cssxref("&lt;integer&gt;")}}
```

## 示例

### HTML

```html
<img src="/broken/image/link.png" alt="损坏的图像链接" />
```

### CSS

```css
img {
  -moz-force-broken-image-icon: 1;
  height: 100px;
  width: 100px;
}
```

### 结果

{{EmbedLiveSample('示例','125','125')}}

> [!NOTE]
> 除非图像指定了高度和宽度，否则即使将 `-moz-force-broken-image-icon` 设置为 `1`，alt 属性也不会显示。

## 备注

- 此属性仅在基于 Gecko 的浏览器中有效。
- 不推荐使用此属性，建议使用合适的 `alt` 属性代替。

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- [Firefox bug 58646](https://bugzil.la/58646)
