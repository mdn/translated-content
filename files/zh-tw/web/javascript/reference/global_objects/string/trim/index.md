---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
---

{{JSRef}}

**`trim()`** 方法會移除字串起始及結尾處的空白字元。
本文中的空白字元指所有空格字元（如：空格、欄標、無間斷空格等等）及換行字元（如：換行、回車等等）。

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## 語法

```js-nolint
trim()
```

### 回傳值

回傳一個新的字串，其為把 `str` 起始及結尾處的空白字元移除後的值。

如果 `str` 的起始及結尾處沒有任何的空白字元，此方法不會拋出任何例外，且仍然會回傳一個新的字串（本質上為 `str` 的複製）。

如果只是想要去除字串起始處或結尾處其中之一的空白字元，那麼可以選擇使用 {{jsxref("String.prototype.trimStart()", "trimStart()")}} 或者 {{jsxref("String.prototype.trimEnd()", "trimEnd()")}}。

## Polyfill

在任何其他的程式碼被執行之前，先執行以下的程式碼，它將會在瀏覽器本身未支援 `trim()` 的方法時創造它。

```js
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
}
```

## 範例

### 如何使用 `trim()`

以下例子會印出小寫的字串 `'foo'`：

```js
var orig = "   foo  ";
console.log(orig.trim()); // 'foo'
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
