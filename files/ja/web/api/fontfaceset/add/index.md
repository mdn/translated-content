---
title: "FontFaceSet: add() メソッド"
short-title: add()
slug: Web/API/FontFaceSet/add
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

**`add()`** は {{domxref("FontFaceSet")}} インターフェイスのメソッドで、集合に新しいフォントを追加します。

## 構文

```js-nolint
add(font)
```

### 引数

- `font`
  - : 集合に追加する {{domxref("FontFace")}} です。

### 返値

新しい {{domxref("FontFaceSet")}} です。

### 例外

- `InvalidModificationError` {{domxref("DOMException")}}
  - : このフォントがすでに CSS の {{cssxref("@font-face")}} ルールによって含まれている場合に発生します。

## 例

次の例では、新しい {{domxref("FontFace")}} オブジェクトを作成し、{{domxref("FontFaceSet")}} に追加しています。

```js
const font = new FontFace("MyFont", "url(myFont.woff2)");
document.fonts.add(font);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
