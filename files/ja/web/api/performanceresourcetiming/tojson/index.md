---
title: PerformanceResourceTiming.toJSON()
slug: Web/API/PerformanceResourceTiming/toJSON
---

{{APIRef("Resource Timing API")}}

**`toJSON()`** メソッドは、{{domxref("PerformanceResourceTiming")}} オブジェクトの JSON 表現を返すシリアライザです。

## 構文

```
json = resourcePerfEntry.toJSON();
```

### 引数

なし

### 返値

- json
  - : 最も近い継承インタフェースからのエントリと各シリアライザブル属性のエントリを持つマップとしての {{domxref("PerformanceResourceTiming")}} オブジェクトの直列化である JSON オブジェクト。

## 例

```js
// Get a resource performance entry
var perfEntries = performance.getEntriesByType("resource");
var entry = perfEntries[0];

// Get the JSON and log it
var json = entry.toJSON();
var s = JSON.stringify(json);
console.log("PerformanceEntry.toJSON = " + s);
```

## 仕様書

| 仕様書                                                                       | ステータス                           | コメント |
| ---------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Resource Timing', '#serializer', 'toJSON')}} | {{Spec2('Resource Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming.toJSON")}}
