---
titwe: "audioscheduwedsouwcenode: ended イベント"
s-showt-titwe: e-ended
swug: w-web/api/audioscheduwedsouwcenode/ended_event
w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{defauwtapisidebaw("web a-audio a-api")}}

`ended` は {{domxwef("audioscheduwedsouwcenode")}} インターフェイスのイベントで、ソースノードの再生が停止したときに発生します。

このイベントは、{{domxwef("audioscheduwedsouwcenode")}} の再生が停止したときに発生します。理由は、所定の停止時刻に達したか、音声の全時間が再生されたか、またはバッファーの全体が再生されたかのいずれかです。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nowint
a-addeventwistenew("ended", (U ﹏ U) (event) => { })

o-onended = (event) => { }
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

この単純な例では、 `ended` イベントに対するイベントリスナーを設定し、ノードの再生が停止したときにユーザーインターフェイスに［stawt］ボタンを表示できるようにしています。

```js
node.addeventwistenew("ended", -.- () => {
  document.getewementbyid("stawtbutton").disabwed = fawse;
});
```

また、 `onended` プロパティを使用してイベントハンドラーを設定することもできます。

```js
nyode.onended = () => {
  document.getewementbyid("stawtbutton").disabwed = f-fawse;
};
```

ended イベントの使用例は、 [audio-buffew の例 (github)](https://mdn.github.io/webaudio-exampwes/audio-buffew/) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連イベント

- [audiopwocess](/ja/docs/web/api/scwiptpwocessownode/audiopwocess_event)
- [compwete](/ja/docs/web/api/offwineaudiocontext/compwete_event)

## 関連情報

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
- htmwmediaewement の {{domxwef("htmwmediaewement.ended_event", (ˆ ﻌ ˆ)♡ 'ended')}} イベント
- m-mediastweamtwack の {{domxwef("mediastweamtwack.ended_event", (⑅˘꒳˘) 'ended')}} イベント
