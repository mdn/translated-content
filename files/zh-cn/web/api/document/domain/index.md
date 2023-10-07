---
title: Document.domain
slug: Web/API/Document/domain
---

{{ApiRef}}{{Deprecated_Header}}

{{domxref("Document")}} 接口的 **`domain`** 属性获取/设置当前文档的原始域部分，常用于[同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)。

如果成功设置此属性，则原始端口的端口部分也将设置为 `null`.

## 语法

```plain
var domainString = document.domain;
document.domain = domainString;
```

### 值

当前文档来源的域部分。

### 异常

- 安全错误

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
var currentDomain = document.domain;
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

### Firefox 备注

如果当前文档的域无法识别，那么 domain 属性会返回 null。但这个表现在 Firefox 62 时发生了更改——详见 [Firefox bug 819475](https://bugzil.la/819475) 中的讨论。

在[根域名](/zh-CN/docs/XPCOM_Interface_Reference/nsIEffectiveTLDService#getBaseDomain.28.29)范围内，Mozilla 允许你把 domain 属性的值设置为它的上一级域。例如，在 developer.mozilla.org 域内，可以把 domain 设置为 "mozilla.org" 但不能设置为 "mozilla.com" 或者"org"。

Mozilla 会区分 `document.domain` 属性 **从没有被设定过值** 和 **被显示的设定为跟该文档的 URL 的 domain 一致的值**，尽管这两种状况下，该属性会返回同样的值。两个文档，只有在 `document.domain` 都被设定为同一个值，表明他们打算协作；或者都没有设定 `document.domain` 属性并且 URL 的域是一致的 ([如何判断一致](https://mxr.mozilla.org/mozilla-central/source/caps/src/nsScriptSecurityManager.cpp#1003))，这两种条件下，一个文档才可以去访问另一个文档。如果没有这个特殊的策略，每一个站点都会成为他的子域的 XSS 攻击的对象（例如，<https://bugzilla.mozilla.org> 可以被来自 <https://bug*.bugzilla.mozilla.org> 站点的 bug 附件攻击）。

## 参见

- [Same origin policy for JavaScript](/zh-CN/docs/Web/Security/Same-origin_policy)
