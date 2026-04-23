---
title: CSP：default-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/default-src
---

HTTP {{HTTPHeader("Content-Security-Policy")}}（CSP）的 **`default-src`** 指令可以为其他 CSP {{Glossary("fetch directive", "fetch 指令")}}提供回退。对于以下列出的指令，假如不存在的话，那么用户代理会查找并应用 `default-src` 指令的值：

- {{CSP("child-src")}}
- {{CSP("connect-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("script-src")}}
- {{CSP("style-src")}}
- {{CSP("worker-src")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP 版本</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">指令类型</th>
      <td>{{Glossary("Fetch directive", "fetch 指令")}}</td>
    </tr>
  </tbody>
</table>

## 语法

`default-src` 策略允许指定一个或多个源：

```http
Content-Security-Policy: default-src <source>;
Content-Security-Policy: default-src <source> <source>;
```

### 源

`<source>` 可以是 [CSP 源值](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax)中列出的任何值。

注意，这些值可以在所有的 {{Glossary("fetch directive", "fetch 指令")}}（以及[其他指令](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax)）中使用。

## 示例

### 不继承 default-src 的情况

假如设定了其他指令，那么 `default-src` 不会对它们起作用。这个标头：

```http
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

与下面的等价：

```http
Content-Security-Policy: connect-src 'self';
                         font-src 'self';
                         frame-src 'self';
                         img-src 'self';
                         manifest-src 'self';
                         media-src 'self';
                         object-src 'self';
                         script-src https://example.com;
                         style-src 'self';
                         worker-src 'self'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("connect-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("script-src")}}
- {{CSP("style-src")}}
- {{CSP("worker-src")}}
