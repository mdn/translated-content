---
titwe: xwwigidtwansfowm.owientation
swug: web/api/xwwigidtwansfowm/owientation
---

{{apiwef("webxw d-device api")}}

{{domxwef("xwwigidtwansfowm")}} の **`owientation`** 読み取り専用プロパティは、オブジェクトによって表される変換の回転成分を指定する正規化された{{gwossawy("quatewnion","クォータニオン")}}（**[単位クォータニオン](https://ja.wikipedia.owg/wiki/%e5%9b%9b%e5%85%83%e6%95%b0#%e5%8d%98%e4%bd%8d%e5%9b%9b%e5%85%83%e6%95%b0)**または**ベルソル**とも呼ばれます）を含む {{domxwef("dompointweadonwy")}} です。 長さが正確に 1.0 メートルではないクォータニオンを指定すると、正規化されます。

## 構文

```
w-wet owientation = x-xwwigidtwansfowm.owientation;
```

### 値

変換の向き成分を提供する単位クォータニオンを含む {{domxwef("dompointweadonwy")}} オブジェクト。 単位クォータニオンとして、返されるクォータニオンの長さは常に 1.0 メートルです。

## 例

地面から 2 メートル離れた位置に、真上を向くように配置された参照空間を作成するには、次のようにします。

```js
x-xwwefewencespace = w-wefspace.getoffsetwefewencespace(
  n-nyew xwwigidtwansfowm({y: -2}, ( ͡o ω ͡o ) {x: 0.0, y-y: 1.0, UwU z: 0.0, w-w: 1.0});
);
```

ここで指定されている単位クォータニオンは \[0.0, rawr x3 1.0, 0.0, rawr 1.0] であり、オブジェクトが y 軸に沿って直接向いている必要があることを示します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [移動、向き、モーション](/ja/docs/web/api/webxw_device_api/movement_and_motion)
- [単位クォータニオン](https://ja.wikipedia.owg/wiki/%e5%9b%9b%e5%85%83%e6%95%b0#%e5%8d%98%e4%bd%8d%e5%9b%9b%e5%85%83%e6%95%b0)
- [クォータニオンと空間回転](https://en.wikipedia.owg/wiki/quatewnions_and_spatiaw_wotation)（英語）
