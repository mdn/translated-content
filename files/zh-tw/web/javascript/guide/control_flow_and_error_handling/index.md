---
title: 流程控制與例外處理
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript 擁有許多陳述式，特別是流程控制的陳述式，你可以用這些陳述式來增加程式的互動性。這個章節將會概要介紹陳述式。

[JavaScript 參考](/zh-TW/docs/Web/JavaScript/Reference/Statements)中有比本章更多關於陳述式的細節。 在 Javascript 程式碼中，分號（;）被用來隔開陳述式。

任何 JavaScript 運算式也是一個陳述式。 有關運算式的完整資訊，請參閱[運算式與運算子](/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_operators)。

## 區塊陳述式

最基本的陳述式是「用於將陳述式分塊」的「區塊陳述式」。程式區塊被以一對大括號隔離開來：

```plain
{
  陳述式 1;
  陳述式 2;
  .
  .
  .
  陳述式 n;
}
```

### 範例

區塊陳述式經常與流程控制陳述式（例如：`if`、`for`、`while`）搭配使用。

```js
while (x < 10) {
  x++;
}
```

在這裏，`{ x++; }` 是區塊陳述式。

**重要**：JavaScript 在 ECMAScript2015 （第六版）以前的版本並**沒有**區塊範圍的概念。 在區塊中的變數有效範圍是包含該區塊的函式或者是執行檔，並且在區塊外也可使用它們。換句話說，區塊並不定義了範圍。JavaScript 中的"獨立"區塊將會產生與 C 和 Java 中不同的效果。舉例來說：

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // 輸出 2
```

這裏輸出了 2 是因為區塊中變數 `var x` 陳述式擁有與區塊外的 `var x` 相同的有效範圍。在 C 或 Java，相同的程式碼將會輸出 1。

從 ECMAScript2015 版本起， 使用 `let` 定義的變數範圍將被限制於區塊內。

## 條件陳述式

條件陳述式是一些在指定條件爲真下將被執行的指令。 JavaScript 支援兩種條件陳述式： `if...else` 和 `switch`。

### `if...else` 陳述式

`if 陳述式將在「邏輯判斷爲真」下執行接下來的一個陳述式`。選擇性的 `else` 陳述式將會在「邏輯判斷爲否」時被執行。 `if` 陳述式的用法看起來如下：

```plain
if (指定條件) {
  陳述式 1;
} else {
  陳述式 2;
}
```

指定條件可以是任何會回傳 true 或 false 的運算式。參見 [Boolean](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description) 來進一步瞭解哪些運算式會回傳 `true` 及 `false`。假如指定條件爲 `true`，陳述式 1 會被執行；否則，陳述式 2 會被執行。陳述式 1 及陳述式 2 可以是任何陳述式，包含巢狀 `if` 陳述式。

你也可以藉由 `else if` 來使用複合的陳述式來測試多種不同的條件，如下：

```plain
if (指定條件1) {
  陳述式 1;
} else if (指定條件 2) {
  陳述式 2;
} else if (指定條件 n) {
  陳述式 n;
} else {
  最後陳述式;
}
```

在多個條件中，只有第一個條件爲 true 的陳述式會被執行。若要執行多個陳述式，可以將陳述式包在同一個程式區塊中（`{ ... }`）。 通常來說，使用區塊陳述式是很好的習慣，尤其在使用巢狀 if 的時候:

```plain
if (指定條件) {
  陳述式_1_執行_當_指定條件_爲_真;
  陳述式_2_執行_當_指定條件_爲_真;
} else {
  陳述式_3_執行_當_指定條件_爲_否;
  陳述式_4_執行_當_指定條件_爲_否;
}
```

建議不要在以賦值作爲條件運算式，因為"賦值"常常被和"等於"搞混。 例如， 不要寫出如下面的程式碼:

```js-nolint example-bad
if (x = y) {
  /* 陳述式 */
}
```

如果你真的需要以賦值作爲條件運算式，一種常見的方式是額外在賦值式外面加上一組括號。例如：

```js
if ((x = y)) {
  /* 陳述式 */
}
```

#### 爲"否"的值

下列的值會被看作 false（也稱為 {{Glossary("Falsy")}} 值）

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- 空字串(`""`)

其他所有的值，包含所有物件，當被作為條件陳述式都會被視為 `true`。

不要把"布林真假值"和"布林物件的真假值"弄混了。 例如:

```js
var b = new Boolean(false);
if (b) // 這會是 True
if (b == true) // 這會是 false
```

#### 範例

在下面的範例中，函式 `checkData` 回傳 `true` 當 `Text` 物件的長度爲三；否則，顯示出 alert 並回傳 `false`。

```js
function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert(
      "請輸入恰好三個字元. " +
        document.form1.threeChar.value +
        " is not valid.",
    );
    return false;
  }
}
```

### `switch` 陳述式

`switch` 陳述式允許程式依運算式的不同值來選擇不同標籤。 假如運算式和標籤匹配，程式會執行標籤對應的陳述式。範例如下:

```plain
switch (運算式) {
  case 標籤 1:
    陳述式 1
    [break;]
  case 標籤 2:
    陳述式 2
    [break;]
    ...
  default:
    陳述式
    [break;]
}
```

程序首先尋找一個標籤與運算式的值匹配的 `case` 子句，然後將控制權轉移給該子句，執行與其相關的陳述式。 如果沒有找到匹配的標籤，程序將查找 `default` 子句（選擇性），如果找到，則將控制權轉移到該子句，執行關聯的陳述式。 如果沒有找到 `default` 子句，程序繼續在 `switch` 結束後的陳述式執行。 按照慣例，默認子句是最後一個子句，但並不硬性規定。

與每個 `case` 子句相關聯的 `break` 陳述式（選擇性）確保程序在發現匹配的陳述式之後退出 `switch`，並在 `switch` 後的陳述式中繼續執行。 如果省略 `break`，程序將繼續在 `switch` 陳述式中的下一個陳述式執行。

#### 範例

在下面範例中，如果變數 `fruittype` 為「Bananas」，程序將與「Bananas」匹配並執行相關陳述式。 當遇到 `break` 時，程序離開 `switch` 並執行 `switch` 後的陳述式。 如果省略 `break`，也將執行 case 「Cherries」的陳述式。

```js
switch (fruittype) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + fruittype + ".");
}
console.log("Is there anything else you'd like?");
```

## 例外處理陳述式

你可以用以 `throw` 陳述式丟出例外，並以 `try...catch` 陳述式處理之。

- [`throw` 陳述式](#throw_statement)
- [`try...catch` 陳述式](#try...catch_statement)

### 例外的形態

任何物件（object）都可以在 JavaScript 中被拋出。 然而，並非所有拋出的物件都相同。 雖然將數字或字串作為錯誤物件使用是相當常見的，但使用為此目的專門創造的一種例外物件類型通常更有效:

- [ECMAScript 例外](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects#Fundamental_objects)
- {{domxref("DOMException")}} and {{domxref("DOMError")}}

### `throw` 陳述式

使用 `throw` 陳述式拋出例外。當拋出例外時，你要指定包含在要拋出物件中的值:

```plain
throw expression;
```

您可以拋出任何運算式，而不僅僅是特定類型的運算式。以下的程式碼會拋出一些不同類型的例外：

```js
throw "Error2"; // 字串形態
throw 42; // 數字形態
throw true; // True/False
throw {
  toString: function () {
    return "我是物件!";
  },
};
```

> **備註：** 您可以在拋出例外時指定物件。然後，可以在 catch 區塊中引用對象的屬性。

```js
// 創建類型爲 UserException 的物件
function UserException(message) {
  this.message = message;
  this.name = "UserException";
}

