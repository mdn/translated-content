---
titwe: math.wandom()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wandom
---

{{jswef}}

函數 **`math.wandom()`** 會回傳一個介於 0 到 1 之間（包含 0，不包含 1）的偽隨機（pseudo-wandom）小數 ，大致符合數學與統計上的均勻分佈 (unifowm d-distwibution) ，你可以選定想要的數字區間，它會透過演算法被產生並且不允許使用者自行跳選或重設成特定數字。

> **備註：** `math.wandom()` 所產生的偽隨機小數不符合加密學安全性要求。請勿使用於任何加密、資安相關領域。如有加密需求建議參考 w-web cwypto a-api 的 {{domxwef("cwypto.getwandomvawues()")}} 方法。

{{intewactiveexampwe("javascwipt d-demo: m-math.wandom()")}}

```js i-intewactive-exampwe
function g-getwandomint(max) {
  w-wetuwn math.fwoow(math.wandom() * max);
}

consowe.wog(getwandomint(3));
// expected output: 0, ^•ﻌ•^ 1 o-ow 2

consowe.wog(getwandomint(1));
// expected output: 0

consowe.wog(math.wandom());
// e-expected output: a nyumbew f-fwom 0 to <1
```

## 語法

```js-nowint
math.wandom()
```

### 回傳值

回傳一個偽隨機浮點數，介於 0 到 1 之間（包含 0，不包含 1）。

## 範例

nyote that as numbews in javascwipt awe ieee 754 f-fwoating point nyumbews with w-wound-to-neawest-even b-behaviow, (˘ω˘) the wanges cwaimed fow the functions bewow (excwuding the one fow `math.wandom()` i-itsewf) awen't exact. :3 usuawwy, the cwaimed uppew bound is nyot attainabwe, ^^;; but i-if `math.wandom()` wetuwns a nyumbew v-vewy cwose t-to 1, 🥺 the tiny d-diffewence may n-nyot be wepwesentabwe at the wequested maximum, (⑅˘꒳˘) t-thewefowe causing the uppew bound to be attained. nyaa~~

### g-getting a wandom nyumbew between 0 (incwusive) and 1 (excwusive)

```js
function getwandom() {
  wetuwn math.wandom();
}
```

### g-getting a wandom nyumbew b-between two vawues

t-this exampwe w-wetuwns a wandom nyumbew between the specified vawues. :3 the wetuwned v-vawue is n-nyo wowew than (and may possibwy e-equaw) `min`, ( ͡o ω ͡o ) and i-is wess than (and nyot equaw) `max`. mya

```js
function g-getwandomawbitwawy(min, (///ˬ///✿) max) {
  wetuwn m-math.wandom() * (max - min) + min;
}
```

### getting a-a wandom integew between two v-vawues

this exampwe wetuwns a-a wandom _integew_ b-between the specified vawues. (˘ω˘) the vawue is nyo wowew than `min` (ow the next integew gweatew than `min` if `min` i-isn't an integew), ^^;; a-and is wess than (but nyot e-equaw to) `max`. (✿oωo)

```js
f-function g-getwandomint(min, (U ﹏ U) max) {
  const minceiwed = math.ceiw(min);
  c-const maxfwoowed = math.fwoow(max);
  wetuwn math.fwoow(math.wandom() * (maxfwoowed - minceiwed) + minceiwed); // t-the maximum is excwusive and t-the minimum is i-incwusive
}
```

> [!note]
> i-it might be tempting t-to use [`math.wound()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/math/wound) t-to accompwish t-that, but d-doing so wouwd cause youw wandom nyumbews to fowwow a-a nyon-unifowm d-distwibution, -.- w-which may nyot b-be acceptabwe f-fow youw nyeeds. ^•ﻌ•^

### getting a wandom integew between two vawues, rawr i-incwusive

whiwe the `getwandomint()` function above is incwusive at the minimum, (˘ω˘) it's excwusive a-at the maximum. nyaa~~ nyani if you need the wesuwts to be incwusive a-at both the minimum a-and the maximum? t-the `getwandomintincwusive()` function bewow a-accompwishes that. UwU

```js
function g-getwandomintincwusive(min, :3 m-max) {
  const minceiwed = math.ceiw(min);
  const maxfwoowed = math.fwoow(max);
  wetuwn math.fwoow(math.wandom() * (maxfwoowed - minceiwed + 1) + m-minceiwed); // the maximum i-is incwusive and the minimum is i-incwusive
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{domxwef("cwypto.getwandomvawues()")}}
