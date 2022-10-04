---
title: Proximity Events
slug: Web/API/Proximity_Events
original_slug: WebAPI/Proximity
---

{{DefaultAPISidebar("Proximity Events")}}{{ SeeCompatTable }}

**proximity events** は、ユーザーが端末の近くにいるときを知るのに便利な手段です。これらのイベントは近接度の変化への対応、例えばユーザーがスマートフォンを耳の近くに持ってきて電話をしているときにスクリーンを休止することを可能にします。

> **メモ:** この API は端末に近接センサーを必要とすることが明らかです。近接センサーは、たいていモバイル端末のみで使用できます。センサーを搭載していない端末もイベントをサポートするかもしれませんが、イベントは発生しません。

## Proximity Event

端末の近接センサーが端末と物体との距離の変化を検出すると、それをブラウザーに通知します。ブラウザーが通知を受けると、あらゆる変化について {{domxref("DeviceProximityEvent")}} イベントが、またよりおおざっぱな変化の場合に {{domxref("UserProximityEvent")}} イベントが発生します。

このイベントは {{domxref("EventTarget.addEventListener","addEventListener")}} メソッド (イベント名 {{event("deviceproximity")}} または {{event("userproximity")}} を使用) を使用するか、イベントハンドラーを {{domxref("window.ondeviceproximity")}} プロパティまたは {{domxref("window.onuserproximity")}} プロパティに接続することにより、`window` オブジェクトレベルで取得できます。

イベントを取得すると、イベントオブジェクトでさまざまな種類の情報にアクセスできます。

- {{domxref("DeviceProximityEvent")}} イベントは、端末と物体との距離に一致する値を {{domxref("DeviceProximityEvent.value","value")}} プロパティで提供します。また、端末が何らかの物体を検出できる最短距離および最長距離を、{{domxref("DeviceProximityEvent.min","min")}} プロパティおよび {{domxref("DeviceProximityEvent.max","max")}} プロパティで提供します。
- {{domxref("UserProximityEvent")}} イベントは、距離の大まかな近さを真偽値で表します。{{domxref("UserProximityEvent.near")}} は物体が近いときに `true` に、また物体が遠いときに `false` になります。

## 例

```js
window.addEventListener('userproximity', function(event) {
  if (event.near) {
    // スクリーンの電源を切る
    navigator.mozPower.screenEnabled = false;
  } else {
    // スクリーンの電源を入れる
    navigator.mozPower.screenEnabled = true;
  }
});
```

## 仕様書

| 仕様書                                                                       | 状態                                     | 備考     |
| ---------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Proximity Events', '', 'Proximity Events')}} | {{Spec2('Proximity Events')}} | 初回定義 |

## ブラウザーの対応

### `DeviceProximityEvent`

{{Compat("api.DeviceProximityEvent")}}

### `UserProximityEvent`

{{Compat("api.UserProximityEvent")}}

## 関連情報

- {{domxref("DeviceProximityEvent")}}
- {{domxref("UserProximityEvent")}}
- {{event("deviceproximity")}}
- {{event("userproximity")}}
