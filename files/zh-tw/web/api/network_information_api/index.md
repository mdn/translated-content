---
title: Network Information API
slug: Web/API/Network_Information_API
---

{{DefaultAPISidebar("Network Information API")}}{{ SeeCompatTable() }}

Network Information API 將提供系統連線的相關資訊，如使用者裝置的現有頻寬，或目前的連線狀態。根據使用者的連線情形，可進一步選擇高解析度或低解析度的內容。此完整的 API 另包含 domxref("Connection") 介面，以及 [`Navigator`](/zh-TW/docs/Web/API/Navigator) 介面的單一屬性 ─ [`Navigator.connection`](/zh-TW/docs/Web/API/Navigator/connection)。

## 偵測連線變化

此範例將觀察使用者連線的變化。舉例來說，當使用者從高價位連線轉用低價位連線時，就會降低頻寬需求以避免連線費用暴增，並採用類似 Apps 受到警示的方法。

```js
var connection =
  navigator.connection || navigator.mozConnection || navigator.webkitConnection;

function updateConnectionStatus() {
  alert("Connection bandwidth: " + connection.bandwidth + " MB/s");
  if (connection.metered) {
    alert("The connection is metered!");
  }
}

connection.addEventListener("change", updateConnectionStatus);
updateConnectionStatus();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Network Information API Specification](https://dvcs.w3.org/hg/dap/raw-file/tip/network-api/Overview.html)
- [線上與離線事件](/zh-TW/Online_and_offline_events)
- {{domxref("window.navigator.connection")}}
