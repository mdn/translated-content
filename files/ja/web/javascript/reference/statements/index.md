---
title: 文と宣言
slug: Web/JavaScript/Reference/Statements
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{jsSidebar("Statements")}}

JavaScript アプリケーションは、適切な構文で書かれた文から構成されます。ひとつの文が数行に渡る場合もあります。また複数の文それぞれがセミコロンで区切られていれば 1 行となる場合もあります。そのキーワードはひとつではなく、キーワードのグループとなっています。

## 文と宣言（カテゴリ別）

アルファベット順リストは左サイドバーで確認できます。

### フロー制御

- {{jsxref("Statements/return", "return")}}
  - : 関数が返す値を指定します。
- {{jsxref("Statements/break", "break")}}
  - : 現在実行中のループ、`switch` による分岐、あるいはラベル文を終了し、その終了した文に続く文へとプログラムの制御を移行します。
- {{jsxref("Statements/continue", "continue")}}
  - : 現在実行中のループ、またはラベル付きループで現在反復している文の実行を終了し、そのループの実行を次の反復から継続します。
- {{jsxref("Statements/throw", "throw")}}
  - : ユーザー定義の例外を発生させます。
- {{jsxref("Statements/if...else", "if...else")}}
  - : 与えられた条件が真の場合はある文を実行します。条件が偽の場合はまた別の文を実行できます。
- {{jsxref("Statements/switch", "switch")}}
  - : ある式を評価し、式の値を case 節と照らし合わせ、 case 節に関連付けられた文を実行します。
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : 実行を試み、例外が発生した際に行うべき処理を規定する文のブロックを記述します。

### 宣言

- {{jsxref("Statements/var", "var")}}
  - : 変数を宣言し、その変数をある値に初期化することもできます。
- {{jsxref("Statements/let", "let")}}
  - : ブロックスコープを持つローカル変数を宣言し、その変数をある値に初期化することもできます。
- {{jsxref("Statements/const", "const")}}
  - : 読み取り専用の名前付き定数を宣言します。

### 関数とクラス

- {{jsxref("Statements/function", "function")}}
  - : 指定された仮引数を持つ関数を宣言します。
- {{jsxref("Statements/function*", "function*")}}
  - : [イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)をより簡単に書けるジェネレーター関数です。
- {{jsxref("Statements/async_function", "async function")}}
  - : 指定した引数を持つの非同期関数を宣言します。
- {{jsxref("Statements/async_function*", "async function*")}}
  - : 非同期ジェネレータ関数により、非同期の[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)をより簡単に書くことができます。
- {{jsxref("Statements/class", "class")}}
  - : クラスを宣言します。

### 反復処理

- {{jsxref("Statements/do...while", "do...while")}}
  - : テスト条件が偽と評価されるまで指定された文を実行するループを作成します。この条件は文が実行されたあとに評価されます。その結果、少なくとも 1 回は指定された文が実行されます。
- {{jsxref("Statements/for", "for")}}
  - : 丸括弧で囲まれ、セミコロンで区切られた 3 つの式と、それに続くループ内で実行される文から構成されるループを作成します。
- {{jsxref("Statements/for...in", "for...in")}}
  - : オブジェクトの列挙可能なプロパティに対し任意の順番で反復処理を行います。それぞれ個別のプロパティに対し、文を実行できます。
- {{jsxref("Statements/for...of", "for...of")}}
  - : 反復可能オブジェクト ({{jsxref("Global_Objects/Array","配列","",1)}}、配列風オブジェクト、[イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)を含む) を反復処理し、それぞれ個別のプロパティの値に対する実行文をともなった反復処理フックを呼び出します。
- {{jsxref("Statements/for-await...of", "for await...of")}}
  - : 非同期反復オブジェクト、配列風オブジェクト、[イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)を反復処理し、各固有のプロパティ値で実行する文を実行しつつ、カスタムイテレーションフックを実行する。
- {{jsxref("Statements/while", "while")}}
  - : テスト条件が真と評価される間、指定した文を実行するループを作成します。この条件は文が実行される前に評価されます。

