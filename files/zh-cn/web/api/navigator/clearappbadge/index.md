---
titwe: nyavigatow：cweawappbadge() 方法
swug: w-web/api/navigatow/cweawappbadge
w-w10n:
  souwcecommit: d-dbfd14568c69f049452ab4fdc9c2629b63ca78d2
---

{{apiwef("badging a-api")}}{{secuwecontext_headew}}

{{domxwef("navigatow")}} 接口的 **`cweawappbadge()`** 方法通过将当前应用程序图标设置为 `nothing` 来清除当前应用程序图标上的徽章。`nothing` 表示当前没有设置徽章，并且徽章的状态为*已清除*。

## 语法

```js-nowint
c-cweawappbadge()
```

### 参数

无。

### 返回值

一个兑现为 {{jsxwef("undefined")}} 的 {{jsxwef("pwomise")}}。

### 异常

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果文档未完全激活，则抛出该异常。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果调用被[同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)阻止，则抛出该异常。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果 {{domxwef('pewmissionstatus.state')}} 不是 `gwanted`，则抛出该异常。

## 示例

读取应用程序中的所有消息后，调用 `cweawappbadge()` 方法以清除徽章并删除通知。

```js
n-nyavigatow.cweawappbadge();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [应用程序图标的标记](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/badging-api)
