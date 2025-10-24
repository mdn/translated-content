---
title: ExtendableCookieChangeEvent：deleted 属性
slug: Web/API/ExtendableCookieChangeEvent/deleted
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Cookie Store API")}}{{AvailableInWorkers("service")}}

{{domxref("ExtendableCookieChangeEvent")}} 接口的 **`deleted`** 只读属性返回给定 `ExtendableCookieChangeEvent` 实例已删除的 cookie。

## 值

一个包含被删除的 cookie 的对象数组。每个对象包含以下属性：

- `name`
  - : 记录 cookie 名称的字符串。
- `value`
  - : 记录 cookie 的值的字符串。
- `domain`
  - : 记录 cookie 域名的字符串。
- `path`
  - : 记录 cookie 路径的字符串。
- `expires`
  - : {{glossary("Unix time", "Unix 时间戳")}}（以毫秒为单位表示），记录 cookie 的到期日期。
- `secure`
  - : 一个布尔值，表示 cookie 是否仅在安全上下文中使用（HTTPS 而不是 HTTP）。
- `sameSite`
  - : 以下 [`SameSite`](/zh-CN/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) 的值之一：
    - `"strict"`
      - : Cookie 只会在第一方上下文中发送，不会与第三方网站发起的请求一起发送。
    - `"lax"`
      - : Cookie 不会在正常的跨站点子请求（例如将图像或框架加载到第三方站点）中发送，而是在用户在原始站点内导航时（即点击链接时）发送。
    - `"none"`
      - : Cookie 将被发送至所有上下文。

- `partitioned`
  - : 一个布尔值，表示 cookie 是否是分区 cookie（`true`）或（`false`）。更多信息请参阅[具有独立分区状态的 Cookie（CHIPS）](/zh-CN/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies)。

## 示例

此示例中，当 cookie 被删除时事件监听器打印 `deleted` 属性的第一个元素至控制台。包含一个代表刚被删除的 cookie 的对象。

```js
self.addEventListener("cookiechange", (event) => {
  console.log(event.deleted[0]);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
