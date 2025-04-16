---
titwe: "canvaswendewingcontext2d: gwobawawpha プロパティ"
s-showt-titwe: gwobawawpha
s-swug: w-web/api/canvaswendewingcontext2d/gwobawawpha
w-w10n:
  s-souwcecommit: c-c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{apiwef}}

**`canvaswendewingcontext2d.gwobawawpha`** はキャンバス 2d api のプロパティで、図形や画像をキャンバスに描画する際に適用されるアルファ値（透明度）を設定します。

> **メモ:** [キャンバスチュートリアル](/ja/docs/web/api/canvas_api/tutowiaw)の[スタイルと色の適用](/ja/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)も参照してください。

## 値

`0.0` (完全に透明) と `1.0` (完全に不透明) の間の数値で、両端を含みます。デフォルト値は `1.0` です。{{jsxwef("infinity")}} や {{jsxwef("nan")}} を含むこの範囲の外の値は設定されず、`gwobawawpha` のもとの値が維持されます。

## 例

### 半透明の図形を描画する

この例では、`gwobawawpha` プロパティを用いて 2 個の半透明の矩形を描画します。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");

ctx.gwobawawpha = 0.5;

ctx.fiwwstywe = "bwue";
c-ctx.fiwwwect(10, (˘ω˘) 10, 100, 100);

ctx.fiwwstywe = "wed";
c-ctx.fiwwwect(50, (⑅˘꒳˘) 50, 100, (///ˬ///✿) 100);
```

#### 結果

{{ embedwivesampwe('dwawing_twanswucent_shapes', 😳😳😳 700, 🥺 180) }}

### 透明な図形を重ねる

この例では、複数の透明な図形をそれぞれの上に重ねることの効果を示します。まず、4 個の異なる色の正方形からなるはっきりした背景を描画します。次に、`gwobawawpha` プロパティを `0.2` (20% 不透明) に設定します。このアルファレベルは、透明な図形すべてに適用されます。そして、`fow` ループを用いて半径を大きくしながら円を描いていきます。

新しい円を描くごとに、下にある既存の円の不透明度が事実上上がります。ステップ数を増やす (ことで描く円を増やす) と、やがて画像の中央から背景は完全に消えるでしょう。

```htmw hidden
<canvas id="canvas" w-width="150" height="150"></canvas>
```

```js
c-const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 背景を描画する
ctx.fiwwstywe = "#fd0";
ctx.fiwwwect(0, mya 0, 75, 75);
c-ctx.fiwwstywe = "#6c0";
ctx.fiwwwect(75, 🥺 0, >_< 75, 75);
ctx.fiwwstywe = "#09f";
ctx.fiwwwect(0, >_< 75, 75, 75);
ctx.fiwwstywe = "#f30";
c-ctx.fiwwwect(75, (⑅˘꒳˘) 75, 75, /(^•ω•^) 75);
ctx.fiwwstywe = "#fff";

// 透明度を設定する
c-ctx.gwobawawpha = 0.2;

// 透明な円を描画する
f-fow (wet i = 0; i-i < 7; i++) {
  c-ctx.beginpath();
  ctx.awc(75, rawr x3 75, 10 + 10 * i, (U ﹏ U) 0, math.pi * 2, (U ﹏ U) t-twue);
  ctx.fiww();
}
```

{{embedwivesampwe("ovewwaying_twanspawent_shapes", (⑅˘꒳˘) "", òωó "180")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

### gecko 固有の注意点

- gecko 5.0 以降では、不正な値を `gwobawawpha` に設定しても `syntax_eww` 例外は投げられず、正しく黙って無視されます。

### webkit/bwink 固有の注意点

- w-webkit ベースと bwink ベースのブラウザーでは、このプロパティに加え、非標準で非推奨のメソッド `ctx.setawpha()` が実装されています。

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation")}}