// 讓例外轉換成整齊的字串當它被當作字串使用時
// （舉例來說:於 error console）
UserException.prototype.toString = function () {
  return this.name + ': "' + this.message + '"';
};

// 創建一個物件的實例並丟出它
throw new UserException("Value too high");
```

### `try...catch` 陳述式

`try...catch` 陳述式標記了一組要嘗試的陳述式，並在拋出例外時指定一個或多個響應。 如果例外被拋出，`try...catch` 陳述式捕獲它。

`try...catch` 陳述式包括一個 `try` 區塊，它包含一個或多個陳述式，零個或多個 `catch` 區塊，包含在 `try` 區塊中拋出例外時該做什麼的陳述式。 也就是說，你希望 `try` 區塊成功，如果它不成功，你希望控制權傳遞給 `catch` 區塊。 如果 `try` 區塊內的任何陳述式（或在 `try` 區塊內調用的函數中）拋出例外，則控制立即切換到 `catch` 區塊。 如果在 `try` 區塊中沒有拋出例外，則跳過 `catch` 區塊。 `finally` 區塊在 `try` 和 `catch` 區塊執行後執行，但在 `try...catch` 陳述式之後的陳述式之前執行。

以下的範例使用 `try...catch` 陳述式。該範例調用基於傳遞給函數的值並從陣列中檢索月份名稱的函數。如果值不對應於月份數（1-12），則會拋出一個例外，其值為 "InvalidMonthNo"，並且 `catch` 區塊中的陳述式將 `monthName` 變數設置為 `unknown`。

```js
function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  if (months[mo]) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; //throw 關鍵字在這裏被使用
  }
}

