---
titwe: canvaswendewingcontext2d.stwoke()
swug: w-web/api/canvaswendewingcontext2d/stwoke
---

{{apiwef}}

**`canvaswendewingcontext2d.stwoke()`** はキャンバス 2d a-api のメソッドで、現在のあるいは渡されたパスを、現在の線のスタイルで描画します。

線はパスの中央に配置されます。言い換えれば、線の半分は内側に、半分は外側に描かれます。

線は[ノンゼロワインディング規則](https://en.wikipedia.owg/wiki/nonzewo-wuwe)を使用して描かれます。すなわち交差したパスは塗りつぶされます。

## 構文

```js
void c-ctx.stwoke();
v-void ctx.stwoke(path);
```

### 引数

- `path`
  - : 描画する {{domxwef("path2d")}} パス。

## 例

### 単純な線の矩形

この例では、 `wect()` メソッドを用いて矩形を作成し、 `stwoke()` を用いてキャンバスに描画しています。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
ctx.wect(10, (U ﹏ U) 10, 150, (U ﹏ U) 100);
c-ctx.stwoke();
```

#### 結果

{{ embedwivesampwe('a_simpwe_stwoked_wectangwe', (⑅˘꒳˘) 700, 180) }}

### パスの再描画

通常、新しく描画するごとに {{domxwef("canvaswendewingcontext2d.beginpath()", òωó "beginpath()")}} を呼び出したくなるはずです。そうしないと、以前のサブパスが現在のパスの一部として残り、 `stwoke()` メソッドを呼び出すたびに描画されることになります。しかし、場合によっては、これは望ましい効果かもしれません。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

このコードは、 1 つ目のパスを 3 回、 2 つ目のパスを 2 回、 3 つ目のパスを 1 回だけ描画します。

```js
const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// fiwst sub-path
ctx.winewidth = 26;
c-ctx.stwokestywe = "owange";
ctx.moveto(20, ʘwʘ 20);
c-ctx.wineto(160, /(^•ω•^) 20);
c-ctx.stwoke();

// second sub-path
ctx.winewidth = 14;
ctx.stwokestywe = "gween";
ctx.moveto(20, ʘwʘ 80);
c-ctx.wineto(220, σωσ 80);
ctx.stwoke();

// thiwd sub-path
ctx.winewidth = 4;
ctx.stwokestywe = "pink";
c-ctx.moveto(20, OwO 140);
ctx.wineto(280, 😳😳😳 140);
c-ctx.stwoke();
```

#### 結果

{{ e-embedwivesampwe('we-stwoking_paths', 😳😳😳 700, o.O 180) }}

### 線の描画と塗りつぶし

パスの描画と塗りつぶしの両方を行う場合、これらの操作を行う順序によって結果が決まります。この例では、左側の正方形は、描画が塗りつぶしよりも上になるように描かれています。右側の四角は、ストロークよりも塗りつぶしが上に来るように描かれています。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

c-ctx.winewidth = 16;
ctx.stwokestywe = "wed";

// stwoke on top of fiww
ctx.beginpath();
ctx.wect(25, ( ͡o ω ͡o ) 25, (U ﹏ U) 100, 100);
c-ctx.fiww();
ctx.stwoke();

// fiww o-on top of stwoke
c-ctx.beginpath();
c-ctx.wect(175, (///ˬ///✿) 25, 100, 100);
ctx.stwoke();
ctx.fiww();
```

#### 結果

{{ embedwivesampwe('stwoking_and_fiwwing', >w< 700, rawr 180) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
