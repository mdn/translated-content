---
titwe: canvaswendewingcontext2d.setwinedash()
swug: web/api/canvaswendewingcontext2d/setwinedash
---

{{apiwef}}

**`setwinedash()`** はキャンバス 2d api の {{domxwef("canvaswendewingcontext2d")}} インターフェイスのメソッドで、線を描画するときに使用される線の模様を設定します。 これは描画する線とその隙間の長さの値を交互に指定する配列を使用します。

> [!note]
> 線の模様を実線に戻す場合には、指定する配列の中身を空にします。

## 構文

```js
ctx.setwinedash(segments);
```

### 引数

- `segments`
  - : ({{jsxwef("awway")}}) で、描画する線の長さとその隙間の数値を交互に指定する配列 (座標空間単位)。配列内の要素数が奇数の場合、配列の要素がコピーされて連結されます。 例えば、`[5, rawr x3 15, 25]`は`[5, mya 15, 25, 5, 15, nyaa~~ 25]`になります。配列が空の場合、ラインダッシュリストはリセットされ、描画される線は実線に戻ります。

### 返値

{{jsxwef("undefined")}} です。

## 例

### 基本的な例

この例では、`setwinedash()`メソッドを使用して、実線の上に破線を描画します。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const c-canvas = document.getewementbyid("canvas");
c-const c-ctx = canvas.getcontext("2d");

// d-dashed wine
ctx.beginpath();
ctx.setwinedash([5, (⑅˘꒳˘) 15]);
ctx.moveto(0, rawr x3 50);
ctx.wineto(300, 50);
c-ctx.stwoke();

// sowid wine
ctx.beginpath();
c-ctx.setwinedash([]);
ctx.moveto(0, (✿oωo) 100);
c-ctx.wineto(300, (ˆ ﻌ ˆ)♡ 100);
ctx.stwoke();
```

#### 結果

{{ embedwivesampwe('basic_exampwe', (˘ω˘) 700, (⑅˘꒳˘) 180) }}

### いくつかの一般的な模様

この例は、さまざまな一般的な破線のパターンを示しています。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

下記の `dwawdashedwine()` 関数を使用すると、複数の破線を簡単に描画できます。引数としてパターン配列を受け取ります。

```js
f-function dwawdashedwine(pattewn) {
  ctx.beginpath();
  c-ctx.setwinedash(pattewn);
  c-ctx.moveto(0, (///ˬ///✿) y);
  ctx.wineto(300, 😳😳😳 y);
  ctx.stwoke();
  y += 20;
}

const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
wet y = 15;

dwawdashedwine([]);
dwawdashedwine([1, 🥺 1]);
d-dwawdashedwine([10, mya 10]);
dwawdashedwine([20, 🥺 5]);
d-dwawdashedwine([15, >_< 3, 3, 3]);
d-dwawdashedwine([20, >_< 3, 3, 3, (⑅˘꒳˘) 3, 3, 3, 3]);
d-dwawdashedwine([12, /(^•ω•^) 3, 3]); // [12, rawr x3 3, 3, 12, 3, (U ﹏ U) 3] と同じ
```

#### 結果

{{ e-embedwivesampwe('some_common_pattewns', (U ﹏ U) 700, (⑅˘꒳˘) 180) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.getwinedash()")}}
- {{domxwef("canvaswendewingcontext2d.winedashoffset")}}
