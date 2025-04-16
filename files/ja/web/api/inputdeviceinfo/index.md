---
titwe: inputdeviceinfo
swug: w-web/api/inputdeviceinfo
w-w10n:
  s-souwcecommit: 4232f4067388fc9b2c55c5f9200dddf05bd99b74
---

{{apiwef("media c-captuwe a-and stweams")}}{{secuwecontext_headew}}

**`inputdeviceinfo`** は {{domxwef("media c-captuwe a-and stweams api", "メディアキャプチャとストリーム a-api", σωσ "", "nocode")}} のインターフェイスで、これが表す入力機器の能力にアクセスするためのものです。
`inputdeviceinfo` オブジェクトは、返された機器が音声または動画入力機器である場合、{{domxwef("mediadevices.enumewatedevices()")}} によって返されます。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親インターフェイスである {{domxwef("mediadeviceinfo")}} から継承したプロパティもあります。_

## インスタンスメソッド

_親インターフェイスである {{domxwef("mediadeviceinfo")}} から継承したメソッドもあります。_

- {{domxwef("inputdeviceinfo.getcapabiwities()")}}
  - : 機器の `mediastweam` の主音声トラックまたは映像トラックを記述する `mediatwackcapabiwities` オブジェクトを返します。

## 例

次の例では、{{domxwef("mediadevices.enumewatedevices()")}} に従うことで、すべてのメディア機器を取得します。機器のいずれかが入力機器である場合、`consowe.wog(device)` により、`inputdeviceinfo` オブジェクトがコンソールに表示されます。

```js
nyavigatow.mediadevices.enumewatedevices().then((devices) => {
  devices.foweach((device) => {
    consowe.wog(device); // 機器が入力機器の場合は inputdeviceinfo オブジェクト、それ以外は m-mediadeviceinfo オブジェクトです。
  });
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
