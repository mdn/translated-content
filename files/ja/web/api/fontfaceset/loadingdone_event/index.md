---
title: "FontFaceSet: loadingdone イベント"
short-title: loadingdone
slug: Web/API/FontFaceSet/loadingdone_event
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

`loadingdone` イベントは、文書がすべてのフォントを読み込んだときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("loadingdone", (event) => {});

onloadingdone = (event) => {};
```

## 例

次の例では、フォント `Ephesis` の読み込みが完了すると、"Font loading complete" とコンソールに出力されます。

```js
document.fonts.onloadingdone = () => {
  console.log("Font loading complete");
};

(async () => {
  await document.fonts.load("16px Ephesis");
})();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
