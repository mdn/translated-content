---
title: "SVGTransformList: consolidate() メソッド"
short-title: consolidate()
slug: Web/API/SVGTransformList/consolidate
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

`consolidate()` は {{domxref("SVGTransformList")}} インターフェイスのメソッドで、別個の {{domxref("SVGTransform")}} オブジェクトのリストを、等価な変換行列を掛け合わせることで統合し、 `SVG_TRANSFORM_MATRIX` 型の単一の `SVGTransform` オブジェクトで構成されるリストを生成します。

この統合操作では、新しい `SVGTransform` オブジェクトをリストの最初の、そして唯一のアイテムとして作成します。

返されたアイテムはアイテムそのものであり、コピーではありません。アイテムに変更が加えられた場合、その変更は即座にリストに反映されます。

## 構文

```js-nolint
consolidate()
```

### 引数

なし。

### 返値

生きた {{domxref("SVGTransform")}} オブジェクトです。統合された座標変換です。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : {{domxref("SVGTransformList")}} が読み取り専用属性に対応する場合、またはオブジェクト自体が読み取り専用である場合に発生します。

## 例

### 座標変換の統合

```html
<svg width="200" height="200">
  <rect
    width="100"
    height="100"
    fill="red"
    transform="translate(50,50) rotate(45)" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// <rect> 要素の座標変換リストへのアクセス
const transformList = rectElement.transform.baseVal;

// 座標変換を統合
const consolidatedTransform = transformList.consolidate();

console.dir(consolidatedTransform); // 出力: SVGTransform { type: 1, matrix: SVGMatrix, angle: 0 }
console.log(transformList.numberOfItems); // 出力: 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransform")}}
