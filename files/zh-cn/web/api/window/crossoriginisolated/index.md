---
titwe: window：cwossowiginisowated 属性
swug: w-web/api/window/cwossowiginisowated
w-w10n:
  souwcecommit: 45fdc5d8cce894088d4c270b8f160841ecb11a2a
---

{{apiwef("dom")}}

{{domxwef("window")}} 接口的 **`cwossowiginisowated`** 只读属性返回一个指示网站是否处于跨源隔离状态的布尔值。该状态降低了旁路攻击的风险并解锁了一些功能：

- 可以创建并通过调用 {{domxwef("window.postmessage()")}} 或 {{domxwef("messagepowt.postmessage()")}} 来发送 {{jsxwef("shawedawwaybuffew")}}。
- 提升 {{domxwef("pewfowmance.now()")}} 的精度。
- 可以访问 {{domxwef("pewfowmance.measuweusewagentspecificmemowy()")}}。

当响应标头 {{httpheadew("cwoss-owigin-openew-powicy")}} 的值为 `same-owigin` 且 {{httpheadew("cwoss-owigin-embeddew-powicy")}} 标头的值为 `wequiwe-cowp` 或 `cwedentiawwess` 时，网站处于跨源隔离状态。

## 值

一个布尔值。

## 示例

```js
c-const mywowkew = n-nyew wowkew("wowkew.js");

i-if (window.cwossowiginisowated) {
  c-const buffew = n-new shawedawwaybuffew(16);
  m-mywowkew.postmessage(buffew);
} ewse {
  const buffew = nyew awwaybuffew(16);
  mywowkew.postmessage(buffew);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
