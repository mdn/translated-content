---
title: 文と宣言
slug: Web/JavaScript/Reference/Statements
---

{{jsSidebar("Statements")}}

JavaScript アプリケーションは、適切な構文で書かれた文から構成されます。ひとつの文が数行に渡る場合もあります。また複数の文それぞれがセミコロンで区切られていれば 1 行となる場合もあります。そのキーワードはひとつではなく、キーワードのグループとなっています。

## 文と宣言（カテゴリ別）

アルファベット順リストは左サイドバーで確認できます。

### フロー制御

- {{jsxref("Statements/block", "ブロック","",1)}}
  - : ブロック文は 0 個以上の文をグループ化するのに使います。ブロックは 1 組の波括弧で囲みます。
- {{jsxref("Statements/break", "break")}}
  - : 現在実行中のループ、`switch` による分岐、あるいはラベル文を終了し、その終了した文に続く文へとプログラムの制御を移行します。
- {{jsxref("Statements/continue", "continue")}}
  - : 現在実行中のループ、またはラベル付きループで現在反復している文の実行を終了し、そのループの実行を次の反復から継続します。
- {{jsxref("Statements/Empty", "空文","",1)}}
  - : 空文は、文が必要ないが JavaScript の文法上 1 つの文が必要な場合に使います。
- {{jsxref("Statements/if...else", "if...else")}}
  - : 与えられた条件が真の場合はある文を実行します。条件が偽の場合はまた別の文を実行できます。
- {{jsxref("Statements/switch", "switch")}}
  - : ある式を評価し、式の値を case 節と照らし合わせ、 case 節に関連付けられた文を実行します。
- {{jsxref("Statements/throw", "throw")}}
  - : ユーザー定義の例外を発生させます。
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : 実行を試み、例外が発生した際に行うべき処理を規定する文のブロックを記述します。

### 宣言

- {{jsxref("Statements/var", "var")}}
  - : 変数を宣言し、その変数をある値に初期化することもできます。
- {{jsxref("Statements/let", "let")}}
  - : ブロックスコープを持つ局所変数を宣言し、その変数をある値に初期化することもできます。
- {{jsxref("Statements/const", "const")}}
  - : 読み取り専用の名前付き定数を宣言します。

### 関数とクラス

- {{jsxref("Statements/function", "function")}}
  - : 特定の仮引数を持つ関数を宣言します。
- {{jsxref("Statements/function*", "function*")}}
  - : [イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)をより簡単に書けるジェネレーター関数です。
- {{jsxref("Statements/async_function", "async function")}}
  - : 指定したパラメーターの非同期関数を定義します。
- {{jsxref("Statements/return", "return")}}
  - : 関数によって返される値を指定します。
- {{jsxref("Statements/class", "class")}}
  - : クラスを宣言します。

### 反復処理

- {{jsxref("Statements/do...while", "do...while")}}
  - : テスト条件が偽と評価されるまで指定された文を実行するループを作成します。この条件は文が実行されたあとに評価され、その結果少なくとも 1 回は指定された文が実行されます。
- {{jsxref("Statements/for", "for")}}
  - : 丸括弧で囲まれ、セミコロンで区切られた 3 つの式と、それに続くループ内で実行される文から構成されるループを作成します。
- {{jsxref("Statements/for_each...in", "for each...in")}}
  - : オブジェクトプロパティのすべての値を、指定した変数を通して反復処理を行います。それぞれ個別のプロパティに対し、指定した文が実行されます。
- {{jsxref("Statements/for...in", "for...in")}}
  - : オブジェクトの列挙可能なプロパティに対し任意の順番で反復処理を行います。それぞれ個別のプロパティに対し、文を実行できます。
- {{jsxref("Statements/for...of", "for...of")}}
  - : 反復可能オブジェクト ({{jsxref("Global_Objects/Array","配列","","true")}}、配列風オブジェクト、[イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)を含む) を反復処理し、それぞれ個別のプロパティの値に対する実行文をともなった反復処理フックを呼び出します。
- {{jsxref("Statements/for-await...of", "for await...of")}}
  - : 非同期反復オブジェクト、配列風オブジェクト、[イテレーターとジェネレーター](/ja/docs/JavaScript/Guide/Iterators_and_Generators)を反復処理し、各固有のプロパティ値で実行する文を実行しつつ、カスタムイテレーションフックを実行する。
- {{jsxref("Statements/while", "while")}}
  - : テスト条件が真と評価される間、指定した文を実行するループを作成します。この条件は文が実行される前に評価されます。

### その他

- {{jsxref("Statements/debugger", "debugger")}}
  - : 利用可能なデバッグ機能を呼び出します。利用可能なデバッグ機能がない場合、この文は無効となります。
- {{jsxref("Statements/export", "export")}}
  - : 外部モジュールや別のスクリプトでインポートできるように、関数をエクスポートするのに使われます。
- {{jsxref("Statements/import", "import")}}
  - : 外部モジュールや別のスクリプトからエクスポートされる関数をインポートするのに使われます。
- [`import.meta`](/ja/docs/Web/JavaScript/Reference/Statements/import.meta)
  - : JavaScript モジュールのコンテンツ固有なメタデータを公開するオブジェクト。
- {{jsxref("Statements/label", "label", "", 1)}}
  - : `break` や `continue` 文を使う際に参照できる識別子を含む文を用意します。

<!---->

- {{jsxref("Statements/with", "with")}}
  - : 文のスコープチェーンを拡張します。

## 仕様書

| 仕様書                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-ecmascript-language-statements-and-declarations', 'ECMAScript Language: Statements and Declarations')}} |

## ブラウザーの互換性

{{Compat("javascript.statements")}}

## 関連情報

- [演算子](/ja/docs/Web/JavaScript/Reference/Operators)
