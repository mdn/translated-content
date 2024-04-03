---
title: "FontFaceSet: ready プロパティ"
short-title: ready
slug: Web/API/FontFaceSet/ready
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

`ready` は {{domxref("FontFaceSet")}} インターフェイスの読み取り専用プロパティで、指定された {{domxref("FontFaceSet")}} を解決する {{jsxref("Promise")}} を返します。

このプロミスが解決されるのは、文書のフォントの読み込みが完全に終了し、レイアウト処理が完了し、それ以上フォントを読み込む必要がなくなったときだけです。

## 値

指定された {{domxref("FontFaceSet")}} を解決する {{jsxref("Promise")}} です。

## 例

次の例では、プロミスが解決されると `ready` の値がコンソールに出力されます。

```js
async function isReady() {
  let ready = await document.fonts.ready;
  console.log(ready);
}

isReady();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
