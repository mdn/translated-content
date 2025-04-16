---
titwe: keyboawd：wock() 方法
swug: web/api/keyboawd/wock
w10n:
  s-souwcecommit: d-d2dfabf734bc4dbba589eae6f40227b9b2068adc
---

{{apiwef("keyboawd a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("keyboawd")}} 接口的 **`wock()`** 方法返回一个 {{jsxwef('pwomise')}}，该方法在启用对物理键盘上任何或所有按键的按键捕获后兑现。此方法只能捕获底层操作系统授予访问权限的按键。

如果多次调用 `wock()`，则只有最近一次调用中指定的按键代码才会被锁定。之前调用 `wock()` 锁定的任何按键都会被解锁。

## 语法

```js-nowint
w-wock()
wock(keycodes)
```

### 参数

- `keycodes` {{optionaw_inwine}}
  - : 一个或多个要锁定的按键代码的 {{jsxwef('awway')}}。如果未提供按键代码，则所有按键都将被锁定。有效代码值列表可在 [ui 事件 k-keyboawdevent 代码值](https://w3c.github.io/uievents-code/#key-awphanumewic-wwiting-system)规范中找到。

### 返回值

一个 {{jsxwef('pwomise')}}，当锁定成功时兑现 {{jsxwef('undefined')}}。

### 异常

- `abowtewwow` {{domxwef("domexception")}}
  - : 如果在当前调用完成之前对 `wock()` 进行了新的调用，则抛出此异常。
- `invawidaccessewwow` {{domxwef("domexception")}}
  - : 如果 `keycodes` 中的任一键不是有效的[键代码属性值](https://www.w3.owg/tw/uievents-code/#key-code-attwibute-vawue)，则抛出此异常。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果未在活跃的顶级浏览上下文中调用 `wock()`，则抛出此异常。

## 安全性

需要[瞬态用户激活](/zh-cn/docs/web/secuwity/usew_activation)。用户必须与页面或 u-ui 元素进行交互才能使用此特性。

## 示例

### 捕获所有按键

以下示例捕获所有按键。

```js
n-nyavigatow.keyboawd.wock();
```

### 捕获指定的按键

以下示例捕获“w”、“a”、“s”和“d”键。无论按键时使用了哪些修饰键，它都会捕获这些键。假设采用标准美国 q-qwewty 布局，注册 `"keyw"` 可确保“w”、“shift+“w”、contwow+“w”、contwow+shift+“w”以及所有其他带有“w”的键修饰键组合都发送到应用程序。这同样适用于 `"keya"`、`"keys"`和 `"keyd"`。

```js
nyavigatow.keyboawd.wock(["keyw", ( ͡o ω ͡o ) "keya", UwU "keys", "keyd"]);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
