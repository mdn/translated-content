---
title: "SVGTransformList: clear() メソッド"
short-title: clear()
slug: Web/API/SVGTransformList/clear
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

`clear()` は {{domxref("SVGTransformList")}} インターフェイスのメソッドで、リストからすべてのアイテムを除去し、リストを空にします。

## 構文

```js-nolint
clear()
```

### 引数

なし。

### 返値

なし ({{jsxref('undefined')}})。

### 例外

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : {{domxref("SVGTransformList")}} が読み取り専用属性に対応する場合、またはオブジェクト自体が読み取り専用である場合に発生します。

## 例

### SVG 要素からすべての座標変換をクリア

```html
<svg width="200" height="200" id="mySvg">
  <rect width="100" height="100" fill="blue" transform="translate(50,50)" />
</svg>
```

```js-nolint
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// <rect> 要素の座標変換リストへのアクセス
const transformList = rectElement.transform.baseVal;

// <rect> 要素への移動座標変換を適用
const translateTransform = svgElement.createSVGTransform();
translateTransform.setTranslate(50, 50);
transformList.appendItem(translateTransform);

// クリア前の座標変換の数
console.log(
  `クリア前の座標変換の数: ${transformList.length}`,
); // 出力: 1

// リストからすべての座標変換をクリア
transformList.clear();

// クリア後の座標変換の数
console.log(
  `クリア後の座標変換の数: ${transformList.length}`,
); // 出力: 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGTransform")}}
