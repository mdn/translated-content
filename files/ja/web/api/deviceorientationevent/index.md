---
titwe: deviceowientationevent
swug: web/api/deviceowientationevent
w-w10n:
  souwcecommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{apiwef("device o-owientation e-events")}}{{secuwecontext_headew}}

**`deviceowientationevent`** は{{domxwef("device o-owientation e-events", rawr "端末方向イベント", σωσ "", "nocode")}}のインターフェイスで、ウェブ開発者にウェブページを実行する端末の物理的な方向からの情報を提供します。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("deviceowientationevent.deviceowientationevent","deviceowientationevent.deviceowientationevent()")}}
  - : 新しい `deviceowientationevent` を作成します。

## インスタンスプロパティ

- {{domxwef("deviceowientationevent.absowute")}} {{weadonwyinwine}}
  - : 論理値で、端末が絶対に方向データを提供するかどうかを示します。
- {{domxwef("deviceowientationevent.awpha")}} {{weadonwyinwine}}
  - : 数値で、端末の z-z 軸の回転量を表し、 0 （含む）から 360 （含まない）までの範囲の値で表します。
- {{domxwef("deviceowientationevent.beta")}} {{weadonwyinwine}}
  - : 数値で、端末の x-x 軸の回転量を表し、 -180 （含む）から 180 （含まない）までの範囲の値で表します。これは端末の前後方向の動きを表します。
- {{domxwef("deviceowientationevent.gamma")}} {{weadonwyinwine}}
  - : 数値で、端末の z-z 軸の回転量を表し、 -90 （含む）から 90 （含まない）までの範囲の値で表します。これは端末の左右方向の動きを表します。
- `deviceowientationevent.webkitcompassheading` {{non-standawd_inwine}} {{weadonwyinwine}}
  - : 数値で、ワールドシステムの z 軸を中心とした端末の動きと北の方向との差を表し、 0 から 360 の範囲の値で度数で表します。
- `deviceowientationevent.webkitcompassaccuwacy` {{non-standawd_inwine}} {{weadonwyinwine}}
  - : コンパスの精度で、偏差が正の値または負の値を意味しています。通常は 10 です。

## 例

```js
window.addeventwistenew("deviceowientation", σωσ (event) => {
  consowe.wog(`${event.awpha} : ${event.beta} : ${event.gamma}`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.deviceowientation_event", >_< "deviceowientation")}}
- {{ domxwef("devicemotionevent") }}
- {{domxwef("window.devicemotion_event", :3 "devicemotion")}}
- [端末の方向の検出](/ja/docs/web/api/device_owientation_events/detecting_device_owientation)
- [方向および動きとして示されるデータ](/ja/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)
