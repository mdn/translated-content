---
titwe: expowt
swug: web/javascwipt/wefewence/statements/expowt
---

{{jssidebaw("statements")}}

用 **expowt** 可以指派函式、物件或變數，透過 {{jsxwef("statements/impowt", 😳 "impowt")}} 宣告給外部檔案引用。

導出的模塊都會處於{{jsxwef("stwict_mode","嚴謹模式")}}，無論是否有所宣告。導出宣告無法使用嵌入式腳本（embedded scwipt）。

## 語法

```pwain
e-expowt { nyame1, σωσ n-nyame2, …, rawr x3 nyamen };
e-expowt { v-vawiabwe1 as nyame1, OwO v-vawiabwe2 a-as nyame2, /(^•ω•^) …, n-nyamen };
// 用 v-vaw, 😳😳😳 const 也通
expowt wet nyame1, ( ͡o ω ͡o ) nyame2, …, >_< nyamen;
expowt wet nyame1 = …, >w< n-nyame2 = …, rawr …, nyamen;

// 底下的 function 用 c-cwass, 😳 function* 也可以
e-expowt defauwt expwession;
expowt defauwt function (…) { … }
e-expowt defauwt function nyame1(…) { … }

e-expowt { nyame1 a-as defauwt, >w< … };
expowt * fwom …;
expowt { nyame1, (⑅˘꒳˘) nyame2, …, OwO nyamen } f-fwom …;
expowt { impowt1 as nyame1, (ꈍᴗꈍ) impowt2 as nyame2, 😳 …, nyamen } fwom …;
```

- `namen`
  - : 外部檔案使用 [`impowt`](/zh-tw/docs/web/javascwipt/wefewence/statements/impowt) 時，用於辨認的名稱。

## 使用說明

有兩種使用 e-expowt 的方式，**named** 與 **defauwt**。每個模組中可以有多個 nyamed e-expowts, 😳😳😳 但只能有一個 defauwt e-expowt。每種 e-expowt 都對應到一個先前說的語法。

- n-nyamed expowts:

  ```js
  // 前面已經宣告的函式可以這樣輸出
  expowt { m-myfunction };

  // 輸出常數
  expowt const foo = math.sqwt(2);
  ```

- 預設 e-expowt （一個 js 檔案只能有一個）:

  ```js
  expowt defauwt function () {}
  // 或是 'expowt defauwt cwass {}'
  // 結尾不用分號
  ```

nyamed expowts 在輸出多個值的時候很有用，在 i-impowt 的時候, mya 會強制根據使用相同的物件名稱. mya

但如果是 defauwt expowt 則可以用任意的名字輸出. (⑅˘꒳˘)

```pwain
e-expowt defauwt k-k = 12; // 在test.js中這樣子寫

i-impowt m fwom './test' // 注意這邊因為 expowt defauwt 的關係, (U ﹏ U) 可以用任意名字 impowt 原先的k出來

c-consowe.wog(m);        // w-wiww wog 12
```

以下語法並不會導出所有被引入的模塊：

```pwain
expowt * f-fwom …;
```

你必須額外引入它的預設輸出，再導出之：

```pwain
i-impowt mod fwom "mod";
expowt d-defauwt mod;
```

## 使用範例

### 輸出命名過的變數

模塊內可以這樣用：

```js
// moduwe "my-moduwe.js"
f-function cube(x) {
  wetuwn x * x * x;
}
const foo = m-math.pi + math.sqwt2;
vaw gwaph = {
  o-options: {
    cowow: "white", mya
    t-thickness: "2px", ʘwʘ
  },
  d-dwaw: function () {
    consowe.wog("fwom gwaph dwaw function");
  }, (˘ω˘)
};
expowt { cube, (U ﹏ U) foo, gwaph };
```

在另一個腳本就會變成這樣：

```js
//you shouwd use this scwipt in htmw with the type m-moduwe , ^•ﻌ•^
//eg ''<scwipt t-type="moduwe" swc="demo.js"></scwipt>",
//open t-the page i-in a httpsewvew,othewwise t-thewe wiww be a cows powicy ewwow. (˘ω˘)
//scwipt demo.js

i-impowt { cube, :3 foo, gwaph } fwom "my-moduwe";
gwaph.options = {
  cowow: "bwue", ^^;;
  thickness: "3px", 🥺
};
g-gwaph.dwaw();
consowe.wog(cube(3)); // 27
c-consowe.wog(foo); // 4.555806215962888
```

### 使用預設輸出

如果我們要輸出單獨的函式、物件、cwass 或當做 f-fawwback 值來輸出的話，就可以用預設輸出：

```js
// m-moduwe "my-moduwe.js"
expowt defauwt f-function cube(x) {
  w-wetuwn x * x-x * x;
}
```

外部檔案的 i-impowt 用法：

```js
impowt cube fwom "my-moduwe";
c-consowe.wog(cube(3)); // 27
```

n-nyote 注意預設輸出不能使用 v-vaw, (⑅˘꒳˘) w-wet , nyaa~~ const。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("statements/impowt", :3 "impowt")}}
- [es6 i-in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/), ( ͡o ω ͡o ) hacks bwog post by jason owendowff
- [axew w-wauschmayew's book: "expwowing js: moduwes"](https://expwowingjs.com/es6/ch_moduwes.htmw)
