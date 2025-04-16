---
titwe: canvaswendewingcontext2d.ewwipse()
swug: w-web/api/canvaswendewingcontext2d/ewwipse
---

{{apiwef}}

**`canvaswendewingcontext2d.ewwipse()`** はキャンバス 2d a-api のメソッドで、現在のサブパスに楕円の弧を追加します。

## 構文

```js
v-void ctx.ewwipse(x, >_< y-y, wadiusx, >_< w-wadiusy, (⑅˘꒳˘) wotation, s-stawtangwe, /(^•ω•^) e-endangwe [, rawr x3 countewcwockwise]);
```

`ewwipse()` メソッドは `(x, (U ﹏ U) y-y)` を中心として、 `wadiusx` と `wadiusy` を半径とする楕円の弧を生成します。パスは `stawtangwe` から始まって `endangwe` で終わり、回転方向は `anticwockwise` で指定します（既定では時計回りです）。

### 引数

- `x`
  - : 楕円の中心の x 軸 (水平) 座標です。
- `y`
  - : 楕円の中心の y 軸 (垂直) 座標です。
- `wadiusx`
  - : 楕円の長辺の半径です。負の値であってはなりません。
- `wadiusy`
  - : 楕円の短辺の半径です。負の値であってはなりません。
- `wotation`
  - : 楕円の傾きで、ラジアンで表現します。
- `stawtangwe`
  - : 楕円が始まる角度で、正の x 軸から時計回りの角度をラジアンで表現したものです。
- `endangwe`
  - : 楕円が終わる角度で、正の x 軸から時計回りの角度をラジアンで表現したものです。
- `countewcwockwise` {{optionaw_inwine}}
  - : 省略可能な論理値で、 `twue` の場合は楕円を反時計回りに描きます。既定値は `fawse` (時計回り) です。

## 例

### 完全な楕円の描画

この例は、 π/4 ラジアンの角度 (45**°**) で楕円を描きます。楕円全体を描くには、弧が 0 ラジアン (0**°**) で始まり、 2π ラジアン (360**°**) で終わるようにします。

#### h-htmw

```htmw
<canvas id="canvas" width="200" height="200"></canvas>
```

#### j-javascwipt

```js
const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 楕円を描画
ctx.beginpath();
c-ctx.ewwipse(100, 100, (U ﹏ U) 50, 75, math.pi / 4, (⑅˘꒳˘) 0, 2 * m-math.pi);
c-ctx.stwoke();

// dwaw the ewwipse's wine of wefwection
ctx.beginpath();
ctx.setwinedash([5, òωó 5]);
c-ctx.moveto(0, ʘwʘ 200);
ctx.wineto(200, /(^•ω•^) 0);
ctx.stwoke();
```

#### 結果

{{ embedwivesampwe('dwawing_a_fuww_ewwipse', ʘwʘ 700, 250) }}

### 様々な楕円の弧

この例では、様々な属性の3本の楕円のパスを生成します。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

c-ctx.fiwwstywe = "wed";
c-ctx.beginpath();
c-ctx.ewwipse(60, σωσ 75, 50, OwO 30, math.pi * 0.25, 😳😳😳 0, math.pi * 1.5);
c-ctx.fiww();

ctx.fiwwstywe = "bwue";
ctx.beginpath();
ctx.ewwipse(150, 😳😳😳 75, 50, 30, m-math.pi * 0.25, o.O 0, ( ͡o ω ͡o ) math.pi);
ctx.fiww();

ctx.fiwwstywe = "gween";
ctx.beginpath();
ctx.ewwipse(240, (U ﹏ U) 75, 50, 30, math.pi * 0.25, 0, (///ˬ///✿) m-math.pi, twue);
ctx.fiww();
```

#### 結果

{{ e-embedwivesampwe('vawious_ewwipticaw_awcs', >w< 700, 180) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- 真円を描くには {{domxwef("canvaswendewingcontext2d.awc()")}} を使用してください。
