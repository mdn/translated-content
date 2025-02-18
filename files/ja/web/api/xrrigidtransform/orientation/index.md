---
title: XRRigidTransform.orientation
slug: Web/API/XRRigidTransform/orientation
---

{{APIRef("WebXR Device API")}}

{{domxref("XRRigidTransform")}} の **`orientation`** 読み取り専用プロパティは、オブジェクトによって表される変換の回転成分を指定する正規化された{{Glossary("quaternion","クォータニオン")}}（**[単位クォータニオン](https://ja.wikipedia.org/wiki/%E5%9B%9B%E5%85%83%E6%95%B0#%E5%8D%98%E4%BD%8D%E5%9B%9B%E5%85%83%E6%95%B0)**または**ベルソル**とも呼ばれます）を含む {{DOMxRef("DOMPointReadOnly")}} です。 長さが正確に 1.0 メートルではないクォータニオンを指定すると、正規化されます。

## 構文

```
let orientation = xrRigidTransform.orientation;
```

### 値

変換の向き成分を提供する単位クォータニオンを含む {{domxref("DOMPointReadOnly")}} オブジェクト。 単位クォータニオンとして、返されるクォータニオンの長さは常に 1.0 メートルです。

## 例

地面から 2 メートル離れた位置に、真上を向くように配置された参照空間を作成するには、次のようにします。

```js
xrReferenceSpace = refSpace.getOffsetReferenceSpace(
  new XRRigidTransform({y: -2}, {x: 0.0, y: 1.0, z: 0.0, w: 1.0});
);
```

ここで指定されている単位クォータニオンは \[0.0, 1.0, 0.0, 1.0] であり、オブジェクトが y 軸に沿って直接向いている必要があることを示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [移動、向き、モーション](/ja/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [単位クォータニオン](https://ja.wikipedia.org/wiki/%E5%9B%9B%E5%85%83%E6%95%B0#%E5%8D%98%E4%BD%8D%E5%9B%9B%E5%85%83%E6%95%B0)
- [クォータニオンと空間回転](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation)（英語）
