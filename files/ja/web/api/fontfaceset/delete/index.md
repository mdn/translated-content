---
title: "FontFaceSet: delete() メソッド"
short-title: delete()
slug: Web/API/FontFaceSet/delete
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

**`delete()`** は {{domxref("FontFaceSet")}} インターフェイスのメソッドで、集合からフォントを除去します。

CSS の {{cssxref("@font-face")}} ルールを使用して集合に追加されたフォントフェイスは、対応する CSS に接続されたままであり、削除することはできません。

## 構文

```js-nolint
delete(font)
```

### 引数

- `font`
  - : 集合から除去される {{domxref("FontFace")}} です。

### 返値

論理値で、削除に成功した場合は `true`、失敗した場合は `false` を返します。

## 例

次の例では、新しい {{domxref("FontFace")}} オブジェクトを作成し、{{domxref("FontFaceSet")}} から削除します。

```js
const font = new FontFace("MyFont", "url(myFont.woff2)");
document.fonts.delete(font);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
