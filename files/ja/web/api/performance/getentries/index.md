---
title: "Performance: getEntries() メソッド"
short-title: getEntries()
slug: Web/API/Performance/getEntries
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

**`getEntries()`** メソッドは、現在パフォーマンスタイムラインにあるすべての {{domxref("PerformanceEntry")}} オブジェクトの配列を返します。

特定の型や特定の名前を持つパフォーマンス項目だけに関心がある場合は、 {{domxref("Performance.getEntriesByType", "getEntriesByType()")}} や {{domxref("Performance.getEntriesByName", "getEntriesByName()")}} を参照してください。

> [!NOTE]
> このメソッドは新しいパフォーマンス項目を通知しません。このメソッドを呼び出した時点でパフォーマンスタイムラインに存在している項目のみを取得します。
> 利用できるようになった項目の通知を受け取るには、 {{domxref("PerformanceObserver")}} を使用してください。

以下の項目型はこのメソッドではまったく対応しておらず、これらの型の項目が存在したとしても返されません。

- `"element"` ({{domxref("PerformanceElementTiming")}})
- `"event"` ({{domxref("PerformanceEventTiming")}})
- `"largest-contentful-paint"` ({{domxref("LargestContentfulPaint")}})
- `"layout-shift"` ({{domxref("LayoutShift")}})
- `"longtask"` ({{domxref("PerformanceLongTaskTiming")}})

これらの型の項目にアクセスするには、代わりに {{domxref("PerformanceObserver")}} を使用する必要があります。

## 構文

```js-nolint
getEntries()
```

### 引数

なし。

### 返値

{{domxref("PerformanceEntry")}} オブジェクトの配列 ({{jsxref("Array")}})。要素は項目の {{domxref("PerformanceEntry.startTime","startTime")}} に基づいて時系列に並びます。

## 例

### パフォーマンスマーカーと測定値をすべてログ出力

自分自身で {{domxref("PerformanceMark")}} および {{domxref("PerformanceMeasure")}} オブジェクトをコードの適切な配置に作成したと想定すると、次のようにすべてコンソールにログ出力したくなるかもしれません。

```js
// Example markers/measures
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");
performance.mark("video-loaded");
performance.measure("login-duration", "login-started", "login-finished");

const entries = performance.getEntries();

entries.forEach((entry) => {
  if (entry.entryType === "mark") {
    console.log(`${entry.name}'s startTime: ${entry.startTime}`);
  }
  if (entry.entryType === "measure") {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Performance.getEntriesByType()")}}
- {{domxref("Performance.getEntriesByName()")}}
