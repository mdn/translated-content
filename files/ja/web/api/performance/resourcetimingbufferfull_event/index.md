---
title: "Performance: resourcetimingbufferfull イベント"
short-title: resourcetimingbufferfull
slug: Web/API/Performance/resourcetimingbufferfull_event
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

`resourcetimingbufferfull` イベントは、ブラウザーの[リソースタイミングバッファー](/ja/docs/Web/API/Performance/setResourceTimingBufferSize)がいっぱいになると発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("resourcetimingbufferfull", (event) => {});

onresourcetimingbufferfull = (event) => {};
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

### バッファーが満杯になったときにサイズを拡大

次の例は、 `resourcetimingbufferfull` イベントを待ち受け、 {{domxref("Performance.setResourceTimingBufferSize", "setResourceTimingBufferSize()")}} メソッドを使用してバッファーサイズを増やします。

```js
function increaseFilledBufferSize(event) {
  console.log(
    "警告: リソースタイミングバッファーが満杯です。バッファーサイズを 500 に増やします。",
  );
  performance.setResourceTimingBufferSize(500);
}

performance.addEventListener(
  "resourcetimingbufferfull",
  increaseFilledBufferSize,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Performance.clearResourceTimings()")}}
- {{domxref("Performance.setResourceTimingBufferSize()")}}
