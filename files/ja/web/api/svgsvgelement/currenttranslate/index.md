---
title: "SVGSVGElement: currentTranslate プロパティ"
short-title: currentTranslate
slug: Web/API/SVGSVGElement/currentTranslate
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

**`currentTranslate`** は {{domxref("SVGSVGElement")}} インターフェイスの読み取り専用プロパティで、最も外側の {{SVGElement("svg")}} 要素に対応するユーザーの「拡大率」を考慮した変換倍率を反映します。

{{SVGElement("svg")}} 要素が最外層レベルにない場合、`currentTranslate` は常に `{ x: 0, y: 0 }` となり、読み取り専用の状態です。それ以外の場合は書き込み可能です。

## 値

{{domxref("DOMPointReadOnly")}} です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGSVGElement.currentScale")}}
- {{domxref("DOMPointReadOnly")}}
