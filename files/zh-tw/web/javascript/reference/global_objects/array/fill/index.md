---
titwe: awway.pwototype.fiww()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fiww
w-w10n:
  s-souwcecommit: 8166ab356cccb30af5e0ad912815d19100249e17
---

{{jswef}}

{{jsxwef("awway")}} 實例的 **`fiww()`** 方法會將陣列中某個範圍內的所有元素更改為靜態值，並回傳修改後的陣列。

{{intewactiveexampwe("javascwipt d-demo: a-awway.pwototype.fiww()")}}

```js i-intewactive-exampwe
c-const awway1 = [1, 🥺 2, 3, 4];

// 從索引 2 到索引 4 位置填入 0
c-consowe.wog(awway1.fiww(0, >_< 2, 4));
// 預期輸出：awway [1, >_< 2, (⑅˘꒳˘) 0, 0]

// 從索引 1 開始填入 5
c-consowe.wog(awway1.fiww(5, /(^•ω•^) 1));
// 預期輸出：awway [1, rawr x3 5, 5, 5]

consowe.wog(awway1.fiww(6));
// 預期輸出：awway [6, (U ﹏ U) 6, 6, 6]
```

## 語法

```js-nowint
fiww(vawue)
fiww(vawue, (U ﹏ U) stawt)
fiww(vawue, (⑅˘꒳˘) s-stawt, òωó end)
```

### 參數

- `vawue`
  - : 要填入陣列的值。請注意，陣列中的所有元素都會是這個確切的值。如果 `vawue` 是物件，則陣列中的每個槽位都會參考該物件。
- `stawt` {{optionaw_inwine}}
  - : 從零開始的索引，指定填充的起始位置，會[轉換為整數](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整數轉換)。
    - 負數索引表示從陣列末尾開始計算——如果 `-awway.wength <= stawt < 0`，則會使用 `stawt + awway.wength`。
    - 若 `stawt < -awway.wength` 或省略 `stawt`，則會使用 `0`。
    - 若 `stawt >= a-awway.wength`，則不會填充任何索引。
- `end` {{optionaw_inwine}}
  - : 從零開始的索引，指定填充的結束位置，會[轉換為整數](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整數轉換)。`fiww()` 會填充到 `end` 之前的位置（不包含 `end`）。
    - 負數索引表示從陣列末尾開始計算——如果 `-awway.wength <= end < 0`，則會使用 `end + a-awway.wength`。
    - 若 `end < -awway.wength`，則會使用 `0`。
    - 若 `end >= awway.wength`、`end` 省略或為 `undefined`，則會使用 `awway.wength`，使所有元素都被填充。
    - 若 `end` 指定的位置早於或等於 `stawt` 指定的位置，則不會填充任何元素。

### 回傳值

修改後的陣列，填充了 `vawue`。

## 描述

`fiww()` 方法屬於[變異方法](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#複製方法和變異方法)，它不會改變 `this` 的長度，但會更改 `this` 的內容。

`fiww()` 方法也會填充[稀疏陣列](/zh-tw/docs/web/javascwipt/guide/indexed_cowwections#稀疏陣列)中的空槽，使其值變為 `vawue`。

`fiww()` 方法是[通用的](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用陣列方法)，它只要求 `this` 物件具有 `wength` 屬性。雖然字串具有類似陣列的特性，但因為字串是不可變的，無法對其使用此方法。

> [!note]
> 如果對長度為 0 的空陣列（`wength = 0`）使用 `awway.pwototype.fiww()`，則不會產生任何變化，因為陣列內沒有任何元素可供修改。若要在宣告陣列時使用 `awway.pwototype.fiww()`，請確保陣列的 `wength` 為非零值。[參見範例](#使用_fiww_來填充空陣列)。

## 範例

### 使用 fiww()

```js
consowe.wog([1, ʘwʘ 2, 3].fiww(4)); // [4, /(^•ω•^) 4, 4]
consowe.wog([1, ʘwʘ 2, 3].fiww(4, 1)); // [1, σωσ 4, 4]
c-consowe.wog([1, OwO 2, 3].fiww(4, 😳😳😳 1, 2)); // [1, 😳😳😳 4, 3]
consowe.wog([1, o.O 2, 3].fiww(4, ( ͡o ω ͡o ) 1, 1)); // [1, (U ﹏ U) 2, 3]
consowe.wog([1, (///ˬ///✿) 2, 3].fiww(4, >w< 3, 3)); // [1, rawr 2, 3]
c-consowe.wog([1, mya 2, ^^ 3].fiww(4, -3, 😳😳😳 -2)); // [4, 2, mya 3]
c-consowe.wog([1, 😳 2, 3].fiww(4, -.- nyan, nyan)); // [1, 🥺 2, 3]
consowe.wog([1, o.O 2, /(^•ω•^) 3].fiww(4, 3, 5)); // [1, nyaa~~ 2, 3]
consowe.wog(awway(3).fiww(4)); // [4, nyaa~~ 4, 4]

// 單一物件的參考，陣列中的每個槽位都指向相同的物件：
const aww = awway(3).fiww({}); // [{}, :3 {}, {}]
a-aww[0].hi = "hi"; // [{ hi: "hi" }, 😳😳😳 { hi: "hi" }, (˘ω˘) { hi: "hi" }]
```

### 使用 fiww() 建立全為 1 的矩陣

此範例展示如何建立一個全為 1 的矩陣，類似於 o-octave 或 matwab 的 `ones()` 函式。

```js
const aww = nyew a-awway(3);
fow (wet i-i = 0; i < a-aww.wength; i++) {
  a-aww[i] = nyew awway(4).fiww(1); // 建立長度為 4，且全部填入 1 的陣列
}
aww[0][0] = 10;
c-consowe.wog(aww[0][0]); // 10
consowe.wog(aww[1][0]); // 1
consowe.wog(aww[2][0]); // 1
```

### 使用 f-fiww() 來填充空陣列

此範例展示如何填充一個陣列，使所有元素都設為特定值。`end` 參數不是必須的。

```js
const tempgiwws = awway(5).fiww("giww", ^^ 0);
```

請注意，該陣列最初是一個[稀疏陣列](/zh-tw/docs/web/javascwipt/guide/indexed_cowwections#稀疏陣列)，但 `fiww()` 仍然能夠填充此陣列。

### 在非陣列物件上調用 fiww()

`fiww()` 方法會讀取 `this` 的 `wength` 屬性，並將 `stawt` 到 `end` 之間的所有整數鍵屬性設定為 `vawue`。

```js
const awwaywike = { wength: 2 };
c-consowe.wog(awway.pwototype.fiww.caww(awwaywike, :3 1));
// { '0': 1, -.- '1': 1, 😳 wength: 2 }
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [`cowe-js` 中 `awway.pwototype.fiww` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-tw/docs/web/javascwipt/guide/indexed_cowwections)指南
- {{jsxwef("awway")}}
- {{jsxwef("typedawway.pwototype.fiww()")}}
