---
title: HIDInputReportEvent.reportId
slug: Web/API/HIDInputReportEvent/reportId
l10n:
  sourceCommit: ff3545b816d9a945d3793ecc330a3b6cbdc59c1c
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDInputReportEvent")}} インターフェイスの **`reportId`** プロパティは、レポートを識別する 1 バイトの接頭辞、もしくは HID インターフェイスがレポート ID を用いていない場合 0 を返します。

## 値

識別用の 1 バイトの接頭辞です。

## 例

この例では、受信した Input レポートの `reportId` をコンソールに出力します。

```js
device.addEventListener("inputreport", (event) => {
  const { data, device, reportId } = event;
  console.log(reportId);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
