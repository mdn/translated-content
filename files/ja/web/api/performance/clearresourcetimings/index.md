---
title: "Performance: clearResourceTimings() メソッド"
short-title: clearResourceTimings()
slug: Web/API/Performance/clearResourceTimings
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

**`clearResourceTimings()`** メソッドは、{{domxref("PerformanceEntry.entryType","entryType")}} が "`resource`" のすべてのパフォーマンス項目をブラウザーのパフォーマンスタイムラインから削除し、パフォーマンスリソースデータバッファーのサイズをゼロに設定します。

ブラウザーのリソースデータバッファーのサイズを設定するには、{{domxref("Performance.setResourceTimingBufferSize()")}} メソッドを使用してください。

ブラウザーのリソースタイミングバッファーがいっぱいになったときに通知を取得するには、 {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}} イベントを待ち受けしてください。

## 構文

```js-nolint
clearResourceTimings()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### パフォーマンスリソースバッファーをクリア

すべてのリソースパフォーマンス項目をバッファーから除去するには、コードの適切な位置で `clearResourceTimings()` を呼び出すか、コンソールに貼り付けてください。

```js
performance.clearResourceTimings();
performance.getEntriesByType("resource").length; // 0
```

### 記録を取り、パフォーマンスオブザーバーを空にする

{{domxref("PerformanceObserver")}} オブジェクトを使用する場合（特に `buffered` フラグを `true` に設定した場合）、パフォーマンスリソースバッファーがすばやくいっぱいになることがあります。しかし、バッファーをクリアする代わりに、現在のパフォーマンス項目のリストを格納し、 {{domxref("PerformanceObserver.takeRecords()")}} メソッドを使用してパフォーマンスオブザーバーを空にすることもできます。これは "`resource`" 項目だけでなく、すべてのパフォーマンス項目型で動作します。

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    // do something with the entries
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ type: "resource", buffered: true });

// Store entries and empty performance observer
const records = observer.takeRecords();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Performance.setResourceTimingBufferSize()")}}
- {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}
