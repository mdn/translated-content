---
title: JavaScript 程式碼範例寫作指南
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

以下指南說明如何為 MDN Web 文件撰寫 JavaScript 範例程式碼。本文展現一系列撰寫簡潔範例的規則，以確保盡可能多的讀者都能理解。

## JavaScript 程式碼範例通用指南

本節說明撰寫 JavaScript 程式碼範例時應謹記在心的通用指南。後續章節會涵蓋更具體的細節。

### 格式選擇

對於正確的縮排、空白與單行長度的看法一直存在爭議。這類議題的討論往往會分散對內容創作與維護的注意力。

在 MDN Web 文件，我們使用 [Prettier](https://prettier.io/) 作為程式碼格式化工具，以保持一致的程式碼風格（並避免無關緊要的討論）。你可以參考我們的[設定檔](https://github.com/mdn/content/blob/main/.prettierrc.json)來了解目前的規則，並閱讀 [Prettier 文件](https://prettier.io/docs/index.html) 以獲取更多資訊。

Prettier 會格式化所有程式碼並保持風格一致。不過，還有些額外規則需要遵守。

### 使用現代 JavaScript 特性

當所有主要瀏覽器（Chrome、Edge、Firefox 和 Safari）皆支援某項新功能時，你即可使用該功能。

## 陣列

### 建立陣列

建立陣列時，請使用字面值而非建構子。

請用如下方式建立陣列：

```js example-good
const visitedCities = [];
```

請別在建立陣列時這麼做：

```js example-bad
const visitedCities = new Array(length);
```

### 新增項目

新增陣列項目時，請使用 [`push()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 而不要直接指定。譬如以下這個陣列：

```js
const pets = [];
```

請用如下方式新增陣列項目：

```js example-good
pets.push("cat");
```

請別用這個方式新增陣列項目：

```js example-bad
pets[pets.length] = "cat";
```

## 非同步函式

撰寫非同步程式碼能提升效能，建議能用就用。具體而言，你可以用：

- [Promise](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/zh-TW/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/zh-TW/docs/Web/JavaScript/Reference/Operators/await)

當兩種技術皆可行時，我們傾向使用較簡潔的 `async`/`await` 語法。不過，除非是在 ECMAScript 模組中，否則無法在最上層使用 `await`。Node.js 使用的 CommonJS 模組並非 ES 模組。如果你的範例須適用於所有環境，請避免使用最上層 `await`。

## 註解

註解對於撰寫好的程式碼範例至關重要。它能釐清程式碼的意圖並有助於開發者了解。請多花些心思在它身上。

- 若一段程式碼的目的或邏輯不是很清楚，加一段註解說明你的意圖。如下所示：

  ```js example-good
  let total = 0;

  // 計算 arr 陣列前四項元素的總和
  for (let i = 0; i < 4; i++) {
    total += arr[i];
  }
  ```

  另一方面，以文字重述程式碼並非註解的良好使用方式：

  ```js example-bad
  let total = 0;

  // For 迴圈從 1 到 4
  for (let i = 0; i < 4; i++) {
    // 把值加到 total 變數裡
    total += arr[i];
  }
  ```

- 當函式名稱已表明用途時，也就沒必要寫註解了。請這樣寫：

  ```js example-good
  closeConnection();
  ```

  而別這樣寫：

  ```js example-bad
  closeConnection(); // 關閉連線
  ```

### 採用單行註解

單行註解使用 `//` 標記，區塊註解則使用 `/* … */` 包覆。

通常情況下，請使用單行註解來標註程式碼。撰寫時須在每行註解前加上 `//`，以便於視覺上辨識出被註解掉的程式碼。此外，這項規範也允許在除錯時使用 `/* … */` 來暫時註解掉部分程式碼區塊。

- 在斜線跟註解說明間加一格空白。以大寫開頭（寫英文註解時），但別在句末加上句號。

  ```js example-good
  // This is a well-written single-line English comment
  // 這是一段採用正確寫法的中文單行註解
  ```

- 若註解不是直接出現在新的縮排層級後，請先加入一行空白行，再新增註解。這能形成一個程式碼區塊，使註解指涉的內容更清楚。此外，請將註解放在單獨行上，位於指涉程式碼前方。以下範例說明這項規範：

  ```js example-good
  function checkout(goodsPrice, shipmentPrice, taxes) {
    // 計算總價
    const total = goodsPrice + shipmentPrice + taxes;

    // 建立並附加新的 <p> 元素到 document
    const para = document.createElement("p");
    para.textContent = `Total price is ${total}`;
    document.body.appendChild(para);
  }
  ```

### 日誌輸出

- 在用於正式環境的程式碼中，通常不用為記錄資料的部分新增註解。在程式碼範例中，我們經常使用 `console.log()`、`console.error()` 或類似的函式來輸出重要數值。為了讓讀者在不執行程式碼的情況下理解其行為，你可以在該函式*之後*新增註解，說明將會輸出的內容。請這樣撰寫：

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket); // ['香蕉', '芒果', '橘子']
  }
  ```

  請別這樣寫：

  ```js example-bad
  function exampleFunc(fruitBasket) {
    // Logs: ['香蕉', '芒果', '橘子']
    console.log(fruitBasket);
  }
  ```

- 為避免一行變得太長，請像這樣把註解放在函式*之後*：

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket);
    // ['香蕉', '芒果', '橘子', '蘋果', '梨子', '榴槤', '檸檬']
  }
  ```

