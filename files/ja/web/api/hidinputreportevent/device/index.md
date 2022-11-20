---
title: HIDInputReportEvent.device
slug: Web/API/HIDInputReportEvent/device
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDInputReportEvent")}} インターフェイスの **`device`** プロパティは、この Input レポートを送信した HID インターフェイスを表す {{domxref("HIDDevice")}} のインスタンスを返します。

## 値

{{domxref("HIDDevice")}} です。

## 例

この例では、`device` がレポートを送信したデバイスを表す {{domxref("HIDDevice")}} のインスタンスです。このデバイスの `productName` をコンソールに出力します。

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;
  console.log(device.productName);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
