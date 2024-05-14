---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Headers/Cross-Origin-Embedder-Policy
---

{{HTTPSidebar}}

HTTP **`Cross-Origin-Embedder-Policy`** (COEP) 响应标头可防止文档加载未明确授予文档权限 (通过 [CORP](</zh-CN/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)>) 或者 [CORS](/zh-CN/docs/Web/HTTP/CORS)) 的任何跨域资源。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
Cross-Origin-Embedder-Policy: unsafe-none | require-corp
```

### 指令

- `unsafe-none`
  - : 这是默认值。允许文档获取跨源资源，而无需通过 CORS 协议或 {{HTTPHeader("Cross-Origin-Resource-Policy")}} 头。
- `require-corp`
  - : 文档只能从相同的源加载资源，或显式标记为可从另一个源加载的资源。
    如果跨源资源支持 CORS，则 [`crossorigin`](/zh-CN/docs/Web/HTML/Attributes/crossorigin) 属性或 {{HTTPHeader("Cross-Origin-Resource-Policy")}} 头必须使用它来加载资源，而不会被 COEP 阻止。

## 示例

### 某些功能取决于跨源隔离

为了节省时间你可以只接受类似于 {{jsxref("SharedArrayBuffer")}} 或者 {{domxref("Performance.now()")}} 对象，只要你的文档有一个值被设置为 `require-corp` 的 COEP 标头。

```http
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

你还需要设置的另一个标头：{{HTTPHeader("Cross-Origin-Opener-Policy")}}。

为了验证跨源隔离是否生效，你可以测试窗口和 worker 上下文中的 {{domxref("Window.crossOriginIsolated")}} 或 {{domxref("WorkerGlobalScope.crossOriginIsolated")}} 属性：

```js
const myWorker = new Worker("worker.js");

if (crossOriginIsolated) {
  const buffer = new SharedArrayBuffer(16);
  myWorker.postMessage(buffer);
} else {
  const buffer = new ArrayBuffer(16);
  myWorker.postMessage(buffer);
}
```

### 避免 CORS 阻塞 COEP

If you enable COEP using `require-corp` and have a cross origin resource that needs to be loaded, it needs to support [CORS](/zh-CN/docs/Web/HTTP/CORS) and you need to explicitly mark the resource as loadable from another origin to avoid blockage from COEP. For example, you can use the [`crossorigin`](/zh-CN/docs/Web/HTML/Attributes/crossorigin) attribute for this image from a third-party site:

```html
<img src="https://thirdparty.com/img.png" crossorigin />
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{httpheader("Cross-Origin-Opener-Policy")}}
