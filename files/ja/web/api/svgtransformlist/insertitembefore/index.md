---
title: "SVGTransformList: insertItemBefore() メソッド"
short-title: insertItemBefore()
slug: Web/API/SVGTransformList/insertItemBefore
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

`insertItemBefore()` は {{domxref("SVGTransformList")}} インターフェイスのメソッドで、指定した位置に新しいアイテムをリストに挿入します。

最初のアイテムのインデックスは `0` です。挿入されるアイテムはアイテムそのものであり、コピーではありません。

- `newItem` がすでにリスト内にある場合、このリストに挿入される前に、前回あったリストから除去されます。

- アイテムがすでにこのリスト内にある場合、挿入するアイテムの位置は、アイテムが除去される前の時点のものであることに注意してください。

- `index` が `0` である場合、新しいアイテムはリストの先頭に挿入されます。

- `index` が {{domxref("SVGTransformList.numberOfItems", "numberOfItems")}} 以上である場合、新しいアイテムはリストの末尾に追加されます。

## 構文

```js-nolint
insertItemBefore(newItem, index)
```

### 引数

- `newItem`
  - : リストに挿入する {{domxref("SVGTransform")}} アイテムです。
- `index`
  - : `integer` です。指定されたアイテムのインデックスを unsigned long で表します。

### 返値

{{domxref("SVGTransform")}} オブジェクトです。リストに挿入されたアイテムです。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : {{domxref("SVGTransformList")}} が読み取り専用属性に対応する場合、またはオブジェクト自体が読み取り専用である場合に発生します。

## 例

### リストへの座標変換の挿入

```html
<svg width="200" height="200" id="mySvg">
  <rect width="100" height="100" fill="blue" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// <rect> 要素の座標変換リストへのアクセス
const transformList = rectElement.transform.baseVal;

// 新しい移動座標変換を作成
const translateTransform = svgElement.createSVGTransform();
translateTransform.setTranslate(50, 50);

// リストの先頭に移動座標変換を挿入
transformList.insertItemBefore(translateTransform, 0);

// 座標変換の数と型
console.log(`座標変換の数: ${transformList.length}`); // 出力: 1
console.log(`座標変換の型: ${transformList.getItem(0).type}`); // 出力: 2 (e.g. SVG_TRANSFORM_TRANSLATE)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransform")}}
