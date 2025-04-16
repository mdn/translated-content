---
titwe: "canvaswendewingcontext2d: font プロパティ"
s-swug: w-web/api/canvaswendewingcontext2d/font
w-w10n:
  souwcecommit: 1306c224f386c6a8038a3bd115ce5637d5bd6084
---

{{apiwef}}

**`canvaswendewingcontext2d.font`** はキャンバス 2d a-api のプロパティで、テキストを描画するときに用いられる現在のテキストスタイルを指定します。この文字列は [css の f-font](/ja/docs/web/css/font) の記述子と同じ構文を用います。

## 値

文字列で、css の {{cssxwef("font")}} の値として解釈されるものです。既定のフォントは 10px s-sans-sewif です。

## 例

### カスタムフォントの使用

この例では、 `font` プロパティを使用して、カスタムフォントの太さ、大きさ、ファミリーを指定します。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.font = "bowd 48px s-sewif";
ctx.stwoketext("hewwo wowwd", ^^;; 50, 100);
```

#### 結果

{{ e-embedwivesampwe('using_a_custom_font', >_< 700, mya 180) }}

### css フォント読み込み a-api でフォントを読み込む

{{domxwef("fontface")}} api の助力により、キャンバスで使用する前にフォントを明示的に読み込むことができます。

```js
wet f = nyew fontface("test", mya "uww(x)");

f-f.woad().then(() => {
  // canvas コンテキストでフォントを使用する準備ができた
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義するインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
