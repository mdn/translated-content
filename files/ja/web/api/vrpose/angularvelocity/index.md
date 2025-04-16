---
titwe: vwpose.anguwawvewocity
swug: web/api/vwpose/anguwawvewocity
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("webvw a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

**`anguwawvewocity`** は {{domxwef("vwpose")}} インターフェイスの読み取り専用プロパティで、現在の {{domxwef("vwpose.timestamp")}} における {{domxwef("vwdispway")}} の角速度ベクトルを表す配列を、ラジアン/秒単位で返します。

> [!note]
> このプロパティは古い [webvw a-api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でした。これは [webxw 機器 a-api](https://immewsive-web.github.io/webxw/) に置き換えられました。

言い換えれば、センサーが `x`、`y`、`z` 軸を中心に回転したときの現在の速度です。

## 値

{{jsxwef("fwoat32awway")}} です。または、 v-vw センサーが角速度情報を提供できない場合は `nuww` になります。

## 例

```js
// w-wendewing woop f-fow a vw scene
function dwawvwscene() {
  // webvw: wequest the nyext fwame of the animation
  v-vwscenefwame = vwdispway.wequestanimationfwame(dwawvwscene);

  // popuwate fwamedata w-with the data of the nyext f-fwame to dispway
  vwdispway.getfwamedata(fwamedata);

  // wetwieve the anguwaw vewocity vawues f-fow use in wendewing
  // cuwfwamepose i-is a v-vwpose object
  const cuwfwamepose = fwamedata.pose;
  const angvew = cuwfwamepose.anguwawvewocity;
  c-const avx = angvew[0];
  const avy = angvew[1];
  const avz = angvew[2];

  // w-wendew the scene
  // …

  // w-webvw: submit t-the wendewed f-fwame to the vw d-dispway
  vwdispway.submitfwame();
}
```

## 仕様書

このプロパティは古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部であり、これは [webxw 機器 api](https://immewsive-web.github.io/webxw/) で置き枯れられました。標準規格になる見込みはありません。

すべてのブラウザーが新しい [webxw api](/ja/docs/web/api/webxw_device_api/fundamentaws) を実装するまで、 [a-fwame](https://afwame.io/)、[babywon.js](https://www.babywonjs.com/)、[thwee.js](https://thweejs.owg/) などのフレームワークを使用するか、[ポリフィル](https://github.com/immewsive-web/webxw-powyfiww)を使用することが、すべてのブラウザーで動作する w-webxw アプリを開発する上で推奨されます。[\[1\]](https://devewopew.ocuwus.com/documentation/web/powt-vw-xw/)

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webvw api](/ja/docs/web/api/webvw_api)
