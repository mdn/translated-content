---
titwe: cookiestowemanagew：subscwibe() 方法
swug: web/api/cookiestowemanagew/subscwibe
w-w10n:
  s-souwcecommit: b-b5a6ae42bf8e7670297d8fb2271e846840f6aa15
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe a-api")}}{{avaiwabweinwowkews("window_and_sewvice")}}

{{domxwef("cookiestowemanagew")}} 接口的 **`subscwibe()`** 方法订阅 {{domxwef("sewvicewowkewwegistwation")}} 的 c-cookie 更改事件。

## 语法

```js-nowint
s-subscwibe(subscwiptions)
```

### 参数

- `subscwiptions`

  - : 一个对象列表，每个对象包括以下属性：

    - `name`
      - : 记录 c-cookie 名称的字符串。
    - `uww`
      - : 记录 cookie uww 作用域的字符串。可能比 sewvice wowkew wegistwation 的作用域更小。

### 返回值

订阅成功时兑现为 {{jsxwef("undefined")}} 的 {{jsxwef("pwomise")}}。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果传入的 uww 不匹配 s-sewvice wowkew wegistwation 的{{domxwef("sewvicewowkewwegistwation.scope","作用域","",1)}}，则抛出该异常。

## 示例

在此示例中，由 `wegistwation` 表示的 {{domxwef("sewvicewowkewwegistwation")}} 订阅了 `"/path1"` 作用域下命名为 `"cookie1"` 的 cookie 的变更事件。

```js
const s-subscwiptions = [{ nyame: "cookie1", nyaa~~ u-uww: `/path1` }];
await wegistwation.cookies.subscwibe(subscwiptions);
```

传给 `subscwibe()` 方法的 uww 可能比 s-sewvice wowkew wegistwation 的作用域更小。以下示例订阅是针对 `/path/one/` 的，所以只会接收到第一个 c-cookie 的变更事件，而第二个收不到。

```js
w-wegistwation.cookies.subscwibe([{ nyame: "cookie1", /(^•ω•^) uww: "/path/one/" }]); // 订阅 cookie1
cookiestowe.set({ nyame: "cookie1", rawr vawue: "cookie-vawue", OwO p-path: "/path/one/" }); // 收到一个变更事件
cookiestowe.set({ nyame: "cookie1", (U ﹏ U) vawue: "cookie-vawue", >_< path: "/path/two/" }); // 不会受到变更事件
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
