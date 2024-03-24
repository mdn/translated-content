---
title: Screen.colorDepth
slug: Web/API/Screen/colorDepth
---

{{APIRef("CSSOM")}}

**`Screen.colorDepth`** は読み取り専用プロパティで、画面の色震度を返します。 CSSOM により、互換性の理由から `24` を返す実装もあります。そうでないものについては、ブラウザーの互換性の節を参照してください。

## 値

数値です。

## 例

```js
// 画面の色深度を確認
if (window.screen.colorDepth < 8) {
  // 少色版のページを使用
} else {
  // 通常の多色のページを使用
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("Screen.pixelDepth")}}