### その他

- {{jsxref("Statements/Empty", "空文", "", 1)}}
  - : 空文は、文が必要ないが JavaScript の文法上 1 つの文が必要な場合に使います。
- {{jsxref("Statements/block", "ブロック", "", 1)}}
  - : ブロック文は 0 個以上の文をグループ化するのに使います。ブロックは 1 組の波括弧で囲みます。
- {{jsxref("Statements/Expression_statement", "式文", "", 1)}}
  - : 式文は、式を評価し、その結果を破棄します。これにより、関数の実行や変数の更新など、式に付随する効果を実行することができます。
- {{jsxref("Statements/debugger", "debugger")}}
  - : 利用可能なデバッグ機能を呼び出します。利用可能なデバッグ機能がない場合、この文は無効となります。
- {{jsxref("Statements/export", "export")}}
  - : 外部モジュールや別のスクリプトでインポートできるように、関数をエクスポートするのに使われます。
- {{jsxref("Statements/import", "import")}}
  - : 外部モジュールや別のスクリプトからエクスポートされる関数をインポートするのに使われます。
- {{jsxref("Statements/label", "ラベル", "", 1)}}
  - : `break` や `continue` 文を使う際に参照できる識別子を含む文を用意します。
- {{jsxref("Statements/with", "with")}} {{Deprecated_Inline}}
  - : 文のスコープチェーンを拡張します。

## 文と宣言の違いについて

この節では、 2 種類の構文を比較します。[_文_](https://tc39.es/ecma262/#prod-Statement)と[_宣言_](https://tc39.es/ecma262/#prod-Declaration)です。これらは 2 つの独立した文法集合です。以下のものは宣言です。

- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/export", "export")}} （注: [モジュール](/ja/docs/Web/JavaScript/Guide/Modules)の最上位にのみ現れます）
- {{jsxref("Statements/import", "import")}} （注: [モジュール](/ja/docs/Web/JavaScript/Guide/Modules)の最上位にのみ現れます）

[前述](#文と宣言（カテゴリ別）)のうち、それ以外のものはすべて文です。

「文」と「宣言」という用語は、JavaScript の形式文法において厳密な意味を持ち、それがコードのどこに配置されるかに影響します。例えば、ほとんどの制御フロー構造では、本体は文だけを受け入れます。例えば [`if...else`](/ja/docs/Web/JavaScript/Reference/Statements/if...else) の分岐先などです。）

```js-nolint
if (条件)
  文1;
else
  文2;
```

もし、文の代わりに宣言を使用した場合、 {{jsxref("SyntaxError")}} となります。例えば、 [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) 宣言は文ではないので、 `if` 文の本体としてそのままの形を使用することはできません。

```js-nolint example-bad
if (条件)
  let i = 0; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

一方、[`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) は文なので、それ自身で `if` 本体として使用することができます。

```js-nolint example-good
if (条件)
  var i = 0;
```

宣言は「識別子と値を結びつける」ものであり、文は「アクションを実行する」ものであると考えることができます。なぜなら、`var` は通常の字句スコープの規則に従わないので、副作用を引き起こす可能性があるからです。グローバル変数の作成、既存の `var` で定義された変数の変更、ブロックの外から見える変数の定義（`var` で定義された変数はブロックスコープに入らないため）のような形式です。

他の例として、[ラベル](/ja/docs/Web/JavaScript/Reference/Statements/label)は文にのみ付けることができます。

```js example-bad
label: const a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context
```

> [!NOTE]
> [関数宣言にラベルを持たせる](/ja/docs/Web/JavaScript/Reference/Statements/label#labeled_function_declarations)古い文法がありますが、ウェブの現実との互換性のために標準化されただけです。

これを回避するには、宣言を中括弧で囲んで、[ブロック文](/ja/docs/Web/JavaScript/Reference/Statements/block)の一部にすることができます。

```js example-good
label: {
  const a = 1;
}

if (条件) {
  let i = 0;
}
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [演算子](/ja/docs/Web/JavaScript/Reference/Operators)
