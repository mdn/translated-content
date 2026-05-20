---
title: Scope (スコープ)
slug: Glossary/Scope
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**スコープ**は{{glossary("value","値")}} と**式**が「見える」、または参照できる現在の実行コンテキストです。{{glossary("variable","変数")}}や式は現在のスコープ内にない場合、使用できません。スコープは階層構造で階層化して、子スコープから親スコープにアクセスできるようにすることもできますが、その逆はできません。

JavaScript には、次のようなスコープがあります。

- グローバルスコープ：スクリプトモードで実行中の全コードのデフォルトスコープです。
- モジュールスコープ：モジュールモードで実行中のコードのスコープです。
- 関数スコープ：{{glossary("function", "関数")}}を使用して作成されるスコープです。

さらに、[`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)、[`const`](/ja/docs/Web/JavaScript/Reference/Statements/const)、[`class`](/ja/docs/Web/JavaScript/Reference/Statements/class)、（厳格モードでの） [`function`](/ja/docs/Web/JavaScript/Reference/Statements/function) などの特定の構文で宣言された識別子は、もう一つのスコープに属することがあります。

- ブロックのスコープ：中括弧（[ブロック](/ja/docs/Web/JavaScript/Reference/Statements/block)）の組み合わせで生成されるスコープです。

{{glossary("function", "関数")}}はスコープを作成して、 (例えば) 関数内で排他的に定義された変数に、関数の外側からや他の関数の中からアクセスできないようになります。たとえば、次のものは無効です。

```js example-bad
function exampleFunction() {
  const x = "関数内で宣言"; // x は exampleFunction の中でのみ使用可能
  console.log("関数内");
  console.log(x);
}

console.log(x); // エラーが発生
```

しおかし、次のコードでは変数が関数外で宣言されており、グローバルになるため、有効になります。

```js example-good
const x = "関数の外で宣言";

exampleFunction();

function exampleFunction() {
  console.log("関数内");
  console.log(x);
}

console.log("関数外");
console.log(x);
```

ブロックは `let` および `const` の宣言のみをスコープに含みますが、`var` の宣言は含みません。

```js example-good
{
  var x = 1;
}
console.log(x); // 1
```

```js example-bad
{
  const x = 1;
}
console.log(x); // ReferenceError: x is not defined
```

## 関連情報

- [スコープ](https://ja.wikipedia.org/wiki/スコープ) - ウィキペディア
- [ブロックスコープルール](/ja/docs/Web/JavaScript/Reference/Statements/block#厳格モード時の_let、const、関数宣言のブロックスコープの規則)
