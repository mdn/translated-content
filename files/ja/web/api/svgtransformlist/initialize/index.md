---
title: "SVGTransformList: initialize() メソッド"
short-title: initialize()
slug: Web/API/SVGTransformList/initialize
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

`initialize()` は {{domxref("SVGTransformList")}} インターフェイスのメソッドで、リストから既存のアイテムをすべて除去し、引数で指定された単一のアイテムを保持するようリストを再初期化します。

追加されるアイテムがすでにリストに存在する場合は、このリストに追加される前に、前のリストから削除されます。追加されたアイテムはアイテムそのものであり、コピーではありません。返値は、リストに追加されたアイテムです。

## 構文

```js-nolint
initialize(newItem)
```

### 引数

- `newItem`
  - : リストに追加する {{domxref("SVGTransform")}} アイテムです。

### 返値

{{domxref("SVGTransform")}} オブジェクトです。リストに追加された文字列です。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : {{domxref("SVGTransformList")}} が読み取り専用属性に対応する場合、またはオブジェクト自体が読み取り専用である場合に発生します。

## 例

### Re-initializing the Transform List with a New Transformation

```html
<svg width="200" height="200" id="mySvg">
  <rect width="100" height="100" fill="blue" />
</svg>
```

```js-nolint
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// <rect> 要素の座標変換リストへのアクセス
const transformList = rectElement.transform.baseVal;

// <rect> 要素へ初期移動座標変換を適用
const translateTransform = svgElement.createSVGTransform();
translateTransform.setTranslate(50, 50);
transformList.appendItem(translateTransform);

// 初期化前の変換の数
console.log(
  `初期化前の変換の数: ${transformList.length}`,
); // 出力: 1

// 新しい変倍座標変換
const scaleTransform = svgElement.createSVGTransform();
scaleTransform.setScale(2, 2);

// 新しい変倍座標変換でリストを初期化
transformList.initialize(scaleTransform);

// 初期化後の変換の数
console.log(
  `初期化後の変換の数: ${transformList.length}`,
); // 出力: 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransform")}}
