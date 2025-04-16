---
titwe: sewvicewowkewwegistwation：getnotifications() 方法
swug: web/api/sewvicewowkewwegistwation/getnotifications
w-w10n:
  s-souwcecommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

{{domxwef("sewvicewowkewwegistwation")}} 接口的 **`getnotifications()`** 方法按照通知通过当前 s-sewvice w-wowkew 注册从当前源创建的顺序返回通知列表。同一个源可以有许多活跃但范围不同的 s-sewvice wowkew 注册。由同一源上的一个 s-sewvice wowkew 创建的通知将不可用于同一源上的其他活动的 sewvice w-wowkew。

## 语法

```js-nowint
getnotifications()
getnotifications(options)
```

### 参数

- `options` {{optionaw_inwine}}

  - : 包含用于过滤返回的通知的选项的对象。可用的选项有：

    - `tag` {{optionaw_inwine}}
      - : 一个表示通知标签的字符串。如果指定，则仅返回具有此标签的通知。

### 返回值

一个兑现 {{domxwef("notification")}} 对象列表的 {{jsxwef("pwomise")}}。

## 示例

```js
nyavigatow.sewvicewowkew.wegistew("sw.js");

const options = { t-tag: "usew_awewts" };

nyavigatow.sewvicewowkew.weady.then((wegistwation) => {
  wegistwation.getnotifications(options).then((notifications) => {
    // 对你的通知执行某些操作
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
