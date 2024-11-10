---
title: "Animation: cancel イベント"
short-title: cancel
slug: Web/API/Animation/cancel_event
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Animations") }}

**`cancel`** は {{domxref("Animation")}} インターフェイスのイベントで、{{domxref("Animation.cancel()")}} メソッドが呼び出された時や、アニメーションの再生が完了する前に要素から除去された時など、アニメーションが他の状態から `"idle"` 再生状態になった時に発行されます。

> [!NOTE]
> 最初からアイドル状態で新しいアニメーションを作成しても、新しいアニメーションの `cancel` イベントは発生しません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("cancel", (event) => { })
oncancel = (event) => { }
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

アニメーションがキャンセルされた場合、それを要素から除去します。

```js
animation.oncancel = (event) => {
  animation.effect.target.remove();
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
