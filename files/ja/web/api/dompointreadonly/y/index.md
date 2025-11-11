---
title: "DOMPointReadOnly: y プロパティ"
short-title: y
slug: Web/API/DOMPointReadOnly/y
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`DOMPointReadOnly`** インターフェイスの **`y`** プロパティは、空間の読み取り専用の点における垂直座標 y を保持します。

もし、スクリプトでこのプロパティの値を変更する必要がある場合は、代わりに {{domxref("DOMPoint")}} オブジェクトを使用 してください。

一般的に、変換によって反転していないとみなすならば、正の値の `y` は下方向を意味し、負の値の `y` は上方向を意味します。

## 値

この点の y 座標の値を示す倍精度浮動小数点値。この値は**無制限**であり、無限大または無効であることが許されます（つまり、その値は {{jsxref("NaN")}} または {{jsxref("Infinity", "±Infinity")}} である可能性があります）。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の座標プロパティ: {{domxref("DOMPointReadOnly.x", "x")}},
  {{domxref("DOMPointReadOnly.z", "z")}}, および視点位置である {{domxref("DOMPointReadOnly.w", "w")}}
