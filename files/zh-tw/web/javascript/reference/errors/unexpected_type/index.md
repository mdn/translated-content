---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript 的「_x_ is (not) _y_」例外會在出現非預期的型別時發生。這通常是非預期的 {{jsxref("undefined")}} 或 [`null`](/zh-TW/docs/Web/JavaScript/Reference/Operators/null) 值。

## 訊息

```plain
TypeError: Cannot read properties of undefined (reading 'x')（基於 V8）
TypeError: "x" is undefined（Firefox）
TypeError: "undefined" is not an object（Firefox）
TypeError: undefined is not an object (evaluating 'obj.x')（Safari）

TypeError: "x" is not a symbol（基於 V8 & Firefox）
TypeError: Symbol.keyFor requires that the first argument be a symbol（Safari）
```

## 錯誤類型

{{jsxref("TypeError")}}。

## 哪裡出錯了？

出現了非預期的型別。這通常發生在 {{jsxref("undefined")}} 或 [`null`](/zh-TW/docs/Web/JavaScript/Reference/Operators/null) 值的情況。

此外，某些方法（例如 {{jsxref("Object.create()")}} 或 {{jsxref("Symbol.keyFor()")}}）需要提供特定的型別。

## 範例

### 無效的案例

你不能在 `undefined` 或 `null` 的變數上呼叫方法。

```js example-bad
const foo = undefined;
foo.substring(1); // TypeError: foo is undefined

const foo2 = null;
foo2.substring(1); // TypeError: foo2 is null
```

某些方法可能需要特定的型別。

```js example-bad
const foo = {};
Symbol.keyFor(foo); // TypeError: foo is not a symbol

const foo2 = "bar";
Object.create(foo2); // TypeError: "foo2" is not an object or null
```

### 修正問題

為了修正對 `undefined` 或 `null` 值進行存取的問題，你可以先測試該值是否為 `undefined` 或 `null`。

```js example-good
if (foo !== undefined && foo !== null) {
  // 現在我們知道 foo 已被定義，可以繼續執行。
}
```

或者，如果你確定 `foo` 不會是其他[假值](/zh-TW/docs/Glossary/Falsy)（例如 `""` 或 `0`），或者過濾掉這些情況不成問題，你可以直接測試其真假值。

```js example-good
if (foo) {
  // 現在我們知道 foo 是真值，所以它必定不是 null/undefined。
}
```

## 參見

- {{jsxref("undefined")}}
- [`null`](/zh-TW/docs/Web/JavaScript/Reference/Operators/null)
