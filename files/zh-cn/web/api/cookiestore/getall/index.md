---
title: CookieStore：getAll() 方法
slug: Web/API/CookieStore/getAll
l10n:
  sourceCommit: 01e7af5aeee7833c129ddfa41eb719b123a8cdcc
---

{{securecontext_header}}{{APIRef("Cookie Store API")}} {{AvailableInWorkers}}

{{domxref("CookieStore")}} 接口的 **`getAll()`** 方法返回与传递给它的 `name` 或 `options` 匹配的所有 cookie 列表。

## 语法

```js-nolint
getAll(name)
getAll(options)
```

### 参数

- `name` {{optional_inline}}
  - : 记录 cookie 名称的字符串。

或

- `options` {{optional_inline}}

  - : 一个包括以下属性的对象：

    - `name`
      - : 记录 cookie 名称的字符串。
    - `url`
      - : 记录 cookie URL 的字符串。

> **备注：** `url` 选项可以修改特定 URL 下的 cookie。Service Worker 在其作用域下可以获得发送至任何 URL 的 cookie。在文档中，你只能在当前 URL 处获取 Cookie，因此文档上下文中唯一有效的 URL 是文档的 URL。

### 返回值

一个兑现为与指定的 `name` 或 `options` 对象匹配的 cookie 信息对象的 {{jsxref("Promise")}}。

每一个对象包含以下属性：

- `domain`

  - : 记录 cookie 域名的字符串。

- `expires`

  - : {{glossary("Unix time", "Unix 时间戳")}}（以毫秒为单位表示），记录 cookie 的到期日期。

- `name`

  - : 记录 cookie 名称的字符串。

- `partitioned`

  - : 一个布尔值，表示 cookie 是否是分区 cookie（`true`）或（`false`）。更多信息请参阅 [具有独立分区状态的 Cookie（CHIPS）](/zh-CN/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)。

- `path`

  - : 记录 cookie 路径的字符串。

- `sameSite`

  - : 以下 [`SameSite`](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) 的值之一：

    - `"strict"`
      - : Cookie 只会在第一方上下文中发送，不会与第三方网站发起的请求一起发送。
    - `"lax"`
      - : Cookie 不会在正常的跨站点子请求（例如将图像或框架加载到第三方站点）中发送，而是在用户在原始站点内导航时（即点击链接时）发送。
    - `"none"`
      - : Cookie 将被发送至所有上下文。

- `secure`

  - : 一个布尔值，表示 cookie 是否仅在安全上下文中使用（`true`）或（`false`）。

- `value`
  - : 记录 cookie 的值的字符串。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 如果源无法被{{glossary("Serialization", "序列化")}}成 URL，则抛出该异常。
- {{jsxref("TypeError")}}
  - : 以下情况抛出该异常：
    - 在主线程中使用时，指定的 `url` 选项与创建的 URL 不一致。
    - 指定的 `url` 选项的源与创建的 URL 的源不一致。
    - 通过 `name` 或 `options` 查询 Cookie 失败。

## 示例

在此示例中，我们不传递任何参数使用 `getAll()`。以对象数组的形式返回包含此上下文中所有 Cookie。

```js
const cookies = await cookieStore.getAll();

if (cookies.length > 0) {
  console.log(cookies);
} else {
  console.log("Cookie 未找到");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
