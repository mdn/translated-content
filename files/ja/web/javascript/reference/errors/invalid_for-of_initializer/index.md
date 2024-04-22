---
title: "SyntaxError: a declaration in the head of a for-of loop can't have an initializer"
slug: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
---

{{jsSidebar("Errors")}}

JavaScript の例外 "a declaration in the head of a for-of loop can't have an initializer" は、 [for...of](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループの先頭に |`for (var i = 0 of iterable)`| のように初期化子が含まれている場合に発生します。これは for-of ループでは許可されていません。

## エラーメッセージ

```js
SyntaxError: for-of loop head declarations cannot have an initializer (Edge)
SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)
SyntaxError: for-of loop variable declaration may not have an initializer. (Chrome)
```

## エラータイプ

{{jsxref("SyntaxError")}}

## 何がうまくいかなかったのか？

[for...of](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループの先頭に初期化式が含まれています。つまり、 |`for (var i = 0 of iterable)`| のように変数が宣言され、値が代入されています。これは、 for-of ループでは許可されていません。初期化できる [`for`](/ja/docs/Web/JavaScript/Reference/Statements/for) ループを使用した方が良いかもしれません。

## 例

### 不正な `for-of` ループ

```js example-bad
let iterable = [10, 20, 30];

for (let value = 50 of iterable) {
  console.log(value);
}

// SyntaxError: a declaration in the head of a for-of loop can't
// have an initializer
```

### 有効な `for-of` ループ

`for-of` ループのヘッダーから初期化子 (`value = 50`) を取り除く必要があります。おそらく、50 をオフセット値にしようとしているのでしょうから、たとえばループのボディー内で 50 を加えられます。

```js example-good
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 50;
  console.log(value);
}
// 60
// 70
// 80
```

## 関連項目

- [`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of)
- [`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) – strict モードでは同様に初期化できない ([SyntaxError: for-in loop head declarations may not have initializers](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer))
- [`for`](/ja/docs/Web/JavaScript/Reference/Statements/for) – 反復時に初期化子を許可している
