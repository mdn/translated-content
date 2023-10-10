---
title: while
slug: Web/JavaScript/Reference/Statements/while
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{jsSidebar("Statements")}}

**`while`** 文は、テスト条件が真と評価されている間、指定された文を実行するループを作成します。条件はその文を実行する前に評価されます。

{{EmbedInteractiveExample("pages/js/statement-while.html")}}

## 構文

```js-nolint
while (condition)
  statement
```

- `condition`
  - : ループを通過するごとに、その前に評価される式。この条件が[真と評価された](/ja/docs/Glossary/Truthy)場合は、 `statement` が実行されます。条件が[偽と評価された](/ja/docs/Glossary/Falsy)場合は、実行は `while` ループの後の文に続きます。
- `statement`

  - : 条件が真と評価されている間に実行される文。ループ内で複数の文を実行する場合は、{{jsxref("Statements/block", "ブロック", "", 1)}}文 (`{ /* ... */ }`) を使用してそれらの文をグループ化してください。

    メモ: {{jsxref("Statements/break", "break")}} 文を使用すると、条件が真と評価される前にループを停止することができます。

## 例

### while の使用

次の `while` ループは、 `n` が 3 より小さい間反復します。

```js
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

それぞれの反復で、ループは `n` を増加させ、それを `x` に加えます。したがって、 `x` および `n` は次の値をとります。

- 最初の通過の後: `n` = 1 および `x` = 1
- 2 回目の通過の後: `n` = 2 および `x` = 3
- 3 回目の通過の後: `n` = 3 および `x` = 6

3 回目の通過が完了した後、条件 `n` < 3 は真ではなくなり、ループは終了します。

### 代入を条件として使用

場合によっては、代入を条件として使用することに意味があることもあります。これは読みやすさとトレードオフの関係にあるので、このパターンを誰にでもわかりやすくするための、ある種の文体上の推奨事項があります。

次の例は、文書のコメントを反復処理し、コンソールにログ出力するものです。

```js-nolint example-bad
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while (currentNode = iterator.nextNode()) {
  console.log(currentNode.textContent.trim());
}
```

これは完全によい例とは言えません。特に次の行があるからです。

```js-nolint example-bad
while (currentNode = iterator.nextNode()) {
```

その行の動作は、毎回コメントノードが得られるという点では問題ありません。

1. `iterator.nextNode()` がコメントノードを返し、それが `currentNode` に代入される。
2. `currentNode = iterator.nextNode()` の値は、従って[真値](/ja/docs/Glossary/Truthy)となる。
3. そのため、`console.log()` の呼び出しを実行し、ループが継続される。

…そして、文書中にコメントノードがなくなったとき、次のようになります。

1. `iterator.nextNode()` は [`null``](/ja/docs/Web/JavaScript/Reference/Operators/null) を返す。
2. 従って `currentNode = iterator.nextNode()` も `null` になり、これは[偽値](/ja/docs/Glossary/Falsy)である。
3. そのため、ループを終了する。

この行の問題は、条件式にはふつう[比較演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#比較演算子)、例えば `===` を使用するものですが、この行の `=` は比較演算子ではなく、[代入演算子](/ja/docs/Web/JavaScript/Guide/Expressions_and_operators#代入演算子)です。そのため、`=` は `===` の間違いのように見えてしまいます（実際には間違いではなくても）。

従って、このようにすると、一部の[コードリンティングツール](/ja/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain#code_linting_tools)、例えば ESLint の [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign) ルールなどは、誤記の可能性があるものを発見して修正しやすくするために、以下のような警告を報告します。

> Expected a conditional expression and instead saw an assignment.（条件式が期待されるところに代入がありました。）

多くのスタイルガイドでは、条件式に代入式を書くことが意図的であることを、より明確に示すことを推奨しています。それを行うための最小限の方法として、括弧を[グループ化演算子](/ja/docs/Web/JavaScript/Reference/Operators/Grouping)として追加して代入式を囲む方法があります。

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode())) {
  console.log(currentNode.textContent.trim());
}
```

実際、これは ESLint の `no-cond-assign` の既定値や [Prettier](https://prettier.io/) で強制されているスタイルなので、このパターンをよく見かけるでしょう。

条件を明示的な比較に変えるために比較演算子を追加することを勧める人もいます。

```js-nolint example-good
while ((currentNode = iterator.nextNode()) !== null) {
```

このパターンは他にも書き方があります。

```js-nolint example-good
while ((currentNode = iterator.nextNode()) && currentNode) {
```

あるいは、`while` ループを使用するアイディアを完全に放棄する方法もあります。

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
for (
  let currentNode = iterator.nextNode();
  currentNode;
  currentNode = iterator.nextNode()
) {
  console.log(currentNode.textContent.trim());
}
```

読者が条件式のパターンとして代入式を記述することに十分に慣れていれば、これらの読みやすさはすべて同じくらいのはずです。そうでなければ、最も冗長ではありますが、最後の形式が最も読みやすいでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
