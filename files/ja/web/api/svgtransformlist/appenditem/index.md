---
title: "SVGTransformList: appendItem() メソッド"
short-title: appendItem()
slug: Web/API/SVGTransformList/appendItem
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

`appendItem()` は {{domxref("SVGTransformList")}} インターフェイスのメソッドで、リストの末尾に新しいアイテムをを追加します。

挿入されるアイテムはアイテムそのものであり、コピーではありません。

- `newItem` がすでにリスト内に存在する場合は、このリストに挿入される前に、以前のリストから除去されます。

## 構文

```js-nolint
appendItem(newItem)
```

### 引数

- `newItem`
  - : リストに追加する {{domxref("SVGTransform")}} です。

### 返値

リストに追加された {{domxref("SVGTransform")}} オブジェクトです。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : {{domxref("SVGTransformList")}} が読み取り専用属性に対応する場合、またはオブジェクト自体が読み取り専用である場合に発生します。

## 例

### 新しい座標変換の追加

```html
<svg width="200" height="200">
  <rect width="100" height="100" fill="red" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// <rect> 要素の座標変換リストへのアクセス
const transformList = rectElement.transform.baseVal;

// 新しい座標変換の作成
const svgTransform = svgElement.createSVGTransform();
svgTransform.setTranslate(50, 50);

// 新しい座標変換をリストへ追加
const appendedTransform = transformList.appendItem(svgTransform);

console.dir(appendedTransform); // 出力: SVGTransform { type: 2, matrix: SVGMatrix, angle: 0 }
console.log(`Total number of transformations: ${transformList.numberOfItems}`); // 出力: 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransform")}}
- {{domxref("SVGTransformList.numberOfItems")}}
