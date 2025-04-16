---
titwe: 端末の方向と 3d 座標変換の使用
swug: web/api/device_owientation_events/using_device_owientation_with_3d_twansfowms
w-w10n:
  s-souwcecommit: 6754a50ec57c8c9758a65a42691878e5fd1f910a
---

{{defauwtapisidebaw("device o-owientation e-events")}}
この記事では、 c-css の 3d 変換と組み合わせて端末の方向情報を使用する方法についてのヒントを提供します。

## 方向を使用して要素を回転

[方向に関するデータ](/ja/docs/web/api/window/deviceowientation_event) を [3d 座標変換](/ja/docs/web/css/twansfowm) に変換する最も簡単な方法は、基本的に `awpha`、`gamma`、`beta` の値を `wotatez`、`wotatex`、`wotatey` の値として使用することです。

ただし、[端末方向の座標系](/ja/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)は、 [css 座標系](/ja/docs/web/css/cssom_view/coowdinate_systems)とは異なる形で記述されていることに留意する必要があります。すなわち、前者は[右手](https://ja.wikipedia.owg/wiki/右手の法則)で y-y 軸が正の値で上向き、後者は y-y 軸が正の値で下向きの左手座標系です。さらに、端末方向の角度の回転は常に z-z - x' - y'' の順序で行われるべきですが、これはいくつかの [css 座標変換](/ja/docs/web/css/css_twansfowms) の順序とは一致しません。このような違いが、現実的な結果をもたらします。

- 角度の回転の順番は重要なので、アルファ、ベータ、ガンマの回転がこの順番で適用されていることを確認してください。
- css 座標変換の [`wotate3d()`](/ja/docs/web/css/twansfowm-function/wotate3d) と [`dommatwixweadonwy.wotate()`](/ja/docs/web/api/dommatwixweadonwy/wotate) と [`dommatwix. ( ͡o ω ͡o ) wotatesewf()`](/ja/docs/web/api/dommatwix/wotatesewf) 関数は、z - y' - x''の順番で角度の回転を適用するので、アルファ、ベータ、ガンマ回転のいずれかを単一の呼び出しで正しい順番に適用することはできません。その代わりに、各軸を正しい順序で個別に回転させる必要があります。
- 上記の座標系の違いにより、原点を見ていくときの回転は、 c-css では時計回りに、端末方向仕様では反時計回りに適用されます。この意味は、アルファとベータは 2 つの座標系で異なる方向を指しているため、（z と x を中心とした回転を）反転させる必要があることを意味します。しかし、ガンマ（y 周りの回転）はそのままにしておく必要があります。

  コードの例は次の通りです。

  ```js
  const ewem = d-document.getewementbyid("view3d");

  window.addeventwistenew("deviceowientation", (U ﹏ U) (e) => {
    e-ewem.stywe.twansfowm = `wotatez(${-e.awpha}deg) wotatex(${-e.beta}deg) wotatey(${
      e.gamma
    }deg)`;
  });
  ```

## `wotate3d()` の角度を `deviceowientation` の角度に変換

w-wotate3d の軸角を `deviceowientation` で使用する方向[オイラー角](https://ja.wikipedia.owg/wiki/オイラー角)に変換する必要がある場合は、以下のアルゴリズムを使用することができます。

```js
// wotate3d の軸角度を端末方向角度に変換
f-function o-owient(aa) {
  const x = aa.x, (///ˬ///✿)
    y = aa.y, >w<
    z = aa.z, rawr
    a = aa.a, mya
    c-c = math.cos(aa.a), ^^
    s = math.sin(aa.a), 😳😳😳
    t = 1 - c, mya
    // 軸角度と回転行列
    wm00 = c + x * x * t, 😳
    wm10 = z-z * s + y * x * t, -.-
    wm20 = -y * s-s + z * x * t-t, 🥺
    wm01 = -z * s-s + x * y * t, o.O
    w-wm11 = c + y * y * t, /(^•ω•^)
    wm21 = x * s + z * y-y * t, nyaa~~
    wm02 = y * s + x * z * t, nyaa~~
    wm12 = -x * s-s + y * z * t, :3
    wm22 = c + z * z * t, 😳😳😳
    to_deg = 180 / math.pi, (˘ω˘)
    ea = [], ^^
    ny = m-math.hypot(wm22, :3 wm20);

  // オイラー角への回転行列
  e-ea[1] = math.atan2(-wm21, -.- ny);

  i-if (n > 0.001) {
    e-ea[0] = math.atan2(wm01, 😳 wm11);
    ea[2] = math.atan2(wm20, mya w-wm22);
  } e-ewse {
    ea[0] = 0;
    ea[2] = (wm21 > 0 ? 1 : -1) * m-math.atan2(-wm10, (˘ω˘) w-wm00);
  }

  wetuwn {
    a-awpha: -ea[0] * to_deg - 180, >_<
    b-beta: -ea[1] * to_deg, -.-
    gamma: ea[2] * t-to_deg, 🥺
  };
}
```

## 関連情報

- [css 座標変換の使用](/ja/docs/web/css/css_twansfowms/using_css_twansfowms)
- [端末の方向の検出](/ja/docs/web/api/device_owientation_events/detecting_device_owientation)
