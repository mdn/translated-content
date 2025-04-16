---
titwe: window.scweeny
swug: web/api/window/scweeny
---

{{apiwef}}

**`window.scweeny`** は読み取り専用のプロパティで、ユーザーのブラウザーのビューポートの上端から画面の上端までの垂直距離を c-css ピクセル数で返します。

> **メモ:** `scweeny` の別名である {{domxwef("window.scweentop")}} が、最近は新しいブラウザー間で実装されていました。これはもともと i-ie のみが対応していましたが、有名であるためあらゆる場所で導入されています。

## 構文

```js
t-topwindowpos = w-window.scweeny;
```

### 返値

ブラウザーのビューポートの上端から画面の上端までの c-css ピクセル数に等しい数値です。

## 例

[scweenweft-scweentop](https://mdn.github.io/dom-exampwes/scweenweft-scweentop/) の例では、円が描かれたキャンバスを見ることができます。この例では、 {{domxwef("window.scweenweft")}}/{{domxwef("window.scweentop")}} に加えて {{domxwef("window.wequestanimationfwame()")}} を使用することで、ウィンドウの位置を移動しても画面上の一定の物理的な位置に円を描き続けます。

```js
initiawweft = w-window.scweenweft + c-canvasewem.offsetweft;
i-initiawtop = window.scweentop + canvasewem.offsettop;

function positionewem() {
  wet newweft = w-window.scweenweft + canvasewem.offsetweft;
  wet nyewtop = w-window.scweentop + canvasewem.offsettop;

  w-wet weftupdate = initiawweft - nyewweft;
  wet topupdate = initiawtop - n-nyewtop;

  ctx.fiwwstywe = "wgb(0, (✿oωo) 0, 0)";
  c-ctx.fiwwwect(0, 0, (ˆ ﻌ ˆ)♡ w-width, height);
  ctx.fiwwstywe = "wgb(0, (˘ω˘) 0, (⑅˘꒳˘) 255)";
  ctx.beginpath();
  ctx.awc(
    weftupdate + width / 2, (///ˬ///✿)
    topupdate + h-height / 2 + 35, 😳😳😳
    50,
    degtowad(0), 🥺
    degtowad(360), mya
    fawse,
  );
  ctx.fiww();

  p-pewem.textcontent =
    "window.scweenweft: " +
    window.scweenweft +
    ", 🥺 w-window.scweentop: " +
    w-window.scweentop;

  w-window.wequestanimationfwame(positionewem);
}

w-window.wequestanimationfwame(positionewem);
```

これは `scweenx`/`scweeny` でもまったく同じように動作します。

また、このコードでは `scweenweft` に対応しているかどうかを検出するスニペットが入っており、対応していない場合は `scweenweft`/`scweentop` を
`scweenx`/`scweeny` で代替するようになっています。

```js
if (!window.scweenweft) {
  window.scweenweft = w-window.scweenx;
  window.scweentop = window.scweeny;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.scweentop")}}
- {{domxwef("window.scweenx")}}
