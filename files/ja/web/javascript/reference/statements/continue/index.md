---
title: continue
slug: Web/JavaScript/Reference/Statements/continue
l10n:
  sourceCommit: 57ae0014c67f339b9af6252a451ddd40735ed243
---

{{jsSidebar("Statements")}}

**`continue`** 文は、現在のループまたはラベル付きループの現在反復処理中の文の実行を終了し、次の反復処理としてループの実行を続けます。

{{InteractiveExample("JavaScript デモ: Statement - Continue")}}

```js interactive-example
let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// Expected output: "012456789"
```

## 構文

```js-nolint
continue;
continue label;
```

- `label` {{optional_inline}}
  - : その文のラベルに関連付けられた識別子。

## 解説

{{jsxref("Statements/break", "break")}} 文と対照的に、 `continue` はループの実行を完全には終了しません。代わりに、

- {{jsxref("Statements/while", "while")}} または {{jsxref("Statements/do...while", "do...while")}} ループでは、条件式にジャンプします。
- {{jsxref("Statements/for", "for")}} ループでは、更新式にジャンプします。
- {{jsxref("Statements/for...in", "for...in")}}、{{jsxref("Statements/for...of", "for...of")}}、{{jsxref("Statements/for-await...of", "for await...of")}} ループでは、次の反復処理にジャンプします。

`continue` 文には任意でラベルを含めることができ、現在のループの代わりにラベル付きループ文の次の反復処理へジャンプすることができます。この場合、`continue` 文は、ラベル付き文の中にある必要があります。

`continue` 文は、その後にラベルがあるかどうかに関わらず、スクリプト、モジュール、関数の本体、[静的初期化ブロック](/ja/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)のそれぞれ最上位で使用することはできません。その関数やクラスがさらにループの中に含まれていた場合でもです。

## 例

### while における continue の使用

次の例では、 {{jsxref("Statements/while", "while")}} ループで `i` の値が 3 であるときに実行される `continue` 文を持つものを示しています。よって、 `n` は 1、3、7、12 の値をとります。

```js
let i = 0;
let n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}
```

### ラベル付き continue の使用

次の例では、`checkIAndJ` とラベル付けされた文が、`checkJ` とラベル付けされた文を含んでいます。もし `continue` と遭遇したなら、プログラムは `checkJ` 文の先頭から継続します。`continue` と遭遇するたびに、`checkJ` の条件が false を返すまで、`checkJ` は再度反復処理します。false が返されたら、`checkIAndJ` 文の残りが完遂されます。

もし `continue` がラベル `checkIAndJ` を持っていたなら、プログラムは `checkIAndJ` 文の先頭から継続します。

```js
let i = 0;
let j = 8;

checkIAndJ: while (i < 4) {
  console.log(`i: ${i}`);
  i += 1;

  checkJ: while (j > 4) {
    console.log(`j: ${j}`);
    j -= 1;

    if (j % 2 === 0) continue checkJ;
    console.log(`${j} is odd.`);
  }
  console.log(`i = ${i}`);
  console.log(`j = ${j}`);
}
```

結果:

```
i: 0

// start checkj
j: 8
7 is odd.
j: 7
j: 6
5 is odd.
j: 5
// end checkj

i = 1
j = 4

i: 1
i = 2
j = 4

i: 2
i = 3
j = 4

i: 3
i = 4
j = 4
```

### 構文違反の continue 文

`continue` は関数の境界をまたがるループ内で使用することはできません。

```js
for (let i = 0; i < 10; i++) {
  (() => {
    continue; // SyntaxError: Illegal continue statement: no surrounding iteration statement
  })();
}
```

ラベルを参照する場合は、ラベル付きの文がその `continue` 文を含んでいなければなりません。

```js
label: for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  continue label; // SyntaxError: Undefined label 'label'
}
```

ラベル付きの文はループでなければなりません。

```js
label: {
  for (let i = 0; i < 10; i++) {
    continue label; // SyntaxError: Illegal continue statement: 'label' does not denote an iteration statement
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/label", "ラベル", "", 1)}}
