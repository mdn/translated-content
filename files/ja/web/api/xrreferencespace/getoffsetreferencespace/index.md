---
title: "XRReferenceSpace: getOffsetReferenceSpace() メソッド"
short-title: getOffsetReferenceSpace()
slug: Web/API/XRReferenceSpace/getOffsetReferenceSpace
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

{{domxref("XRReferenceSpace")}} インターフェイスの **`getOffsetReferenceSpace()`** メソッドは、メソッドが呼び出されたオブジェクトと 3D 空間内の特定の点との間の位置の相対的な違いを表す新しい参照空間オブジェクトを返します。 `getOffsetReferenceSpace()` によって返されるオブジェクトは、{{domxref("XRReferenceSpace")}} で呼び出された場合は `XRReferenceSpace` であり、{{domxref("XRBoundedReferenceSpace")}} で呼び出された場合は `XRBoundedReferenceSpace` です。

つまり、3D 空間にオブジェクトがあり、それに対して別のオブジェクトを相対的に配置する必要がある場合は、`getOffsetReferenceSpace()` を呼び出して、`getOffsetReferenceSpace()` を呼び出すオブジェクトの位置と向きを基準にして、2 番目のオブジェクトに持たせる位置と向きを渡します。

次に、シーンを描画するときに、オフセット参照空間を使用して、オブジェクトを相互に相対的に配置するだけでなく、必要な変換を適用して、ビューアーの位置に基づいてオブジェクトを適切にレンダリングできます。 これは、[非 XR 入力に基づく回転の実装](#非_xr_入力に基づく回転の実装)の例で示されています。 この例では、この方法を使用して、ユーザーがマウスを使用して視野角をピッチおよびヨーできるようにする方法を示しています。

## 構文

```js-nolint
getOffsetReferenceSpace(originOffset)
```

### 引数

- `originOffset`
  - : 新しい参照空間の原点へのオフセットを指定する {{domxref("XRRigidTransform")}}。 これらの値は、現在の参照空間の位置と向きに追加され、その結果は、新しく作成された {{domxref("XRReferenceSpace")}} の位置と向きとして使用されます。

### 返値

メソッドが呼び出された参照空間と同じネイティブの原点を持つが、オブジェクトから `originOffset` で指定された点までの隔たりを示す原点オフセットを持つ参照空間を記述する新しい {{domxref("XRReferenceSpace")}} オブジェクトです。

このメソッドを呼び出すオブジェクトが {{domxref("XRBoundedReferenceSpace")}} の場合、返されるオブジェクトも `XRBoundedReferenceSpace` です。 新しい参照空間の {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} には、元のオブジェクトの `boundsGeometry` が設定され、それぞれの点に `originOffset` の逆行列（inverse）が乗算されます。

## 例

以下は、`getOffsetReferenceSpace()` の使用方法を示すいくつかの例です。

### ビューアーのテレポートまたは位置の設定

シーンを最初に作成するときに、3D 世界内でのユーザーの位置を設定する必要がある場合があります。 `getOffsetReferenceSpace()` を使用してこれを行うことができます。

```js
xrSession.requestReferenceSpace("local").then((refSpace) => {
  xrReferenceSpace = refSpace;
  xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(
    new XRRigidTransform(startPosition, { x: 0, y: 0, z: 1.0, w: 1.0 }),
  );
  xrSession.requestAnimationFrame(drawFrame);
});
```

このコードでは、ローカル参照空間を取得し、`getOffsetReferenceSpace()` を使用して、原点を `startPosition` で指定された位置に調整し、向きが Z 軸に直に沿った新しい空間を作成します。 次に、{{domxref("XRSession")}} の {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} を使用して最初のアニメーションフレームを要求します。

### 非 XR 入力に基づく回転の実装

WebXR が直接サポートしている入力コントロールは、すべて専用の VR または AR の入力デバイスです。 マウス、キーボード、またはその他の入力デバイスを使用して 3D 空間内のオブジェクトを移動または変換したり、ユーザーが空間内を移動できるようにするには、入力を読み取って移動するためのコードを記述する必要があります。

これは、`getOffsetReferenceSpace()` のもう 1 つの良いユースケースです。 この例では、ユーザーがマウスを右クリックしながら動かすことで、視野角の変更により周囲を見回せるコードを示します。

まず、{{domxref("Element.mousemove_event", "mousemove")}} イベントのイベントハンドラーを追加します。 これは、マウスの右ボタンが押されている場合に回転を実行するコードを呼び出します。 {{domxref("Element.oncontextmenu", "oncontextmenu")}} イベントで {{domxref("Event.preventDefault", "preventDefault()")}} を呼び出すことにより、このイベントが無視されるように設定していることにも注意してください。 これにより、右クリックによってコンテキストメニューがブラウザーに表示されなくなります。

```js
canvas.oncontextmenu = (event) => {
  event.preventDefault();
};
canvas.addEventListener("mousemove", (event) => {
  if (event.buttons & 2) {
    rotateViewBy(event.movementX, event.movementY);
  }
});
```

次に、`rotateViewBy()` 関数は、`mousemove` イベントからのマウスデルタ値に基づいて、マウスルック（mouse look）方向のヨーとピッチを更新します。 ピッチを制限しているため、真上と真下を超えて見ることはできません。 これが呼び出されるたびに、新しいオフセットを使用して、`mousePitch` と `mouseYaw` の現在の値が更新されます。

```js
let mouseYaw = 0.0;
let mousePitch = 0.0;
const inverseOrientation = quat.create();
const MOUSE_SPEED = 0.003;

function rotateViewBy(dx, dy) {
  mouseYaw += dx * MOUSE_SPEED;
  mousePitch += dy * MOUSE_SPEED;

  if (mousePitch < -Math.PI * 0.5) {
    mousePitch = -Math.PI * 0.5;
  } else if (mousePitch > Math.PI * 0.5) {
    mousePitch = Math.PI * 0.5;
  }
}
```

最後に、計算したヨーとピッチをビューアーの向きに実際に適用するコードが必要です。 この関数 `applyMouseMovement()` は、次のことを処理します。

```js
function applyMouseMovement(refSpace) {
  if (!mouseYaw && !mousePitch) {
    return refSpace;
  }

  quat.identity(inverseOrientation);
  quat.rotateX(inverseOrientation, inverseOrientation, -mousePitch);
  quat.rotateY(inverseOrientation, inverseOrientation, -mouseYaw);

  let newTransform = new XRRigidTransform(
    { x: 0, y: 0, z: 0 },
    {
      x: inverseOrientation[0],
      y: inverseOrientation[1],
      z: inverseOrientation[2],
      w: inverseOrientation[3],
    },
  );

  return refSpace.getOffsetReferenceSpace(newTransform);
}
```

この関数は、現在のピッチ値とヨー値からビューアーの向きを決めるために使用する逆向き行列を作成し、{{domxref("XRRigidTransform.XRRigidTransform", "new XRRigidTransform()")}} を呼び出すときにその行列を向きのソースとして使用します。 次に、新しい {{domxref("XRRigidTransform")}} の参照空間がフェッチされ、呼び出し元に返されます。

この新しい参照空間は、ビューアーの位置は変更しませんが、蓄積されたマウス入力から生成されたピッチとヨーの値に基づいて向きを変更します。 `applyMouseMovement()` は、フレームを描画するときに、{{domxref("XRFrame.getViewerPose", "getViewerPose()")}} を使用してビューアーのポーズをフェッチする直前に呼び出す必要があり、レンダリングはこの参照空間で実行する必要があります。

これに似たコードが、[移動、向き、モーション](/ja/docs/Web/API/WebXR_Device_API/Movement_and_motion)という WebXR チュートリアルの幅広い記事で使用されているのを見ることができます。 特に、[WebXR セッションの開始](/ja/docs/Web/API/WebXR_Device_API/Movement_and_motion#starting_up_the_webxr_session)というセクションを確認してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
