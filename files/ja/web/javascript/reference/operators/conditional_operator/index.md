---
title: 条件 (三項) 演算子
slug: Web/JavaScript/Reference/Operators/Conditional_operator
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

{{jsSidebar("Operators")}}

**条件 (三項) 演算子**は JavaScript では唯一の、3 つのオペランドをとる演算子です。条件に続いて疑問符 (`?`)、そして条件が{{Glossary("truthy", "真値")}}であった場合に実行する式、コロン (`:`) が続き、条件が{{Glossary("falsy", "偽値")}}であった場合に実行する式が最後に来ます。この演算子は、 [`if`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) 文の代替としてよく用いられます。

{{EmbedInteractiveExample("pages/js/expressions-conditionaloperators.html")}}

## 構文

```js-nolint
condition ? exprIfTrue : exprIfFalse
```

### 引数

- `condition`
  - : 値が条件として使用される式です。
- `exprIfTrue`
  - : `condition` が{{Glossary("truthy", "真値")}} (`true` と等しいか、 `true` に変換できる値) と評価された場合に評価される式です。
- `exprIfFalse`
  - : `condition` が{{Glossary("falsy", "偽値")}} (`false` と等しいか、 `false` に変換できる値) と評価された場合に評価される式です。

## 解説

`false` についていえば、偽値になる可能性がある式は `null`, `NaN`, `0`, 空文字列 (`""`), `undefined` です。 `condition` がこのうちの何れかであれば、条件演算子の結果は `exprIfFalse` の式を実行した結果になります。

## 例

### 単純な例

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
- [Null 合体演算子 (`??`)](/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [オプショナルチェーン (`?.`)](/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [コードでの意思決定 — 条件文](/ja/docs/Learn/JavaScript/Building_blocks/conditionals)
- [式と演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators)ガイド
