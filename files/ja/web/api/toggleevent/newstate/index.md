---
title: "ToggleEvent: newState プロパティ"
short-title: newState
slug: Web/API/ToggleEvent/newState
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Popover API")}}

**`newState`** は {{domxref("ToggleEvent")}} インターフェイスの読み取り専用プロパティで、要素の遷移先の状態を表す文字列です。

## 値

文字列です。取りうる値は `"open"`（ポップオーバーが表示されている）または `"closed"`（ポップオーバーが非表示になっている）です。

## 例

```js
const popover = document.getElementById("mypopover");

// …

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
