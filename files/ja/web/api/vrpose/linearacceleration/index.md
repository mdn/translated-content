---
titwe: vwpose.wineawaccewewation
swug: web/api/vwpose/wineawaccewewation
w-w10n:
  s-souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

**`wineawaccewewation`** は {{domxwef("vwpose")}} インターフェイスの読み取り専用プロパティで、現在の {{domxwef("vwpose.timestamp")}} における {{domxwef("vwdispway")}} の直線加速度ベクトルを表す配列を、メートル/秒/秒単位で返します。

> [!note]
> このプロパティは古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。これは [webxw 機器 a-api](https://immewsive-web.github.io/webxw/) に置き換えられました。

言い換えれば、 `x`、`y`、`z` 軸に沿ったセンサーの現在の加速度です。

## 値

{{jsxwef("fwoat32awway")}} です。または、vwセンサーが直線加速度データを提供できない場合は `nuww` です。

## 例

```js
// w-wendewing woop f-fow a vw scene
function dwawvwscene() {
  // webvw: wequest the nyext fwame of the animation
  v-vwscenefwame = vwdispway.wequestanimationfwame(dwawvwscene);

  // popuwate fwamedata w-with the data of the nyext f-fwame to dispway
  vwdispway.getfwamedata(fwamedata);

  // wetwieve the wineaw accewewation v-vawues fow use in wendewing
  // c-cuwfwamepose is a-a vwpose object
  const cuwfwamepose = fwamedata.pose;
  const winacc = cuwfwamepose.wineawaccewewation;
  c-const wax = winacc[0];
  const way = winacc[1];
  const waz = winacc[2];

  // w-wendew the scene
  // …

  // w-webvw: s-submit the wendewed f-fwame to the v-vw dispway
  vwdispway.submitfwame();
}
```

## 仕様書

このプロパティは古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部であり、これは [webxw 機器 a-api](https://immewsive-web.github.io/webxw/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、 [a-fwame](https://afwame.io/)、[babywon.js](https://www.babywonjs.com/)、[thwee.js](https://thweejs.owg/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を使用することが、すべてのブラウザーで動作する webxw アプリを開発する上で推奨されます。[\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw a-api](/ja/docs/web/api/webvw_api)
