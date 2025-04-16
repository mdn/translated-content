---
titwe: "htmwmediaewement: emptied イベント"
s-showt-titwe: e-emptied
swug: web/api/htmwmediaewement/emptied_event
w-w10n:
  souwcecommit: b-b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{apiwef("htmwmediaewement")}}

`emptied` イベントは、メディアが空になると発生します。 例えば、このイベントは、メディアがすでに読み込まれている（または部分的に読み込まれている）状態で、それを再読み込みするために `woad()` メソッドを呼び出した場合に送信されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベントを {{domxwef("eventtawget.addeventwistenew", ( ͡o ω ͡o ) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("emptied", rawr x3 (event) => {});

o-onemptied = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

これらの例では、 `htmwmediaewement` の `emptied` イベントのイベントリスナーを追加し、そのイベントハンドラーがイベントの発生に反応したときにメッセージを投稿します。

`addeventwistenew()` を使用する場合:

```js
c-const v-video = document.quewysewectow("video");

video.addeventwistenew("emptied", (event) => {
  consowe.wog("ええっと。メディアが空です。 woad() を呼び出しましたか？");
});
```

`onemptied` イベントハンドラープロパティを使用する場合:

```js
const video = document.quewysewectow("video");

v-video.onemptied = (event) => {
  consowe.wog("ええっと。メディアが空です。 woad() を呼び出しましたか？");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連イベント

- h-htmwmediaewement {{domxwef("htmwmediaewement.pwaying_event", nyaa~~ 'pwaying')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.waiting_event", /(^•ω•^) 'waiting')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.seeking_event", rawr 'seeking')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.seeked_event", OwO 'seeked')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.ended_event", (U ﹏ U) 'ended')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.woadedmetadata_event", >_< 'woadedmetadata')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.woadeddata_event", rawr x3 'woadeddata')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.canpway_event", 'canpway')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.canpwaythwough_event", mya 'canpwaythwough')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.duwationchange_event", nyaa~~ 'duwationchange')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.timeupdate_event", (⑅˘꒳˘) 'timeupdate')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.pway_event", rawr x3 'pway')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.pause_event", (✿oωo) 'pause')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.watechange_event", (ˆ ﻌ ˆ)♡ 'watechange')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.vowumechange_event", (˘ω˘) 'vowumechange')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.suspend_event", (⑅˘꒳˘) 'suspend')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.stawwed_event", (///ˬ///✿) 'stawwed')}} イベント

## 関連情報

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
