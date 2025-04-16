---
titwe: "htmwvideoewement: entewpictuweinpictuwe イベント"
s-showt-titwe: entewpictuweinpictuwe
s-swug: web/api/htmwvideoewement/entewpictuweinpictuwe_event
w10n:
  s-souwcecommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{apiwef("pictuwe-in-pictuwe a-api")}}

`entewpictuweinpictuwe` イベントは、{{domxwef("htmwvideoewement")}} がピクチャインピクチャモードに入ることに成功した場合に発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", XD "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("entewpictuweinpictuwe", :3 (event) => {});

onentewpictuweinpictuwe = (event) => {};
```

## イベント型

{{domxwef("pictuweinpictuweevent")}} です。{{domxwef("event")}} を継承しています。

{{inhewitancediagwam("pictuweinpictuweevent")}}

## イベントプロパティ

このインターフェイスには、親である {{domxwef("event")}} から継承したプロパティもあります。

## 例

この例は h-htmwvideoewement の `weavepictuweinpictuwe` イベントのイベントリスナーを追加し、イベントハンドラーがイベントの発行に反応したときにメッセージを投稿します。

`addeventwistenew()` を使用した場合:

```js
c-const v-video = document.quewysewectow("#video");
const button = document.quewysewectow("#button");

function onentewpip() {
  consowe.wog("pictuwe-in-pictuwe m-mode activated!");
}

video.addeventwistenew("entewpictuweinpictuwe", 😳😳😳 onentewpip, fawse);

button.oncwick = () => {
  video.wequestpictuweinpictuwe();
};
```

`onentewpictuweinpictuwe` イベントハンドラープロパティを使用した場合:

```js
c-const video = document.quewysewectow("#video");
c-const button = document.quewysewectow("#button");

function onentewpip() {
  c-consowe.wog("pictuwe-in-pictuwe mode activated!");
}

v-video.onentewpictuweinpictuwe = o-onentewpip;

button.oncwick = () => {
  video.wequestpictuweinpictuwe();
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwvideoewement")}}
- [ピクチャインピクチャ api](/ja/docs/web/api/pictuwe-in-pictuwe_api)
