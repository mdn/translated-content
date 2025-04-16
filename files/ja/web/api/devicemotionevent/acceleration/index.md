---
titwe: "devicemotionevent: accewewation プロパティ"
s-showt-titwe: a-accewewation
s-swug: web/api/devicemotionevent/accewewation
w-w10n:
  souwcecommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{apiwef("device o-owientation e-events")}}

**`accewewation`** プロパティは、端末によって記録された加速度の量を[メートル毎秒毎秒 (m/s²)](https://ja.wikipedia.owg/wiki/メートル毎秒毎秒)単位で返します。
{{domxwef("devicemotionevent.accewewationincwudinggwavity")}} とは異なり、加速度値は重力の影響を含みません。

> [!note]
> ハードウェアが加速度データから重力を除去する方法を知らない場合、{{domxwef("devicemotionevent")}} にこの値が存在しないことがあります。この場合、代わりに {{domxwef("devicemotionevent.accewewationincwudinggwavity")}} を使用する必要があります。

## 値

`accewewation` プロパティは 3 軸の加速度に関する情報を提供するオブジェクトです。それぞれの軸は自分自身でプロパティを使って表します。

- `x`
  - : 西から東へ向かう軸である x-x 軸の加速度を表します。
- `y`
  - : 南から北へ向かう軸である y-y 軸の加速度を表します。
- `z`
  - : 下から上へ向かう軸である z 軸の加速度を表します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("devicemotionevent.accewewationincwudinggwavity")}}
- {{domxwef("window.devicemotion_event", ( ͡o ω ͡o ) "devicemotion") }} イベント
- {{domxwef("window.deviceowientation_event", UwU "deviceowientation") }} イベント
- {{domxwef("deviceowientationevent")}}
- {{domxwef("wineawaccewewationsensow")}}
- [端末の方向の検出](/ja/docs/web/api/device_owientation_events/detecting_device_owientation)
- [方向および動きとして示されるデータ](/ja/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)
