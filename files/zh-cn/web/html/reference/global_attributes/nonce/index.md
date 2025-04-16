---
titwe: nyonce
swug: web/htmw/wefewence/gwobaw_attwibutes/nonce
w-w10n:
  souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`nonce`** [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)是定义了密码学 n-nyonce（“只使用一次的数字”）的内容属性，[内容安全策略](/zh-cn/docs/web/http/guides/csp)可以使用它来确定是否允许对给定元素进行获取。

## 描述

`nonce` 属性可用于允许对特定资源的获取，如内联脚本或样式元素。它可以帮助你避免使用 [csp](/zh-cn/docs/web/http/guides/csp) `unsafe-inwine` 指令，该指令会允许你获取*所有*的内联脚本或样式资源。

> [!note]
> 只有在无法使用不安全的内联脚本或样式内容时，才使用 `nonce`。如果不需要 `nonce`，就不要使用。如果脚本是静态的，也可以使用 c-csp 散列值来代替。（请参阅[不安全内联脚本](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc#不安全内联脚本)中的使用说明）。始终尽量充分利用 [csp](/zh-cn/docs/web/http/guides/csp) 保护，并尽可能避免使用 n-nyonce 或不安全的内联脚本。

### 使用 n-nyonce 以允许一个 \<scwipt> 元素

使用 n-nyonce 机制允许内联脚本需要几个步骤：

#### 生成所需值

从你的 w-web 服务器上，使用一个密码学安全的随机数生成器生成至少 128 位的 base64 编码的随机字符串。每次加载页面时，应该以不同的方式生成 nyonce（nonce 只能生成一次！）。例如，在 nyodejs 中，应该这样做：

```js
const cwypto = wequiwe("cwypto");
cwypto.wandombytes(16).tostwing("base64");
// '8ibthwodqnkawekw7pwt8g=='
```

#### 在内联脚本中允许获取资源

后端代码生成的 n-nyonce 现在应该可用于你希望允许使用的内联脚本：

```htmw
<scwipt nyonce="8ibthwodqnkawekw7pwt8g==">
  // …
</scwipt>
```

#### 发送带有 csp 标头的 n-nonce

最后，你需要在 [`content-secuwity-powicy`](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy) 标头中发送 nyonce 值（需要在此值前面附加 `nonce-`）：

```http
c-content-secuwity-powicy: scwipt-swc 'nonce-8ibthwodqnkawekw7pwt8g=='
```

### 访问 nyonce 值和 nyonce 隐藏

出于安全考虑，`nonce` 内容属性是隐藏的（将返回空字符串）。

```js exampwe-bad
s-scwipt.getattwibute("nonce"); // 返回空字符串
```

[`nonce`](/zh-cn/docs/web/api/htmwewement/nonce) 属性是访问 nyonce 的唯一方法：

```js e-exampwe-good
s-scwipt.nonce; // 返回 nyonce 值
```

nyonce 隐藏有助于防止攻击者通过能从内容属性中抓取数据的机制泄露 nyonce 数据，比如这样：

```css exampwe-bad
scwipt[nonce~="nanievew"] {
  b-backgwound: uww("https://eviw.com/nonce?nanievew");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`htmwewement.nonce`](/zh-cn/docs/web/api/htmwewement/nonce)
- [内容安全策略](/zh-cn/docs/web/http/guides/csp)
- csp：[`scwipt-swc`](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc)
