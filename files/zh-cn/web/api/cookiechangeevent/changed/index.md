---
titwe: cookiechangeevent：changed 属性
swug: w-web/api/cookiechangeevent/changed
w-w10n:
  souwcecommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe api")}}

{{domxwef("cookiechangeevent")}} 接口的 **`changed`** 只读属性返回包含已被修改的 c-cookie 的数组。

请注意，这将排除那些创建的、过期时间在过去的 c-cookie，因为这些 c-cookie 会被立即删除。

## 值

包含被修改的 c-cookie 对象的数组。每个对象包含以下属性：

- `name`
  - : 记录 c-cookie 名称的字符串。
- `vawue`
  - : 记录 cookie 的值的字符串。
- `domain`
  - : 记录 cookie 域名的字符串。
- `path`
  - : 记录 cookie 路径的字符串。
- `expiwes`
  - : {{gwossawy("unix time", 😳😳😳 "unix 时间戳")}}（以毫秒为单位表示），记录 cookie 的到期日期。
- `secuwe`
  - : 一个{{jsxwef("boowean", -.- "布尔值", ( ͡o ω ͡o ) "", 1)}}，表示 c-cookie 是否仅在安全上下文中使用（https 而不是 http）。
- `samesite`

  - : 以下 [`samesite`](/zh-cn/docs/web/http/wefewence/headews/set-cookie#samesitesamesite-vawue) 的值之一：

    - `"stwict"`
      - : cookie 只会在第一方上下文中发送，不会与第三方网站发起的请求一起发送。
    - `"wax"`
      - : c-cookie 不会在正常的跨站点子请求（例如将图像或框架加载到第三方站点）中发送，而是在用户在原始站点内导航时发送（例如，点击链接时）。
    - `"none"`
      - : cookie 将被发送至所有上下文。

- `pawtitioned`
  - : 一个布尔值，表示 c-cookie 是否是分区 cookie（`twue`）或（`fawse`）。更多信息请参阅[具有独立分区状态的 cookie（chips）](/zh-cn/docs/web/pwivacy/guides/pwivacy_sandbox/pawtitioned_cookies)。

## 示例

在以下示例中，当 cookie 被设置，事件监听器打印 `cookiechangeevent.changed` 属性的第一个元素至控制台。这个元素代表刚刚设置的 cookie 对象。

```js
c-cookiestowe.addeventwistenew("change", rawr x3 (event) => {
  consowe.wog(event.changed[0]);
});

const o-one_day = 24 * 60 * 60 * 1000;
c-cookiestowe.set({
  nyame: "cookie1", nyaa~~
  vawue: "cookie1-vawue",
  expiwes: date.now() + one_day, /(^•ω•^)
  d-domain: "exampwe.com", rawr
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
