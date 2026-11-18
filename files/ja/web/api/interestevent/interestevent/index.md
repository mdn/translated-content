---
title: "InterestEvent: InterestEvent() コンストラクター"
short-title: InterestEvent()
slug: Web/API/InterestEvent/InterestEvent
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Popover API")}}{{SeeCompatTable}}{{non-standard_header}}

**`InterestEvent()`** コンストラクターは、新しい {{domxref("InterestEvent")}} オブジェクトを生成します。

## 構文

```js-nolint
new InterestEvent(type, init)
```

### 引数

- `type`
  - : イベントの種類を表す文字列です。`InterestEvent` の場合、常に `interest` または `loseinterest` です。
- `init` {{optional_inline}}
  - : 次のプロパティを含むオブジェクトです。
    - `source` {{optional_inline}}
      - : 関心が示された、または失われた際の関心インボーカー要素を表す {{domxref("Element")}} です。

## 例

通常、このコンストラクターを手動で使用することはありません。関連するイベントが発生した結果としてハンドラーが呼び出されると、新しい `InterestEvent` オブジェクトが生成されます。

例については、[関心インボーカーの使用](/ja/docs/Web/API/Popover_API/Using_interest_invokers)ガイドと、{{domxref("HTMLElement.interest_event", "interest")}} イベントのリファレンスページを参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
- [関心インボーカーの使用](/ja/docs/Web/API/Popover_API/Using_interest_invokers)
