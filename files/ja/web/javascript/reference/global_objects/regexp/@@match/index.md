---
title: RegExp.prototype[@@match]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@match
l10n:
  sourceCommit: 3c33463072905e81ac620dd9780313369029b498
---

{{JSRef}}

**`[@@match]()`** は {{jsxref("RegExp")}} インスタンスのメソッドで、 [`String.prototype.match()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/match) がどのように動作するのかを指定します。さらに、これが存在するかどうかが、そのオブジェクトが正規表現とみなされるかどうかにも影響します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@match.html")}}

## 構文

```js-nolint
regexp[Symbol.match](str)
```

### 引数

- `str`
  - : 文字列 ({{jsxref("String")}}) で、照合の対象となるものです。

### 返値

配列 ({{jsxref("Array")}}) で、内容はグローバル (`g`) フラグがあるかどうかで変わります。一致するものが見つからなければ [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) になります。

- `g` フラグが使用された場合は、この正規表現全体に一致したすべての結果となりますが、キャプチャグループは含まれません。
- `g` フラグが使用されなかった場合は、最初に一致したもの全体と、関連するキャプチャグループが返されます。この場合、 `match()` は {{jsxref("RegExp.prototype.exec()")}} （一部の追加のプロパティを配列で含む）の結果と同じになります。

## 解説

このメソッドは、{{jsxref("String.prototype.match()")}} で内部的に呼び出されます。

たとえば、次の 2 つの例は同じ結果を返します。

```js
"abc".match(/a/);

/a/[Symbol.match]("abc");
```

正規表現がグローバル（`g` フラグ付き）である場合、この正規表現の [`exec()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) メソッドは、 `exec()` が `null` を返すまで繰り返し呼び出されます。そうでない場合、 `exec()` は一度だけ呼び出され、その結果が `@@match` の返値となります。

`@@match` は `exec()` を `null` が返るまで呼び出し続け、最後の照合に失敗すると自動的に正規表現の [`lastIndex`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) を 0 にリセットします。しかし、正規表現が[粘着的](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)であるもののグローバルではない場合、 `lastIndex` はリセットされません。この場合、 `match()` を呼び出すたびに異なる結果を返すかもしれません。

```js
const re = /[abc]/y;
for (let i = 0; i < 5; i++) {
  console.log("abc".match(re), re.lastIndex);
}
// [ 'a' ] 1
// [ 'b' ] 2
// [ 'c' ] 3
// null 0
// [ 'a' ] 1
```

正規表現が粘着的かつグローバルな場合、粘着的な照合、つまり `lastIndex` 以降の照合は行われません。

```js
console.log("ab-c".match(/[abc]/gy)); // [ 'a', 'b' ]
```

もし正規表現が [Unicode 対応](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode_対応モード)であれば、 Unicode コードポイント 1 つ分進みます。

```js
console.log("😄".match(/(?:)/g)); // [ '', '', '' ]
console.log("😄".match(/(?:)/gu)); // [ '', '' ]
```

このメソッドは `RegExp` サブクラス内で照合の動作をカスタマイズするために存在します。

さらに、`@@match` プロパティは[オブジェクトが正規表現であるかどうか](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正規表現の特殊な扱い)をチェックするために使われます。

## 例

### 直接呼び出し

このメソッドは、_ほとんど_ {{jsxref("String.prototype.match()")}} と同じ方法で使用することができますが、 `this` と引数の並び順が異なります。

```js
const re = /[0-9]+/g;
const str = "2016-01-02";
const result = re[Symbol.match](str);
console.log(result); // ["2016", "01", "02"]
```

### サブクラスで @@match を使用

{{jsxref("RegExp")}} のサブクラスは、既定の動作を修正するために `[@@match]()` メソッドをオーバーライドできます。

```js
class MyRegExp extends RegExp {
  [Symbol.match](str) {
    const result = RegExp.prototype[Symbol.match].call(this, str);
    if (!result) return null;
    return {
      group(n) {
        return result[n];
      },
    };
  }
}

const re = new MyRegExp("([0-9]+)-([0-9]+)-([0-9]+)");
const str = "2016-01-02";
const result = str.match(re); // String.prototype.match は re[@@match] を呼び出す
console.log(result.group(1)); // 2016
console.log(result.group(2)); // 01
console.log(result.group(3)); // 02
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`RegExp.prototype[@@match]` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.match()")}}
- [`RegExp.prototype[@@matchAll]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@matchAll)
- [`RegExp.prototype[@@replace]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)
- [`RegExp.prototype[@@search]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)
- [`RegExp.prototype[@@split]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@split)
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
- {{jsxref("Symbol.match")}}
