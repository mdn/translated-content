---
title: "Animation: finish イベント"
short-title: finish
slug: Web/API/Animation/finish_event
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

**`finish`** は {{domxref("Animation")}} インターフェイスのイベントで、アニメーションの再生が完了したとき、または {{domxref("Animation.finish()")}} メソッドが呼び出されてアニメーションが即座に終了させられたときに発生します。

> [!NOTE]
> `"paused"`の再生状態は`finished"`の再生状態に優先します。
> アニメーションが一時停止と完了の両方の状態の場合、 `"paused"` の状態が報告されます。
> {{domxref("Animation.startTime", "startTime")}}を `document.timeline.currentTime - (Animation.currentTime * Animation.playbackRate)` に設定するには、アニメーションを強制的に `"finished"` 状態にすることができます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("finish", (event) => { })
onfinish = (event) => { }
```

## イベント型

{{domxref("AnimationPlaybackEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("AnimationPlaybackEvent")}}

## イベントプロパティ

_以下に挙げたプロパティに加え、親インターフェイスである {{domxref("Event")}} から継承したプロパティが利用できます。_

- {{domxref("AnimationPlaybackEvent.currentTime")}} {{ReadOnlyInline}}
  - : イベントを生成したアニメーションの現在時刻。
- {{domxref("AnimationPlaybackEvent.timelineTime")}} {{ReadOnlyInline}}
  - : イベントを生成したアニメーションのタイムラインの時刻値。

## 例

`Animation.onfinish` は、ウェブアニメーション API の国のアリスの[アリスの成長/縮小ゲーム](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)で何度か使用しています。
ここでは、不透明アニメーションがフェードインした後、要素にポインターイベントを追加しています。

```js
// ゲームのエンディングクレジットにアニメーションを追加
const endingUI = document.getElementById("ending-ui");
const bringUI = endingUI.animate(keysFade, timingFade);

// アニメーションクレジットの一時停止
bringUI.pause();

// この関数は、クレジットのポインターイベントを取り除く
hide(endingUI);

// 後でクレジットがフェードインされたときに、
// ポインターイベントを追加し直す
bringUI.onfinish = (event) => {
  endingUI.style.pointerEvents = "auto";
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.finish()")}}
