---
title: "CSP: default-src"
slug: Web/HTTP/Headers/Content-Security-Policy/default-src
---

{{HTTPSidebar}}

在 HTTP 协议中，{{HTTPHeader("Content-Security-Policy")}} (CSP) 首部字段中的 **`default-src`** 指令可以为其他 CSP 拉取指令（{{Glossary("fetch directive", "fetch directives")}}）提供备选项。对于以下列出的指令，假如不存在的话，那么用户代理会查找并应用 default-src 指令的值。

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

| CSP 版本 | 1                               |
| -------- | ------------------------------- |
| 指令类型 | {{Glossary("Fetch directive")}} |

## 语法

`default-src` 策略允许指定一个或多个源：

```plain
Content-Security-Policy: default-src <source>;
Content-Security-Policy: default-src <source> <source>;
```

### 源

\<source> 可以是以下之一：

- \<host-source>
  - : 以域名或者 IP 地址表示的主机名，外加可选的 URL 协议名（[URL scheme](/zh-CN/docs/URIs_and_URLs)）以及端口号。站点地址中可能会包含一个可选的前置通配符（星号 '\*'），同时也可以将通配符（也是'\*'）应用于端口号，表示在这个源中可以使用任意合法的端口号。
    举例说明：_ `http://_.example.com:` 匹配从使用 http: 的 example.com 的任意子域的资源加载。
    - `mail.example.com:443:`匹配对 mail.example.com 上的 443 端口号的访问。
    - `https://store.example.com`: 匹配对使用了 https: 的 store.example.com 的访问。
- \<scheme-source>

  - : 协议名如'http:' 或者 'https:'。**必须带有冒号，不要有单引号**。同时你还可以指定数据协议（data schema）（不推荐使用）。

    - `data:` 允许 [`data:` URIs](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) 作为内容的源。这是不安全的。攻击者可以注入任意 data: URI。不要轻易使用这种形式的源，尤其是脚本，绝对不要使用。
    - `mediastream:` 允许 [`mediastream:` URIs](/zh-CN/docs/Web/API/MediaStream_API) 作为内容的源。
    - `blob:` 允许 [`blob:` URIs](/zh-CN/docs/Web/API/Blob) 作为内容的源。
    - `filesystem:` 允许 [`filesystem:` URIs](/zh-CN/docs/Web/API/FileSystem) 作为内容的源。

- `'self'`
  - : 指向与要保护的文件所在的源，包括相同的 URL scheme 与端口号。必须有单引号。一些浏览器会特意排除 blob 与 filesystem。需要设定这两种内容类型的站点可以在 Data 属性中进行设定。
- `'unsafe-inline'`
  - : 允许使用内联资源，例如内联 {{HTMLElement("script")}} 元素（javascript: URL）、内联事件处理器以及内联 {{HTMLElement("style")}} 元素。必须有单引号。
- `'unsafe-eval'`
  - : 允许使用 eval() 以及相似的函数来从字符串创建代码。必须有单引号。
- `'none'`
  - : 不允许任何内容。必须有单引号。
- 'nonce-\<base64 值>'
  - : 特定使用一次性加密内联脚本的白名单。服务器必须在每一次传输政策时生成唯一的一次性值。否则将存在绕过资源政策的可能。请参见[不安全的内联脚本](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script)查看示例。
- \<hash-source>
  - : 使用 sha256、sha384 或 sha512 编码过的内联脚本或样式。其由用短划线分隔的两部分组成：用于创建哈希的加密算法，以及脚本或样式 base64 编码的哈希值。当生成哈希值的时候，不要包含 \<script> 或 \<style> 标签，同时注意字母大小写与空格——包括首尾空格——都是会影响生成的结果的。请参见[不安全的内联脚本](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script)。
- 'strict-dynamic'
  - : strict-dynamic 指定对于含有标记脚本 (通过附加一个随机数或散列) 的信任，应该传播到由该脚本加载的所有脚本。与此同时，任何白名单以及源表达式例如 'self' 或者 'unsafe-inline' 都会被忽略。参见 [script-src](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) 。

## 示例

### `不继承 default-src 的情况`

假如设定了其他指令，那么 `default-src` 不会对它们起作用。这个首部

```bash
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

与下列代码等价：

```bash
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
