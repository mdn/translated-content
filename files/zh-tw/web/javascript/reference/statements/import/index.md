---
title: import
slug: Web/JavaScript/Reference/Statements/import
---

**import** 宣告用於引入由另一個模塊所導出的綁定。被引入的模塊，無論是否宣告{{jsxref("Strict_mode","strict mode","嚴謹模式")}}，都會處於該模式。`import` 宣告無法用於嵌入式腳本（embedded scripts）。

There is also a function-like dynamic **`import()`**, which does not require scripts of `type="module"`.

Dynamic import is useful in situations where you wish to load a module conditionally, or on demand. The static form is preferable for loading initial dependencies, and can benefit more readily from static analysis tools and [tree shaking](/zh-TW/docs/Glossary/Tree_shaking).

## 語法

```plain
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

- `defaultExport`
  - : 從模塊要參照過去的預設導出名。
- `module-name`
  - : 要導入的模塊名。通常包含 `.js` 模塊文件的相對或絕對路徑名。請確認你的開發環境，某些 bundler 會允許或要求你加入副檔名。只允許使用單引號和雙引號字符串。
- `name`
  - : 參照導入時，會用做 namespace 種類的模塊名。
- `export, exportN`
  - : 導出要被引入時，要用的名號。
- `alias, aliasN`
  - : 別名，重新命名被 import 進來的 js 稱呼。

## 敘述

`name` 參數能將模塊物件（module object）名用於 namespace 種類，以便各導出能參照之。`export` 參數會在引用 `import * as name` 語法時，指定 individual named export。以下示例將展示語法的簡例。

### 引入整個模塊的內容

本例在當前作用域插入了 `myModule` 變數，並把所有來自 `/modules/my-module.js` 檔案的模塊導出。

```js
import * as myModule from "/modules/my-module.js";
```

這裡會用到指定的模塊名（在此為 myModule）訪問導出來的命名空間。例如說引入模塊有 `doAllTheAmazingThings()` 的話，就可以這麼寫：

```js
myModule.doAllTheAmazingThings();
```

### 從模塊引入單一導出

給定由 `my-module` 導出的模塊，稱作 `myExport` 物件與數值，無論是顯性（因為整個模塊被導出了）與隱性（使用 {{jsxref("Statements/export", "export")}} 宣告），這裡就在當前的作用域插入 `myExport`。

```js
import { myExport } from "/modules/my-module.js";
```

### 從模塊引入數個導出

例在當前作用域插入了 `foo` 與 `bar`。

```js
import { foo, bar } from "/modules/my-module.js";
```

### 使用便利的 alias 引入或導出

在引入時，可以重新命名導出的模塊。例如說，這裡就就在目前作用域插入 `shortName` 變數。

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

### 引入時重命名數個導出

使用別名（aliases）以便引入或導出模塊

```js
import {
  reallyReallyLongModuleExportName as shortName,
  anotherLongModuleName as short,
} from "/modules/my-module.js";
```

### 僅作為副作用引入模塊

僅作為副作用（side effect）引入整個模塊，而不直接引入任何東西。這樣會在不引入實際數值的情況下，執行整個模塊的程式。

```js
import "/modules/my-module.js";
```

### 引入預設

你可以引入預設好的 {{jsxref("Statements/export", "export")}}，無論他屬於物件、函式、還是類別。`import` 宣告可以接著引入該預設。

最簡單的預設引入：

```js
import myDefault from "/modules/my-module.js";
```

It is also possible to use the default syntax with the ones seen above (namespace imports or named imports). In such cases, the default import will have to be declared first. For instance:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule used as a namespace
```

或是：

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
// specific, named imports
```

### 動態引入

`import` 關鍵字也能透過函式呼叫引入之。在這種情況下，該函式回傳 promise。

```js
import("/modules/my-module.js").then((module) => {
  // 在模塊內作點事情
});
```

這方法也支援關鍵字 await。

```js
let module = await import("/modules/my-module.js");
```

## 示例

引用次要模塊以協助程式執行 AJAX JSON 請求。

### 模塊：file.js

```js
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open("GET", url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, (data) => callback(JSON.parse(data)));
}
```

### 主要程式：main.js

```js
import { getUsefulContents } from "/modules/file.js";

getUsefulContents("http://www.example.com", (data) => {
  doSomethingUseful(data);
});
```

### 動態引入

This example shows how to load functionality on to a page based on a user action, in this case a button click, and then call a function within that module. This is not the only way to implement this functionality. The `import()` function also supports `await`.

```js
const main = document.querySelector("main");
for (const link of document.querySelectorAll("nav > a")) {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    import("/modules/my-module.js")
      .then((module) => {
        module.loadPageInto(main);
      })
      .catch((err) => {
        main.textContent = err.message;
      });
  });
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Statements/export", "export")}}
- [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), Hacks blog post by Lin Clark
- [Axel Rauschmayer's book: "Exploring JS: Modules"](https://exploringjs.com/es6/ch_modules.html)
