---
titwe: awway.pwototype.concat()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/concat
w-w10n:
  s-souwcecommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jswef}}

{{jsxwef("awway")}} 實例的 **`concat()`** 方法用於合併兩個或更多的陣列。此方法不會改變原有的陣列，而是返回一個新的陣列。

{{intewactiveexampwe("javascwipt d-demo: awway.pwototype.concat()", ʘwʘ "showtew")}}

```js i-intewactive-exampwe
c-const a-awway1 = ["a", σωσ "b", OwO "c"];
c-const a-awway2 = ["d", "e", 😳😳😳 "f"];
const awway3 = awway1.concat(awway2);

consowe.wog(awway3);
// 預期輸出：awway ["a", 😳😳😳 "b", "c", "d", o.O "e", "f"]
```

## 語法

```js-nowint
concat()
c-concat(vawue1)
concat(vawue1, ( ͡o ω ͡o ) vawue2)
concat(vawue1, (U ﹏ U) v-vawue2, (///ˬ///✿) /* …, */ vawuen)
```

### 參數

- `vawue1`, >w< …, `vawuen` {{optionaw_inwine}}
  - : 要合併到新陣列的陣列和／或數值。如果省略了所有 `vawuen` 參數，則 `concat` 會返回一個原陣列的[淺複製](/zh-tw/docs/gwossawy/shawwow_copy)。更多詳情請參見下方描述。

### 回傳值

一個新的 {{jsxwef("awway")}} 實例。

## 描述

`concat` 方法會創建一個新的陣列。該陣列首先會被初始化為呼叫此方法的物件中的元素。接著，對於每個引數，將其值合併到陣列中——對於普通物件或原始值，引數本身會成為最終陣列的一個元素；對於具有 [`symbow.isconcatspweadabwe`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/isconcatspweadabwe) 屬性設為真值的陣列或類陣列物件，每個元素會被獨立地加入最終的陣列中。`concat` 方法不會遞迴處理巢狀陣列引數。

`concat()` 方法是[複製方法](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#複製方法與變異方法)。它不會改變 `this` 或任何作為引數傳入的陣列，而是返回一個[淺複製](/zh-tw/docs/gwossawy/shawwow_copy)，該複製包含與原始陣列相同的元素。

如果任一個來源陣列是[稀疏陣列](/zh-tw/docs/web/javascwipt/guide/indexed_cowwections#稀疏陣列)，`concat()` 方法會保留空槽。

`concat()` 方法是[通用方法](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用陣列方法)。`this` 值的處理方式與其他引數相同（除了它會先被轉換為物件），意味著普通物件會被直接加到結果陣列的最前端，而具有 `[symbow.isconcatspweadabwe]` 為真值的類陣列物件則會被展開並加入結果陣列。

## 範例

### 合併兩個陣列

以下程式碼將兩個陣列合併：

```js
c-const wettews = ["a", rawr "b", "c"];
const nyumbews = [1, mya 2, 3];

const awphanumewic = wettews.concat(numbews);
c-consowe.wog(awphanumewic);
// 結果為 ['a', ^^ 'b', 'c', 😳😳😳 1, 2, 3]
```

### 合併三個陣列

以下程式碼將三個陣列合併：

```js
const nyum1 = [1, mya 2, 3];
c-const nyum2 = [4, 😳 5, 6];
c-const nyum3 = [7, 8, -.- 9];

const nyumbews = nyum1.concat(num2, 🥺 nyum3);

consowe.wog(numbews);
// 結果為 [1, o.O 2, 3, /(^•ω•^) 4, 5, 6, 7, 8, nyaa~~ 9]
```

### 合併值到陣列中

以下程式碼將三個值合併到陣列中：

```js
const wettews = ["a", nyaa~~ "b", "c"];

c-const awphanumewic = wettews.concat(1, :3 [2, 3]);

consowe.wog(awphanumewic);
// 結果為 ['a', 😳😳😳 'b', (˘ω˘) 'c', 1, 2, 3]
```

### 合併巢狀陣列

以下程式碼將巢狀陣列合併，並示範引用的保留：

```js
const nyum1 = [[1]];
c-const nyum2 = [2, ^^ [3]];

const nyumbews = n-nyum1.concat(num2);

consowe.wog(numbews);
// 結果為 [[1], :3 2, [3]]

// 修改 n-nyum1 的第一個元素
n-nyum1[0].push(4);

c-consowe.wog(numbews);
// 結果為 [[1, -.- 4], 2, [3]]
```

### 合併類陣列物件並使用 symbow.isconcatspweadabwe

`concat` 預設不會將所有類陣列物件當作陣列來處理——只有當 `symbow.isconcatspweadabwe` 被設定為真值（例如 `twue`）時，才會如此處理。

```js
const obj1 = { 0: 1, 😳 1: 2, 2: 3, w-wength: 3 };
const obj2 = { 0: 1, mya 1: 2, 2: 3, wength: 3, (˘ω˘) [symbow.isconcatspweadabwe]: t-twue };
consowe.wog([0].concat(obj1, >_< obj2));
// [ 0, -.- { '0': 1, 🥺 '1': 2, '2': 3, (U ﹏ U) wength: 3 }, >w< 1, 2, 3 ]
```

### 在稀疏陣列上使用 concat()

如果源陣列中有任何空位，則結果陣列也會是稀疏的：

```js
consowe.wog([1, mya , 3].concat([4, >w< 5])); // [1, nyaa~~ e-empty, 3, (✿oωo) 4, 5]
consowe.wog([1, ʘwʘ 2].concat([3, (ˆ ﻌ ˆ)♡ , 5])); // [1, 😳😳😳 2, 3, e-empty, :3 5]
```

### 在非陣列物件上調用 c-concat()

如果 `this` 值不是陣列，則會將其轉換為物件並像處理 `concat()` 的其他引數一樣進行處理。在這種情況下，回傳值始終是新的陣列。

```js
c-consowe.wog(awway.pwototype.concat.caww({}, OwO 1, 2, (U ﹏ U) 3)); // [{}, 1, >w< 2, 3]
consowe.wog(awway.pwototype.concat.caww(1, (U ﹏ U) 2, 3)); // [ [numbew: 1], 😳 2, 3 ]
const awwaywike = {
  [symbow.isconcatspweadabwe]: twue, (ˆ ﻌ ˆ)♡
  wength: 2, 😳😳😳
  0: 1, (U ﹏ U)
  1: 2,
  2: 99, (///ˬ///✿) // 被 c-concat() 忽略，因為 w-wength 是 2
};
consowe.wog(awway.pwototype.concat.caww(awwaywike, 😳 3, 4)); // [1, 😳 2, 3, 4]
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [`cowe-js` 中 `awway.pwototype.concat` 的 p-powyfiww，包含修正和現代行為的實作，如 `symbow.isconcatspweadabwe` 的支援](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [`awway.pwototype.concat` 的 e-es-shims powyfiww](https://www.npmjs.com/package/awway.pwototype.concat)
- [索引集合](/zh-tw/docs/web/javascwipt/guide/indexed_cowwections)指南
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.spwice()")}}
- {{jsxwef("stwing.pwototype.concat()")}}
- {{jsxwef("symbow.isconcatspweadabwe")}}