### 多行註解

短註解通常比較好，因此請儘量將其限制在 60 到 80 字元內的單行。若無法做到，請在每行開頭使用 `//`：

```js example-good
// 這是一個多行註解的範例。
// 接下來的假想函式具有一些不尋常的
// 限制，我想特別說明。
// 限制 1
// 限制 2
```

請別使用 `/* … */`：

```js example-bad
/* 這是一個多行註解的範例。
   接下來的假想函式具有一些不尋常的
   限制，我想特別說明。
   限制 1
   限制 2 */
```

### 使用註解標示省略部分

為使範例保持簡潔，省略冗餘程式碼並使用刪節號（…）是必要的。然而，撰寫時應謹慎處理，因為開發者經常將範例程式碼整段複製貼上，因此我們提供的所有程式碼範例都應為有效的 JavaScript。

在 JavaScript 中，應將刪節號（`…`）放入註解中。如果可以，請表明使用此程式碼片段的預期結果。

將刪節號（…）放入註解能更明確表達意圖，避免開發者在複製貼上範例程式碼時發生錯誤。請這樣撰寫：

```js example-good
function exampleFunc() {
  // 在這加入你的程式碼
  // …
}
```

請別這樣使用刪節號（…）：

```js example-bad
function exampleFunc() {
  …
}
```

### 註解掉參數

在撰寫程式碼時，通常會省略不需要的參數。但在某些範例中，你可能需要明確表示未使用某些可用參數。

為此，請在參數列表中使用 `/* … */` 來標示。這是單行註解（`//`）規則的一個例外。

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## 函式

### 函式名稱

函式名稱應使用{{Glossary("camel_case", "駝峰命名法")}}，首個字母須為小寫。請選擇簡潔、易讀且具語意性的名稱，以提升可讀性。

以下是符合規範的函式名稱範例：

```js example-good
function sayHello() {
  console.log("你好！");
}
```

請別這樣命名函式：

```js example-bad
function SayHello() {
  console.log("你好！");
}

function doIt() {
  console.log("你好！");
}
```

### 函式宣告

- 可能的話，請優先使用函式宣告（function declaration）來定義函式，而非函式運算式（function expression）。

  以下是建議的函式宣告方式：

  ```js example-good
  function sum(a, b) {
    return a + b;
  }
  ```

  以下不是定義函式的好方法：

  ```js example-bad
  let sum = function (a, b) {
    return a + b;
  };
  ```

- 當使用匿名函式作為回呼函式（即傳遞給另一個方法呼叫的函式）時，若不需要存取 `this`，請使用箭頭函式，使程式碼更簡潔易讀。

  以下為建議寫法：

  ```js example-good
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce((a, b) => a + b);
  ```

  建議別這樣寫：

  ```js example-bad
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce(function (a, b) {
    return a + b;
  });
  ```

- 請避免使用箭頭函式來將函式指派給識別字；尤其在定義方法時，不要使用箭頭函式。請使用 `function` 關鍵字進行函式宣告：

  ```js example-good
  function x() {
    // …
  }
  ```

  請別這樣寫：

  ```js example-bad
  const x = () => {
    // …
  };
  ```

- 使用箭頭函式時，請在情況允許時使用[隱式回傳](/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body)（即*運算式主體*）：

  ```js example-good
  arr.map((e) => e.id);
  ```

  而別這樣寫：

  ```js example-bad
  arr.map((e) => {
    return e.id;
  });
  ```

