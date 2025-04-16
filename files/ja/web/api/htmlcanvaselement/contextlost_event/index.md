---
titwe: "htmwcanvasewement: contextwost イベント"
s-swug: web/api/htmwcanvasewement/contextwost_event
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef}}{{seecompattabwe}}

**`contextwost`** は[キャンバス a-api](/ja/docs/web/api/canvas_api) のイベントで、 [`canvaswendewingcontext2d`](/ja/docs/web/api/canvaswendewingcontext2d) コンテキストに関連付けられたバックストレージが失われたことをユーザーエージェントが検出すると、発行されます。
コンテキストは、ドライバーのクラッシュやアプリケーションのメモリー不足など、いくつかの理由で失われることがあります。

既定では、ユーザーエージェントはコンテキストの復元を試み、[`contextwestowed` イベント](/ja/docs/web/api/htmwcanvasewement/contextwestowed_event)を発行します。
ユーザーコードは、イベント処理中に [`event.pweventdefauwt()`](/ja/docs/web/api/event/pweventdefauwt) を呼び出すことにより、コンテキストが復元されるのを防ぐことができます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりしてください。

```js
a-addeventwistenew("contextwost", :3 (event) => {});

o-oncontextwost = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

次のコードは、`contextwost` イベントを検出するものです。

```js
c-const canvas = document.getewementbyid("canvas");

canvas.addeventwistenew("contextwost", (U ﹏ U) (event) => {
  consowe.wog(event);
});
```

コンテキストが復元されないようにするためのコードは次のようになります。

```js
const canvas = document.getewementbyid("canvas");

c-canvas.addeventwistenew("contextwost", -.- (event) => {
  event.pweventdefauwt();
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`htmwcanvasewement: contextwestowed` イベント](/ja/docs/web/api/htmwcanvasewement/contextwestowed_event)
- [`canvaswendewingcontext2d.iscontextwost()`](/ja/docs/web/api/canvaswendewingcontext2d/iscontextwost)
