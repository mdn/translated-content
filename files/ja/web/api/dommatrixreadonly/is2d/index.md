---
title: "DOMMatrixReadOnly: is2D プロパティ"
short-title: is2D
slug: Web/API/DOMMatrixReadOnly/is2D
l10n:
  sourceCommit: 359abb1dcdc87d46d7271fc28c53a998a5523bf1
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`is2D`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスのプロパティで、この行列が 2D であれば `true` を返す論理値のフラグです。この行列が 2D 行列として初期化され、2D の座標変換操作のみが適用された場合に、この値が `true` となります。そうでない場合は、行列は 3D となるため、`is2D` は `false` になります。

## 値

論理値です。

## 例

```js
// 2D 行列を初期化
const matrix = new DOMMatrix(); // 行列を作成
console.log(matrix.is2D); // 出力: true

// 2D 空間で座標変換
console.log(matrix.rotate(30).is2D); // 出力: true

// 3D 座標変換を適用
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
