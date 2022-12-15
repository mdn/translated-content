---
title: PerformanceNavigation
slug: Web/API/PerformanceNavigation
---

{{APIRef("Navigation Timing")}}

> **警告:** このインターフェイスは [Navigation Timing Level 2 仕様書](https://w3c.github.io/navigation-timing/#obsolete)では非推奨です。代わりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

従来の **`PerformanceNavigation`** インターフェイスは、現在のドキュメントへのナビゲーションがどのように行われたかに関する情報を表します。

このタイプのオブジェクトは、{{domxref("Performance.navigation")}} 読み取り専用属性を呼び出すことによって取得できます。

## プロパティ

_`PerformanceNavigation` インターフェイスはプロパティを継承しません。_

- {{deprecated_inline}} {{domxref("PerformanceNavigation.type")}} {{readonlyInline}}

  - : このページへのナビゲーションがどのように行われたかを示す`unsigned short`。可能な値は次のとおりです:

    - `TYPE_NAVIGATE` (0)
      - : リンク、ブックマーク、フォーム送信、またはスクリプトを使用するか、アドレスバーに URL を入力してページにアクセスしました。
    - `TYPE_RELOAD` (1)
      - : このページには、\[再読み込み] ボタンをクリックするか、{{domxref("Location.reload()")}} メソッドを介してアクセスしました。
    - `TYPE_BACK_FORWARD` (2)
      - : このページには履歴をたどってアクセスしました。
    - `TYPE_RESERVED` (255)
      - : その他の方法で。

- {{deprecated_inline}} {{domxref("PerformanceNavigation.redirectCount")}} {{readonlyInline}}
  - : ページに到達する前に行われた REDIRECT の数を表す `unsigned short`。

## メソッド

_`Performance` インターフェイスはメソッドを継承しません。_

- {{deprecated_inline}} {{domxref("PerformanceNavigation.toJSON()")}}
  - : `PerformanceNavigation` オブジェクトを表す json オブジェクトを返す jsonizer です。

## 仕様書

| 仕様書                                                                                                                       | ステータス                               | コメント |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Navigation Timing', '#sec-navigation-info-interface', 'PerformanceNavigation')}} | {{Spec2('Navigation Timing')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.PerformanceNavigation")}}

## あわせて参照

- この型のオブジェクトへのアクセスを許可する {{domxref("Performance")}}
- {{domxref("PerformanceNavigationTiming")}} (ナビゲーションタイミングレベル 2 の一部) {{experimental_inline}}
