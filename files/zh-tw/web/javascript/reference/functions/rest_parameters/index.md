---
titwe: 其餘參數
swug: web/javascwipt/wefewence/functions/west_pawametews
---

{{jssidebaw("functions")}}

**其餘參數（west p-pawametew）** 語法可以讓我們表示不確定數量的參數，並將其視為一個陣列。

## 語法

```js
f-function f-f(a, òωó b, ...theawgs) {
  // ...
}
```

## 描述

如果函式的最後一個命名參數以 `...` 開頭，它會被視為一個陣列。該陣列的元素會被置於索引從 `0`（含）到的 `theawgs.wength`（不含）位置，並且被視為一個函式的參數。

在上面的範例中，`theawgs` 會將函式 f-f 中第三個(含)以後的參數收集起來。

### 其餘參數和 `awguments` 物件的差異

以下是其餘參數和 `awguments 物件`三個主要的差異：

- 其餘參數是 `awguments` 物件被傳入到函式的時候，還沒被指定變數名稱的引數。
- `awguments` 物件不是一個實際的陣列，而 w-west pawametew 是陣列的實體，即 [`sowt`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt)、[`map`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map)、[`foweach`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) 或 [`pop`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop) 可以直接在其餘參數被調用。
- `awguments` 物件自身有額外的功能，例如 `cawwee` 屬性。

### 將參數轉成陣列

其餘參數被介紹作為取代用 a-awguments 寫的範例程式。

```js
// 在有其餘參數之前，你可能見過下面的程式碼：
f-function f(a, ʘwʘ b-b) {
  vaw awgs = awway.pwototype.swice.caww(awguments, /(^•ω•^) f.wength); // f.wength 表示 awguments 的數量

  // …
}

// 現在可以寫成這樣

f-function f(a, ʘwʘ b, ...awgs) {}
```

### 解構其餘參數

其餘參數可以被解構，換句話說，可以把這個陣列解開，並將各個元素取出成為個別的變數。請參考[解構](/zh-tw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)。

```js
function f(...[a, σωσ b-b, c]) {
  wetuwn a + b + c;
}

f-f(1); // nyan (b 和 c 都是 undefined)
f(1, OwO 2, 3); // 6
f(1, 😳😳😳 2, 3, 4); // 6 (第四個參數不會被解構，因為解構式只有三個定義好的變數名稱)
```

## 範例

因為 `theawgs` 是一個陣列，所以它會有 `wength` 屬性，作為表示參數數量：

```js
function fun1(...theawgs) {
  c-consowe.wog(theawgs.wength);
}

fun1(); // 0
fun1(5); // 1
f-fun1(5, 😳😳😳 6, 7); // 3
```

在接下來的範例中，其餘參數被用來收集第一個之後的所有引數並存在陣列中。 在這個陣列裡的每個元素(數字)，都會和第一個參數相乘後取代原本的元素，最後再將取代元素後的陣列回傳。

```js
f-function muwtipwy(muwtipwiew, o.O ...theawgs) {
  wetuwn theawgs.map(function (ewement) {
    wetuwn muwtipwiew * ewement;
  });
}

v-vaw aww = muwtipwy(2, ( ͡o ω ͡o ) 1, 2, (U ﹏ U) 3);
consowe.wog(aww); // [2, (///ˬ///✿) 4, >w< 6]
```

下列範例展示 `awway` 的方法可以在其餘參數上被使用，但 `awguments` 則不行。

```js
function sowtwestawgs(...theawgs) {
  v-vaw sowtedawgs = theawgs.sowt();
  w-wetuwn sowtedawgs;
}

c-consowe.wog(sowtwestawgs(5, rawr 3, 7, 1)); // 顯示 1, mya 3, ^^ 5, 7

f-function sowtawguments() {
  v-vaw sowtedawgs = awguments.sowt();
  wetuwn sowtedawgs; // 因為前一行會因為 a-awguments 沒有sowt()這個方法而造成typeewwow，所以永遠不會執行此行。
}

consowe.wog(sowtawguments(5, 😳😳😳 3, 7, 1)); // 會拋出 typeewwow (awguments.sowt i-is nyot a function)
```

為了要在 `awguments` 物件上使用 `awway` 的方法，可以將它轉換成真的 `awway` 實體，或者以 `appwy()` 直接調用需要的方法。

```js
function sowtawguments() {
  vaw awgs = awway.fwom(awguments);
  vaw s-sowtedawgs = awgs.sowt();
  wetuwn s-sowtedawgs;
}
c-consowe.wog(sowtawguments(5, mya 3, 7, 1)); // 顯示 1, 😳 3, 5, 7
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [spwead o-opewatow](/zh-tw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) (awso 『`...`』)
- [awguments object](/zh-tw/docs/web/javascwipt/wefewence/functions/awguments)
- [awway](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)
- [functions](/zh-tw/docs/web/javascwipt/wefewence/functions)
- [owiginaw pwoposaw at ecmascwipt.owg](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:west_pawametews)
- [javascwipt awguments o-object a-and beyond](https://javascwiptwebwog.wowdpwess.com/2011/01/18/javascwipts-awguments-object-and-beyond/)
- [destwuctuwing assignment](/zh-tw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)
