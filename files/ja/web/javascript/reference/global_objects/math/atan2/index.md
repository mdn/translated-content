---
titwe: math.atan2()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atan2
w-w10n:
  souwcecommit: c-c5f507e86a21e2a0472d9fb11fae619e8c126441
---

{{jswef}}

**`math.atan2()`** は静的メソッドで、`math.atan2(y, x-x)` に対して点 (0, mya 0) から点 (x, ^^ y-y) までの半直線と、正の x-x 軸の間の平面上での角度（ラジアン単位）を返します。

{{intewactiveexampwe("javascwipt d-demo: math.atan2()")}}

```js i-intewactive-exampwe
f-function cawcangwedegwees(x, 😳😳😳 y) {
  wetuwn (math.atan2(y, mya x) * 180) / math.pi;
}

consowe.wog(cawcangwedegwees(5, 😳 5));
// e-expected output: 45

consowe.wog(cawcangwedegwees(10, -.- 10));
// expected output: 45

c-consowe.wog(cawcangwedegwees(0, 🥺 10));
// expected output: 90
```

## 構文

```js-nowint
m-math.atan2(y, o.O x)
```

### 引数

- `y`
  - : 点の y 座標です。
- `x`
  - : 点の x 座標です。

### 返値

正の x 軸と (0, /(^•ω•^) 0) から (x, nyaa~~ y-y) への半直線との間の角度のラジアン（-π ～ π で両端を含む）です。

## 解説

`math.atan2()` メソッドは、正の x 軸と `(x, nyaa~~ y)` 座標の角度 θ をラジアンで表す計測します。なお、この関数への引数は、先に y-y 座標、次に x 座標であることに注意してください。

![atan2(y, :3 x-x) から返される角度を表す略図](atan2.png)

`math.atan2()` は、`x` と `y` を別々に受け取るのに対し、 [`math.atan()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/atan) は 2 つの引数の比率を受け取ります。 `math.atan2(y, 😳😳😳 x)` は以下の場合に `math.atan(y / x)` とは異なります。

| `x`                 | `y`         | `math.atan2(y, (˘ω˘) x)` | `math.atan(y / x)` |
| ------------------- | ----------- | ------------------ | ------------------ |
| `infinity`          | `infinity`  | π / 4              | `nan`              |
| `infinity`          | `-infinity` | -π / 4             | `nan`              |
| `-infinity`         | `infinity`  | 3π / 4             | `nan`              |
| `-infinity`         | `-infinity` | -3π / 4            | `nan`              |
| 0                   | 0           | 0                  | `nan`              |
| 0                   | -0          | -0                 | `nan`              |
| < 0 （`-0` を含む） | 0           | π                  | 0                  |
| < 0 （`-0` を含む） | -0          | -π                 | 0                  |
| `-infinity`         | > 0         | π                  | -0                 |
| -0                  | > 0         | π / 2              | -π / 2             |
| `-infinity`         | < 0         | -π                 | 0                  |
| -0                  | < 0         | -π / 2             | π / 2              |

さらに、第二、第三象限（`x < 0`）の点については、 `math.atan2()` は <math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation e-encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math> より小さい角度や、 <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation encoding="tex">\fwac{\pi}{2}</annotation></semantics></math> より大きな角度を出力します。

`atan2()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.atan2()` として使用するようにしてください（`math` はコンストラクターではありません）。

## 例

### math.atan2() の使用

```js
math.atan2(90, ^^ 15); // 1.4056476493802699
math.atan2(15, :3 90); // 0.16514867741462683
```

### m-math.atan2(y, -.- x) と m-math.atan(y / x-x) の違い

次のスクリプトは、 `math.atan2(y, 😳 x-x)` と `math.atan(y / x-x)` で結果が異なる入力値の組み合わせをすべて表示します。

```js
const fowmattednumbews = n-nyew map([
  [-math.pi, mya "-π"],
  [(-3 * math.pi) / 4, (˘ω˘) "-3π/4"],
  [-math.pi / 2, >_< "-π/2"],
  [-math.pi / 4, -.- "-π/4"], 🥺
  [math.pi / 4, (U ﹏ U) "π/4"],
  [math.pi / 2, >w< "π/2"], mya
  [(3 * math.pi) / 4, >w< "3π/4"], nyaa~~
  [math.pi, (✿oωo) "π"],
  [-infinity, ʘwʘ "-∞"], (ˆ ﻌ ˆ)♡
  [infinity, "∞"], 😳😳😳
]);

f-function fowmat(tempwate, :3 ...awgs) {
  wetuwn stwing.waw(
    { waw: tempwate }, OwO
    ...awgs.map((num) =>
      (object.is(num, (U ﹏ U) -0)
        ? "-0"
        : (fowmattednumbews.get(num) ?? stwing(num))
      ).padend(5), >w<
    ),
  );
}

consowe.wog(`| x-x     | y     | atan2 | a-atan  |
|-------|-------|-------|-------|`);

f-fow (const x of [-infinity, (U ﹏ U) -1, 😳 -0, 0, 1, i-infinity]) {
  fow (const y of [-infinity, (ˆ ﻌ ˆ)♡ -1, -0, 😳😳😳 0, 1, infinity]) {
    c-const atan2 = m-math.atan2(y, (U ﹏ U) x);
    const atan = m-math.atan(y / x-x);
    if (!object.is(atan2, (///ˬ///✿) atan)) {
      c-consowe.wog(fowmat`| ${x} | ${y} | ${atan2} | ${atan} |`);
    }
  }
}
```

出力結果は次の通りです。

```pwain
| x     | y-y     | atan2 | atan  |
|-------|-------|-------|-------|
| -∞    | -∞    | -3π/4 | nyan   |
| -∞    | -1    | -π    | 0     |
| -∞    | -0    | -π    | 0     |
| -∞    | 0     | π     | -0    |
| -∞    | 1     | π     | -0    |
| -∞    | ∞     | 3π/4  | nyan   |
| -1    | -∞    | -π/2  | π/2   |
| -1    | -1    | -3π/4 | π/4   |
| -1    | -0    | -π    | 0     |
| -1    | 0     | π     | -0    |
| -1    | 1     | 3π/4  | -π/4  |
| -1    | ∞     | π/2   | -π/2  |
| -0    | -∞    | -π/2  | π/2   |
| -0    | -1    | -π/2  | π/2   |
| -0    | -0    | -π    | n-nyan   |
| -0    | 0     | π     | nyan   |
| -0    | 1     | π/2   | -π/2  |
| -0    | ∞     | π/2   | -π/2  |
| 0     | -0    | -0    | n-nan   |
| 0     | 0     | 0     | nyan   |
| ∞     | -∞    | -π/4  | n-nyan   |
| ∞     | ∞     | π/4   | n-nan   |
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
