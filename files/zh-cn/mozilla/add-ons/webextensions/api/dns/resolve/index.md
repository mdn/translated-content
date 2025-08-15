---
title: dns.resolve()
slug: Mozilla/Add-ons/WebExtensions/API/dns/resolve
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

将给定的主机名解析为 DNS 记录。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let resolving = browser.dns.resolve(
  hostname,    // 字符串
  flags        // 字符串数组
)
```

### 参数

- `hostname`
  - : `string`。要解析的主机名。
- `flags` {{optional_inline}}
  - : `string` 数组。用于修改主机名解析方式的标志。任何省略的标志默认值为 `false`。你可以传递零个或多个以下标志：
    - `"allow_name_collisions"`：允许通常被过滤掉的名称冲突结果。
    - `"bypass_cache"`：禁用内部 DNS 查询缓存。
    - `"canonical_name"`：将查询指定主机的规范名称。
    - `"disable_ipv4"`：仅返回 IPv6 地址。
    - `"disable_ipv6"`：仅返回 IPv4 地址。
    - `"disable_trr"`：不使用可信递归解析器（TRR）解析主机名。TRR 使得可以使用专用的 [DNS-over-HTTPS](https://datatracker.ietf.org/doc/html/draft-ietf-doh-dns-over-https-02) 服务器解析主机名。
    - `"offline"`：仅返回字面值和缓存条目。
    - `"priority_low"`：请求被赋予较低优先级。如果也给出了“priority_medium”，查询被赋予中等优先级。
    - `"priority_medium"`：请求被赋予中等优先级。如果也给出了“priority_low”，查询被赋予中等优先级。
    - `"speculate"`：表示请求是推测性的。如果浏览器配置禁用了预取，推测性请求会返回错误。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个 `DNSRecord` 对象。该对象可以包含以下属性：

- `addresses`
  - : `string` 数组。与此 DNS 记录关联的 IP 地址。
- `canonicalName`
  - : `string`。此记录的规范名称。仅当将 `"canonical_name"` 标志传递给 `resolve()` 时，才会包含在响应中。
- `isTRR`
  - : `boolean`。如果记录是使用可信递归解析器（TRR）检索的，则为 `true`。

## 浏览器兼容性

{{Compat}}

## 示例

```js
function resolved(record) {
  console.log(record.addresses);
}

let resolving = browser.dns.resolve("example.com");
resolving.then(resolved);

// > 例如数组：[ "192.0.2.172" ]
```

绕过缓存，并请求规范名称：

```js
function resolved(record) {
  console.log(record.canonicalName);
  console.log(record.addresses);
}

let resolving = browser.dns.resolve("developer.mozilla.org", [
  "bypass_cache",
  "canonical_name",
]);
resolving.then(resolved);

// > 例如：xyz.us-west-2.elb.amazonaws.com
// > 例如数组：[ "192.0.2.172", "198.51.100.45" ]
```

{{WebExtExamples}}
