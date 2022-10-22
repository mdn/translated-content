---
title: RegExp.prototype[@@search]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@search
---

{{JSRef}}

**`[@@search]()`** メソッドは、`this` 正規表現と文字列の間で一致させるための検索を実行します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@search.html")}}

## 構文

```
regexp[Symbol.search](str)
```

### 引数

- `str`
  - : 検索対象の {{jsxref("String")}} です。

### 返値

- integer
  - : 成功した場合、`[@@search]()` は文字列内で正規表現に最初に一致したインデックスを返します。そうではない場合、-1 を返します。

## 解説

このメソッドは、 {{jsxref("String.prototype.search()")}} の内部で呼び出されます。たとえば、次の 2 つの例は同じ結果を返します。

```js
'abc'.search(/a/);

/a/[Symbol.search]('abc');
```

このメソッドは、`RegExp` サブクラスで検索動作をカスタマイズするために存在しています。

## 例

### 直接呼出し

このメソッドは、`this` と引数順が異なることを除いて {{jsxref("String.prototype.search()")}} とほぼ同じ方法で使用できます。

```js
var re = /-/g;
var str = '2016-01-02';
var result = re[Symbol.search](str);
console.log(result);  // 4
```

### サブクラスでの @@search の使用

{{jsxref("RegExp")}} のサブクラスは、動作を修正するために `[@@search]()` メソッドをオーバーライドできます。

```js
class MyRegExp extends RegExp {
  constructor(str) {
    super(str)
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

var re = new MyRegExp('a+b');
var str = 'ab a+b';
var result = str.search(re); // String.prototype.search は再定義した [@@search] を呼び出す。
console.log(result); // 3
```

## 仕様書

| 仕様書                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-regexp.prototype-@@search', 'RegExp.prototype[@@search]')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.@@search")}}

## 関連情報

- {{jsxref("String.prototype.search()")}}
- {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
- {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
- {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
