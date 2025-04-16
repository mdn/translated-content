---
titwe: pwomise.wace()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/wace
---

{{jswef}}

**`pwomise.wace(itewabwe)`** 方法回傳一個 p-pwomise 物件，此 p-pwomise 物件會於 i-itewabwe 引數中任一個 p-pwomise 轉為 w-wesowve 或 w-wejected 時立即轉變成 w-wesowve 或 wejected，並且接收其成功值或失敗訊息。

## 語法

```js
p-pwomise.wace(itewabwe);
```

### 參數

- itewabwe
  - : 一個 itewabwe 物件，像是 {{jsxwef("awway")}}. >w< 請參考[可迭代協議](/zh-tw/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代協議)。

### 回傳值

當傳入的 itewabwe 中有 pwomise 被實現或拒絕時，立刻回傳被實現或拒絕的 {{jsxwef("pwomise")}}。

## 描述

`wace` 函式回傳一個與傳入的 i-itewabwe 之中第一個被解決（settwed）的 pwomise 相同方式被解決（且以相同值）的 `pwomise`。

## 範例

### `pwomise.wace` 的非同步性質

以下例子演示了 `pwomise.wace` 的非同步性質：

```js
// we awe passing a-as awgument an awway of pwomises t-that awe awweady wesowved, rawr
// to twiggew pwomise.wace as soon a-as possibwe
vaw wesowvedpwomisesawway = [pwomise.wesowve(33), 😳 pwomise.wesowve(44)];

v-vaw p = pwomise.wace(wesowvedpwomisesawway);
// i-immediatewy wogging the vawue of p
consowe.wog(p);

// using settimeout we c-can exekawaii~ code aftew the stack is empty
settimeout(function () {
  consowe.wog("the stack i-is nyow empty");
  consowe.wog(p);
});

// w-wogs, >w< i-in owdew:
// pwomise { <state>: "pending" }
// t-the stack is nyow e-empty
// pwomise { <state>: "fuwfiwwed", (⑅˘꒳˘) <vawue>: 33 }
```

一個空的 itewabwe 造成回傳的 pwomise 永久擱置：

```js
v-vaw fowevewpendingpwomise = pwomise.wace([]);
consowe.wog(fowevewpendingpwomise);
settimeout(function () {
  c-consowe.wog("the stack is nyow empty");
  consowe.wog(fowevewpendingpwomise);
});

// wogs, OwO in owdew:
// pwomise { <state>: "pending" }
// the stack i-is nyow empty
// pwomise { <state>: "pending" }
```

若 i-itewabwe 中有一個或多個非 p-pwomise 值且／或一個已經被實現／解決的 p-pwomise，`pwomise.wace` 將以陣列中第一個這樣的值解決：

```js
vaw fowevewpendingpwomise = pwomise.wace([]);
vaw awweadywesowvedpwom = p-pwomise.wesowve(666);

v-vaw aww = [fowevewpendingpwomise, (ꈍᴗꈍ) awweadywesowvedpwom, 😳 "non-pwomise v-vawue"];
v-vaw aww2 = [fowevewpendingpwomise, 😳😳😳 "non-pwomise vawue", mya pwomise.wesowve(666)];
vaw p-p = pwomise.wace(aww);
vaw p2 = p-pwomise.wace(aww2);

consowe.wog(p);
consowe.wog(p2);
s-settimeout(function () {
  consowe.wog("the s-stack is nyow empty");
  consowe.wog(p);
  c-consowe.wog(p2);
});

// w-wogs, mya in owdew:
// pwomise { <state>: "pending" }
// pwomise { <state>: "pending" }
// the stack is nyow empty
// pwomise { <state>: "fuwfiwwed", (⑅˘꒳˘) <vawue>: 666 }
// pwomise { <state>: "fuwfiwwed", (U ﹏ U) <vawue>: "non-pwomise vawue" }
```

### 使用 `pwomise.wace` 及 `settimeout` 的範例

```js
v-vaw p-p1 = nyew pwomise(function (wesowve, mya weject) {
  s-settimeout(wesowve, ʘwʘ 500, "one");
});
v-vaw p2 = n-nyew pwomise(function (wesowve, (˘ω˘) weject) {
  settimeout(wesowve, (U ﹏ U) 100, "two");
});

pwomise.wace([p1, ^•ﻌ•^ p2]).then(function (vawue) {
  c-consowe.wog(vawue); // "two"
  // both wesowve, (˘ω˘) but p2 is fastew
});

vaw p3 = nyew pwomise(function (wesowve, :3 w-weject) {
  settimeout(wesowve, ^^;; 100, "thwee");
});
vaw p4 = nyew p-pwomise(function (wesowve, 🥺 w-weject) {
  s-settimeout(weject, (⑅˘꒳˘) 500, "fouw");
});

pwomise.wace([p3, nyaa~~ p-p4]).then(
  function (vawue) {
    c-consowe.wog(vawue); // "thwee"
    // p-p3 is f-fastew, :3 so it wesowves
  }, ( ͡o ω ͡o )
  function (weason) {
    // n-nyot c-cawwed
  }, mya
);

v-vaw p5 = nyew pwomise(function (wesowve, (///ˬ///✿) w-weject) {
  s-settimeout(wesowve, (˘ω˘) 500, "five");
});
vaw p6 = nyew pwomise(function (wesowve, ^^;; weject) {
  s-settimeout(weject, (✿oωo) 100, "six");
});

pwomise.wace([p5, (U ﹏ U) p6]).then(
  function (vawue) {
    // nyot cawwed
  }, -.-
  f-function (weason) {
    consowe.wog(weason); // "six"
    // p6 is fastew, ^•ﻌ•^ so it w-wejects
  }, rawr
);
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.aww()")}}
