---
title: PerformanceNavigation.type
slug: Web/API/PerformanceNavigation/type
---

{{APIRef("Navigation Timing")}}

> **警告:** このインターフェイスは [Navigation Timing Level 2 仕様書](https://w3c.github.io/navigation-timing/#obsolete)では非推奨です。代わりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

従来の **`PerformanceNavigation.type`** 読み取り専用プロパティは、このページへの移動方法を説明する定数を含む `unsigned short` を返します。可能な値は次のとおりです:

| 値    | 定数名              | 意味                                                                                                                                  |
| ----- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `0`   | `TYPE_NAVIGATE`     | リンク、ブックマーク、フォーム送信、スクリプト、またはアドレスバーに URL を入力してページにアクセスしました。                         |
| `1`   | `TYPE_RELOAD`       | このページには、\[再読み込み] ボタンをクリックするか、{{domxref("Location.reload()")}} メソッドを介してアクセスしました。 |
| `2`   | `TYPE_BACK_FORWARD` | このページには履歴をたどってアクセスしました。                                                                                        |
| `255` | `TYPE_RESERVED`     | その他の方法。                                                                                                                        |

## 構文

```
type = performanceNavigation.type;
```

## 仕様書

| 仕様書                                                                                                                               | ステータス                               | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{SpecName('Navigation Timing', '#dom-performancenavigation-type', 'PerformanceNavigation.type')}} | {{Spec2('Navigation Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceNavigation.type")}}

## あわせて参照

- 所属する {{domxref("PerformanceNavigation")}} インターフェイス
