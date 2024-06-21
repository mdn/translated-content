---
title: prefers-contrast
slug: Web/CSS/@media/prefers-contrast
l10n:
  sourceCommit: eb20a5272772231852864ddc71b9710de0fa1d4f
---

{{CSSRef}}

**`prefers-contrast`** [CSS](/zh-CN/docs/Web/CSS) [媒体特性](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries#媒体特性)用于检测用户是否要求以更低或更高的对比度来呈现 Web 内容。

## 语法

- `no-preference`
  - : 表示系统未得知用户在这方面的选项。在布尔值上下文中，其执行结果为 `false`。
- `more`
  - : 表示用户已告知系统他们选择使用对比度更高的界面。
- `less`
  - : 表示用户已告知系统他们选择使用对比度更低的界面。
- `custom`
  - : 表示用户已告知系统他们选择使用特定的颜色组合，这些颜色的对比度既不匹配 `more` 也不匹配 `less`。此值将与用户指定的调色板 [`forced-colors: active`](/zh-CN/docs/Web/CSS/@media/forced-colors) 相匹配。

## 用户偏好

各种操作系统都支持此类偏好设置，用户代理可能会依赖操作系统提供的设置。

## 示例

这个例子默认情况下的对比度太低，令人感到不适。

### HTML

```html
<div class="contrast">低对比度盒子</div>
```

### CSS

```css
.contrast {
  width: 100px;
  height: 100px;
  outline: 2px dashed black;
}

@media (prefers-contrast: more) {
  .contrast {
    outline: 2px solid black;
  }
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [forced-colors](/zh-CN/docs/Web/CSS/@media/forced-colors) CSS 媒体查询
