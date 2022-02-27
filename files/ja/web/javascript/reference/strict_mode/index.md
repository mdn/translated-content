---
title: 厳格モード
slug: Web/JavaScript/Reference/Strict_mode
tags:
  - ECMAScript 5
  - ガイド
  - JavaScript
  - 厳格モード
translation_of: Web/JavaScript/Reference/Strict_mode
---
{{JsSidebar("More")}}

## 厳格モードの概要

> **Note:** 既定の厳格でないモードを「**[Sloppy モード](/ja/docs/Glossary/Sloppy_mode)**」と呼ぶのを目にすることがあるかもしれません。これは公式な用語ではありません、念のため注意してください。

JavaScript の厳格モード (Strict mode) は　ECMAScript 5 で導入され、 JavaScript の自由度を制限することに**オプトイン**することによって、暗黙のうちに「Sloppy モード」からオプトアウトする方法です。厳格モードは単なるサブセットではなく、通常のコードとは**意図的に**異なる意味を持っています。厳格モードに対応していないブラウザーは、厳格モードに対応しているブラウザーとは異なる動作をする可能性がありますので、厳格モードに関する側面に対応しているかどうかの機能テストを行わずに厳格モードを頼らないでください。厳格モードのコードと非厳格モードのコードは共存できますので、スクリプトを順次厳格モードにオプトインすることができます。

厳格モードでは、通常の JavaScript の意味にいくつかの変更を加えます。

1.  JavaScript で暗黙に失敗する一部のものを、エラーが発生するように変更することで除去します。
2.  JavaScript エンジンによる最適化処理を困難にする誤りを修正します。厳格モードのコードは、非厳格モードのコードより高速に実行できる可能性があります。
3.  将来の ECMAScript で定義される予定の構文の使用を禁止します。

JavaScript の自由度を制限して機能するようにコードを変更する場合は、[厳格モードへの移行](/ja/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode)を参照してください。

## 厳格モードの呼び出し

厳格モードは**スクリプト全体**または**個別の関数**に適用できます。括弧 `{}` で括られるブロック構文には適用できません。そのような場所に適用しようとしても何も起きません。`eval` のコード、`Function` のコード、イベントハンドラー属性、[`setTimeout()`](/ja/docs/Web/API/setTimeout) コードに渡す文字列、およびこれらに類するものはスクリプト全体であり、厳格モードを呼び出すと期待どおりに動作します。

### スクリプトでの厳格モード

スクリプト全体で厳格モードを呼び出すには、他のいかなる文よりも前に `"use strict";` (または `'use strict';`) という文を**そのまま**追加します。

```js
// スクリプト全体の厳格モード構文
'use strict';
var v = "こんにちは！厳格モードのスクリプト！";
```

