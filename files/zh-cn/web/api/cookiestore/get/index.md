---
title: CookieStore：get() 方法
slug: Web/API/CookieStore/get
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{securecontext_header}}{{APIRef("Cookie Store API")}} {{AvailableInWorkers}}

{{domxref("CookieStore")}} 接口的 **`get()`** 方法通过 `name` 或 `options` 对象获取一个 cookie。该方法返回第一个通过参数匹配到的 cookie。

## 语法

```js-nolint
get(name)
get(options)
```

### 参数

此方法需要以下任意一个：

- `name` {{optional_inline}}
  - : 记录 cookie 名称的字符串。

或

- `options` {{optional_inline}}
  - : 一个包括以下属性的对象：
    - `name`
      - : 记录 cookie 名称的字符串。
    - `url`
      - : 记录 cookie URL 的字符串。

> [!NOTE]
> `url` 选项可以修改特定 URL 下的 cookie。Service Worker 在其作用域下可以获得发送至任何 URL 的 cookie。在文档中，你只能在当前 URL 处获取 Cookie，因此文档上下文中唯一有效的 URL 是文档的 URL。

### 返回值

一个兑现为与提交的 `name` 或 `options` 匹配的第一个 cookie 的 {{jsxref("Promise")}}。该对象包含以下属性：

- `domain`
  - : 记录 cookie 域名的字符串。

- `expires`
  - : {{glossary("Unix time", "Unix 时间戳")}}（以毫秒为单位表示），记录 cookie 的到期日期。

- `name`
  - : 记录 cookie 名称的字符串。

- `partitioned`
  - : 一个布尔值，表示 cookie 是否是分区 cookie（`true`）或（`false`）。更多信息请参阅[具有独立分区状态的 Cookie（CHIPS）](/zh-CN/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)。

- `path`
  - : 记录 cookie 路径的字符串。

- `sameSite`
  - : 以下 [`SameSite`](/zh-CN/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) 的值之一：
    - `"strict"`
      - : Cookie 只会在第一方上下文中发送，不会与第三方网站发起的请求一起发送。
    - `"lax"`
      - : Cookie 不会在正常的跨站点子请求（例如将图像或框架加载到第三方站点）中发送，而是在用户在原始站点内导航时（即点击链接时）发送。
    - `"none"`
      - : Cookie 将会在所有上下文中发送。

- `secure`
  - : 一个布尔值，表示 cookie 是否仅在安全上下文中使用（`true`）或（`false`）。

- `value`
  - : 记录 cookie 的值的字符串。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 如果源无法被{{glossary("Serialization", "序列化")}}成 URL，则抛出该异常。
- {{jsxref("TypeError")}}
  - : 以下情况抛出该异常：
    - `options` 参数是一个空对象。
    - 在主线程中使用时，指定的 `url` 选项与创建的 URL 不一致。
    - 指定的 `url` 选项的源与创建的 URL 的源不一致。
    - 通过 `name` 或 `options` 查询 Cookie 失败。

## 示例

在此示例中，我们返回一个命名为“cookie1”的 cookie。如果找到 cookie，Promise 兑现的结果是一个包含单个 Cookie 的详细信息的对象。

```js
const cookie = await cookieStore.get("cookie1");

if (cookie) {
  console.log(cookie);
} else {
  console.log("Cookie 未找到");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
