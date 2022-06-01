---
title: 厳格モードへの移行
slug: Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
tags:
  - 上級者
  - ガイド
  - JavaScript
translation_of: Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode
---
{{jsSidebar("More")}}

ECMAScript 第 5 版では[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode) (strict mode) を導入し、主要なブラウザーすべて（IE10 を含む）に実装されました。ウェブブラウザーにコードを厳格モードとして解釈させるのは簡単ですが（ソースコードの先頭に `'use strict';` を追加するだけです）、既存のコードベースを厳格モードに移行するには、もう少し作業が必要です。

この記事の目的は、開発者へのガイダンスを提供することです。

## 段階的移行

厳格モードは、段階的に移行できるように設計されています。ファイルごとに個別に変更することもできますし、関数の粒度で厳格モードにコードを移行することも可能です。

## 非厳格モードと厳格モードの違い

### 構文エラー

`'use strict';` を追加すると、スクリプトが実行される前に、以下のケースでは{{jsxref("SyntaxError")}} が発生します。

- 8 進数構文 `var n = 023;`
- [`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) 文
- [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) を変数名に対して使用すること `delete myVariable`;
- [`eval`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) や [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) を変数または関数の引数名として使用すること
- (ECMAScript 2015 を見越した) 新しい[予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)、 `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, `yield` のうちの一つの使用
- 明らかなエラー

    - オブジェクトリテラル内でプロパティ名に同じ名前を 2 回宣言すること `{a: 1, b: 3, a: 7}` これは ECMAScript 2015 では問題なくなりました ([bug 1041128](https://bugzilla.mozilla.org/show_bug.cgi?id=1041128))。
  - 関数の 2 つの引数を同じ名前で宣言すること `function f(a, b, b) {}`

単純なエラーや悪習を明らかにするので、こういったエラーは良いものです。これらのエラーは、コードが実行される前に発生します。

### 新しい実行時エラー

JavaScript は以前、何をしたかがエラーになるような状況では、暗黙に失敗していました。厳格モードでは、そのような場合に例外を発生させます。コードベースにそのようなケースが含まれている場合、何も壊れていないことを確認するためにテストが必要になります。繰り返しになりますが、これは関数の粒度レベルで起こる可能性があります。

#### 宣言していない変数への値設定

```js
function f(x) {
  'use strict';
  var a = 12;
  b = a + x * 35; // エラー!
}
f(42);
```

これはグローバルオブジェクトの値を変更するために使われてきましたが、それが期待される効果であることはまれでした。本当にグローバルオブジェクトに値を設定したい場合は、引数として渡し、明示的にプロパティとして代入してください。

```js
var global = this; // 最上位のコンテキストでは、 "this" は常に
                   // グローバルオブジェクトを参照します
function f(x) {
  'use strict';
  var a = 12;
  global.b = a + x * 35;
}
f(42);
```

#### 構成不可のプロパティを削除しようとすること

```js
'use strict';
delete Object.prototype; // エラー!
```

厳格モードでない場合は、ユーザーの予想に反して、暗黙に失敗します。

#### ポイズン引数と関数プロパティ

厳格モードでは `arguments.callee`, `arguments.caller`, `anyFunction.caller`, `anyFunction.arguments` にアクセスするとエラーが発生します。唯一の合法的な利用法は、以下のように関数を再利用することでしょう。

```js
// example taken from vanillajs: http://vanilla-js.com/
var s = document.getElementById('thing').style;
s.opacity = 1;
(function() {
  if ((s.opacity-=.1) < 0)
    s.display = 'none';
  else
    setTimeout(arguments.callee, 40);
})();
```

上記は以下のように書き換えられます。

```js
'use strict';
var s = document.getElementById('thing').style;
s.opacity = 1;
(function fadeOut() { // 関数名
  if((s.opacity-=.1) < 0)
    s.display = 'none';
  else
    setTimeout(fadeOut, 40); // 関数名を使用する
})();
```

### 意味的な違い

以下の違いは非常に微妙な違いです。テストスイートはこの種の微妙な差を捉えない可能性があります。これらの違いがコードの意味に影響を与えないことを確認するためには、コードベースの慎重なレビューが必要になるでしょう。幸いなことに、この慎重なレビューによって機能の粒度を徐々に下げていくことができます。

#### 関数呼び出しにおける `this`

`f()` のような関数呼び出しでは、 `this` の値はグローバルオブジェクトでした。厳格モードでは `undefined` になりました。関数が [`call`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) または [`apply`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) で呼び出されたとき、この値がプリミティブ値であった場合は、オブジェクト (または `undefined` や `null` に対してはグローバルオブジェクト) にボックス化されていました。厳格モードでは、値は変換または置換せずに直接渡されます。

#### `arguments` は関数の名前付き引数の別名ではない

厳格モードでない場合、 `arguments` オブジェクト内の値を変更すると、対応する名前付きの引数も変更されます。これは JavaScript エンジンの最適化を複雑にし、コードを呼んだり理解したりするのを難しくしていました。厳格モードでは、 `arguments` オブジェクトは名前付き引数と同じ値で作成・初期化されますが、 `arguments` オブジェクトや名前付き引数の変更は互いに反映されません。

#### `eval` への変更

厳格モードのコードでは、 `eval` は呼び出されたスコープ内に新しい変数を作成しません。また厳格モードでは、もちろん文字列は厳格モードの規則で評価されます。何も破綻していないことを確認するためには、徹底的なテストが必要になります。本当に必要ではない場合は eval を使わないというのも現実的な解決策かもしれません。

## 厳格性に中立なコード

厳格なコードを厳格モードに移行する上での潜在的な「欠点」は、厳格モードを実装していない古いブラウザーでは意味が異なる可能性があることです。まれに起こることですが（連結やミニ化の失敗などで）、コードも書いてテストしたモードで実行されないこともあります。ここでは、コードの厳格性への依存をなくす規則を示します。

1.  コードを厳格モードで書き、厳格モードでしか発生しないエラー (上記の「新しい実行時エラー」の節にあるもの) が発生しないことを確認してください。
2.  意味の違いから離れてみてください。

    1.  `eval`: 何をやっているか分かる場合にのみ、使用してください。
    2.  `arguments`: 関数の引数へは、常に名前を経由してアクセスするか、 arguments のオブジェクトのコピーを行うために、
        `var args = Array.prototype.slice.call(arguments)`
        を関数の最初の行に追加してください。
    3.  `this`: 自ら生成したオブジェクトへ参照するときのみ `this` を使用してください。

## 関連情報

- [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)
