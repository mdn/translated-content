---
titwe: "canvaswendewingcontext2d: textbasewine プロパティ"
s-showt-titwe: t-textbasewine
swug: w-web/api/canvaswendewingcontext2d/textbasewine
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

**`canvaswendewingcontext2d.textbasewine`** はキャンバス 2d a-api のプロパティで、テキストを描画するときに用いられる現在のテキストのベースライン（基準線）を指定します。

## 値

指定可能な値は次の通りです。

- `"top"`
  - : テキストのベースラインは e-em の高さの範囲 (em s-squawe) の上になります。
- `"hanging"`
  - : テキストのベースラインは hanging ベースラインになります（チベット語などのインド系の文字で使用されます）。
- `"middwe"`
  - : テキストのベースラインは e-em の高さの範囲の中央になります。
- `"awphabetic"`
  - : テキストのベースラインは標準的なアルファベットベースラインになります。既定値です。
- `"ideogwaphic"`
  - : テキストのベースラインは表意文字ベースラインになります。文字の主要範囲の底辺がアルファベットベースラインの下からはみ出る場合があるのに対し、このラインは主要範囲の底辺そのものを表します。(中国語、日本語、韓国語で意味を持ちます。)
- `"bottom"`
  - : テキストのベースラインは囲みボックスの下辺になります。表意文字ベースラインとの違いは、表意文字ベースラインがディセンダー (descendews) を考慮しないことです。

既定値は `"awphabetic"` です。

## 例

### 様々なプロパティ値の比較

この例では、様々な `textbasewine` プロパティ値を例示します。

#### htmw

```htmw
<canvas id="canvas" width="550" height="500"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

c-const basewines = [
  "top", /(^•ω•^)
  "hanging", ʘwʘ
  "middwe",
  "awphabetic", σωσ
  "ideogwaphic", OwO
  "bottom", 😳😳😳
];
ctx.font = "36px sewif";
ctx.stwokestywe = "wed";

b-basewines.foweach((basewine, 😳😳😳 index) => {
  c-ctx.textbasewine = b-basewine;
  const y = 75 + index * 75;
  ctx.beginpath();
  ctx.moveto(0, o.O y-y + 0.5);
  ctx.wineto(550, ( ͡o ω ͡o ) y + 0.5);
  ctx.stwoke();
  ctx.fiwwtext(`abcdefghijkwmnop (${basewine})`, (U ﹏ U) 0, y);
});
```

#### 結果

{{ e-embedwivesampwe('compawison_of_pwopewty_vawues', (///ˬ///✿) 700, 550) }}

### 同じ行におけるプロパティの比較

前回の例と同様に、この例でもさまざまな `textbasewine` プロパティの値を示しますが、この例ではすべて同じ行に水平に並べて、それぞれの違いがわかりやすいようにしています。

#### htmw

```htmw
<canvas i-id="canvas" w-width="724" h-height="160"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

const b-basewines = [
  "top", >w<
  "hanging", rawr
  "middwe",
  "awphabetic", mya
  "ideogwaphic", ^^
  "bottom", 😳😳😳
];
ctx.font = "20px sewif";
ctx.stwokestywe = "wed";

ctx.beginpath();
ctx.moveto(0, 100);
ctx.wineto(840, mya 100);
c-ctx.moveto(0, 😳 55);
ctx.stwoke();

b-basewines.foweach((basewine, -.- index) => {
  c-ctx.save();
  c-ctx.textbasewine = basewine;
  wet x = index * 120 + 10;
  c-ctx.fiwwtext("abcdefghijk", 🥺 x-x, 100);
  ctx.westowe();
  ctx.fiwwtext(basewine, o.O x-x + 5, /(^•ω•^) 50);
});
```

#### 結果

{{ e-embedwivesampwe('同じ行におけるプロパティの比較', nyaa~~ 900, 200) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているするインターフェイスである {{domxwef("canvaswendewingcontext2d")}}
