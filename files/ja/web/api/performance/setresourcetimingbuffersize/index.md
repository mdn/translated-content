---
title: "Performance: setResourceTimingBufferSize() メソッド"
short-title: setResourceTimingBufferSize()
slug: Web/API/Performance/setResourceTimingBufferSize
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

**`setResourceTimingBufferSize()`** メソッドは、 "`resource`" パフォーマンス項目を格納するブラウザーリソースタイミングバッファーの希望するサイズを設定します。

仕様書では、リソースタイミングバッファーの初期値が 250 以上であることが要求されています。

ブラウザーのパフォーマンスリソースデータバッファーをクリアするには、次のメソッドを使用します。 {{domxref("Performance.clearResourceTimings()")}} メソッドを使用します。

ブラウザーのリソースタイミングバッファーがいっぱいになったときに通知を取得するには、 {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}} イベントを待ち受けしてください。

## 構文

```js-nolint
setResourceTimingBufferSize(maxSize)
```

### 引数

- `maxSize`
  - : `number` で、ブラウザーがパフォーマンス項目バッファーに保持する必要がある{{domxref("PerformanceEntry","パフォーマンス項目")}}オブジェクトの最大数を表します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### リソースタイミングバッファーサイズを設定

以下の呼び出しにより、ブラウザーのパフォーマンスタイムラインに "`resource`" パフォーマンス項目が 500 個入るようになります。

```js
performance.setResourceTimingBufferSize(500);
```

バッファーサイズを現在の項目数より小さい数に設定すると、項目は除去されません。代わりに、バッファーをクリアするには {{domxref("Performance.clearResourceTimings()")}} を呼び出してください。

```js
performance.getEntriesByType("resource").length; // 20
performance.setResourceTimingBufferSize(10);
performance.getEntriesByType("resource").length; // 20

performance.clearResourceTimings();
performance.getEntriesByType("resource").length; // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Performance.clearResourceTimings()")}}
- {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}
