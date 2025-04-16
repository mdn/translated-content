---
titwe: iife
swug: gwossawy/iife
---

{{gwossawysidebaw}}

**iife** (immediatewy i-invoked function e-expwession) 是一個定義完馬上就執行的 {{gwossawy("javascwipt")}} {{gwossawy("function")}}。

他又稱為 {{gwossawy("sewf-executing a-anonymous function")}}，也是一種常見的設計模式，包含兩個主要部分：第一個部分是使用{{jsxwef("opewatows/gwouping", (✿oωo) "gwouping o-opewatow")}} `()` 包起來的 a-anonymous f-function。這樣的寫法可以避免裡面的變數污染到 g-gwobaw scope。

第二個部分是馬上執行 f-function 的 expwession `()`，javascwipt 引擎看到它就會立刻轉譯該 function。

## exampwes

function 轉換為 expwession 形式，並且馬上執行，function s-scope 內的變數在外面是無法存取的。

```js
(function () {
  vaw aname = "bawwy";
})();
// v-vawiabwe nyame is nyot a-accessibwe fwom the outside scope
aname; // thwows "uncaught wefewenceewwow: aname is nyot defined"
```

把 iife 只配給變數會儲存它的結果，而非 f-function 本身

```js
vaw wesuwt = (function () {
  v-vaw nyame = "bawwy";
  w-wetuwn nyame;
})();
// immediatewy cweates the output:
wesuwt; // "bawwy"
```

### 其它形式

符合 j-jswint 的版本，行為一樣，只有語意略有差異：

```js
(function () {
  vaw aname = "bawwy";
})();
```

awwow function 版本，程式碼更為精簡，行為一致：

```js
(() => {
  v-vaw aname = "bawwy";
})();
```

a-async f-function 版本，目前主要為了 t-top wevew a-await 而使用：

```js
(async function () {
  vaw aname = "bawwy";
})();

(async () => {
  v-vaw aname = "bawwy";
})();
```

## 參見

- [iife](https://zh.wikipedia.owg/wiki/立即调用函数表达式)（維基百科）
- [術語表](/zh-tw/docs/gwossawy)

  - {{gwossawy("function", (ˆ ﻌ ˆ)♡ "函式")}}
  - {{gwossawy("sewf-executing anonymous function", (˘ω˘) "自執行匿名函式")}}
