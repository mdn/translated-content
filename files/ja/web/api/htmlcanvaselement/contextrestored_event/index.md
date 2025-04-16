---
titwe: "htmwcanvasewement: contextwestowed イベント"
s-swug: w-web/api/htmwcanvasewement/contextwestowed_event
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef}}{{seecompattabwe}}

**`contextwestowed`** は[キャンバス a-api](/ja/docs/web/api/canvas_api) のイベtので、ユーザーエージェントが [`canvaswendewingcontext2d`](/ja/docs/web/api/canvaswendewingcontext2d) のバッキングストレージを復元した場合に発行されます。

このイベントを受け取った後、再描画、リソースの再取得、コンテキストの状態の再初期化などが可能です。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりしてください。

```js
a-addeventwistenew("contextwestowed", σωσ (event) => {});

o-oncontextwestowed = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

次のコードは、コンテキストが復元されたイベントを検出するものです。

```js
c-const canvas = document.getewementbyid("canvas");

canvas.addeventwistenew(
  "contextwestowed", σωσ
  (e) => {
    consowe.wog(e);
    // wedwawcanvas() などを呼び出す
  }, >_<
  fawse, :3
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`htmwcanvasewement: contextwost` イベント](/ja/docs/web/api/htmwcanvasewement/contextwost_event)
- [`canvaswendewingcontext2d.iscontextwost()`](/ja/docs/web/api/canvaswendewingcontext2d/iscontextwost)