## 迴圈與條件陳述式

### 迴圈初始化

當需要用[迴圈](/zh-TW/docs/Learn_web_development/Core/Scripting/Loops)時，請根據需求選擇適當的迴圈類型，例如 [`for(;;)`](/zh-TW/docs/Web/JavaScript/Reference/Statements/for)、[`for-of`](/zh-TW/docs/Web/JavaScript/Reference/Statements/for-of)、[`while`](/zh-TW/docs/Web/JavaScript/Reference/Statements/while) 等等。

- 在遍歷集合元素時，請避免使用傳統 `for (;;)` 迴圈，建議使用 `for-of` 或 `forEach()`。請注意，若使用的集合並非 `Array`（陣列），則須確認 `for-of` 是否支援（它要求變數可迭代），或確保 `forEach()` 方法是否存在。

  請使用 `for-of`：

  ```js example-good
  const dogs = ["Rex", "Lassie"];
  for (const dog of dogs) {
    console.log(dog);
  }
  ```

  或者 `forEach()`：

  ```js example-good
  const dogs = ["Rex", "Lassie"];
  dogs.forEach((dog) => {
    console.log(dog);
  });
  ```

  請避免使用 `for (;;)`，因為這不僅需要額外宣告索引變數 `i`，還得手動追蹤陣列長度。這對初學者來說很容易出錯。

  ```js example-bad
  const dogs = ["Rex", "Lassie"];
  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
  ```

- 請確保正確定義迴圈的初始變數，在 `for-of` 迴圈中使用 `const`，在其他類型的迴圈中則使用 `let`，請不要省略。以下是正確範例：

  ```js example-good
  const cats = ["Athena", "Luna"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  以下範例未遵循建議的初始化規範（它會隱式建立全域變數，並在嚴格模式（strict mode）下導致錯誤）：

  ```js example-bad
  const cats = ["Athena", "Luna"];
  for (i of cats) {
    console.log(i);
  }
  ```

- 當你需要同時存取值跟索引時，請使用 `.forEach()` 來取代 `for (;;)`。請這樣撰寫：

  ```js example-good
  const gerbils = ["Zoé", "Chloé"];
  gerbils.forEach((gerbil, i) => {
    console.log(`Gerbil #${i}: ${gerbil}`);
  });
  ```

  請別這樣寫：

  ```js example-bad
  const gerbils = ["Zoé", "Chloé"];
  for (let i = 0; i < gerbils.length; i++) {
    console.log(`Gerbil #${i}: ${gerbils[i]}`);
  }
  ```

> [!WARNING]
> 永遠別在陣列或字串上使用 `for-in`。

> [!NOTE]
> 請考慮完全不使用 `for` 迴圈。如果你正在操作 [`陣列`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)（或在某些情況下操作 [`字串`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)），請考慮使用更具語意性的迭代方法，例如 [`map()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)、[`every()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/every)、[`findIndex()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)、[`find()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/find)、[`includes()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) 等等。

### 控制陳述式

在 `if-else` 控制陳述中，有一個需要特別注意的情況。如果 `if` 陳述以 `return` 結束，就不用再寫 `else` 陳述。

請在 `if` 陳述後直接繼續撰寫程式碼。請這樣撰寫：

```js example-good
if (test) {
  // 當 test 為 true 時做某些事
  // …
  return;
}

// 當 test 為 false 時做某些事
// …
```

請別這樣寫：

```js example-bad
if (test) {
  // 當 test 為 true 時做某些事
  // …
  return;
} else {
  // 當 test 為 false 時做某些事
  // …
}
```

### 在控制流程陳述式與迴圈中使用大括號

雖然 `if`、`for` 和 `while` 等控制流程陳述在內容僅包含單一陳述時，並不強制要求使用大括號，仍建議你始終使用大括號。請這樣撰寫：

```js example-good
for (const car of storedCars) {
  car.paint("red");
}
```

請別這樣寫：

```js example-bad
for (const car of storedCars) car.paint("red");
```

這樣能防止在加入更多陳述式時忘記加上大括號。

### Switch 陳述式

Switch 陳述可能有些棘手。

- 在特定情況下，不要在 `return` 陳述式後寫 `break` 陳述式。請改為這樣寫 `return` 陳述式：

  ```js example-good
  switch (species) {
    case "chicken":
      return farm.shed;
    case "horse":
      return corral.entry;
    default:
      return "";
  }
  ```

  如果加上 `break` 陳述式，它將無法被執行。請別這樣撰寫：

  ```js example-bad
  switch (species) {
    case "chicken":
      return farm.shed;
      break;
    case "horse":
      return corral.entry;
      break;
    default:
      return "";
  }
  ```

