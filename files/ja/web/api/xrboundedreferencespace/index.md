---
title: XRBoundedReferenceSpace
slug: Web/API/XRBoundedReferenceSpace
---

{{APIRef("WebXR Device API")}}{{secureContext_header}}

.[WebXR Device API](/ja/docs/Web/API/WebXR_Device_API) の **`XRBoundedReferenceSpace`** インターフェイスは、事前設定された境界を持つ仮想世界の[参照空間](/ja/docs/Web/API/WebXR_Device_API/Geometry)を記述します。 これは {{domxref("XRReferenceSpace")}} を拡張して、ビューアーの位置の周囲の本質的に制限のない空間を記述します。 これらの境界は、点の配列を使用して定義し、各点は、ユーザーがその中で移動することができる多角形の頂点を定義します。

これは通常、XR システムがユーザーの開始位置から限られた距離内でユーザーの物理的な移動を追跡できる場合に使用します。 指定された境界は、実際には、WebXR サイトまたはアプリケーションがユーザーが現実世界の壁やその他の障害物と衝突するのを防ぐために、ユーザーがいる部屋の形状とサイズを表す場合があります。 少なくとも、境界は、XR デバイスがユーザーの移動を追跡できる領域を示します。 制限付き空間の仕組みとその有用性の詳細については、[制限付き参照空間の使用](/ja/docs/Web/API/WebXR_Device_API/Bounded_reference_spaces)の記事を参照してください。

## プロパティ

_{{domxref("XRReferenceSpace")}} のプロパティに加えて、`XRBoundedReferenceSpace` には次のものが含まれています。_

- {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} {{ReadOnlyInline}}
  - : {{domxref("DOMPointReadOnly")}} オブジェクトの配列。 各オブジェクトは、ユーザーが留まる必要がある境界を定義する多角形の頂点を定義します。 これらの頂点は、ビューアーの位置の周囲を*時計回り*に移動するように並べ替える*必要があります*。

## メソッド

_`XRBoundedReferenceSpace` は、その親インターフェイスである {{domxref("XRReferenceSpace")}} のメソッドを継承します。 それ以上のメソッドはありません。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebXR Device API](/ja/docs/Web/API/WebXR_Device_API)
- [WebXR の幾何学と参照空間](/ja/docs/Web/API/WebXR_Device_API/Geometry)
- [視点とビューアー: WebXR でのカメラのシミュレーション](/ja/docs/Web/API/WebXR_Device_API/Cameras)
