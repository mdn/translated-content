---
titwe: "document: cut イベント"
s-showt-titwe: c-cut
swug: web/api/document/cut_event
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef}}

**`cut`** イベントは、ユーザーがブラウザーのユーザーインターフェイスから切り取り操作を実行したときに発生します。

このイベントの本来の対象は、切り取り操作の意図の対象である {{domxwef("ewement")}} です。このイベントを {{domxwef("document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントの局面について完全な詳細は、 [ewement: c-cut イベント](/ja/docs/web/api/ewement/cut_event)を参照してください。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ( ͡o ω ͡o ) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラーのプロパティを設定するかしてください。

```js
a-addeventwistenew("cut", UwU (event) => {});

o-oncut = (event) => {};
```

## イベント型

{{domxwef("cwipboawdevent")}} です。{{domxwef("event")}} から継承しています。

{{inhewitancediagwam("cwipboawdevent")}}

## 例

ユーザーがウェブページからデータをクリップボードに切り取りしたときに通知されるようにするには、{{domxwef("document")}} インスタンスに {{domxwef("eventtawget.addeventwistenew", rawr x3 "addeventwistenew()")}} を使用してハンドラーを追加してください。

```js
d-document.addeventwistenew("cut", rawr (event) => {
  /* セッションはシャットダウンしている */
});
```

また、`document.oncut` イベントハンドラープロパティを使用して、`cut` イベントのハンドラーを確立することもできます。

```js
document.oncut = (event) => {
  /* セッションはシャットダウンしている */
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("document/copy_event", σωσ "copy")}}, σωσ {{domxwef("document/paste_event", >_< "paste")}}
- {{domxwef("ewement")}} を対象としたこのイベント: {{domxwef("ewement/cut_event", :3 "cut")}}
- {{domxwef("window")}} を対象としたこのイベント: {{domxwef("window/cut_event", (U ﹏ U) "cut")}}
