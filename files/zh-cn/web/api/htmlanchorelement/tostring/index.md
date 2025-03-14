---
title: HTMLAnchorElement：toString() 方法
slug: Web/API/HTMLAnchorElement/toString
l10n:
  sourceCommit: b829b2fae917b5b931011ddeb6a0d1b2d2b81c54
---

{{ApiRef("URL API")}}

**`HTMLAnchorElement.toString()`** {{Glossary("stringifier", "字符串化器")}}方法返回一个包含完整 URL 的字符串。它是 {{domxref("HTMLAnchorElement.href")}} 的只读版本。

## 语法

```js-nolint
toString()
```

### 参数

无。

### 返回值

一个包含元素完整 URL 的字符串。

## 示例

### 在锚点元素上调用 toString

```js
// 文档中有一个 <a id="myAnchor" href="/zh-CN/docs/HTMLAnchorElement"> 元素
const anchor = document.getElementById("myAnchor");
anchor.toString(); // 返回“https://developer.mozilla.org/zh-CN/docs/HTMLAnchorElement”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口 {{domxref("HTMLAnchorElement")}}。
