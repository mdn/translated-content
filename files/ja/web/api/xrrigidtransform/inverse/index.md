---
title: XRRigidTransform.inverse
slug: Web/API/XRRigidTransform/inverse
---

{{APIRef("WebXR Device API")}}

{{domxref("XRRigidTransform")}} インターフェイスの **`inverse`** 読み取り専用プロパティは、それ自体の変換の逆である別の {{domxref("XRRigidTransform")}} オブジェクトを返します。 つまり、逆を明示的に生成する代わりに、`inverse` プロパティを使用して、`XRRigidTransform` の逆をいつでも取得できます。

## 構文

```
let transformInverse = xrRigidTransform.inverse;
```

### 値

アクセスした `XRRigidTransform` の逆を含む {{domxref("XRRigidTransform")}}。

親 `XRRigidTransform` によって以前に変換されたオブジェクトに変換の逆を適用すると、常に変換が元に戻され、結果としてオブジェクトは前のポーズに戻ります。 つまり、その位置と向きの両方が以前の構成に戻ります。

## 例

この例では、オブジェクトのモデルビュー行列は、ビュー行列を取得し、それをオブジェクトのポーズ行列で乗算することによって計算されます。

```js
let modelViewMatrix = mat4.create();

for (let view of pose.view) {
  let viewport = glLayer.getViewport(view);
  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  /* ... */

  mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, objectMatrix);
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.modelViewMatrix,
    false,
    modelViewMatrix,
  );

  /* ... */
}
```

このレンダラーのコアコードのあらましは、ビューアーの位置と向きに基づいてオブジェクトを変換するために使用するモデルビュー行列として、その変換の逆の行列をを取ることによって、ポーズのビューがどのように表されるかを示しています。 逆の行列にオブジェクトの行列を掛けてモデルビュー行列を取得し、その情報を含むようにユニフォームを設定することで、シェーダープログラムに渡します。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
