---
title: "ToggleEvent: oldState プロパティ"
short-title: oldState
slug: Web/API/ToggleEvent/oldState
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Popover API")}}

**`oldState`** は {{domxref("ToggleEvent")}} インターフェイスの読み取り専用プロパティで、要素の遷移元の状態を表す文字列です。

## 値

文字列です。取りうる値は `"open"`（ポップオーバーが表示状態から非表示状態へ移行する）または `"closed"`（ポップオーバーが非表示状態から表示状態へ移行する）です。

## 例

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("beforetoggle", (event) => {
  if (event.oldState === "open") {
    console.log("Popover is being hidden");
  } else {
    console.log("Popover is being shown");
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ポップオーバー API](/ja/docs/Web/API/Popover_API)
