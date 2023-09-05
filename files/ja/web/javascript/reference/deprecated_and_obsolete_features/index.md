---
title: 非推奨の機能、廃止された機能
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
l10n:
  sourceCommit: b1171164863d3bb868de64ffc8ddec508599ed57
---

{{JsSidebar("More")}}

このページのリストは JavaScript で廃止予定（まだ使用できるが削除する予定）とされた、あるいは既に廃止され使用不可となった機能の一覧です。

## 非推奨の機能

これらの非推奨機能はまだ使用可能かもしれません。しかし将来的には完全に削除されるでしょう。既にコード内でこれらを使用している場合は、代替となるコードに置き換えておく必要があります。

これらの非推奨機能のいくつかは、 ECMAScript 仕様書の[付録 B](https://tc39.es/ecma262/#sec-additional-ecmascript-features-for-web-browsers) の章に掲載されています。この章は規範的なオプションとして記述されています。つまり、ウェブブラウザーのホストはこれらの機能を実装しなければなりませんが、ウェブ以外のホストは実装しなくても構いません。これらの機能を削除すると後方互換性の問題が発生し、旧形式のウェブサイトが壊れてしまうので、おそらく安定しているのでしょう。（JavaScript で「ウェブを壊すな」という設計目標があります。）それでも、これらはクロスプラットフォームで互換性がなく、すべての解析ツールで対応していないかもしれないので、付録 B の序文にあるように、使用しないことが推奨されます。

> ... プログラマーは新しい ECMAScript コードを書くときに、これらの機能や振る舞いを使用したり、その存在を想定したりしてはいけません。...

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

| プロパティ                                        | 説明                                                 |
| ------------------------------------------------- | ---------------------------------------------------- |
| {{jsxref("RegExp/n", "$1-$9")}}                   | もしあれば、括弧で囲まれた部分文字列に一致します。   |
| {{jsxref("RegExp.input", "$_")}}                  | `input` を参照。                                     |
| {{jsxref("RegExp.lastMatch", "$&amp;")}}          | `lastMatch` を参照。                                 |
| {{jsxref("RegExp.lastParen", "$+")}}              | `lastParen` を参照。                                 |
| {{jsxref("RegExp.leftContext", "$`")}}            | `leftContext` を参照。                               |
| {{jsxref("RegExp.rightContext", "$'")}}           | `rightContext` を参照。                              |
| {{jsxref("RegExp.input", "input")}}               | 正規表現が一致する対象となる文字列。                 |
| {{jsxref("RegExp.lastMatch", "lastMatch")}}       | 最後に一致した文字。                                 |
| {{jsxref("RegExp.lastParen", "lastParen")}}       | （もしあれば）最後に括弧で囲まれた部分文字列の一致。 |
| {{jsxref("RegExp.leftContext", "leftContext")}}   | 一番最近の一致に先行する部分文字列。                 |
| {{jsxref("RegExp.rightContext", "rightContext")}} | 一番最近の一致の後に続く部分文字列。                 |

> **警告:** これらの静的プロパティは、[外部コードと対話する際の問題](https://github.com/tc39/proposal-regexp-legacy-features/blob/master/subclass-restriction-motivation.md#legacy-static-properties-regexp1-etc)を発生させる可能性があるため、使用しないようにしましょう。

{{jsxref("RegExp/compile", "compile()")}} メソッドは非推奨です。代わりに新しい `RegExp` のインスタンスを構築してください。

### Function

- 関数の {{jsxref("Global_Objects/Function/caller", "caller")}} プロパティと [`arguments.callee`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee) プロパティは非推奨で、厳格モードでは使用できません。
- 関数のプロパティとして `arguments` にアクセスする代わりに、関数クロージャの内部で {{jsxref("Functions/arguments", "arguments")}} オブジェクトを使用してください。

### Object

- [`Object.prototype.__proto__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) アクセサーは非推奨です。代わりに [`Object.getPrototypeOf`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) および [`Object.setPrototypeOf`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) を使用してください。これはオブジェクトリテラルの `__proto__` リテラルキーには適用されません。
- [`Object.prototype.__defineGetter__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)、[`Object.prototype.__defineSetter__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)、[`Object.prototype.__lookupGetter__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)、[`Object.prototype.__lookupSetter__`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) の各メソッドは非推奨です。代わりに [`Object.getOwnPropertyDescriptor`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) や [`Object.defineProperty`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) を使用してください。

### String

- {{jsxref("String.prototype.fontsize")}} や {{jsxref("String.prototype.big")}} などの HTML ラッパーメソッド。
- {{jsxref("String.prototype.substr")}} はおそらくすぐには削除されないと思いますが、付録 B で定義されており、本質的にオプションです。
- `String.prototype.trimLeft` および `String.prototype.trimRight` は {{jsxref("String.prototype.trimStart")}} と {{jsxref("String.prototype.trimEnd")}} に置き換えてください。

### Date

- {{jsxref("Global_Objects/Date/getYear", "getYear()")}} と {{jsxref("Global_Objects/Date/setYear", "setYear()")}} は「2000年問題」の影響を受けます。代替策として、{{jsxref("Global_Objects/Date/getFullYear", "getFullYear")}} および {{jsxref("Global_Objects/Date/setFullYear", "setFullYear")}} の使用が推奨されます。
- {{jsxref("Global_Objects/Date/toGMTString", "toGMTString()")}} メソッドは非推奨です。代わりに {{jsxref("Global_Objects/Date/toUTCString", "toUTCString()")}} を使用してください。

### エスケープシーケンス

- 文字列内と正規表現リテラル内での、8 進表記のエスケープシーケンス (\ に続く、1 つ、2 つ、もしくは、3 つの 8 進表現の数字) は非推奨です。
- {{jsxref("Global_Objects/escape", "escape")}} と {{jsxref("Global_Objects/unescape", "unescape")}} 関数は非推奨です。特殊文字のためのエスケープシーケンスをエンコードかデコードするためには、{{jsxref("Global_Objects/encodeURI", "encodeURI")}}、{{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}}、{{jsxref("Global_Objects/decodeURI", "decodeURI")}}、{{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} を使用してください。

### 文

[`with`](/ja/docs/Web/JavaScript/Reference/Statements/with) 文は非推奨であり、厳格モードでは利用できません。

[`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループヘッダーの `var` 宣言での初期化子は非推奨であり、厳格モードでは[構文エラー](/ja/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer)になります。厳格モードでない場合は、黙って無視されます。

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

- `Date.prototype.toLocaleFormat()` は廃止されました。代わりに [`toLocaleString`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) または [`Intl.DateTimeFormat`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) を使用してください。

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
  - `hasOwn` ([バグ 980565](https://bugzilla.mozilla.org/show_bug.cgi?id=980565), Firefox 33)
  - `getEnumerablePropertyKeys` ([バグ 783829](https://bugzilla.mozilla.org/show_bug.cgi?id=783829), Firefox 37)
  - `getOwnPropertyNames` ([バグ 1007334](https://bugzilla.mozilla.org/show_bug.cgi?id=1007334), Firefox 33)
  - `keys` ([バグ 1007334](https://bugzilla.mozilla.org/show_bug.cgi?id=1007334), Firefox 33)

### ParallelArray

- `ParallelArray` は廃止されました。

### 文

- `for each...in` は廃止されました。代わりに {{jsxref("Statements/for...of", "for...of")}} を使用してください。
- let ブロックと let 式は廃止されました。
- [式クロージャ](/ja/docs/Web/JavaScript/Reference/Errors/Deprecated_expression_closures)は廃止されました。代わりに通常の{{jsxref("Operators/function", "関数", "", 1)}}または{{jsxref("Functions/Arrow_functions", "アロー関数", "", 1)}}を使用してください。

### ソーステキストの取得

配列、数値、文字列などの `toSource()` メソッドと `uneval()` グローバル関数は廃止されました。代わりに [`toString()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) を使用するか、自分自身でシリアライゼーションメソッドを書いてください。

### 旧形式のジェネレーターとイテレーター

旧形式のジェネレーター関数文と旧形式のジェネレーター関数式は削除されました。旧形式のジェネレーター関数の構文は `function` キーワードを再利用しており、本体に 1 つ以上の `yield` 式があると自動的にジェネレーター関数になります - これは今では構文エラーになっています。代わりに [`function*` 文](/ja/docs/Web/JavaScript/Reference/Statements/function*)と [`function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/function*)を使用するようにしてください。

配列内包とジェネレーター内包が削除されました。

```
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
