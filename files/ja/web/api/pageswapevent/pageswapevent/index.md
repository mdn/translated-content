---
title: "PageSwapEvent: PageSwapEvent() コンストラクター"
short-title: PageSwapEvent()
slug: Web/API/PageSwapEvent/PageSwapEvent
l10n:
  sourceCommit: cd809f324e890917837ebe5194c934543d4a5464
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`PageSwapEvent()`** コンストラクターは、新しい {{domxref("PageSwapEvent")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nolint
new PageSwapEvent(type, init)
```

### 引数

- `type`
  - : イベントの型を表す文字列。`PageSwapEvent` の場合、これは常に `pageswap` です。
- `init`
  - : 以下のプロパティを持つオブジェクト。
    - `activation`
      - : {{domxref("NavigationActivation")}} オブジェクトを保持しており、これは、同一オリジン内の移動に関するナビゲーション種別と、移動元および移動先の文書履歴項目が含まれています。ナビゲーションのリダイレクトチェーンのどこかにオリジンをまたぐ URL がある場合は、`null` が返されます。
    - `viewTransition`
      - : 文書間のナビゲーションにおけるアクティブなビュー遷移を表す {{domxref("ViewTransition")}} オブジェクトを保持しています。アクティブなビュー遷移がない場合は既定で `null` です。

## 例

開発者はこのコンストラクターを手動で使用することはありません。 {{domxref("Window.pageswap_event", "pageswap")}} イベントが発生した結果としてハンドラーが呼び出されたときに、新しい `PageSwapEvent` オブジェクトが構築されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
