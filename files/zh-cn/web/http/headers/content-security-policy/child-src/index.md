---
title: "CSP: child-src"
slug: Web/HTTP/Headers/Content-Security-Policy/child-src
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Content-Security-Policy")}}（CSP 内容安全策略）中的 **`child-src`** 指令定义了使用如 {{HTMLElement("frame")}} 和 {{HTMLElement("iframe")}} 等元素在加载 [web worker](/zh-CN/docs/Web/API/Web_Workers_API) 和嵌套浏览上下文时的有效来源。对于 worker 来说，不合规的请求会被用户代理当作致命的网络错误处理。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP 版本</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">指令类型</th>
      <td>{{Glossary("Fetch directive", "fetch 指令")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} 回落</th>
      <td>
        是。如果该指令不存在，用户代理将查找 <code>default-src</code> 指令。
      </td>
    </tr>
  </tbody>
</table>

## Syntax

`child-src` 策略可以允许一个或者多个源：

```http
Content-Security-Policy: child-src <source>;
Content-Security-Policy: child-src <source> <source>;
```

### 源

`<source>` 可以是 [CSP 源值](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources)中的任意一个。

请注意，这套相同的值可以用于所有 {{Glossary("fetch directive", "fetch 指令")}}（以及[许多其他的指令](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)）。

## 示例

### 违规的策略

给定此 CSP 标头：

```http
Content-Security-Policy: child-src https://example.com/
```

这个 {{HTMLElement("iframe")}} 和 worker 被禁止并且不会加载：

```html
<iframe src="https://not-example.com"></iframe>

<script>
  const blockedWorker = new Worker("data:application/javascript,…");
</script>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Content-Security-Policy")}}（内容安全策略）
- {{HTMLElement("frame")}} 和 {{HTMLElement("iframe")}}
- {{domxref("Worker")}}、{{domxref("SharedWorker")}}、{{domxref("ServiceWorker")}}
