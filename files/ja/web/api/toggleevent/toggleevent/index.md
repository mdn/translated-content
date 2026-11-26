---
title: "ToggleEvent: ToggleEvent() コンストラクター"
short-title: ToggleEvent()
slug: Web/API/ToggleEvent/ToggleEvent
l10n:
  sourceCommit: 81407b5d512b0429332fda450aa39340493f390d
---

{{APIRef("Popover API")}}

**`ToggleEvent()`** コンストラクターは、新しい {{domxref("ToggleEvent")}} オブジェクトを生成します。

## 構文

```js-nolint
new ToggleEvent(type, init)
```

### 引数

- `type`
  - : イベントの種類を表す文字列です。`ToggleEvent` の場合、常に `beforetoggle` または `toggle` です。
- `init` {{optional_inline}}
  - : 次のプロパティを含むオブジェクトです。
    - `newState` {{optional_inline}}
      - : 文字列で、要素が遷移する先の状態を表します。任意の値を取れますが、ブラウザーが発生させるイベントでは `"open"` または `"closed"` に設定されます。デフォルト値は `""` です。
    - `oldState` {{optional_inline}}
      - : 文字列で、要素が遷移する前の状態を表します。任意の値を取れますが、ブラウザーが発生させるイベントでは `"open"` または `"closed"` に設定されます。デフォルト値は `""` です。
    - `source` {{optional_inline}}
      - : 切り替えを開始した HTML のポップオーバー制御要素を表す {{domxref("Element")}} です。デフォルト値は `null` です。

## 例

通常、このコンストラクターを手動で使用することはありません。関連するイベントが発生した結果としてハンドラーが呼び出されると、新しい `ToggleEvent` オブジェクトが生成されます。

例を示します。

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover is being shown");
    if (event.source) {
      console.log("Initiated by:", event.source);
    }
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
