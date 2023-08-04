---
title: DOMPoint
slug: Web/API/DOMPoint
---

{{APIRef("DOM")}}

**`DOMPoint`** オブジェクトは、座標系における二次元または三次元の点を表します。最大三次元までの座標の値、およびオプションで視点の値も含まれます。 `DOMPoint` は {{domxref("DOMPointReadOnly")}} に基づいていますが、そのプロパティの値を変更することができます。

一般的には、正の `x` 成分は原点よりも右側の位置を表し、正の `y` 成分は原点よりも下側の位置を表し、正の `z` 成分は画面の外側（言い換えれば、ユーザーの方向）に向かって広がっています。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("DOMPoint.DOMPoint","DOMPoint()")}}
  - : 0 個以上の座標成分の値、およびオプションとして `w` の視点位置を与えられた新しい `DOMPoint` オブジェクトを作成し、それを返します。また、既存の `DOMPoint` や `DOMPointReadOnly` 、あるいはオブジェクトを使用して、 {{domxref("DOMPoint.fromPoint()")}} 静的メソッドを呼び出し、新しい点を作成することができます。

## メソッド

_`DOMPoint` には親である {{domxref("DOMPointReadOnly")}} から継承したメソッドがあります。_

## 静的メソッド

- {{domxref("DOMPoint.fromPoint()", "DOMPoint.fromPoint()")}}
  - : 既存の点（または、一致するプロパティを含むオブジェクト）を指定して、そのプロパティの値を提供する、新しい変更可能な `DOMPoint` オブジェクトを作成します。

## プロパティ

_`DOMPoint` には親である {{domxref("DOMPointReadOnly")}} から継承したプロパティがあります。_

- {{domxref("DOMPoint.x")}}
  - : この `DOMPoint` の水平座標である `x` です。
- {{domxref("DOMPoint.y")}}
  - : この `DOMPoint` の垂直座標である `y` です。
- {{domxref("DOMPoint.z")}}
  - : この `DOMPoint` の奥行き座標である `z` です。
- {{domxref("DOMPoint.w")}}
  - : この `DOMPoint` の視点位置である `w` です。

## 例

[WebXR 機器 API](/ja/docs/Web/API/WebXR_Device_API) では、位置や向きを表すために `DOMPointReadOnly` 値が使用されます。以下のスニペットでは、 XR 機器（VR ヘッドセットや AR 機能付き携帯電話など）のポーズは {{domxref("XRSession")}} アニメーションフレームの中で {{domxref("XRFrame.getViewerPose()")}} を呼び出すことで取得することができ、それから結果の {{domxref("XRPose")}} の {{domxref("XRPose.transform","transform")}} プロパティにアクセスしています。これには 2 つの `DOMPointReadOnly` 属性があります。ベクトルを表す {{domxref("XRRigidTransform.position","position")}} と、クォータニオンを表す {{domxref("XRViewerPose.orientation","orientation")}} です。

```js
function onXRFrame(time, xrFrame) {
  let viewerPose = xrFrame.getViewerPose(xrReferenceSpace);

  if (viewerPose) {
    let position = viewerPose.transform.position;
    let orientation = viewerPose.transform.orientation;

    console.log(
      "XR Viewer Position: {x: " +
        roundToTwo(position.x) +
        ", y: " +
        roundToTwo(position.y) +
        ", z: " +
        roundToTwo(position.z),
    );

    console.log(
      "XR Viewer Orientation: {x: " +
        roundToTwo(orientation.x) +
        ", y: " +
        roundToTwo(orientation.y) +
        ", z: " +
        roundToTwo(orientation.z) +
        ", w: " +
        roundToTwo(orientation.w),
    );
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMRect")}}
- {{domxref("DOMMatrix")}}
