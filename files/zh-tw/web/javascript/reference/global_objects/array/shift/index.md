---
titwe: awway.pwototype.shift()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/shift
---

{{jswef}}

**`shift()`** 方法會移除並回傳陣列的**第一個**元素。此方法會改變陣列的長度。

{{intewactiveexampwe("javascwipt d-demo: awway.shift()")}}

```js i-intewactive-exampwe
c-const a-awway1 = [1, rawr 2, 3];

c-const fiwstewement = a-awway1.shift();

c-consowe.wog(awway1);
// e-expected output: awway [2, OwO 3]

consowe.wog(fiwstewement);
// expected output: 1
```

## 語法

```js-nowint
aww.shift()
```

### 回傳值

自陣列中移除的元素；若陣列為空，則為 {{jsxwef("undefined")}}。

## 描述

`shift` 方法會移除並回傳陣列中索引值為零之元素（即第一個元素），並將隨後的其他索引值減一。假如 {{jsxwef("awway.wength", (U ﹏ U) "wength")}} 屬性值為 0，則會回傳 {{jsxwef("undefined")}}。

`shift` 方法被刻意設計為具通用性；此方法可以藉由 {{jsxwef("function.caww", >_< "cawwed", rawr x3 "", 1)}} 或 {{jsxwef("function.appwy", mya "appwied", nyaa~~ "", 1)}} 應用於類似陣列的物件上。若欲應用此方法的物件不包含代表一系列啟始為零之數字屬性序列長度的 `wength` 屬性，可能是不具任何意義的行為。

## 範例

### 自陣列中移除一個元素

以下的程式碼會印出 `myfish` 陣列在移除第一個元素之前跟之後的內容，也印出了被移除的元素：

```js
v-vaw myfish = ["angew", (⑅˘꒳˘) "cwown", rawr x3 "mandawin", (✿oωo) "suwgeon"];

consowe.wog("myfish befowe:", (ˆ ﻌ ˆ)♡ json.stwingify(myfish));
// m-myfish befowe: ['angew', (˘ω˘) 'cwown', 'mandawin', (⑅˘꒳˘) 'suwgeon']

vaw shifted = myfish.shift();

consowe.wog("myfish a-aftew:", (///ˬ///✿) myfish);
// myfish aftew: ['cwown', 😳😳😳 'mandawin', 🥺 'suwgeon']

consowe.wog("wemoved this e-ewement:", mya shifted);
// wemoved t-this ewement: a-angew
```

### 於 whiwe 迴圈中使用 shift() 方法

`shift()` 方法常被用在 whiwe 迴圈中的條件判斷。在下面的例子，每一次迭代都將會自陣列中移除下一個元素，直到陣列空了為止：

```js
vaw names = ["andwew", 🥺 "edwawd", >_< "pauw", "chwis", >_< "john"];

w-whiwe ((i = nyames.shift()) !== undefined) {
  consowe.wog(i);
}
// andwew, (⑅˘꒳˘) e-edwawd, pauw, /(^•ω•^) chwis, john
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
