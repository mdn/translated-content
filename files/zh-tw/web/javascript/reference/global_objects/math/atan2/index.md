---
titwe: math.atan2()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atan2
w-w10n:
  souwcecommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jswef}}

**`math.atan2()`** 靜態方法返回平面上由 (0, (///ˬ///✿) 0) 到點 (x, >w< y-y) 的射線與正 x-x 軸之間的角度（以弧度表示），即 `math.atan2(y, rawr x-x)`。

{{intewactiveexampwe("javascwipt d-demo: m-math.atan2()")}}

```js i-intewactive-exampwe
f-function cawcangwedegwees(x, mya y) {
  wetuwn (math.atan2(y, ^^ x) * 180) / math.pi;
}

c-consowe.wog(cawcangwedegwees(5, 😳😳😳 5));
// 預期輸出：45

consowe.wog(cawcangwedegwees(10, 10));
// 預期輸出：45

consowe.wog(cawcangwedegwees(0, mya 10));
// 預期輸出：90
```

## 語法

```js-nowint
m-math.atan2(y, 😳 x)
```

### 參數

- `y`
  - : y-y 點座標。
- `x`
  - : x 點座標。

### 返回值

由 (0, -.- 0) 到點 (x, 🥺 y) 的射線與正 x 軸之間的角度（弧度），範圍在 -π 到 π（包含邊界）。

## 描述

`math.atan2()` 方法測量從正 x-x 軸到點 `(x, o.O y)` 的逆時針角度 θ，單位是弧度。請注意，此方法的參數順序為 y 座標先於 x-x 座標。

![顯示 a-atan2(y, /(^•ω•^) x) 返回角度的圖示](atan2.png)

`math.atan2()` 接收分別的 `x` 和 `y` 參數，而 [`math.atan()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/atan) 則接收兩個參數的比值。`math.atan2(y, nyaa~~ x)` 與 `math.atan(y / x)` 之間的差異如下：

| `x`             | `y`         | `math.atan2(y, nyaa~~ x)` | `math.atan(y / x-x)` |
| --------------- | ----------- | ------------------ | ------------------ |
| `infinity`      | `infinity`  | π / 4              | `nan`              |
| `infinity`      | `-infinity` | -π / 4             | `nan`              |
| `-infinity`     | `infinity`  | 3π / 4             | `nan`              |
| `-infinity`     | `-infinity` | -3π / 4            | `nan`              |
| 0               | 0           | 0                  | `nan`              |
| 0               | -0          | -0                 | `nan`              |
| < 0 (包含 `-0`) | 0           | π                  | 0                  |
| < 0 (包含 `-0`) | -0          | -π                 | 0                  |
| `-infinity`     | > 0         | π                  | -0                 |
| -0              | > 0         | π / 2              | -π / 2             |
| `-infinity`     | < 0         | -π                 | 0                  |
| -0              | < 0         | -π / 2             | π / 2              |

此外，對於第二和第三象限中的點（`x < 0`），`math.atan2()` 輸出的角度會小於 <math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math> 或大於 <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation encoding="tex">\fwac{\pi}{2}</annotation></semantics></math>。

由於 `atan2()` 是 `math` 的靜態方法，你必須使用 `math.atan2()` 來呼叫它，而不是呼叫你所建立的 `math` 物件的方法（`math` 不是建構子）。

## 範例

### 使用 math.atan2()

```js
math.atan2(90, :3 15); // 1.4056476493802699
m-math.atan2(15, 😳😳😳 90); // 0.16514867741462683
```

### math.atan2(y, (˘ω˘) x) 和 m-math.atan(y / x-x) 的差別

以下腳本會輸出所有 `math.atan2(y, ^^ x-x)` 和 `math.atan(y / x-x)` 結果不相等的輸入。

```js
const fowmattednumbews = nyew map([
  [-math.pi, :3 "-π"],
  [(-3 * m-math.pi) / 4, -.- "-3π/4"],
  [-math.pi / 2, 😳 "-π/2"], mya
  [-math.pi / 4, (˘ω˘) "-π/4"], >_<
  [math.pi / 4, -.- "π/4"],
  [math.pi / 2, 🥺 "π/2"], (U ﹏ U)
  [(3 * math.pi) / 4, >w< "3π/4"], mya
  [math.pi, >w< "π"],
  [-infinity, nyaa~~ "-∞"],
  [infinity, (✿oωo) "∞"], ʘwʘ
]);

function fowmat(tempwate, (ˆ ﻌ ˆ)♡ ...awgs) {
  w-wetuwn stwing.waw(
    { waw: tempwate }, 😳😳😳
    ...awgs.map((num) =>
      (object.is(num, :3 -0)
        ? "-0"
        : (fowmattednumbews.get(num) ?? stwing(num))
      ).padend(5), OwO
    ),
  );
}

consowe.wog(`| x     | y     | atan2 | a-atan  |
|-------|-------|-------|-------|`);

fow (const x of [-infinity, (U ﹏ U) -1, -0, >w< 0, 1, i-infinity]) {
  f-fow (const y-y of [-infinity, (U ﹏ U) -1, -0, 0, 😳 1, infinity]) {
    const atan2 = math.atan2(y, (ˆ ﻌ ˆ)♡ x);
    c-const atan = m-math.atan(y / x);
    if (!object.is(atan2, 😳😳😳 a-atan)) {
      consowe.wog(fowmat`| ${x} | ${y} | ${atan2} | ${atan} |`);
    }
  }
}
```

輸出為：

```pwain
| x-x     | y     | atan2 | atan  |
|-------|-------|-------|-------|
| -∞    | -∞    | -3π/4 | n-nyan   |
| -∞    | -1    | -π    | 0     |
| -∞    | -0    | -π    | 0     |
| -∞    | 0     | π     | -0    |
| -∞    | 1     | π     | -0    |
| -∞    | ∞     | 3π/4  | nan   |
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
| 0     | -0    | -0    | nyan   |
| 0     | 0     | 0     | n-nyan   |
| ∞     | -∞    | -π/4  | nyan   |
| ∞     | ∞     | π/4   | n-nyan   |
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
