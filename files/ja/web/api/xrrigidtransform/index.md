---
title: XRRigidTransform
slug: Web/API/XRRigidTransform
---

{{APIRef("WebXR Device API")}}

**`XRRigidTransform`** は、位置と向きによって記述される 3D 幾何学的変換を表す [WebXR API](/ja/docs/Web/API/WebXR_Device_API) のインターフェイスです。

`XRRigidTransform` は、以下を含む WebXR API 全体で変換を指定するために使用されます。

- {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} を使用して新しい参照空間を作成するときに使用する、親参照空間を基準にしたオフセットと向き。
- {{domxref("XRView")}} の {{domxref("XRView.transform", "transform")}}。
- {{domxref("XRPose")}} の {{domxref("XRPose.transform", "transform")}}。
- {{domxref("XRReferenceSpace")}} が受信した {{domxref("XRReferenceSpace.reset_event", "reset")}} イベントにある {{domxref("XRReferenceSpaceEvent")}} イベントの {{domxref("XRReferenceSpaceEvent.transform", "transform")}} プロパティ。

行列データを提供する裸の配列ではなく、これらの場所で `XRRigidTransform` を使用する利点は、`XRRigidTransform` が変換の逆の計算などを自動的に実行することです。 さらに良いことに、一度計算したらキャッシュされるため、後続の要求は大幅に高速化されます。

## コンストラクター

- {{domxref("XRRigidTransform.XRRigidTransform", "new XRRigidTransform()")}}
  - : 指定された位置や向きを適用する変換を表す新しい `XRRigidTransform` オブジェクトを作成します。

## プロパティ

- {{DOMxRef("XRRigidTransform.position")}} {{readonlyInline}} {{experimental_inline}}
  - : 変換の平行移動成分を記述する、メートルで表される 3 次元の点を指定する {{DOMxRef("DOMPointReadOnly")}}。 {{DOMxRef("DOMPointReadonly.w", "w")}} プロパティは常に `1.0` です。
- {{DOMxRef("XRRigidTransform.orientation")}} {{readonlyInline}} {{experimental_inline}}
  - : 変換の回転成分を記述する単位クォータニオンを含む {{DOMxRef("DOMPointReadOnly")}}。 単位クォータニオンとして、その長さは常に `1.0` に正規化されます。
- {{DOMxRef("XRRigidTransform.matrix")}} {{readonlyInline}} {{experimental_inline}}
  - : 16 メンバーの {{DOMxRef("Float32Array")}} の形式で変換行列を返します。 配列を使用して行列を表す方法については、[行列のフォーマット](/ja/docs/Web/API/XRRigidTransform/matrix#matrix_format)のセクションを参照してください。

<!---->

- {{DOMxRef("XRRigidTransform.inverse")}} {{readonlyInline}} {{experimental_inline}}
  - : この変換の逆である `XRRigidTransform` を返します。 つまり、元の変換によって以前に変換されたオブジェクトに適用された場合、変換が元に戻され、元のオブジェクトが返されます。

## 使用上の注意

`XRRigidTransform` が解釈されると、位置が適用される前に、影響を受けるオブジェクトに常に向きが適用されます。

## 例

このコードスニペットは、`XRRigidTransform` を作成して、新しい参照空間を作成するときに使用する現在の参照空間に対するオフセットと向きを指定します。 次に、セッションの {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} メソッドを呼び出して、最初のアニメーションフレームコールバックを要求します。

```js
xrSession.requestReferenceSpace(refSpaceType)
.then((refSpace) => {
  xrReferenceSpace = refSpace;
  xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(
        new XRRigidTransform(viewerStartPosition, cubeOrientation));
  animationFrameRequestID = xrSession.requestAnimationFrame(drawFrame);
```

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
