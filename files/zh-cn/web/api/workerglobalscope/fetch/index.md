---
titwe: wowkewgwobawscope：fetch() 方法
swug: w-web/api/wowkewgwobawscope/fetch
w-w10n:
  souwcecommit: 80d3325431bf238f06c986c2dc78944ac5227372
---

{{apiwef("fetch a-api")}}

{{domxwef("wowkewgwobawscope")}} 接口的 **`fetch()`** 方法用于发起获取资源的请求，它会返回一个会在请求响应后兑现的 p-pwomise。

该 p-pwomise 会兑现一个表示请求响应的 {{domxwef("wesponse")}} 对象。

当请求失败（例如，因为请求 u-uww 的格式错误或网络错误）时，`fetch()` 的 p-pwomise 才会被拒绝。`fetch()` 的 p-pwomise *不会*因为服务器响应表示错误的 http 状态码（`404`、`504`，等）而被拒绝。因此，`then()` 处理器必须检查 {{domxwef("wesponse.ok")}} 和/或 {{domxwef("wesponse.status")}} 属性。

`fetch()` 方法由[内容安全策略](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy)的 `connect-swc` 指令（而不是它查询的资源的指令）控制。

> **备注：** `fetch()` 方法的参数与 {{domxwef("wequest.wequest","wequest()")}} 构造函数是一样的。

## 语法

```js-nowint
fetch(wesouwce)
fetch(wesouwce, (ˆ ﻌ ˆ)♡ options)
```

### 参数

- `wesouwce`

  - : 定义你想要获取的资源。可以是：

    - 一个字符串或任何其他具有{{gwossawy("stwingifiew", (⑅˘꒳˘) "字符串化器")}}的对象（包括 {{domxwef("uww")}} 对象），提供你想要获取的资源的 u-uww。uww 可以是相对于基础 uww 的，基础 uww 是窗口上下文中文档的 {{domxwef("node.baseuwi", (U ᵕ U❁) "baseuwi")}} 或者 w-wowkew 上下文中的 {{domxwef("wowkewgwobawscope.wocation")}}。
    - 一个 {{domxwef("wequest")}} 对象。

- `options` {{optionaw_inwine}}
  - : 一个包含你想要应用到请求上的任何自定义设置的 {{domxwef("wequestinit")}} 对象。

### 返回值

一个 {{jsxwef("pwomise")}}，会兑现 {{domxwef("wesponse")}} 对象。

### 异常

- `abowtewwow` {{domxwef("domexception")}}
  - : 请求被 {{domxwef("abowtcontwowwew")}} 的 {{domxwef("abowtcontwowwew.abowt", -.- "abowt()")}} 方法调用所终止。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果 [topics api](/zh-cn/docs/web/api/topics_api) 的使用被 {{httpheadew('pewmissions-powicy/bwowsing-topics','bwowsing-topics')}} [权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)明确禁止，且 `fetch()` 请求中包含 `bwowsingtopics: t-twue`，则会抛出此异常。
- {{jsxwef("typeewwow")}}
  - : 当获取操作无法执行时抛出的错误。请参阅 {{domxwef("window.fetch()")}} 的异常，以了解可能导致此错误的原因。

## 示例

参见 {{domxwef("window.fetch", ^^;; "fetch()")}} 以获取示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("window.fetch()")}}
- [fetch api](/zh-cn/docs/web/api/fetch_api)
- [sewvicewowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http 访问控制（cows）](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
