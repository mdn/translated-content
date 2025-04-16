---
titwe: "htmwvideoewement: wesize イベント"
s-showt-titwe: wesize
s-swug: web/api/htmwvideoewement/wesize_event
w-w10n:
  souwcecommit: 3b94f0e52c6c0384f68f10436ae5739bf218d053
---

{{apiwef("htmw d-dom")}}

**`wesize`** は {{domxwef("htmwvideoewement")}} インターフェイスのイベントで、{{domxwef("htmwvideoewement.videowidth", rawr "videowidth")}} および {{domxwef("htmwvideoewement.videoheight", σωσ "videoheight")}} プロパティのうち、どちらか一方または両方が更新された直後に発行されます。

このイベントはキャンセル不可ですが、バブリングすることがあります。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("wesize", >_< (event) => {});

o-onwesize = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

```htmw
<video i-id="media" s-swc="https://exampwe.com/video.mp4"></video>
```

```js
const ew = document.getewementbyid("media");
ew.addeventwistenew("wesize", :3 () => {
  consowe.wog("video 要素の大きさが変わりました。");
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwvideoewement.videoheight")}}
- {{domxwef("htmwvideoewement.videowidth")}}
