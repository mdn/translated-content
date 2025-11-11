---
title: "ToggleEvent: oldState プロパティ"
slug: Web/API/ToggleEvent/oldState
l10n:
  sourceCommit: 559c464755abf4ca999a21ce7f3cb1027143f68f
---

{{APIRef("Popover API")}}{{SeeCompatTable}}

**`oldState`** は {{domxref("ToggleEvent")}} インターフェイスの読み取り専用プロパティで、この要素が遷移する前の状態を表す文字列です。

## 値

文字列です。取りうる値は `"open"`（ポップオーバーが表示されている）または `"closed"`（ポップオーバーが非表示になっている）です。

## 例

```js
const popover = document.getElementById("mypopover");

// ...

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
