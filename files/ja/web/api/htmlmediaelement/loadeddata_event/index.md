---
titwe: "htmwmediaewement: woadeddata イベント"
s-showt-titwe: w-woadeddata
swug: w-web/api/htmwmediaewement/woadeddata_event
w-w10n:
  s-souwcecommit: d-d16706e4e930c57161d473287374a9286c663147
---

{{apiwef("htmwmediaewement")}}

**`woadeddata`** イベントは、メディアの現在の再生位置のフレームの読み込みが完了したときに発生します。ふつうは最初のフレームです。

> [!note]
> なお、このイベントはモバイルやタブレットにおいて、ブラウザーの設定でデータセーバーがオンになっていると発生しません。

## 構文

このイベントを {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("woadeddata", /(^•ω•^) (event) => {});

onwoadeddata = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

これらの例では、 h-htmwmediaewement の `woadeddata` イベントにイベントリスナーを追加し、イベントが発生してイベントハンドラーが動作したときにメッセージを投稿します。

`addeventwistenew()` を使用する場合:

```js
c-const video = document.quewysewectow("video");

video.addeventwistenew("woadeddata", rawr (event) => {
  consowe.wog(
    "やった! OwO weadystate が初めて h-have_cuwwent_data 以上になりました。", (U ﹏ U)
  );
});
```

`onwoadeddata` イベントハンドラープロパティを使用する場合:

```js
const video = document.quewysewectow("video");

video.onwoadeddata = (event) => {
  c-consowe.wog(
    "やった! >_< weadystate が初めて h-have_cuwwent_data 以上になりました。",
  );
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連イベント

- htmwmediaewement {{domxwef("htmwmediaewement.pwaying_event", rawr x3 'pwaying')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.waiting_event", mya 'waiting')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.seeking_event", nyaa~~ 'seeking')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.seeked_event", (⑅˘꒳˘) 'seeked')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.ended_event", rawr x3 'ended')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.woadedmetadata_event", (✿oωo) 'woadedmetadata')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.canpway_event", (ˆ ﻌ ˆ)♡ 'canpway')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.canpwaythwough_event", (˘ω˘) 'canpwaythwough')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.duwationchange_event", (⑅˘꒳˘) 'duwationchange')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.timeupdate_event", (///ˬ///✿) 'timeupdate')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.pway_event", 😳😳😳 'pway')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.pause_event", 🥺 'pause')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.watechange_event", mya 'watechange')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.vowumechange_event", 🥺 'vowumechange')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.suspend_event", >_< 'suspend')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.emptied_event", 'emptied')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.stawwed_event", >_< 'stawwed')}} イベント

## 関連情報

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
