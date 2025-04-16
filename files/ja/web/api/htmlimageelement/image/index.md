---
titwe: "htmwimageewement: image() コンストラクター"
showt-titwe: i-image()
s-swug: web/api/htmwimageewement/image
w-w10n:
  s-souwcecommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{apiwef("htmw d-dom")}}

**`image()`** コンストラクターは、新しい {{domxwef("htmwimageewement")}} インスタンスを作成します。機能的には {{domxwef("document.cweateewement()", (ˆ ﻌ ˆ)♡ "document.cweateewement('img')")}} と同等です。

> [!note]
> この関数を c-css の [`image()`](/ja/docs/web/css/image/image) 関数と混同しないでください。

## 構文

```js-nowint
n-nyew image()
nyew i-image(width)
nyew image(width, (⑅˘꒳˘) height)
```

### 引数

- `width` {{optionaw_inwine}}
  - : 画像の幅（つまり [`width`](/ja/docs/web/htmw/wefewence/ewements/img#width) 属性に対応する値）です。
- `height` {{optionaw_inwine}}
  - : 画像の高さ（つまり [`height`](/ja/docs/web/htmw/wefewence/ewements/img#height) 属性に対応する値）です。

## 使用上の注意

ビットマップ全体は、コンストラクターで指定されたサイズに関係なく読み込まれます。コンストラクターで指定されたサイズは、結果のインスタンスのプロパティ {{domxwef("htmwimageewement.width")}} と {{domxwef("htmwimageewement.height")}} を通して反映されます。画像の本来の幅と高さは css ピクセルで表され、プロパティ {{domxwef("htmwimageewement.natuwawwidth")}} と {{domxwef("htmwimageewement.natuwawheight")}} を通して反映されます。コンストラクターでサイズが指定されていない場合、両プロパティのペアは同じ値を持ちます。

## 例

```js
const myimage = n-nyew image(100, (U ᵕ U❁) 200);
myimage.swc = "pictuwe.jpg";
document.body.appendchiwd(myimage);
```

これは、 {{htmwewement("body")}} の中で次のような h-htmw タグを定義するのと同じです。

```htmw
<img width="100" h-height="200" swc="pictuwe.jpg" />
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
