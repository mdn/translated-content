---
title: ブロック
slug: Web/JavaScript/Reference/Statements/block
---

{{jsSidebar("Statements")}}

**ブロック文** (他の言語では **複合文** とも呼ばれる) は 0 個以上の文をグループ化するのに使われます。ブロックは中括弧 (「波括弧」) の組で区切られ、場合によっては{{jsxref("Statements/label", "ラベル", "", 1)}}が付くことがあります。

{{EmbedInteractiveExample("pages/js/statement-block.html", "taller")}}

## 構文

### ブロック文

```
{
  StatementList
}
```

### ラベル付きブロック文

```
LabelIdentifier: {
  StatementList
}
```

- `StatementList`
  - : ブロック文の中でグループ化される文。
- `LabelIdentifier`
  - : 省略可能な{{jsxref("Statements/label", "ラベル", "", 1)}}で、視覚的な識別のため、または {{jsxref("Statements/break", "break")}} のターゲットとして使われます。

## 解説

ブロック文は、他の言語ではよく**複合文**と呼ばれます。これは複数の文を JavaScript からみて 1 つの文にまとめるために使用します。ブロック内に複数の文をまとめることは、JavaScript ではよく行われることです。反対の動作は[空文](/ja/docs/Web/JavaScript/Reference/Statements/Empty)を使用することで実現でき、これは 1 つの文が必要な場所に文を置かずにおくことができます。

ブロックは、{{jsxref("Statements/if...else", "if...else")}} や {{jsxref("Statements/for", "for")}} 文との組み合わせでよく使用されます。

## 例

### 非厳格モード時の var または関数定義のブロックスコープの規則

非厳格モードでは、`var` の宣言や、[関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)で作成された変数は、ブロックスコープを**持ちません**。ブロック内で導入された変数は、それを含んでいる関数またはスクリプトがスコープとなり、変数を設定した効果は、そのブロック自体を超えて持続します。言い換えれば、ブロック文はスコープをもたらしません。例えば、

```js example-bad
var x = 1;
{
  var x = 2;
}
console.log(x); // 2 が出力されます
```

これが 2 を出力するのは、ブロックの中の `var x` 文がブロックより前と同じスコープを持つからです。

非厳格モードでは、ブロック内の関数定義は奇妙な動きをします。使用しないでください。

### 厳格モード時の let、const、関数宣言のブロックスコープの規則

対照的に、{{jsxref("Statements/let", "let")}} と {{jsxref("Statements/const", "const")}} で宣言された識別子は、ブロックスコープを**持ち**ます。

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // 1 が出力されます
```

この `x = 2` は、それが定義されたブロックのスコープに制限されています。

同じことが `const` にも言えます。

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // 1 が出力され、SyntaxError は発生しない...
```

ブロックスコープを持つ `const c = 2` は、ブロック内で固有に宣言することができるため、`SyntaxError: Identifier 'c' has already been declared` を発生させ*ない*ことに注意してください。

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)は ES2015 に導入され、ブロック内の関数がそのブロックのスコープを持ちます。ES2015 より前では、ブロックレベルの関数は厳格モードで禁止されていました。

## 仕様

| 仕様書                                                                       |
| ---------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-block', 'Block statement')}} |

## ブラウザーの互換性

{{Compat("javascript.statements.block")}}

## 関連情報

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/let", "let")}}
