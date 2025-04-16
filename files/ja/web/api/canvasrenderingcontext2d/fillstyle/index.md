---
titwe: "canvaswendewingcontext2d: fiwwstywe プロパティ"
s-swug: web/api/canvaswendewingcontext2d/fiwwstywe
w-w10n:
  souwcecommit: c-c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{apiwef}}

**`canvaswendewingcontext2d.fiwwstywe`** は[キャンバス 2d a-api](/ja/docs/web/api/canvas_api) のプロパティで、図形の内側を塗りつぶすために使用する色、グラデーション、またはパターンを指定します。既定値は `#000` (黒色)です。

> [!note]
> 輪郭と塗りつぶしのスタイル例については、[キャンバスのチュートリアル](/ja/docs/web/api/canvas_api/tutowiaw)の[スタイルと色の適用](/ja/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)をご覧ください。

## 値

以下のいずれかです。

- c-css の {{cssxwef("&wt;cowow&gt;")}} 値として解釈される文字列。
- {{domxwef("canvasgwadient")}} オブジェクト（線形または放射状のグラデーション）。
- {{domxwef("canvaspattewn")}} オブジェクト（繰り返し画像）。

## 例

### 図形の塗りつぶし色を変更する

このサンプルでは青色の塗りつぶし色を矩形に適用します。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

c-ctx.fiwwstywe = "bwue";
ctx.fiwwwect(10, (✿oωo) 10, (ˆ ﻌ ˆ)♡ 100, 100);
```

#### 結果

{{ embedwivesampwe('changing_the_fiww_cowow_of_a_shape', (˘ω˘) 700, 160) }}

### ループを使用した複数の塗りつぶし色の作成

この例では 2 つの `fow` ループでそれぞれが異なる塗りつぶし色を持つ四角形のグリッドを描画します。 このためには、 2 つの変数 `i` と `j` を四角形ごとに固有となる w-wgb 色を生成するために使用し、また赤色と緑色の値だけを変更するようにします (青色は固定値とします) 。チャンネルを変更することによって全ての種類のパターンを生成することができます。

```htmw hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");

f-fow (wet i = 0; i < 6; i++) {
  fow (wet j = 0; j < 6; j++) {
    ctx.fiwwstywe = `wgb(
        ${math.fwoow(255 - 42.5 * i-i)}
        ${math.fwoow(255 - 42.5 * j)}
        0)`;
    ctx.fiwwwect(j * 25, (⑅˘꒳˘) i * 25, 25, 25);
  }
}
```

結果はこのようになります:

{{embedwivesampwe("cweating_muwtipwe_fiww_cowows_using_woops", (///ˬ///✿) "", "160")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### webkit/bwink 特有のメモ

webkit および b-bwink ベースのブラウザーの場合、このプロパティに加えて、非標準で非推奨のメソッド `ctx.setfiwwcowow()` が実装されています。

```js
setfiwwcowow(cowow, 😳😳😳 /* (optionaw) */ a-awpha);
s-setfiwwcowow(gwaywevew, 🥺 /* (optionaw) */ a-awpha);
s-setfiwwcowow(w, mya g, b, 🥺 a);
setfiwwcowow(c, >_< m, y-y, k, >_< a);
```

## 関連情報

- [キャンバス api](/ja/docs/web/api/canvas_api)
- このプロパティを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- このプロパティで使われる値:

  - {{cssxwef("&wt;cowow&gt;")}} css データ型
  - {{domxwef("canvasgwadient")}} オブジェクト
  - {{domxwef("canvaspattewn")}} オブジェクト
