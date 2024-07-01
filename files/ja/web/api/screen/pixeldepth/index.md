---
title: Screen.pixelDepth
slug: Web/API/Screen/pixelDepth
---

{{APIRef("CSSOM")}}

画面のビット深度を返します。 CSSOM により、互換性の理由から `24` を返す実装もあります。そうでないものについては、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

## 値

数値です。

## 例

```js
// ビット深度が十分でない場合、
// より簡単な色を選択します。
if (window.screen.pixelDepth > 8) {
  document.style.color = "#FAEBD7";
} else {
  document.style.color = "#FFFFFF";
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Screen.colorDepth")}}
