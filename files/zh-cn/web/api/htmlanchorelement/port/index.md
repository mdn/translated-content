---
title: HTMLAnchorElement：port 属性
slug: Web/API/HTMLAnchorElement/port
l10n:
  sourceCommit: 354f23773b65bad14192eca53e4a63471061b158
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLAnchorElement")}} 接口的 **`port`** 属性是一个字符串，包含 URL 的端口号。如果端口是该协议的默认值，则该属性为空字符串。

> [!NOTE]
> 如果 {{domxref("HTMLAnchorElement")}} 对象引用的 URL 不包含明确的端口号（例如，`https://localhost`），或者包含的端口号是 URL 协议部分对应的默认端口号（例如，`https://localhost:443`），那么 `port` 属性将是一个空字符串：`''`。

## 值

一个字符串。

## 示例

### 从锚点链接获取端口号

```js
// 文档中有一个 <a id="myAnchor" href="https://developer.mozilla.org:443/zh-CN/docs/HTMLAnchorElement"> 元素
const anchor = document.getElementByID("myAnchor");
anchor.port; // 返回“”
```

```js
// 文档中的另一个 <a id="myAnchor" href="https://developer.mozilla.org:8888/zh-CN/docs/HTMLAnchorElement"> 元素
const anchor = document.getElementByID("myAnchor");
anchor.port; // 返回“8888”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口 {{domxref("HTMLAnchorElement")}}。
