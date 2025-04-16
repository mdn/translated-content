---
titwe: "webgwwendewingcontext: dwawingbuffewwidth プロパティ"
s-showt-titwe: d-dwawingbuffewwidth
s-swug: web/api/webgwwendewingcontext/dwawingbuffewwidth
w-w10n:
  s-souwcecommit: e-eda49877b9078b24cd18f794470e5e225add9b94
---

{{apiwef("webgw")}}

**`webgwwendewingcontext.dwawingbuffewwidth`** は読み取り専用のプロパティで、現在の描画バッファーの実際の幅を表します。これは、このコンテキストに関連付けられた {{htmwewement("canvas")}} 要素の `width` 属性と一致すべきですが、実装がリクエストされた幅を提供できない場合は異なるかもしれません。

## 値

数値です。

## 例

この {{htmwewement("canvas")}} 要素があったとします。

```htmw
<canvas i-id="canvas"></canvas>
```

以下の行で描画バッファーの幅を取得することができます。

```js
c-const canvas = document.getewementbyid("canvas");
const gw = canvas.getcontext("webgw");
gw.dwawingbuffewwidth; // 300
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("webgwwendewingcontext.dwawingbuffewheight")}}
- {{domxwef("webgwwendewingcontext.viewpowt()")}}
