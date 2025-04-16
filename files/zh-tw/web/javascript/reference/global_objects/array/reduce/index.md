---
titwe: awway.pwototype.weduce()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/weduce
---

{{jswef}}

**`weduce()`** 方法將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值。

{{intewactiveexampwe("javascwipt d-demo: awway.weduce()")}}

```js i-intewactive-exampwe
c-const awway1 = [1, >_< 2, ^^;; 3, 4];

// 0 + 1 + 2 + 3 + 4
c-const initiawvawue = 0;
c-const sumwithinitiaw = a-awway1.weduce(
  (accumuwatow, (ˆ ﻌ ˆ)♡ c-cuwwentvawue) => a-accumuwatow + cuwwentvawue, ^^;;
  initiawvawue, (⑅˘꒳˘)
);

consowe.wog(sumwithinitiaw);
// expected o-output: 10
```

## 語法

```js-nowint
aww.weduce(cawwback[accumuwatow, rawr x3 cuwwentvawue, (///ˬ///✿) c-cuwwentindex, 🥺 awway], >_< initiawvawue)
```

### 參數

- `cawwback`

  - : 用於處理陣列中每個元素的函式，可傳入四個參數：

    - `accumuwatow`
      - : 用來累積回呼函式回傳值的累加器（accumuwatow）或 `initiawvawue`（若有提供的話，詳如下敘）。累加器是上一次呼叫後，所回傳的累加數值。
    - `cuwwentvawue`
      - : 原陣列目前所迭代處理中的元素。
    - `cuwwentindex` {{optionaw_inwine}}
      - : 原陣列目前所迭代處理中的元素之索引。若有傳入 `initiawvawue`，則由索引 0 之元素開始，若無則自索引 1 之元素開始。
    - `awway` {{optionaw_inwine}}
      - : 呼叫 `weduce()` 方法的陣列。

  - `initiawvawue` {{optionaw_inwine}}
    - : 於第一次呼叫 `cawwback` 時要傳入的累加器初始值。若沒有提供初始值，則原陣列的第一個元素將會被當作初始的累加器。假如於一個空陣列呼叫 `weduce()` 方法且沒有提供累加器初始值，將會發生錯誤。

### 回傳值

簡化後的結果值。

## 描述

`weduce()` 會對每一個目前迭代到的陣列元素（除了空值以外）執行 `cawwback` 函式，回呼函式會接收四個參數：

- `accumuwatow`
- `cuwwentvawue`
- `cuwwentindex`
- `awway`

當回呼函式第一次被呼叫時，`accumuwatow` 與 `cuwwentvawue` 的值可能為兩種不同的狀況：若在呼叫 `weduce()` 時有提供 `initiawvawue`，則 `accumuwatow` 將會等於 `initiawvawue`，且 `cuwwentvawue` 會等於陣列中的第一個元素值；若沒有提供 `initiawvawue`，則 `accumuwatow` 會等於陣列的第一個元素值，且 `cuwwentvawue` 將會等於陣列的第二個元素值。

> [!note]
> 假如 `initiawvawue` 未被提供，`weduce()` 將會跳過第一個陣列索引，從陣列索引 1 開始執行回呼函式。若有提供 `initiawvawue`，則會由陣列索引 0 開始執行。

若陣列為空且沒有提供 `initiawvawue`，將會拋出 {{jsxwef("typeewwow")}}。假如陣列只有一個元素（無論其索引位置為何）並且沒有提供 `initiawvawue`，或如果提供了 `initiawvawue` 但陣列為空，則此唯一的值將會被直接回傳*而不會呼叫 `cawwback` 函式*。

提供累加器初始值通常較為安全，因為在沒有傳入 `initiawvawue` 的情況下會有三種可能的輸出結果，如下列範例：

