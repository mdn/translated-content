---
title: "CSP: connect-src"
slug: Web/HTTP/Headers/Content-Security-Policy/connect-src
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Content-Security-Policy")}}（内容安全策略，CSP）中的 **`connect-src`** 指令用于限制通过使用脚本接口加载的 URL。其中受限制的 API 如下：

- {{HTMLElement("a")}} [`ping`](/zh-CN/docs/Web/HTML/Element/a#ping)
- {{domxref("fetch()")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("WebSocket")}}
- {{domxref("EventSource")}}
- {{domxref("Navigator.sendBeacon()")}}

> **备注：** 并不是所有浏览器都能将 `connect-src 'self'` 解析为 websocket 协议，更多信息，请查看这个 [issue](https://github.com/w3c/webappsec-csp/issues/7)。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP 版本</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row"> 指令类型</th>
      <td>{{Glossary("Fetch directive","Fetch 指令")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} 回落</th>
      <td>
        是。如果没有此指令，用户代理将查找 <code>default-src</code> 指令。
      </td>
    </tr>
  </tbody>
</table>

## 语法

connect-src 策略可以允许一个或多个源：

```http
Content-Security-Policy: connect-src <source>;
Content-Security-Policy: connect-src <source> <source>;
```

### 源

`<source>` 可以是 [CSP 源值](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources)列出来的任意一个。

注意，这套相同的值可以用于所有 {{Glossary("fetch directive", "fetch 指令")}}（以及[许多其他指令](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)）。

## 示例

### 违规的案例

给定此 CSP 标头：

```http
Content-Security-Policy: connect-src https://example.com/
```

以下连接被禁止并且将不会加载：

```html
<a ping="https://not-example.com">
  <script>
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://not-example.com/");
    xhr.send();

    const ws = new WebSocket("https://not-example.com/");

    const es = new EventSource("https://not-example.com/");

    navigator.sendBeacon("https://not-example.com/", {
      /* … */
    });
  </script></a
>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 兼容性备注

- Firefox 23 之前，`xhr-src` 被用来代替 `connect-src` 指令，并且只用于限制 {{domxref("XMLHttpRequest")}} 的使用。

## 参见

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("a")}} [`ping`](/zh-CN/docs/Web/HTML/Element/a#ping)
- {{domxref("fetch()")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("WebSocket")}}
- {{domxref("EventSource")}}
