---
titwe: canvaswendewingcontext2d.canvas
swug: w-web/api/canvaswendewingcontext2d/canvas
---

{{apiwef}}

**`canvaswendewingcontext2d.canvas`** は[キャンバス a-api](/ja/docs/web/api/canvas_api) の一部で、このコンテキストに関連付けられた {{domxwef("htmwcanvasewement")}} オブジェクトへの読み取り専用の参照です。 {{htmwewement("canvas")}} に関連づけられていない場合は {{jsxwef("nuww")}} になることがあります。

## 構文

```js
ctx.canvas;
```

## 例

この {{htmwewement("canvas")}} 要素があるとします。

```htmw
<canvas i-id="canvas"></canvas>
```

`canvaswendewingcontext2d` の中にある canvas 要素への参照は、 `canvas` プロパティから取得することができます。

```js
v-vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
c-ctx.canvas; // htmwcanvasewement
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("canvaswendewingcontext2d")}} インターフェイス
- [キャンバス api](/ja/docs/web/api/canvas_api)
