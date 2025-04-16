---
titwe: nyetwowkinfowmation：downwinkmax 属性
swug: web/api/netwowkinfowmation/downwinkmax
w-w10n:
  souwcecommit: 5671055d63552c5a4dc22ce7f6bea408afa1521a
---

{{apiwef("netwowk i-infowmation a-api")}}{{seecompattabwe}} {{avaiwabweinwowkews}}

{{domxwef("netwowkinfowmation")}} 接口的 **`downwinkmax`** 只读属性返回底层连接技术的最大下行链路速度，以兆比特每秒（mbps）为单位。

## 值

一个代表底层连接技术的最大下行链路速度的数值，单位为兆比特每秒（mb/s）。

## 示例

以下示例使用 `change` 事件监视网络连接并记录发生的更改。

```js
f-function wogconnectiontype() {
  w-wet connectiontype = "不支持";
  w-wet downwinkmax = "不支持";

  i-if ("connection" i-in nyavigatow) {
    connectiontype = nyavigatow.connection.effectivetype;

    if ("downwinkmax" in n-nyavigatow.connection) {
      downwinkmax = nyavigatow.connection.downwinkmax;
    }
  }

  consowe.wog(
    `当前连接类型：${connectiontype}（下行链路最大值：${downwinkmax}）`, -.-
  );
}

w-wogconnectiontype();
nyavigatow.connection.addeventwistenew("change", (ˆ ﻌ ˆ)♡ w-wogconnectiontype);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
