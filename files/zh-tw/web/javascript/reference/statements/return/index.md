---
title: return
slug: Web/JavaScript/Reference/Statements/return
---

{{jsSidebar("Statements")}}

**`return` 表達式**會終止函式執行，並指明函式呼叫器（function caller）要回傳的數值。

{{InteractiveExample("JavaScript Demo: Statement - Return")}}

```js interactive-example
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}

console.log(getRectArea(3, 4));
// Expected output: 12

console.log(getRectArea(-3, 4));
// Expected output: 0
```

## 語法

```plain
return [[expression]];
```

- `expression`
  - : 要被回傳的表達式。如果省略了表達式，函式就會回傳 `undefined`。

## 敘述

如果在 function body 內宣告 `return` 的話，函式執行就會終止。如果指定數值的話，函式呼叫器就會回傳給定的數值。例如說，以下函式會回傳 `x` 參數的次方數。

```js
function square(x) {
  return x * x;
}
var demo = square(3);
// demo will equal 9
```

如果省略了表達式，函式就會回傳 `undefined`。

以下所有的 return 宣告都會終止函式執行：

```js
return;
return true;
return false;
return x;
return x + y / 3;
```

### 自動插入分號

`return` 宣告會受[自動插入分號](/zh-TW/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)（automatic semicolon insertion，ASI）影響。No line terminator is allowed between the `return` keyword and the expression.

```js
return;
a + b;
```

會因為 ASI 而變成：

```js
return;
a + b;
```

主控台會警告「unreachable code after return statement」（在 return 宣告後面有無法抵達的程式碼）。

> [!NOTE]
> 從 Gecko 40 開始，如果主控台發現在 return 宣告後面有無法抵達的程式碼，就會顯示警告。

要避免 ASI 問題，可以添加括號：

```js
return a + b;
```

## 示例

### 終止函式

在到達呼叫 `return` 的地方後，函式會立即停止。

```js
function counter() {
  for (var count = 1; ; count++) {
    // 無限迴圈
    console.log(count + "A"); // 直到 5
    if (count === 5) {
      return;
    }
    console.log(count + "B"); // 直到 4
  }
  console.log(count + "C"); // 永不顯示
}

counter();

// 輸出：
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
```

### 函式回傳

請參見[閉包](/zh-TW/docs/Web/JavaScript/Closures)。

```js
function magic(x) {
  return function calc(x) {
    return x * 42;
  };
}

var answer = magic();
answer(1337); // 56154
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [函式](/zh-TW/docs/Web/JavaScript/Reference/Functions)
- [閉包](/zh-TW/docs/Web/JavaScript/Closures)
