---
title: "SVGTransformList: replaceItem() メソッド"
short-title: replaceItem()
slug: Web/API/SVGTransformList/replaceItem
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

`replaceItem()` は {{domxref("SVGTransformList")}} インターフェイスのメソッドで、リスト内の既存のアイテムを新しいアイテムに置き換えます。

挿入されるアイテムはアイテムそのものであり、コピーではありません。

- `newItem` がすでにリスト内に存在する場合は、このリストに挿入される前に、以前のリストから除去されます。

- アイテムがすでにこのリスト内に存在する場合は、置き換えられるアイテムの `index` は、アイテムが除去される前であることに注意してください。

## 構文

```js-nolint
replaceItem(newItem, index)
```

### 引数

- `newItem`
  - : リストに挿入する {{domxref("SVGTransform")}} アイテムです。
- `index`
  - : `integer` です。新しいアイテムが既存のアイテムを置き換えるインデックスを unsigned long で表します。

### 返値

{{domxref("SVGTransform")}} オブジェクトで、リストに追加されたアイテムを表します。

### 例外

このメソッドは、次の型の {{domxref("DOMException")}} を発生させる可能性があります。

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : {{domxref("SVGTransformList")}} が読み取り専用属性に対応する場合、またはオブジェクト自体が読み取り専用である場合に発生します。

- `IndexSizeError` {{domxref("DOMException")}}
  - : インデックス番号が {{domxref("SVGTransformList.numberOfItems", "numberOfItems")}} 以上であった場合に発生します。

## 例

### リスト内の座標変換尾の置き換え

```html
<svg width="200" height="200" id="mySvg">
  <rect width="100" height="100" fill="blue" transform="translate(50,50)" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// <rect> 要素の座標変換リストへのアクセス
const transformList = rectElement.transform.baseVal;

// 新しい回転座標変換を作成
const rotateTransform = svgElement.createSVGTransform();
rotateTransform.setRotate(45, 50, 50);

transformList.replaceItem(rotateTransform, 0);

// 新しい変換の詳細をログ出力
console.log(`New Transformation Type: ${transformList.getItem(0).type}`); // 出力: 4 (e.g. SVG_TRANSFORM_ROTATE)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransform")}}
- {{domxref("SVGTransformList.numberOfItems")}}
