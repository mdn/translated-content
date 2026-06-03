---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`if...else`** 文は、指定された条件が{{Glossary("truthy", "真値")}}ならば文を実行します。条件が{{Glossary("falsy", "偽値")}}なら、オプションの `else` 節にあるもう一方の文を実行します。

{{InteractiveExample("JavaScript デモ: if...else 文")}}

```js interactive-example
function testNum(a) {
  let result;
  if (a > 0) {
    result = "正の数";
  } else {
    result = "正の数ではない";
  }
  return result;
}

console.log(testNum(-5));
// 予想される結果: "正の数ではない"
```

## 構文

```js-nolint
if (condition)
  statement1

// else 節付き
if (condition)
  statement1
else
  statement2
```

- `condition`
  - : {{Glossary("truthy", "真値")}}または{{Glossary("falsy", "偽値")}}と認識される式です。
- `statement1`
  - : _condition_ が{{Glossary("truthy", "真値")}}の場合に実行される文です。さらにネストされた `if` 文を含む、どんな文であってもかまいません。複数の文を実行するためには、それらの文をグループ化するために[ブロック](/ja/docs/Web/JavaScript/Reference/Statements/block)文 (`{ /* ... */ }`) を使用してください。実行する文がない場合は、[空文](/ja/docs/Web/JavaScript/Reference/Statements/Empty)を使用してください。
- `statement2`
  - : `condition` が{{Glossary("falsy", "偽値")}}で、かつ `else` 節が存在するなら実行される文です。ブロック文およびさらにネストされた `if` 文を含む、どんな文であってもかまいません。

## 解説

複数の `if...else` 文をネストすることで、 `else if` 節を作成することができます。 JavaScript では（1 単語の）`elseif` キーワードがありませんので注意してください。

```js-nolint
if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
// …
else
  statementN
```

これがどのように動作するか理解するために、ネストが適切にインデントされていたらどのように見えるかを示します。

```js-nolint
if (condition1)
  statement1
else
  if (condition2)
    statement2
  else
    if (condition3)
      statement3
// …
```

節の中で複数の文を実行するためには、それらの文をグループ化するためにブロック文 (`{ ... }`) を使ってください。

```js-nolint
if (condition) {
  statements1
} else {
  statements2
}
```

ブロックを使用しないと、特にコードが手作業で整形されている場合、混乱した動作になることがあります。

```js-nolint example-bad
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
  else
    console.log("a is not 1");
}
```

このコードは何の問題もないように見えますが、`checkValue(1, 3)` を実行すると "a is not 1" というログを出力します。これは、[dangling else](https://en.wikipedia.org/wiki/Dangling_else) の場合、`else` 節は最も近い `if` 節に接続されるからです。したがって、上記のコードを適切なインデントで記述すると、次のようになります。

```js-nolint
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a is 1 and b is 2");
    else
      console.log("a is not 1");
}
```

一般的な良い実践としては、常にブロック文を使用し、特に入れ子の `if` 文を含むコードでは、ブロック文を使用することをお勧めします。

```js example-good
function checkValue(a, b) {
  if (a === 1) {
    if (b === 2) {
      console.log("a is 1 and b is 2");
    }
  } else {
    console.log("a is not 1");
  }
}
```

プリミティブの論理値である `true` および `false` を {{jsxref("Boolean")}} オブジェクトの真性や偽性と混同しないでください。 `false`, `undefined`, `null`, `0`, `-0`, `NaN`, 空文字列 (`""`) のいずれでもない値、および任意のオブジェクトは（`false` の値を持つ Boolean オブジェクトを含め）、条件として使用されたときに{{Glossary("truthy", "真値")}}と解釈されます。例えば以下のような場合です。

```js
const b = new Boolean(false);
if (b) {
  console.log("b is truthy"); // "b is truthy"
}
```

## 例

### if...else の使用

```js
if (cipherChar === fromChar) {
  result += toChar;
  x++;
} else {
  result += clearChar;
}
```

### else if の使用

JavaScript に `elseif` 構文はありませんので注意してください。 `else` と `if` の間に空白を置いて記述してください。

```js
if (x > 50) {
  /* 何かを行う */
} else if (x > 5) {
  /* 何かを行う */
} else {
  /* 何かを行う */
}
```

### 条件式の中での代入

`if...else` の条件式として `x = y` のような代入式を持たせることは、ほぼ絶対に避けるべきです。

```js example-bad
if ((x = y)) {
  // …
}
```

{{jsxref("Statements/while", "while")}} ループとは異なり、条件は 1 回だけしか評価されないので、代入は 1 回しか行われません。上記のコードは次のものと等価です。

```js example-good
x = y;
if (x) {
  // …
}
```

これははるかに明確です。しかし、稀にそのようなことをしたくなった場合、[`while`](/ja/docs/Web/JavaScript/Reference/Statements/while) のドキュメントの[代入を条件として使用](/ja/docs/Web/JavaScript/Reference/Statements/while#代入を条件として使用)の節に、推奨事項が書かれています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/block", "block")}}
- {{jsxref("Statements/switch", "switch")}}
- [条件演算子](/ja/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
