---
title: 厳格モード
slug: Web/JavaScript/Reference/Strict_mode
l10n:
  sourceCommit: b251bec337a8059d2241b0cb8b2648986c55f1f7
---

{{JsSidebar("More")}}

> **メモ:** 既定の厳格でないモードを _[Sloppy モード](/ja/docs/Glossary/Sloppy_mode)_ と呼ぶのを目にすることがあるかもしれません。これは公式な用語ではありません、念のため注意してください。

JavaScript の厳格モード (Strict mode) は、 JavaScript の自由度を制限することに**オプトイン**することによって、暗黙のうちに [Sloppy モード](/ja/docs/Glossary/Sloppy_mode)からオプトアウトする方法です。厳格モードは単なるサブセットではなく、通常のコードとは**意図的に**異なる意味を持っています。厳格モードに対応していないブラウザーは、厳格モードに対応しているブラウザーとは異なる動作をする可能性がありますので、厳格モードに関する側面に対応しているかどうかの機能テストを行わずに厳格モードを頼らないでください。厳格モードのコードと非厳格モードのコードは共存できますので、スクリプトを順次厳格モードにオプトインすることができます。

厳格モードでは、通常の JavaScript の意味にいくつかの変更を加えます。

1. JavaScript で暗黙に失敗する一部のものを、エラーが発生するように変更することで除去します。
2. JavaScript エンジンによる最適化処理を困難にする誤りを修正します。厳格モードのコードは、非厳格モードのコードより高速に実行できる可能性があります。
3. 将来の ECMAScript で定義される予定の構文の使用を禁止します。

## 厳格モードの呼び出し

