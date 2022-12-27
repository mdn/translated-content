---
title: PerformanceResourceTiming.serverTiming
slug: Web/API/PerformanceResourceTiming/serverTiming
---

{{APIRef("Resource Timing API")}} {{securecontext_header}}

**`serverTiming`** 読み取り専用プロパティは、サーバのタイミングメトリクスを含む {{domxref("PerformanceServerTiming")}} エントリの配列を返します。

## 構文

```
resource.serverTiming;
```

## 仕様書

| 仕様書                                                                                                       | ステータス                           | コメント |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('Server Timing','#-dfn-servertiming-dfn-attribute', 'serverTiming')}} | {{Spec2('Server Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceResourceTiming.serverTiming")}}

## あわせて参照

- {{domxref("PerformanceServerTiming")}}
- {{HTTPHeader("Server-Timing")}}
