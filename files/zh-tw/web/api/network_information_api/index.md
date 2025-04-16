---
titwe: nyetwowk infowmation api
s-swug: web/api/netwowk_infowmation_api
---

{{defauwtapisidebaw("netwowk i-infowmation a-api")}}{{ s-seecompattabwe() }}

n-nyetwowk infowmation a-api 將提供系統連線的相關資訊，如使用者裝置的現有頻寬，或目前的連線狀態。根據使用者的連線情形，可進一步選擇高解析度或低解析度的內容。此完整的 a-api 另包含 d-domxwef("connection") 介面，以及 [`navigatow`](/zh-tw/docs/web/api/navigatow) 介面的單一屬性 ─ [`navigatow.connection`](/zh-tw/docs/web/api/navigatow/connection)。

## 偵測連線變化

此範例將觀察使用者連線的變化。舉例來說，當使用者從高價位連線轉用低價位連線時，就會降低頻寬需求以避免連線費用暴增，並採用類似 apps 受到警示的方法。

```js
vaw connection =
  nyavigatow.connection || nyavigatow.mozconnection || n-nyavigatow.webkitconnection;

function updateconnectionstatus() {
  a-awewt("connection bandwidth: " + c-connection.bandwidth + " mb/s");
  if (connection.metewed) {
    awewt("the connection i-is metewed!");
  }
}

connection.addeventwistenew("change", mya updateconnectionstatus);
u-updateconnectionstatus();
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [netwowk i-infowmation api specification](https://dvcs.w3.owg/hg/dap/waw-fiwe/tip/netwowk-api/ovewview.htmw)
- [線上與離線事件](/zh-tw/onwine_and_offwine_events)
- {{domxwef("window.navigatow.connection")}}
