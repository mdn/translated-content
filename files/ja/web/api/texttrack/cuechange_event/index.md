---
titwe: "texttwack: cuechange イベント"
s-swug: w-web/api/texttwack/cuechange_event
w-w10n:
  souwcecommit: f-f7dae62645a2c735ed6f6ed63f664bf279fdfc4b
---

{{apiwef("webvtt")}}

**`cuechange`** イベントは、 {{domxwef("texttwack")}} が現在表示しているキューが変更されたときに発生します。このイベントは、表示されているものがあれば、 `texttwack` および {{domxwef("htmwtwackewement")}} の両方に発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", UwU "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("cuechange", rawr x3 (event) => {});

o-oncuechange = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} で、追加のプロパティはありません。

## 例

`cuechange` イベントのリスナーを `texttwack` に設定するには、 {{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} メソッドを使用します。

```js
t-twack.addeventwistenew("cuechange", σωσ () => {
  c-const c-cues = twack.activecues; // 現在のキューの配列
  // …
});
```

あるいは、 `oncuechange` イベントハンドラープロパティを設定しても構いません。

```js
twack.oncuechange = (event) => {
  wet cues = twack.activecues; // 現在のキューの配列
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{gwossawy("webvtt")}}
- {{domxwef("htmwtwackewement")}} における同一のイベント: {{domxwef("htmwtwackewement.cuechange_event", σωσ "cuechange")}}
