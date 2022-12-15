---
title: PerformanceNavigation.redirectCount
slug: Web/API/PerformanceNavigation/redirectCount
---

{{APIRef("Navigation Timing")}}

> **警告:** このインターフェイスは [Navigation Timing Level 2 仕様書](https://w3c.github.io/navigation-timing/#obsolete)では非推奨です。代わりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

従来の **`PerformanceNavigation.redirectCount`** 読み取り専用プロパティは、ページに到達する前に行われた REDIRECT の数を表す `unsigned short` を返します。

## 構文

```
amount = performanceNavigation.redirectCount;
```

## 仕様書

| 仕様書                                                                                                                                                       | ステータス                               | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{SpecName('Navigation Timing', '#dom-performancenavigation-redirectcount', 'PerformanceNavigation.redirectCount')}} | {{Spec2('Navigation Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceNavigation.redirectCount")}}

## あわせて参照

- 所属する {{domxref("PerformanceNavigation")}} インターフェイス
