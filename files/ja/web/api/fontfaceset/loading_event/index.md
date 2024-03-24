---
title: "FontFaceSet: loading イベント"
short-title: loading
slug: Web/API/FontFaceSet/loading_event
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

`loading` イベントは、文書がフォントの読み込みを始めるときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("loading", (event) => {});

onloading = (event) => {};
```

## 例

次の例では、フォント `Ephesis` が読み込まれ始めると、"Font is loading..." とコンソールに表示されます。

```js
document.fonts.onloading = () => {
  console.log("Font is loading");
};

(async () => {
  await document.fonts.load("16px Ephesis");
})();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
