---
title: Document.domain
slug: Web/API/Document/domain
---

{{APIRef("DOM")}}{{Deprecated_Header}}

{{domxref("Document")}} 接口的 **`domain`** 属性获取/设置当前文档{{glossary("origin", "来源")}}的域名部分，常用于[同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)。

### 值

当前文档来源的域部分。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 已尝试在以下情况之一下设置域：
    - 文件在 html 中的 iframe 元素里
    - 该文件没有参考上下文
    - 该文档的有效域为 null
    - 给定值不等于文档的有效域（或者它不是该域的可注册域后缀）
    - The {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{HTTPHeader("Permissions-Policy")}}一启用

## 示例

### 获取域名

对于 URI `http://developer.mozilla.org/zh-CN/docs/Web`，此示例将 currentDomain 设置为字符串 `developer.mozilla.org`。

```js
const currentDomain = document.domain;
```

### 关闭窗口

如果文档（例如 www\.example.xxx/good.html）的域为“www\.example.xxx”，则本示例将尝试关闭窗口。

```js
var badDomain = "www.example.xxx";

if (document.domain == badDomain) {
  // 这只是一个示例 - 有时 window.close() 是没有效果的
  window.close();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)
- {{domxref("Location.hostname")}}
- {{domxref("Location.host")}}
- {{domxref("Window.origin")}}
