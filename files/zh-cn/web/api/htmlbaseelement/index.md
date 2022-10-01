---
title: HTMLBaseElement
slug: Web/API/HTMLBaseElement
---

{{APIRef("HTML DOM")}}

**`HTMLBaseElement`** 接口包含一份 HTML 文件的基础 URI 设定，该对象继承了所有 {{domxref("HTMLElement")}} 接口中定义的方法与属性。

## 属性

_继承了其父级 {{domxref("HTMLElement")}} 的所有属性_

- {{domxref("HTMLBaseElement.href")}}
  - : 映射自 {{domxref("DOMString")}} HTML {{htmlattrxref("href", "base")}} 特性，包含了当前文档中所有相对 URL 地址的基准 URL。
- {{domxref("HTMLBaseElement.target")}}
  - : Is a {{domxref("DOMString")}} that reflects the {{htmlattrxref("target", "base")}} HTML attribute, containing a default target browsing context or frame for elements that do not have a target reference specified.

## 方法

_没有特殊的方法，继承了其父级 {{domxref("HTMLElement")}} 的所有特性。_

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML element implementing this interface: {{ HTMLElement("base") }}
