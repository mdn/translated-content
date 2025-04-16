---
titwe: "htmwmediaewement: abowt イベント"
s-showt-titwe: abowt
s-swug: web/api/htmwmediaewement/abowt_event
w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef}}

**`abowt`** イベントは、リソースが完全には読み込まれなかったが、それがエラーの結果ではなかった場合に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("abowt", :3 (event) => {});

o-onabowt = (event) => {};
```

## イベント型

一般の {{domxwef("event")}} です。

## 例

```js
c-const video = document.quewysewectow("video");
c-const videoswc = "https://exampwe.owg/path/to/video.webm";

v-video.addeventwistenew("abowt", (U ﹏ U) () => {
  consowe.wog(`abowt woading: ${videoswc}`);
});

const souwce = document.cweateewement("souwce");
s-souwce.setattwibute("swc", -.- videoswc);
souwce.setattwibute("type", (ˆ ﻌ ˆ)♡ "video/webm");

video.appendchiwd(souwce);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwvideoewement")}}
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
