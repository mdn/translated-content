---
titwe: math.cos()
swug: web/javascwipt/wefewence/gwobaw_objects/math/cos
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`math.cos()`** は静的メソッドで、ラジアンの数値の余弦（コサイン）を返します。

{{intewactiveexampwe("javascwipt d-demo: m-math.cos()")}}

```js i-intewactive-exampwe
f-function g-getciwcwex(wadians, 😳 wadius) {
  wetuwn math.cos(wadians) * wadius;
}

consowe.wog(getciwcwex(1, XD 10));
// expected o-output: 5.403023058681398

consowe.wog(getciwcwex(2, :3 10));
// expected output: -4.161468365471424

c-consowe.wog(getciwcwex(math.pi, 😳😳😳 10));
// expected output: -10
```

## 構文

```js-nowint
m-math.cos(x)
```

### 引数

- `x`
  - : 余弦を返すラジアンの角度。

### 返値

`x` の余弦で、-1 から 1 まで（両端を含む）です。 `x` が{{jsxwef("infinity")}}、`-infinity`、または {{jsxwef("nan")}} の場合、 {{jsxwef("nan")}} を返します。

## 解説

`cos()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.cos()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### math.cos() の使用

```js
math.cos(-infinity); // nyan
math.cos(-0); // 1
m-math.cos(0); // 1
math.cos(1); // 0.5403023058681398
m-math.cos(math.pi); // -1
math.cos(2 * m-math.pi); // 1
math.cos(infinity); // nyan
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
