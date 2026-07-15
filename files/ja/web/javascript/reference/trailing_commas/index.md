---
title: 末尾カンマ
slug: Web/JavaScript/Reference/Trailing_commas
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**末尾カンマ** (「最後のカンマ」と呼ばれることもあります) は、JavaScript のコードに新しい要素や引数、プロパティを追加するときに役立ちます。新しいプロパティを追加するとき、最終行ですでに末尾カンマを使用していれば、最終行を修正することなく新しい行を追加できます。これによって、バージョン管理の差分がより洗練され、コード編集の煩雑さを軽減できます。

JavaScript は、当初から配列リテラルで末尾カンマを使用できました。オブジェクトリテラル、関数の引数、名前付きインポート、名前付きエクスポートなどにおいても、末尾カンマを同時に使用することができるようになりました。

しかし、[JSON](/ja/docs/Glossary/JSON) では末尾カンマをすべて許容していません。

## 解説

JavaScript で、カンマ区切りの値のリストが受け入れられ、最後のアイテムの後にさらに値が続くことがある場合、末尾カンマを使用することができます。次のようなものがあります。

- [配列リテラル](#配列)
- [オブジェクトリテラル](#オブジェクト)
- [引数定義](#引数定義)
- [関数呼び出し](#関数呼び出し)
- [名前付きインポート](#名前付きインポート)
- [名前付きエクスポート](#名前付きエクスポート)
- [動的インポート](#動的インポートの末尾カンマ)
- [配列やオブジェクトの構造分解](#構造分解での末尾カンマ)

これらすべての場合において、末尾のカンマは完全に任意であり、プログラムの意味づけに何ら影響を与えません。

特に、複数行にわたるリストのアイテムを追加・除去・並べ替えを行う際に有用です。これは、変更が必要な行数を減らすことができるため、編集作業や差分レビューの両方に役立ちます。

```diff
  [
    "foo",
+   "baz",
    "bar",
-   "baz",
  ]
```

## 例

### リテラルの末尾カンマ

#### 配列

JavaScript は配列の末尾カンマを無視します。

```js-nolint
const arr = [
  1,
  2,
  3,
];

arr; // [1, 2, 3]
arr.length; // 3
```

2 つ以上の末尾カンマがある場合、省略（または穴）が作られます。穴がある配列は[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)と呼ばれます (密配列は穴がありません)。配列を、たとえば {{jsxref("Array.prototype.forEach()")}} や {{jsxref("Array.prototype.map()")}} で反復処理するとき、穴はスキップされます。疎配列は一般的に好ましくないため、末尾に複数のカンマを持つことは避けるべきです。

```js
const arr = [1, 2, 3, , ,];
arr.length; // 5
```

#### オブジェクト

オブジェクトリテラルでも末尾カンマを使用できます。

```js
const object = {
  foo: "bar",
  baz: "qwerty",
  age: 42,
};
```

### 関数の末尾カンマ

関数の引数リストでも、末尾カンマが使用できます。

#### 引数定義

次の 2 つの関数定義はともに有効で等しいものです。末尾カンマは、関数の [`length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length) プロパティや [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) オブジェクトに影響を与えません。

```js-nolint
function f(p) {}
function f(p,) {}

(p) => {};
(p,) => {};
```

末尾カンマは、クラスやオブジェクトの[メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)でも使用できます。

```js-nolint
class C {
  one(a,) {}
  two(a, b,) {}
}

const obj = {
  one(a,) {},
  two(a, b,) {},
};
```

#### 関数呼び出し

次の 2 つの関数呼び出しはともに有効で等しいものです。

```js-nolint
f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
```

#### 不正な末尾カンマ

関数の定義や呼び出しにおいて引数がカンマしかないと、{{jsxref("SyntaxError")}} が発生します。さらに、[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)を使用しているときは、末尾カンマは使用できません。

```js-nolint example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

### 構造分解での末尾カンマ

末尾カンマは、[構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)パターンの中でも使用できます。

```js-nolint
// 末尾カンマ付きで配列を構造分解
[a, b,] = [1, 2];

// 末尾カンマ付きでオブジェクトを構造分解
const o = {
  p: 42,
  q: true,
};
const { p, q, } = o;
```

ただし、残余要素が存在する場合、その後にカンマを付けることはできません。

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

### JSON の末尾カンマ

JSON は JavaScript の構文のとても限られたサブセットに基づいているため、**JSON では末尾カンマは使用することができません**。

どちらの行も `SyntaxError` が発生します。

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

正しく JSON を解釈するには、カンマを省略してください。

```js example-good
JSON.parse("[1, 2, 3, 4 ]");
JSON.parse('{"foo" : 1 }');
```

### 名前付きインポートおよび名前付きエクスポートの末尾カンマ

末尾カンマは[名前付きインポート](/ja/docs/Web/JavaScript/Reference/Statements/import#named_import)や[名前付きエクスポート](/ja/docs/Web/JavaScript/Reference/Statements/export)でも有効です。

#### 名前付きインポート

```js-nolint
import {
  A,
  B,
  C,
} from "D";

import { X, Y, Z, } from "W";

import { A as B, C as D, E as F, } from "Z";
```

#### 名前付きエクスポート

```js-nolint
export {
  A,
  B,
  C,
};

export { A, B, C, };

export { A as B, C as D, E as F, };
```

### 動的インポートの末尾カンマ

末尾カンマは、実行環境が 2 つ目の `options` 引数も実装している場合に限り、[動的インポート](/ja/docs/Web/JavaScript/Reference/Operators/import)で使用することができます。

```js-nolint
import("D",);
import(
  "D",
  { with: { type: "json" } },
);
```

### 数量接頭辞

> [!NOTE]
> [量化子](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)の末尾カンマは、実際にはその意味づけを「正確に `n`」に一致させるものから、「少なくとも `n`」に一致させるものへと変更します。

```js
/x{2}/; // Exactly 2 occurrences of "x"; equivalent to /xx/
/x{2,}/; // At least 2 occurrences of "x"; equivalent to /xx+/
/x{2,4}/; // 2 to 4 occurrences of "x"; equivalent to /xxx?x?/
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [文法とデータ型](/ja/docs/Web/JavaScript/Guide/Grammar_and_types)ガイド
