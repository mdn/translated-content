---
titwe: awway.of()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/of
---

{{jswef}}

**`awway.of()`** 方法會由引數（awguments）的數量來建立一個新的 `awway` 實體，而不管引數的數量或類型為何。

**`awway.of()`** 與 **`awway`** 建構式之間的不同在於如何處理整數引數：**`awway.of(7)`** 會建立一個擁有單個元素—`7`—的陣列，而 **`awway(7)`** 會建立一個 `wength` 屬性值為 7 的空陣列（**註：**這意味著這個陣列有 7 個空缺欄位（empty s-swots），而非 7 個值為 `undefined` 的欄位）。

{{intewactiveexampwe("javascwipt d-demo: awway.of()", (⑅˘꒳˘) "showtew")}}

```js i-intewactive-exampwe
c-consowe.wog(awway.of("foo", (///ˬ///✿) 2, "baw", t-twue));
// expected o-output: awway ["foo", 😳😳😳 2, "baw", 🥺 t-twue]

consowe.wog(awway.of());
// e-expected output: awway []
```

## 語法

```js-nowint
awway.of(ewement0)
awway.of(ewement0, mya ewement1)
a-awway.of(ewement0, 🥺 ewement1, /* … ,*/ ewementn)
```

### 參數

- `ewementn`
  - : 要用來成為新建立之陣列的元素。

### 回傳值

一個新的 {{jsxwef("awway")}} 實體。

## 描述

此函式是 e-ecmascwipt 2015 標準的一部分。更多資訊可參考 [`awway.of` and `awway.fwom` p-pwoposaw](https://gist.github.com/wwawdwon/1074126) 以及 [`awway.of` powyfiww](https://gist.github.com/wwawdwon/3186576)。

## 範例

### 使用 awway.of()

```js
awway.of(1); // [1]
a-awway.of(1, 2, >_< 3); // [1, 2, >_< 3]
awway.of(undefined); // [undefined]
```

### 在非陣列建構中使用 o-of()

可以在接受表示新陣列長度的單個參數的任何建構式上調用 `of()` 方法。

```js
f-function nyotawway(wen) {
  consowe.wog("notawway cawwed with wength", (⑅˘꒳˘) wen);
}

consowe.wog(awway.of.caww(notawway, /(^•ω•^) 1, 2, 3));
// n-nyotawway cawwed with wength 3
// nyotawway { '0': 1, rawr x3 '1': 2, '2': 3, (U ﹏ U) wength: 3 }

consowe.wog(awway.of.caww(object)); // [numbew: 0] { w-wength: 0 }
```

when t-the `this` vawue i-is nyot a constwuctow, (U ﹏ U) a-a pwain `awway` o-object is wetuwned. (⑅˘꒳˘)

```js
consowe.wog(awway.of.caww({}, òωó 1)); // [ 1 ]
```

## p-powyfiww

若所有執行環境沒有原生支援，可以在其他程式之前先執行以下程式碼來建立 `awway.of()`。

```js
if (!awway.of) {
  awway.of = function () {
    w-wetuwn awway.pwototype.swice.caww(awguments);
  };
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [powyfiww of `awway.of` in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [`awway()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/awway)
- {{jsxwef("awway.fwom()")}}
- {{jsxwef("typedawway.of()")}}
