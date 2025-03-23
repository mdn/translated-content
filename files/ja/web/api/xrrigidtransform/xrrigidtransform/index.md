---
title: XRRigidTransform()
slug: Web/API/XRRigidTransform/XRRigidTransform
---

{{APIRef("WebXR Device API")}}

**`XRRigidTransform()`** コンストラクターは、点またはオブジェクトの位置と向きを表す新しい {{domxref("XRRigidTransform")}} オブジェクトを作成して返します。 特に、`XRRigidTransform` は、空間を横断する座標系間で平行移動するための変換を提供するときに使用されます。

## 構文

```
let xrRigidTransform = new XRRigidTransform(position, orientation);
```

### パラメーター

- `position` {{optional_inline}}
  - : 点またはオブジェクトが配置される座標を指定する {{domxref("DOMPointInit")}} に準拠するオブジェクト。 これらの寸法はメートルで指定します。 このパラメーターが省略されているか、`DOMPointInit` と互換性がない場合、使用される位置は `{x: 0, y: 0, z: 0, w: 1}` であると見なされます。 `w` は*常に* 1 でなければなりません。
- `orientation` {{optional_inline}}
  - : オブジェクトが向いている方向を指定する {{domxref("DOMPointInit")}} に準拠するオブジェクト。 向きのデフォルト値は `{x: 0, y: 0, z: 0, w: 1}` です。 指定された向きは、まだ正規化されていない場合は正規化されます。

### 戻り値

オブジェクトの位置と向きを原点から指定された `position` に調整し、`orientation` によって示される方向を向く変換行列を表すように初期化された新しい {{domxref("XRRigidTransform")}} オブジェクト。

### 例外

- `TypeError`
  - : 指定された `position` の `w` 座標の値が 1.0 ではありません。

## 例

この例では、シーンのアニメーションの開始が示されています。 特定のタイプの参照空間の要求から始まり、最初のアニメーションフレームを要求する前に、変換に基づいて座標系をシフトします。

```js
let animationFrameRequestID = 0;

xrSession.requestReferenceSpace("local-floor").then((refSpace) => {
  xrReferenceSpace = refSpace.getOffsetReferenceSpace(
    new XRRigidTransform(viewerPosition, viewerOrientation),
  );
  animationFrameRequestID = xrSession.requestAnimationFrame(drawFrame);
});
```

`local-floor` タイプの参照空間を要求した後、返された promise は最終的に解決され、その時点で新しい参照空間オブジェクト `refSpace` を受け取ります。 ビューアーの初期位置と向きから `XRRigidTransform` を作成した後、新しい変換を {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} に渡して*別*の参照空間を作成します。 オフセットして、その原点が `viewerPosition` によって指定された座標と同じ空間内の場所に配置されるようにします。 向きも同様に修正されます。

次に、{{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} が呼び出され、描画する新しいアニメーションフレームを要求します。 `drawFrame()` コールバックは、システムが次のフレームを描画する準備ができたときに実行されます。

[移動、向き、モーション](/ja/docs/Web/API/WebXR_Device_API/Movement_and_motion)には、さらに多くの例があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
