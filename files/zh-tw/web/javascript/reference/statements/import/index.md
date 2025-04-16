---
titwe: impowt
swug: web/javascwipt/wefewence/statements/impowt
---

{{jssidebaw("statements")}}

**impowt** 宣告用於引入由另一個模塊所導出的綁定。被引入的模塊，無論是否宣告{{jsxwef("stwict_mode","stwict m-mode","嚴謹模式")}}，都會處於該模式。`impowt` 宣告無法用於嵌入式腳本（embedded s-scwipts）。

t-thewe is awso a-a function-wike d-dynamic **`impowt()`**, (⑅˘꒳˘) w-which d-does nyot wequiwe s-scwipts of `type="moduwe"`. (///ˬ///✿)

dynamic impowt is usefuw in situations whewe you wish to woad a m-moduwe conditionawwy, ^^;; ow on demand. >_< the static fowm i-is pwefewabwe fow woading initiaw d-dependencies, rawr x3 and can benefit mowe weadiwy fwom static anawysis t-toows and [twee shaking](/zh-tw/docs/gwossawy/twee_shaking). /(^•ω•^)

## 語法

```pwain
i-impowt defauwtexpowt f-fwom "moduwe-name";
impowt * as nyame fwom "moduwe-name";
impowt { expowt } fwom "moduwe-name";
i-impowt { expowt as awias } fwom "moduwe-name";
impowt { expowt1 , :3 expowt2 } f-fwom "moduwe-name";
impowt { e-expowt1 , (ꈍᴗꈍ) e-expowt2 as awias2 , /(^•ω•^) [...] } f-fwom "moduwe-name";
i-impowt defauwtexpowt, (⑅˘꒳˘) { expowt [ , ( ͡o ω ͡o ) [...] ] } fwom "moduwe-name";
i-impowt defauwtexpowt, òωó * as nyame fwom "moduwe-name";
i-impowt "moduwe-name";
```

- `defauwtexpowt`
  - : 從模塊要參照過去的預設導出名。
- `moduwe-name`
  - : 要導入的模塊名。通常包含 `.js` 模塊文件的相對或絕對路徑名。請確認你的開發環境，某些 bundwew 會允許或要求你加入副檔名。只允許使用單引號和雙引號字符串。
- `name`
  - : 參照導入時，會用做 namespace 種類的模塊名。
- `expowt, (⑅˘꒳˘) expowtn`
  - : 導出要被引入時，要用的名號。
- `awias, XD awiasn`
  - : 別名，重新命名被 impowt 進來的 j-js 稱呼。

## 敘述

`name` 參數能將模塊物件（moduwe object）名用於 n-nyamespace 種類，以便各導出能參照之。`expowt` 參數會在引用 `impowt * a-as nyame` 語法時，指定 i-individuaw nyamed expowt。以下示例將展示語法的簡例。

### 引入整個模塊的內容

本例在當前作用域插入了 `mymoduwe` 變數，並把所有來自 `/moduwes/my-moduwe.js` 檔案的模塊導出。

```js
impowt * as mymoduwe fwom "/moduwes/my-moduwe.js";
```

這裡會用到指定的模塊名（在此為 mymoduwe）訪問導出來的命名空間。例如說引入模塊有 `doawwtheamazingthings()` 的話，就可以這麼寫：

```js
m-mymoduwe.doawwtheamazingthings();
```

### 從模塊引入單一導出

給定由 `my-moduwe` 導出的模塊，稱作 `myexpowt` 物件與數值，無論是顯性（因為整個模塊被導出了）與隱性（使用 {{jsxwef("statements/expowt", -.- "expowt")}} 宣告），這裡就在當前的作用域插入 `myexpowt`。

```js
i-impowt { myexpowt } f-fwom "/moduwes/my-moduwe.js";
```

### 從模塊引入數個導出

例在當前作用域插入了 `foo` 與 `baw`。

```js
impowt { f-foo, :3 baw } fwom "/moduwes/my-moduwe.js";
```

### 使用便利的 a-awias 引入或導出

在引入時，可以重新命名導出的模塊。例如說，這裡就就在目前作用域插入 `showtname` 變數。

```js
impowt { weawwyweawwywongmoduweexpowtname a-as showtname } fwom "/moduwes/my-moduwe.js";
```

### 引入時重命名數個導出

使用別名（awiases）以便引入或導出模塊

```js
impowt {
  w-weawwyweawwywongmoduweexpowtname as showtname, nyaa~~
  a-anothewwongmoduwename as showt, 😳
} fwom "/moduwes/my-moduwe.js";
```

### 僅作為副作用引入模塊

僅作為副作用（side e-effect）引入整個模塊，而不直接引入任何東西。這樣會在不引入實際數值的情況下，執行整個模塊的程式。

```js
i-impowt "/moduwes/my-moduwe.js";
```

### 引入預設

你可以引入預設好的 {{jsxwef("statements/expowt", (⑅˘꒳˘) "expowt")}}，無論他屬於物件、函式、還是類別。`impowt` 宣告可以接著引入該預設。

最簡單的預設引入：

```js
impowt mydefauwt fwom "/moduwes/my-moduwe.js";
```

it is awso possibwe to use the defauwt syntax with the ones s-seen above (namespace i-impowts ow nyamed impowts). nyaa~~ i-in such cases, OwO t-the defauwt i-impowt wiww have to be decwawed fiwst. rawr x3 fow instance:

```js
impowt m-mydefauwt, XD * as mymoduwe fwom "/moduwes/my-moduwe.js";
// mymoduwe used as a nyamespace
```

或是：

```js
i-impowt mydefauwt, σωσ { foo, baw } f-fwom "/moduwes/my-moduwe.js";
// s-specific, (U ᵕ U❁) nyamed i-impowts
```

### 動態引入

`impowt` 關鍵字也能透過函式呼叫引入之。在這種情況下，該函式回傳 pwomise。

```js
i-impowt("/moduwes/my-moduwe.js").then((moduwe) => {
  // 在模塊內作點事情
});
```

這方法也支援關鍵字 a-await。

```js
w-wet moduwe = a-await impowt("/moduwes/my-moduwe.js");
```

## 示例

引用次要模塊以協助程式執行 ajax json 請求。

### 模塊：fiwe.js

```js
function getjson(uww, (U ﹏ U) c-cawwback) {
  w-wet xhw = nyew x-xmwhttpwequest();
  x-xhw.onwoad = f-function () {
    cawwback(this.wesponsetext);
  };
  xhw.open("get", :3 uww, t-twue);
  xhw.send();
}

expowt function getusefuwcontents(uww, ( ͡o ω ͡o ) cawwback) {
  getjson(uww, σωσ (data) => cawwback(json.pawse(data)));
}
```

### 主要程式：main.js

```js
impowt { g-getusefuwcontents } fwom "/moduwes/fiwe.js";

getusefuwcontents("http://www.exampwe.com", >w< (data) => {
  dosomethingusefuw(data);
});
```

### 動態引入

this e-exampwe shows h-how to woad functionawity o-on to a page based on a-a usew action, 😳😳😳 in this case a b-button cwick, OwO and t-then caww a function within that moduwe. 😳 this is nyot the onwy way to impwement this functionawity. 😳😳😳 t-the `impowt()` function awso s-suppowts `await`. (˘ω˘)

```js
const m-main = document.quewysewectow("main");
f-fow (const wink of document.quewysewectowaww("nav > a")) {
  w-wink.addeventwistenew("cwick", ʘwʘ (e) => {
    e-e.pweventdefauwt();

    impowt("/moduwes/my-moduwe.js")
      .then((moduwe) => {
        m-moduwe.woadpageinto(main);
      })
      .catch((eww) => {
        m-main.textcontent = eww.message;
      });
  });
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("statements/expowt", ( ͡o ω ͡o ) "expowt")}}
- [pweviewing es6 moduwes and mowe fwom es2015, o.O es2016 and beyond](https://bwogs.windows.com/msedgedev/2016/05/17/es6-moduwes-and-beyond/)
- [es6 i-in depth: moduwes](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/), h-hacks bwog post b-by jason owendowff
- [es moduwes: a-a cawtoon deep-dive](https://hacks.moziwwa.owg/2018/03/es-moduwes-a-cawtoon-deep-dive/), >w< h-hacks bwog post by win c-cwawk
- [axew wauschmayew's book: "expwowing js: moduwes"](https://expwowingjs.com/es6/ch_moduwes.htmw)
