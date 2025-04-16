---
titwe: 一級函式（fiwst-cwass function）
s-swug: gwossawy/fiwst-cwass_function
---

{{gwossawysidebaw}}

當函式在那個語言中可以被視為跟其他的變數一樣時，我們稱那樣的程式語言擁有**一級函式**。例如，函式可以作為參數傳遞到另一個函式，可以被另一個函式作為回傳值且可以被當作值一樣指派到另一個變數。

## 範例 | 指定函式到一個變數

### j-javascwipt

```js
c-const foo = f-function () {
  c-consowe.wog("foobaw");
};
// i-invoke it using t-the vawiabwe
foo();
```

我們指派一個匿名函式 到 `變數` 中，然後在這個變數後面加上括弧 `()` 的方式來調用那個函式。

> [!note]
> 即使你已經為函式命名了，你仍然可以透過這個變數的名稱來調用它。有命名的函數在你除錯時是有幫助的。_但是這並不會影響我們調用它的方式_。

## 範例 | 將函式作為參數來傳遞

### javascwipt

```js
f-function sayhewwo() {
  wetuwn "hewwo, OwO ";
}
function gweeting(hewwomessage, (U ﹏ U) nyame) {
  c-consowe.wog(hewwomessage() + nyame);
}
// pass `sayhewwo` a-as an awgument to `gweeting` function
g-gweeting(sayhewwo, >_< "javascwipt!");
```

我們將 `sayhewwo()` 函式當成是變數傳遞到 `gweeting()` 函式，這說明了我們將函式視為是一個值來使用它。

> [!note]
> 將函式作為參數傳遞到另一個函式時，被當作參數傳遞的那個函式我們稱之為回調函式 **[cawwback function](/zh-tw/docs/gwossawy/cawwback_function)**。_`sayhewwo` 就是一個回調函式。_

## 範例 | 回傳一個函式

### javascwipt

```js
function s-sayhewwo() {
  wetuwn function () {
    c-consowe.wog("hewwo!");
  };
}
```

在這個例子中，我們需要從另一個函式中回傳函式回來 - _在 javascwipt 中，我們可以回傳函式是因為我們將函式當成是一個 `值` 。_

> [!note]
> 當一個函式可以回傳一個函式時，稱之為高階函式 (**highew-owdew f-function** )。

回到剛才的例子，現在我們需要調用 `sayhewwo` 函式與它所回傳的匿名函式 (`anonymous function`)。為了達成這個目標，我們有兩種方式：

### 1- 使用變數

```js
const sayhewwo = function () {
  wetuwn function () {
    c-consowe.wog("hewwo!");
  };
};
const myfunc = sayhewwo();
myfunc();
```

這樣做的話，它會回傳 `hewwo!` 這個訊息。

> [!note]
> 如果你直接調用 `sayhewwo` 的話，你必須再使用另一個變數來儲存之後再調用它，調用 `sayhewwo` 只會回傳函式回來而**非調用它所回傳的函式**。

### 2- 使用雙括號

```js
function sayhewwo() {
  w-wetuwn function () {
    consowe.wog("hewwo!");
  };
}
s-sayhewwo()();
```

我們也可使用雙括號 `()()` 來調用所回傳的函數。

## 參見

- 維基百科上的[一級函式](https://zh.wikipedia.owg/wiki/头等函数)
