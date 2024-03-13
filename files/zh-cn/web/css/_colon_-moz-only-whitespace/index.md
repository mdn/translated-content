---
title: ":blank"
slug: Web/CSS/:-moz-only-whitespace
---

{{CSSRef}}{{SeeCompatTable}}

**`:blank`** [CSS](/zh-CN/docs/Web/CSS) [伪类选择器](/zh-CN/docs/Web/CSS/Pseudo-classes) 用于匹配如下节点

1. 没有子节点;

2. 仅有空的文本节点;

3. 仅有空白符的文本节点。

## 形式语法

{{CSSSyntax}}

## 示例

### HTML

```html
<div></div>
```

### CSS

```css hidden
:root {
  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;
}

div {
  background-color: #ccc;
  box-sizing: border-box;
  height: 100vh;
  min-height: 16px;
  min-height: 1rem;
}

:-moz-only-whitespace {
  border-color: lime;
}
```

```css
div {
  border: 4px solid red;
}

:blank {
  border-color: lime;
}
```

### 结果

{{EmbedLiveSample("示例", "100%", "50")}}

## 规范

在 [Selectors Level 4](https://drafts.csswg.org/selectors-4/#changes-2018-02) 中被简要地定义为 `:blank`，但其功能随后被并入 {{CSSxRef(":empty")}}，而 {{CSSxRef(":blank")}} 则被重新定义为空的 {{HTMLElement("input")}}。

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":empty")}}
