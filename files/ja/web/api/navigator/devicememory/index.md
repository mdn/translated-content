---
title: Navigator.deviceMemory
slug: Web/API/Navigator/deviceMemory
---

{{APIRef("Device Memory")}}{{securecontext_header}}{{SeeCompatTable}}

**`deviceMemory`** は {{domxref("Navigator")}} インターフェイスの読み取り専用プロパティで、端末のおよそのメモリ量をギガバイト単位で返します。

報告される値は、フィンガープリントを抑制するために概数になっています。この値は、最も近い 2 の累乗に切り捨て、その値を 1024 で割ることによって概算されています。その後、メモリーが非常に少ない、または非常に多い端末の所有者のプライバシーを保護するため、下限と上限の範囲内に丸められます。

## 構文

```js
memoryAmount = navigator.deviceMemory;
```

### 値

浮動小数点値で `0.25`, `0.5`, `1`, `2`, `4`, `8` のうちのいずれかです。

## 例

```js
const memory = navigator.deviceMemory;
console.log(`この端末には ${memory}GiB 以上の RAM があります。`);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [端末メモリー API](/ja/docs/Web/API/Device_Memory_API)
- HTTP の {{HTTPHeader("Device-Memory")}} ヘッダー
