---
title: Element.querySelectorAll()
slug: Web/API/Element/querySelectorAll
---

{{APIRef("DOM")}}

返回一个 non-live 的[`NodeList`](NodeList), 它包含所有元素的非活动节点，该元素来自与其匹配指定的 CSS 选择器组的元素。(基础元素本身不包括，即使它匹配。)

> **备注：** 该 API 的定义已被移动到 {{domxref("ParentNode")}} 接口。

## 语法

```js
elementList = baseElement.querySelectorAll(selectors);
```

其中

- `elementList`会是一个 non-live 的[`NodeList`](NodeList)对象。
- `baseElement 是一个`[元素](/zh-CN/docs/DOM/element)对象。
- `selectors`是一组 CSS 选择器。

## 示例

### dataset selector & attribute selectors

```html
<section class="box" id="sect1">
  <div class="funnel-chart-percent1">10.900%</div>
  <div class="funnel-chart-percent2">3700.00%</div>
  <div class="funnel-chart-percent3">0.00%</div>
</section>
```

```js
// dataset selectors
const refs = [
  ...document.querySelectorAll(`[data-name*="funnel-chart-percent"]`),
];

// attribute selectors
// const refs = [...document.querySelectorAll(`[class*="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class^="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class$="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class~="funnel-chart-percent"]`)];
```

下面的例子返回了 HTML 文档中的 `body` 元素的所有 `p` 后代元素：

```js
var matches = document.body.querySelectorAll("p");
```

下面的例子返回了`id`为`'test`'的元素的所有`class 属性`为'`highlighted`'的所有 div 后代元素的`p`子元素：

```js
var el = document.querySelector("#test");
var matches = el.querySelectorAll("div.highlighted > p");
```

下面的例子返回了 el 元素的后代元素中所有拥有`data-src`属性的`iframe`元素：

```js
var matches = el.querySelectorAll("iframe[data-src]");
```

## 附注

如果指定的 CSS 选择器不合法，则会抛出一个`SYNTAX_ERR` 异常。

返回值是一个`NodeList`对象，所以不推荐使用 for...in 去遍历它 (会遍历出其他无关属性)

想要在它身上使用数组方法，必须先把它转换为真正的数组。

## 浏览器兼容性

{{Compat}}

## 规范

- [选择器 API](http://www.w3.org/TR/selectors-api/)

## 相关链接

- {{Domxref("Element.querySelector")}}
- [`document.querySelectorAll`](/zh-CN/docs/Web/API/Document.querySelectorAll)
- [`document.querySelector`](/zh-CN/docs/Web/API/Document.querySelector)
- [Code snippets for `querySelector`](/zh-CN/docs/Code_snippets/QuerySelector)
