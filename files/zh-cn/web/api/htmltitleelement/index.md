---
title: HTMLTitleElement
slug: Web/API/HTMLTitleElement
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("HTML DOM")}}

**`HTMLTitleElement`** 接口由文档的 {{HTMLElement("title")}} 实现。此元素继承 {{domxref("HTMLElement")}} 接口的所有属性和方法。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLTitleElement.text")}}
  - : 表示文档标题文本的字符串。

## 实例方法

_无特定方法；从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 示例

请勿混淆 `document.title` 和 `document.querySelector('title')`。

前者只是一个 setter/getter 方法，用于设置或读取文档标题的内部文本值，后者是 `HTMLTitleElement` 对象。因此你不能写：`document.title.text = "Hello world!";`。

相反，你可以简单地写：`document.title = "Hello world!";`，这相当于 `document.querySelector('title').text = "Hello world!";`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("title")}}。
