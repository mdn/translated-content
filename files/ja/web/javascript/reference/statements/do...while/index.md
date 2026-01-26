---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
l10n:
  sourceCommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jsSidebar("Statements")}}

**`do...while`** 文は指定された文を、テスト条件が false に評価されるまで実行するループを作成します。条件は文を実行した後に評価されます。結果として、指定された文は少なくとも 1 回は実行されます。

{{InteractiveExample("JavaScript デモ: Statement - Do...While")}}

```js interactive-example
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"
```

## 構文

```js-nolint
do
  statement
while (condition);
```

- `statement`
  - : 少なくとも 1 回は実行され、条件が真と評価されるたびに再実行される文。ループ内で複数の文を実行するには、それらの文をグループ化するために{{jsxref("Statements/block", "ブロック", "", 1)}}文 (`{ /* ... */ }`) を使ってください。

- `condition`
  - : ループを通過した後ごとに評価される式。もし `condition` が [true に評価される](/ja/docs/Glossary/Truthy)なら、`statement` は再度実行されます。`condition` が [false に評価される](/ja/docs/Glossary/Falsy)ときは、制御が `do...while` に続く文へ渡ります。

    メモ: {{jsxref("Statements/break", "break")}} 文を使うと、`condition` が false と評価される前にループを停止することができます。

## 例

### `do...while` の使用

次の例では、 `do...while` ループを少なくとも 1 回は実行し、 `i` が 5 より小さいという条件を満たさなくなるまで反復します。

```js
let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 5);
// Despite i === 0 this will still loop as it starts off without the test

console.log(result);
```

### 条件として代入文を使用

場合によっては、条件として代入を使用することは意味があります。しかし、その場合、正しい方法と間違った方法があります。[`while`](/ja/docs/Web/JavaScript/Reference/Statements/while) のドキュメントでは、[代入を条件として使用](/ja/docs/Web/JavaScript/Reference/Statements/while#代入を条件として使用)の節で、知っておくべき、そして従うべき一般的な良い実践例を示しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
