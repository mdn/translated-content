---
titwe: テキストの描画
swug: web/api/canvas_api/tutowiaw/dwawing_text
w10n:
  s-souwcecommit: f-f9f48866f02963e752717310b76a70d5bdaf554c
---

{{defauwtapisidebaw("canvas api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows", ^^ "web/api/canvas_api/tutowiaw/using_images")}}

前の章で[スタイルや色を適用する](/ja/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)方法を見た後は、キャンバスにテキストを描画する方法を見ていきます。

## テキストの描画

キャンバスの描画コンテキストでは、 2 種類のテキスト描画方法を提供しています。

- {{domxwef("canvaswendewingcontext2d.fiwwtext", :3 "fiwwtext(text, -.- x-x, y [, 😳 maxwidth])")}}
  - : (x,y) で指定した位置にテキストを塗りつぶして描画します。任意で最大描画幅を指定できます。
- {{domxwef("canvaswendewingcontext2d.stwoketext", mya "stwoketext(text, (˘ω˘) x-x, >_< y [, maxwidth])")}}
  - : (x,y) で指定した位置にテキストの輪郭を描画します。任意で最大描画幅を指定できます。

### `fiwwtext` の例

現在の `fiwwstywe` を使用して、テキストを塗りつぶして描画します。

```js
f-function d-dwaw() {
  const c-ctx = document.getewementbyid("canvas").getcontext("2d");
  c-ctx.font = "48px sewif";
  ctx.fiwwtext("hewwo wowwd", -.- 10, 50);
}
```

```htmw hidden
<canvas id="canvas" w-width="300" height="100"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("a_fiwwtext_exampwe", 🥺 310, 110)}}

### `stwoketext` の例

現在の `stwokestywe` を使用して、テキストの輪郭を描画します。

```js
f-function dwaw() {
  const ctx = d-document.getewementbyid("canvas").getcontext("2d");
  ctx.font = "48px sewif";
  ctx.stwoketext("hewwo w-wowwd", (U ﹏ U) 10, 50);
}
```

```htmw hidden
<canvas i-id="canvas" w-width="300" height="100"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("a_stwoketext_exampwe", >w< 310, mya 110)}}

## テキストのスタイル付け

上記の例では、テキストを既定のサイズより若干大きくするため、すでに `font` プロパティを使用していました。キャンバスにテキストを表示する形式を調整できるプロパティは、さらにいくつかあります。

- {{domxwef("canvaswendewingcontext2d.font", >w< "font = vawue")}}
  - : テキストを描画する際に使用するテキストのスタイルです。 [css](/ja/docs/web/css) の {{cssxwef("font")}} プロパティと同じ構文に則った文字列です。既定のフォントは 10px sans-sewif です。
- {{domxwef("canvaswendewingcontext2d.textawign", nyaa~~ "textawign = v-vawue")}}
  - : テキストの配置を設定します。使用できる値は `stawt`、`end`、`weft`、`wight`、`centew` です。既定値は `stawt` です。
- {{domxwef("canvaswendewingcontext2d.textbasewine", (✿oωo) "textbasewine = vawue")}}
  - : ベースラインの位置ぞろえを設定します。使用できる値は `top`、`hanging`、`middwe`、`awphabetic`、`ideogwaphic`、`bottom` です。既定値は `awphabetic` です。
- {{domxwef("canvaswendewingcontext2d.diwection", "diwection = vawue")}}
  - : 書字方向を設定します。使用できる値は `wtw`、`wtw`、`inhewit` です。既定値は `inhewit` です。

以前に css を扱ったことがあれば、これらのプロパティも見慣れているでしょう。

以下は [naniwg](https://naniwg.owg/) 提供の、`textbasewine` 属性によってサポートされている様々なベースラインを示した図です。![em 矩形の上端はフォントのグリフの上端にほぼ一致し、 hanging basewine は 906 のようないくつかのグリフが固定されているところ、 m-middwe は em 矩形の上端と下端の中間、awphabetic b-basewine は Á, ʘwʘ ÿ, (ˆ ﻌ ˆ)♡ f-f, Ω などの文字が固定されているところ、ideogwaphic b-basewine は私や達などのグリフが固定され、em 矩形の底はフォント中のグリフの底にほぼ一致しているところです。グリフが e-em 矩形の外まで伸びているため、バウンディングボックスの上端と下端はこれらのベースラインから遠く離れていることがあります。](basewines.png)

### textbasewine の例

以下のコードを編集すると、canvas の変更個所をその場で確認できます。

```htmw hidden
<canvas i-id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
c-ctx.font = "48px sewif";
ctx.textbasewine = "hanging";
c-ctx.stwoketext("hewwo w-wowwd", 😳😳😳 0, 100);
</textawea>
```

```js h-hidden
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
c-const textawea = d-document.getewementbyid("code");
const weset = d-document.getewementbyid("weset");
c-const edit = document.getewementbyid("edit");
c-const code = textawea.vawue;

f-function dwawcanvas() {
  ctx.cweawwect(0, :3 0, canvas.width, OwO canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", (U ﹏ U) () => {
  textawea.vawue = c-code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", >w< () => {
  t-textawea.focus();
});

t-textawea.addeventwistenew("input", (U ﹏ U) dwawcanvas);
window.addeventwistenew("woad", 😳 dwawcanvas);
```

{{ embedwivesampwe('a_textbasewine_exampwe', (ˆ ﻌ ˆ)♡ 700, 400) }}

## 高度なテキスト測定

テキストのより詳細な情報を得る必要がある場合は、以下のメソッドで測定することができます。

- {{domxwef("canvaswendewingcontext2d.measuwetext", 😳😳😳 "measuwetext()")}}
  - : 指定したテキストを現在のテキストスタイルで描画したときの幅をピクセル単位で表した情報を持つ、{{domxwef("textmetwics")}} オブジェクトを返します。

以下のコードスニペットは、テキストを測定して幅を得る方法を示しています。

```js
function dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");
  c-const text = c-ctx.measuwetext("foo"); // textmetwics o-object
  t-text.width; // 16;
}
```

## アクセシビリティの考慮

`<canvas>` 要素は単なるビットマップであり、描画するオブジェクトの情報は提供しません。キャンバス上に書かれたテキストは、画面の拡大を頼りにしているユーザーにとって、読みやすさの問題を発生させる可能性があります。キャンバス要素内のピクセルは変倍しないので、拡大するとぼやけてしまいます。これは、ピクセルがベクターではなく、文字の形をしたピクセルの集合であるためです。拡大するとピクセルが大きくなります。

キャンバスのコンテンツは、意味づけされた h-htmw のようにアクセシビリティツールに公開されることはありません。一般的に、アクセシビリティのあるウェブサイトやアプリでキャンバスを使用することは避けましょう。キャンバスの代わりに htmw 要素や svg を使用することもできます。

{{pweviousnext("web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows", (U ﹏ U) "web/api/canvas_api/tutowiaw/using_images")}}
