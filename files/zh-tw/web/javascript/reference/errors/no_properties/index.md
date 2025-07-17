---
title: "TypeError: null/undefined has no properties"
slug: Web/JavaScript/Reference/Errors/No_properties
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

當你嘗試存取 [`null`](/zh-TW/docs/Web/JavaScript/Reference/Operators/null) 和 {{jsxref("undefined")}} 的屬性時，會發生 JavaScript 的「null (or undefined) has no properties」例外，因為它們沒有任何屬性。

## 訊息

```plain
TypeError: Cannot read properties of undefined (reading 'x') (V8-based)
TypeError: Cannot destructure 'x' as it is undefined. (V8-based)
TypeError: Cannot destructure property 'x' of 'y' as it is undefined. (V8-based)
TypeError: null has no properties (Firefox)
TypeError: undefined has no properties (Firefox)
TypeError: undefined is not an object (evaluating 'undefined.x') (Safari)
TypeError: Right side of assignment cannot be destructured (Safari)
```

## 錯誤類型

{{jsxref("TypeError")}}。

## 哪裡出錯了？

[`null`](/zh-TW/docs/Web/JavaScript/Reference/Operators/null) 和 {{jsxref("undefined")}} 都沒有可以存取的屬性。因此，你不能對它們使用[屬性存取器](/zh-TW/docs/Web/JavaScript/Reference/Operators/Property_accessors)，也不能[解構](/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring)它們。

## 範例

### null 和 undefined 沒有屬性

```js example-bad
null.foo;
// TypeError: null has no properties

undefined.bar;
// TypeError: undefined has no properties
```

## 參見

- [`null`](/zh-TW/docs/Web/JavaScript/Reference/Operators/null)
- {{jsxref("undefined")}}
