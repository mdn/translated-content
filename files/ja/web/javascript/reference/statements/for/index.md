---
title: for
slug: Web/JavaScript/Reference/Statements/for
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{jsSidebar("Statements")}}

**`for`** 文は、括弧で囲みセミコロンで区切った 3 つの引数と、続いてループ内で実行される文（ふつうは[ブロック文](/ja/docs/Web/JavaScript/Reference/Statements/block)）から成るループを構成します。

{{EmbedInteractiveExample("pages/js/statement-for.html")}}

## 構文

```js-nolint
for (initialization; condition; afterthought)
  statement
```

- `initialization` {{optional_inline}}

  - : ループが始まる前に一度だけ評価される（[代入式](/ja/docs/Web/JavaScript/Reference/Operators/Assignment)を含む）式または変数宣言。ふつうはカウンター変数を初期化するために使われます。この式では任意で、`var` キーワードを用いて新しい変数を宣言することもできます。`var` で宣言された変数はループ内のローカル変数にはなりません。すなわち、`for` ループが属するスコープと同じスコープになります。`let` で宣言された変数は文内のローカル変数になります。

    この式の結果は捨て去られます。

- `condition` {{optional_inline}}

  - : ループのそれぞれの反復処理が行われる前に評価される式です。この式が [true と評価された](/ja/docs/Glossary/Truthy)場合は、 `statement` が実行されます。この式が [false と評価された](/ja/docs/Glossary/Falsy)場合は、実行は `for` 構造に続く最初の式に飛びます。

    この条件テストはオプションです。省略した場合、この条件は常に true と評価されます。

- `afterthought` {{optional_inline}}
  - : ループのそれぞれの反復処理の最後に評価される式です。これは、次の `condition` の評価前に行われます。一般的には、カウンター変数を更新または増加するために使われます。
- `statement`
  - : 条件が true と評価された場合に限り実行される文です。ループ内で複数の文を実行するには、[ブロック文](/ja/docs/Web/JavaScript/Reference/Statements/block)を使用して文をグループ化してください。ループ内で文を実行しないようにするには、[空文](/ja/docs/Web/JavaScript/Reference/Statements/Empty) (`;`) を使用してください。

## 例

### for の使用

次の `for` 文は、変数 `i` を宣言し、それを `0` に初期化することから始まります。`i` が 9 より小さいことをチェックし、続く 2 つの文を実行し、ループを通過した後ごとに `i` を 1 増加します。

```js
for (let i = 0; i < 9; i++) {
  console.log(i);
  // その他の文
}
```

### 初期化ブロックの構文

