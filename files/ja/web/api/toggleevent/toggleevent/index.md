---
title: "ToggleEvent: ToggleEvent() コンストラクター"
slug: Web/API/ToggleEvent/ToggleEvent
l10n:
  sourceCommit: 559c464755abf4ca999a21ce7f3cb1027143f68f
---

{{APIRef("Popover API")}}{{SeeCompatTable}}

**`ToggleEvent()`** コンストラクターは、新しい {{domxref("ToggleEvent")}} オブジェクトを生成します。

## 構文

```js-nolint
new ToggleEvent(type, init)
```

### 引数

- `type`
  - : 文字列で、イベントの方を表します。`ToggleEvent` の場合、これは常に `toggleevent` です。
- `init`
  - : 以下のプロパティを持つオブジェクトです。
    - `newState`
      - : 文字列で、この要素が遷移した後の状態を表します。取りうる値は `"open"` および `"closed"` です。
    - `oldState`
      - : 文字列で、この要素が遷移する前の状態を表します。取りうる値は `"open"` および `"closed"` です。

## 例

開発者がこのコンストラクタを手動で使用することはないでしょう。関連するイベントが発行された結果、ハンドラーが呼び出されると、新しい `ToggleEvent` オブジェクトが生成されます。

例えば次の通りです。

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover is being shown");
  } else {
    console.log("Popover is being hidden");
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
