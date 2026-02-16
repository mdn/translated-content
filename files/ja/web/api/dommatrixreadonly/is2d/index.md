---
title: "DOMMatrixReadOnly: is2D プロパティ"
short-title: is2D
slug: Web/API/DOMMatrixReadOnly/is2D
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`is2D`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスの読み取り専用プロパティで、行列が二次元である場合に `true` となる論理値のフラグです。行列が二次元行列として初期化され、二次元変換操作のみが適用された場合、この値は `true` となります。それ以外の場合は、行列は三次元で定義され、`is2D` は `false` となります。

## 値

論理値です。

## 例

```js
// 二次元の行列を初期化
const matrix = new DOMMatrix(); // 行列を作成
console.log(matrix.is2D); // 出力: true

// 二次元空間で座標変換
console.log(matrix.rotate(30).is2D); // 出力: true

// 三次元座標変換を適用
console.log(matrix.rotate(10, 20, 1).is2D); // 出力: false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CSSTransformValue.is2D")}}
- {{domxref("CSSTransformComponent.is2D")}}
- CSS の {{cssxref("transform-function")}} 関数
- CSS の {{cssxref("transform")}} プロパティ
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
- {{domxref("CanvasRenderingContext2D")}} インターフェイス
