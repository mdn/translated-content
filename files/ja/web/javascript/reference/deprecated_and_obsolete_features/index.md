---
title: 非推奨の機能、廃止された機能
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
tags:
  - 非推奨
  - ガイド
  - JavaScript
  - 廃止
translation_of: Web/JavaScript/Reference/Deprecated_and_obsolete_features
---
{{JsSidebar("More")}}

このページのリストは JavaScript で廃止予定（まだ使用できるが削除する予定）とされた、あるいは既に廃止され使用不可となった機能の一覧です。

## 非推奨の機能

これらの非推奨機能はまだ使用可能かもしれません。しかし将来的には完全に削除されるでしょう。既にコード内でこれらを使用している場合は、代替となるコードに置き換えておく必要があります。

### RegExp のプロパティ

以下のプロパティは非推奨です。これらは{{jsxref("String.replace", "文字列置換", "", 1)}}で使用しても効果がありません。

<table class="standard-table">
  <tbody>
    <tr>
      <th>プロパティ</th>
      <th>説明</th>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.n", "$1-$9")}}</td>
      <td>
        <p>
          （もしあれば）括弧で囲まれた部分文字列にイッチします。
          <strong>警告:</strong>このプロパティを使うことで、問題が起こる恐れがあります。なぜなら、ブラウザーの拡張機能がそれらを変更可能なためです。使用は避けるべきです。
        </p>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.input", "$_")}}</td>
      <td>`input` プロパティを参照してください。</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.multiline", "$*")}}</td>
      <td>`multiline` プロパティを参照してください。</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastMatch", "$&amp;")}}</td>
      <td>`lastMatch` プロパティを参照してください。</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastParen", "$+")}}</td>
      <td>`lastParen` プロパティを参照してください。</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.leftContext", "$`")}}</td>
      <td>`leftContext` プロパティを参照してください。</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.rightContext", "$'")}}</td>
      <td>`rightContext` プロパティを参照してください。</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.input", "input")}}</td>
      <td>正規表現が一致する対象となる文字列。</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastMatch", "lastMatch")}}</td>
      <td>最後に一致した文字。</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastParen", "lastParen")}}</td>
      <td>（もしあれば）最後に括弧で囲まれた部分文字列の一致。</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.leftContext", "leftContext")}}</td>
      <td>一番最近の一致に先行する部分文字列。</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.rightContext", "rightContext")}}</td>
      <td>一番最近の一致の後に続く部分文字列。</td>
    </tr>
  </tbody>
</table>

以下は、現在、`RegExp` インスタンスのプロパティとなり、`RegExp` オブジェクトのプロパティではなくなりました。

| プロパティ                                                     | 説明                                                                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| {{jsxref("RegExp.global", "global")}}             | 対象文字列で可能な一致すべてに対して正規表現をテストするか、それとも、最初の一致に対してのみテストするどうかのフラグです。 |
| {{jsxref("RegExp.ignoreCase", "ignoreCase")}} | 文字列の照合を試みる際に、大文字と小文字の違いを無視するかどうかのフラグです。                                                |
| {{jsxref("RegExp.lastIndex", "lastIndex")}}     | 次の照合が始まる位置です。                                                                        |
| {{jsxref("RegExp.multiline", "multiline")}}     | 複数行に渡って文字列を検索するかどうかのフラグです。。                                                         |
| {{jsxref("RegExp.source", "source")}}             | パターンのテキストです。                                                                                           |

### `RegExp` オブジェクトのメソッド

- {{jsxref("RegExp.compile", "compile()")}} メソッドは、非推奨です。
- `valueOf` メソッドは、 `RegExp` のみのメソッドではなくなりました。{{jsxref("Object.valueOf()")}} を使用してください。

### Function オブジェクトのプロパティ

- {{jsxref("Global_Objects/Function/caller", "caller")}} と {{jsxref("Global_Objects/Function/arguments", "arguments")}} プロパティは廃止されました。これは呼び出した関数を取得できてしまうためです。この arguments プロパティの代わりに、クロージャ内部の {{jsxref("Functions/arguments", "arguments")}} オブジェクトを使用してください。

### 旧形式のジェネレーター

- {{jsxref("Statements/Legacy_generator_function", "旧形式のジェネレーター関数文")}}および{{jsxref("Operators/Legacy_generator_function", "旧形式のジェネレーター関数式")}}は非推奨です。代わりに {{jsxref("Statements/function*", "function* 文")}}および {{jsxref("Operators/function*", "function* 式")}}を使用してください。
- {{jsxref("Operators/Array_comprehensions", "JS1.7/JS1.8 の配列内包", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}}および {{jsxref("Operators/Generator_comprehensions", "JS1.7/JS1.8 のジェネレーター内包", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}}は非推奨です。

### イテレーター

- {{jsxref("Global_Objects/StopIteration", "StopIteration")}} は非推奨です。
- {{jsxref("Global_Objects/Iterator", "Iterator")}} は非推奨です。

### Object オブジェクトのメソッド

- {{jsxref("Object.watch", "watch")}} および {{jsxref("Object.unwatch", "unwatch")}} は非推奨です。代わりに {{jsxref("Proxy")}} を使用してください。
- `__iterator__` は非推奨です。
- {{jsxref("Object.noSuchMethod", "__noSuchMethod__")}} は非推奨です。代わりに {{jsxref("Proxy")}} を使用してください。

### Date のメソッド

- {{jsxref("Global_Objects/Date/getYear", "getYear")}} と {{jsxref("Global_Objects/Date/setYear", "setYear")}} は「{{interwiki('wikipedia', '2000年問題')}}」の影響を受けます。代替策として、{{jsxref("Global_Objects/Date/getFullYear", "getFullYear")}} および {{jsxref("Global_Objects/Date/setFullYear", "setFullYear")}} の使用が推奨されます。
- 新しいコードでは {{jsxref("Global_Objects/Date/toUTCString", "toUTCString")}} を非推奨の {{jsxref("Global_Objects/Date/toGMTString", "toGMTString")}} メソッドの代わりに使用してください。
- {{jsxref("Global_Objects/Date/toLocaleFormat", "toLocaleFormat")}} は非推奨です。

### 関数

- {{jsxref("Operators/Expression_closures", "式クロージャ", "", 1)}}は非推奨です。代わりに通常の{{jsxref("Operators/function", "関数", "", 1)}}または{{jsxref("Functions/Arrow_functions", "アロー関数", "", 1)}}を使用してください。

### Proxy

- [Proxy.create](/ja/docs/Archive/Web/Old_Proxy_API) および [Proxy.createFunction](/ja/docs/Archive/Web/Old_Proxy_API) は非推奨です。代わりに {{jsxref("Proxy")}} を使用してください。
- 以下のトラップは廃止されました。

  - `hasOwn` ({{bug(980565)}}, Firefox 33).
  - `getEnumerablePropertyKeys` ({{bug(783829)}}, Firefox 37)
  - `getOwnPropertyNames` ({{bug(1007334)}}, Firefox 33)
  - `keys` ({{bug(1007334)}}, Firefox 33)

### エスケープシーケンス

- 文字列内と正規表現リテラル内での、8 進表記のエスケープシーケンス (\ に続く、1 つ、2 つ、もしくは、3 つの 8 進表現の数字) は非推奨です。
- {{jsxref("Global_Objects/escape", "escape")}} と {{jsxref("Global_Objects/unescape", "unescape")}} 関数は非推奨です。特殊文字のためのエスケープシーケンスをエンコードかデコードするためには、{{jsxref("Global_Objects/encodeURI", "encodeURI")}}、{{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}}、{{jsxref("Global_Objects/decodeURI", "decodeURI")}} もしくは {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} を使用してください。

### String のメソッド

- {{jsxref("String.prototype.fontsize")}} や {{jsxref("String.prototype.big")}} などの [HTML ラッパーメソッド](/ja/docs/tag/HTML%20wrapper%20methods)。
- {{jsxref("String.prototype.quote")}} は Firefox 37 で削除されました。
- {{jsxref("String.prototype.search")}}、{{jsxref("String.prototype.match")}}、{{jsxref("String.prototype.replace")}} の非標準パラメータ `flags` は非推奨です。
- {{jsxref("String.prototype.substr")}} はおそらくすぐには削除されないと思いますが、ECMA-262 標準の [Annex B](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.substr) で定義されていて、その [introduction](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-additional-ecmascript-features-for-web-browsers) には次のように書かれています。「... プログラマーは、新しい ECMAScript コードを書くときに、これらの機能や動作を使用したり、その存在を仮定したりしてはいけません。...」

## 廃止された機能

これらの廃止された機能は、 JavaScript から完全に削除され、表示されているバージョンの JavaScript からは使用できなくなりました。

### Object

| プロパティ                                                                                 | 説明                                                                    |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| {{jsxref("Global_Objects/Object/count", "__count__")}}                 | ユーザー定義のオブジェクトに直接定義した、列挙可能なプロパティの個数を返します。 |
| {{jsxref("Global_Objects/Object/Parent", "__parent__")}}             | オブジェクトのコンテキストを指し示します。                                                 |
| {{jsxref("Global_Objects/Object/eval", "Object.prototype.eval()")}} | 指定したオブジェクトのコンテキスト内の JavaScript コードの文字列を評価します。  |
| {{jsxref("Object.observe()")}}                                                 | オブジェクトに対する変更を非同期に監視します。                             |
| {{jsxref("Object.unobserve()")}}                                             | オブザーバーを削除します。                                                              |
| {{jsxref("Object.getNotifier()")}}                                             | 合成的に変化を引き起こすことができるオブジェクトを作成します。               |

### Function

| プロパティ                                                             | 説明                 |
| -------------------------------------------------------------------- | --------------------------- |
| {{jsxref("Global_Objects/Function/arity", "arity")}} | 正式な引数の数です。 |

### String

- 標準外の String の汎用メソッド、たとえば `String.slice(myStr, 0, 12)`, `String.replace(myStr, /./g, "!")` などは、 Firefox 1.5 (JavaScript 1.6) で導入され、Firefox 53 で非推奨となり、そして Firefox 68 で廃止されました。代わりに {{jsxref("String", "String.prototype", "instance_methods")}} 上のメソッドを {{jsxref("Function.call")}} と共に使用することができます。

### Array

- 標準外の Array の汎用メソッド、例えば `Array.slice(myArr, 0, 12)`, `Array.forEach(myArr, myFn)` などは、 Firefox 1.5 (JavaScript 1.6) で導入され、Firefox 68 で非推奨となり、Firefox 71 で削除されました。代わりに {{jsxref("Array", "Array.prototype", "instance_methods")}} 上のメソッドを {{jsxref("Function.call")}} と共に使用することができます。

<table class="standard-table">
  <tbody>
    <tr>
      <td>プロパティ</td>
      <td>説明</td>
    </tr>
    <tr>
      <td>{{jsxref("Array.observe()")}}</td>
      <td>配列に対する変更を非同期に監視します。</td>
    </tr>
    <tr>
      <td>{{jsxref("Array.unobserve()")}}</td>
      <td>observer を削除します。</td>
    </tr>
  </tbody>
</table>

### Number

- {{jsxref("Number.toInteger()")}}

### ParallelArray

- {{jsxref("ParallelArray")}}

### 文

- {{jsxref("Statements/for_each...in", "for each...in")}} は非推奨です。代わりに {{jsxref("Statements/for...of", "for...of")}} を使用してください。
- 分割代入の {{jsxref("Statements/for...in", "for...in")}} は非推奨です。代わりに {{jsxref("Statements/for...of", "for...of")}} を使用してください。
- let ブロックおよび、 let 式は廃止されました。

### シャープ変数

詳しくは [JavaScript でのシャープ変数](/ja/docs/Archive/Web/Sharp_variables_in_JavaScript)をご覧ください。
