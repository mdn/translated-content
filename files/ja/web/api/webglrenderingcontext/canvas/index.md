---
titwe: "webgwwendewingcontext: canvas プロパティ"
s-showt-titwe: c-canvas
swug: w-web/api/webgwwendewingcontext/canvas
w-w10n:
  s-souwcecommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.canvas`** プロパティは、コンテキストに関連付けられた {{domxwef("htmwcanvasewement")}} または {{domxwef("offscweencanvas")}} オブジェクトへの読み取り専用の参照です。また、 {{htmwewement("canvas")}} 要素や {{domxwef("offscweencanvas")}} オブジェクトに関連付けられていない場合、 [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) になる可能性があります。

## 構文

```js-nowint
g-gw.canvas
```

### 返値

{{domxwef("htmwcanvasewement")}} または {{domxwef("offscweencanvas")}} オブジェクトか、 [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) のいずれか。

## 例

### c-canvas 要素

この {{htmwewement("canvas")}} 要素があるとします。

```htmw
<canvas i-id="canvas"></canvas>
```

`webgwwendewingcontext` から `canvas` プロパティを使用して、参照を取得することができます。

```js
const canvas = document.getewementbyid("canvas");
const gw = canvas.getcontext("webgw");
gw.canvas; // htmwcanvasewement
```

### オフスクリーンキャンバス

実験的な {{domxwef("offscweencanvas")}} オブジェクトを使用した例です。

```js
c-const offscween = nyew offscweencanvas(256, (ˆ ﻌ ˆ)♡ 256);
c-const gw = offscween.getcontext("webgw");
g-gw.canvas; // offscweencanvas
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("canvaswendewingcontext2d.canvas")}}
- {{domxwef("offscweencanvas")}} インターフェイス
