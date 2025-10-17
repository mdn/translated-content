---
title: "SVGSVGElement: currentScale プロパティ"
short-title: currentScale
slug: Web/API/SVGSVGElement/currentScale
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

**`currentScale`** は {{domxref("SVGSVGElement")}} インターフェイスのプロパティで、最も外側の {{SVGElement("svg")}} 要素に対するユーザーの拡大操作やパン操作を考慮し、初期ビューに対する現在の変倍率を反映します。

DOM 属性の `currentScale` と `currentTranslate` は、2×3 行列 `[a b c d e f] = [currentScale 0 0 currentScale currentTranslate.x currentTranslate.y]` と同等です。「拡大表示」が有効化されている場合（つまり `zoomAndPan="magnify"`）、その効果は、SVG 文書フラグメントの最も外側のレベル（つまり、最も外側の {{SVGElement("svg")}} 要素の外側）に追加の変換が配置されたかのように作用します。

{{SVGElement("svg")}} 要素が最も外側のレベルにない場合、`currentScale` は常に `1` であり、設定しても効果はありません。

## 値

浮動小数点数です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGSVGElement.currentTranslate")}}
