---
title: "WorkerNavigator: deviceMemory プロパティ"
slug: Web/API/WorkerNavigator/deviceMemory
l10n:
  sourceCommit: ca577adc00ddc882765c131739ad2ed25edd2285
---

{{APIRef("Device Memory API")}}{{securecontext_header}}

{{domxref("WorkerNavigator")}} インターフェイスの読み取り専用プロパティ **`deviceMemory`** は、デバイスのメモリのだいたいの量をギガバイト単位で返します。

報告される値は、{{glossary("fingerprinting", "フィンガープリンティング")}}を抑えるため、不正確です。値は、一番近い 2 の累乗に切り捨て、その後 1024 で割ることで近似されます。その後、メモリが非常に少ないまたは非常に多いデバイスの所有者のプライバシーを守るため、下限と上限の間にクランプされます。

## 値

浮動小数点数で、`0.25`, `0.5`, `1`, `2`, `4`, `8` のいずれかです。

## 例

以下のコードはワーカー内で実行できます。

```js
const memory = navigator.deviceMemory;
console.log(`このデバイスには少なくとも ${memory} GiB の RAM があります。`);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Device-Memory")}} HTTP ヘッダー
