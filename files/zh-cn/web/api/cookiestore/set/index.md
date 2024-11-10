---
title: CookieStore：set() 方法
slug: Web/API/CookieStore/set
l10n:
  sourceCommit: 01e7af5aeee7833c129ddfa41eb719b123a8cdcc
---

{{securecontext_header}}{{APIRef("Cookie Store API")}} {{AvailableInWorkers}}

{{domxref("CookieStore")}} 接口的 **`set()`** 方法通过给定的 `name` 和 `value` 或 `options` 对象设置 cookie。

## 语法

```js-nolint
set(name, value)
set(options)
```

### 参数

此方法需要以下任意一个：

- `name` {{optional_inline}}
  - : 记录 cookie 名称的字符串。
- `value` {{optional_inline}}
  - : 表示 cookie 值的字符串。

或

- `options` {{optional_inline}}

  - : 一个包括以下属性的对象：

    - `domain` {{Optional_Inline}}
      - : 记录 cookie 域名的字符串。默认为 `null`。
    - `expires` {{Optional_Inline}}
      - : {{glossary("Unix time", "Unix 时间戳")}}（以毫秒为单位表示），记录 cookie 的到期日期。默认为 `null`。
    - `name`
      - : 记录 cookie 名称的字符串。
    - `partitioned` {{Optional_Inline}}
      - : 一个布尔值，表示 cookie 是否是分区 cookie（`true`）或（`false`）。更多信息请参阅 [具有独立分区状态的 Cookie（CHIPS）](/zh-CN/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)。
    - `path` {{Optional_Inline}}
      - : 记录 cookie 路径的字符串。默认为 `/`。
    - `sameSite` {{Optional_Inline}}

      - : 以下 [`SameSite`](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) 的值之一：

        - `"strict"`
          - : Cookie 只会在第一方上下文中发送，不会与第三方网站发起的请求一起发送。
        - `"lax"`
          - : Cookie 不会在正常的跨站点子请求（例如将图像或框架加载到第三方站点）中发送，而是在用户在原始站点内导航时（即点击链接时）发送。
        - `"none"`
          - : Cookie 将被发送至所有上下文。

    - `value`
      - : 表示 cookie 的值的字符串。

### 返回值

设置 Cookie 成功时兑现为 {{jsxref("undefined")}} 的 {{jsxref("Promise")}}。

### 异常

- `SecurityError` {{domxref("DOMException")}}
  - : 如果源无法被{{glossary("Serialization", "序列化")}}成 URL，则抛出该异常。
- {{jsxref("TypeError")}}
  - : 如果通过给定的 `name` 和 `value` 或 `options` 设置 cookie 失败，则抛出该异常。

## 示例

以下示例通过传递一个带有 `name`, `value`, `expires` 和 `domain` 的对象设置 cookie。

```js
const day = 24 * 60 * 60 * 1000;

cookieStore.set({
  name: "cookie1",
  value: "cookie1-value",
  expires: Date.now() + day,
  domain: "example.com",
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
