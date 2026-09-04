---
title: Network Information API
slug: Web/API/Network_Information_API
l10n:
  sourceCommit: 1fae6a1db8be34bc73fb9d1e0fb058c253045853
---

{{DefaultAPISidebar("Network Information API")}} {{AvailableInWorkers}}

**Network Information API** 提供了有關系統連線的訊息，包含一般的連線類型（例如：「wifi」、「cellular」等）。這可以用於根據使用者的連線狀況來選擇高畫質或低畫質的內容。

此介面由單一個 {{domxref("NetworkInformation")}} 物件組成，該物件的實例由 {{domxref("Navigator.connection")}} 屬性或 {{domxref("WorkerNavigator.connection")}} 屬性回傳。

## 介面

- {{domxref("NetworkInformation")}}
  - : 提供裝置用於與網路通訊的連線訊息，並提供一種讓腳本在連線類型變更時收到通知的方法。`NetworkInformation` 介面無法直接實例化。需改透過 {{domxref("Navigator")}} 介面或 {{domxref("WorkerNavigator")}} 介面來存取。

### 對其他介面的擴充功能

- {{domxref("Navigator.connection")}} {{ReadOnlyInline}}
  - : 回傳一個包含裝置網路連線訊息的 {{domxref("NetworkInformation")}} 物件。
- {{domxref("WorkerNavigator.connection")}} {{ReadOnlyInline}}
  - : 提供一個包含裝置網路連線訊息的 {{domxref("NetworkInformation")}} 物件。

## 範例

### 偵測連線變更

此範例監聽使用者連線的變更。

```js
let type = navigator.connection.effectiveType;

function updateConnectionStatus() {
  console.log(
    `連線類型已從 ${type} 變更為 ${navigator.connection.effectiveType}`,
  );
  type = navigator.connection.effectiveType;
}

navigator.connection.addEventListener("change", updateConnectionStatus);
```

### 預先載入大型資源

連線物件對於決定是否預先載入會佔用大量頻寬或記憶體的資源非常有用。此範例會在頁面載入後隨即呼叫，以檢查連線類型，判斷是否不適合預先載入視訊。如果發現行動數據連線，則將 `preloadVideo` 旗標設定為 `false`。為了簡單明瞭，此範例僅測試一種連線類型。實際的使用案例可能會使用 switch 陳述式或其他方法來檢查 {{domxref("NetworkInformation.type")}} 的所有可能值。無論 `type` 值為何，你都可以透過 {{domxref("NetworkInformation.effectiveType")}} 屬性取得連線速度的估算值。

```js
let preloadVideo = true;
const connection = navigator.connection;
if (connection) {
  if (connection.effectiveType === "slow-2g") {
    preloadVideo = false;
  }
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Online 與 offline 事件](/zh-TW/docs/Web/API/Navigator/onLine)
