---
title: 'CSP: font-src'
slug: Web/HTTP/Headers/Content-Security-Policy/font-src
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP 内容安全策略) 中 **`font-src`** 指令定义了 {{cssxref("@font-face")}} 加载字体的有效源规则。

| CSP 版本                    | 1                                                             |
| --------------------------- | ------------------------------------------------------------- |
| 指令类型                    | {{Glossary("Fetch directive")}}                               |
| {{CSP("default-src")}} 回落 | 是。如果 **`font-src`** 没有指定，则使用 `default-src` 指令。 |

## 语法

`font-src` 策略可以包含一个或多个源：

```plain
Content-Security-Policy: font-src <source>;
Content-Security-Policy: font-src <source> <source>;
```

### 源代码

`<source>` 可以是 [CSP 源值](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources)列出来的任意一个。

注意，这套相同的值可以用于所有 {{Glossary("fetch directive", "fetch 指令")}}（以及[许多其他指令](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)）。

## 示例

### 违规的案例

给定此 CSP 标头：

```bash
Content-Security-Policy: font-src https://example.com/
```

以下的字体源将被阻止，不会加载到浏览器中：

```html
<style>
  @font-face {
    font-family: "MyFont";
    src: url("https://not-example.com/font");
  }
  body {
    font-family: "MyFont";
  }
</style>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Content-Security-Policy")}}（内容安全性策略）
- {{cssxref("@font-face")}}
