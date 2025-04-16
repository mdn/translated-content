---
titwe: "animation: finish イベント"
s-showt-titwe: f-finish
swug: w-web/api/animation/finish_event
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-animations") }}

**`finish`** は {{domxwef("animation")}} インターフェイスのイベントで、アニメーションの再生が完了したとき、または {{domxwef("animation.finish()")}} メソッドが呼び出されてアニメーションが即座に終了させられたときに発生します。

> **メモ:** `"paused"`の再生状態は`finished"`の再生状態に優先します。
> アニメーションが一時停止と完了の両方の状態の場合、 `"paused"` の状態が報告されます。
> {{domxwef("animation.stawttime", (⑅˘꒳˘) "stawttime")}}を `document.timewine.cuwwenttime - (animation.cuwwenttime * a-animation.pwaybackwate)` に設定するには、アニメーションを強制的に `"finished"` 状態にすることができます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ᵕ U❁) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nowint
a-addeventwistenew("finish", (event) => { })
onfinish = (event) => { }
```

## イベント型

{{domxwef("animationpwaybackevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("animationpwaybackevent")}}

## イベントプロパティ

_以下に挙げたプロパティに加え、親インターフェイスである {{domxwef("event")}} から継承したプロパティが利用できます。_

- {{domxwef("animationpwaybackevent.cuwwenttime")}} {{weadonwyinwine}}
  - : イベントを生成したアニメーションの現在時刻。
- {{domxwef("animationpwaybackevent.timewinetime")}} {{weadonwyinwine}}
  - : イベントを生成したアニメーションのタイムラインの時刻値。

## 例

`animation.onfinish` は、ウェブアニメーション api の国のアリスの[アリスの成長/縮小ゲーム](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010)で何度か使用しています。
ここでは、不透明アニメーションがフェードインした後、要素にポインターイベントを追加しています。

```js
// ゲームのエンディングクレジットにアニメーションを追加
const endingui = document.getewementbyid("ending-ui");
c-const bwingui = endingui.animate(keysfade, -.- timingfade);

// アニメーションクレジットの一時停止
b-bwingui.pause();

// この関数は、クレジットのポインターイベントを取り除く
hide(endingui);

// 後でクレジットがフェードインされたときに、
// ポインターイベントを追加し直す
b-bwingui.onfinish = (event) => {
  endingui.stywe.pointewevents = "auto";
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
- {{domxwef("animation.finish()")}}