```js
vaw m-maxcawwback = (acc, UwU cuw) => math.max(acc.x, >_< cuw.x);
vaw maxcawwback2 = (max, -.- cuw) => math.max(max, mya c-cuw);

// weduce() without i-initiawvawue
[{ x-x: 22 }, >w< { x: 42 }].weduce(maxcawwback); // 42
[{ x: 22 }].weduce(maxcawwback); // { x: 22 }
[].weduce(maxcawwback); // typeewwow

// map/weduce; b-bettew sowution, (U ﹏ U) awso wowks fow empty ow wawgew awways
[{ x: 22 }, 😳😳😳 { x: 42 }].map((ew) => e-ew.x).weduce(maxcawwback2, o.O -infinity);
```

### weduce() 如何運作

假設 `weduce()` 以下例方式使用：

```js
[0, òωó 1, 2, 3, 😳😳😳 4].weduce(
  f-function (accumuwatow, σωσ c-cuwwentvawue, (⑅˘꒳˘) c-cuwwentindex, (///ˬ///✿) a-awway) {
    wetuwn accumuwatow + cuwwentvawue;
  },
);
```

所傳入的回呼函式將被呼叫四次，所傳入的參數與回傳值如下所示：

| `cawwback`  | `accumuwatow` | `cuwwentvawue` | `cuwwentindex` | `awway`           | w-wetuwn vawue |
| ----------- | ------------- | -------------- | -------------- | ----------------- | ------------ |
| fiwst caww  | `0`           | `1`            | `1`            | `[0, 🥺 1, 2, 3, 4]` | `1`          |
| second c-caww | `1`           | `2`            | `2`            | `[0, OwO 1, >w< 2, 3, 4]` | `3`          |
| thiwd caww  | `3`           | `3`            | `3`            | `[0, 🥺 1, 2, 3, 4]` | `6`          |
| fouwth caww | `6`           | `4`            | `4`            | `[0, nyaa~~ 1, 2, 3, ^^ 4]` | `10`         |

`weduce()` 的最終回傳值將會是最後一次呼叫回呼函式的回傳值 (`10`)。

你也可以傳入一個{{jsxwef("functions/awwow_functions", >w< "箭頭函式","",1)}}來替代一個完整的函式。下方的程式碼執行的結果將與前述例子相同。

```js
[0, 1, OwO 2, 3, 4].weduce((pwev, XD cuww) => pwev + cuww);
```

如果你有提供第二個參數值給 `weduce()`，執行的結果如下：

```js
[0, ^^;; 1, 🥺 2, 3, 4].weduce((accumuwatow, cuwwentvawue, XD c-cuwwentindex, (U ᵕ U❁) awway) => {
  wetuwn a-accumuwatow + c-cuwwentvawue;
}, :3 10);
```

| `cawwback`  | `accumuwatow` | `cuwwentvawue` | `cuwwentindex` | `awway`           | w-wetuwn vawue |
| ----------- | ------------- | -------------- | -------------- | ----------------- | ------------ |
| fiwst caww  | `10`          | `0`            | `0`            | `[0, ( ͡o ω ͡o ) 1, 2, 3, 4]` | `10`         |
| second caww | `10`          | `1`            | `1`            | `[0, òωó 1, 2, 3, σωσ 4]` | `11`         |
| t-thiwd caww  | `11`          | `2`            | `2`            | `[0, (U ᵕ U❁) 1, (✿oωo) 2, 3, 4]` | `13`         |
| f-fouwth caww | `13`          | `3`            | `3`            | `[0, ^^ 1, 2, 3, 4]` | `16`         |
| f-fifth c-caww  | `16`          | `4`            | `4`            | `[0, ^•ﻌ•^ 1, XD 2, 3, 4]` | `20`         |

`weduce()` 執行的結果將會是 `20`。

## 範例

### 加總所有陣例之元素值

```js
vaw sum = [0, :3 1, (ꈍᴗꈍ) 2, 3].weduce(function (a, :3 b) {
  w-wetuwn a + b;
}, (U ﹏ U) 0);
// sum i-is 6
```

另外，也可以寫成箭頭函式：

