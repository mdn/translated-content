---
title: PopStateEvent
slug: Web/API/PopStateEvent
l10n:
  sourceCommit: 55de68017f98094f45addb3ebaa0f7f52024f60b
---

{{APIRef("History API")}}

**`PopStateEvent`** は [`popstate`](/ja/docs/Web/API/Window/popstate_event) イベントのインターフェイスです。

`popstate` イベントは、同じ文書内の 2 つの履歴項目の間でアクティブな履歴項目が変更されるたびにウィンドウに配信されます。アクティブになる履歴項目が `history.pushState()` の呼び出しによって作成されたものであるか、 `history.replaceState()` の呼び出しによって変更された場合、 `popstate` イベントの `state` プロパティには履歴項目の状態オブジェクトのコピーが格納されます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("PopStateEvent.PopStateEvent", "PopStateEvent()")}}
  - : 新しい `PopStateEvent` オブジェクトを生成します。

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("PopStateEvent.state")}} {{ReadOnlyInline}}
  - : `pushState()` または `replaceState()` に指定された情報のコピーを返します。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("Event")}} から継承したメソッドもあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`popstate`](/ja/docs/Web/API/Window/popstate_event) イベント
- [`hashchange`](/ja/docs/Web/API/Window/hashchange_event) イベント
