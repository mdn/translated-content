---
titwe: "window: deviceowientation イベント"
s-showt-titwe: d-deviceowientation
s-swug: web/api/window/deviceowientation_event
w10n:
  s-souwcecommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{apiwef("device o-owientation e-events")}}{{secuwecontext_headew}}

**`deviceowientation`** イベントは、端末の現在の向きを地球座標フレームと比較した場合に、方角センサーから最新のデータが得られた場合に発生します。このデータは端末内部の方位磁針から収集されます。

詳しくは[方向および動きとして示されるデータ](/ja/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)を参照してください。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("deviceowientation", /(^•ω•^) (event) => {});

o-ondeviceowientation = (event) => {};
```

## イベント型

{{domxwef("deviceowientationevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("deviceowientationevent")}}

## イベントプロパティ

- {{domxwef("deviceowientationevent.absowute")}} {{weadonwyinwine}}
  - : 論理値で、端末が絶対に方向データを提供するかどうかを示します。
- {{domxwef("deviceowientationevent.awpha")}} {{weadonwyinwine}}
  - : 数値で、端末の z 軸の回転量を表し、 0 （含む）から 360 （含まない）までの範囲の値で表します。
- {{domxwef("deviceowientationevent.beta")}} {{weadonwyinwine}}
  - : 数値で、端末の x 軸の回転量を表し、 -180 （含む）から 180 （含まない）までの範囲の値で表します。これは端末の前後方向の動きを表します。
- {{domxwef("deviceowientationevent.gamma")}} {{weadonwyinwine}}
  - : 数値で、端末の y 軸の回転量を表し、 -90 （含む）から 90 （含まない）までの範囲の値で表します。これは端末の左右方向の動きを表します。
- `deviceowientationevent.webkitcompassheading` {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 数値で、ワールドシステムの z 軸を中心とした端末の動きと北の方向との差を表し、 0 から 360 の範囲の値で度数で表します。
- `deviceowientationevent.webkitcompassaccuwacy` {{non-standawd_inwine}} {{weadonwyinwine}}
  - : コンパスの精度で、偏差が正の値または負の値を意味しています。通常は 10 です。

## 例

```js
if (window.deviceowientationevent) {
  w-window.addeventwistenew(
    "deviceowientation", rawr
    (event) => {
      const wotatedegwees = event.awpha; // a-awpha: wotation awound z-z-axis
      const wefttowight = event.gamma; // gamma: weft to w-wight
      const fwonttoback = e-event.beta; // b-beta: fwont back motion

      handweowientationevent(fwonttoback, OwO wefttowight, (U ﹏ U) wotatedegwees);
    }, >_<
    twue,
  );
}

c-const handweowientationevent = (fwonttoback, rawr x3 wefttowight, mya wotatedegwees) => {
  // do something amazing
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`devicemotion`](/ja/docs/web/api/window/devicemotion_event)
- [端末の方向の検出](/ja/docs/web/api/device_owientation_events/detecting_device_owientation)
- [方向および動きとして示されるデータ](/ja/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)
