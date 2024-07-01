---
title: 幾何インターフェイス
slug: Web/API/Geometry_interfaces
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{DefaultAPISidebar("Geometry Interfaces")}}

**幾何インターフェイス** は、 3D および 2D グラフィックを操作するためのインターフェイスを提供する CSS モジュールです。特に、点、長方形、四角形、[座標変換行列](/ja/docs/Web/API/WebGL_API/Matrix_math_for_the_web#変換行列) （グラフィックを移動、拡大縮小、回転、歪め/傾け、反転、乗算/連鎖させ、逆演算/元に戻す処理）を演算するためのインターフェイスを提供します。

ウェブ開発者であれば、常に幾何インターフェイスを直接使用するわけではありませんが、その代わりに裏で幾何インターフェイスに頼っている他の機能、たとえば [CSS 座標変換](/ja/docs/Web/CSS/CSS_transforms)、[キャンバス API](/ja/docs/Web/API/Canvas_API) 、[WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API) の一部、そして（より直接的に）{{domxref('VideoFrame.visibleRect')}}、{{domxref('Element.getClientRects()')}}、{{domxref('Element.getBoundingClientRect()')}} などを使用しています。

## インターフェイス

- {{domxref('DOMMatrix')}}
  - : [座標変換行列](/ja/docs/Web/API/WebGL_API/Matrix_math_for_the_web#変換行列)を表します。グラフィックの平行移動、拡大縮小、回転、歪め/せん断/傾け、反転、乗算/連結、逆演算/取り消しなどの演算を行います。
- {{domxref('DOMMatrixReadOnly')}}
  - : {{domxref('DOMMatrix')}} の読み取り専用版です。
- {{domxref('DOMPoint')}}
  - : 座標系内の 2D または 3D の点を表します。 3D までの座標の値と、オプションの視点位置を含みます。
- {{domxref('DOMPointReadOnly')}}
  - : {{domxref('DOMPoint')}} の読み取り専用版です。
- {{domxref('DOMQuad')}}
  - : [四辺形](https://ja.wikipedia.org/wiki/四角形) の角を定義する 4 つの {{domxref('DOMPoint')}} オブジェクトの集合を表します。
- {{domxref('DOMRect')}}
  - : 長方形の大きさと位置を表します。
- {{domxref('DOMRectReadOnly')}}
  - : {{domxref('DOMRect')}} の読み取り専用版です。

## 例

{{domxref('Path2D.addPath()')}} と {{domxref('CanvasPattern.setTransform()')}} の記事に、幾何インターフェイスを使用する例があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref('Path2D.addPath()')}}
- {{domxref('CanvasPattern.setTransform()')}}
- {{domxref('CanvasRenderingContext2D.getTransform()')}}
- {{domxref('CanvasRenderingContext2D.setTransform()')}}
- {{domxref('CSSTransformValue.toMatrix()')}}
- {{domxref('CSSTransformComponent.toMatrix()')}}
- {{domxref('Element.getBoundingClientRect()')}}
- {{domxref('Element.getClientRects()')}}
- {{domxref('VideoFrame.visibleRect')}}
- {{domxref('XRLightEstimate')}}
- {{domxref('XRRigidTransform')}}
