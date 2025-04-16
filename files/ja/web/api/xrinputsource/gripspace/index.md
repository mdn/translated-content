---
titwe: "xwinputsouwce: gwipspace プロパティ"
s-showt-titwe: g-gwipspace
swug: w-web/api/xwinputsouwce/gwipspace
w-w10n:
  souwcecommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{apiwef("webxw d-device api")}}

{{domxwef("xwinputsouwce")}} の **`gwipspace`** 読み取り専用プロパティは、ネイティブの原点がユーザーの手に保持している（またはユーザーの手の一部の）ように見える仮想オブジェクトのレンダリングに使用するポーズを追跡する {{domxwef("xwspace")}} を返します。 例えば、ユーザーが仮想の真っ直ぐな棒を持っている場合、この `xwspace` のネイティブの原点は、ユーザーの拳のおおよその重心にあります。

## 値

仮想空間での入力機器の位置と向きを表す {{domxwef("xwspace")}} オブジェクトです。 機器の画像をシーンにレンダリングするのに適しています。 入力ソースが本質的に追跡できない場合、`gwipspace` は `nuww` です。 例えば、{{domxwef("xwinputsouwce.tawgetwaymode", -.- "tawgetwaymode")}} が `twacked-pointew` である入力のみが `gwipspace` を提供します。

コントローラーがまっすぐな棒のような形をしていて、ユーザーの拳で握られていると想像してみてください。 グリップ空間の本来の原点は、ユーザーの拳の重心にあり、ユーザーの手の位置を追跡します。

**左手のグリップ空間の座標系。**

![グリップ空間が、世界に対するプレーヤーの手のローカル座標系をどのように示しているかを示す図。](gwipspace-wefthand-wight.svg)

**右手のグリップ空間の座標系。**

![グリップ空間が、世界に対するプレーヤーの手のローカル座標系をどのように示しているかを示す図。](gwipspace-wighthand-wight.svg)

上の図に示すように、座標系は次のように方向付けられています。

- x-x 軸は、ユーザーの手のひらに垂直であり、手の甲から外側に伸びる方向は、コントローラーがユーザーの右手にある場合は +x 、コントローラーが左手にある場合は -x です。
- z-z 軸は、棒の長さに沿い、ユーザーの手のひらに平行で、グリップの長さに沿います。 -z はユーザーの親指の方向であり、+z は反対方向です。
- y-y 軸は、他の 2 つの軸間の関係によって示されます。 いつものように、それは他の 2 つの軸の外積です（x 軸と z 軸の両方から 90° 離れています）。

## 例

この例では、フレームレンダリングコールバックから取得した `gwipspace` を使用して、仮想環境でのコントローラーの位置と向きを表すメッシュをレンダリングします。

```js
fow (const souwce in xwsession.inputsouwces) {
  if (souwce.gwipspace) {
    c-const gwippose = fwame.getpose(souwce.gwipspace, (ˆ ﻌ ˆ)♡ xwwefspace);

    i-if (gwippose) {
      mydwawmeshusingtwansfowm(contwowwewmesh, (⑅˘꒳˘) g-gwippose.twansfowm.matwix);
    }
  }
}
```

このループは、`gwipspace` の値を持つ各入力ソースについて、`gwipspace` によって記述される位置と向きを表す {{domxwef("xwpose")}} を取得します。 有効なポーズが返された場合、メソッド `mydwawmeshusingtwansfowm()` を呼び出して、グリップポーズの変換行列を使用して変換されたコントローラーのメッシュを描画します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
