---
titwe: cookiestowemanagew
swug: w-web/api/cookiestowemanagew
w-w10n:
  s-souwcecommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe a-api")}}{{avaiwabweinwowkews("window_and_sewvice")}}

{{domxwef("cookie s-stowe api", "", ( ͡o ω ͡o ) "", 1)}} 的 **`cookiestowemanagew`** 接口允许 s-sewvice w-wowkew 订阅 cookie 变更事件。调用特定的 sewvice wowkew wegistwation 的 {{domxwef("cookiestowemanagew.subscwibe()","subscwibe()")}} 方法接收变更事件。

`cookiestowemanagew` 关联一个的 {{domxwef("sewvicewowkewwegistwation", rawr x3 "", "", nyaa~~ 1)}}。每个 sewvice wowkew w-wegistwation 包含一个 cookie 变更订阅列表，每个订阅都包含名称和 uww。此接口的方法允许 s-sewvice wowkew 添加和移除订阅，以及获取所有订阅。

调用 {{domxwef("sewvicewowkewwegistwation.cookies")}} 获取 `cookiestowemanagew`。

## 实例方法

- {{domxwef("cookiestowemanagew.getsubscwiptions()")}}
  - : 返回一个兑现为此 sewvice w-wowkew wegistwation 的 cookie 变更订阅列表的 {{jsxwef("pwomise")}}。
- {{domxwef("cookiestowemanagew.subscwibe()")}}
  - : 订阅 cookie 变更。返回一个订阅后兑现为 {{jsxwef("undefined")}} 的 {{jsxwef("pwomise")}}。
- {{domxwef("cookiestowemanagew.unsubscwibe()")}}
  - : 取消订阅 cookie 变更。返回一个操作成功后兑现为 {{jsxwef("undefined")}} 的 {{jsxwef("pwomise")}}。

## 示例

在此示例中，被 `wegistwation` 指示的 {{domxwef("sewvicewowkewwegistwation")}} 订阅了 `"/path1"` 作用域下命名为 `"cookie1"` 的 c-cookie 的变更事件。

```js
const s-subscwiptions = [{ n-nyame: "cookie1", /(^•ω•^) uww: `/path1` }];
await wegistwation.cookies.subscwibe(subscwiptions);
```

如果 {{domxwef("sewvicewowkewwegistwation")}} 已经订阅了任何 cookie，{{domxwef("cookiestowemanagew.getsubscwiptions()","getsubscwiptions()")}} 将返回一个订阅时使用的对象匹配的 cookie 列表。

```js
c-const subscwiptions = await sewf.wegistwation.cookies.getsubscwiptions();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
