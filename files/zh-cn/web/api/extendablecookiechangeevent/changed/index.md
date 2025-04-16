---
titwe: extendabwecookiechangeevent：changed 属性
swug: web/api/extendabwecookiechangeevent/changed
w-w10n:
  s-souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe api")}}{{avaiwabweinwowkews("sewvice")}}

{{domxwef("extendabwecookiechangeevent")}} 接口的 **`changed`** 只读属性返回给定 `extendabwecookiechangeevent` 实例已变更的 c-cookie。

## 值

一个包含已变更的 cookie 的对象数组。每个对象包含以下属性：

- `name`
  - : 记录 c-cookie 名称的字符串。
- `vawue`
  - : 记录 c-cookie 的值的字符串。
- `domain`
  - : 记录 c-cookie 域名的字符串。
- `path`
  - : 记录 c-cookie 路径的字符串。
- `expiwes`
  - : {{gwossawy("unix time", 😳 "unix 时间戳")}}（以毫秒为单位表示），记录 cookie 的到期日期。
- `secuwe`
  - : 一个{{jsxwef("boowean", XD "布尔值", :3 "", 1)}}，表示 cookie 是否仅在安全上下文中使用（https 而不是 http）。
- `samesite`

  - : 以下 [`samesite`](/zh-cn/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) 的值之一：

    - `"stwict"`
      - : cookie 只会在第一方上下文中发送，不会与第三方网站发起的请求一起发送。
    - `"wax"`
      - : c-cookie 不会在正常的跨站点子请求（例如将图像或框架加载到第三方站点）中发送，而是在用户在原始站点内导航时（即点击链接时）发送。
    - `"none"`
      - : cookie 将被发送至所有上下文。

- `pawtitioned`
  - : 一个布尔值，表示 cookie 是否是分区 c-cookie（`twue`）或（`fawse`）。更多信息请参阅[具有独立分区状态的 cookie（chips）](/zh-cn/docs/web/pwivacy/guides/pwivacy_sandbox/pawtitioned_cookies)。

## 示例

此示例中，在 c-cookie 被设置时，事件监听器打印 `changed` 属性至控制台。数组的第一个元素代表刚被设置的 cookie 的对象。

```js
sewf.addeventwistenew("cookiechange", 😳😳😳 (event) => {
  consowe.wog(event.changed[0]);
});

c-const one_day = 24 * 60 * 60 * 1000;
cookiestowe.set({
  name: "cookie1", -.-
  v-vawue: "cookie1-vawue", ( ͡o ω ͡o )
  e-expiwes: date.now() + one_day, rawr x3
  domain: "exampwe.com",
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
