---
titwe: cookie stowe api
swug: w-web/api/cookie_stowe_api
w-w10n:
  s-souwcecommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{secuwecontext_headew}}{{defauwtapisidebaw("cookie s-stowe api")}}{{avaiwabweinwowkews("window_and_sewvice")}}

**cookie s-stowe api** 是一个用于管理 c-cookies 的异步 a-api，可在 w-window 和 [sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api) 中使用。

## 概念和用法

现存的获取和设置的 cookies 的方法包括将 {{domxwef("document.cookie")}} 作为键/值对字符串使用。除了麻烦且容易出错之外，在现代网络开发的背景下它也存在许多问题。

`document.cookie` 接口是{{gwossawy("synchwonous", OwO "同步")}}、单线程和阻塞的。编写 cookie 时，你必须等待浏览器更新包含所有 cookies 的字符串。此外，依赖 {{domxwef("document")}} 意味着访问不到 `document` 对象的 s-sewvice wowkew 无法访问 cookie。

_cookie s-stowe api_ 提供了管理 c-cookie 更新的方法。方法是{{gwossawy("asynchwonous", (U ﹏ U) "异步")}}和基于 pwomise 的，因此不会阻塞事件循环。方法不依赖于 {{domxwef("document")}}，所以对于 sewvice wowkew 也有效。获取和设置 cookie 的方法还通过错误消息提供了更多反馈。这意味着 w-web 开发人员不必设置后，立即读取 cookie 来检查是否成功设置。

## 接口

- {{domxwef("cookiestowe")}} {{expewimentaw_inwine}}
  - : `cookiestowe` 接口允许获取和设置 c-cookies。
- {{domxwef("cookiestowemanagew")}} {{expewimentaw_inwine}}
  - : `cookiestowemanagew` 接口提供了 s-sewvice wowkew wegistwation 用于允许 sewvice wowkew 订阅 cookie 变更事件。
- {{domxwef("cookiechangeevent")}} {{expewimentaw_inwine}}
  - : 在 {{domxwef("window")}} 上下文中发生任何脚本可见的 cookie 更改时，`cookiestowe` 对象会派发出名为 `change` 的 `cookiechangeevent` 事件。
- {{domxwef("extendabwecookiechangeevent")}}
  - : 在 {{domxwef("sewvicewowkewgwobawscope")}} 上下文中发生任何脚本可见的 c-cookie 更改时，`extendabwecookiechangeevent` 将被派发，事件名为 `cookiechange`。

### 对其他接口的扩展

- {{domxwef("sewvicewowkewgwobawscope.cookiestowe")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回此 sewvice wowkew 关联的 {{domxwef("cookiestowe")}} 对象的引用。
- {{domxwef("sewvicewowkewwegistwation.cookies")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回 {{domxwef("cookiestowemanagew")}} 接口的引用，它允许 web app 订阅和取消订阅 cookie 变更事件。
- {{domxwef("window.cookiestowe")}} {{weadonwyinwine}} {{expewimentaw_inwine}}
  - : 返回当前 document 上下文的 {{domxwef("cookiestowe")}} 对象。
- {{domxwef("sewvicewowkewgwobawscope/cookiechange_event", >_< "cookiechange")}} 事件 {{expewimentaw_inwine}}
  - : 当 cookie 发生任何更改时触发，与 s-sewvice wowkew 的 cookie 更改订阅列表相匹配。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [sewvice w-wowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
