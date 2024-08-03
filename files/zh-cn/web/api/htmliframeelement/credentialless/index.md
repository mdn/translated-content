---
title: HTMLIFrameElement：credentialless 属性
slug: Web/API/HTMLIFrameElement/credentialless
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

{{domxref("HTMLIFrameElement")}} 接口的 **`credentialless`** 属性表示 {{htmlelement("iframe")}} 是否无凭据，这意味着其中的文档将使用新的临时上下文加载。

这些上下文无法访问与其源关联的网络、cookie 和存储数据。相反，它们使用与顶层文档生命周期相关的新的上下文。这意味着用户导航离开页面或重新加载页面后，任何存储的数据都将不可访问。

作为回报，设置了 {{httpheader("Cross-Origin-Embedder-Policy")}}（COEP）的文档可以取消第三方文档的嵌入规则，这些第三方文档没有设置 COEP。有关更深入的解释，请参阅[无凭据 IFrame](/zh-CN/docs/Web/Security/IFrame_credentialless)。

## 值

一个布尔值。默认值为 `false`；将其设为 `true` 可使 `<iframe>` 为无凭据。

## 示例

### 获取

像这样指定一个无凭据的 `<iframe>`：

```html
<iframe
  src="https://zh.wikipedia.org/wiki/幽灵漏洞"
  title="维基百科页面中的幽灵漏洞"
  width="960"
  height="600"
  credentialless></iframe>
```

返回 `credentialless` 属性值：

```js
const iframeElem = document.querySelector("iframe");
console.log(iframeElem.credentialless); // 将在支持的浏览器中返回 true
```

### 设置

或者，在 HTML 中指定最少的详细信息：

```html
<iframe width="960" height="600"> </iframe>
```

将 `credentialless` 设置为 `true`，然后通过脚本加载 `<iframe>` 内容：

```js
const iframeElem = document.querySelector("iframe");

iframeElem.credentialless = true;
iframeElem.title = "维基百科页面中的幽灵漏洞";
iframeElem.src = "https://zh.wikipedia.org/wiki/幽灵漏洞";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [无凭据 IFrame](/zh-CN/docs/Web/Security/IFrame_credentialless)
- {{htmlelement("iframe")}}
