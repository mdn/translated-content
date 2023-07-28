---
title: "CSP: script-src-elem"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Content-Security-Policy")}}（CSP 内容安全性策略）中的 **`script-src-elem`** 指令指定了 JavaScript {{HTMLElement("script")}} 元素的有效来源。

这个指令仅在 `<script>` 元素（脚本请求和块）指定有效的来源。它不适用于触发脚本执行的的其他 JavaScript 源，例如内联脚本事件处理程序（`onclick`）、[在“unsafe-eval”（不安全地执行字符串表达式）检查下的](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions)脚本执行方法和 [XSLT 样式表](/zh-CN/docs/Web/XSLT)（可以使用 {{CSP("script-src")}} 为所有 JavaScript 脚本源指定有效来源，也可以使用 {{CSP("script-src-attr")}} 仅为内联样式脚本处理程序指定有效源）。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP 版本</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">指令类型</th>
      <td>{{Glossary("Fetch directive","fetch 指令")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} 回落</th>
      <td>
      是。如果这个指令不存在，则用户代理将查找 {{CSP("script-src")}} 指令，如果两个都不存在，则回落到 <code>default-src</code> 指令。
      </td>
    </tr>
  </tbody>
</table>

## 语法

`script-src-elem` 策略可以允许一个或者多个源：

```http
Content-Security-Policy: script-src-elem <source>;
Content-Security-Policy: script-src-elem <source> <source>;
```

`script-src-elem` 可以与 {{CSP("script-src")}} 一起使用：

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-elem <source>;
```

### 源

`<source>` 可以是 [CSP 源值](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources)中的任意一个。

请注意，这套相同的值可以用于所有 {{Glossary("fetch directive", "fetch 指令")}}（以及[许多其他的指令](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)）。

## 示例

### 违规的案例

给定此 CSP 标头：

```http
Content-Security-Policy: script-src-elem https://example.com/
```

…以下脚本被阻止，不会加载和执行：

```html
<script src="https://not-example.com/js/library.js"></script>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Content-Security-Policy")}}（内容安全策略）
- {{HTMLElement("script")}}
- {{CSP("script-src")}}
- {{CSP("script-src-attr")}}
