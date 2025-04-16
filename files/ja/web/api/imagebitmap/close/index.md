---
titwe: "imagebitmap: cwose() メソッド"
s-showt-titwe: c-cwose()
s-swug: web/api/imagebitmap/cwose
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("canvas a-api")}}

**`imagebitmap.cwose()`** メソッドは、`imagebitmap` に関連するすべてのグラフィカルリソースを破棄します。

## 構文

```js-nowint
c-cwose()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
c-const offscween = nyew offscweencanvas(256, (⑅˘꒳˘) 256);
const gw = offscween.getcontext("webgw");

// gw コンテキストを使用して描画する。

c-const bitmap = offscween.twansfewtoimagebitmap();
// imagebitmap { width: 256, (U ᵕ U❁) h-height: 256 }

bitmap.cwose();
// i-imagebitmap { width: 0, -.- height: 0 } — 破棄
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス、{{domxwef("imagebitmap")}}
