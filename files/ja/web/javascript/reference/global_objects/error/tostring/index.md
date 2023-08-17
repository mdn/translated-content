---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
---

{{JSRef}}

**`toString()`** メソッドは、指定した {{jsxref("Error")}} オブジェクトを表す文字列を返します。

## 構文

```
e.toString()
```

### 返値

指定した {{jsxref("Error")}} オブジェクトを表す文字列です。

## 解説

{{jsxref("Error")}} オブジェクトは、すべてのオブジェクトに継承される {{jsxref("Object.prototype.toString()")}} メソッドを上書きします。その意味は、次のようなものです ({{jsxref("Object")}} と {{jsxref("String")}} は元の値を持つと仮定します)。

```js
Error.prototype.toString = function () {
  "use strict";

  var obj = Object(this);
  if (obj !== this) {
    throw new TypeError();
  }

  var name = this.name;
  name = name === undefined ? "Error" : String(name);

  var msg = this.message;
  msg = msg === undefined ? "" : String(msg);

  if (name === "") {
    return msg;
  }
  if (msg === "") {
    return name;
  }

  return name + ": " + msg;
};
```

## 例

### toString() の使用

```js
var e = new Error("fatal error");
console.log(e.toString()); // 'Error: fatal error'

e.name = undefined;
console.log(e.toString()); // 'Error: fatal error'

e.name = "";
console.log(e.toString()); // 'fatal error'

e.message = undefined;
console.log(e.toString()); // ''

e.name = "hello";
console.log(e.toString()); // 'hello'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Error.toString")}}

## 関連情報

- {{jsxref("Error.prototype.toSource()")}}
