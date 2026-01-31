---
title: return
slug: Web/JavaScript/Reference/Statements/return
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`return`** 陳述式會終止函式的執行，並指定要回傳給函式呼叫者的值。

{{InteractiveExample("JavaScript Demo: return statement")}}

```js interactive-example
function getRectArea(width, height) {
  if (width > 0 && height > 0) {
    return width * height;
  }
  return 0;
}

console.log(getRectArea(3, 4));
// 預期輸出：12

console.log(getRectArea(-3, 4));
// 預期輸出：0
```

## 語法

```js-nolint
return;
return expression;
```

- `expression` {{optional_inline}}
  - : 要回傳其值的表達式。若省略，則回傳 `undefined`。

## 描述

`return` 陳述式只能在函式主體內使用。當 `return` 陳述式用在函式主體中時，函式的執行將會停止。`return` 陳述式放置在不同的函式中會有不同的效果：

- 在一般函式中，對該函式的呼叫會求值為回傳值。
- 在 async 函式中，產生的 promise 會以回傳值兌現。
- 在 generator 函式中，產生的 generator 物件的 `next()` 方法會回傳 `{ done: true, value: returnedValue }`。
- 在 async generator 函式中，產生的 async generator 物件的 `next()` 方法會回傳一個以 `{ done: true, value: returnedValue }` 兌現的 promise。

如果 `return` 陳述式在 {{jsxref("Statements/try...catch", "try")}} 區塊內執行，且該區塊有 `finally` 區塊，則 `finally` 區塊會先執行，然後才實際回傳該值。

### 自動分號插入

語法禁止在 `return` 關鍵字與要回傳的表達式之間出現行終止符。

```js-nolint example-bad
return
a + b;
```

[自動分號插入（ASI）](/zh-TW/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion)會將上面的程式碼轉換為：

```js-nolint
return;
a + b;
```

這會使函式回傳 `undefined`，且 `a + b` 表達式永遠不會被求值。這可能會[在主控台中產生警告](/zh-TW/docs/Web/JavaScript/Reference/Errors/Stmt_after_return)。

為了避免這個問題（防止 ASI），你可以使用括號：

```js-nolint
return (
  a + b
);
```

## 範例

### 中斷函式

函式會在呼叫 `return` 的當下立即停止。

```js
function counter() {
  // 無窮迴圈
  for (let count = 1; ; count++) {
    console.log(`${count}A`); // 直到 5
    if (count === 5) {
      return;
    }
    console.log(`${count}B`); // 直到 4
  }
  console.log(`${count}C`); // 永遠不會出現
}

counter();

// 記錄：
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

### 回傳函式

參見關於[閉包](/zh-TW/docs/Web/JavaScript/Guide/Closures)的文章。

```js
function magic() {
  return function calc(x) {
    return x * 42;
  };
}

const answer = magic();
answer(1337); // 56154
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [函式](/zh-TW/docs/Web/JavaScript/Reference/Functions)
- [閉包](/zh-TW/docs/Web/JavaScript/Guide/Closures)
