---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
---

{{jsSidebar("Statements")}}

**`if` 文**は、指定された条件が {{Glossary("truthy")}} ならば文を実行します。条件が {{Glossary("falsy")}} なら、もう一方の文を実行することができます。

{{EmbedInteractiveExample("pages/js/statement-ifelse.html")}}

## 構文

```
if (condition)
   statement1
[else
   statement2]
```

- `condition`
  - : {{Glossary("truthy")}} または {{Glossary("falsy")}} と認識される[式](/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#式)です。

<!---->

- `statement1`
  - : _condition_ が {{Glossary("truthy")}} なら実行される文です。さらにネストされた `if` 文を含む、どんな文であってもかまいません。複数の文を実行するためには、それらの文をグループ化するために[ブロック](/ja/docs/Web/JavaScript/Reference/Statements/block)文 (`{ ... }`) を使ってください。実行する文がない場合は、[空文](/ja/docs/Web/JavaScript/Reference/Statements/Empty) を使用してください。
- `statement2`
  - : `condition` が {{Glossary("falsy")}} で、かつ `else` 節が存在するなら実行される文です。ブロック文およびさらにネストされた `if` 文を含む、どんな文であってもかまいません。

## 解説

複数の `if...else` 文をネストすることで、 `else if` 節を作成することができます。 JavaScript では `elseif` (1 単語) キーワードがありませんので注意してください。

```js
if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
...
else
  statementN
```

これがどのように動作するか理解するために、ネストが適切にインデントされていたらどのように見えるかを示します。

```js
if (condition1)
  statement1
else
  if (condition2)
    statement2
  else
    if (condition3)
...
```

節の中で複数の文を実行するためには、それらの文をグループ化するためにブロック文 (`{ ... }`) を使ってください。一般的に、ブロック文を常に使うのはよい習慣です。ネストされた `if` 文が絡むコードにおいて特にそうです:

```js
if (condition) {
  statements1
} else {
  statements2
}
```

プリミティブな真偽値である `true` および `false` を {{jsxref("Global_Objects/Boolean", "Boolean")}} オブジェクトの真偽性と混同しないでください。 `false`, `undefined`, `null`, `0`, `-0`, `NaN`, 空文字列 (`""`) のいずれでもない値、および任意のオブジェクトは (`false` の値を持つ Boolean オブジェクトを含め)、条件として使用されたときに {{Glossary("truthy")}} と解釈されます。例えば以下のような場合です。

```js
var b = new Boolean(false);
if (b) // この条件式は truthy です
```

## 例

### if...else の使用

```js
if (cipher_char === from_char) {
  result = result + to_char;
  x++;
} else {
  result = result + clear_char;
}
```

### else if の使用

JavaScript に `elseif` 構文はありませんので注意してください。 `else` と `if` の間に空白を置いて記述します。

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

代入はコードを眺めたときに等式と混同される可能性があるので、条件式の中で単純な代入を使わないほうが望ましいです。たとえば、次のコードを使わないでください。

```js example-bad
if (x = y) {
  /* 何かを行う */
}
```

もし条件式の中で代入を使う必要があるのなら、次の例のように、代入の周りに追加の括弧を書くのが一般的な習慣です。

```js example-good
if ((x = y)) {
  /* 何かを行う */
}
```

## 仕様書

| 仕様書                                                                           |
| -------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-if-statement', 'if statement')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.if_else")}}

## 関連情報

- {{jsxref("Statements/block", "block")}}
- {{jsxref("Statements/switch", "switch")}}
- [条件演算子](/ja/docs/JavaScript/Reference/Operators/Conditional_Operator)
