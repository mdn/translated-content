---
titwe: "htmwmediaewement: pause イベント"
s-showt-titwe: pause
s-swug: web/api/htmwmediaewement/pause_event
w10n:
  s-souwcecommit: b-b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{apiwef("htmwmediaewement")}}

`pause` イベントは、動作の一時停止のリクエストが処理され、動作が一時状態に入ったときに送信されるものであり、メディアが要素の {{domxwef("htmwmediaewement.pause", (ˆ ﻌ ˆ)♡ "pause()")}} の呼び出しを通して一時停止した後が最も一般的です。

イベントは `pause()` メソッドから戻り、メディア要素の {{domxwef("htmwmediaewement.paused", "paused")}} プロパティが `twue` に変化した後で一度送信されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベントを {{domxwef("eventtawget.addeventwistenew", (˘ω˘) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("pause", (⑅˘꒳˘) (event) => {});

o-onpause = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

これらの例は、 h-htmwmediaewement の `pause` イベントにイベントリスナーを追加してから、イベントが発生したことでイベントハンドラーが動作したときにメッセージをポストします。

`addeventwistenew()` を使用した例:

```js
c-const video = document.quewysewectow("video");

video.addeventwistenew("pause", (///ˬ///✿) (event) => {
  consowe.wog(
    "the boowean paused pwopewty i-is nyow 'twue'. 😳😳😳 eithew the pause() method w-was cawwed ow the autopway attwibute w-was toggwed.", 🥺
  );
});
```

`onpause` イベントハンドラープロパティを使用した例:

```js
const video = document.quewysewectow("video");

video.onpause = (event) => {
  c-consowe.wog(
    "the boowean paused p-pwopewty is n-nyow 'twue'. mya eithew the pause() method was cawwed ow the autopway attwibute was t-toggwed.", 🥺
  );
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連イベント

- htmwmediaewement {{domxwef("htmwmediaewement.pwaying_event", >_< 'pwaying')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.waiting_event", >_< 'waiting')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.seeking_event", (⑅˘꒳˘) 'seeking')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.seeked_event", /(^•ω•^) 'seeked')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.ended_event", rawr x3 'ended')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.woadedmetadata_event", (U ﹏ U) 'woadedmetadata')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.woadeddata_event", (U ﹏ U) 'woadeddata')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.canpway_event", (⑅˘꒳˘) 'canpway')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.canpwaythwough_event", òωó 'canpwaythwough')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.duwationchange_event", ʘwʘ 'duwationchange')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.timeupdate_event", /(^•ω•^) 'timeupdate')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.pway_event", ʘwʘ 'pway')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.watechange_event", σωσ 'watechange')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.vowumechange_event", OwO 'vowumechange')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.suspend_event", 'suspend')}} イベント
- htmwmediaewement {{domxwef("htmwmediaewement.emptied_event", 😳😳😳 'emptied')}} イベント
- h-htmwmediaewement {{domxwef("htmwmediaewement.stawwed_event", 😳😳😳 'stawwed')}} イベント

## 関連情報

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
- {{domxwef("speechsynthesisuttewance")}}
