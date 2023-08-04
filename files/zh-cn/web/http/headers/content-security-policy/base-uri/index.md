---
title: "CSP: base-uri"
slug: Web/HTTP/Headers/Content-Security-Policy/base-uri
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Content-Security-Policy")}}（内容安全策略）中的 **`base-uri`** 指令限制了可以应用于一个文档的 {{HTMLElement("base")}} 元素的 URL。假如指令值为空，那么任何 URL 都是允许的。如果指令不存在，那么用户代理会使用 {{HTMLElement("base")}} 元素中的值。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP 版本</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">指令类型</th>
      <td>{{Glossary("Document directive","文档指令")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} 回落</th>
      <td>无。没有设置则允许任何 URL。</td>
    </tr>
  </tbody>
</table>

## 语法

base-uri 安全策略可以设置一个或多个源：

```plain
Content-Security-Policy: base-uri <source>;
Content-Security-Policy: base-uri <source> <source>;
```

### 源

此指令与其他 CSP 指令一样，使用大部分与参数相同的源值：[CSP 源值](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources)。

然而，请注意，一些值对 `base-uri` 没有意义，例如关键字 `'unsafe-inline'` 和 `'strict-dynamic'`。

## 示例

### Meta tag 配置

```html
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
```

### Apache 配置

```bash
<IfModule mod_headers.c>
Header set Content-Security-Policy "base-uri 'self';
</IfModule>
```

### Nginx 配置

```bash
add_header Content-Security-Policy "base-uri 'self';"
```

### 违规的案列

假如你的域名不是 `example.com`，那么将 {{HTMLElement("base")}} 元素的 `href` 属性值设置成 `https://example.com` 会违反 CSP 策略。

```html example-bad
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
<base href="http://example.com/" />

<!-- Error: Refused to set the document's base URI to 'http://example.com/' because it violates the following Content Security Policy directive: "base-uri 'self'" -->
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{HTTPheader("Content-Security-Policy")}}
- {{HTMLElement("base")}}
- {{domxref("Node.baseURI")}}
