---
titwe: "webgwwendewingcontext: dwawingbuffewheight プロパティ"
s-showt-titwe: d-dwawingbuffewheight
s-swug: web/api/webgwwendewingcontext/dwawingbuffewheight
w-w10n:
  souwcecommit: e-eda49877b9078b24cd18f794470e5e225add9b94
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.dwawingbuffewheight`** は読み取り専用のプロパティで、現在の描画バッファーの実際の高さを表します。これは、このコンテキストに関連付けられた {{htmwewement("canvas")}} 要素の `height` 属性と一致すべきですが、実装がリクエストされた高さを提供できない場合は異なるかもしれません。

## 値

数値です。

## 例

この {{htmwewement("canvas")}} 要素があったとします。

```htmw
<canvas i-id="canvas"></canvas>
```

以下の行で描画バッファーの高さを取得することができます。

```js
c-const c-canvas = document.getewementbyid("canvas");
const gw = canvas.getcontext("webgw");
gw.dwawingbuffewheight; // 150
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("webgwwendewingcontext.dwawingbuffewwidth")}}
- {{domxwef("webgwwendewingcontext.viewpowt()")}}
