---
title: "DOMMatrixReadOnly: isIdentity プロパティ"
short-title: isIdentity
slug: Web/API/DOMMatrixReadOnly/isIdentity
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`isIdentity`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスの読み取り専用プロパティで、この行列が[恒等行列](https://ja.wikipedia.org/wiki/単位行列)であれば `true` となる論理値です。

恒等行列とは、左上から右下への主対角線上の要素（言い換えれば、各方向のオフセットが等しい位置）の値を除き、すべての値が `0` である行列です。

## 値

論理値です。

## 例

```js
// 二次元の行列を初期化
const matrix = new DOMMatrix(); // 行列を作成
console.log(matrix.isIdentity); // 出力: true

// 影響がない座標変換を適用
console.log(matrix.translate(0).isIdentity); // 出力: true

// 影響のある座標変換を適用: 行列を 30 度回転
console.log(matrix.rotate(30).isIdentity); // 出力: false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrix")}} interface
- {{domxref("CSSMatrixComponent")}} interface
- {{domxref("CanvasRenderingContext2D")}} インターフェイス
- CSS の {{cssxref("transform-function/matrix()")}} 関数
- CSS の {{cssxref("transform")}} プロパティ
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
