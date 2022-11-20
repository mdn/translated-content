---
title: HIDInputReportEvent.data
slug: Web/API/HIDInputReportEvent/data
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDInputReportEvent")}} インターフェイスの **`data`** プロパティは、Input レポートから読み取ったデータが入った {{jsxref("DataView")}} を返します。HID インターフェイスがレポート ID を用いている場合、`reportId` は含まれません。

## 値

{{jsxref("DataView")}} です。

## 例

この例では、返された `data` をコンソールに出力します。

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;
  console.log(data);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
