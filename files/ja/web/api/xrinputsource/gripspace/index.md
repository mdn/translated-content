---
title: "XRInputSource: gripSpace プロパティ"
short-title: gripSpace
slug: Web/API/XRInputSource/gripSpace
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}

{{domxref("XRInputSource")}} の **`gripSpace`** 読み取り専用プロパティは、ネイティブの原点がユーザーの手に保持している（またはユーザーの手の一部の）ように見える仮想オブジェクトのレンダリングに使用するポーズを追跡する {{domxref("XRSpace")}} を返します。 例えば、ユーザーが仮想の真っ直ぐな棒を持っている場合、この `XRSpace` のネイティブの原点は、ユーザーの拳のおおよその重心にあります。

## 値

仮想空間での入力機器の位置と向きを表す {{domxref("XRSpace")}} オブジェクトです。 機器の画像をシーンにレンダリングするのに適しています。 入力ソースが本質的に追跡できない場合、`gripSpace` は `null` です。 例えば、{{domxref("XRInputSource.targetRayMode", "targetRayMode")}} が `tracked-pointer` である入力のみが `gripSpace` を提供します。

コントローラーがまっすぐな棒のような形をしていて、ユーザーの拳で握られていると想像してみてください。 グリップ空間の本来の原点は、ユーザーの拳の重心にあり、ユーザーの手の位置を追跡します。

**左手のグリップ空間の座標系。**

![グリップ空間が、世界に対するプレーヤーの手のローカル座標系をどのように示しているかを示す図。](gripspace-lefthand-light.svg)

**右手のグリップ空間の座標系。**

![グリップ空間が、世界に対するプレーヤーの手のローカル座標系をどのように示しているかを示す図。](gripspace-righthand-light.svg)

上の図に示すように、座標系は次のように方向付けられています。

- x 軸は、ユーザーの手のひらに垂直であり、手の甲から外側に伸びる方向は、コントローラーがユーザーの右手にある場合は +X 、コントローラーが左手にある場合は -X です。
- z 軸は、棒の長さに沿い、ユーザーの手のひらに平行で、グリップの長さに沿います。 -Z はユーザーの親指の方向であり、+Z は反対方向です。
- y 軸は、他の 2 つの軸間の関係によって示されます。 いつものように、それは他の 2 つの軸の外積です（X 軸と Z 軸の両方から 90° 離れています）。

## 例

この例では、フレームレンダリングコールバックから取得した `gripSpace` を使用して、仮想環境でのコントローラーの位置と向きを表すメッシュをレンダリングします。

```js
for (const source in xrSession.inputSources) {
  if (source.gripSpace) {
    const gripPose = frame.getPose(source.gripSpace, xrRefSpace);

    if (gripPose) {
      myDrawMeshUsingTransform(controllerMesh, gripPose.transform.matrix);
    }
  }
}
```

このループは、`gripSpace` の値を持つ各入力ソースについて、`gripSpace` によって記述される位置と向きを表す {{domxref("XRPose")}} を取得します。 有効なポーズが返された場合、メソッド `myDrawMeshUsingTransform()` を呼び出して、グリップポーズの変換行列を使用して変換されたコントローラーのメッシュを描画します。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
