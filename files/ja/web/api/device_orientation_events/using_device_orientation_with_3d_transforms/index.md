---
title: 端末の方向と 3D 座標変換の使用
slug: Web/API/Device_orientation_events/Using_device_orientation_with_3D_transforms
l10n:
  sourceCommit: 6754a50ec57c8c9758a65a42691878e5fd1f910a
---

{{DefaultAPISidebar("Device Orientation Events")}}
この記事では、 CSS の 3D 変換と組み合わせて端末の方向情報を使用する方法についてのヒントを提供します。

## 方向を使用して要素を回転

[方向に関するデータ](/ja/docs/Web/API/Window/deviceorientation_event) を [3D 座標変換](/ja/docs/Web/CSS/Reference/Properties/transform) に変換する最も簡単な方法は、基本的に `alpha`、`gamma`、`beta` の値を `rotateZ`、`rotateX`、`rotateY` の値として使用することです。

ただし、[端末方向の座標系](/ja/docs/Web/API/Device_orientation_events/Orientation_and_motion_data_explained)は、 [CSS 座標系](/ja/docs/Web/API/CSSOM_view_API/Coordinate_systems)とは異なる形で記述されていることに留意する必要があります。すなわち、前者は[右手](https://ja.wikipedia.org/wiki/右手の法則)で Y 軸が正の値で上向き、後者は Y 軸が正の値で下向きの左手座標系です。さらに、端末方向の角度の回転は常に Z - X' - Y'' の順序で行われるべきですが、これはいくつかの [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms) の順序とは一致しません。このような違いが、現実的な結果をもたらします。

- 角度の回転の順番は重要なので、アルファ、ベータ、ガンマの回転がこの順番で適用されていることを確認してください。
- CSS 座標変換の [`rotate3d()`](/ja/docs/Web/CSS/Reference/Values/transform-function/rotate3d) と [`DOMMatrixReadOnly.rotate()`](/ja/docs/Web/API/DOMMatrixReadOnly/rotate) と [`DOMMatrix. rotateSelf()`](/ja/docs/Web/API/DOMMatrix/rotateSelf) 関数は、Z - Y' - X''の順番で角度の回転を適用するので、アルファ、ベータ、ガンマ回転のいずれかを単一の呼び出しで正しい順番に適用することはできません。その代わりに、各軸を正しい順序で個別に回転させる必要があります。
- 上記の座標系の違いにより、原点を見ていくときの回転は、 CSS では時計回りに、端末方向仕様では反時計回りに適用されます。この意味は、アルファとベータは 2 つの座標系で異なる方向を指しているため、（Z と X を中心とした回転を）反転させる必要があることを意味します。しかし、ガンマ（Y 周りの回転）はそのままにしておく必要があります。

  コードの例は次の通りです。

  ```js
  const elem = document.getElementById("view3d");

  window.addEventListener("deviceorientation", (e) => {
    elem.style.transform = `rotateZ(${-e.alpha}deg) rotateX(${-e.beta}deg) rotateY(${
      e.gamma
    }deg)`;
  });
  ```

## `rotate3d()` の角度を `deviceorientation` の角度に変換

rotate3d の軸角を `deviceorientation` で使用する方向[オイラー角](https://ja.wikipedia.org/wiki/オイラー角)に変換する必要がある場合は、以下のアルゴリズムを使用することができます。

```js
// rotate3d の軸角度を端末方向角度に変換
function orient(aa) {
  const x = aa.x,
    y = aa.y,
    z = aa.z,
    a = aa.a,
    c = Math.cos(aa.a),
    s = Math.sin(aa.a),
    t = 1 - c,
    // 軸角度と回転行列
    rm00 = c + x * x * t,
    rm10 = z * s + y * x * t,
    rm20 = -y * s + z * x * t,
    rm01 = -z * s + x * y * t,
    rm11 = c + y * y * t,
    rm21 = x * s + z * y * t,
    rm02 = y * s + x * z * t,
    rm12 = -x * s + y * z * t,
    rm22 = c + z * z * t,
    TO_DEG = 180 / Math.PI,
    ea = [],
    n = Math.hypot(rm22, rm20);

  // オイラー角への回転行列
  ea[1] = Math.atan2(-rm21, n);

  if (n > 0.001) {
    ea[0] = Math.atan2(rm01, rm11);
    ea[2] = Math.atan2(rm20, rm22);
  } else {
    ea[0] = 0;
    ea[2] = (rm21 > 0 ? 1 : -1) * Math.atan2(-rm10, rm00);
  }

  return {
    alpha: -ea[0] * TO_DEG - 180,
    beta: -ea[1] * TO_DEG,
    gamma: ea[2] * TO_DEG,
  };
}
```

## 関連情報

- [CSS 座標変換の使用](/ja/docs/Web/CSS/Guides/Transforms/Using)
- [端末の方向の検出](/ja/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
