---
title: PerformanceNavigation
slug: Web/API/PerformanceNavigation
l10n:
  sourceCommit: 66c9543af6a0cf1baf89d5b0c972ee7dd08663b0
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

古い **`PerformanceNavigation`** インターフェイスは、現在のドキュメントへのナビゲーションがどのように行われたかに関する情報を表します。

> [!WARNING]
> このインターフェイスは [Navigation Timing Level 2 仕様書](https://w3c.github.io/navigation-timing/#obsolete)では非推奨です。
> 代わりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

この型のオブジェクトは、{{domxref("Performance.navigation")}} 読み取り専用属性を呼び出すことによって取得できます。

## プロパティ

_`PerformanceNavigation` インターフェイスはプロパティを継承していません。_

- {{domxref("PerformanceNavigation.type")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : `unsigned short` で、このページへのナビゲーションがどのように行われたかを示します。取りうる値は次のとおりです。
    - `TYPE_NAVIGATE` (0)
      - : リンク、ブックマーク、フォーム送信、またはスクリプトを使用するか、アドレスバーに URL を入力してページにアクセスしました。
    - `TYPE_RELOAD` (1)
      - : このページには、\[再読み込み] ボタンをクリックするか、{{domxref("Location.reload()")}} メソッドを介してアクセスしました。
    - `TYPE_BACK_FORWARD` (2)
      - : このページには履歴をたどってアクセスしました。
    - `TYPE_RESERVED` (255)
      - : その他の方法で。

- {{domxref("PerformanceNavigation.redirectCount")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : `unsigned short` で、ページに到達する前に行われたリダイレクトの数を表します。

## メソッド

_`Performance` インターフェイスはメソッドを継承していません。_

- {{deprecated_inline}} {{domxref("PerformanceNavigation.toJSON()")}}
  - : `PerformanceNavigation` オブジェクトを表す json オブジェクトを返す jsonizer です。

## 仕様書

この機能は標準化の予定がなくなりました。 [Navigation Timing Level 2 仕様書](https://w3c.github.io/navigation-timing/#obsolete)で非推奨になったためです。
代わりに {{domxref("PerformanceNavigationTiming")}} インターフェイスを使用してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- この型のオブジェクトへのアクセスを許可する {{domxref("Performance")}}
- {{domxref("PerformanceNavigationTiming")}} (ナビゲーションタイミングレベル 2 の一部) {{experimental_inline}}