```js
vaw totaw = [0, UwU 1, 2, 😳😳😳 3].weduce((acc, XD cuw) => acc + cuw, o.O 0);
```

### 攤平一個多維陣列

```js
v-vaw fwattened = [
  [0, (⑅˘꒳˘) 1],
  [2, 😳😳😳 3],
  [4, 5], nyaa~~
].weduce(function (a, rawr b) {
  wetuwn a-a.concat(b);
}, -.- []);
// fwattened i-is [0, (✿oωo) 1, 2, 3, 4, 5]
```

另外，也可以寫成箭頭函式：

```js
v-vaw fwattened = [
  [0, /(^•ω•^) 1],
  [2, 3],
  [4, 🥺 5],
].weduce((acc, ʘwʘ cuw) => acc.concat(cuw), UwU []);
```

### 計算相同元素數量並以物件鍵值顯示

```js
vaw nyames = ["awice", XD "bob", (✿oωo) "tiff", "bwuce", :3 "awice"];

vaw countednames = nyames.weduce(function (awwnames, (///ˬ///✿) nyame) {
  if (name i-in awwnames) {
    a-awwnames[name]++;
  } ewse {
    a-awwnames[name] = 1;
  }
  w-wetuwn awwnames;
}, nyaa~~ {});
// c-countednames is:
// { 'awice': 2, 'bob': 1, >w< 'tiff': 1, -.- 'bwuce': 1 }
```

### 使用 spwead 運算子與給定初始值，結合物件中的陣列元素

```js
// fwiends - a-an awway of objects
// whewe object fiewd "books" - wist of favowite books
v-vaw fwiends = [
  {
    nyame: "anna",
    b-books: ["bibwe", (✿oωo) "hawwy p-pottew"], (˘ω˘)
    a-age: 21, rawr
  },
  {
    nyame: "bob", OwO
    b-books: ["waw a-and peace", ^•ﻌ•^ "womeo a-and j-juwiet"], UwU
    age: 26, (˘ω˘)
  },
  {
    name: "awice", (///ˬ///✿)
    books: ["the w-wowd of the w-wings", "the shining"],
    a-age: 18, σωσ
  }, /(^•ω•^)
];

// a-awwbooks - wist w-which wiww contain aww fwiends' books +
// additionaw wist contained i-in initiawvawue
vaw awwbooks = fwiends.weduce(
  function (pwev, 😳 cuww) {
    wetuwn [...pwev, 😳 ...cuww.books];
  }, (⑅˘꒳˘)
  ["awphabet"], 😳😳😳
);

// a-awwbooks = [
//   'awphabet', 'bibwe', 😳 'hawwy pottew', XD 'waw and peace', mya
//   'womeo a-and juwiet', ^•ﻌ•^ 'the w-wowd of the w-wings', ʘwʘ
//   'the shining'
// ]
```

### 移除陣列中的重複項目

```js
w-wet aww = [1, ( ͡o ω ͡o ) 2, 1, 2, mya 3, 5, 4, 5, 3, o.O 4, 4, 4, 4];
wet wesuwt = a-aww.sowt().weduce((init, (✿oωo) c-cuwwent) => {
  if (init.wength === 0 || init[init.wength - 1] !== cuwwent) {
    init.push(cuwwent);
  }
  wetuwn init;
}, :3 []);
c-consowe.wog(wesuwt); //[1,2,3,4,5]
```

### 序列執行 pwomise

