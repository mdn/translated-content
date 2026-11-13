---
title: SVGPathElement
slug: Web/API/SVGPathElement
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{APIRef("SVG")}}

**`SVGPathElement`** インターフェイスは {{SVGElement("path")}} 要素に対応します。

{{InheritanceDiagram}}

> [!NOTE]
> SVG 2 では、 `getPathSegAtLength()` および `createSVGPathSeg*` メソッドが削除され、`pathLength` プロパティと `getTotalLength()` および `getPointAtLength()` メソッドが {{domxref("SVGGeometryElement")}} へ移動されました。

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("SVGGeometryElement")}} から継承したプロパティがあります。_

- {{domxref("SVGPathElement.pathLength")}} {{ReadOnlyInline}}
  - : このプロパティは {{SVGAttr("pathLength")}} 属性を反映します。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("SVGGeometryElement")}} から継承したメソッドもあります。_

- {{domxref("SVGPathElement.getPathData()")}} {{experimental_inline}}
  - : パスデータに対応するパス区間の並びを返します。オプションで値と区間型を正規化します。
- {{domxref("SVGPathElement.getPointAtLength()")}}
  - : パス上の指定された位置にある点を返します。
- {{domxref("SVGPathElement.getTotalLength()")}}
  - : ユーザーエージェントが計算したパスの全長を、ユーザー単位で返します。
- {{domxref("SVGPathElement.setPathData()")}} {{experimental_inline}}
  - : パス区間の並びを新しいパスデータとして設定します。
- {{domxref("SVGPathElement.getPathSegmentAtLength()")}} {{experimental_inline}}
  - : パス上の指定された位置にある区間を返します。

### 非推奨のメソッド

- {{domxref("SVGPathElement.getPathSegAtLength()")}} {{deprecated_inline}}
  - : ユーザーエージェントの distance-along-a-path アルゴリズムを用いて、{{domxref("SVGAnimatedPathData.pathSegList", "pathSegList")}} 内のインデックスを表す符号なし長整数を返します。
- {{domxref("SVGPathElement.createSVGPathSegClosePath()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegClosePath")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegMovetoAbs()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegMovetoAbs")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegMovetoRel()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegMovetoRel")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegLinetoAbs()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegLinetoAbs")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegLinetoRel()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegLinetoRel")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegCurvetoCubicAbs()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegCurvetoCubicAbs")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegCurvetoCubicRel()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegCurvetoCubicRel")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegCurvetoQuadraticAbs()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegCurvetoQuadraticAbs")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegCurvetoQuadraticRel()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegCurvetoQuadraticRel")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegArcAbs()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegArcAbs")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegArcRel()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegArcRel")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegLinetoHorizontalAbs()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegLinetoHorizontalAbs")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegLinetoHorizontalRel()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegLinetoHorizontalRel")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegLinetoVerticalAbs()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegLinetoVerticalAbs")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegLinetoVerticalRel()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegLinetoVerticalRel")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegCurvetoCubicSmoothAbs()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegCurvetoCubicSmoothAbs")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegCurvetoCubicSmoothRel()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegCurvetoCubicSmoothRel")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegCurvetoQuadraticSmoothAbs")}} オブジェクトを返します。
- {{domxref("SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothRel()")}} {{deprecated_inline}}
  - : 独立した、親のない {{domxref("SVGPathSegCurvetoQuadraticSmoothRel")}} オブジェクトを返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("path")}} SVG 要素
