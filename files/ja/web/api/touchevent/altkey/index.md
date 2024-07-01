---
title: "TouchEvent: altKey プロパティ"
short-title: altKey
slug: Web/API/TouchEvent/altKey
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Touch Events") }}

**`altKey`** は {{domxref("TouchEvent")}} インターフェイスの読み取り専用プロパティで、タッチイベントが作成されたときに <kbd>alt</kbd> (Alternate) キーが押されていたかどうかを示す論理値を返します。<kbd>alt</kbd> キーが押されていた場合、この属性の値は `true` になります。そうでなかった場合は `false` になります。

このプロパティは{{ReadOnlyInline}}です。

## 値

論理値で、 <kbd>alt</kbd> キーがこのイベントで押されていた場合は `true`、押されていなかった場合は `false` です。

## 例

この例では、 {{domxref("TouchEvent")}} のキー修飾プロパティ、{{domxref("TouchEvent.altKey")}}、{{domxref("TouchEvent.ctrlKey")}}、{{domxref("TouchEvent.metaKey")}}、{{domxref("TouchEvent.shiftKey")}} にアクセスする方法を示します。

以下のコードでは、 {{domxref("Element/touchstart_event", "touchstart")}} イベントハンドラーがイベントの修飾キーの状態をログ出力しています。

```js
someElement.addEventListener(
  "touchstart",
  (e) => {
    // このイベントの修飾キーの状態をログ出力
    console.log(`altKey = ${e.altKey}`);
    console.log(`ctrlKey = ${e.ctrlKey}`);
    console.log(`metaKey = ${e.metaKey}`);
    console.log(`shiftKey = ${e.shiftKey}`);
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
