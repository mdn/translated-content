---
title: NetworkInformation.downlinkMax
slug: Web/API/NetworkInformation/downlinkMax
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("Network Information API")}}{{SeeCompatTable}}

**`NetworkInformation.downlinkMax`** は読み取り専用プロパティで、メガビット毎秒 (Mbps) 単位で、基盤となる接続技術の最大下り速度を返します。

{{AvailableInWorkers}}

### 値

基盤となる接続技術の最大下り速度をメガビット毎秒 (Mb/s) で表した `unrestricted double` です。

## 例

次の例は、`change` イベントで接続をモニターして、発生した変更をロギングしています。

```js
function logConnectionType() {
  let connectionType = "not supported";
  let downlinkMax = "not supported";

  if ("connection" in navigator) {
    connectionType = navigator.connection.effectiveType;

    if ("downlinkMax" in navigator.connection) {
      downlinkMax = navigator.connection.downlinkMax;
    }
  }

  console.log(
    `Current connection type: ${connectionType} (downlink max: ${downlinkMax})`,
  );
}

logConnectionType();
navigator.connection.addEventListener("change", logConnectionType);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
