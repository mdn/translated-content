---
title: HTMLAnchorElement：origin 属性
slug: Web/API/HTMLAnchorElement/origin
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{APIRef("HTML DOM")}}

**`HTMLAnchorElement.origin`** 只读属性是一个字符串，包含所表示 URL 的来源的 Unicode 序列化形式。

即：

- 对于使用 `http` 或 `https` 协议的 URL，协议后跟 `'://'`，然后是域名，再后跟 `':'`，最后是端口号（如果明确指定了端口号，则分别为默认的 `80` 和 `443`）；
- 对于使用 `file:` 协议的 URL，值依赖于浏览器；
- 对于使用 `blob:` 协议的 URL，`blob:` 后跟的 URL 的来源。例如，`"blob:https://mozilla.org"` 的 `origin` 将是 `"https://mozilla.org"`。

## 值

一个字符串。

## 示例

```js
// 文档中有一个 <a id="myAnchor" href="https://developer.mozilla.org/zh-CN/HTMLAnchorElement"> 元素
const anchor = document.getElementById("myAnchor");
anchor.origin; // 返回“https://developer.mozilla.org”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口 {{domxref("HTMLAnchorElement")}}。
