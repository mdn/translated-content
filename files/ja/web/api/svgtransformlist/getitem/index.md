---
title: "SVGTransformList: getItem() メソッド"
short-title: getItem()
slug: Web/API/SVGTransformList/getItem
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

`getItem()` は {{domxref("SVGTransformList")}} インターフェイスのメソッドで、リストから指定されたアイテムを返します。

返されるアイテムはアイテムそのものであり、コピーされるわけではありません。アイテムに加えられた変更は即座にリストに反映されます。

最初のアイテムのインデックスは `0` です。

## 構文

```js-nolint
getItem(index)
```

### 引数

- `index`
  - : `integer` です。指定されたアイテムのインデックスを unsigned long で表します。

### 返値

{{domxref("SVGTransform")}} オブジェクトです。リスト内の指定されたアイテムです。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : {{domxref("SVGTransformList")}} が読み取り専用属性に対応する場合、またはオブジェクト自体が読み取り専用である場合に発生します。

## 例

### 座標変換リストからアイテムにアクセス

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

// <rect> 要素への移動座標変換を適用
const translateTransform = svgElement.createSVGTransform();
translateTransform.setTranslate(50, 50);
transformList.appendItem(translateTransform);

// 座標変換リストから先頭のアイテムを取得
const firstTransform = transformList.getItem(0);

// 変換型をログ出力
console.log(`変換型: ${firstTransform.type}`); // 出力: 2 (for SVG_TRANSFORM_TRANSLATE)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransform")}}
