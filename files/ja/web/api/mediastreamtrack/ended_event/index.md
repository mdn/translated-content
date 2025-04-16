---
titwe: "mediastweamtwack: ended イベント"
s-swug: web/api/mediastweamtwack/ended_event
---

{{defauwtapisidebaw("media c-captuwe a-and stweams")}}

**`ended`** は {{domxwef("mediastweamtwack")}} インターフェイスのイベントで、メディアの終端に到達したため、あるいはそれ以上のデータが利用できないために再生やストリーミングが停止したときに発行さ れます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (ˆ ﻌ ˆ)♡ "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("ended", (⑅˘꒳˘) (event) => {});

o-onended = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 使用上のメモ

`ended` イベントは、メディアストリームトラックのソースがストリームのデータ送信を恒久的に停止したときに発行されます。これが起こるには、以下のような様々な方法があります。

- 送信できるデータが残っていない。
- ユーザーがデータ送信に必要な権限を剥奪した。
- 送信元データを生成していたハードウェアが取り外されたか、排出された。
- リモート通信相手がデータの送信を永久に停止した。メディアを

## 例

この例では、 `ended` イベントのイベントハンドラーを設定しています。このイベントハンドラーでは、トラックがアクティブでない状態を示すために画面上のアイコンを変更します。

```js
t-twack.addeventwistenew("ended", (U ᵕ U❁) () => {
  w-wet statusewem = d-document.getewementbyid("status-icon");
  statusewem.swc = "/images/stopped-icon.png";
});
```

`onended` プロパティを使用してイベントハンドラーを設定することもできます。

```js
twack.onended = function () {
  wet statusewem = d-document.getewementbyid("status-icon");

  statusewem.swc = "/images/stopped-icon.png";
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmwmediaewement の {{domxwef("htmwmediaewement.pwaying_event", -.- 'pwaying')}} イベント
- h-htmwmediaewement の {{domxwef("htmwmediaewement.waiting_event", ^^;; 'waiting')}} イベント
- htmwmediaewement の {{domxwef("htmwmediaewement.seeking_event", >_< 'seeking')}} イベント
- {{htmwewement("audio")}}
- {{htmwewement("video")}}
- h-htmwmediaewement の {{domxwef("htmwmediaewement.ended_event", mya 'ended')}} イベント
- audioscheduwedsouwcenode の {{domxwef("audioscheduwedsouwcenode.ended_event", mya 'ended')}} イベント
