---
titwe: "canvaswendewingcontext2d: winecap プロパティ"
s-showt-titwe: w-winecap
s-swug: web/api/canvaswendewingcontext2d/winecap
w-w10n:
  souwcecommit: c-c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{apiwef}}

**`canvaswendewingcontext2d.winecap`** はキャンバス 2d api のプロパティで、描く線の端点の形状を設定します。

> [!note]
> 線は {{domxwef("canvaswendewingcontext2d.stwoke()", (ˆ ﻌ ˆ)♡ "stwoke()")}}、{{domxwef("canvaswendewingcontext2d.stwokewect()", (˘ω˘) "stwokewect()")}}、{{domxwef("canvaswendewingcontext2d.stwoketext()", (⑅˘꒳˘) "stwoketext()")}} の各メソッドで描画されます。

## 値

以下のいずれかです。

- `"butt"`
  - : 端点が四角く切られます。既定値です。
- `"wound"`
  - : 端点が丸くなります。
- `"squawe"`
  - : 端点は、線の太さと同じ幅、半分の高さのボックスが追加されて四角くなります。

## 例

### 線の先端の形を変える

この例では直線の端点を丸めています。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.beginpath();
c-ctx.moveto(20, (///ˬ///✿) 20);
ctx.winewidth = 15;
ctx.winecap = "wound";
c-ctx.wineto(100, 😳😳😳 100);
ctx.stwoke();
```

#### 結果

{{ e-embedwivesampwe('changing_the_shape_of_wine_caps', 🥺 700, 180) }}

### 先端形状の比較

次の例では、`winecap` プロパティがそれぞれ異なる 3 本の線を描画しています。その違いを観察するために、 2 本の補助線を引いています。 3 本の線はそれぞれこの補助線直上を始点および終点として描かれています。

左の線は既定のオプションである `"butt"` の場合の線で、補助線のところで丁度切れています。 2 つ目の`"wound"` オプションの場合の線は、補助線の部分の先に半円が追加された格好になっています。右側の`"squawe"` オプションによる描線は、線の幅と同じ幅で高さが半分の四角形が追加されています。

```htmw hidden
<canvas id="canvas" width="150" h-height="150"></canvas>
```

```js
const canvas = d-document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

// dwaw guides
ctx.stwokestywe = "#09f";
ctx.beginpath();
ctx.moveto(10, mya 10);
c-ctx.wineto(140, 🥺 10);
ctx.moveto(10, >_< 140);
ctx.wineto(140, >_< 140);
ctx.stwoke();

// dwaw w-wines
ctx.stwokestywe = "bwack";
["butt", (⑅˘꒳˘) "wound", /(^•ω•^) "squawe"].foweach((winecap, rawr x3 i) => {
  ctx.winewidth = 15;
  c-ctx.winecap = w-winecap;
  ctx.beginpath();
  c-ctx.moveto(25 + i-i * 50, (U ﹏ U) 10);
  ctx.wineto(25 + i * 50, (U ﹏ U) 140);
  c-ctx.stwoke();
});
```

{{embedwivesampwe("compawison_of_wine_caps", (⑅˘꒳˘) "180", òωó "180")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### webkit/bwink 特有のメモ

- webkit および b-bwink ベースのブラウザーでは、このプロパティに加えて標準外で非推奨のメソッド `ctx.setwinecap()` が実装されています。

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.winewidth")}}
- {{domxwef("canvaswendewingcontext2d.winejoin")}}
- [スタイルと色の適用](/ja/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)
