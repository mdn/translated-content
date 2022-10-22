---
title: RegExp.prototype[@@split]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@split
---

{{JSRef}}

**`[@@split]()`** メソッドは、文字列を部分文字列に区切ることによって、 {{jsxref("String")}} オブジェクトを文字列の配列に分割します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@split.html")}}

## 構文

```
regexp[Symbol.split](str[, limit])
```

### 引数

- `str`
  - : 分割操作の対象。
- `limit` {{optional_inline}}
  - : 検出される分割数の制限を指定する整数。 `[@@split]()` メソッドは、 `this` RegExp パターン (または上記の構文では `regexp`) に一致するたびに、分割項目の数が `limit` と一致するか、文字列が `this` パターンを満たなくなるまで、分割を行います。

### 返値

要素として部分文字列を含む {{jsxref("Array")}}。

## 解説

このメソッドは {{jsxref("String.prototype.split()")}} の内部で、 `separator` 引数が `@@split` メソッドを持つオブジェクト、たとえば {{jsxref("RegExp")}} オブジェクトだった場合に呼び出されます。たとえば、次の 2 つの例は同じ結果を返します。

```js
'a-b-c'.split(/-/);

/-/[Symbol.split]('a-b-c');
```

このメソッドは、`RegExp` のサブクラスで `split()` の動作をカスタマイズするために存在します。

## 例

### 直接呼出し

`this` の扱いと引数の並び順を除いて、このメソッドは {{jsxref("String.prototype.split()")}} とほとんど同じように使用できます。

```js
let re = /-/g;
let str = '2016-01-02';
let result = re[Symbol.split](str);
console.log(result);  // ["2016", "01", "02"]
```

### サブクラスで @@split を使用する

既定の動作を修正するために、{{jsxref("RegExp")}} のサブクラスで `[@@split]()` メソッドをオーバーライドできます。

```js
class MyRegExp extends RegExp {
  [Symbol.split](str, limit) {
    let result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map(x => "(" + x + ")");
  }
}

let re = new MyRegExp('-');
let str = '2016-01-02';
let result = str.split(re); // String.prototype.split calls re[@@split].
console.log(result); // ["(2016)", "(01)", "(02)"]
```

## 仕様書

| 仕様書                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-regexp.prototype-@@split', 'RegExp.prototype[@@split]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.@@split")}}

## 関連情報

- {{jsxref("String.prototype.split()")}}
- {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
- {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
- {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
