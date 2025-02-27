---
title: "DOMPoint: y プロパティ"
short-title: y
slug: Web/API/DOMPoint/y
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{APIRef("DOM")}}

**`DOMPoint`** インターフェイスの **`y`** プロパティは、空間内の点の垂直座標 _y_ を保持します。

変換によって方向が変更されていない限り、 `y` の値は下に向かって増加し、上に向かって減少します。

## 値

この点の _y_ 座標の値を示す倍精度浮動小数点値。この値は**無制限**であり、無限または無効であることが許されます（つまり、その値は {{jsxref("NaN")}} または {{jsxref("Infinity", "±Infinity")}} であるかもしれません）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の座標プロパティ: {{domxref("DOMPoint.x", "x")}},
  {{domxref("DOMPoint.z", "z")}}, および視点位置である {{domxref("DOMPoint.w",
    "w")}}
