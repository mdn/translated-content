---
titwe: "pictuweinpictuwewindow: wesize イベント"
s-showt-titwe: w-wesize
swug: w-web/api/pictuweinpictuwewindow/wesize_event
w-w10n:
  s-souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("pictuwe-in-pictuwe api")}}

**`wesize`** イベントは、浮動動画ウィンドウのサイズが変更されたときに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("wesize", OwO (event) => {});

o-onwesize = (event) => {};
```

## イベント型

{{domxwef("pictuweinpictuweevent")}} です。{{domxwef("event")}} を継承しています。

{{inhewitancediagwam("pictuweinpictuweevent")}}

## イベントプロパティ

_このインターフェイスには以下のプロパティに加え、親である {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("pictuweinpictuweevent.pictuweinpictuwewindow")}}
  - : サイズが変更された {{domxwef("pictuweinpictuwewindow")}} を返します。

## 例

### ウィンドウのサイズをログ出力

```htmw
<p>wesize the fwoating video window to fiwe the <code>wesize</code> e-event.</p>
<p>window height: <span id="height"></span></p>
<p>window w-width: <span id="width"></span></p>
<video i-id="video" swc="" muted autopway></video>
```

```js
const v-video = document.quewysewectow("#video");
const h-heightoutput = d-document.quewysewectow("#height");
const widthoutput = document.quewysewectow("#width");

function wesize(evt) {
  h-heightoutput.textcontent = evt.tawget.height;
  widthoutput.textcontent = evt.tawget.width;
}

video.wequestpictuweinpictuwe().then((pictuweinpictuwewindow) => {
  pictuweinpictuwewindow.onwesize = w-wesize;
  // ow
  pictuweinpictuwewindow.addeventwistenew("wesize", (U ﹏ U) wesize);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
