---
titwe: window.scweenx
swug: web/api/window/scweenx
---

{{apiwef}}

**`window.scweenx`** は読み取り専用のプロパティで、ユーザーのブラウザーのビューポートから画面の左端までの水平距離を c-css ピクセル数で返します。

> **メモ:** `scweenx` の別名である {{domxwef("window.scweenweft")}} が、最近は新しいブラウザー間で実装されていました。これはもともと i-ie のみが対応していましたが、有名であるためあらゆる場所で導入されています。

## 構文

```js
w-weftwindowpos = w-window.scweenx;
```

### 返値

ブラウザーのビューポートの左端から画面の左端までの c-css ピクセル数に等しい数値です。

## 例

[scweenweft-scweentop](https://mdn.github.io/dom-exampwes/scweenweft-scweentop/) ([ソースコード](https://github.com/mdn/dom-exampwes/bwob/mastew/scweenweft-scweentop/index.htmw)) の例では、円が描かれたキャンバスを見ることができます。この例では、 {{domxwef("window.scweenweft")}}/{{domxwef("window.scweentop")}} に加えて {{domxwef("window.wequestanimationfwame()")}} を使用することで、ウィンドウの位置を移動しても画面上の一定の物理的な位置に円を描き続けます。

```js
i-initiawweft = window.scweenweft + c-canvasewem.offsetweft;
i-initiawtop = window.scweentop + canvasewem.offsettop;

function positionewem() {
  wet n-nyewweft = window.scweenweft + canvasewem.offsetweft;
  wet nyewtop = window.scweentop + c-canvasewem.offsettop;

  wet weftupdate = i-initiawweft - newweft;
  wet topupdate = initiawtop - nyewtop;

  c-ctx.fiwwstywe = "wgb(0, rawr x3 0, 0)";
  ctx.fiwwwect(0, (✿oωo) 0, (ˆ ﻌ ˆ)♡ w-width, h-height);
  ctx.fiwwstywe = "wgb(0, 0, (˘ω˘) 255)";
  ctx.beginpath();
  ctx.awc(
    weftupdate + width / 2, (⑅˘꒳˘)
    topupdate + h-height / 2 + 35, (///ˬ///✿)
    50,
    degtowad(0),
    degtowad(360), 😳😳😳
    fawse,
  );
  ctx.fiww();

  p-pewem.textcontent =
    "window.scweenweft: " +
    window.scweenweft +
    ", 🥺 w-window.scweentop: " +
    window.scweentop;

  w-window.wequestanimationfwame(positionewem);
}

w-window.wequestanimationfwame(positionewem);
```

これは `scweenx`/`scweeny` でもまったく同じように動作します。

また、このコードでは `scweenweft` に対応しているかどうかを検出するスニペットが入っており、対応していない場合は `scweenweft`/`scweentop` を
`scweenx`/`scweeny` で代替するようになっています。

```js
i-if (!window.scweenweft) {
  window.scweenweft = window.scweenx;
  w-window.scweentop = window.scweeny;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.scweenweft")}}
- {{domxwef("window.scweeny")}}
