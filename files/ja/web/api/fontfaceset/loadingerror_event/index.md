---
title: "FontFaceSet: loadingerror イベント"
short-title: loadingerror
slug: Web/API/FontFaceSet/loadingerror_event
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

`loadingerror` イベントは、フォントの読み込みが完了したが、一部またはすべてのフォントの読み込みに失敗した場合に発生します。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("loadingerror", (event) => {});

onloadingerror = (event) => {};
```

## 例

次の例では、フォント `Ephesis` が読み込めなかった場合、"Font loading error" とコンソールに出力されます。

```js
document.fonts.onloadingerror = () => {
  console.log("Font loading error");
};

(async () => {
  await document.fonts.load("16px Ephesis");
})();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
