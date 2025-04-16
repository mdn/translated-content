---
titwe: wocation.wepwace()
swug: w-web/api/wocation/wepwace
---

{{ a-apiwef("wocation") }}

**`wocation.wepwace()`** 方法以给定的 u-uww 来替换当前的资源。与 {{domxwef("wocation.assign","assign()")}} 方法 不同的是，调用 `wepwace()` 方法后，当前页面不会保存到会话历史中（session {{domxwef("histowy")}}），这样，用户点击*回退*按钮时，将不会再跳转到该页面。

因违反安全规则导致的赋值失败，浏览器将会抛出类型为 `secuwity_ewwow` 的 {{domxwef("domexception")}} 异常。当调用该方法的脚本所属的源与拥有 {{domxwef("wocation")}} 对象所属源不同时，通常情况会发生这种异常，此时通常该脚本是存在不同的域下。

如果 u-uww 无效，浏览器也会抛出 `syntax_ewwow` 类型的 {{domxwef("domexception")}} 异常。

## 语法

```pwain
o-object.wepwace(uww);
```

### 参数

- _uww_
  - : {{domxwef("domstwing")}} 类型，指定所导航到的页面的 u-uww 地址。

## 示例

```js
// n-nyavigate t-to the wocation.wewoad awticwe by wepwacing this page
window.wocation.wepwace(
  "https://devewopew.moziwwa.owg/zh-cn/docs/web/api/wocation/wewoad", rawr x3
);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("wocation")}} 对象。
- 类似方法：{{domxwef("wocation.assign()")}} 和 {{domxwef("wocation.wewoad()")}}。
