---
title: 末尾のカンマ
slug: Web/JavaScript/Reference/Trailing_commas
tags:
  - Comma
  - ECMAScript2017
  - ECMAScript5
  - JavaScript
  - Language feature
  - Syntax
  - Trailing comma
browser-compat: javascript.grammar.trailing_commas
translation_of: Web/JavaScript/Reference/Trailing_commas
---
{{JsSidebar("More")}}

**末尾のカンマ** (「最後のカンマ」と呼ばれることもあります) は、JavaScript のコードに新しい要素や引数、プロパティを追加するときに役立ちます。新しいプロパティを追加するとき、最終行ですでに末尾のカンマを使用していれば、最終行を修正することなく新しい行を追加できます。これによって、バージョン管理の差分がより洗練され、コード編集の煩雑さを軽減できます。

JavaScript は、当初から配列リテラルで末尾のカンマを使用できました。その後でオブジェクトリテラルで、さらに最近では、関数の引数の末尾のカンマが使用できるようになりました。

しかし、[JSON](/ja/docs/Glossary/JSON) では末尾のカンマを許容していません。

## 構文

```js
,
```

## 例

### リテラルの末尾のカンマ

#### 配列

JavaScript は配列の末尾のカンマを無視します。

```js
var arr = [
  1,
  2,
  3,
];

arr; // [1, 2, 3]
arr.length; // 3
```

2 つ以上の末尾のカンマがある場合、省略 (または穴) が作られます。穴がある配列は*疎らな*配列と呼ばれます (*密集した*配列は穴がありません)。たとえば、{{jsxref("Array.prototype.forEach()")}} や {{jsxref("Array.prototype.map()")}} で配列を反復処理するとき、穴はスキップされます。

```js
var arr = [1, 2, 3,,,];
arr.length; // 5
```

#### オブジェクト

ECMAScript 5 から、オブジェクトリテラルでも末尾のカンマを使用できるようになりました。

```js
var object = {
  foo: "bar",
  baz: "qwerty",
  age: 42,
};
```

### 関数の末尾のカンマ

ECMAScript 2017 では、関数の引数リストで末尾のカンマが使用できるようになりました。

#### 引数定義

次の 2 つの関数定義はともに有効で等しいものです。末尾のカンマは、関数の `length` プロパティや `arguments` オブジェクトに影響を与えません。

```js
function f(p) {}
function f(p,) {}

(p) => {};
(p,) => {};
```

末尾のカンマは、クラスやオブジェクトの[メソッド定義](/ja/docs/Web/JavaScript/Reference/Functions/Method_definitions)でも使用できます。</p>

```js
class C {
  one(a,) {}
  two(a, b,) {}
}

var obj = {
  one(a,) {},
  two(a, b,) {},
};
```

#### 関数呼び出し

次の 2 つの関数呼び出しはともに有効で等しいものです。

```js
f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
```

#### 不正な末尾のカンマ

関数の定義や呼び出しにおいて引数がカンマしかないと、{{Jsxref("SyntaxError")}} が発生します。さらに、[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)を使用しているときは、末尾のカンマは許可されません。

```js example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

### 分割代入での末尾のカンマ

末尾のカンマは、[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)の左辺でも使用できます。

```js
// 末尾のカンマ付きで配列を分割代入
[a, b,] = [1, 2];

// 末尾のカンマ付きでオブジェクトを分割代入
var o = {
  p: 42,
  q: true,
};
var {p, q,} = o;
```

また、残余要素で使用すると、{{jsxref("SyntaxError")}} が発生します。

```js example-bad
var [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

### JSON の末尾のカンマ

オブジェクトリテラルの末尾のカンマは、ECMAScript 5 から導入されました。JSON は ES5 以前の JavaScript 構文に基づいているため、**末尾のカンマを使用できません**。

どちらの行も `SyntaxError` が発生します。

```js example-bad
JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

正しく JSON を解釈するには、カンマを省略してください。

```js example-good
JSON.parse('[1, 2, 3, 4 ]');
JSON.parse('{"foo" : 1 }');
```

### 名前付きインポートおよび名前付きエクスポートの末尾のカンマ

末尾のカンマは名前付きインポートや名前付きエクスポートでも有効です。

#### 名前付きインポート

```js
  import {
    A,
    B,
    C,
  } from 'D'

  import { X, Y, Z } from 'W'

  import { A as B, C as D, E as F } from 'Z'; // インポートの名前を変更
```

#### 名前付きエクスポート

```js
  export {
    A,
    B,
    C
  }

  export { A, B, C };

  export { A as B, C as D, E as F }; // エクスポートの名前を変更
```

### 数量接頭辞

```js
  //{ DecimalDigits[~Sep], DecimalDigits[~Sep] }
  x{n,}
  x{n,m}
  x{n,m}?
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 初期の ECMAScript の提案: [trailing function commas](https://github.com/tc39/proposal-trailing-function-commas) by Jeff Morrison