厳格モードは**スクリプト全体**または**個別の関数**に適用できます。中括弧 `{}` で括られる[ブロック構文](/ja/docs/Web/JavaScript/Reference/Statements/block)には適用できません。そのような場所に適用しようとしても何も起きません。[`eval`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) のコード、 [`Function`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function) のコード、[イベントハンドラー](/ja/docs/Web/HTML/Attributes#event_handler_attributes)属性、[`setTimeout()`](/ja/docs/Web/API/setTimeout) などの関数に渡す文字列は、関数の本体またはスクリプト全体であり、厳格モードを呼び出すと期待どおりに動作します。

### スクリプトでの厳格モード

スクリプト全体で厳格モードを呼び出すには、他のいかなる文よりも前に `"use strict";` (または `'use strict';`) という文を**そのまま**追加します。

```js
// スクリプト全体の厳格モード構文
"use strict";
const v = "こんにちは！厳格モードのスクリプト！";
```

## 関数における厳格モード

同様に、関数で厳格モードを呼び出すには、関数本体で他のいかなる文よりも前に `"use strict";` (または `'use strict';`) という文を**そのまま**追加します。

```js
function myStrictFunction() {
  // 関数レベルの厳格モード構文
  "use strict";
  function nested() {
    return "私もそうです！";
  }
  return `こんにちは！厳格モードの関数です！ ${nested()}`;
}
function myNotStrictFunction() {
  return "厳格モードではありません。";
}
```

`"use strict"` ディレクティブは、単純な引数を持つ関数の本体にのみ使用することができます。 `"use strict"` を[残余](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)、[デフォルト](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)、[分割](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)引数のある関数で使用すると、[構文エラー](/ja/docs/Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params)となります。

```js example-bad
function sum(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

### モジュールでの厳格モード

[JavaScript モジュール](/ja/docs/Web/JavaScript/Reference/Statements/export)は内容全体が自動的に厳格モードになり、それを開始するための宣言は必要ありません。

```js
function myStrictFunction() {
  // これはモジュールなので、既定で厳格モードです
}
export default myStrictFunction;
```

### クラスでの厳格モード

[クラス](/ja/docs/Web/JavaScript/Reference/Classes)本体のすべての部分は、[クラス定義](/ja/docs/Web/JavaScript/Reference/Classes#class_declarations)でも[クラス式](/ja/docs/Web/JavaScript/Reference/Classes#class_expressions)でも、厳格モードのコードになります。

```js
class C1 {
  // ここにあるコードはすべて厳格モードで評価されます
  test() {
    delete Object.prototype;
  }
}
new C1().test(); // TypeError。 test() が厳格モードであるため

const C2 = class {
  // ここにあるコードはすべて厳格モードで評価されます
};

// このコードは厳格なモードでない可能性があります。
delete Object.prototype; // エラーは発生しない
```

## 厳格モードでの変更点

厳格モードでは構文と実行時動作の両方に変更を加わります。変更点は以下のカテゴリーに分類されます。

- ミスからエラー (構文エラーまたは実行時エラー) への変換
- 与えられた名前から特定の変数を算出する方法の単純化
- `eval` および `arguments` の単純化
- 「安全な」 JavaScript を書くことの容易化
- 将来の ECMAScript の進化への事前対処

### ミスからエラーへの変換

厳格モードでは、従来は受け入れていた一部のミスをエラーに変更します。JavaScript は未熟な開発者にも易しいように設計され、またエラーとすべき操作の一部をエラーとして扱いません。これにより当面の問題を解決したことがありますが、後により大きな問題を引き起こしたこともあります。厳格モードではこれらのミスをエラーとして扱うことで、開発者は気づいて修正するようになります。

#### 未宣言の変数への代入

厳格モードでは、偶発的にグローバル変数を作成できないようにします。厳格モードでない場合は、代入文で変数名の綴りを間違えるとグローバルオブジェクトに新しいプロパティが作成され、そしてそれは動作し続けます。厳格モードでは、代入文で偶発的にグローバル変数を作成せずにエラーが発生します。

```js
"use strict";
let mistypeVariable;

// グローバル変数 mistypeVarible が存在しない場合、
// この行は "mistypeVariable" のスペルミス
// （"a" がない）と見なして ReferenceError を発生させます。
mistypeVarible = 17;
```

#### オブジェクトプロパティへの代入の失敗

厳格モードでは、代入文で暗黙的に失敗せずに例外が発生するようにします。プロパティへの代入が失敗する条件は3 つあります。

- 書き込み不可のデータプロパティへの代入
- アクセサーがゲッターのみであるプロパティへの代入
- [拡張不可](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)のオブジェクトにおける新しいプロパティへの代入

例えば、[`NaN`](/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN) は書き込み不可のグローバル変数です。厳格モードでない場合は、 `NaN` に代入しても何も起きません。つまり、開発者は失敗したという通知を受けません。厳格モードでは `NaN` に代入すると例外が発生します。

```js
"use strict";

// 書き換え不可能なグローバルへの代入
var undefined = 5; // TypeError が発生
var Infinity = 5; // TypeError が発生

// 書き換え不可能なプロパティへの代入
const obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // TypeError

// ゲッターのみのプロパティへの代入
const obj2 = {
  get x() {
    return 17;
  },
};
obj2.x = 5; // TypeError

// 拡張不可能なオブジェクトの新しいプロパティへの代入
const fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // TypeError
```

#### オブジェクトプロパティの削除の失敗

厳格モードでは、[削除](/ja/docs/Web/JavaScript/Reference/Operators/delete)操作を構成不可、またはその他の理由で削除できないプロパティ（例えば、プロキシーの [`deleteProperty`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty) ハンドラーが `false` を返すことで妨害されるもの）に対して試みると、例外が発生します（以前は何も起きませんでした）。

```js
"use strict";
delete Object.prototype; // TypeError
delete [].length; // TypeError
```

厳格モードでは、素の名前を削除することも禁じられています。 `delete name` は厳格モードでは構文エラーになります。

```js example-bad
"use strict";

var x;
delete x; // syntax error
```

名前が設定可能なグローバルプロパティの場合、それを削除するには [`globalThis`](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis) を前に付けてください。

```js example-good
"use strict";

delete globalThis.x;
```

#### 引数名の重複

厳格モードでは、関数の引数名が一意であることが要求されます。厳格モードでない場合は、引数の名前が重複していると、同じ名前の前の引数が見えなくなります。こうした前の引数は [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) を通せば利用可能なので、完全にアクセスできないわけではありません。しかし、この隠蔽はほとんど意味がなく、おそらく望ましくないものです（例えば、タイプミスを隠してしまうかもしれません）。したがって、厳格モードでは引数名が重複すると構文エラーになります。

```js example-bad
function sum(a, a, c) {
  // 構文エラー
  "use strict";
  return a + a + c; // このコードを実行したら失敗する
}
```

#### 古い 8 進数リテラル

厳格モードでは、[`0` を先頭とした 8 進数表記や 8 進数エスケープシーケンスを禁止](/ja/docs/Web/JavaScript/Reference/Errors/Deprecated_octal)します。厳格モード以外では、 `0644` のような `0` で始まる数値は、すべての桁が 8 より小さい場合、 8 進数 (`0644 === 420`) として解釈されます。初心者の開発者は、接頭辞に何の意味もないと信じて、配置用の器具として使用することがありますが、これは数字の意味を変えてしまいます。 8 進数の先頭ゼロの構文はほとんど有益なものではなく、間違って使用される可能性があるため、厳格モードでは構文エラーとなります。

```js example-bad
"use strict";
const sum =
  015 + // 構文エラー
  197 +
  142;
```

8 進数のリテラルを表記する標準の方法は、以下のように `0o` の接頭辞を付けることです。

```js example-good
const sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
```

8 進数の拡張 ASCII 文字コード番号で文字を表わすために、 `"%"` と等しい `"\45"` のような 8 進数のエスケープシーケンスが使用できます。厳格モードでは、これは構文エラーになります。より正式には、 `\` に続いて `0` 以外の数字を続けたり `\0` に数字を続けたりすることは許されていません。例えば `\9` や `\07` の形は許されません。

#### プリミティブ値へのプロパティの設定

厳格モードでは、[プリミティブ](/ja/docs/Glossary/Primitive)値にプロパティを設定することが禁止されます。プリミティブのプロパティにアクセスすると、暗黙に観察できないラッパーオブジェクトが生成されるため、厳格モードでない場合はプロパティの設定が無視されます（何も起こりません）。厳格モードでは {{jsxref("TypeError")}} が発生します。

```js
"use strict";

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
```

#### プロパティ名の重複

厳格モードのコードでは、プロパティ名が重複すると {{jsxref("SyntaxError")}} と見なされていました。[プロパティ名の計算値](/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)の導入により、実行時に重複する可能性が出てきたため、 ECMAScript 2015 ではその制限が撤廃されました。

```js
"use strict";
const o = { p: 1, p: 2 }; // ECMAScript 2015 以前では構文エラー
```

> **メモ:** これまでエラーとされていたコードをエラーでなくすこと、常に後方互換性があるものと見なされます。これは、言語がエラーを発生させることに厳格であることの良い部分であり、将来の意味づけの変更のための余地を残しています。

### スコープ管理の単純化

厳格モードでは、コード中の変数名と特定の変数定義との対応づけ方法を単純化します。多くのコンパイラーの最適化は、変数 _X_ をある場所に保管している、と表現できることに依存しています。これは JavaScript のコードを最大限に最適化するために重要です。 JavaScript ではこのようなコード内の名前と変数定義との基本的な対応づけを、実行時まで行うことができない場合があります。厳格モードではこのような事態が起こるケースを取り除くことで、コンパイラが厳格モードのコードをより最適化できるようにします。

#### with 文の削除

厳格モードでは [`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) を禁止しています。`with` の問題点は、ブロック内にある名前を、渡されたオブジェクトのプロパティまたはブロックの周囲（あるいはグローバル）のスコープへ実行時に対応づけることです。これは事前に行うことができません。厳格モードでは `with` をエラーとすることで、 `with` 内にある名前の指す場所が実行時に不明になる可能性をなくします。