初期化ブロックは、式と変数宣言の両方を受け入れることができます。ただし、式には括弧で囲んでいない [`in`](/ja/docs/Web/JavaScript/Reference/Operators/in) 演算子を使用することができません。[`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループと曖昧になるためです。

```js-nolint example-bad
for (let i = "start" in window ? window.start : 0; i < 9; i++) {
  console.log(i);
}
// SyntaxError: 'for-in' loop variable declaration may not have an initializer.
```

```js-nolint example-good
// Parenthesize the whole initializer
for (let i = ("start" in window ? window.start : 0); i < 9; i++) {
  console.log(i);
}

// Parenthesize the `in` expression
for (let i = ("start" in window) ? window.start : 0; i < 9; i++) {
  console.log(i);
}
```

### 省略可能な for の式

`for` ループの先頭にある 3 つの式は、省略可能です。例えば、`initialization` ブロックで変数を初期化する必要はありません。

```js
let i = 0;
for (; i < 9; i++) {
  console.log(i);
  // その他の文
}
```

`initialization` ブロックと同様に、`condition` ブロックも省略可能です。この式を省略した場合は、本体の中でループを脱出できるようにして、無限ループにならないようにしなければなりません。

```js
for (let i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // その他の文
}
```

3 つのブロックをすべて省略することもできます。繰り返しますが、 {{jsxref("Statements/break", "break")}} 文を使用してループを終了させ、また break 文の条件がある時点で true になるように、変数を変更（増加）させていることを確認してください。

```js
let i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

しかし、3 つの位置の式をすべて使用する訳ではない場合、特に最初の式で変数を宣言せず、上位のスコープで何かを変更している場合は、代わりに [`while`](/ja/docs/Web/JavaScript/Reference/Statements/while) ループを使用することを検討したほうが意図がより明確になります。

```js
let i = 0;

while (i <= 3) {
  console.log(i);
  i++;
}
```

### 初期化ブロックの字句の宣言

初期化ブロック内で変数を宣言する場合、上位の[スコープ](/ja/docs/Glossary/Scope)で宣言する場合と異なる点があり、特にループ本体内で[クロージャ](/ja/docs/Web/JavaScript/Closures)を作成する場合は重要です。例えば、下記のコードを見てください。

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

期待通り、`0`、`1`、`2` とログ出力します。しかし、その変数が上位スコープで定義されている場合は、

```js
let i = 0;
for (; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

`3`、`3`、`3` とログ出力します。なぜかと言うと、それぞれの `setTimeout` が `i` 変数を閉じる新しいクロージャを作成しますが、`i` がループ本体のスコープでない場合、すべてのクロージャは最終的に呼び出されたときに同じ変数を参照します。そして [`setTimeout`](/ja/docs/Web/API/Window/setTimeout) の非同期であるため、すでにループが終了した後に実行され、すべてのキューのコールバック本体の `i` は `3` という値になります。

これは、初期化に `var` 文を使用した場合にも起こります。`var` で宣言された変数は関数スコープのみで、レキシカルスコープにならない（つまり、ループ本体のスコープにすることはできない）からです。

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// 3, 3, 3 とログ出力
```

初期化ブロックのスコープ効果は、宣言がループ本体の中で行われ、たまたま `condition` と `afterthought` の部分でアクセス可能であるかのように理解することができます。より正確には、`let`宣言は `for` ループに特化されます。もし `initialization` が `let` 宣言であれば、ループ本体が評価された後、以下のことが毎回行われます。

1. 新しい字句スコープが作成され、新しい `let` が宣言された変数が追加されます。
2. 前回の反復処理でバインドされた値を用いて、新しい変数を再初期化します。
3. `afterthought` が新しいスコープで評価されます。

そのため、`afterthought` 内で新しい変数を割り当てても、前回反復処理したときのバインディングには影響しません。

クロージャを作成することで、特定の反復処理中のバインディングを取得することができます。このことから、`initialization` 節で作成したクロージャが、`afterthought` 節で `i` を再代入しても更新されないことがわかります。

```js
for (let i = 0, getI = () => i; i < 3; i++) {
  console.log(getI());
}
// Logs 0, 0, 0
```

これは、ループ本体の中で `getI` を宣言した場合のように "0, 1, 2" をログ出力するわけではありません。これは、`getI` が反復処理するたびに再評価されるのではなく、関数が一度作成され、（ループが最初に初期化されたときに宣言された変数を参照する）変数 `i` が閉じられるからです。その後、`i` の値を更新すると、実際には `i` という新しい変数が作成されますが、`getI` はそれを見ることができません。これを修正するには、`i` が更新されるたびに `getI` を再計算するようにします。

```js
for (let i = 0, getI = () => i; i < 3; i++, getI = () => i) {
  console.log(getI());
}
// Logs 0, 1, 2
```

実際、変数 `i` の最初のバインディングをキャプチャして、後でそれを割り当てることができます。この更新された値は、次の新しい `i` のバインディングを見るループ本体には見えません。

```js
for (
  let i = 0, getI = () => i, incrementI = () => i++;
  getI() < 3;
  incrementI()
) {
  console.log(i);
}
// Logs 0, 0, 0
```

これは "0, 0, 0" とログ出力します。なぜなら、各ループ評価における `i` 変数は実際には別個の変数ですが、`getI` と `incrementI` はどちらも `i` の*初期*バインディングを読み書きし、その後に宣言されたものには対応しないからです。

### 文を持たない for の使用

以下の `for` の繰り返しでは、 `final-expression` 句の中でにおけるノードのオフセット位置を検索しています。 `statement` 節を使用する必要がない場合は、代わりにセミコロンを使用してください。

```js
function showOffsetPos(id) {
  let left = 0;
  let top = 0;
  for (
    let itNode = document.getElementById(id); // 初期化
    itNode; // 条件式
    left += itNode.offsetLeft,
      top += itNode.offsetTop,
      itNode = itNode.offsetParent // 更新式
  ); // セミコロン

  console.log(
    `Offset position of "${id}" element:
left: ${left}px;
top: ${top}px;`,
  );
}

showOffsetPos("content");

// 出力結果:
// Offset position of "content" element:
// left: 0px;
// top: 153px;
```

`for` 文の後のセミコロンは必須であることに注意してください。これは[空文](/ja/docs/Web/JavaScript/Reference/Statements/Empty)としての役割を果たすからです。そうしないと、`for` 文は以下の `console.log` 行を `statement` 節として取得し、`log` を複数回実行させることになる。

### 2 つの反復用変数の使用

[カンマ演算子](/ja/docs/Web/JavaScript/Reference/Operators/Comma_operator)を用いて、for ループで同時に更新される 2 つのカウンターを作成することができます。複数の `let` や `var` の宣言をカンマで結合することもできます。

```js
const arr = [1, 2, 3, 4, 5, 6];
for (let l = 0, r = arr.length - 1; l < r; l++, r--) {
  console.log(arr[l], arr[r]);
}
// 1 6
// 2 5
// 3 4
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [空文](/ja/docs/Web/JavaScript/Reference/Statements/Empty)
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
