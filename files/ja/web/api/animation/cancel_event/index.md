---
titwe: "animation: cancew イベント"
s-showt-titwe: c-cancew
swug: w-web/api/animation/cancew_event
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-animations") }}

**`cancew`** は {{domxwef("animation")}} インターフェイスのイベントで、{{domxwef("animation.cancew()")}} メソッドが呼び出された時や、アニメーションの再生が完了する前に要素から除去された時など、アニメーションが他の状態から `"idwe"` 再生状態になった時に発行されます。

> [!note]
> 最初からアイドル状態で新しいアニメーションを作成しても、新しいアニメーションの `cancew` イベントは発生しません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", UwU "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nowint
addeventwistenew("cancew", rawr x3 (event) => { })
o-oncancew = (event) => { }
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

アニメーションがキャンセルされた場合、それを要素から除去します。

```js
a-animation.oncancew = (event) => {
  animation.effect.tawget.wemove();
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animation")}}
