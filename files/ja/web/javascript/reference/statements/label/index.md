---
title: ラベル
slug: Web/JavaScript/Reference/Statements/label
l10n:
  sourceCommit: 57ae0014c67f339b9af6252a451ddd40735ed243
---

{{jsSidebar("Statements")}}

**ラベル付き文**は、任意の[文](/ja/docs/Web/JavaScript/Reference/Statements)に接頭辞として識別子を付けたものです。ラベル付き文の中にネストされた {{jsxref("Statements/break", "break")}} 文や {{jsxref("Statements/continue", "continue")}} 文を使用すると、このラベルにジャンプすることができます。

{{InteractiveExample("JavaScript デモ: Statement - Label")}}

```js interactive-example
let str = "";

loop1: for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}

console.log(str);
// Expected output: "0234"
```

## 構文

```js-nolint
ラベル:
  文
```

- `ラベル`
  - : 予約語ではない任意の JavaScript の[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)。
- `文`
  - : JavaScript の文。 `break` は任意のラベル付き文で使うことができ、 `continue` はループのラベル付き文で使うことができます。

## 解説

ラベルを使用して文を識別すると、後で `break` または `continue` 文を使用して参照することができます。JavaScript には `goto` 文がないことに注意してください。

ラベルを参照する `break` や `continue` は、`ラベル` によってラベル付けされた `文` 中になければなりません。`ラベル` は、`文` の範囲内でしか利用できない変数だと考えてください。

もし、`文` を実行中に `break ラベル;` 文に出会った場合、`文` の実行が終了し、ラベル付けされた文の直後の文から実行を続けます。

`continue ラベル;` は、`文` が[ループ文](/ja/docs/Web/JavaScript/Reference/Statements#反復処理)のうちの何れかである場合のみ使用できます。`continue ラベル;` 文が `文` の実行中に現れた場合、`文` の実行はループの次の反復処理に続きます。ラベルなしの `continue;` は最も内側のループのみを継続することができるのに対し、`continue ラベル;` はその文がほかのループの中にネストされていた場合でも、指定した任意のループの継続処理を行うことができます。

文に複数のラベルを付けることができます。この場合、ラベルはすべて機能的に同等になります。

## 例

### ラベル付き continue を for ループで使用

```js
// 最初の文は "loop1" というラベルが付いています
loop1: for (let i = 0; i < 3; i++) {
  // 2 番目の文は "loop2" というラベルが付いています
  loop2: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// 結果:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2
```

"i = 1, j = 1" と "i = 1, j = 2" をスキップしていることに注目してください。

### ラベル付き break を for ループで使用

```js
let i, j;

// 1 番目の for 文に "loop1" というラベルを付ける
loop1: for (i = 0; i < 3; i++) {
  // 2 番目の for 文に "loop2" というラベルを付ける
  loop2: for (j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// 結果:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
```

前の `continue` の例との違いに注目してください。`break loop1` に遭遇すると、外側ループの実行が終了するので、"i = 1, j = 0" 以降のログ出力はありません。`continue loop1` に遭遇すると、外側ループの実行は次の反復処理で継続するので "i = 1, j = 1" だけスキップされます。

### ラベル付き continue 文の使用

配列 items と tests について、この例はすべてを tests に渡した items の数を数えます。

```js
// 1 から 100 までの数
const items = Array.from({ length: 100 }, (_, i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 },
  { pass: (item) => item % 3 === 0 },
  { pass: (item) => item % 5 === 0 },
];
let itemsPassed = 0;

itemIteration: for (const item of items) {
  for (const test of tests) {
    if (!test.pass(item)) {
      continue itemIteration;
    }
  }

  itemsPassed++;
}
```

`continue itemIteration;` 文が、現在のアイテムに対する残りのテストと `itemsPassed` カウンターを更新する文をスキップして、次のアイテムに続けていることに注意してください。ラベル付けを使用しない場合は、代わりに論理値フラグを使用する必要があります。

```js
// 1 から 100 までの数
const items = Array.from({ length: 100 }, (_, i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 },
  { pass: (item) => item % 3 === 0 },
  { pass: (item) => item % 5 === 0 },
];
let itemsPassed = 0;

for (const item of items) {
  let passed = true;
  for (const test of tests) {
    if (!test.pass(item)) {
      passed = false;
      break;
    }
  }
  if (passed) {
    itemsPassed++;
  }
}
```

### ラベル付き break 文を使用する

配列 items と tests について、このサンプルは items のすべてを tests に渡したかを判断します。

```js
// 1 から 100 までの数
const items = Array.from({ length: 100 }, (_, i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 },
  { pass: (item) => item % 3 === 0 },
  { pass: (item) => item % 5 === 0 },
];
let allPass = true;

itemIteration: for (const item of items) {
  for (const test of tests) {
    if (!test.pass(item)) {
      allPass = false;
      break itemIteration;
    }
  }
}
```

この場合も、ラベルを使用しない場合は、代わりに論理値フラグを使用する必要があります。

```js
// 1 から 100 までの数
const items = Array.from({ length: 100 }, (_, i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 },
  { pass: (item) => item % 3 === 0 },
  { pass: (item) => item % 5 === 0 },
];
let allPass = true;

for (const item of items) {
  let passed = true;
  for (const test of tests) {
    if (!test.pass(item)) {
      passed = false;
      break;
    }
  }
  if (!passed) {
    allPass = false;
    break;
  }
}
```

### break を使用したラベル付きブロックの使用

ラベルは単純なブロックでも使用することができますが、ループ以外のラベルは break 文のみが意味を持ちます。

```js
foo: {
  console.log("face");
  break foo;
  console.log("this will not be executed");
}
console.log("swap");

// Logs:
// "face"
// "swap"
```

### ラベル付き関数宣言

ラベルが適用できるのは[文だけであり、宣言は含まれません](/ja/docs/Web/JavaScript/Reference/Statements#文と宣言の違いについて)。厳格モードでない場合、関数宣言をコードでラベル付けできる古い文法があります。

```js
L: function F() {}
```

ただし、[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)のコードでは {{jsxref("SyntaxError")}} が発生します。

```js example-bad
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
```

[ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)や[非同期関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function)は、厳格モードであってもなくてもラベル付けすることはできません。

```js example-bad
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

ラベル付きの関数電源の構文は[非推奨](/ja/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)であり、厳格モードでないコードであっても使用すべきではありません。実際、関数の本体の中からこのラベルへジャンプすることはできません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