- 請將 `default` 作為最後一個 case，且不要在其結尾使用 `break` 陳述式。如果需要不同的處理方式，請加上註解說明原因。

- 請記住，在 case 區塊內宣告區域變數時，應加上大括號來定義作用域：

  ```js
  switch (fruits) {
    case "Orange": {
      const slice = fruit.slice();
      eat(slice);
      break;
    }
    case "Apple": {
      const core = fruit.extractCore();
      recycle(core);
      break;
    }
  }
  ```

### 錯誤處理

- 若程式在特定狀態下拋出未捕獲的錯誤，將會中斷執行，並可能降低範例實用性。因此，請使用 [`try-catch`](/zh-TW/docs/Web/JavaScript/Reference/Statements/try...catch) 區塊來捕獲錯誤，如下所示：

  ```js example-good
  try {
    console.log(getResult());
  } catch (e) {
    console.error(e);
  }
  ```

- 當 `catch` 陳述式不需要參數時，請省略它：

  ```js example-good
  try {
    console.log(getResult());
  } catch {
    console.error("發生了一個錯誤！");
  }
  ```

> [!NOTE]
> 請記住，僅應捕獲並處理*可恢復*的錯誤。所有不可恢復的錯誤應該讓其傳遞，並向上冒泡至呼叫堆疊。

## 物件

### 物件名稱

- 定義類別時，請使用*帕斯卡命名法（PascalCase）*（首字母大寫）作為類別名稱，並使用*駝峰命名法（camelCase）*（首字母小寫）作為物件屬性與方法名稱。

- 定義物件實例時，不論是透過字面值還是建構子，請使用*駝峰命名法（camelCase）*，即首字母小寫。例如：

  ```js example-good
  const hanSolo = new Person("韓．蘇洛", 25, "他");

  const luke = {
    name: "路克．天行者",
    age: 25,
    pronouns: "他",
  };
  ```

### 物件建立

在建立一般物件時（即不涉及類別），請使用字面值而非建構子。

例如，請這樣撰寫：

```js example-good
const object = {};
```

請別這樣建立一般物件：

```js example-bad
const object = new Object();
```

### 物件類別

- 請使用 ES 類別語法來定義物件，而非舊式建構子。

  例如，以下是建議的做法：

  ```js example-good
  class Person {
    constructor(name, age, pronouns) {
      this.name = name;
      this.age = age;
      this.pronouns = pronouns;
    }

    greeting() {
      console.log(`哈囉！我是${this.name}`);
    }
  }
  ```

- 使用 `extends` 來實作繼承：

  ```js example-good
  class Teacher extends Person {
    // …
  }
  ```

### 方法

定義方法時，請使用方法定義語法：

```js example-good
const obj = {
  foo() {
    // …
  },
  bar() {
    // …
  },
};
```

而不是：

```js example-bad
const obj = {
  foo: function () {
    // …
  },
  bar: function () {
    // …
  },
};
```

### 物件屬性

- [`Object.prototype.hasOwnProperty()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 方法已被棄用，建議改用 [`Object.hasOwn()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)。
- 如果可以，請改用簡寫語法，以避免重覆屬性識別字。請這樣撰寫：

  ```js example-good
  function createObject(name, age) {
    return { name, age };
  }
  ```

  請別這樣寫：

  ```js example-bad
  function createObject(name, age) {
    return { name: name, age: age };
  }
  ```

## 運算子

本節列出我們對運算子的使用建議，以及適用時機。

### 條件運算子

當你需要根據條件將某個字面值存入變數時，請使用[三元運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Conditional_operator) 來取代 `if-else` 陳述式。此規則同樣適用於回傳值的情境。請這樣撰寫：

```js example-good
const x = condition ? 1 : 2;
```

請別這樣寫：

```js example-bad
let x;
if (condition) {
  x = 1;
} else {
  x = 2;
}
```

條件運算子在建立用來記錄日誌的字串時非常有用。這類情境下，使用一般的 `if-else` 陳述式會導致程式碼顯得冗長，將記錄這類次要操作的程式碼與範例的核心重點混在一起，影響可讀性。

### 嚴格相等運算子

