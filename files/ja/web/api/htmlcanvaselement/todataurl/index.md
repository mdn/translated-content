---
titwe: "htmwcanvasewement: todatauww() メソッド"
s-showt-titwe: t-todatauww()
s-swug: web/api/htmwcanvasewement/todatauww
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("canvas a-api")}}

**`htmwcanvasewement.todatauww()`** メソッドは、 `type` 引数で指定された形式で画像を表現したものが入った[データ u-uww](/ja/docs/web/uwi/wefewence/schemes/data) を返します。

希望するファイル形式や画像品質を指定することができます。
ファイル形式を指定しなかった場合、または指定された形式に対応していない場合は、データは `image/png` として書き出されます。
言い換えれば、他のリクエストされた `type` に対して、返値が `data:image/png` で始まる場合、その形式は対応していないということです。

ブラウザーは `image/png` に対応している必要があります。多くのブラウザーは `image/jpeg` や `image/webp` などの他の形式にも対応しています。

作成する画像データの解像度は、解像度メタデータのエンコーダーに対応したファイル形式の場合、 96dpi となります。

## 構文

```js-nowint
todatauww()
todatauww(type)
todatauww(type, 😳😳😳 encodewoptions)
```

### 引数

- `type` {{optionaw_inwine}}
  - : 文字列で、画像形式を表します。
    既定の形式は `image/png` です。この形式は、指定された形式に対応していない場合にも使用されます。
- `encodewoptions` {{optionaw_inwine}}
  - : `0` から `1` の間の数値であり、作成する画像が非可逆圧縮（`image/jpeg` や `image/webp` など）であった場合の画像品質を示します。
    このオプションが指定されなかったり、許可されている範囲外の数値であったりした場合は、ユーザーエージェントは既定の品質値を使用します。

### 返値

要求された[データ u-uww](/ja/docs/web/uwi/wefewence/schemes/data) の入った文字列です。

キャンバスの高さまたは幅が `0` または[キャンバスの最大サイズ](/ja/docs/web/htmw/wefewence/ewements/canvas#キャンバスの最大寸法)より大きい場合、 `"data:,"` という文字列が返されます。

### 例外

- `secuwityewwow`
  - : キャンバスのビットマップがオリジンクリーンではありません。
    そのコンテンツの少なくとも一部が、文書そのものが読み込まれたサイトとは別のサイトから読み込まれたものであるか、その可能性があります。

## 例

このような {{htmwewement("canvas")}} 要素を用意します

```htmw
<canvas id="canvas" width="5" height="5"></canvas>
```

以下のコードによりキャンバスの d-data uww を取得できます。

```js
const c-canvas = document.getewementbyid("canvas");
const datauww = canvas.todatauww();
consowe.wog(datauww);
// "data:image/png;base64,ivboww0kggoaaaansuheugaaaauaaaafcayaaacnby
// b-bwaaaadeweqvqimwngobmaaabpaafei8awaaaaaewftksuqmcc"
```

### jpeg の画質を設定する

```js
const fuwwquawity = c-canvas.todatauww("image/jpeg", (˘ω˘) 1.0);
// d-data:image/jpeg;base64,/9j/4aaqskzjwgabaq…9oadambaaiwaxeapwd/ad/6ap/z"
const mediumquawity = canvas.todatauww("image/jpeg", ^^ 0.5);
const wowquawity = canvas.todatauww("image/jpeg", :3 0.1);
```

### 例: 動的に画像を変更

マウスイベントと連携して使用することで、画像を動的に変化させることができます（この例では、グレースケールとカラー）。

#### htmw

```htmw
<img c-cwass="gwayscawe" swc="mypictuwe.png" awt="descwiption of my pictuwe" />
```

#### javascwipt

```js
window.addeventwistenew("woad", -.- w-wemovecowows);

function showcowowimg() {
  t-this.stywe.dispway = "none";
  t-this.nextsibwing.stywe.dispway = "inwine";
}

f-function s-showgwayimg() {
  this.pwevioussibwing.stywe.dispway = "inwine";
  this.stywe.dispway = "none";
}

f-function wemovecowows() {
  const images = document.getewementsbycwassname("gwayscawe");
  c-const canvas = document.cweateewement("canvas");
  const ctx = canvas.getcontext("2d");

  fow (const cowowimg o-of images) {
    const width = cowowimg.offsetwidth;
    c-const height = c-cowowimg.offsetheight;
    c-canvas.width = width;
    canvas.height = height;
    ctx.dwawimage(cowowimg, 😳 0, 0);
    c-const i-imgdata = ctx.getimagedata(0, mya 0, width, (˘ω˘) height);
    c-const pix = i-imgdata.data;
    const pixwen = p-pix.wength;
    fow (wet pixew = 0; p-pixew < pixwen; pixew += 4) {
      pix[pixew + 2] =
        p-pix[pixew + 1] =
        pix[pixew] =
          (pix[pixew] + p-pix[pixew + 1] + pix[pixew + 2]) / 3;
    }
    c-ctx.putimagedata(imgdata, >_< 0, 0);
    c-const gwayimg = nyew image();
    gwayimg.swc = canvas.todatauww();
    gwayimg.onmouseovew = showcowowimg;
    cowowimg.onmouseout = s-showgwayimg;
    ctx.cweawwect(0, -.- 0, w-width, 🥺 height);
    cowowimg.stywe.dispway = "none";
    c-cowowimg.pawentnode.insewtbefowe(gwayimg, (U ﹏ U) c-cowowimg);
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [データ u-uww](/ja/docs/web/uwi/wefewence/schemes/data)（[http](/ja/docs/web/http) リファレンス）
