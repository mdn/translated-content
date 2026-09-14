---
title: "SVGAngle: unitType プロパティ"
short-title: unitType
slug: Web/API/SVGAngle/unitType
l10n:
  sourceCommit: a53253307ade5c6e3eec896a5f2d799fdebe9ae8
---

{{APIRef("SVG")}}

**`unitType`** は {{domxref("SVGAngle")}} インターフェイスのプロパティで、[単位型定数](/ja/docs/Web/API/SVGAngle#定数)の 1 つであり、この角度の値が表現する単位を表します。

## 値

数値で、定数の数値の値を表します。

## 例

`unitType` プロパティにアクセスする方法の例を以下に示します。

```js
// SVGAngle オブジェクトを取得
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// 角度の値を設定
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_DEG, 45);

// 単位型をチェック
console.log(angle.unitType); // 出力: 2 (SVG_ANGLETYPE_DEG)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedAngle")}}
