---
title: RegExp.prototype[@@match]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@match
---

{{JSRef}}

**`[@@match]()`** メソッドは、*文字列*の*正規表現*に一致した部分を取得します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@match.html")}}

## 構文

```
regexp[Symbol.match](str)
```

### 引数

- `str`
  - : 一致の対象となる {{jsxref("String")}}。

### 返値

一致した全体の結果と括弧が捕捉した一致箇所の結果を含む {{jsxref("Array")}}。一致するものがなかった場合は、{{jsxref("null")}}。

## 解説

このメソッドは、{{jsxref("String.prototype.match()")}} で内部的に呼び出されます。

たとえば、次の 2 つの例は同じ結果を返します。

```js
'abc'.match(/a/);

/a/[Symbol.match]('abc');
```

このメソッドは、`RegExp` サブクラス内で一致の振る舞いをカスタマイズするために存在しています。

## 例

### 直接呼び出し

このメソッドは、_ほとんど_ {{jsxref("String.prototype.match()")}} と同じ方法で使用することができますが、 `this` と引数の並び順が異なります。

```js
let re = /[0-9]+/g;
let str = '2016-01-02';
let result = re[Symbol.match](str);
console.log(result);  // ["2016", "01", "02"]
```

### サブクラスで @@match を使用

{{jsxref("RegExp")}} のサブクラスは、既定の動作を修正するために `[@@match]()` メソッドをオーバーライドできます。

```js
class MyRegExp extends RegExp {
  [Symbol.match](str) {
    let result = RegExp.prototype[Symbol.match].call(this, str);
    if (!result) return null;
    return {
      group(n) {
        return result[n];
      }
    };
  }
}

let re = new MyRegExp('([0-9]+)-([0-9]+)-([0-9]+)');
let str = '2016-01-02';
let result = str.match(re); // String.prototype.match calls re[@@match].
console.log(result.group(1)); // 2016
console.log(result.group(2)); // 01
console.log(result.group(3)); // 02
```

## 仕様書

| 仕様書                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-regexp.prototype-@@match', 'RegExp.prototype[@@match]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.@@match")}}

## 関連情報

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
- {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
- {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
