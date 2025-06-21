---
title: "SVGTransform: type プロパティ"
short-title: type
slug: Web/API/SVGTransform/type
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

**`type`** が {{domxref("SVGTransform")}} インターフェイスの読み取り専用プロパティで、このインターフェイスで定義されている `SVG_TRANSFORM_*` 定数のいずれかによって指定される、適用された座標変換の `type` を表します。

## 値

整数です。値の型を unsigned short で表します。

## 例

### 座標変換の種類を特定

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="rect" x="50" y="50" width="100" height="100" fill="blue" />
</svg>
```

```js
const rect = document.getElementById("rect");
const transformList = rect.transform.baseVal;

// 移動の座標変換を作成して追加
const translateTransform = rect.ownerSVGElement.createSVGTransform();
translateTransform.setTranslate(20, 30);
transformList.appendItem(translateTransform);

// 追加された座標変換の種類をチェック
console.log(transformList.getItem(0).type); // 出力: 2 (SVG_TRANSFORM_TRANSLATE)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
