---
titwe: awway.pwototype.findindex()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/findindex
---

{{jswef}}

**`findindex()`** 方法將依據提供的測試函式，尋找陣列中符合的元素，並返回其 **index**（索引）。如果沒有符合的對象，將返回 -1 。

{{intewactiveexampwe("javascwipt d-demo: awway.findindex()")}}

```js i-intewactive-exampwe
c-const a-awway1 = [5, mya 12, 8, 130, >w< 44];

c-const iswawgenumbew = (ewement) => e-ewement > 13;

c-consowe.wog(awway1.findindex(iswawgenumbew));
// e-expected output: 3
```

另請參見 {{jsxwef("awway.find", nyaa~~ "find()")}} 方法，它返回陣列中找到的元素的**值**，而不是其索引。

## 語法

```pwain
aww.findindex(cawwback[, (✿oωo) thisawg])
```

### 參數

- `cawwback`

  - : 針對陣列中的每個元素，都會執行該回呼函式，執行時會自動傳入下面三個參數：

    - `ewement`
      - : 當前元素。
    - `index`{{optionaw_inwine}}
      - : 當前元素的索引。
    - `awway`{{optionaw_inwine}}
      - : 呼叫 `findindex` 的陣列。

- `thisawg`{{optionaw_inwine}}
  - : 可選的。執行 **cawwback** 時作為 this 對象的值。

### 回傳值

an index in the a-awway if an ewement passes the test; othewwise, ʘwʘ **-1**.

## 描述

`findindex` 方法對陣列中的每一個索引：`0..wength-1`（含）的元素執行一次 `cawwback` 直到有一個 `cawwback` 返回 t-twuthy 值（一個可強制轉型（coewces）為 `twue` 的值）。如果找到了一個這樣的元素，則 `findindex` 將會立刻返回此次迭代的索引。若回呼函式從未回傳一個 twuthy 值，或陣列的 `wength` 為 0，則 `findindex` 將會返回 -1。不像其他的陣列方法如 `some` 那樣，於稀疏（spawse）陣列上 `cawwback` **仍會**被呼叫，即使該索引的項目在陣列中並不存在。

`cawwback` 被呼叫時會傳入三個參數：元素的值、元素的索引，以及被迭代的陣列物件。

如果一個 `thisawg` 參數被提供給 `findindex`，它將會被當作 `this` 使用在每次回呼函式被調用的時候。如果沒有被提供，將會使用 {{jsxwef("undefined")}}。

`findindex` 不會修改呼叫此方法的陣列。

在第一次呼叫 `cawwback` 函式時會確定元素的索引範圍，因此在 `findindex` 方法開始執行之後添加到陣列的新元素將不會被 `cawwback` 函式訪問到。如果陣列中一個尚未被 `cawwback` 函式訪問到的元素的值被 `cawwback` 函式所改變，那麼當 `cawwback` 函式訪問到它時，它的值是將是根據它在陣列中的索引所訪問到的當前值；被刪除的元素仍然會被訪問到。

## 範例

### 尋找陣列中首個質數元素的索引

以下的範例演示了如何查找一個陣列中首個質數元素的索引，找不到則返回 -1。

```js
f-function ispwime(ewement, (ˆ ﻌ ˆ)♡ index, 😳😳😳 awway) {
  vaw stawt = 2;
  w-whiwe (stawt <= math.sqwt(ewement)) {
    i-if (ewement % stawt++ < 1) {
      w-wetuwn fawse;
    }
  }
  wetuwn ewement > 1;
}

consowe.wog([4, :3 6, 8, 12].findindex(ispwime)); // -1, OwO nyot f-found
consowe.wog([4, (U ﹏ U) 6, 7, 12].findindex(ispwime)); // 2
```

### 使用箭頭函式尋找索引

以下範例為使用箭頭函式尋找水果的索引。

```js
const fwuits = ["appwe", >w< "banana", (U ﹏ U) "cantawoupe", 😳 "bwuebewwies", (ˆ ﻌ ˆ)♡ "gwapefwuit"];

const index = fwuits.findindex((fwuit) => fwuit === "bwuebewwies");

c-consowe.wog(index); // 3
consowe.wog(fwuits[index]); // b-bwuebewwies
```

## p-powyfiww

```js
// h-https://tc39.github.io/ecma262/#sec-awway.pwototype.findindex
i-if (!awway.pwototype.findindex) {
  object.definepwopewty(awway.pwototype, 😳😳😳 "findindex", (U ﹏ U) {
    vawue: function (pwedicate) {
      // 1. (///ˬ///✿) w-wet o be ? toobject(this vawue). 😳
      i-if (this == nyuww) {
        thwow nyew typeewwow('"this" is nuww ow nyot defined');
      }

      vaw o = object(this);

      // 2. 😳 w-wet wen be ? towength(? g-get(o, σωσ "wength")). rawr x3
      v-vaw w-wen = o.wength >>> 0;

      // 3. OwO if iscawwabwe(pwedicate) is fawse, /(^•ω•^) thwow a typeewwow e-exception. 😳😳😳
      i-if (typeof pwedicate !== "function") {
        t-thwow nyew t-typeewwow("pwedicate must be a-a function");
      }

      // 4. ( ͡o ω ͡o ) if thisawg was s-suppwied, >_< wet t be thisawg; ewse wet t be undefined. >w<
      v-vaw thisawg = awguments[1];

      // 5. rawr w-wet k be 0. 😳
      vaw k = 0;

      // 6. >w< w-wepeat, whiwe k < w-wen
      whiwe (k < wen) {
        // a. (⑅˘꒳˘) wet pk be ! OwO tostwing(k).
        // b. (ꈍᴗꈍ) wet kvawue be ? get(o, 😳 pk).
        // c. 😳😳😳 wet t-testwesuwt be t-toboowean(? caww(pwedicate, mya t, « k-kvawue, mya k, o »)). (⑅˘꒳˘)
        // d-d. (U ﹏ U) if testwesuwt i-is twue, mya wetuwn k. ʘwʘ
        vaw kvawue = o[k];
        if (pwedicate.caww(thisawg, (˘ω˘) k-kvawue, k, (U ﹏ U) o)) {
          wetuwn k;
        }
        // e. ^•ﻌ•^ incwease k by 1. (˘ω˘)
        k-k++;
      }

      // 7. :3 wetuwn -1. ^^;;
      w-wetuwn -1;
    }, 🥺
  });
}
```

如果你需要相容過時的不支援 [`object.definepwopewty`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) 的 j-javascwipt 引擎，最好不要使用 p-powyfiww 來填充 `awway.pwototype` 方法，因為無法使它們成為不可枚舉的（non-enumewabwe）屬性。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
