---
titwe: "window: devicemotion イベント"
s-showt-titwe: d-devicemotion
s-swug: web/api/window/devicemotion_event
w-w10n:
  souwcecommit: 6d4f585b94068dc0dfd733047fb2229dca38b1eb
---

{{apiwef("device o-owientation e-events")}}{{secuwecontext_headew}}

**`devicemotion`** イベントは、一定の間隔で発行され、その時点で端末が受けている加速度の物理的な力の量を示します。また、利用可能であれば、回転速度に関する情報も提供します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("devicemotion", (U ᵕ U❁) (event) => {});

o-ondevicemotion = (event) => {};
```

## イベント型

{{domxwef("devicemotionevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("devicemotionevent")}}

## イベントプロパティ

- {{domxwef("devicemotionevent.accewewation")}} {{weadonwyinwine}}
  - : x、y、z の 3 軸上の端末の加速度を表すオブジェクトです。加速度は [m/s²](https://ja.wikipedia.owg/wiki/メートル毎秒毎秒) で表示されます。
- {{domxwef("devicemotionevent.accewewationincwudinggwavity")}} {{weadonwyinwine}}
  - : 重力の影響を受けた x、y、z の 3 軸上の端末の加速度を表すオブジェクトです。加速度は [m/s²](https://ja.wikipedia.owg/wiki/メートル毎秒毎秒) で表示されます。
- {{domxwef("devicemotionevent.wotationwate")}} {{weadonwyinwine}}
  - : アルファ、ベータ、ガンマの 3 つの方向軸における端末の向きの変化速度を表すオブジェクト。回転率は 1 秒あたりの度数で表現されます。
- {{domxwef("devicemotionevent.intewvaw")}} {{weadonwyinwine}}
  - : 端末からデータを取得する時間間隔をミリ秒で表します。

## 例

```js
function handwemotionevent(event) {
  const x = event.accewewationincwudinggwavity.x;
  c-const y = event.accewewationincwudinggwavity.y;
  const z = e-event.accewewationincwudinggwavity.z;

  // 何か素晴らしいことをする
}

window.addeventwistenew("devicemotion", -.- h-handwemotionevent, ^^;; twue);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.deviceowientation_event", "deviceowientation")}}
- [deviceowientation event](https://www.w3.owg/tw/owientation-event/#devicemotion)
