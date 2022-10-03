---
title: Window.performance
slug: Web/API/performance_property
original_slug: Web/API/Window/performance
---

{{APIRef("High Resolution Time")}}

{{domxref("Window")}} インタフェースのパフォーマンスプロパティは、現在のドキュメントに関するパフォーマンス情報を収集するために使用できる {{domxref("Performance")}} オブジェクトを返します。これはパフォーマンスタイムライン API、高解像度時間 API、[ナビゲーションタイミング API](/ja/docs/Web/API/Navigation_timing_API)、[ユーザータイミング API](/ja/docs/Web/API/User_Timing_API) および[リソースタイミング API](/ja/docs/Web/API/Resource_Timing_API) の公開ポイントとして機能します。

## 構文

```
performanceData = window.performance;
```

### 値

それが公開する API によって提供されるパフォーマンスおよびタイミング関連情報へのアクセスを提供する {{domxref("Performance")}} オブジェクト。

## 仕様

| 仕様                                                                                                         | ステータス                       | コメント                |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------- |
| {{SpecName('Highres Time', '#the-performance-interface', 'window.performance')}} | {{Spec2('Highres Time')}} | Defines `now()` method. |

## ブラウザの互換性

{{Compat("api.Window.performance")}}
