---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
---

{{JSRef}}

**`toString()`** メソッドは正規表現を表す文字列を返します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-tostring.html", "taller")}}

## 構文

```
regexObj.toString();
```

### 返値

呼び出し元のオブジェクトを表す文字列です。

## 解説

{{jsxref("RegExp")}} オブジェクトの `toString()` メソッドは、 {{jsxref("Object")}} オブジェクトのものを上書きします。つまり {{jsxref("Object.prototype.toString()")}} を継承しません。 {{jsxref("RegExp")}} オブジェクトにおける `toString()` メソッドは、その正規表現オブジェクトを表す文字列を返します。

## 例

### toString() の使用

以下の例は {{jsxref("RegExp")}} オブジェクトの文字列の値を表示します。:

```js
var myExp = new RegExp("a+b+c");
console.log(myExp.toString()); // logs '/a+b+c/'

var foo = new RegExp("bar", "g");
console.log(foo.toString()); // logs '/bar/g'
```

### 空の正規表現とエスケープ

ECMAScript 5 以降では、空の正規表現は "/(?:)/" 文字列を返し、"\n" などの行末記号はエスケープされます。

```js
new RegExp().toString(); // "/(?:)/"

new RegExp("\n").toString() === "/\n/"; // true, prior to ES5
new RegExp("\n").toString() === "/\\n/"; // true, starting with ES5
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.toString")}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
