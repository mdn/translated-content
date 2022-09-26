---
title: RegExp.prototype[@@replace]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@replace
---

{{JSRef}}

**`[@@replace]()`** メソッドは文字列内の `this` パターンの一部または、すべての一致箇所を `replacement` で置き換え、置換結果を新しい文字列として返します。 `replacement` は文字列にするか、関数にしてすべての一致箇所ごとに呼び出されるようにすることができます。

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@replace.html")}}

## 構文

```
regexp[Symbol.replace](str, newSubStr|function)
```

### 引数

- `str`
  - : 置換の対象となる {{jsxref("String")}} です。
- `newSubStr` (置換内容)
  - : 部分文字列を置き換える {{jsxref("String")}} です。特殊な置換パターンの数値に対応しています。 {{jsxref("String.prototype.replace()")}} ページの{{jsxref("String.prototype.replace", "引数としての文字列の指定", "#Specifying_a_string_as_a_parameter", 1)}}の節を参照してください。
- `function` (置換内容)
  - : 新しい部分文字列を生成するために呼び出される関数。この関数に提供される引数については、{{jsxref("String.prototype.replace()")}} ページの{{jsxref("String.prototype.replace", "引数としての関数の指定", "#Specifying_a_function_as_a_parameter", 1)}}の節を見てください。

### 返値

一部またはすべてのパターンの一致箇所が置換内容によって置き換えられた新しい文字列です。

## 解説

このメソッドは {{jsxref("String.prototype.replace()")}} の中で、 `pattern` 引数が {{jsxref("RegExp")}} オブジェクトであった場合に内部的に呼び出されます。たとえば、次の 2 つの例は同じ結果を返します。

```js
'abc'.replace(/a/, 'A');

/a/[Symbol.replace]('abc', 'A');
```

このメソッドは、 `RegExp` サブクラスの置換動作をカスタマイズするために存在しています。

{{jsxref("String.prototype.replace()")}} は `pattern` 引数が {{jsxref("RegExp")}} オブジェクトでは**ない**場合、このメソッドの呼び出しや {{jsxref("RegExp")}} オブジェクトの生成を行いません。

## 例

### 直接呼出し

`this` と引数の順序が異なる点を除いて、このメソッドは {{jsxref("String.prototype.replace()")}} とほどんど同じ使い方ができます。

```js
var re = /-/g;
var str = '2016-01-01';
var newstr = re[Symbol.replace](str, '.');
console.log(newstr);  // 2016.01.01
```

### サブクラスでの @@replace の使用

既定の動作を修正するために、{{jsxref("RegExp")}} のサブクラスで `[@@replace]()` メソッドをオーバーライドできます。

```js
class MyRegExp extends RegExp {
  constructor(pattern, flags, count) {
    super(pattern, flags);
    this.count = count;
  }
  [Symbol.replace](str, replacement) {
    // Perform @@replace |count| times.
    var result = str;
    for (var i = 0; i < this.count; i++) {
      result = RegExp.prototype[Symbol.replace].call(this, result, replacement);
    }
    return result;
  }
}

var re = new MyRegExp('\\d', '', 3);
var str = '01234567';
var newstr = str.replace(re, '#'); // String.prototype.replace calls re[@@replace].
console.log(newstr); // ###34567
```

## 仕様書

| 仕様書                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-regexp.prototype-@@replace', 'RegExp.prototype[@@replace]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.@@replace")}}

## 関連情報

- {{jsxref("String.prototype.replace()")}}
- {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
- {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
- {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
