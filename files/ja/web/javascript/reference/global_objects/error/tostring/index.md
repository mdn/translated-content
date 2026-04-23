---
title: Error.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toString()`** メソッドは、指定した {{jsxref("Error")}} オブジェクトを表す文字列を返します。

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

指定した {{jsxref("Error")}} オブジェクトを表す文字列です。

## 解説

{{jsxref("Error")}} オブジェクトは、すべてのオブジェクトに継承される {{jsxref("Object.prototype.toString()")}} メソッドを上書きします。その意味は、次のようなものです。

```js
Error.prototype.toString = function () {
  if (
    this === null ||
    (typeof this !== "object" && typeof this !== "function")
  ) {
    throw new TypeError();
  }
  let name = this.name;
  name = name === undefined ? "Error" : `${name}`;
  let msg = this.message;
  msg = msg === undefined ? "" : `${msg}`;
  if (name === "") {
    return msg;
  }
  if (msg === "") {
    return name;
  }
  return `${name}: ${msg}`;
};
```

## 例

### toString() の使用

```js
const e1 = new Error("fatal error");
console.log(e1.toString()); // "Error: fatal error"

const e2 = new Error("fatal error");
e2.name = undefined;
console.log(e2.toString()); // "Error: fatal error"

const e3 = new Error("fatal error");
e3.name = "";
console.log(e3.toString()); // "fatal error"

const e4 = new Error("fatal error");
e4.name = "";
e4.message = undefined;
console.log(e4.toString()); // ""

const e5 = new Error("fatal error");
e5.name = "hello";
e5.message = undefined;
console.log(e5.toString()); // "hello"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Error.prototype.toString` の多くのバグ修正を加えたポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-error)