請優先使用[嚴格相等](/zh-TW/docs/Web/JavaScript/Reference/Operators/Strict_equality)（三重等號 `===`）與嚴格不相等運算子，而非寬鬆相等（雙重等號 `==`）與寬鬆不相等運算子。

請依照以下方式使用嚴格相等與嚴格不相等運算子：

```js example-good
name === "Shilpa";
age !== 25;
```

請別使用寬鬆相等與不相等運算子，如下所示：

```js example-bad
name == "Shilpa";
age != 25;
```

如果必須使用 `==` 或 `!=`，請記住 `== null` 是唯一可接受的情境。由於 TypeScript 會在其它情況下產生錯誤，因此我們不希望範例程式碼中包含這類用法。建議加上註解，說明為何需要這樣使用。

### 布林測試的快捷寫法

請優先使用布林測試的快捷寫法。例如，應使用 `if (x)` 和 `if (!x)`，而非 `if (x === true)` 和 `if (x === false)`，除非不同類型的真值或假值需要分別處理。

## 字串

字串可以使用單引號（如 `'A string'`）或雙引號（如 `"A string"`）包覆。不用擔心應使用哪種引號，Prettier 會自動保持一致。

### 樣板字面值

若要在字串中插入字面值，請使用[樣板字面值](/zh-TW/docs/Web/JavaScript/Reference/Template_literals)。

- 以下是樣板字面值的建議使用方法，這能避免許多空格錯誤。

  ```js example-good
  const name = "Shilpa";
  console.log(`Hi! I'm ${name}!`);
  ```

  請別這樣連接字串：

  ```js example-bad
  const name = "Shilpa";
  console.log("Hi! I'm" + name + "!"); // Hi! I'mShilpa!
  ```

- 請勿過度使用樣板字面值。如果沒有變數插值，請改用一般的字串字面值。

## 變數

### 變數名稱

好的變數名稱對於了解程式碼非常重要。

<!-- cSpell:ignore acclmtr -->

- 使用簡短識別字，並避免非通用縮寫。良好的變數名稱通常介於 3 到 10 個字元之間，但這只是建議。例如，`accelerometer` 比起為了減少字元數而縮寫為 `acclmtr` 更具可讀性。
- 盡量使用與現實世界相關的範例，讓變數具有清晰語意。只有在範例極為簡單或純粹為示範時，才可用 `foo` 和 `bar` 之類的佔位名稱。
- 請勿使用[匈牙利命名法](https://zh.wikipedia.org/wiki/匈牙利命名法)。不要在變數名稱前加上類型前綴。例如，應寫作 `bought = car.buyer !== null`，而非 `bBought = oCar.sBuyer != null`；或使用 `name = "John Doe"`，而非 `sName = "John Doe"`。
- 在命名集合時，避免在名稱中加上 `list`、`array` 或 `queue` 等類型名稱。請使用內容名稱並以複數形式表示。例如，若為汽車陣列，請使用 `cars` 而非 `carArray` 或 `carList`。但在某些情境下可能有例外，例如描述某個抽象功能而無特定應用時。
- 針對原始值（primitive value），請使用*駝峰命名法*，即首字母小寫的命名方式。不要使用 `_`。請選擇簡潔、易讀且具語意性的名稱。例如，應使用 `currencyName` 而非 `currency_name`。
- 避免使用冠詞或所有格。例如，請使用 `car` 而非 `myCar` 或 `aCar`。但在描述某個功能而不涉及具體應用時可能有例外。
- 請依照以下範例來命名變數：

  ```js example-good
  const playerScore = 0;
  const speed = distance / time;
  ```

  請別這樣命名變數：

  ```js example-bad
  const thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;
  const s = d / t;
  ```

> [!NOTE]
> 唯一允許不使用可讀性高且具語意名稱的情境，是遵循公認的命名慣例，例如使用 `i` 和 `j` 作為迴圈的迭代變數。

### 變數宣告

宣告變數與常數時，請使用 [`let`](/zh-TW/docs/Web/JavaScript/Reference/Statements/let) 和 [`const`](/zh-TW/docs/Web/JavaScript/Reference/Statements/const)，而非 [`var`](/zh-TW/docs/Web/JavaScript/Reference/Statements/var)。以下範例說明在 MDN Web 文件上的建議與不建議的做法：

- 如果變數不會被重新指定，請優先使用 `const`，例如：

  ```js example-good
  const name = "Shilpa";
  console.log(name);
  ```

- 如果變數的值會變更，請使用 `let`，如下所示：

  ```js example-good
  let age = 40;
  age++;
  console.log("生日快樂！");
  ```

- 以下範例在應該使用 `const` 的地方使用了 `let`。雖然這段程式碼仍可正常運作，但我們希望在 MDN Web 文件的範例中避免這種用法。

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- 以下範例對需要重新指定值的變數使用了 `const`，這樣的重新指定將會導致錯誤。

  ```js example-bad
  const age = 40;
  age++;
  console.log("生日快樂！");
  ```

- 以下範例使用了 `var`，導致汙染全域作用域：

  ```js example-bad
  var age = 40;
  var name = "Shilpa";
  ```

- 請一行宣告一個變數，如下所示：

  ```js example-good
  let var1;
  let var2;
  let var3 = "Apapou";
  let var4 = var3;
  ```

  請別在同一行宣告多個變數，無論是使用逗號分隔或鏈式宣告。請避免如下方式宣告變數：

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 被隱式建立為全域變數，在嚴格模式下會導致錯誤
  ```

