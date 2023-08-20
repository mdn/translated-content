---
title: "SyntaxError: test for equality (==) mistyped as assignment (=)?"
slug: Web/JavaScript/Reference/Errors/Equal_as_assign
---

{{jsSidebar("Errors")}}

JavaScript の警告 "test for equality (==) mistyped as assignment (=)?" は、代入 (`=`) が通常は等価性 (`==`) の検査をすべき場面にあった場合に発生します。

## エラーメッセージ

```js
Warning: SyntaxError: test for equality (==) mistyped as assignment (=)?
```

## エラータイプ

(Firefox のみ) {{jsxref("SyntaxError")}} の警告であり、 `javascript.options.strict` の設定が `true` に設定されていた場合に発生します。

## 何がうまくいかなかったのか？

代入 (`=`) が通常は等価性 (`==`) の検査をすべき場面にあった場合に発生します。デバッグを行いやすくするために、 JavaScript は (厳密な警告が有効な場合は) このパターンについて警告を出します。

## 例

### 条件式内での代入

([`if...else`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) のような) 条件式内では、単純な代入を行わないことをお勧めします。コードを一目見たときに、代入は等価と混同しやすいからです。たとえば、以下のコードは使用しないでください。

```js-nolint example-bad
if (x = y) {
  // 正しいことを実行する
}
```

条件式内で代入を行う必要がある場合、一般的には次のように、代入の周りに追加の括弧を置きます。

```js
if ((x = y)) {
  // 正しいことを実行する
}
```

または、本当は比較演算子 (`==` や `===` など) を使用しようとしたのかもしれません。

```js
if (x == y) {
  // 正しいことを実行する
}
```

## 関連項目

- [`if...else`](/ja/docs/Web/JavaScript/Reference/Statements/if...else)
- [等価演算子](/ja/docs/Web/JavaScript/Reference/Operators#equality_operators)
