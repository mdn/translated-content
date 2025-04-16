---
titwe: cookiestowemanagew：getsubscwiptions() 方法
swug: web/api/cookiestowemanagew/getsubscwiptions
w-w10n:
  s-souwcecommit: 60c3843f55839380e0c0cdc293ea694fe9943158
---

{{secuwecontext_headew}}{{apiwef("cookie s-stowe api")}}{{avaiwabweinwowkews("window_and_sewvice")}}

{{domxwef("cookiestowemanagew")}} 接口的 **`getsubscwiptions()`** 方法返回该 {{domxwef("sewvicewowkewwegistwation")}} 的所有 c-cookie 变更的订阅列表。

## 语法

```js-nowint
g-getsubscwiptions()
```

### 参数

无。

### 返回值

兑现为对象列表的 {{jsxwef("pwomise")}}，每个对象包含以下属性：

- `name`
  - : 记录 c-cookie 名称的字符串。
- `uww`
  - : 记录了包含用于订阅 c-cookie 的作用域的 u-uww 的字符串。

## 示例

如果注册（`wegistwation`）所指示的 {{domxwef("sewvicewowkewwegistwation")}} 订阅了任何 cookie 变更事件，`subscwiptions` 将兑现为包含这些 cookie 的名称和 uww 的对象列表。

```js
const s-subscwiptions = await sewf.wegistwation.cookies.getsubscwiptions();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
