---
title: "Function: displayName"
short-title: displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

**`displayName`** は {{jsxref("Function")}} インスタンスのプロパティで、関数の表示名を返します。

## 値

`displayName` プロパティは、初期状態ではどの関数にも存在しません。コード作成者が追加します。表示する目的のためには、文字列である必要があります。

## 解説

`displayName` プロパティが存在する場合、コンソールやプロファイラーでは、関数名として表示するのに {{jsxref("Function/name", "name")}} プロパティよりも推奨することがあります。

ブラウザーの中で、このプロパティを使用しているのは Firefox コンソールのみです。 React 開発ツールも、コンポーネントツリーを表示する際に [`displayName`](https://legacy.reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging) プロパティを使用しています。

Firefox は、[無名の JavaScript 関数の命名規則](https://johnjbarton.github.io/nonymous/index.html)アルゴリズムによって実現可能な `displayName` をデコードする基本的な試みをいくつか行います。 次のパターンが検出されます。

- `displayName` が英数字、`_`、`$` の並びで終わる場合、最も長い接尾辞が表示されます。
- `displayName` が `[]` で囲まれた文字の並びで終わる場合、各括弧抜きの並びが表示されます。
- `displayName` が英数字と `_` の後に `/`, `.`, `<` のいずれかが続いた場合、末尾の `/`, `.`, `<` の文字を除いた並びが表示されます。
- `displayName` が英数字の並びと、それに続く `_`、そして `(^)` で終わる場合、その文字列は `(^)` なしで表示されます。

上記いずれのパターンにも一致しない場合は、 `displayName` 全体が表示されます。

## 例

### displayName の設定

以下のものを Firefox コンソールに入力すると、 "`function MyFunction()`" のように表示されます。

```js
function a() {}
a.displayName = "MyFunction";

a; // function MyFunction()
```

### 動的な displayName の変更

関数の `displayName` を動的に変更することができます。

```js
const object = {
  // anonymous
  someMethod: function someMethod(value) {
    someMethod.displayName = `someMethod (${value})`;
  },
};

console.log(object.someMethod.displayName); // undefined

object.someMethod("123");
console.log(object.someMethod.displayName); // "someMethod (123)"
```

### displayName の整理

Firefox の開発者ツールは、 `displayName` プロパティに表示する前に、そのプロパティに含まれるいくつかの共通パターンを整理します。

```js
function foo() {}

function testName(name) {
  foo.displayName = name;
  console.log(foo);
}

testName("$foo$"); // function $foo$()
testName("foo bar"); // function bar()
testName("Foo.prototype.add"); // function add()
testName("foo ."); // function foo .()
testName("foo <"); // function foo <()
testName("foo?"); // function foo?()
testName("foo()"); // function foo()()

testName("[...]"); // function ...()
testName("foo<"); // function foo()
testName("foo..."); // function foo()
testName("foo(^)"); // function foo()
```

## 仕様書

どの仕様にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Function.prototype.name")}}
