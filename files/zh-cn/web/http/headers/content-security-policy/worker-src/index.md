---
title: "CSP: worker-src"
slug: Web/HTTP/Headers/Content-Security-Policy/worker-src
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Content-Security-Policy")}}（内容安全策略，CSP）中的 **`worker-src`** 指令指定了 {{domxref("Worker")}}、{{domxref("SharedWorker")}} 或 {{domxref("ServiceWorker")}} 脚本的有效来源。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP 版本</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">指令类型</th>
      <td>{{Glossary("Fetch directive", "fetch 指令")}}</td>
    </tr>
    <tr>
      <th scope="row">回落</th>
      <td>
        <p>
          如果这个指令不存在，则用户代理在管理 worker 执行时，将首先查找 {{CSP("child-src")}} 指令，然后查找 {{CSP("script-src")}} 指令，最后再查找 {{CSP("default-src")}} 指令。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 语法

`worker-src` 策略可以允许一个或者多个源：

```http
Content-Security-Policy: worker-src <source>;
Content-Security-Policy: worker-src <source> <source>;
```

### 源

`<source>` 可以是 [CSP 源值](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources)中的任意一个。

请注意，这套相同的值可以用于所有 {{Glossary("fetch directive", "fetch 指令")}}（以及[许多其他的指令](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)）。

## 示例

### 违规的案例

给定此 CSP 标头：

```http
Content-Security-Policy: worker-src https://example.com/
```

{{domxref("Worker")}}、{{domxref("SharedWorker")}}、{{domxref("ServiceWorker")}} 被阻止，无法加载。

```html
<script>
  let blockedWorker = new Worker("data:application/javascript,…");
  blockedWorker = new SharedWorker("https://not-example.com/");
  navigator.serviceWorker.register("https://not-example.com/sw.js");
</script>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Content-Security-Policy")}}
- [Web Worker 的内容安全策略（CSP）](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers#内容安全策略)
- {{domxref("Worker")}}、{{domxref("SharedWorker")}}、{{domxref("ServiceWorker")}}
