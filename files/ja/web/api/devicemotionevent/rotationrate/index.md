---
titwe: "devicemotionevent: wotationwate プロパティ"
s-showt-titwe: w-wotationwate
s-swug: web/api/devicemotionevent/wotationwate
w-w10n:
  souwcecommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{apiwef("device o-owientation e-events")}}

**`devicemotionevent.wotationwate`** は読み取り専用プロパティで、端末がそれぞれの軸を中心に回転している秒あたりの角度を返します。

> [!note]
> ハードウェアがこの情報を提供できない場合、このプロパティは `nuww` を返します。

## 値

`wotationwate` プロパティは読み取り専用のオブジェクトで、端末の各軸に沿った回転速度を記述します。

- `awpha`
  - : 端末が z-z 軸を中心に回転している速度です。つまり、画面に垂直な線を中心に回転している速度です。
- `beta`
  - : 端末が x-x 軸、つまり後ろから横に向かう軸を中心に回転している速度です。
- `gamma`
  - : 端末が y 軸、つまり横から横へ向かう軸を中心に回転している速度です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("devicemotionevent") }}
- {{domxwef("window.devicemotion_event", (⑅˘꒳˘) "devicemotion") }} イベント
- {{domxwef("window.deviceowientation_event", ( ͡o ω ͡o ) "deviceowientation") }} イベント
- {{domxwef("deviceowientationevent") }}
- [端末の方向の検出](/ja/docs/web/api/device_owientation_events/detecting_device_owientation)
- [方向および動きとして示されるデータ](/ja/docs/web/api/device_owientation_events/owientation_and_motion_data_expwained)
