---
title: 區塊
slug: Web/JavaScript/Reference/Statements/block
---

{{jsSidebar("Statements")}}

## 總覽

區塊陳述用來組合零個或多個陳述。我們使用一對大括號 { } 以界定區塊。

<table>
  <tbody>
    <tr>
      <th colspan="2">陳述句</th>
    </tr>
    <tr>
      <td>Implemented in</td>
      <td>JavaScript 1.0</td>
    </tr>
    <tr>
      <td>ECMAScript edition</td>
      <td>ECMA-262 1st edition</td>
    </tr>
  </tbody>
</table>

## 語法

```plain
{
  陳述_1
  陳述_2
  ...
  陳述_n
}
```

### 參數

- `陳述_1`, `陳述_2`, `陳述_n`
  - : 區塊陳述中的陳述句群。

## 說明

區塊陳述通常配合流程控制陳述（如 `if`、`for`、`while`）一併使用。

#### `var`

使用`var`區塊中定義的變數，其存取範圍是整個整個函式或是腳本，即為 Execution Context 的範圍中。

```js
var x = 1;
{
  var x = 2;
}
alert(x); // outputs 2
```

輸出結果是 2。因為 var 是宣告於整個腳本範圍中。

#### `let` 和 `const`

當使用`let`或是`const`進行宣告時，其存取範圍是只有本身定義的區塊中。

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // logs 1
```

#### `function`

當 function 被呼叫時，會建立此 function 的 Execution Context，因此在 function 區塊使用`var`整個 function 區塊中都可對其進行存取。

```js
function foo() {
  {
    var a = "var";
    {
      let a = "let";
      console.log(a); // let
    }
  }
  console.log(a); // var
}
foo();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
