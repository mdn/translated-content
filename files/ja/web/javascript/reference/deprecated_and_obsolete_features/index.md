---
title: 非推奨の機能、廃止された機能
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
l10n:
  sourceCommit: 758299969f63c13d235212f1adff79a649702adf
---

{{jsSidebar("More")}}

このページのリストは JavaScript で廃止予定（まだ使用できるが削除する予定）とされた、あるいは既に廃止され使用不可となった機能の一覧です。

## 非推奨の機能

これらの非推奨の機能は現在でも使用することができますが、すべての JavaScript エンジンで実装されているとは限らないため、注意して使用する必要があります。 コードからこれらの使用を除去するよう作業を行うべきです。

これらの非推奨機能のいくつかは、 ECMAScript 仕様書の[付録 B](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html) の章に掲載されています。この章は規範的なオプションとして記述されています。つまり、ウェブブラウザーのホストはこれらの機能を実装しなければなりませんが、ウェブ以外のホストは実装しなくても構いません。これらの機能を削除すると後方互換性の問題が発生し、旧形式のウェブサイトが壊れてしまうので、おそらく安定しているのでしょう。（JavaScript で「ウェブを壊すな」という設計目標があります。）それでも、これらはクロスプラットフォームで互換性がなく、すべての解析ツールで対応していないかもしれないので、付録 B の序文にあるように、使用しないことが推奨されます。

> … この付録で指定された言語機能および動作にはすべて、1つまたは複数の望ましくない特性があり、古い使用方法がなくなれば、この仕様から除去されることになります。…
>
> …プログラマーは新しい ECMAScript コードを書くときに、これらの機能や振る舞いを使用したり、その存在を想定したりしてはいけません。…

他にも、仕様書本体にあるとはいえ、規範的なオプションとしてマークされているものもあり、依存してはいけません。

### HTML コメント

JavaScript のソースは、スクリプトとして解釈された場合、あたかもスクリプトが `<script>` タグの一部であるかのように、 HTML 風のコメントが利用できます。

以下は、ウェブブラウザー（または Chrome を駆動する V8 エンジンを使用する Node.js）で実行するときに有効な JavaScript です。

```js
<!-- コメント
console.log("a"); <!-- その他のコメント
console.log("b");
--> さらにコメント
// Logs "a" and "b"
```

`<!--` と `-->` はどちらも `//` のように動作し、行頭のコメントになります。 `-->` は行頭でのみ有効ですが（後置デクリメントや大なり演算子が続く場合の曖昧さを避けるため）、 `<!--` は行のどの位置でも使用することができます。

### RegExp

以下のプロパティは非推奨です。これらは[置換文字列](/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace)で使用しても効果がありません。

- [`$1–$9`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)
  - : もしあれば、一致した括弧で囲まれた部分文字列です。
- [`input`, `$_`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)
  - : 正規表現を照合する文字列です。
- [`lastMatch`, `$&`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch)
  - : 最後に一致した部分文字列です。
- [`lastParen`, `$+`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastParen)
  - : もしあれば、一致した括弧で囲まれた最後の部分文字列です。
