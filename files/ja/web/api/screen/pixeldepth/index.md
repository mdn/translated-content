---
title: "Screen: pixelDepth プロパティ"
short-title: pixelDepth
slug: Web/API/Screen/pixelDepth
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

画面のビット深度を返します。 CSSOM により、互換性の理由から `24` を返す実装もあります。そうでないものについては、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

## 値

数値です。

## 例

```js
// ビット深度が十分でない場合、
// より簡単な色を選択します。
document.style.color = window.screen.pixelDepth > 8 ? "#FAEBD7" : "#FFFFFF";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Screen.colorDepth")}}
