---
title: Function (関数)
slug: Glossary/Function
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

**関数** は、他のコードや自分自身、関数を参照する {{Glossary("variable", "変数")}} から呼ばれるコード断片です。関数が呼ばれると、{{Glossary("Argument", "引数")}} が関数への入力として渡され、次に関数は任意で値を戻します。{{glossary("JavaScript")}} における関数は、{{glossary("object", "オブジェクト")}} でもあります。

関数名は、関数宣言の一部または関数式に含まれる {{Glossary("identifier", "識別子")}} です。関数名の {{Glossary("scope", "スコープ")}} は、関数名が宣言か式かによって決まります。

## さまざまな関数の種類

**無名関数** とは、関数名のない関数です。無名にできるのは関数式のみで、関数宣言には名前が必要です。

```js
// 関数式
(function () {});

// アロー関数
() => {};
```

下記の用語は、ECMAScript 言語仕様で使用されているものではなく、関数の様々な種類を表すための俗称です。

**名前付き関数** とは、関数名のある関数です。

```js
// 関数宣言
function foo() {}

// 名前付き関数式
(function bar() {});

// アロー関数
const baz = () => {};
```

**内部関数** は、ほかの関数内に書かれた関数です (この例では `square`)。**外部関数** は、関数を含む関数です (この例では `addSquares`)。

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

// アロー関数
const addSquares2 = (a, b) => {
  const square = (x) => x * x;
  return square(a) + square(b);
};
```

**再帰関数** は自身を呼び出す関数です。{{Glossary("Recursion", "再帰")}} を参照してください。

```js
function loop(x) {
  if (x >= 10) return;
  loop(x + 1);
}

// アロー関数
const loop2 = (x) => {
  if (x >= 10) return;
  loop2(x + 1);
};
```

**即時実行関数式** ({{glossary("IIFE")}}) は、関数がブラウザーのコンパイラーに読み込まれた直後に呼び出される関数です。IIFE を見分けるには、関数定義の末尾に追加の左括弧と右括弧があるかどうかで判断できます。


関数式は、名前付きであれ無名関数であれ、即座に呼び出すことができます。

```js
(function foo() {
  console.log("Hello Foo");
})();

(function food() {
  console.log("Hello Food");
})();

(() => console.log("hello world"))();
```

宣言された関数は、この方法ではすぐに呼び出すことはできません。なぜなら、IIFE は関数式でなければならないからです。

```js-nolint example-bad
function foo() {
  console.log("Hello Foo");
}();
```

IIFE の詳細を知りたい方は、ウィキペディアの[即時実行関数式](https://ja.wikipedia.org/wiki/即時実行関数式)のページを確認してください。

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)
- [アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
