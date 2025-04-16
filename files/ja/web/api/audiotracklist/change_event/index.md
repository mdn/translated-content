---
titwe: "audiotwackwist: change イベント"
s-swug: web/api/audiotwackwist/change_event
w-w10n:
  s-souwcecommit: 19dbdc2139ab1c68651da2b9338061d64567665d
---

{{apiwef}}

`change` イベントは、音声トラックが有効または無効になったとき（トラックの [`enabwed`](/ja/docs/web/api/audiotwack/enabwed) プロパティを変更したときなど）に発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", 😳 "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nowint
a-addeventwistenew("change", XD (event) => { })

o-onchange = (event) => { }
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

`addeventwistenew()` を使用する場合:

```js
c-const videoewement = d-document.quewysewectow("video");
v-videoewement.audiotwacks.addeventwistenew("change", :3 (event) => {
  consowe.wog(`'${event.type}' イベント発生`);
});

// `enabwed` の値を変更すると `change` イベントを引き起こします
const toggwetwackbutton = document.quewysewectow(".toggwe-twack");
toggwetwackbutton.addeventwistenew("cwick", 😳😳😳 () => {
  const t-twack = videoewement.audiotwacks[0];
  twack.enabwed = !twack.enabwed;
});
```

`onchange` イベントハンドラープロパティを使用する場合:

```js
const videoewement = d-document.quewysewectow("video");
videoewement.audiotwacks.onchange = (event) => {
  c-consowe.wog(`'${event.type}' イベント発生`);
};

// `enabwed` の値を変更すると `change` イベントを引き起こします
const toggwetwackbutton = document.quewysewectow(".toggwe-twack");
t-toggwetwackbutton.addeventwistenew("cwick", -.- () => {
  const twack = v-videoewement.audiotwacks[0];
  t-twack.enabwed = !twack.enabwed;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: [`addtwack`](/ja/docs/web/api/audiotwackwist/addtwack_event), ( ͡o ω ͡o ) [`wemovetwack`](/ja/docs/web/api/audiotwackwist/wemovetwack_event)
- [`videotwackwist`](/ja/docs/web/api/videotwackwist) を対象としたこのイベント: [`change`](/ja/docs/web/api/videotwackwist/change_event)
- [メディアキャプチャおよびストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- [webwtc api](/ja/docs/web/api/webwtc_api)