この構文には、[著名なサイト](https://bugzilla.mozilla.org/show_bug.cgi?id=579119)を[悩ませた](https://bugzilla.mozilla.org/show_bug.cgi?id=627531)落とし穴があります。それは、競合するスクリプトをむやみに連結できないことです。厳格モードのスクリプトと非厳格モードのスクリプトを連結することを考えてみてください。連結後のスクリプト全体が厳格モードになります。これは逆も言えます。非厳格モードのスクリプトと厳格モードのスクリプトを連結すると非厳格モードになります。もちろん、スクリプトの連結は決して理想的なものではありませんが、どうしても必要な場合は、関数ごとに厳格モードを有効にすることを検討してください。

スクリプトの内容全体を関数でラップし、その外側の関数で厳格モードを使用するという方法もあります。これにより連結の問題が解消されますが、関数スコープの外の共有変数を明示的にエクスポートする必要があります。

## 関数における厳格モード

同様に、関数で厳格モードを呼び出すには、関数本体で他のいかなる文よりも前に `"use strict";` (または `'use strict';`) という文を**そのまま**追加します。

```js
function strict() {
  // 関数レベルの厳格モード構文
  'use strict';
  function nested() { return '私もそうです！'; }
  return "こんにちは！厳格モードの関数です！  " + nested();
}
function notStrict() { return "厳格モードではありません"; }
```

### モジュールでの厳格モード

ECMAScript 2015 では、[JavaScript モジュール](/ja/docs/Web/JavaScript/Reference/Statements/export)が導入されたため、厳格モードに入るための第 3 の方法が導入されました。JavaScript モジュールは内容全体が自動的に厳格モードになり、それを開始するための宣言は必要ありません。

```js
function strict() {
    // これはモジュールなので、既定で厳格モードです
}
export default strict;
```

### クラスでの厳格モード

ECMAScript の[クラス](/ja/docs/Web/JavaScript/Reference/Classes)のすべての部分は、[クラス定義](/ja/docs/Web/JavaScript/Reference/Classes#class_declarations)と[クラス式](/ja/docs/Web/JavaScript/Reference/Classes#class_expressions) — そして、クラス本体のすべての部分も含め、厳格モードのコードになります。

## 厳格モードでの変更点

厳格モードでは構文と実行時動作の両方に変更を加えます。変更点は主に、ミスからエラー (構文エラーまたは実行時エラー) への変換、与えられた名前から特定の変数を算出する方法の単純化、`eval` および `arguments` の単純化、「安全な」 JavaScript を書くことの容易化、将来の ECMAScript の進化への事前対処に分類されます。

### ミスからエラーへの変換

厳格モードでは、従来は受け入れていた一部のミスをエラーに変更します。JavaScript は未熟な開発者にも易しいように設計され、またエラーとすべき操作の一部をエラーとして扱いません。これにより当面の問題を解決したことがありますが、後により大きな問題を引き起こしたこともあります。厳格モードではこれらのミスをエラーとして扱うことで、開発者は気づいて修正するようになります。

第一に、厳格モードでは、偶発的にグローバル変数を作成できないようにします。通常の JavaScript では、代入文で変数名の綴りを間違えるとグローバルオブジェクトに新しいプロパティが作成され、そしてそれは動作し続けます（現在または将来問題になる可能性はありますが）。厳格モードでは、代入文で偶発的にグローバル変数を作成せずにエラーが発生します。

```js
'use strict';
                       // グローバル変数 mistypeVariable が存在しない場合、
mistypeVariable = 17;  // この行は変数のスペルミスと見なして  ReferenceError を
                       // 発生させます。
```

第二に、厳格モードでは、代入文で暗黙的に失敗せずに例外が発生するようにします。例えば、`NaN` は書き込み不可のグローバル変数です。通常のコードでは `NaN` に代入しても何も起きません。つまり、開発者は失敗したという通知を受けません。厳格モードでは `NaN` に代入すると例外が発生します。通常のコードで暗黙的に失敗する代入（書き込み不可のプロパティへの代入、ゲッターのみのプロパティへの代入、[拡張不可](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)オブジェクトへの新規プロパティ割り当て）について、厳格モードでは例外が発生します。

```js
'use strict';

// 書き換え不可能なグローバルへの代入
var undefined = 5; // TypeError が発生します
var Infinity = 5; // TypeError が発生します

// 書き換え不可能なプロパティへの代入
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // TypeError が発生します

// ゲッター専用プロパティへの代入
var obj2 = { get x() { return 17; } };
obj2.x = 5; // TypeError が発生します

// 拡張不可能なオブジェクトの新しいプロパティへの代入
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // TypeError が発生します
```

第三に、厳格モードでは、削除できないプロパティを削除しようとするとエラーが発生します（非厳格モードでは何も起きません）。

```js
'use strict';
delete Object.prototype; // TypeError が発生します
```

第四に、厳格モードでは、関数の引数名が一意であることが要求されます。通常のコードでは、引数の名前が重複していると、同じ名前の前の引数が見えなくなります。こうした前の引数は `arguments[i]` を通せば利用可能なので、完全にアクセスできないわけではありません。しかし、この隠蔽はほとんど意味がなく、おそらく望ましくないものです（例えば、タイプミスを隠してしまうかもしれません）。したがって、厳密モードでは引数名が超空すると構文エラーになります。

```js
function sum(a, a, c) { // !!! 構文エラー
  'use strict';
  return a + a + c; // このコードを実行したら失敗する
}
```

第五に、ECMAScript 5 の厳格モードでは、[`0` を先頭とした 8 進数表記や 8 進数エスケープシーケンスを禁止](/ja/docs/Web/JavaScript/Reference/Errors/Deprecated_octal)します。厳格モード以外では、 `0644` のような `0` で始まる数値は、すべての桁が 8 より小さい場合、 8 進数 (`0644 === 420`) として解釈されます。 8 進数のエスケープシーケンス、例えば `"\45"` は `"%"` と等しいものですが、文字を 8 進数の拡張 ASCII 文字コード番号で表現するために使用されます。厳密モードでは、これは構文エラーになります。 ECMAScript 2015 では、数値の前に "`0o`" を付けることで 8 進数のリテラルに対応しています。

```js
var a = 0o10; // ES2015: 8 進数
```

未熟な開発者は先頭のゼロに意味がないと考え、それを桁揃えのために用いることがあります。しかし、これでは数値の意味が変わってしまいます。先頭に 0 を置く 8 進数表記が役立つことはほとんどなく、また誤って使われかねないため、厳格モードでは構文エラーになります。

```js
'use strict';
var sum = 015 + // !!! 構文エラー
          197 +
          142;

var sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

第六に、ECMAScript 2015 の厳格モードでは、[プリミティブ](/ja/docs/Glossary/Primitive)値にプロパティを設定することが禁止されます。非厳格モードではプロパティの設定が単純に無視されますが、厳格モードでは {{jsxref("TypeError")}} が発生します。

```js
(function() {
'use strict';

false.true = '';         // TypeError
(14).sailing = 'home';   // TypeError
'with'.you = 'far away'; // TypeError

})();
```

ECMAScript 5 の厳格モードのコードでは、プロパティ名の重複は {{jsxref("SyntaxError")}} と見なされていました。[プロパティ名の計算値](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)の導入により、実行時に重複が可能になったため、 ECMAScript 2015 ではその制限が取り除かれました。

```js
'use strict';
var o = { p: 1, p: 2 }; // ECMAScript 2015 以前では構文エラー
```

### 変数の使用の単純化

厳格モードでは、コード中の変数名と特定の変数定義との対応づけ方法を単純化します。多くのコンパイラーの最適化は、変数 **X** を**ある**場所に保管している、と表現できることに依存しています。これは JavaScript のコードを最大限に最適化するために重要です。 JavaScript ではこのようなコード内の名前と変数定義との基本的な対応づけを、実行時まで行うことができない場合があります。厳格モードではこのような事態が起こるケースを取り除くことで、コンパイラが厳格モードのコードをより最適化できるようにします。

第一に、厳格モードでは [`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) を禁止します。`with` の問題点はブロック内にある名前を、渡されたオブジェクトのプロパティまたはブロックの周囲（あるいはグローバル）のスコープへ実行時に対応づけることです。これは事前に行うことができません。厳格モードでは `with` をエラーとすることで、 `with` 内にある名前の指す場所が実行時に不明になる可能性をなくします。

```js
'use strict';
var x = 17;
with (obj) { // !!! 構文エラー
  // 厳格モードでなかったら、これは var x になるのでしょうか、
  // それとも obj.x になるのでしょうか？
  // コードを実行してみないと一概には言えないので、
  // 名前を最適化することはできません。
  x;
}
```

`with` の置き換えとして、オブジェクトに短い名前の変数を割り当て、その変数を用いて対応するプロパティにアクセスするという代案があります。

第二に、[厳格モードでは、 `eval` は周囲のスコープに新しい変数を作成しません](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/)。通常 `eval("var x;")` というコードは、変数 `x` を周囲の関数やグローバルスコープに作成します。これは、一般的に `eval` の呼び出しを含む関数において、引数やローカル変数を参照していないすべての名前は、実行時に特定の定義に対応付けなければならないことを意味します（その `eval` が新しい変数を導入して、外側の変数を隠してしまうかもしれないからです）。厳格モードでは `eval` で評価されているコードでのみ使用できる変数を作成するので、変数名が外部の変数や一部のローカル変数を指しているかにかかわらず `eval` は影響を与えません。

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

関連して、厳格モードのコード内で `eval` 関数を `eval(...)` という形式で呼び出した場合は、コードは厳格モードとして評価されます。コードを明示的に厳格モードで呼び出してもよいですが、必須ではありません。

```js
function strict1(str) {
  'use strict';
  return eval(str); // str は厳格モードのコードとして扱われます。
}
function strict2(f, str) {
  'use strict';
  return f(str); // eval(...) ではない場合、 str は厳格モードを
                 // 呼び出した場合のみ厳格モードになります。
}
function nonstrict(str) {
  return eval(str); // str は厳格モードを
                    // 呼び出した場合のみ厳格モードになります。
}

strict1("'厳格モード！'");
strict1("'use strict'; '厳格モード！'");
strict2(eval, "'厳格モードではない'");
strict2(eval, "'use strict'; '厳格モード！'");
nonstrict("'厳格モードではない'");
nonstrict("'use strict'; '厳格モード！'");
```

従って、厳格モードの `eval` 内にある名前は、`eval` の結果として評価されない厳格モードのコードと同様に動作します。

第三に、厳格モードでは、単純名の削除を禁止します。厳格モードでは `delete name` を構文エラーにします:

```js
'use strict';

var x;
delete x; // !!! 構文エラー

eval('var y; delete y;'); // !!! 構文エラー
```

### `eval` および `arguments` の単純化

厳格モードでは `arguments` および `eval` の奇妙さを低減します。通常のコードではどちらも不思議な動作がかなりあります。 `eval` でバインドを追加や削除したり、バインドする値を変更したり、 `arguments` の添字つきプロパティが名前付き引数の別名になることです。厳格モードでは `eval` および `arguments` をキーワードとした手当てにより、完全な修正は将来の ECMAScript まで実現しないものの大きな進歩を遂げます。

第一に、`eval` および `arguments` という名前に対して言語構文でのバインドや代入を不可にします。以下のような試みはすべて構文エラーになります:

```js
'use strict';
eval = 17;
arguments++;
++eval;
var obj = { set p(arguments) { } };
var eval;
try { } catch (arguments) { }
function x(eval) { }
function arguments() { }
var y = function eval() { };
var f = new Function('arguments', "'use strict'; return 17;");
```

第二に、厳格モードのコードでは、内部で作成された `arguments` オブジェクトのプロパティがエイリアスになりません。通常のコードでは第一引数 `arg` を持つ関数において `arg` に値を設定すると `arguments[0]` にも設定され、また逆も同様です（引数が提供されない場合や `arguments[0]` が削除された場合を除きます）。厳格モードの関数での `arguments` オブジェクトは、関数が呼び出された当初の引数を保持します。`arguments[i]` は対応する名前付き引数の値を追跡せず、また名前付き引数も対応する `arguments[i]` の値を追跡しません。

```js
function f(a) {
  'use strict';
  a = 42;
  return [a, arguments[0]];
}
var pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);
```

第三に、`arguments.callee` に対応しなくなります。通常のコードでは、`arguments.callee` は取り囲んでいる関数を参照します。この使用法は脆弱です。取り囲んでいる関数に名前をつけましょう。さらに、`arguments.callee` がアクセスされている場合は非インライン関数への参照を提供しなければならないため、`arguments.callee` はインライン関数のような最適化を実質的に妨害します。厳格モードの関数での `arguments.callee` は、書き込みや読み出し時にエラーが発生する、削除不可のプロパティです。

```js
'use strict';
var f = function() { return arguments.callee; };
f(); // TypeError が発生します。
```

### JavaScript の「安全化」

厳格モードにより「安全な」 JavaScript の記述がより簡単になります。現在、一部のウェブサイトではユーザーに対し、ウェブサイトの**他のユーザーが**実行することができる JavaScript を記述する方法を提供しています。ブラウザーの JavaScript はユーザーの個人情報にアクセスできるため、実行前に部分的に変換し、禁止された機能へのアクセスを検閲する必要があります。しかし、 JavaScript は柔軟性に富んでいるため、多くの実行時チェックを行わないと事実上不可能です。ある種の言語関数は、実行時チェックを行うことでかなりのパフォーマンスコストがかかるほど浸透しています。いくつかの厳格モードの調整と、ユーザが投稿した JavaScript が厳格モードのコードであることと、特定の方法で呼び出されることを要求することで、これらの実行時チェックの必要性を大幅に減らすことができます。

第一に、厳格モードでは、 `this` として関数に渡された値をオブジェクトへボクシングしません。非厳格モードでの関数にとって `this` は常にオブジェクトになります。this の値は、実行時に this オブジェクト値として提供されたオブジェクトであったり、真偽値・文字列・数値などのプリミティブな値が `this` として呼び出した時はオブジェクトへボクシングした値、 `undefined` または `null` の `this` で呼び出された時はグローバルオブジェクトとなります。(特定の `this` を指定するために [`call`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call)、[`apply`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)、[`bind`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) を使用してください)。自動的なボクシングはパフォーマンス上のコストがあり、しかしブラウザーでグローバルオブジェクトを公開することは、「安全な」 JavaScript 環境へのアクセスを提供するグローバルオブジェクトを制限する必要があるためにセキュリティ上の危険性があります。従って厳格モードの関数では、指定された `this` を変更せずに使用します。

```js
'use strict';
function fun() { return this; }
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);
```

つまり、とりわけブラウザーでは、厳格モードの関数の中で、`this` を介して `window` オブジェクトを参照することができなくなったことを意味します。

第二に、厳格モードでは、ECMAScript の一般的な実装である拡張を通して JavaScript のスタックを「渡り歩く」ことができません。拡張を用いた通常のコードでは中間にある `fun` 関数を呼び出すと、`fun.caller` は `fun` を呼び出した直近の関数を指し、また `fun.arguments` はその `fun` の呼び出しにおける `arguments` を指します。これらの拡張は「安全化された」コードにで「特権的に」関数や (潜在的にセキュアでない) 引数へのアクセスを許すことから、「安全な」 JavaScript に対して問題があります。`fun` が厳格モードである場合は、`fun.caller` および `fun.arguments` は書き込みや読み出し時にエラーが発生する、削除不可のプロパティです。

```js
function restricted() {
  'use strict';
  restricted.caller;    // TypeError が投げられます
  restricted.arguments; // TypeError が投げられます
}
function privilegedInvoker() {
  return restricted();
}
privilegedInvoker();
```

第三に、厳格モードの関数での `arguments` は対応する関数の呼び出し時の変数にアクセスできません。一部の過去の ECMAScript では `arguments.caller` を、プロパティが関数内の変数のエイリアスになるオブジェクトとして実装しました。これには関数の抽象化を通した特権的な値の隠蔽機能を破ることから、[セキュリティ上の危険性](https://stuff.mit.edu/iap/2008/facebook/)があります。以上の理由から、今日のブラウザーはこれらを実装していません。それでも歴史的な機能性から、厳格モードの関数での `arguments.caller` は書き込みや読み出し時にエラーが発生する、削除不可のプロパティです。

```js
'use strict';
function fun(a, b) {
  'use strict';
  var v = 12;
  return arguments.caller; // TypeError が投げられます
}
fun(1, 2); // v を公開しません（または a または b）
```

### 将来の ECMAScript への準備

将来の ECMAScript では新たな構文を導入する予定であるため、ECMAScript 5 の厳格モードでは移行を容易にする制限事項を適用します。将来の変更点の基礎が厳格モードで禁止されていると、変更が容易になります。

第一に、厳格モードでは、いくつかの識別子を予約語にします。その対象は `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, `yield` です。厳格モードでは、これらを変数や引数の名前として使用できません。

```js
function package(protected) { // !!!
  'use strict';
  var implements; // !!!

  interface: // !!!
  while (true) {
    break interface; // !!!
  }

  function private() { } // !!!
}
function fun(static) { 'use strict'; } // !!!
```

Mozilla 特有の注意事項が 2 つあります。第一に、コードが JavaScript 1.7 以降 (chrome コード、または適切な `<script type="">` を使用) かつ厳格モードである場合、`let` および `yield` にはそれらのキーワードが最初に導入されてから持っていた機能があります。しかし `<script src="">` や `<script>...</script>` で読み込むウェブの厳格モードのコードでは、`let`/`yield` を識別子として使用できません。第二に、ES5 では `class`、`enum`、`export`、`extends`、`import`、`super` を無条件に予約していますが、Firefox 5 以前で Mozilla はこれらを厳格モードでのみ予約します。

第二に、厳格モードでは、[スクリプトの最上位または関数内にない function 文を禁止します](https://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/)。通常のコードでは、 function 文はどこにでも置くことが許されます。**これは ES5 の仕様に (ES3 でさえも) 含まれていません**。ブラウザーにより意味が異なり互換性がない拡張です。なお、最上位の外で function 文を使用することは、 ES2015 で許可されました。

```js
'use strict';
if (true) {
  function f() { } // !!! 構文エラー
  f();
}

for (var i = 0; i < 5; i++) {
  function f2() { } // !!! 構文エラー
  f2();
}

function baz() { // 問題なし
  function eit() { } // これも問題なし
}
```

このような function 文は基本的な ES5 の拡張であるため、禁止することは厳格モードとして適切ではありません。しかしこの動作は ECMAScript 委員会の推奨であり、それゆえブラウザーは実装するでしょう。

## ブラウザーでの厳格モード

現在、主要なブラウザは厳格モードを実装しています。しかし、[厳格モードに部分的にしか対応していない ](https://caniuse.com/use-strict "caniuse.com availability of strict mode")もの、あるいはまったく対応していないもの（例えば Internet Explorer バージョン 10 以下）がまだ多数存在するので、やみくもに依存しないようにしましょう。**厳格モードは意味を変更します。**これらの変更に依存すると、厳格モードを実装していないブラウザーでミスやエラーが発生します。厳格モードの使用には注意を払い、厳格モードの関連する部分が実装されているかどうかをチェックする機能テストで、厳格モードへの依存をバックアップしてください。最後に、**コードを厳格モードに対応しているブラウザーと対応していないブラウザーで必ずテストしてください**。もし、厳格モードに対応していないブラウザーだけでテストを行った場合、対応しているブラウザーで問題が発生する可能性が非常に高くなりますし、その逆も同様です。

## 関連情報

- [Strict Mode Code in the ECMAScript specification](https://tc39.es/ecma262/#sec-strict-mode-code)
- [Where's Walden? » New ES5 strict mode support: now with poison pills!](https://whereswalden.com/2010/09/08/new-es5-strict-mode-support-now-with-poison-pills/)
- [Where's Walden? » New ES5 strict mode requirement: function statements not at top level of a program or function are prohibited](https://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/)
- [Where's Walden? » New ES5 strict mode support: new vars created by strict mode eval code are local to that code only](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/)
- [JavaScript "use strict" tutorial for beginners.](http://qnimate.com/javascript-strict-mode-in-nutshell/)
- [John Resig - ECMAScript 5 Strict Mode, JSON, and More](http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/)
- [ECMA-262-5 in detail. Chapter 2. Strict Mode.](http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/)
- [Strict mode compatibility table](https://kangax.github.io/compat-table/es5/#Strict_mode)
- [厳格モードへの移行](/ja/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode)
