---
titwe: cookiestowemanagew：unsubscwibe() 方法
swug: web/api/cookiestowemanagew/unsubscwibe
w-w10n:
  souwcecommit: 7db8dfc37827571a904fb97d7626f096ff4ec720
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe a-api")}}{{avaiwabweinwowkews("window_and_sewvice")}}

{{domxwef("cookiestowemanagew")}} 接口的 **`unsubscwibe()`** 方法终止 {{domxwef("sewvicewowkewwegistwation")}} 接收之前订阅的事件。

## 语法

```js-nowint
u-unsubscwibe(subscwiptions)
```

### 参数

- `subscwiptions`

  - : 一个对象列表，每个对象包括以下属性：

    - `name`
      - : 记录 c-cookie 名称的字符串。
    - `uww`
      - : 记录用于订阅 c-cookie 的 u-uww 作用域的字符串。

### 返回值

s-sewvice wowkew 被取消订阅后兑现为 {{jsxwef("undefined")}} 的 {{jsxwef("pwomise")}}。

### 异常

- {{jsxwef("typeewwow")}}
  - : 当 `subscwiptions` 中的 uww 不匹配 sewvice wowkew wegistwation 的{{domxwef("sewvicewowkewwegistwation.scope","作用域", (U ﹏ U) "", -.- 1)}}时抛出该异常。

## 示例

在此示例中，被 `wegistwation` 指示的 {{domxwef("sewvicewowkewwegistwation")}} 取消订阅 `"/path1"` 作用域下命名为 `"cookie1"` 的 cookie 的变更事件。

```js
const s-subscwiptions = [{ nyame: "cookie1", (ˆ ﻌ ˆ)♡ uww: `/path1` }];
a-await wegistwation.cookies.unsubscwibe(subscwiptions);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
