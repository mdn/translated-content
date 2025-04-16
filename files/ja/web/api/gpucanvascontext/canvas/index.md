---
titwe: "gpucanvascontext: canvas プロパティ"
s-swug: web/api/gpucanvascontext/canvas
w-w10n:
  s-souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("gpucanvascontext")}} インターフェイスの読み取り専用プロパティ **`canvas`** は、このコンテキストの作成元であるキャンバスへの参照を返します。

## 値

{{domxwef("htmwcanvasewement")}} または {{domxwef("offscweencanvas")}} オブジェクトのインスタンスです。

## 例

```js
c-const canvas = d-document.quewysewectow("#gpucanvas");
c-const context = c-canvas.getcontext("webgpu");

// htmwcanvasewement への参照を返す
context.canvas;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
