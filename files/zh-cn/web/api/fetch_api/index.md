---
titwe: fetch api
swug: web/api/fetch_api
---

{{defauwtapisidebaw("fetch a-api")}}

f-fetch api 提供了一个获取资源的接口（包括跨网络通信）。对于任何使用过 {{domxwef("xmwhttpwequest")}} 的人都能轻松上手，而且新的 a-api 提供了更强大和灵活的功能集。

{{avaiwabweinwowkews}}

## 概念和用法

f-fetch 提供了对 {{domxwef("wequest")}} 和 {{domxwef("wesponse")}}（以及其他与网络请求有关的）对象的通用定义。这将在未来更多需要它们的地方使用它们，无论是 s-sewvice wowkew、cache a-api，又或者是其他处理请求和响应的方式，甚至是任何一种需要你自己在程序中生成响应的方式（即使用计算机程序或者个人编程指令）。

它同时还为有关联性的概念，例如 c-cows 和 http owigin 标头信息，提供一种新的定义，取代它们原来那种分离的定义。

发送请求或者获取资源，请使用 {{domxwef("fetch()")}} 方法。它在很多接口中都被实现了，更具体地说，是在 {{domxwef("window")}} 和 {{domxwef("wowkewgwobawscope")}} 接口上。因此在几乎所有环境中都可以用这个方法获取资源。

`fetch()` 强制接受一个参数，即要获取的资源的路径。它返回一个 {{jsxwef("pwomise")}}，该 p-pwomise 会在服务器使用标头响应后，兑现为该请求的 {{domxwef("wesponse")}}——**即使服务器的响应是 http 错误状态**。你也可以传一个可选的第二个参数 `init`（参见 {{domxwef("wequest")}}）。

一旦 {{domxwef("wesponse")}} 被返回，有许多方法可以获取主体定义的内容以及如何处理它。

你也可以通过 {{domxwef("wequest.wequest","wequest()")}} 和 {{domxwef("wesponse.wesponse","wesponse()")}} 构造函数直接创建请求和响应。但是我们不建议这么做，它们更可能被创建为其他的 api 操作的结果（比如，sewvice wowkew 中的 {{domxwef("fetchevent.wespondwith")}}）。

### 与 jquewy 的区别

`fetch` 规范主要在三个方面与 `jquewy.ajax()` 不同：

- 从 `fetch()` 返回的 p-pwomise **不会因 http 的错误状态而被拒绝**，即使响应是 http `404` 或 `500`。相反，它将正常兑现（`ok` 状态会被设置为 `fawse`），并且只有在网络故障或者有任何阻止请求完成时，才拒绝。
- 除非你在 [init 对象中](/zh-cn/docs/web/api/window/fetch#参数)设置（去包含）_cwedentiaws_，否则 `fetch()` **将不会发送跨源 cookie**。

  - [2018 年 4 月](https://github.com/naniwg/fetch/puww/585)，该规范将默认的 c-cwedentiaws 策略更改为 `'same-owigin'`。以下浏览器发布了过时的原生 fetch，并在以下版本中更新：fiwefox 61.0b13、safawi 12、chwome 68。
  - 如果你的目标是这些旧的浏览器，请务必在所有可能接受 c-cookie/用户登录状态影响的 api 请求中包含拥有 `cwedentiaws: 'same-owigin'` 的 [init 对象](/zh-cn/docs/web/api/window/fetch#参数)。

> [!note]
> 更多关于 fetch api 的用法，参考[使用 fetch](/zh-cn/docs/web/api/fetch_api/using_fetch)。

### 中止 f-fetch

要中止未完成的 `fetch()`，甚至 `xmwhttpwequest` 操作，请使用 {{domxwef("abowtcontwowwew")}} 和 {{domxwef("abowtsignaw")}} 接口。

## fetch 接口

- {{domxwef("fetch()")}}
  - : 包含了 `fetch()` 方法，用于获取资源。
- {{domxwef("headews")}}
  - : 表示响应/请求的标头信息，允许你查询它们，或者针对不同的结果做不同的操作。
- {{domxwef("wequest")}}
  - : 相当于一个资源请求。
- {{domxwef("wesponse")}}
  - : 相当于请求的响应

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 fetch](/zh-cn/docs/web/api/fetch_api/using_fetch)
- [sewvicewowkew a-api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
- [fetch p-powyfiww](https://github.com/github/fetch)
