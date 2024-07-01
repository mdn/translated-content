---
title: CSP：frame-ancestors
slug: Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
---

{{HTTPSidebar}}

HTTP 标头 {{HTTPHeader("Content-Security-Policy")}}（CSP）中的 `frame-ancestors` 指令指定了一个可以包含 {{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("object")}} 或 {{HTMLElement("embed")}} 等元素的有效父级。

当该指令设置为 `'none'` 时，其作用类似于 {{HTTPHeader("X-Frame-Options")}}`: DENY`（该标头被一些老版本浏览器所支持）。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP 版本（CSP version）</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">指令类型（Directive type）</th>
      <td>{{Glossary("Navigation directive")}}</td>
    </tr>
    <tr>
      <th scope="row">是否后备使用{{CSP("default-src")}}</th>
      <td>否。如未设置则允许所有可能值。</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        该指令不支持通过{{HTMLElement("meta")}} 元素或通过
        {{HTTPHeader("Content-Security-policy-Report-Only")}}
        头域所指定。
      </th>
    </tr>
  </tbody>
</table>

## Syntax

`frame-ancestors`策略可以设置一个或多个源\<source>：

```plain
Content-Security-Policy: frame-ancestors <source>;
Content-Security-Policy: frame-ancestors <source> <source>;
```

### Sources

\<source> 可以是如下内容：

> **备注：** `frame-ancestors` 指令的语法类似于其他指令的源列表（source list，如{{CSP("default-src")}}），但不允许 `'unsafe-eval'` 或`'unsafe-inline'` 。它也不会回退使用 `default-src` 的值。仅有如下的源列表是可用的：

- \<host-source>
  - : 一个 Internet 主机的名称或 IP 地址，以及一个可选的[URL scheme](/zh-CN/docs/URIs_and_URLs)和／或端口号。这些站点的地址可以包含一个可选的引导通配符（星号， `'*'），或者你可以使用通配符`（同样还是， `'*'）作为端口地址`，以示这个源的所有合法端口地址都是有效的。
    例子：_ `http://_.example.com`: 匹配所有使用 http:URL scheme 并来对于 example.com 及其子域名的加载意图。
    - `mail.example.com:443`: 匹配所有对于 mail.example.com 在 443 端口的访问意图。
    - `https://store.example.com`: 匹配所有使用 https:访问 store.example.com 的意图。
- \<scheme-source>

  - : 一个 schema 配置，比如'http:'或'https:'。注意，冒号是必要的。你同样也可以指定一个 data schema（但并不推荐）。

    - '`data:`' 允许 [`data:` URIs](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) 作为内容源。_这是不安全的，攻击者可以用此来注入恶意代码。请谨慎使用，并不要令其作用于脚本。_
    - `'mediastream:'` 允许 [`mediastream:` URIs](/zh-CN/docs/Web/API/MediaStream_API) 作为内容源。
    - `'blob:'` 允许 [`blob:` URIs](/zh-CN/docs/Web/API/Blob) 作为内容源。
    - `'filesystem:'` 允许 [`filesystem:` URIs](/zh-CN/docs/Web/API/FileSystem) 作为内容源。

- `'self'`
  - : 指向一个该受保护文档所在的源，包含同样的 URL schema 和端口号。必须用单引号设置。有些浏览器会从源指令中排`除 blob`和`filesystem`。需要允许这些内容类型的站点可以通过 Data 属性指定它们。
- `'none'`
  - : 指向一个空集，意味着没有 URL 会被匹配。也需要单引号包裹设置。

## Examples

```bash
Content-Security-Policy: frame-ancestors 'none';
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("X-Frame-Options")}}
