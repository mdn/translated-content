---
title: "PageRevealEvent: PageRevealEvent() コンストラクター"
short-title: PageRevealEvent()
slug: Web/API/PageRevealEvent/PageRevealEvent
l10n:
  sourceCommit: cd809f324e890917837ebe5194c934543d4a5464
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`PageRevealEvent()`** コンストラクターは、新しい {{domxref("PageRevealEvent")}} オブジェクトインスタンスを作成します。

## 構文

```js-nolint
new PageRevealEvent(type, init)
```

### 引数

- `type`
  - : イベントの種類の表す文字列。 `PageRevealEvent` の場合は、常に `pagereveal` です。
- `init`
  - : 以下のプロパティを持つオブジェクト。
    - `viewTransition` {{optional_inline}}
      - : {{domxref("ViewTransition")}} オブジェクトで、関連するナビゲーションにおけるアクティブなビュー遷移を表します。アクティブなビュー遷移がない場合は、既定で `null` となります。

## 例

開発者はこのコンストラクターを手動で使用することはありません。 {{domxref("Window.pagereveal_event", "pagereveal")}} イベントが発生した結果としてハンドラーが呼び出されたときに、新しい `PageRevealEvent` オブジェクトが構築されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