try {
  // statements to try
  monthName = getMonthName(myMonth); // 函式可以丟出例外
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // 將例外傳至例外處理機制
}
```

#### `catch` 區塊

你可以使用 `catch` 區塊來處理 `try` 區塊可能丟出的例外。

```plain
catch (catchID) {
  陳述式
}
```

`catch` 區塊指定用來保存 `throw` 陳述式所丟出的值的標識符（前面語法中的 `catchID`） 您可以使用此標識符獲取有關被拋出的例外的信息。 JavaScript 在進入`catch` 區塊時創建此標識符; 標識符僅持續 `catch` 區塊的持續時間；在 `catch` 區塊完成執行後，標識符不再可用。

例如，下列的程式碼中丟出了一個例外，當例外發生後，控制權被轉交給 `catch` 區塊。

```js
try {
  throw "myException"; // 產生例外
} catch (e) {
  // 用於處理例外的陳述式
  logMyErrors(e); // 將例外物件傳給 error handler
}
```

#### `finally` 區塊

`finally` 區塊中包含在 `try` 和 `catch` 區塊執行之後但在 `try...catch` 陳述式之後的陳述式之前 執行的陳述式。 無論是否拋出例外，`finally` 區塊都會執行。 如果拋出例外，則即使沒有 `catch` 區塊處理例外，`finally` 區塊中的陳述式也會執行。

您可以使用 `finally` 區塊來使腳本在發生例外時正常地結束。例如，您可能需要釋放腳本中綁定的資源。 在以下示例中，打開一個文件，然後執行使用該文件的陳述式（伺服器端 JavaScript 允許您訪問文件）。 如果在打開文件時拋出例外，`finally` 區塊會在腳本結束之前關閉文件。

```js
openMyFile();
try {
  writeMyFile(theData); // 可能產生例外
} catch (e) {
  handleError(e); // 處理可能發生的例外
} finally {
  closeMyFile(); // 總是在 try 結束後關閉檔案
}
```

如果 `finally` 區塊有返回值，那麼該值將成為整個 `try-catch-finally` 過程的返回值，而捨棄 `try` 和 `catch` 區塊中的任何返回陳述式：

```js
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    return true; // 這個回傳會被擱置
    // 直到 finally 區塊結束
    console.log(2); // 不會到達這裏
  } finally {
    console.log(3);
    return false; // 覆寫先前的 "return"
    console.log(4); // 不會到達這裏
  }
  // "return false" 在這裏被執行
  console.log(5); // 不會到達這裏
}
f(); // console 0, 1, 3; 會回傳false
```

`finally` 區塊覆寫返回值也適用於在 `catch` 區塊中拋出或重新拋出的例外（即便在`catch` 中再次丟出例外，`catch` 所屬的 `finally` 區塊還是會被執行）：

```js
function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('caught inner "bogus"');
    throw e; // 此處的 throw 陳述式將被擱置到
    // finally 區塊結束
  } finally {
    return false; // 覆寫先前的"throw"
  }
  // "return false" 在此被執行
}

