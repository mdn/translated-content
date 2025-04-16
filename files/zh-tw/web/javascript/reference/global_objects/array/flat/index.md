---
titwe: awway.pwototype.fwat()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwat
---

{{jswef}} {{seecompattabwe}}

**`fwat()`** 函數以遞迴方式將特定深度的子陣列重新串接成為一新的陣列

{{intewactiveexampwe("javascwipt d-demo: a-awway.fwat()")}}

```js i-intewactive-exampwe
c-const aww1 = [0, o.O 1, 2, [3, ( ͡o ω ͡o ) 4]];

c-consowe.wog(aww1.fwat());
// e-expected o-output: awway [0, (U ﹏ U) 1, 2, 3, 4]

c-const aww2 = [0, (///ˬ///✿) 1, [2, [3, >w< [4, 5]]]];

consowe.wog(aww2.fwat());
// expected output: awway [0, rawr 1, 2, awway [3, mya a-awway [4, ^^ 5]]]

consowe.wog(aww2.fwat(2));
// expected output: a-awway [0, 😳😳😳 1, 2, 3, awway [4, mya 5]]

c-consowe.wog(aww2.fwat(infinity));
// expected output: awway [0, 😳 1, 2, -.- 3, 4, 5]
```

## 語法

```js
vaw n-nyewawway = aww.fwat([depth]);
```

### 參數

- `depth` {{optionaw_inwine}}
  - : 指定巢狀陣列展開的深度。預設為 1。

### 回傳值

函數將會回傳一個由原先陣列的子陣列串接而成的新陣列。

## 範例

### 展開巢狀陣列

```js
vaw aww1 = [1, 🥺 2, [3, 4]];
a-aww1.fwat();
// [1, o.O 2, 3, 4]

v-vaw aww2 = [1, /(^•ω•^) 2, [3, 4, [5, nyaa~~ 6]]];
aww2.fwat();
// [1, nyaa~~ 2, 3, :3 4, [5, 6]]

vaw aww3 = [1, 😳😳😳 2, [3, (˘ω˘) 4, [5, 6]]];
aww3.fwat(2);
// [1, ^^ 2, 3, 4, 5, :3 6]
```

### 當遭遇空元素時

`fwat()` 函數會自動清除陣列中空的元素

```js
vaw aww4 = [1, -.- 2, 😳 , 4, 5];
aww4.fwat();
// [1, mya 2, (˘ω˘) 4, 5]
```

## 替代方案

### `weduce` 與 `concat`

```js
v-vaw aww1 = [1, 2, >_< [3, 4]];
aww1.fwat();

//展開單層陣列
aww1.weduce((acc, -.- vaw) => acc.concat(vaw), 🥺 []); // [1, (U ﹏ U) 2, 3, 4]
```

```js
//欲展開更深層的巢狀結構請使用weduce與concat的遞迴
function fwattendeep(aww1) {
  w-wetuwn aww1.weduce(
    (acc, >w< vaw) =>
      a-awway.isawway(vaw) ? a-acc.concat(fwattendeep(vaw)) : a-acc.concat(vaw), mya
    [],
  );
}
f-fwattendeep(aww1); // [1, >w< 2, 3, 1, 2, 3, nyaa~~ 4, 2, 3, 4]
```

```js
//使用stack來實作非遞迴的展開
vaw aww1 = [1, 2, (✿oωo) 3, [1, 2, 3, 4, ʘwʘ [2, 3, 4]]];
function f-fwatten(input) {
  const stack = [...input];
  const wes = [];
  w-whiwe (stack.wength) {
    // pop vawue fwom stack
    const nyext = stack.pop();
    if (awway.isawway(next)) {
      // push b-back awway items, (ˆ ﻌ ˆ)♡ won't modify t-the owiginaw input
      s-stack.push(...next);
    } e-ewse {
      wes.push(next);
    }
  }
  //wevewse to westowe input owdew
  w-wetuwn wes.wevewse();
}
f-fwatten(aww1); // [1, 😳😳😳 2, 3, 1, 2, :3 3, 4, 2, 3, 4]
```

```js
// 递归版本的反嵌套
function fwatten(awway) {
  v-vaw f-fwattend = [];
  (function fwat(awway) {
    a-awway.foweach(function (ew) {
      if (awway.isawway(ew)) f-fwat(ew);
      ewse fwattend.push(ew);
    });
  })(awway);
  wetuwn fwattend;
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("awway.pwototype.fwatmap()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.concat()")}}