### 型別轉換

請避免隱式型別轉換。特別是，請避免使用 `+ val` 來強制轉換為數值，或 `"" + val` 來強制轉換為字串。請改用 `Number()` 和 `String()`（不帶 `new`）。請這樣撰寫：

```js example-good
class Person {
  #name;
  #birthYear;

  constructor(name, year) {
    this.#name = String(name);
    this.#birthYear = Number(year);
  }
}
```

請不要寫：

```js example-bad
class Person {
  #name;
  #birthYear;

  constructor(name, year) {
    this.#name = "" + name;
    this.#birthYear = +year;
  }
}
```

## 避免使用的 Web API

除了這些 JavaScript 語言特性外，我們還建議遵循一些與 Web API 相關的指南。

### 避免使用瀏覽器前綴

如果所有主要瀏覽器（Chrome、Edge、Firefox 和 Safari）皆支援某項功能，就不用為該功能加上前綴。請這樣撰寫：

```js example-good
const context = new AudioContext();
```

請避免使用前綴所帶來的額外複雜性。請不要這樣撰寫：

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

同樣的規則也適用於 CSS 前綴。

### 避免使用已棄用的 API

當某個方法、屬性或整個介面已被棄用時，請不要使用（除非是在說明文件中）。請改用較新的 API。

以下是部分應避免使用的 Web API 及其替代方案：

- 使用 `fetch()` 取代 XHR（`XMLHttpRequest`）。
- 在 Web Audio API 中，使用 `AudioWorklet` 取代 `ScriptProcessorNode`。

### 使用安全可靠的 API

- 請別使用 {{DOMxRef("Element.innerHTML")}} 來插入純文字內容，應改用 {{DOMxRef("Node.textContent")}}。若開發者無法完全掌控 `innerHTML` 的參數，可能會導致安全性問題。身為技術文件撰寫者，我們應該盡量避免使用它，以減少開發者在複製貼上我們的程式碼時出現安全性漏洞。

  以下範例示範了 `textContent` 的使用方式。

  ```js example-good
  const text = "各位親愛的朋友，大家好呀！";
  const para = document.createElement("p");
  para.textContent = text;
  ```

  請別使用 `innerHTML` 來插入*純文字*到 DOM 節點中。

  ```js example-bad
  const text = "各位親愛的朋友，大家好呀！";
  const para = document.createElement("p");
  para.innerHTML = text;
  ```

- `alert()` 函式並不可靠。在 MDN Web 文件的[即時範例](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Live_samples)中，若範例嵌入於 {{HTMLElement("iframe")}}，`alert()` 可能無法正常運作。此外，它會導致整個視窗出現模態（modal）對話框，可能令人困擾。在靜態程式碼範例裡，請使用 `console.log()` 或 `console.error()`。但在[即時範例](/zh-TW/docs/MDN/Writing_guidelines/Page_structures/Live_samples)裡，請避免使用 `console.log()` 和 `console.error()`，因為這些輸出不會顯示。建議改用專門的使用者介面（UI）元件來呈現資訊。

### 使用適合的 log 函式

- 記錄訊息時，請使用 `console.log()`。
- 記錄錯誤時，請使用 `console.error()`。

## 參見

[JavaScript 語言參考](/zh-TW/docs/Web/JavaScript/Reference) - 瀏覽我們的 JavaScript 參考頁面，查看一些優秀、簡潔且具意義的 JavaScript 程式碼片段。
