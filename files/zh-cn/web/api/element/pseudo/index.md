---
title: Element：pseudo() 方法
short-title: pseudo()
slug: Web/API/Element/pseudo
l10n:
  sourceCommit: b0db98a5c5a6cc7dbc519c272ab0572f6481afc6
---

{{SeeCompatTable}}

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`pseudo()`** 方法返回一个 {{domxref("CSSPseudoElement")}} 对象，该对象表示一个与该元素相关的指定类型的 [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)。

只要 `type` 参数包含合法的伪元素类型，`pseudo()` 总是会返回一个 `CSSPseudoElement` 实例，即便目标的伪元素没有在调用方法的元素中生成。

## 语法

```js-nolint
pseudo(type)
```

### 参数

- `type`
  - : 一个表示要返回的表现形式的伪元素类型的字符串。合法的值有：
    - {{cssxref("::after")}}
    - {{cssxref("::before")}}
    - {{cssxref("::marker")}}

### 返回值

一个 {{domxref("CSSPseudoElement")}} 对象实例，或者若 `type` 不等于任意合法的伪元素类型则返回 `null`。

## 示例

### 基础用法

在此示例中，我们将演示 `pseudo()` 方法的基础用法。

#### HTML

写一个 {{htmlelement("p")}} 元素来容纳文本，以及一个 {{htmlelement("output")}} 元素来记录 JavaScript 的输出。

```html live-sample___basic
<p>纽约最火的夜店是……</p>
<output></output>
```

#### CSS

我们赋予 `<p>` 元素的 {{cssxref("::after")}} 伪元素一些 {{cssxref("content")}}，并为两者应用一些基本的样式。

```css hidden live-sample___basic
body {
  width: 80%;
  margin: 0 auto;
}
```

```css live-sample___basic
p {
  background-color: violet;
  padding: 20px;
}

p::after {
  content: "Crease";
  background-color: cadetblue;
  padding: 20px;
}
```

#### JavaScript

在脚本中，我们抓取 `<p>` 和 `<output>` 元素的引用，然后通过 `pseudo()` 方法获取一个表示 `<p>` 的 `::after` 伪元素的 `CSSPseudoElement`。接着在 `<output>` 元素中记录一些伪元素的详细信息。同时还要用一个 [`try...catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 结构写一些最基本的错误处理，用来在不支持的浏览器里显示错误消息。

```js live-sample___basic
const pElem = document.querySelector("p");
const output = document.querySelector("output");

try {
  const pseudoElem = pElem.pseudo("::after");
  output.textContent = `${pseudoElem.type} 伪元素。父元素：<${pseudoElem.parent.tagName.toLowerCase()}>`;
} catch (e) {
  output.textContent = `你的浏览器不支持 CSSPseudoElement 和/或 pseudo() 方法：${e}`;
}
```

#### 结果

{{embedlivesample("basic", "100%", 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("CSSPseudoElement.pseudo()")}}
