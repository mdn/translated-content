---
title: "Performance: getEntriesByName() メソッド"
short-title: getEntriesByName()
slug: Web/API/Performance/getEntriesByName
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

**`getEntriesByName()`** メソッドは、現在パフォーマンスタイムラインにある、指定された*名前*と*型*の {{domxref("PerformanceEntry")}} オブジェクトの配列を返します。

特定の型のパフォーマンス項目だけに関心がある場合は、 {{domxref("Performance.getEntriesByType", "getEntriesByType()")}} を参照してください。すべてのパフォーマンス項目の場合は、 {{domxref("Performance.getEntries", "getEntries()")}} を参照してください。

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
getEntriesByName(name)
getEntriesByName(name, type)
```

### 引数

- `name`
  - : 取得する項目の名前です。
- `type` {{optional_inline}}
  - : "`mark`" など、取得する項目の型。有効な項目型の一覧は {{domxref("PerformanceEntry.entryType")}} にあります。

### 返値

指定された `name` と `type` を持つ {{domxref("PerformanceEntry")}} オブジェクトの配列 ({{jsxref("Array")}}) です。
要素は項目の {{domxref("PerformanceEntry.startTime","startTime")}} に基づいて時系列に並びます。指定された基準を満たすオブジェクトがない場合は、空のリストが返されます。

## 例

### パフォーマンスマーカーをログ出力

次の例は、"`debug-mark`" という名前のオブジェクト {{domxref("PerformanceMark")}} をすべてログ出力します。

```js
const debugMarks = performance.getEntriesByName("debug-mark", "mark");
debugMarks.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Performance.getEntries()")}}
- {{domxref("Performance.getEntriesByType()")}}
