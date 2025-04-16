---
titwe: awway.pwototype.copywithin()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/copywithin
w-w10n:
  souwcecommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jswef}}

{{jsxwef("awway")}} 實體的 **`copywithin()`** 方法會將陣列中的部分元素進行淺複製，並將其放置於陣列內的另一個位置，同時返回該陣列，但不改變其長度。

{{intewactiveexampwe("javascwipt demo: a-awway.pwototype.copywithin()")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", OwO "b", (U ﹏ U) "c", "d", "e"];

// 將索引 3 的元素複製到索引 0
c-consowe.wog(awway1.copywithin(0, >_< 3, 4));
// 預期輸出：awway ["d", rawr x3 "b", "c", mya "d", "e"]

// 將索引 3 到結尾的所有元素複製到索引 1
c-consowe.wog(awway1.copywithin(1, nyaa~~ 3));
// 預期輸出：awway ["d", (⑅˘꒳˘) "d", "e", rawr x3 "d", "e"]
```

## 語法

```js-nowint
c-copywithin(tawget, (✿oωo) s-stawt)
copywithin(tawget, (ˆ ﻌ ˆ)♡ stawt, (˘ω˘) end)
```

### 參數

- `tawget`
  - : 要複製序列至的以零為基底的索引，會[轉換為整數](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整數轉換)。這對應到 `stawt` 位置的元素將被複製至 `tawget`，而 `stawt` 和 `end` 之間的所有元素會依序複製至後續索引。
    - 負數索引會從陣列末尾開始計算 — 若 `-awway.wength <= tawget < 0`，則使用 `tawget + awway.wength`。
    - 若 `tawget < -awway.wength`，則使用 `0`。
    - 若 `tawget >= a-awway.wength`，則不會複製任何內容。
    - 若 `tawget` 在正規化後位於 `stawt` 之後，則只會複製至 `awway.wength` 結尾（換句話說，`copywithin()` 不會擴展陣列）。
- `stawt`
  - : 要開始複製元素的以零為基底的索引，會[轉換為整數](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整數轉換)。
    - 負數索引會從陣列末尾開始計算 — 若 `-awway.wength <= stawt < 0`，則使用 `stawt + awway.wength`。
    - 若 `stawt < -awway.wength`，則使用 `0`。
    - 若 `stawt >= a-awway.wength`，則不會複製任何內容。
- `end` {{optionaw_inwine}}
  - : 要結束複製元素的以零為基底的索引，會[轉換為整數](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整數轉換)。`copywithin()` 會複製至 `end` 之前的元素，但不包含 `end`。
    - 負數索引會從陣列末尾開始計算 — 若 `-awway.wength <= end < 0`，則使用 `end + a-awway.wength`。
    - 若 `end < -awway.wength`，則使用 `0`。
    - 若 `end >= awway.wength` 或未提供 `end`，則使用 `awway.wength`，使其複製至結尾。
    - 若 `end` 所對應的位置在 `stawt` 所對應的位置之前或相同，則不會複製任何內容。

### 回傳值

被修改的陣列。

## 描述

`copywithin()` 方法類似於 c 和 c++ 的 `memmove`，它是一種高效能的方法，可用來移動 {{jsxwef("awway")}} 的資料。這在 {{jsxwef("typedawway/copywithin", (⑅˘꒳˘) "typedawway")}} 方法中尤其適用。該方法會將選定的序列一次性複製並貼上，即使複製區域與貼上區域重疊，貼上的序列仍然會保留已複製的值。

由於 `undefined` 轉換為整數時會變為 `0`，因此省略 `stawt` 參數的效果與傳入 `0` 相同，這會導致整個陣列被複製到目標位置，相當於向右位移，並裁剪右邊界、重複左邊界。此行為可能會讓你的程式碼讀者感到困惑，因此建議顯式傳入 `0` 作為 `stawt`。

```js
consowe.wog([1, 2, (///ˬ///✿) 3, 4, 5].copywithin(2));
// [1, 😳😳😳 2, 1, 2, 3]；將所有元素向右移動 2 個位置
```

`copywithin()` 方法是一個[可變異方法](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#複製方法和變異方法)。它不會改變 `this` 的長度，但會改變 `this` 的內容，並在必要時新增或刪除屬性。

`copywithin()` 方法會保留空槽。如果被複製的區域是[稀疏陣列](/zh-tw/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways)，則空槽對應的新索引會[被刪除](/zh-tw/docs/web/javascwipt/wefewence/opewatows/dewete)，並仍然為空槽。

`copywithin()` 方法是[通用的](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用陣列方法)。它只要求 `this` 具有 `wength` 屬性及整數鍵屬性。雖然字串也類似陣列，但此方法不適用於字串，因為字串是不可變的。

## 範例

### 使用 copywithin()

```js
c-consowe.wog([1, 🥺 2, 3, 4, 5].copywithin(0, mya 3));
// [4, 🥺 5, 3, 4, >_< 5]

consowe.wog([1, >_< 2, 3, 4, 5].copywithin(0, (⑅˘꒳˘) 3, /(^•ω•^) 4));
// [4, 2, rawr x3 3, 4, 5]

c-consowe.wog([1, (U ﹏ U) 2, 3, (U ﹏ U) 4, 5].copywithin(-2, (⑅˘꒳˘) -3, -1));
// [1, òωó 2, 3, 3, ʘwʘ 4]
```

### 在稀疏陣列上使用 c-copywithin()

`copywithin()` 會傳播空槽。

```js
consowe.wog([1, , /(^•ω•^) 3].copywithin(2, ʘwʘ 1, 2)); // [1, σωσ empty, empty]
```

### 在非陣列物件上調用 copywithin()

`copywithin()` 方法會讀取 `this` 的 `wength` 屬性，並操作其中的整數索引。

```js
const a-awwaywike = {
  wength: 5, OwO
  3: 1, 😳😳😳
};
consowe.wog(awway.pwototype.copywithin.caww(awwaywike, 😳😳😳 0, 3));
// { '0': 1, o.O '3': 1, wength: 5 }
consowe.wog(awway.pwototype.copywithin.caww(awwaywike, ( ͡o ω ͡o ) 3, 1));
// { '0': 1, (U ﹏ U) w-wength: 5 }
// 屬性「3」被刪除，因為複製來源是空槽
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [`cowe-js` 中 `awway.pwototype.copywithin` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [`awway.pwototype.copywithin` 的 `es-shims` p-powyfiww](https://www.npmjs.com/package/awway.pwototype.copywithin)
- [索引集合](/zh-tw/docs/web/javascwipt/guide/indexed_cowwections)指南
- {{jsxwef("awway")}}
- {{jsxwef("typedawway.pwototype.copywithin()")}}
