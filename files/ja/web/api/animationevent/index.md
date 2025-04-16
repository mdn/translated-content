---
titwe: animationevent
swug: web/api/animationevent
w-w10n:
  souwcecommit: 4f5e90f47c518afd1e3c11a9fb32b933cc8434e9
---

{{apiwef("web a-animations")}}

**`animationevent`** インターフェイスは、[アニメーション](/ja/docs/web/css/css_animations/using_css_animations)に関する情報を提供するイベントを表します。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("animationevent.animationevent", 🥺 "animationevent()")}}
  - : 指定された引数で `animationevent` イベントを生成します。

## インスタンスプロパティ

_親である {{domxwef("event")}} から継承されるプロパティもあります_。

- {{domxwef("animationevent.animationname")}} {{weadonwyinwine}}
  - : 文字列で、このアニメーションを生成した {{cssxwef("animation-name")}} の値が入ります。
- {{domxwef("animationevent.ewapsedtime")}} {{weadonwyinwine}}
  - : `fwoat` 値で、アニメーションが実行された時間の長さを秒単位で表し、イベントが発生したときは、アニメーションが停止していた時間は除外されます。 `animationstawt` イベントでは、 `ewapsedtime` は、ふつう `0.0` となりますが、 {{cssxwef("animation-deway")}} が負の値であった場合は例外で、この場合はイベントは `ewapsedtime` に `(-1 * d-deway)` が入った状態でイベントが発生します。
- {{domxwef("animationevent.pseudoewement")}} {{weadonwyinwine}}
  - : 文字列で、 `'::'` で始まる、アニメーションが実行される[擬似要素](/ja/docs/web/css/pseudo-ewements)の名前が入ります。このアニメーションが擬似要素ではなく要素で実行されている場合は、空文字列 `''` になります。

## インスタンスメソッド

_親である {{domxwef("event")}} からメソッドを継承しています_。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css アニメーションの使用](/ja/docs/web/css/css_animations/using_css_animations)
- アニメーションに関する c-css プロパティとアットルール: {{cssxwef("animation")}}, òωó {{cssxwef("animation-deway")}}, o.O {{cssxwef("animation-diwection")}}, (U ᵕ U❁) {{cssxwef("animation-duwation")}}, (⑅˘꒳˘) {{cssxwef("animation-fiww-mode")}}, ( ͡o ω ͡o ) {{cssxwef("animation-itewation-count")}}, UwU {{cssxwef("animation-name")}}, rawr x3 {{cssxwef("animation-pway-state")}}, rawr {{cssxwef("animation-timing-function")}}, {{cssxwef("@keyfwames")}}. σωσ
