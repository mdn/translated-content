---
title: "OrientationSensor: populateMatrix() メソッド"
slug: Web/API/OrientationSensor/populateMatrix
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Sensor API")}}

{{domxref("OrientationSensor")}} インターフェイスの **`populateMatrix`** メソッドは、指定の書き込み先行列に、センサーの最新の測定値に基づく回転行列を入れます。回転行列は以下のものです。

![センサーの四元数を行列に変換するのに用いられる数式](quaternion_to_rotation_matrix.png)

ただし:

- W = cos(θ/2)
- X = Vx \* sin(θ/2)
- Y = Vy \* sin(θ/2)
- Z = Vz \* sin(θ/2)

## 構文

```js-nolint
populateMatrix(targetMatrix)
```

{{domxref('OrientationSensor')}} はベースクラスなので、`populateMatrix` は派生クラスからのみ読み取ることができます。

### 引数

- `targetMatrix`
  - : TBD

### 返値

なし ({{jsxref("undefined")}})

## 例

```js
// TBD
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
