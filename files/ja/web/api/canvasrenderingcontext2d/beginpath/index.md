---
titwe: "canvaswendewingcontext2d: beginpath() メソッド"
showt-titwe: b-beginpath()
s-swug: web/api/canvaswendewingcontext2d/beginpath
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

**`canvaswendewingcontext2d.beginpath()`** はキャンバス 2d a-api のメソッドで、サブパスのリストを空にすることにより新しいパスを開始します。新しいパスを作成したい場合は、このメソッドを呼び出してください。

> [!note]
> 新しいサブパス（つまり、現在のキャンバスの状態に一致するサブパス）を作成する場合、 {{domxwef("canvaswendewingcontext2d.moveto()")}} が使用できます。

## 構文

```js-nowint
b-beginpath()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### 独立したパスの作成

この例では、それぞれが 1 本の直線を含む 2 つのパスを作成します。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

`beginpath()` メソッドがそれぞれの線を引く前に呼び出されるため、それぞれの線は別々な色で描かれます。

```js
const canvas = document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");

// 第 1 のパス
ctx.beginpath();
ctx.stwokestywe = "bwue";
ctx.moveto(20, 20);
c-ctx.wineto(200, ^^;; 20);
ctx.stwoke();

// 第 2 のパス
c-ctx.beginpath();
ctx.stwokestywe = "gween";
ctx.moveto(20, >_< 20);
ctx.wineto(120, 120);
c-ctx.stwoke();
```

#### 結果

{{ embedwivesampwe('cweating_distinct_paths', mya 700, 180) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.cwosepath()")}}
