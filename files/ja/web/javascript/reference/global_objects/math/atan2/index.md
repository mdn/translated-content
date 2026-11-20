---
title: Math.atan2()
short-title: atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
l10n:
  sourceCommit: 0fb5a7e4cc045ba0b1dc453624f196309d9bea10
---

**`Math.atan2()`** は静的メソッドで、`Math.atan2(y, x)` に対して、点 (0, 0) を始点として点 (x, y) を通る半直線と正の x 軸との間の平面上の角度（ラジアン単位）を返します。

{{InteractiveExample("JavaScript デモ: Math.atan2()")}}

```js interactive-example
function calcAngleDegrees(x, y) {
  return (Math.atan2(y, x) * 180) / Math.PI;
}

console.log(calcAngleDegrees(5, 5));
// 予想される結果: 45

console.log(calcAngleDegrees(10, 10));
// 予想される結果: 45

console.log(calcAngleDegrees(0, 10));
// 予想される結果: 90
```

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

正の x 軸と、(0, 0) から (x, y) へ向かう半直線との間のラジアン単位の角度（-π から π まで、両端を含む）です。

## 解説

`Math.atan2()` メソッドは、正の x 軸と、原点から座標 `(x, y)` へ向かう半直線との間で反時計回りに測った角度 θ をラジアン単位で返します。この関数には、先に y 座標、次に x 座標の順に引数を渡すことに注意してください。

![atan2(y, x) から返される角度を表す図](atan2.png)

`Math.atan2()` は `x` と `y` を別々に受け取りますが、[`Math.atan()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/atan) は 2 つの引数の比を受け取ります。`Math.atan2(y, x)` は、以下の場合に `Math.atan(y / x)` とは異なる結果を返します。

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

さらに、第二象限と第三象限（`x < 0`）の点については、`Math.atan2()` は <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> より小さい角度や、<math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> より大きい角度を返します。

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
- CSS {{cssxref("atan2()")}} 関数
