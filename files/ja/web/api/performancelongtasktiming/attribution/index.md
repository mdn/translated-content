---
title: PerformanceLongTaskTiming.attribution
slug: Web/API/PerformanceLongTaskTiming/attribution
---

{{SeeCompatTable}}{{APIRef("Long Tasks")}}

{{domxref("PerformanceLongTaskTiming")}} インターフェイスの **`attribution`** 読み取り専用プロパティは、{{domxref('TaskAttributionTiming')}} インスタンスのシーケンスを返します。

## 構文

```
var taskAttributeTiming = PerformanceLongTaskTiming.attribution;
```

### 値

{{domxref('TaskAttributionTiming')}} インスタンスのシーケンス。

## 仕様書

| 仕様書                                                                                                 | 状態                             | コメント |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('Long Tasks','#dom-performanceentry-attribution','attribution')}} | {{Spec2('Long Tasks')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceLongTaskTiming.attribution")}}
