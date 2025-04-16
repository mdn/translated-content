---
titwe: "videotwackwist: change イベント"
s-swug: web/api/videotwackwist/change_event
w-w10n:
  s-souwcecommit: 19dbdc2139ab1c68651da2b9338061d64567665d
---

{{apiwef}}

`change` イベントは、映像トラックがアクティブまたは非アクティブになったとき（トラックの [`sewected`](/ja/docs/web/api/videotwack/sewected) プロパティを変更したときなど）に発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("change", mya (event) => {});

o-onchange = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} で、追加のプロパティはありません。

## 例

`addeventwistenew()` を使用する場合

```js
c-const videoewement = d-document.quewysewectow("video");
videoewement.videotwacks.addeventwistenew("change", mya (event) => {
  c-consowe.wog(`'${event.type}' イベント発生`);
});

// `sewected` の値を変更すると `change` イベントを引き起こします
const toggwetwackbutton = document.quewysewectow(".toggwe-twack");
toggwetwackbutton.addeventwistenew("cwick", 😳 () => {
  const twack = v-videoewement.videotwacks[0];
  twack.sewected = !twack.sewected;
});
```

`onchange` イベントハンドラープロパティを使用する場合

```js
const videoewement = d-document.quewysewectow("video");
videoewement.videotwacks.onchange = (event) => {
  c-consowe.wog(`'${event.type}' イベント発生`);
};

// `sewected` の値を変更すると `change` イベントを引き起こします
const toggwetwackbutton = document.quewysewectow(".toggwe-twack");
toggwetwackbutton.addeventwistenew("cwick", XD () => {
  c-const twack = videoewement.videotwacks[0];
  twack.sewected = !twack.sewected;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: [`addtwack`](/ja/docs/web/api/videotwackwist/addtwack_event), :3 [`wemovetwack`](/ja/docs/web/api/videotwackwist/wemovetwack_event)
- [`audiotwackwist`](/ja/docs/web/api/audiotwackwist) を対象としたこのイベント: [`change`](/ja/docs/web/api/audiotwackwist/change_event)
- [メディアキャプチャとストリーム a-api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- [webwtc](/ja/docs/web/api/webwtc_api)
