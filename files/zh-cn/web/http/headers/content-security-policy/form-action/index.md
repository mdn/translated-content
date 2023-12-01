---
title: "CSP: form-action"
slug: Web/HTTP/Headers/Content-Security-Policy/form-action
---

{{HTTPSidebar}}

HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) 的 **`form-action`** 指令能够限定当前页面中表单的提交地址。

> **警告：** 在表单提交之后， `form-action` 指令是否应该阻止重定向仍有待讨论，各个浏览器对于此行为的实现也不尽相同（例如，Chrome 63 会阻止重定向，而 Firefox 57 则不会）。

| CSP version                     | 2                                    |
| ------------------------------- | ------------------------------------ |
| Directive type                  | {{Glossary("Navigation directive")}} |
| {{CSP("default-src")}} fallback | No. 未设定时允许任何值。             |

## 语法

`form-action` 策略允许设定一个或多个源：

```plain
Content-Security-Policy: form-action <source>;
Content-Security-Policy: form-action <source> <source>;
```

## 示例

### meta 标签配置

```html
<meta http-equiv="Content-Security-Policy" content="form-action 'none'" />
```

### Apache 服务器配置

```bash
<IfModule mod_headers.c>
Header set Content-Security-Policy "form-action 'none';
</IfModule>
```

### Nginx 配置

```bash
add_header Content-Security-Policy "form-action 'none';"
```

### 反例

将 {{HTMLElement("form")}} 元素的 action 设置为内联 JavaScript 会违反 CSP 规则。

```html example-bad
<meta http-equiv="Content-Security-Policy" content="form-action 'none'" />

<form action="javascript:alert('Foo')" id="form1" method="post">
  <input type="text" name="fieldName" value="fieldValue" />
  <input type="submit" id="submit" value="submit" />
</form>

<!-- Error: Refused to send form data because it violates the following Content Security Policy directive: "form-action 'none'". -->
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPheader("Content-Security-Policy")}}
- {{HTMLElement("form")}}
