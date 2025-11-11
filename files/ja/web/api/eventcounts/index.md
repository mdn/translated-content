---
title: EventCounts
slug: Web/API/EventCounts
l10n:
  sourceCommit: e18aa8e600733ebc25443075c563fd56361dfe98
---

{{APIRef("Performance API")}}

**`EventCounts`** は[パフォーマンス API](/ja/docs/Web/API/Performance_API)のインターフェイスで、それぞれのイベント型で配信されたイベントの数を提供します。

`EventCounts` インスタンスは読み取り専用の [`Map` 風オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Map#map_風のブラウザー_api)で、各キーはイベント型の名前の文字列で、対応する値はそのイベント型で配信されたイベントの数を示す整数です。

## コンストラクター

このインターフェイスにはコンストラクターがありません。通常は {{domxref("performance.eventCounts")}} プロパティを使用してこのオブジェクトのインスタンスを取得します。

## インスタンスプロパティ

- `size`
  - : 詳しくは {{jsxref("Map.prototype.size")}} を参照してください。

## インスタンスメソッド

- `entries()`
  - : 詳しくは {{jsxref("Map.prototype.entries()")}} を参照してください。
- `forEach()`
  - : 詳しくは {{jsxref("Map.prototype.forEach()")}} を参照してください。
- `get()`
  - : 詳しくは {{jsxref("Map.prototype.get()")}} を参照してください。
- `has()`
  - : 詳しくは {{jsxref("Map.prototype.has()")}} を参照してください。
- `keys()`
  - : 詳しくは {{jsxref("Map.prototype.keys()")}} を参照してください。
- `values()`
  - : 詳しくは {{jsxref("Map.prototype.values()")}} を参照してください。

## 例

### EventCount マップの使用

以下は `EventCounts` マップから情報を取得するいくつかの例です。マップは読み取り専用のため、 `clear()`, `delete()`, `set()` メソッドは利用できないことに注意してください。

```js
for (entry of performance.eventCounts.entries()) {
  const type = entry[0];
  const count = entry[1];
}

const clickCount = performance.eventCounts.get("click");

const isExposed = performance.eventCounts.has("mousemove");
const exposedEventsCount = performance.eventCounts.size;
const exposedEventsList = [...performance.eventCounts.keys()];
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("performance.eventCounts")}}
- {{domxref("PerformanceEventTiming")}}
- {{jsxref("Map")}}
