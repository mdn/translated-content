---
title: :local-link
slug: Web/CSS/Reference/Selectors/:local-link
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

{{SeeCompatTable}}

[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:local-link`** 表示一个指向同一文档的链接。因此，当某个超链接的目标绝对 URL 与其自身所在文档的 URL 相匹配时，该超链接的源锚点元素就会匹配这个伪类。

```css
/* 选择任何指向当前文档的 <a> 元素 */
a:local-link {
  color: green;
}
```

## 语法

```css
:local-link {
  /* ... */
}
```

## 示例

### HTML

```html
<a href="#target">这是当前页面上的一个链接。</a><br />
<a href="https://example.com">这是一个外部链接</a><br />
```

### CSS

```css
a:local-link {
  color: green;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

目前，没有任何浏览器支持此特性。

## 参见

- 与链接相关的伪类：{{ cssxref(":link") }}、{{ cssxref(":visited") }}、{{ cssxref(":hover") }}、{{ cssxref(":active") }}、{{ cssxref(":any-link") }}
- [CSS 选择器](/zh-CN/docs/Web/CSS/Guides/Selectors)模块
