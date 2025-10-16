---
title: XRRigidTransform.position
slug: Web/API/XRRigidTransform/position
---

{{APIRef("WebXR Device API")}}

{{domxref("XRRigidTransform")}} の **`position`** 読み取り専用プロパティは、変換の平行移動成分を記述する、メートルで指定された 3D 点を提供する {{domxref("DOMPointReadOnly")}} オブジェクトです。

## 構文

```
let pos = xrRigidTransform.position;
```

### 値

変換行列の 3D 位置成分を示す読み取り専用の {{domxref("DOMPointReadOnly")}}。 単位はメートルです。

> [!NOTE]
> 点の `w` 成分は常に 1.0 です。

## 例

オブジェクトを目の高さに配置するために使用できる参照空間を作成するには、次のようにします（目の高さが 1.5 メートルであると想定）。

```js
function onSessionStarted(xrSession) {
  xrSession.addEventListener("end", onSessionEnded);

  gl = initGraphics(xrSession);

  let glLayer = new XRWebGLLayer(xrSession, gl);
  xrSession.updateRenderState({ baseLayer: glLayer });

  if (immersiveSession) {
    xrSession.requestReferenceSpace("bounded-floor").then((refSpace) => {
      refSpaceCreated(refSpace);
    }).catch(() => {
      session.requestReferenceSpace("local-floor").then(refSpaceCreated);
    });
  } else {
    session.requestReferenceSpace("viewer").then(refSpaceCreated);
  }
}

function refSpaceCreated(refSpace) {
  if (immersiveSession) {
    xrReferenceSpace = refSpace;
  } else {
    xrReferenceSpace = refSpace.getOffsetReferenceSpace(
      new XRRigidTransform({y: -1.5});
    );
  }
  xrSession.requestAnimationFrame(onFrame);
}
```

WebXR で使用するグラフィックスコンテキストを設定した後、これは変数 `immersiveSession` が `true` であるかどうかを確認することから始まります。 その場合、最初に `bounded-floor` 参照空間を要求します。 それが失敗した場合（おそらく `bounded-floor` がサポートされていないため）、`local-floor` 参照空間を要求しようとします。

没入型セッションでない場合は、代わりに `viewer` 参照空間を要求します。

いずれの場合も、空間が取得されたら、`refSpaceCreated()` 関数に渡します。 没入型空間の場合、指定された空間は将来の使用のために単に保存します。 ただし、インラインセッションの場合、床レベルが自動的に調整されない空間にいることがわかっているので、オフセット参照空間を要求して、ビューアーの高さを推定床レベルの 0 メートルより 1.5 メートル上にシフトします。 その新しい参照空間は、最初に受け取ったものの代わりに使用します。

最後に、アニメーションフレームの要求が送信されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
