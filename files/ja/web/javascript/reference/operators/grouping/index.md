---
title: グループ化演算子 ( )
slug: Web/JavaScript/Reference/Operators/Grouping
l10n:
  sourceCommit: 86976a4d11b508763609fca37994406dbd27bca5
---

**グループ化演算子 `( )`** は、式での評価の優先順位を制御します。また、特定の構文構造において、曖昧性や構文エラーが発生する可能性がある場合に、任意の式を格納する役割も果たします。

{{InteractiveExample("JavaScript デモ: グループ化演算子")}}

```js-nolint interactive-example
console.log(1 + 2 * 3); // 1 + 6
// 予想される結果: 7

console.log(1 + 2 * 3); // 1 + 6
// 予想される結果: 7

console.log((1 + 2) * 3); // 3 * 3
// 予想される結果: 9

console.log(1 * 3 + 2 * 3); // 3 + 6
// 予想される結果: 9
```

## 構文

```js-nolint
(式)
```

### 引数

- `expression`
  - : 評価されるあらゆる[式](/ja/docs/Web/JavaScript/Reference/Operators)で、[カンマ区切り](/ja/docs/Web/JavaScript/Reference/Operators/Comma_operator)式も含まれます。

## 解説

グループ化演算子は、式を括弧で囲み、その内容をグループ化するものです。この演算子は通常の[演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)を上書きします。これにより、優先順位が低い演算子（[カンマ演算子](/ja/docs/Web/JavaScript/Reference/Operators/Comma_operator)と同程度に低いもの）を、優先順位の高い演算子よりも先に評価することができるようになります。

## 例

### グループ化演算子の使用

加算と減算を、乗算と除算の前に評価します。

```js-nolint
const a = 1;
const b = 2;
const c = 3;

// 既定の優先度
a + b * c; // 7
// 既定では、これと同様に評価される
a + (b * c); // 7

// 優先順位が変更され、乗算の前に加算が行われるようになる
(a + b) * c; // 9

// これは次のものと等価
a * c + b * c; // 9
```

これらの例では、評価の左から右への順序が維持されていることに注意してください。つまり、演算子の評価順序は変わっていますが、オペランドの評価順序は変わっていません。例えば、このコードでは、関数呼び出し `a()`、`b()`、および `c()` は、演算子の優先順位が考慮される前に、左から右へ（通常の評価順序で）評価されます。

```js
a() * (b() + c());
```

関数 `a` は関数 `b` の前に呼び出され、関数 `b` は関数 `c` の前に呼び出されます。演算子の優先順位に関する詳細は、[リファレンスページ](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)をご覧ください。

### グループ化演算子を使用して構文解析の曖昧性を解消する

[式文](/ja/docs/Web/JavaScript/Reference/Statements/Expression_statement)は、キーワード `function` で始めることはできません。パーサーはこれを[関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function)の開始と見なすため、次の [IIFE](/ja/docs/Glossary/IIFE) の構文は無効となります。

```js-nolint example-bad
function () {
  // code
}();
```

グループ化演算子を使用できることで、これによる曖昧さを解消できます。パーサーが左括弧を検出すると、その後に続くものが宣言ではなく式である必要があると認識するためです。

```js
(function () {
  // code
})();
```

曖昧さを解消するため、[`void`](/ja/docs/Web/JavaScript/Reference/Operators/void#即時実行関数式) 演算子を使用することも可能です。

[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions) の式本体（`return` キーワードを使用せずに直接式を返すもの）では、グループ化演算子を使用してオブジェクトリテラル式を返すことができます。これは、グループ化演算子を使用しない場合、左中括弧が関数本体の開始と解釈されてしまうためです。

```js
const f = () => ({ a: 1 });
```

数値リテラル上でプロパティにアクセスする場合、[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_accessors)のドット記号 `.` は、数値自体に小数点が含まれていない限り、この点と混同される可能性があります。整数リテラルを括弧で囲むことで、この曖昧さを解消することができます。

```js
(1).toString(); // "1"
```

<!-- TODO in the future we can add a decorator section -->

### グループ化演算子と自動セミコロン挿入

グループ化演算子は、[自動セミコロン挿入](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) (ASI) による問題点を軽減することができます。例えば、`return` キーワードと返される式の間には改行が存在してはなりません。

```js-nolint example-bad
function sum(a, b) {
  return
    a + b;
}
```

このコードは`undefined`を返します。なぜなら、`return`キーワードの直後にセミコロンが挿入されるため、関数が`a + b`を評価せずに即座に終了してしまうからです。返される式が長く、適切な書式化を維持したい場合には、グループ化演算子を使用して`return`キーワードの後に式が続くことを明示し、セミコロンの挿入を防ぐことができます。

```js-nolint example-good
function sum(a, b) {
  return (
    a + b
  );
}
```

しかしながら、グループ化は ASI の危険性を引き起こす可能性もあります。行が左括弧で始まり、その前の行が式で終わっている場合、パーサーは改行前にセミコロンを挿入しません。これは関数呼び出しの途中である可能性があるためです。例を示します。

```js-nolint example-bad
const a = 1
(1).toString()
```

このコードは次のように構文解析されます。

```js
const a = 1(1).toString();
```

"TypeError: 1 is not a function" というエラーが発生します。セミコロンを使用しないコーディングスタイルが採用されている場合でも、行の先頭に左括弧がある場合には、必ずセミコロンを前置することを忘れないでください。これらは、[Prettier](https://prettier.io/docs/rationale.html#semicolons) や[標準](https://standardjs.com/rules.html#semicolons)を含む複数のフォーマッター
スタイルガイドで推奨されています。

```js-nolint example-good
const a = 1
;(1).toString()
```

ASI を使って作業する際の詳しいアドバイスについては、その[リファレンスの部分](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#自動セミコロン挿入)をご覧ください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [演算子の優先順位](/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
