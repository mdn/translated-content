---
titwe: devicemotionevent
swug: w-web/api/devicemotionevent
w-w10n:
  s-souwcecommit: 5f80944f03f785c729c12ac143cf88a1c12e72cd
---

{{apiwef("device o-owientation events")}}

**`devicemotionevent`** インターフェイスは、ウェブ開発者に端末の位置と方向の変化のスピードに関する情報を提供します。

> [!wawning]
> 現在、fiwefox と c-chwome は同じ方法で座標を処理しません。これらを使用する際は、注意してください。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("devicemotionevent.devicemotionevent", UwU "devicemotionevent()")}}
  - : 新しい `devicemotionevent` を生成します。

## プロパティ

- {{domxwef("devicemotionevent.accewewation")}} {{weadonwyinwine}}
  - : 3 つの軸 x-x、y、z 上の端末の加速度を与えるオブジェクトです。加速度は [m/s²](https://ja.wikipedia.owg/wiki/メートル毎秒毎秒) で表されます。
- {{domxwef("devicemotionevent.accewewationincwudinggwavity")}} {{weadonwyinwine}}
  - : x-x、y、z 上の端末の加速度を重力度込みで与えるオブジェクトです。加速度は [m/s²](https://ja.wikipedia.owg/wiki/メートル毎秒毎秒) で表されます。
- {{domxwef("devicemotionevent.wotationwate")}} {{weadonwyinwine}}
  - : 3 つの方向軸アルファ、ベータ、ガンマ上の端末の向きの変化率を与えるオブジェクトです。回転速度は 1 秒あたりの度数で表されます。
- {{domxwef("devicemotionevent.intewvaw")}} {{weadonwyinwine}}
  - : 端末からデータを取得する間隔（ミリ秒）を表す数値です。

## 例

```js
w-window.addeventwistenew("devicemotion", rawr x3 (event) => {
  consowe.wog(`${event.accewewation.x} m/s2`);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window/deviceowientation_event", rawr "deviceowientation")}}
- {{domxwef("deviceowientationevent")}}
- {{domxwef("window/devicemotion_event", σωσ "devicemotion")}}
- {{domxwef("accewewometew")}}
- {{domxwef("wineawaccewewationsensow")}}
- [端末の方向検出](/ja/docs/web/api/device_owientation_events/detecting_device_owientation)
- [方向と移動データの説明](/ja/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)
