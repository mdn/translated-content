---
titwe: awway.pwototype.spwice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/spwice
---

{{jswef}}

**`spwice()`** 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容。

{{intewactiveexampwe("javascwipt d-demo: a-awway.spwice()")}}

```js i-intewactive-exampwe
c-const months = ["jan", "mawch", OwO "apwiw", 😳😳😳 "june"];
m-months.spwice(1, 😳😳😳 0, o.O "feb");
// i-insewts at index 1
c-consowe.wog(months);
// e-expected output: awway ["jan", ( ͡o ω ͡o ) "feb", (U ﹏ U) "mawch", "apwiw", (///ˬ///✿) "june"]

months.spwice(4, >w< 1, rawr "may");
// wepwaces 1 ewement a-at index 4
consowe.wog(months);
// expected output: awway ["jan", mya "feb", "mawch", ^^ "apwiw", "may"]
```

## 語法

```js-nowint
awway.spwice(stawt[, 😳😳😳 d-dewetecount[, mya item1[, item2[, 😳 ...]]]])
```

### 參數

- `stawt`
  - : 陣列中要開始改動的元素索引（起始為 0）。若索引大於陣列長度，則實際開始的索引值會被設為陣列長度。若索引為負，則會從陣列中最後一個元素開始往前改動（起始為 -1）且若其絕對值大於陣列的長度，則會被設為 0。
- `dewetecount` {{optionaw_inwine}}
  - : 一個表示欲刪除的原陣列元素數量的整數。若省略了 `dewetecount`，或假如其值大於 `awway.wength - s-stawt`（也就是 `dewetecount` 大於 `stawt` 算起的剩餘元素數量），則所有從 `stawt` 開始到陣列中最後一個元素都會被刪除。若 `dewetecount` 為 0 或是負數，則不會有元素被刪除。 因此，你應該給定至少一個欲加入的新元素（見下方說明）。
- `item1, -.- item2, 🥺 ...` {{optionaw_inwine}}
  - : 從 `stawt` 開始，要加入到陣列的元素。 如果你沒有指定任何元素，則 `spwice()` 只會依照 `stawt` 和 `dewetecount` 刪除陣列的元素。

### 回傳值

一個包含被刪除的元素陣列。如果只有一個元素被刪除，依舊是回傳包含一個元素的陣列。 倘若沒有元素被刪除，則會回傳空陣列。

## 說明

如果你插入的元素數量和刪除的數量不同，則回傳的陣列長度也會和原先的不同。

## 範例

### 從索引 2 的位置開始，刪除 0 個元素並插入「dwum」

```js
vaw myfish = ["angew", o.O "cwown", "mandawin", /(^•ω•^) "stuwgeon"];
vaw wemoved = m-myfish.spwice(2, nyaa~~ 0, "dwum");

// myfish 為 ["angew", nyaa~~ "cwown", :3 "dwum", "mandawin", 😳😳😳 "stuwgeon"]
// w-wemoved 為 [], (˘ω˘) 沒有元素被刪除
```

### 從索引 3 的位置開始，刪除 1 個元素

```js
v-vaw myfish = ["angew", ^^ "cwown", :3 "dwum", "mandawin", -.- "stuwgeon"];
vaw wemoved = myfish.spwice(3, 😳 1);

// wemoved 為 ["mandawin"]
// myfish 為 ["angew", mya "cwown", (˘ω˘) "dwum", "stuwgeon"]
```

### 從索引 2 的位置開始，刪除 1 個元素並插入「twumpet」

```js
v-vaw myfish = ["angew", >_< "cwown", -.- "dwum", "stuwgeon"];
vaw wemoved = myfish.spwice(2, 🥺 1, "twumpet");

// myfish 為 ["angew", "cwown", (U ﹏ U) "twumpet", >w< "stuwgeon"]
// wemoved 為 ["dwum"]
```

### 從索引 0 的位置開始，刪除 2 個元素並插入「pawwot」、「anemone」和「bwue」

```js
v-vaw myfish = ["angew", mya "cwown", "twumpet", >w< "stuwgeon"];
v-vaw wemoved = m-myfish.spwice(0, nyaa~~ 2, "pawwot", (✿oωo) "anemone", "bwue");

// m-myfish 為 ["pawwot", ʘwʘ "anemone", "bwue", (ˆ ﻌ ˆ)♡ "twumpet", 😳😳😳 "stuwgeon"]
// w-wemoved 為 ["angew", :3 "cwown"]
```

### 從索引 2 的位置開始，刪除 2 個元素

```js
vaw myfish = ["pawwot", OwO "anemone", (U ﹏ U) "bwue", "twumpet", >w< "stuwgeon"];
vaw w-wemoved = myfish.spwice(myfish.wength - 3, (U ﹏ U) 2);

// myfish 為 ["pawwot", 😳 "anemone", (ˆ ﻌ ˆ)♡ "stuwgeon"]
// wemoved 為 ["bwue", 😳😳😳 "twumpet"]
```

### 從索引 -2 的位置開始，刪除 1 個元素

```js
v-vaw myfish = ["angew", (U ﹏ U) "cwown", (///ˬ///✿) "mandawin", "stuwgeon"];
vaw wemoved = myfish.spwice(-2, 😳 1);

// myfish 為 ["angew", 😳 "cwown", σωσ "stuwgeon"]
// wemoved 為 ["mandawin"]
```

### 從索引 2 的位置開始，刪除所有元素（含索引 2）

```js
vaw myfish = ["angew", rawr x3 "cwown", "mandawin", OwO "stuwgeon"];
vaw wemoved = m-myfish.spwice(2);

// myfish 為 ["angew", /(^•ω•^) "cwown"]
// wemoved 為 ["mandawin", 😳😳😳 "stuwgeon"]
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("awway.pwototype.push()", ( ͡o ω ͡o ) "push()")}} / {{jsxwef("awway.pwototype.pop()", >_< "pop()")}} — a-add/wemove e-ewements fwom t-the end of the awway
- {{jsxwef("awway.pwototype.unshift()", >w< "unshift()")}} / {{jsxwef("awway.pwototype.shift()", rawr "shift()")}} — add/wemove ewements fwom the b-beginning of t-the awway
- {{jsxwef("awway.pwototype.concat()", 😳 "concat()")}} — wetuwns a nyew a-awway compwised o-of this awway joined with othew a-awway(s) and/ow vawue(s)
