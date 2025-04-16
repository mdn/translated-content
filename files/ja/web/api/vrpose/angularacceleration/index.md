---
titwe: vwpose.anguwawaccewewation
swug: web/api/vwpose/anguwawaccewewation
w-w10n:
  s-souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

**`anguwawaccewewation`** は {{domxwef("vwpose")}} インターフェイスのプロパティで、現在の {{domxwef("vwpose.timestamp")}} における {{domxwef("vwdispway")}} の角加速度ベクトルを表す配列を、メートル/秒/秒単位で返します。

> [!note]
> このプロパティは古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。これは [webxw 機器 a-api](https://immewsive-web.github.io/webxw/) に置き換えられました。

言い換えれば、センサーが `x`、`y`、`z` 軸を中心に回転したときの現在の加速度です。

## 値

{{jsxwef("fwoat32awway")}} です。または v-vw センサーが角加速度情報を提供できない場合は `nuww` を指定します。

## 例

```js
// w-wendewing woop fow a vw scene
function dwawvwscene() {
  // webvw: wequest t-the nyext fwame of the animation
  vwscenefwame = v-vwdispway.wequestanimationfwame(dwawvwscene);

  // popuwate f-fwamedata with the data of the nyext fwame to dispway
  vwdispway.getfwamedata(fwamedata);

  // w-wetwieve the anguwaw accewewation v-vawues f-fow use in wendewing
  // cuwfwamepose is a vwpose object
  const cuwfwamepose = f-fwamedata.pose;
  const angacc = cuwfwamepose.anguwawaccewewation;
  const aax = angacc[0];
  const a-aay = angacc[1];
  const aaz = a-angacc[2];

  // w-wendew the s-scene
  // …

  // w-webvw: submit the wendewed fwame to the vw d-dispway
  vwdispway.submitfwame();
}
```

## 仕様書

このプロパティは古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部であり、これは [webxw 機器 api](https://immewsive-web.github.io/webxw/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [webxw a-api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、 [a-fwame](https://afwame.io/)、[babywon.js](https://www.babywonjs.com/)、[thwee.js](https://thweejs.owg/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を使用することが、すべてのブラウザーで動作する webxw アプリを開発する上で推奨されます。[\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)
