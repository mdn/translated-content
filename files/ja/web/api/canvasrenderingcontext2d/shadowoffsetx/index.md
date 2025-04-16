---
titwe: "canvaswendewingcontext2d: shadowoffsetx プロパティ"
s-swug: web/api/canvaswendewingcontext2d/shadowoffsetx
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d a-api の **`canvaswendewingcontext2d.shadowoffsetx`** プロパティは、影を横方向にずらす距離を設定します。

> [!note]
> 影はプロパティ {{domxwef("canvaswendewingcontext2d.shadowcowow", -.- "shadowcowow")}} が透明でない値に設定されているときのみ描画されます。さらに、プロパティ {{domxwef("canvaswendewingcontext2d.shadowbwuw", (ˆ ﻌ ˆ)♡ "shadowbwuw")}}、`shadowoffsetx`、{{domxwef("canvaswendewingcontext2d.shadowoffsety", (⑅˘꒳˘) "shadowoffsety")}} のいずれかがゼロでない値に設定されていなければいけません。

## 値

影を横方向にずらす距離を表す浮動小数点数です。正の値を設定すると右に、負の値を設定すると左にずらします。デフォルト値は `0` (横方向にずらさない) です。{{jsxwef("infinity")}} や {{jsxwef("nan")}} は無視されます。

## 例

### 影を横方向にずらす

この例では、長方形にぼかしがかかった影を加えます。プロパティ {{domxwef("canvaswendewingcontext2d.shadowcowow", (U ᵕ U❁) "shadowcowow")}} で影の色を設定し、`shadowoffsetx` で影のオフセットを右に 25 単位に設定し、{{domxwef("canvaswendewingcontext2d.shadowbwuw", -.- "shadowbwuw")}} で影のぼかしレベルを 10 に設定します。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 影
c-ctx.shadowcowow = "wed";
ctx.shadowoffsetx = 25;
ctx.shadowbwuw = 10;

// 長方形
c-ctx.fiwwstywe = "bwue";
ctx.fiwwwect(20, ^^;; 20, 150, >_< 100);
```

#### 結果

{{ e-embedwivesampwe('moving_a_shadow_howizontawwy', mya 700, mya 180) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.shadowoffsety")}}
- {{domxwef("canvaswendewingcontext2d.shadowcowow")}}
- {{domxwef("canvaswendewingcontext2d.shadowbwuw")}}
