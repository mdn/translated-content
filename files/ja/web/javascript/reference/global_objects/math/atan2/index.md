---
title: Math.atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
l10n:
  sourceCommit: c5f507e86a21e2a0472d9fb11fae619e8c126441
---

{{JSRef}}

**`Math.atan2()`** は静的メソッドで、`Math.atan2(y, x)` に対して点 (0, 0) から点 (x, y) までの半直線と、正の x 軸の間の平面上での角度（ラジアン単位）を返します。

{{EmbedInteractiveExample("pages/js/math-atan2.html")}}

## 構文

```js-nolint
Math.atan2(y, x)
```

### 引数

- `y`
  - : 点の y 座標です。
- `x`
  - : 点の x 座標です。

### 返値

正の x 軸と (0, 0) から (x, y) への半直線との間の角度のラジアン（-π ～ π で両端を含む）です。

## 解説

`Math.atan2()` メソッドは、正の x 軸と `(x, y)` 座標の角度 θ をラジアンで表す計測します。なお、この関数への引数は、先に y 座標、次に x 座標であることに注意してください。

![atan2(y, x) から返される角度を表す略図](atan2.png)

`Math.atan2()` は、`x` と `y` を別々に受け取るのに対し、 [`Math.atan()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/atan) は 2 つの引数の比率を受け取ります。 `Math.atan2(y, x)` は以下の場合に `Math.atan(y / x)` とは異なります。

| `x`                 | `y`         | `Math.atan2(y, x)` | `Math.atan(y / x)` |
| ------------------- | ----------- | ------------------ | ------------------ |
| `Infinity`          | `Infinity`  | π / 4              | `NaN`              |
| `Infinity`          | `-Infinity` | -π / 4             | `NaN`              |
| `-Infinity`         | `Infinity`  | 3π / 4             | `NaN`              |
| `-Infinity`         | `-Infinity` | -3π / 4            | `NaN`              |
| 0                   | 0           | 0                  | `NaN`              |
| 0                   | -0          | -0                 | `NaN`              |
| < 0 （`-0` を含む） | 0           | π                  | 0                  |
| < 0 （`-0` を含む） | -0          | -π                 | 0                  |
| `-Infinity`         | > 0         | π                  | -0                 |
| -0                  | > 0         | π / 2              | -π / 2             |
| `-Infinity`         | < 0         | -π                 | 0                  |
| -0                  | < 0         | -π / 2             | π / 2              |

さらに、第二、第三象限（`x < 0`）の点については、 `Math.atan2()` は <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> より小さい角度や、 <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> より大きな角度を出力します。

`atan2()` は `Math` の静的メソッドであるため、生成した `Math` オブジェクトのメソッドとしてではなく、常に `Math.atan2()` として使用するようにしてください（`Math` はコンストラクターではありません）。

## 例

### Math.atan2() の使用

```js
Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683
```

### Math.atan2(y, x) と Math.atan(y / x) の違い

次のスクリプトは、 `Math.atan2(y, x)` と `Math.atan(y / x)` で結果が異なる入力値の組み合わせをすべて表示します。

```js
const formattedNumbers = new Map([
  [-Math.PI, "-π"],
  [(-3 * Math.PI) / 4, "-3π/4"],
  [-Math.PI / 2, "-π/2"],
  [-Math.PI / 4, "-π/4"],
  [Math.PI / 4, "π/4"],
  [Math.PI / 2, "π/2"],
  [(3 * Math.PI) / 4, "3π/4"],
  [Math.PI, "π"],
  [-Infinity, "-∞"],
  [Infinity, "∞"],
]);

function format(template, ...args) {
  return String.raw(
    { raw: template },
    ...args.map((num) =>
      (Object.is(num, -0)
        ? "-0"
        : (formattedNumbers.get(num) ?? String(num))
      ).padEnd(5),
    ),
  );
}

console.log(`| x     | y     | atan2 | atan  |
|-------|-------|-------|-------|`);

for (const x of [-Infinity, -1, -0, 0, 1, Infinity]) {
  for (const y of [-Infinity, -1, -0, 0, 1, Infinity]) {
    const atan2 = Math.atan2(y, x);
    const atan = Math.atan(y / x);
    if (!Object.is(atan2, atan)) {
      console.log(format`| ${x} | ${y} | ${atan2} | ${atan} |`);
    }
  }
}
```

出力結果は次の通りです。

```plain
| x     | y     | atan2 | atan  |
|-------|-------|-------|-------|
| -∞    | -∞    | -3π/4 | NaN   |
| -∞    | -1    | -π    | 0     |
| -∞    | -0    | -π    | 0     |
| -∞    | 0     | π     | -0    |
| -∞    | 1     | π     | -0    |
| -∞    | ∞     | 3π/4  | NaN   |
| -1    | -∞    | -π/2  | π/2   |
| -1    | -1    | -3π/4 | π/4   |
| -1    | -0    | -π    | 0     |
| -1    | 0     | π     | -0    |
| -1    | 1     | 3π/4  | -π/4  |
| -1    | ∞     | π/2   | -π/2  |
| -0    | -∞    | -π/2  | π/2   |
| -0    | -1    | -π/2  | π/2   |
| -0    | -0    | -π    | NaN   |
| -0    | 0     | π     | NaN   |
| -0    | 1     | π/2   | -π/2  |
| -0    | ∞     | π/2   | -π/2  |
| 0     | -0    | -0    | NaN   |
| 0     | 0     | 0     | NaN   |
| ∞     | -∞    | -π/4  | NaN   |
| ∞     | ∞     | π/4   | NaN   |
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
