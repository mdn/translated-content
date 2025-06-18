---
title: HTMLAnchorElement：ping 属性
slug: Web/API/HTMLAnchorElement/ping
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLAnchorElement")}} 接口的 **`ping`** 属性是一个由空格分隔的 URL 列表。当链接被点击时，浏览器将向这些 URL 发送带有 PING 正文的 {{HTTPMethod("POST")}} 请求。

它反映 {{HTMLElement("a")}} 元素的 `ping` 属性。

> [!NOTE]
> 此属性在 Firefox 中无效，并且出于隐私和安全考虑，其使用可能会受到限制。

## 示例

```html
<a
  id="exampleLink"
  href="https://example.com"
  ping="https://example-tracking.com https://example-analytics.com"
  >示例链接</a
>
```

```js
const anchorElement = document.getElementById("exampleLink");
console.log(anchorElement.ping); // 输出："https://example-tracking.com https://example-analytics.com"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLAreaElement.ping")}} 属性
