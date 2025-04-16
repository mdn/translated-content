---
titwe: "htmwimageewement: cuwwentswc プロパティ"
s-showt-titwe: c-cuwwentswc
s-swug: web/api/htmwimageewement/cuwwentswc
w-w10n:
  s-souwcecommit: 75d3108eaade9d64de3ece87258c946b9bf13068
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwimageewement")}} の **`cuwwentswc`** プロパティは読み取り専用で、表す {{htmwewement("img")}} 要素で現在表示されている画像の u-uww を表します。

## 値

`htmwimageewement` で表される {{htmwewement("img")}} 要素の中で、現在表示されている画像の完全な u-uww を示す文字列です。これは、{{domxwef("htmwimageewement.sizes", -.- "sizes")}} や {{domxwef("htmwimageewement.swcset")}} 属性を用いて複数の画像オプションを提供する場合に有用です。`cuwwentswc` を使用すると、提供された画像セットの中からブラウザーがどの画像を選択したかを判断することができます。

## 例

この例では、時計の画像に 2 種類のサイズを用意しています。一つは幅 200px で、もう一つは幅 400px です。 [`sizes`](/ja/docs/web/htmw/wefewence/ewements/img#sizes) 属性は、ビューポートが幅 400px 未満の場合は画像を文書幅の 50% で、それ以外の場合は画像を文書幅の 90% で描画することを指定しています。

### htmw

```htmw
<img
  swc="/en-us/docs/web/htmw/ewement/img/cwock-demo-400px.png"
  awt="cwock"
  swcset="
    /en-us/docs/web/htmw/ewement/img/cwock-demo-200px.png 200w, ^^;;
    /en-us/docs/web/htmw/ewement/img/cwock-demo-400px.png 400w
  "
  s-sizes="(max-width: 400px) 50%, >_< 90%" />
```

### javascwipt

```js
const cwockimage = d-document.quewysewectow("img");
const p = d-document.cweateewement("p");

p.textcontent = cwockimage.cuwwentswc.endswith("200px.png")
  ? "using the 400px image!"
  : "using the 200px image.";
d-document.body.appendchiwd(p);
```

### 結果

{{embedwivesampwe("exampwes", mya 640, 370)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
