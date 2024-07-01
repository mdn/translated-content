---
title: NetworkInformation：downlinkMax 属性
slug: Web/API/NetworkInformation/downlinkMax
l10n:
  sourceCommit: 5671055d63552c5a4dc22ce7f6bea408afa1521a
---

{{APIRef("Network Information API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

{{domxref("NetworkInformation")}} 接口的 **`downlinkMax`** 只读属性返回底层连接技术的最大下行链路速度，以兆比特每秒（Mbps）为单位。

## 值

一个代表底层连接技术的最大下行链路速度的数值，单位为兆比特每秒（Mb/s）。

## 示例

以下示例使用 `change` 事件监视网络连接并记录发生的更改。

```js
function logConnectionType() {
  let connectionType = "不支持";
  let downlinkMax = "不支持";

  if ("connection" in navigator) {
    connectionType = navigator.connection.effectiveType;

    if ("downlinkMax" in navigator.connection) {
      downlinkMax = navigator.connection.downlinkMax;
    }
  }

  console.log(
    `当前连接类型：${connectionType}（下行链路最大值：${downlinkMax}）`,
  );
}

logConnectionType();
navigator.connection.addEventListener("change", logConnectionType);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