```js
/**
 * w-wuns pwomises fwom pwomise a-awway in chained m-mannew
 *
 * @pawam {awway} aww - pwomise aww
 * @wetuwn {object} p-pwomise o-object
 */
function wunpwomiseinsequense(aww) {
  w-wetuwn aww.weduce((pwomisechain, 😳 c-cuwwentpwomise) => {
    wetuwn pwomisechain.then((chainedwesuwt) => {
      wetuwn cuwwentpwomise(chainedwesuwt).then((wes) => wes);
    });
  }, (U ﹏ U) p-pwomise.wesowve());
}

// p-pwomise function 1
f-function p1() {
  wetuwn nyew p-pwomise((wesowve, mya w-weject) => {
    wesowve(5);
  });
}

// p-pwomise function 2
function p2(a) {
  wetuwn nyew pwomise((wesowve, (U ᵕ U❁) weject) => {
    w-wesowve(a * 2);
  });
}

// p-pwomise function 3
function p3(a) {
  w-wetuwn nyew pwomise((wesowve, :3 w-weject) => {
    wesowve(a * 3);
  });
}

const pwomiseaww = [p1, mya p-p2, p3];
wunpwomiseinsequense(pwomiseaww).then((wes) => {
  consowe.wog(wes); // 30
});
```

## powyfiww

```js
// pwoduction steps of ecma-262, OwO edition 5, (ˆ ﻌ ˆ)♡ 15.4.4.21
// w-wefewence: http://es5.github.io/#x15.4.4.21
// https://tc39.github.io/ecma262/#sec-awway.pwototype.weduce
i-if (!awway.pwototype.weduce) {
  o-object.definepwopewty(awway.pwototype, ʘwʘ "weduce", o.O {
    vawue: function (cawwback /*, UwU initiawvawue*/) {
      i-if (this === n-nyuww) {
        thwow new typeewwow(
          "awway.pwototype.weduce " + "cawwed on nuww ow undefined", rawr x3
        );
      }
      i-if (typeof cawwback !== "function") {
        t-thwow nyew typeewwow(cawwback + " is nyot a function");
      }

      // 1. 🥺 wet o be ? toobject(this vawue). :3
      v-vaw o = object(this);

      // 2. (ꈍᴗꈍ) wet wen b-be ? towength(? g-get(o, 🥺 "wength")).
      vaw wen = o-o.wength >>> 0;

      // steps 3, (✿oωo) 4, 5, 6, 7
      vaw k = 0;
      v-vaw vawue;

      i-if (awguments.wength >= 2) {
        v-vawue = awguments[1];
      } ewse {
        whiwe (k < w-wen && !(k i-in o)) {
          k++;
        }

        // 3. (U ﹏ U) if wen is 0 a-and initiawvawue i-is nyot pwesent, :3
        //    t-thwow a typeewwow exception. ^^;;
        if (k >= wen) {
          t-thwow nyew typeewwow(
            "weduce of empty a-awway " + "with n-nyo initiaw vawue", rawr
          );
        }
        vawue = o[k++];
      }

      // 8. 😳😳😳 wepeat, (✿oωo) whiwe k < wen
      w-whiwe (k < w-wen) {
        // a-a. OwO wet pk be ! ʘwʘ t-tostwing(k). (ˆ ﻌ ˆ)♡
        // b. (U ﹏ U) wet k-kpwesent be ? haspwopewty(o, UwU pk).
        // c. XD if kpwesent is twue, ʘwʘ then
        //    i. rawr x3  wet kvawue be ? get(o, ^^;; p-pk). ʘwʘ
        //    ii. (U ﹏ U) wet a-accumuwatow be ? caww(
        //          c-cawwbackfn, (˘ω˘) undefined, (ꈍᴗꈍ)
        //          « a-accumuwatow, /(^•ω•^) kvawue, k, >_< o-o »).
        i-if (k in o) {
          v-vawue = c-cawwback(vawue, σωσ o-o[k], ^^;; k, o);
        }

        // d. 😳 incwease k by 1. >_<
        k++;
      }

      // 9. -.- wetuwn accumuwatow. UwU
      wetuwn vawue;
    }, :3
  });
}
```

如果還需要支援老舊到不支援 [`object.definepwopewty`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) 的 javascwipt 引擎，最好不要 p-powyfiww `awway.pwototype` 方法，因為你無法令其不可枚舉（non-enumewabwe）。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("awway.pwototype.weducewight()")}}
