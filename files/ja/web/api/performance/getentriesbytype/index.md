---
title: "Performance: getEntriesByType() メソッド"
short-title: getEntriesByType()
slug: Web/API/Performance/getEntriesByType
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("Performance API")}}

**`getEntriesByType()`** メソッドは、現在パフォーマンスタイムラインにある、指定された*型*の {{domxref("PerformanceEntry")}} オブジェクトの配列を返します。

特定の名前のパフォーマンス項目に関心がある場合は、 {{domxref("Performance.getEntriesByName", "getEntriesByName()")}} を参照してください。すべてのパフォーマンス項目の場合は、 {{domxref("Performance.getEntries", "getEntries()")}} を参照してください。

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
getEntriesByType(type)
```

### 引数

- `type`
  - : 取得する項目の型。 "`mark`" など。有効な項目型は {{domxref("PerformanceEntry.entryType")}} に掲載されています。対応している `entryTypes` は、静的プロパティ {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} を使用して取得することができます。

### 返値

指定された `type` を持つ {{domxref("PerformanceEntry")}} オブジェクトの配列 ({{jsxref("Array")}}) です。
要素は項目の {{domxref("PerformanceEntry.startTime","startTime")}} に基づいて時系列に並びます。指定された基準を満たすオブジェクトがない場合は、空のリストが返されます。

## 例

### リソース項目をログ出力

次の例は"`resource`"という項目型を持つすべての項目をログ出力します。

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Performance.getEntries()")}}
- {{domxref("Performance.getEntriesByName()")}}
- {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}}