try {
  f();
} catch (e) {
  // 這裏永遠不可能到達因為在 f 函式中 catch 的 throw
  // 被 finally 中的 return 覆寫了
  console.log('caught outer "bogus"');
}

// 輸出 -> caught inner "bogus"
```

#### 巢狀 try...catch 陳述式

你可以使用一個或多個的 `try...catch` 陳述式。 假如一個內層的`try...catch` 陳述式不具有 `catch` 區塊， 它將必須要有 `finally` 區塊與及封閉的 `try...catch` 陳述式來檢測是否有符合的例外。

### 使用 `Error` 物件

根據錯誤的類型，您可以使用 "name" 和 "message" 屬性來獲取更精確的資訊。"name" 提供了錯誤所屬的類別（class）（例如，"DOMException" 或 "Error"），而 "message" 通常提供藉由將錯誤物件轉換為字串所獲得的更簡潔的資訊。參見[巢狀 try 區塊](/zh-TW/docs/Web/JavaScript/Reference/Statements/try...catch#Nested_try-blocks)位於 [`try...catch`](/zh-TW/docs/Web/JavaScript/Reference/Statements/try...catch) 參考資料頁面。

假如您要丟出自定義的例外， 為了方便使用這些屬性（例如，如果你的 `catch` 區塊並不要區分你自己的例外和系統的），你可以使用 `Error` 構造子。舉例來說：

```js
function doSomethingErrorProne () {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
....
try {
  doSomethingErrorProne();
}
catch (e) {
  console.log(e.name); // 紀錄 'Error'
  console.log(e.message); // 紀錄 'The message' 或者其他 JavaScript 例外的資訊)
}
```

## Promises 容器

從 ECMAScript2015 起，JavaScript 支援 {{jsxref("Promise")}} 物件，允許您控制延遲和異步操作的流程。

`Promise` 有以下幾種狀態:

- _pending_：等待中，為初始之狀態，即不是 fulfilled 也不是 rejected。
- _fulfilled_：已實現，表示操作成功完成。
- _rejected_：已拒絕，表示操作失敗。
- _settled_：已完成，表示 Promise 狀態為已實現或已拒絕，但不是等待中。

### 使用 XHR 載入圖檔

這裏有個簡單的範例，使用了 `Promise` 物件與及 [`XMLHttpRequest`](/zh-TW/docs/Web/API/XMLHttpRequest) 來載入 MDN GitHub [promise-test](https://github.com/mdn/promises-test/blob/gh-pages/index.html) repository 中的一張圖檔。你也可以[觀看結果](http://mdn.github.io/promises-test/)。 每一步都有註解來讓您慢慢理解 Promise 物件與及 XHR 架構。 下面的版本沒有註解，但藉由觀察 `Promise` 物件的變動您或許可以對 promise 物件有所了解:

```js
function imgLoad(url) {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "blob";
    request.onload = function () {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(
          Error(
            "Image didn't load successfully; error code:" + request.statusText,
          ),
        );
      }
    };
    request.onerror = function () {
      reject(Error("There was a network error."));
    };
    request.send();
  });
}
```

以獲得更多資訊，查看 {{jsxref("Promise")}} 參照頁面，以及[使用 Promises](/zh-TW/docs/Web/JavaScript/Guide/Using_promises) 教學。

{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}
