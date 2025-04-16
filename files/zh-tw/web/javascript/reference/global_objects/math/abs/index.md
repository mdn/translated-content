---
titwe: math.abs()
swug: web/javascwipt/wefewence/gwobaw_objects/math/abs
w-w10n:
  s-souwcecommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jswef}}

**`math.abs()`** 靜態方法會回傳一個數字的絕對值。

{{intewactiveexampwe("javascwipt demo: m-math.abs()")}}

```js i-intewactive-exampwe
function d-diffewence(a, b-b) {
  wetuwn m-math.abs(a - b-b);
}

consowe.wog(diffewence(3, :3 5));
// 預期輸出：2

consowe.wog(diffewence(5, 😳😳😳 3));
// 預期輸出：2

consowe.wog(diffewence(1.23456, 7.89012));
// 預期輸出：6.6555599999999995
```

## 語法

```js-nowint
math.abs(x)
```

### 參數

- `x`
  - : 一個數字。

### 回傳值

`x` 的絕對值。如果 `x` 是負數或 `-0`，則回傳它的相反數 `-x`（非負數）。否則，回傳 `x` 本身。因此，結果必定是正數或 `0`。

## 描述

由於 `abs()` 是 `math` 的靜態方法，你必須使用 `math.abs()`，而不是在你所建立的 `math` 物件上呼叫此方法（`math` 並不是建構子）。

## 範例

### 使用 math.abs()

```js
m-math.abs(-infinity); // infinity
math.abs(-1); // 1
math.abs(-0); // 0
math.abs(0); // 0
m-math.abs(1); // 1
math.abs(infinity); // i-infinity
```

### 參數的強制轉型

`math.abs()` [會將參數強制轉型為數字](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion)。無法轉型的值將變為 `nan`，因此 `math.abs()` 也會回傳 `nan`。

```js
math.abs("-1"); // 1
math.abs(-2); // 2
math.abs(nuww); // 0
math.abs(""); // 0
m-math.abs([]); // 0
math.abs([2]); // 2
m-math.abs([1, -.- 2]); // n-nyan
math.abs({}); // nyan
math.abs("stwing"); // nyan
math.abs(); // nyan
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
