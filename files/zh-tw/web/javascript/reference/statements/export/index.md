---
title: export
slug: Web/JavaScript/Reference/Statements/export
---

用 **export** 可以指派函式、物件或變數，透過 {{jsxref("Statements/import", "import")}} 宣告給外部檔案引用。

導出的模塊都會處於{{jsxref("Strict_mode","嚴謹模式")}}，無論是否有所宣告。導出宣告無法使用嵌入式腳本（embedded script）。

## 語法

```plain
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
// 用 var, const 也通
export let name1, name2, …, nameN;
export let name1 = …, name2 = …, …, nameN;

// 底下的 function 用 class, function* 也可以
export default expression;
export default function (…) { … }
export default function name1(…) { … }

export { name1 as default, … };
export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```

- `nameN`
  - : 外部檔案使用 [`import`](/zh-TW/docs/Web/JavaScript/Reference/Statements/import) 時，用於辨認的名稱。

## 使用說明

有兩種使用 export 的方式，**named** 與 **default**。每個模組中可以有多個 named exports, 但只能有一個 default export。每種 export 都對應到一個先前說的語法。

- Named exports:

  ```js
  // 前面已經宣告的函式可以這樣輸出
  export { myFunction };

  // 輸出常數
  export const foo = Math.sqrt(2);
  ```

- 預設 export （一個 js 檔案只能有一個）:

  ```js
  export default function () {}
  // 或是 'export default class {}'
  // 結尾不用分號
  ```

Named exports 在輸出多個值的時候很有用，在 import 的時候, 會強制根據使用相同的物件名稱.

但如果是 default export 則可以用任意的名字輸出.

```plain
export default k = 12; // 在test.js中這樣子寫

import m from './test' // 注意這邊因為 export default 的關係, 可以用任意名字 import 原先的k出來

console.log(m);        // will log 12
```

以下語法並不會導出所有被引入的模塊：

```plain
export * from …;
```

你必須額外引入它的預設輸出，再導出之：

```plain
import mod from "mod";
export default mod;
```

## 使用範例

### 輸出命名過的變數

模塊內可以這樣用：

```js
// module "my-module.js"
function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
var graph = {
  options: {
    color: "white",
    thickness: "2px",
  },
  draw: function () {
    console.log("From graph draw function");
  },
};
export { cube, foo, graph };
```

在另一個腳本就會變成這樣：

```js
//You should use this script in html with the type module ,
//eg ''<script type="module" src="demo.js"></script>",
//open the page in a httpserver,otherwise there will be a CORS policy error.
//script demo.js

import { cube, foo, graph } from "my-module";
graph.options = {
  color: "blue",
  thickness: "3px",
};
graph.draw();
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
```

### 使用預設輸出

如果我們要輸出單獨的函式、物件、class 或當做 fallback 值來輸出的話，就可以用預設輸出：

```js
// module "my-module.js"
export default function cube(x) {
  return x * x * x;
}
```

外部檔案的 import 用法：

```js
import cube from "my-module";
console.log(cube(3)); // 27
```

Note 注意預設輸出不能使用 var, let , const。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Statements/import", "import")}}
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
- [Axel Rauschmayer's book: "Exploring JS: Modules"](https://exploringjs.com/es6/ch_modules.html)