```js example-bad
"use strict";
const x = 17;
with (obj) {
  // 構文エラー
  // 厳格モードでなかったら、これは const x と
  // obj.x のどちらになるのでしょうか？
  // コードを実行してみないと一概には言えないので、
  // 名前を最適化することはできません。
  x;
}
```

`with` の置き換えとして、オブジェクトに短い名前の変数を割り当て、その変数を用いて対応するプロパティにアクセスするという代案があります。

#### 漏洩のない eval

厳格モードでは、 [`eval` は周囲のスコープに新しい変数を作成しません](https://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/)。厳格モードでない場合、 `eval("var x;")` というコードは、変数 `x` を周囲の関数やグローバルスコープに作成します。これは、一般的に `eval` の呼び出しを含む関数において、引数やローカル変数を参照していないすべての名前は、実行時に特定の定義に対応付けなければならないことを意味します（その `eval` が新しい変数を導入して、外側の変数を隠してしまうかもしれないからです）。厳格モードでは `eval` で評価されているコードでのみ使用できる変数を作成するので、変数名が外部の変数や一部のローカル変数を指しているかにかかわらず `eval` は影響を与えません。

```js
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);
```

`eval()` に渡された文字列が厳格なモードで評価されるかどうかは、 `eval()` の起動方法（直接 eval か間接 eval か）に依存します。詳細は [`eval`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) のリファレンスページを参照してください。

#### ブロックスコープ付き関数宣言

JavaScript の言語仕様では、当初からブロック文の中に関数宣言を入れ子で記述することを認めていませんでした。しかし、あまりにも直感的なため、ほとんどのブラウザーが拡張文法として実装していました。そして残念ながら、実装の意味づけが分かれ、言語仕様としてすべての実装を整合をとることが不可能になりました。そのため、[ブロックスコープ付き関数宣言](/ja/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration)は厳格モードでのみ明示的に指定され（かつては厳格モードでは禁止されていた）、一方で厳格モードでない場合の動作は、ブラウザーによってばらついたままになっています。

### eval および arguments の単純化

厳格モードでは [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) および [`eval`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) の奇妙さを低減します。通常のコードではどちらも不思議な動作がかなりあります。 `eval` でバインドを追加や削除したり、バインドする値を変更したり、 `arguments` の添字つきプロパティが名前付き引数の別名になることです。厳格モードでは、 `eval` と `arguments` をキーワードとして扱うことに大きく舵を切りました。

#### eval や arguments にバインドしたり代入したりしないようにする。

`eval` および `arguments` という名前に対して言語構文でのバインドや代入を不可にしています。以下のような試みはすべて構文エラーになります。

```js example-bad
"use strict";
eval = 17;
arguments++;
++eval;
const obj = { set p(arguments) {} };
let eval;
try {
} catch (arguments) {}
function x(eval) {}
function arguments() {}
const y = function eval() {};
const f = new Function("arguments", "'use strict'; return 17;");
```

#### 引数と arguments の添字を同期させない

厳格モードのコードは、 `arguments` オブジェクトの添字を各引数のバインドと同期させません。厳格モードでない場合、最初の引数が `arg` である関数では、 `arg` に値を設定すると `arguments[0]` の値も設定され、その逆も同様です（引数を指定しなかったり `arguments[0]` を削除したりした場合を除く）。厳格モードの関数の `arguments` オブジェクトは、その関数が呼び出されたときの元の引数を格納します。 `arguments[i]` は対応する名前付き引数の値を追跡しません。

```js
function f(a) {
  "use strict";
  a = 42;
  return [a, arguments[0]];
}
const pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);
```

### JavaScript の「安全化」

厳格モードにより「安全な」 JavaScript の記述がより簡単になります。現在、一部のウェブサイトではユーザーに対し、ウェブサイトの**他のユーザーが**実行することができる JavaScript を記述する方法を提供しています。ブラウザーの JavaScript はユーザーの個人情報にアクセスできるため、実行前に部分的に変換し、禁止された機能へのアクセスを検閲する必要があります。しかし、 JavaScript は柔軟性に富んでいるため、多くの実行時チェックを行わないと事実上不可能です。ある種の言語関数は、実行時チェックを行うことでかなりのパフォーマンスコストがかかるほど浸透しています。いくつかの厳格モードの調整と、ユーザが投稿した JavaScript が厳格モードのコードであることと、特定の方法で呼び出されることを要求することで、これらの実行時チェックの必要性を大幅に減らすことができます。

#### `this` の置き換えを行わない

厳格モードでは、 `this` として関数に渡された値は強制的にオブジェクトに変換（別名「ボックス化」）しません。厳格モードでない関数では、 `this` は常にオブジェクトです。 `this` がオブジェクト値で呼び出された場合は提供されたオブジェクト、 `this` がプリミティブ値で呼び出された場合は、ボックス化された `this` の値、 `undefined` や `null` で呼び出された場合はグローバルオブジェクト、のいずれかになります。（特定の `this` を指定するには [`call`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call)、[`apply`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)、[`bind`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) を使用してください。）自動的にボックス化が行われるとパフォーマンスが犠牲となるだけでなく、ブラウザーでグローバルオブジェクトを公開することは、「安全な」 JavaScript 環境が制限しなければならない機能にグローバルオブジェクトがアクセスするため、セキュリティハザードになります。したがって、厳格モードの関数では、指定された `this` はオブジェクトにボックス化されず、指定されなかった場合は [`globalThis`](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis) ではなく `undefined` となります。

```js
"use strict";
function fun() {
  return this;
}
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)());
```

#### 積み重ねプロパティの削除

厳格モードでは、JavaScript のスタックを「渡り歩く」ことができなくなりました。多くの実装では、関数の上流での呼び出し側を検出することが可能な、いくつかの拡張機能を使用していました。関数 `fun` が呼び出されている途中にあるとき、[`fun.caller`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) は直近の `fun` を呼び出した関数で、[`fun.arguments`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) はその `fun` の呼び出しのための `arguments` です。どちらの拡張も「安全な」 JavaScript にとって問題があります。なぜなら、「安全な」コードが「特権的な」関数とその（安全でない可能性のある）引数にアクセスすることを許してしまうからです。 `fun` が厳格モードの場合、 `fun.caller` と `fun.arguments` はどちらも削除不可能なプロパティで、設定されたり取得されたりすると例外が発生します。

```js
function restricted() {
  "use strict";
  restricted.caller; // TypeError が発生
  restricted.arguments; // TypeError が発生
}
function privilegedInvoker() {
  return restricted();
}
privilegedInvoker();
```

同様に、 [`arguments.callee`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee) も対応しなくなりました。厳格モードでない場合、 `arguments.callee` は包含関数を参照します。この用途は弱いです。囲む関数に名前をつけてください。 さらに、 `arguments.callee` は関数のインライン化などの最適化の妨げになります。 `arguments.callee` にアクセスした場合、インライン化されていない関数への参照を提供することが可能でなければならないからです。厳格モードの関数用の `arguments.callee` は削除できないプロパティで、設定したり取得したりするとエラーとなります。

```js
"use strict";
const f = function () {
  return arguments.callee;
};
f(); // TypeError が発生
```

### JavaScript の将来計画

#### 予約語の追加

[予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words)とは、変数名として使用できない識別子のことです。厳格モードでは、そうでないモードよりもいくつかの名前を予約しています。その中には、すでに言語で使用されているものもあれば、将来の構文拡張を実装しやすくするために予約されているものもあります。

- `implements`
- `interface`
- [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let)
- `package`
- `private`
- `protected`
- `public`
- [`static`](/ja/docs/Web/JavaScript/Reference/Classes/static)
- [`yield`](/ja/docs/Web/JavaScript/Reference/Operators/yield)

## 厳格モードへの移行

厳格モードは、徐々に移行できるように設計されています。各ファイルを個別に変更することも可能ですし、関数の粒度まで厳格モードに移行させることも可能です。

最初にソースコードの一部に `"use strict"` を追加し、その後、意味づけの違いに注意しながら、すべての実行エラーを修正することで、コードベースを厳格モードに移行することができます。

### 構文エラー

`'use strict';` を追加すると、以下の場合にはスクリプトの実行前に {{jsxref("SyntaxError")}} が発生します。

- 8 進数の構文 `const n = 023;`
- [`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) 文
- [`delete`](/ja/docs/Web/JavaScript/Reference/Operators/delete) の変数名への使用 `delete myVariable`
- [`eval`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) や [`arguments`](/ja/docs/Web/JavaScript/Reference/Functions/arguments) を変数名や関数の引数名に使用
- 新しい[予約語](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#予約語)の使用（将来的な言語機能を見据えて): `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, `yield`
- 関数の 2 つの引数を同じ名前で定義 `function f(a, b, b) {}`
- オブジェクトリテラルで、同じプロパティ名を二重に宣言 `{a: 1, b: 3, a: 7}`。この制限は後に取り除かれました（[バグ 1041128](https://bugzilla.mozilla.org/show_bug.cgi?id=1041128)）。

これらのエラーは、明白な誤りや悪しき習慣を明らかにするものであり、良いものです。これらのエラーはコードが実行される前に発生するので、コードがランタイムによって解釈される限り、容易に発見することができます。

### 新しいランタイムエラー

JavaScript で使用される場合、これまでエラーとされるべき状況では 黙って失敗していました。厳格モードはそのような場合に発生します。もしコードベースにそのようなケースがあれば、何も壊れていないことを確認するためにテストが必要でしょう。このようなエラーは、関数の粒度レベルで確認することができます。

- 未宣言の変数に代入すると {{jsxref("ReferenceError")}} が発生します。これはグローバルオブジェクトのプロパティを設定するために使用されますが、期待される効果はほとんどありません。もし、実際にグローバルオブジェクトに値を集合させたいのであれば、明示的に `globalThis` にプロパティとして代入してください。
- オブジェクトのプロパティへの代入に失敗すると（例えば読み取り専用であるなど）、 {{jsxref("TypeError")}} が発生します。厳格モードでない場合、これは黙って失敗します。
- 削除不可能なプロパティを削除しようとすると {{jsxref("TypeError")}} が発生します。厳格モードでない場合、これは黙って失敗します。
- 関数が厳格モードである場合、 [`arguments.callee`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee)、[`strictFunction.caller`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/caller)、[`strictFunction.arguments`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) にアクセスすると {{jsxref("TypeError")}} が発生します。もし、関数を再帰的に呼び出すために `arguments.callee` を使用している場合は、代わりに名前付き関数式を使用してください。

### 意味づけの違い

これらの違いは、非常に微妙な違いです。テストスイートがこのような微妙な形を捉えないということもあり得ます。これらの差異がコードの意味づけに影響しないことを確認するために、コードベースの慎重なレビューがおそらく必要でしょう。幸いなことに、この慎重なレビューは、関数の粒度を徐々に下げて行うことができます。

- `this`
  - : 厳格モードでない場合、 `f()` wのような関数呼び出しを行うと、 `this` 値としてグローバルオブジェクトが渡されまていした。厳格モードでは、これが `undefined` になりました。 [`call`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call) や [`apply`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) で関数が呼び出されたとき、値がプリミティブな値だった場合、 `this` はオブジェクトにボックス化されていました（`undefined` や `null` の場合はグローバルオブジェクトになります）。厳格モードでは、値は変換されたりや置き換えられたりすることなく、直接渡されます。
- `arguments`
  - : 厳格モードでない場合、 `arguments` オブジェクトの値を変更すると、対応する名前付き引数が変更されます。このため、 JavaScript エンジンの最適化が複雑になり、コードが読みにくく、理解しにくくなっていました。厳格モードでは、 `arguments` オブジェクトは名前付き引数と同じ値で作成・初期化されますが、 `arguments` オブジェクトと名前付き引数のどちらを変更しても、お互いに反映されることはありません。
- `eval`
  - : 厳格モードのコードでは、 `eval` は呼び出されたスコープに新しい変数を作成することはありません。もちろん厳密モードでは、文字列は厳密モードの規則で評価されます。何も壊れないことを確認するために、徹底的なテストを行う必要があります。 eval が本当に必要でない場合には使用しない、というのも現実的な解決策かもしれません。
- ブロックスコープ付き関数宣言
  - : 厳格モードでない場合、ブロック内の関数宣言はブロックの外側でも見ることができ、呼び出しも可能です。厳格モードでは、ブロック内の関数宣言はブロックの内部でしか見ることができません。

## 関連情報

- [Strict Mode Code in the ECMAScript specification](https://tc39.es/ecma262/#sec-strict-mode-code)
- [Strict mode compatibility table](https://kangax.github.io/compat-table/es5/#Strict_mode)
