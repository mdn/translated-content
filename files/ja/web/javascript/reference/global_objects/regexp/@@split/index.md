---
title: RegExp.prototype[@@split]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@split
l10n:
  sourceCommit: fc67640f3545c1a5db42c878d1f0de71313349bc
---

{{JSRef}}

**`[@@search]()`** は {{jsxref("RegExp")}} インスタンスのメソッドで、 [`String.prototype.split`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split) にセパレーターとして正規表現が渡されたときにどのように動作するのかを指定します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@split.html")}}

## 構文

```js-nolint
regexp[Symbol.split](str)
regexp[Symbol.split](str, limit)
```

### 引数

- `str`
  - : 分割操作の対象。
- `limit` {{optional_inline}}
  - : 検出される分割数の制限を指定する整数。 `[@@split]()` メソッドは、 `this` RegExp パターン (または上記の構文では `regexp`) に一致するたびに、分割項目の数が `limit` と一致するか、文字列が `this` パターンを満たなくなるまで、分割を行います。

### 返値

要素として部分文字列を含む配列 ({{jsxref("Array")}})。

## 解説

このメソッドは {{jsxref("String.prototype.split()")}} において、`RegExp` がセパレーターとして渡された場合に内部的に呼び出されます。たとえば、次の 2 つの例は同じ結果を返します。

```js
"a-b-c".split(/-/);

/-/[Symbol.split]("a-b-c");
```

このメソッドは、`RegExp` のサブクラスで `split()` の動作をカスタマイズするために存在します。

`RegExp.prototype[@@split]()` ベースメソッドは、次のように動作します。

- [`@@species`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@species) を使用して新しい正規表現を構築し、元の正規表現が変更され内容にするところから始まります。
- 正規表現の `g` （「グローバル」）フラグは無視され、 `y` （「粘着的」）フラグは元々表示されていない場合でも常に適用されます。
- 対象とする文字列が空で、正規表現が空文字列に一致する場合（例えば `/a?/`）は、空の配列を返します。そうでない場合、正規表現が空文字列に一致しなければ `[""]` を返します。
- 照合は `this.exec()` を連続して呼び出すことで行われます。正規表現は常に粘着的なので、文字列に沿って移動し、その度に一致する文字列、インデックス、キャプチャグループが得られます。
- 一致するごとに、最後に一致した文字列の終わりと、現在一致した文字列の始めの間の部分文字列が、最初の配列に追加されます。その後、キャプチャグループの値が 1 つずつ追加されます。
- 現在一致している文字列が空文字列であったり、正規表現が現在の位置で一致しなかったりした場合（粘着的なので）、`lastIndex` が進められます。正規表現が [Unicode 対応](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode)であれば、Unicode コードポイント分進みます。そうでなければ、 UTF-16 コード単位 1 つ分進みます。
- 正規表現が対象の文字列と一致しない場合は、対象の文字列を配列で囲んでそのまま返します。
- 返される配列の長さは、指定された場合は `limit` 引数を超えることはありません。そのため、配列が既に埋まっている場合、最後の一致するグループとそのキャプチャグループがすべて返す配列に存在するとは限りません。

## 例

### 直接呼出し

`this` の扱いと引数の並び順を除いて、このメソッドは {{jsxref("String.prototype.split()")}} とほとんど同じように使用できます。

```js
const re = /-/g;
const str = "2016-01-02";
const result = re[Symbol.split](str);
console.log(result); // ["2016", "01", "02"]
```

### サブクラスで @@split を使用する

既定の動作を修正するために、{{jsxref("RegExp")}} のサブクラスで `[@@split]()` メソッドをオーバーライドできます。

```js
class MyRegExp extends RegExp {
  [Symbol.split](str, limit) {
    const result = RegExp.prototype[Symbol.split].call(this, str, limit);
    return result.map((x) => `(${x})`);
  }
}

const re = new MyRegExp("-");
const str = "2016-01-02";
const result = str.split(re); // String.prototype.split calls re[@@split].
console.log(result); // ["(2016)", "(01)", "(02)"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`RegExp.prototype[@@split]` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.split()")}}
- [`RegExp.prototype[@@match]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match)
- [`RegExp.prototype[@@matchAll]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)
- [`RegExp.prototype[@@replace]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)
- [`RegExp.prototype[@@search]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.split")}}
