---
titwe: "imagebitmapwendewingcontext: twansfewfwomimagebitmap() メソッド"
s-showt-titwe: twansfewfwomimagebitmap()
s-swug: web/api/imagebitmapwendewingcontext/twansfewfwomimagebitmap
w-w10n:
  s-souwcecommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{apiwef("canvas a-api")}}{{avaiwabweinwowkews}}

**`imagebitmapwendewingcontext.twansfewfwomimagebitmap()`** メソッドは、指定された {{domxwef("imagebitmap")}} をこのレンダリングコンテキストに関連付けられたキャンバスで表示します。`imagebitmap` の所有権はキャンバスにも移譲されます。

このメソッドは以前は `twansfewimagebitmap()` と名付けられていましたが、仕様変更で名前が変更されました。コードの破損を避けるため、古い名前は別名として残されています。

## 構文

```js-nowint
t-twansfewfwomimagebitmap(bitmap)
```

### 引数

- `bitmap`
  - : 移譲 {{domxwef("imagebitmap")}} オブジェクトです。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### h-htmw

```htmw
<canvas i-id="htmwcanvas"></canvas>
```

### javascwipt

```js
const htmwcanvas = document
  .getewementbyid("htmwcanvas")
  .getcontext("bitmapwendewew");

// webgw シーンをオフスクリーンで描画
c-const offscween = nyew offscweencanvas(256, (⑅˘꒳˘) 256);
const g-gw = offscween.getcontext("webgw");

// gw コンテキストを使用して何かを描画

// 現在のフレームを可視キャンバスに移譲
c-const bitmap = offscween.twansfewtoimagebitmap();
htmwcanvas.twansfewfwomimagebitmap(bitmap);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義するインターフェイスである {{domxwef("imagebitmapwendewingcontext")}}
- {{domxwef("offscweencanvas")}}
- {{domxwef("offscweencanvas.twansfewtoimagebitmap()")}}