- [`leftContext`, `` $` ``](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/leftContext)
  - : 直近に一致した部分文字列の直前の部分文字列です。
- [`rightContext`, `$'`](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/rightContext)
  - : 直近に一致した部分文字列の直後の部分文字列です。

> [!WARNING]
> これらの静的プロパティは、[外部コードと対話する際の問題](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc)を発生させる可能性があるため、使用しないようにしましょう。

{{jsxref("RegExp/compile", "compile()")}} メソッドは非推奨です。代わりに新しい `RegExp` のインスタンスを構築してください。

以下の正規表現の構文は非推奨であり、[Unicode 非対応モード](/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode)でのみ利用できます。Unicode 対応モードでは、これらはすべて構文エラーとなります。

- [先読みアサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)に[数量詞](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)をつけること。
- 既存のキャプチャグループを参照しない[後方参照](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)は、[古い 8 進数エスケープ](#エスケープシーケンス)となります。
- [文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)において、一方の境界が文字クラスである文字の範囲を表す `-` 文字はリテラル文字になります。
- 認識されないエスケープシーケンスは[「同一エスケープ」](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)として扱われます。
- [文字クラス](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)内で、`\cX` （`X` は数字または `_` ）の形で形成されたエスケープシーケンスは、{{Glossary("ASCII")}} 文字の場合と同じ方法でデコードされます。`\c0` はモジュロ 32 を取ると `\cP` と同じです。加えて、`\cX` という形がどこかで検出され、`X` が認識された文字のいずれでもない場合、バックスラッシュはリテラル文字として扱われます。
- `\k` シーケンスが[名前付きキャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)がない正規表現内に現れた場合、同一エスケープとして扱われます。
- 構文文字である `]`、`{`、`}` が、文字クラスまたは量指定子の区切り文字の終わりとして解釈できない場合、エスケープせずに[そのまま](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)現れることがあります。

### Function

- 関数の {{jsxref("Function/caller", "caller")}} プロパティと [`arguments.callee`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee) プロパティは非推奨で、厳格モードでは使用できません。
- 関数のプロパティとして `arguments` にアクセスする代わりに、関数クロージャの内部で {{jsxref("Functions/arguments", "arguments")}} オブジェクトを使用してください。

### Object

- [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) アクセサーは非推奨です。代わりに [`Object.getPrototypeOf`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) および [`Object.setPrototypeOf`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) を使用してください。これはオブジェクトリテラルの `__proto__` リテラルキーには適用されません。
- [`Object.prototype.__defineGetter__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)、[`Object.prototype.__defineSetter__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)、[`Object.prototype.__lookupGetter__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)、[`Object.prototype.__lookupSetter__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) の各メソッドは非推奨です。代わりに [`Object.getOwnPropertyDescriptor`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) や [`Object.defineProperty`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) を使用してください。

### String

- {{jsxref("String.prototype.fontsize")}} や {{jsxref("String.prototype.big")}} などの HTML ラッパーメソッド。
- {{jsxref("String.prototype.substr")}} はおそらくすぐには削除されないと思いますが、付録 B で定義されており、本質的にオプションです。
- `String.prototype.trimLeft` および `String.prototype.trimRight` は {{jsxref("String.prototype.trimStart")}} と {{jsxref("String.prototype.trimEnd")}} に置き換えてください。

### Date

- {{jsxref("Date/getYear", "getYear()")}} と {{jsxref("Date/setYear", "setYear()")}} は「2000年問題」の影響を受けます。代替策として、{{jsxref("Date/getFullYear", "getFullYear")}} および {{jsxref("Date/setFullYear", "setFullYear")}} の使用が推奨されます。
- `toGMTString()` メソッドは非推奨です。代わりに {{jsxref("Date/toUTCString", "toUTCString()")}} を使用してください。

### エスケープシーケンス

- 文字列内と正規表現リテラル内での、8 進表記のエスケープシーケンス (\ に続く、1 つ、2 つ、もしくは、3 つの 8 進表現の数字) は非推奨です。
- {{jsxref("escape()")}} と {{jsxref("unescape()")}} 関数は非推奨です。特殊文字のためのエスケープシーケンスをエンコードかデコードするためには、{{jsxref("encodeURI()")}}、{{jsxref("encodeURIComponent()")}}、{{jsxref("decodeURI()")}}、{{jsxref("decodeURIComponent()")}} を使用してください。

### 文

[`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) 文は非推奨であり、厳格モードでは利用できません。

[`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループヘッダーの `var` 宣言での初期化子は非推奨であり、厳格モードでは[構文エラー](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer)になります。初期化子の式が評価され、変数に割り当てられますが、ループの最初の反復処理で値がすぐに再割り当てされます。

通常、[`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) 文の `catch` ブロックには、`catch()` でバインドされた変数と同じ名前の変数宣言を置くことはできません。拡張文法では、`catch` ブロックに `catch` でバインドされた識別子と同じ名前の宣言済み変数 [`var`](/ja/docs/Web/JavaScript/Reference/Statements/var) を置くことができます。ただし、`catch` のバインドが単純な識別子であり、[分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ではない場合に限ります。ただし、この変数の初期化と割り当ては、上位のスコープ変数ではなく、`catch` にバインドされた識別子に対してのみ作用します。このため、動作がわかりにくい場合があります。

```js
var a = 2;
try {
  throw 42;
} catch (a) {
  var a = 1; // この 1 は、外側の `a` ではなく、捕捉された `a` に代入される
}
console.log(a); // 2

try {
  throw 42;
  // メモ: 内部で宣言されている `a` との重複を避けるため、
  // `err` に変更してみる
} catch (err) {
  var a = 1; // この 1 は、上位スコープの `a` に代入される
}
console.log(a); // 1
```

これは仕様の付録Bに掲載されているため、どこでも実装されているとは限りません。 `catch` ブロックで宣言された変数と、`catch` バインドされた識別子との間で名前の競合が生じないようにしてください。

## 廃止された機能

これらの廃止された機能は、 JavaScript から完全に削除され、表示されているバージョンの JavaScript からは使用できなくなりました。

### RegExp

以下のプロパティは `RegExp` インスタンスのものとなり、 `RegExp` コンストラクターのものではなくなりました。

| プロパティ                                                     | 説明                                                                                                             |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp/global", "global")}}                          | 文字列中の使用可能なすべての照合に対して正規表現をテストするか、最初の照合のみに対してテストするかを指定します。 |
| {{jsxref("RegExp/ignoreCase", "ignoreCase")}}                  | 文字列の照合を試みる際に、大文字と小文字を無視するかどうかを指定します。                                         |
| {{jsxref("RegExp/lastIndex", "lastIndex")}}                    | 次の照合を始める位置のインデックス。                                                                             |
| {{jsxref("RegExp/multiline", "multiline")}} (`RegExp.$*` でも) | 複数行にまたがる文字列を検索するかどうか。                                                                       |
| {{jsxref("RegExp/source", "source")}}                          | パターンのテキストです。                                                                                         |

`valueOf()` メソッドは、 `RegExp` に特化したメソッドではなくなりました。自分自身を返す {{jsxref("Object.prototype.valueOf()")}} を使用します。

### Function

- Function の `arity` プロパティは廃止されました。代わりに [`length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length) を使用してください。

### Object

| プロパティ                   | 説明                                                                                        | 代替                                                                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__count__`                  | ユーザー定義オブジェクトに直接定義された列挙可能なプロパティの数を返します。                | [`Object.keys()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)                                                                                               |
| `__parent__`                 | オブジェクトのコンテキストを指し示します。                                                  | 直接の置き換えなし                                                                                                                                                            |
| `__iterator__`               | [旧形式のイテレーター](#旧形式のジェネレーターとイテレーター)と共に使用                     | [`Symbol.iterator`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) および新しい[反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols) |
| `__noSuchMethod__`           | 存在しないプロパティがメソッドとして呼ばれたときに呼び出されるメソッド。                    | {{jsxref("Proxy")}}                                                                                                                                                           |
| `Object.prototype.eval()`    | 指定したオブジェクトのコンテキスト内の JavaScript コードの文字列を評価します。              | 直接の置き換えなし                                                                                                                                                            |
| `Object.observe()`           | オブジェクトに対する変更を非同期に監視します。                                              | {{jsxref("Proxy")}}                                                                                                                                                           |
| `Object.unobserve()`         | オブザーバーを削除します。                                                                  | {{jsxref("Proxy")}}                                                                                                                                                           |
| `Object.getNotifier()`       | `Object.observe()` で変更観測を合成的に発生させることができる通知オブジェクトを作成します。 | 直接の置き換えなし                                                                                                                                                            |
| `Object.prototype.watch()`   | プロパティが代入されたときに呼び出されるハンドラーコールバックをプロパティに取り付けます。  | {{jsxref("Proxy")}}                                                                                                                                                           |
| `Object.prototype.unwatch()` | プロパティの監視ハンドラーを削除します。                                                    | {{jsxref("Proxy")}}                                                                                                                                                           |

### String

- 標準外の String の汎用メソッド、たとえば `String.slice(myStr, 0, 12)`, `String.replace(myStr, /./g, "!")` などは、 Firefox 1.5 (JavaScript 1.6) で導入され、Firefox 53 で非推奨となり、そして Firefox 68 で廃止されました。代わりに {{jsxref("String", "String.prototype", "instance_methods")}} 上のメソッドを {{jsxref("Function.call")}} と共に使用することができます。
- `String.prototype.quote` は Firefox 37 で削除されました。
- 標準外の `flags` 引数は {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, {{jsxref("String.prototype.replace")}} で廃止されました。

### WeakMap

- `WeakMap.prototype.clear()` は Firefox 20 で追加され、 Firefox 46 で削除されました。 [`WeakMap`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) ではすべてのキーを操作することはできません。

### Date

- C 言語の `strftime()` 関数で期待されるのと同じ形式の書式文字列を使用する `Date.prototype.toLocaleFormat()` は廃止されました。代わりに [`toLocaleString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) または [`Intl.DateTimeFormat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) を使用してください。

### Array

- 標準外の Array の汎用メソッド、例えば `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)` などは、 Firefox 1.5 (JavaScript 1.6) で導入され、Firefox 68 で非推奨となり、Firefox 71 で削除されました。代わりに {{jsxref("Array", "Array.prototype", "instance_methods")}} 上のメソッドを {{jsxref("Function.call")}} と共に使用することができます。

| プロパティ          | 説明                                   | 代替                |
| ------------------- | -------------------------------------- | ------------------- |
| `Array.observe()`   | 配列に対する変更を非同期に監視します。 | {{jsxref("Proxy")}} |
| `Array.unobserve()` | オブザーバーを削除します。             | {{jsxref("Proxy")}} |

### Number

- `Number.toInteger()` は廃止されました。代わりに [`Math.floor`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)、[`Math.round`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round)、その他のメソッドを使用してください。

### Proxy

- `Proxy.create` および `Proxy.createFunction` は非推奨です。代わりに {{jsxref("Proxy/Proxy", "Proxy()")}} コンストラクターを使用してください。
- 以下のトラップは廃止されました。
  - `hasOwn` ([バグ 980565](https://bugzil.la/980565), Firefox 33)
  - `getEnumerablePropertyKeys` ([バグ 783829](https://bugzil.la/783829), Firefox 37)
  - `getOwnPropertyNames` ([バグ 1007334](https://bugzil.la/1007334), Firefox 33)
  - `keys` ([バグ 1007334](https://bugzil.la/1007334), Firefox 33)

### ParallelArray

- `ParallelArray` は廃止されました。

### 文

- `for each...in` は廃止されました。代わりに {{jsxref("Statements/for...of", "for...of")}} を使用してください。
- let ブロックと let 式は廃止されました。
- 式クロージャ（`function () 1` を `function () { return 1; }` の短縮形として使うこと）は廃止されました。代わりに通常の{{jsxref("Operators/function", "関数", "", 1)}}または{{jsxref("Functions/Arrow_functions", "アロー関数", "", 1)}}を使用してください。

### ソーステキストの取得

配列、数値、文字列などの `toSource()` メソッドと `uneval()` グローバル関数は廃止されました。代わりに [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) を使用するか、自分自身でシリアライゼーションメソッドを書いてください。

### 旧形式のジェネレーターとイテレーター

旧形式のジェネレーター関数文と旧形式のジェネレーター関数式は削除されました。旧形式のジェネレーター関数の構文は `function` キーワードを再利用しており、本体に 1 つ以上の `yield` 式があると自動的にジェネレーター関数になります - これは今では構文エラーになっています。代わりに [`function*` 文](/ja/docs/Web/JavaScript/Reference/Statements/function*)と [`function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/function*)を使用するようにしてください。

配列内包とジェネレーター内包が削除されました。

```js-nolint
// 古い配列内包
[for (x of iterable) x]
[for (x of iterable) if (condition) x]
[for (x of iterable) for (y of iterable) x + y]

// 旧形式のジェネレーターの内包
(for (x of iterable) x)
(for (x of iterable) if (condition) x)
(for (x of iterable) for (y of iterable) x + y)
```

バージョン 26 以前の Firefox では、標準の[イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)に類似した別のイテレータープロトコルを実装していました。オブジェクトが `next()` メソッドを実装しており、呼び出すたびに値を生成し、反復処理の終わりには `StopIteration` オブジェクトを投げている場合は、そのオブジェクトは古いイテレーターであると言えます。この古いイテレーターのプロトコルは、標準的なイテレーターのプロトコルとは異なる形をとっています。

- 値は `IteratorResult` オブジェクトの `value` プロパティではなく、 `next()` 呼び出しの返値として直接返されていました。
- 反復処理の終了は、`IteratorResult` オブジェクトの `done` プロパティを通じてではなく、 `StopIteration` オブジェクトを投げることで表現されていました。

この機能は、`StopIteration` グローバルコンストラクタとともに、 Firefox 58+ で削除されました。将来に向けた使用方法としては、[`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of) ループと[イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を使用することを検討してください。

### シャープ変数

シャープ変数は廃止されました。循環構造を作成するには、一時変数を使用してください。
