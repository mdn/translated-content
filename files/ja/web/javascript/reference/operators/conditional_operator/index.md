---
title: 条件（三項）演算子
slug: Web/JavaScript/Reference/Operators/Conditional_operator
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

**条件（三項）演算子**は JavaScript では唯一の、 3 つのオペランドをとる演算子です。
条件に続いて疑問符 (`?`)、そして条件が{{Glossary("truthy", "真値")}}であった場合に実行する式、コロン (`:`) が続き、条件が{{Glossary("falsy", "偽値")}}であった場合に実行する式が最後に来ます。
この演算子は、 [`if...else`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) 文の代替としてよく用いられます。

{{InteractiveExample("JavaScript デモ: 条件演算子")}}

```js interactive-example
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));
// 予想される結果: "$2.00"

console.log(getFee(false));
// 予想される結果: "$10.00"

console.log(getFee(null));
// 予想される結果: "$10.00"
```

## 構文

```js-nolint
condition ? exprIfTrue : exprIfFalse
```

### 引数

- `condition`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 3 （論理和またはヌル値合体）以上の式で、その値を条件として使用します。`false` のほか、`null`、`NaN`、`0`、`0n`、空文字列 (`""`)、`undefined` も偽値です。
- `exprIfTrue`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2 （代入）以上の式で、`condition` が{{Glossary("truthy", "真値")}}の場合にのみ評価されます。
- `exprIfFalse`
  - : [優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence#一覧表)が 2 （代入）以上の式で、`condition` が{{Glossary("falsy", "偽値")}}の場合にのみ評価されます。

### 返値

`condition` が真値の場合は `exprIfTrue` の値、そうでない場合は `exprIfFalse` の値です。

## 例

### 基本的な例

```js
const age = 26;
const beverage = age >= 21 ? "ビール" : "ジュース";
console.log(beverage); // "ビール"
```

### null 値の扱い

よくある使い方の一つに、 `null` になる可能性がある値を扱うというものがあります。

```js
const greeting = (person) => {
  const name = person ? person.name : "お客さん";
  return `やあ、${name}`;
};

console.log(greeting({ name: "アリス" })); // "やあ、アリス"
console.log(greeting(null)); // "やあ、お客さん"
```

### 条件の連鎖

三項演算子は右結合なので、以下のような方法で `if … else if … else if … else` の連鎖と同様に「連鎖」させることができます。

```js-nolint
function example() {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}
```

これは次の [`if...else`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) の連鎖と同じです。

```js
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`if...else`](/ja/docs/Web/JavaScript/Reference/Statements/if...else)
- [ヌル値合体演算子 (`??`)](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [オプショナルチェーン (`?.`)](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [学習: コードでの意思決定 — 条件文](/ja/docs/Learn_web_development/Core/Scripting/Conditionals)
- [式と演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators)ガイド
