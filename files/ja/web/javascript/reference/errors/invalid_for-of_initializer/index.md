---
title: "SyntaxError: a declaration in the head of a for-of loop can't have an initializer"
slug: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "a declaration in the head of a for-of loop can't have an initializer" は、[for...of](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループの先頭に `for (const i = 0 of iterable)` のような初期化式が含まれている場合に発生します。for-of ループでは初期化式が許可されていません。

## エラーメッセージ

```plain
SyntaxError: for-of loop variable declaration may not have an initializer. (V8-based)
SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)
SyntaxError: Cannot assign to the loop variable inside a for-of loop header. (Safari)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

[for...of](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループの先頭に初期化式が含まれています。つまり、`for (const i = 0 of iterable)` のように変数を宣言して値を代入しています。for-of ループではこれは許可されていません。初期化式を指定できる [`for`](/ja/docs/Web/JavaScript/Reference/Statements/for) ループを使用する方法もあります。

## 例

### 不正な `for-of` ループ

```js-nolint example-bad
const iterable = [10, 20, 30];

for (const value = 50 of iterable) {
  console.log(value);
}

// SyntaxError: a declaration in the head of a for-of loop can't
// have an initializer
```

### 有効な `for-of` ループ

`for-of` ループのヘッダーから初期化子 (`value = 50`) を取り除く必要があります。50 をオフセット値にする意図であれば、例えばループ本体で 50 を加算できます。

```js example-good
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 50;
  console.log(value);
}
// 60
// 70
// 80
```

## 関連情報

- [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of)
- [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for`](/ja/docs/Web/JavaScript/Reference/Statements/for)
