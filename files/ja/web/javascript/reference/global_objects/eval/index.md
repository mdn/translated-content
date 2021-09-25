---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
tags:
  - Evaluating JavaScript
  - JavaScript
  - メソッド
  - リファレンス
  - 警告
  - eval
browser-compat: javascript.builtins.eval
translation_of: Web/JavaScript/Reference/Global_Objects/eval
---
{{jsSidebar("Objects")}}

> **Warning:** 文字列から JavaScript を実行することは、非常に大きなセキュリティリスクを伴います。`eval()` を使用すると、悪意のある者が任意のコードを実行することがあまりにも簡単になります。下記の [eval() を使わないでください!](#eval_を使わないでください!)を参照してください。

**`eval()`** 関数は、文字列として表現された JavaScript コードを評価します。

{{EmbedInteractiveExample("pages/js/globalprops-eval.html")}}

## 構文

```js
eval(string)
```

### 引数

- `string`
  - : JavaScript の式、文、または一連の文を表す文字列です。式には、既存オブジェクトの変数およびプロパティを含められます。

### 返値

与えられたコードの評価結果の値を返します。評価結果が空の場合は、{{jsxref("undefined")}} を返します。

## 解説

`eval()` はグローバルオブジェクトの関数プロパティです。

`eval()` 関数の引数は文字列です。その文字列が式に相当する場合、`eval()` は引数を式として評価します。引数が 1 つ以上の JavaScript 文に相当する場合、`eval()` は引数を文として評価します。算術式を評価する目的で `eval()` を呼び出してはいけません。JavaScript は算術式を自動的に評価します。

算術式を文字列として構築した場合、後で `eval()` を使ってそれを評価することができます。例えば `x` という変数があるとします。ある変数に "`3 * x + 2`" といった式の文字列値を代入し、そしてスクリプトの後方で `eval()` を呼び出すことで、`x` が関わる式の評価を後回しにすることができます。

`eval()` の引数が文字列でない場合、`eval()` は引数を変更せずに返します。次の例では `String` コンストラクターが指定されているため、`eval()` は文字列を評価したものではなく `String` オブジェクトを返します。

```js
eval(new String('2 + 2')); // "2 + 2" を含む String オブジェクトを返します
eval('2 + 2');             // 4 を返します
```

この制約は、`toString` を使用する一般的な方法で回避できます。

```js
var expression = new String('2 + 2');
eval(expression.toString());            // 4 を返します
```

`eval` 関数を `eval` 以外の名前を参照して呼び出すことで*間接的に*使用した場合、[ECMAScript
5](https://www.ecma-international.org/ecma-262/5.1/#sec-10.4.2) 以降ではローカルスコープではなくグローバルスコープで機能します。これは例えると、関数定義によりグローバル関数が作成されるため、評価されたコードはその呼び出されたスコープ内のローカル変数にアクセスできなくなる、ということです。

```ja
function test() {
  var x = 2, y = 4;
  // 直接呼び出し、ローカルスコープを使用
  console.log(eval('x + y')); // 結果は 6
  // eval を返すカンマ演算子を使用した間接呼び出し
  console.log((0, eval)('x + y')); // グローバルスコープを使用、x は未定義のため例外が発生
  // eval を変数に保存して返したものを使用した間接呼び出し
  var geval = eval;
  console.log(geval('x + y')); // グローバルスコープを使用、x は未定義のため例外が発生
}
```

## eval() を使わないでください!

`eval()` は呼び出し元の権限で渡されたコードを実行する危険な関数です。悪意のある第三者に影響を受ける可能性のある文字列で `eval()` を実行すると、そのウェブページや拡張機能の権限において、ユーザーのマシン上で悪意のあるコードを実行してしまう可能性があります。さらに重要なことに、サードパーティのコードは `eval()` が呼び出されたスコープを見ることができるので、類似の {{jsxref("Global_Objects/Function", "Function")}} では影響を受けない方法でも攻撃を受ける可能性があります。

また、ここ最近の JavaScript では多くの構造が JS エンジンによって最適化されているため、`eval()` は他の方法よりも低速でもあります。

さらに、現代の JavaScript インタープリターは JavaScript を機械語に変換します。これは、変数の名前の概念がすべて消滅することを意味します。したがって、`eval()` を使用すると、ブラウザーは長い高価な変数名検索を実行して、変数が機械語のどこに存在しているかを把握し、その値を設定します。さらに、`eval()` が変数の型の変更など、その変数に新しい変数をもたらす可能性もあり、生成されたすべての機械語を再評価して補正させられる可能性があります。

幸い、`eval()` にはとても良い代替策があります。{{jsxref("Function", "window.Function()")}} を使用することです。危険な `eval()` を使用したコードから `Function()` を使用したコードに変換する方法の例として、以下を参照してください。

`eval()` を使用した悪いコード:

```js
function looseJsonParse(obj){
    return eval("(" + obj + ")");
}
console.log(looseJsonParse(
   "{a:(4-1), b:function(){}, c:new Date()}"
))
```

`eval()` を使用しないより良いコード:

```js
function looseJsonParse(obj){
    return Function('"use strict";return (' + obj + ')')();
}
console.log(looseJsonParse(
   "{a:(4-1), b:function(){}, c:new Date()}"
))
```

上記の 2 つのコードスニペットを比較すると、2 つのコードスニペットが同じように動作するように見えるかもしれませんが、よく考えてみてください。`eval()` の方は非常に遅いのです。評価されたオブジェクトの中の `c: new Date()` に注目してください。`eval()` を使用しない関数では、オブジェクトはグローバルスコープで評価されているので、ブラウザーは `Date` が `window.Date` を参照しており、`Date` というローカル変数ではないと考えて安全です。しかし、コードが次のようになっている場合 `eval()` を使ったコードでは、ブラウザーがこれを仮定することができません。

```js
function Date(n){
    return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][n%7 || 0];
}
function looseJsonParse(obj){
    return eval("(" + obj + ")");
}
console.log(looseJsonParse(
   "{a:(4-1), b:function(){}, c:new Date()}"
))
```

したがって、コードの `eval()` バージョンでは、ブラウザーは高価なルックアップ呼び出しを行い、`Date()` というローカル変数があるかどうかを確認します。これは `Function()` と比較して非常に効率が悪くなります。

関連する状況で、実際に `Date()` 関数を `Function()` 内のコードから呼び出すことができるようにしたいとしたらどうでしょうか。簡単な方法を取って、`eval()` に戻るべきでしょうか。いいえ、決してそうではありません。代わりに、以下の方法を試してみてください。

```js
function Date(n){
    return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][n%7 || 0];
}
function runCodeWithDateFunction(obj){
    return Function('"use strict";return (' + obj + ')')()(
        Date
    );
}
console.log(runCodeWithDateFunction(
   "function(Date){ return Date(5) }"
))
```

上記のコードは、三重に入れ子になった関数があるために効率が悪く遅いと思えるかもしれませんが、上記の効率的なメソッドの利点を分析してみましょう。

- これにより、`runCodeWithDateFunction()` に渡される文字列のコードを短縮することができます。
- 関数呼び出しのオーバーヘッドが最小になり、コードサイズがはるかに小さくなるという利点には十分な価値があります。
- `Function()` を使用することで、コードのパフォーマンスを向上させる `"use strict";` をより簡単に利用できるようになります。
- このコードでは `eval()` を使用しないので、そうでない場合に比べて桁違いに高速になります。

最後に、最小化を検討してみましょう。上記のように `Function()` を使用すると、`runCodeWithDateFunction` に渡されたコード文字列をはるかに効率的に最小化することができます。関数の引数名は、下の最小化されたコードで見られるように最小化することができるからです。

```js
console.log(Function('"use strict";return(function(a){return a(5)})')()(function(a){
return"Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" ")[a%7||0]}));
```

一般的な用途においては、さらに安全 (そして高速) な `eval()` または `Function()` の代替手段があります。

### メンバーのプロパティへのアクセス

プロパティ名からプロパティ自体への変換を行うために `eval()` を使用しないでください。アクセスされるオブジェクトのプロパティがコードが実行されるまでわからない場合の例を考えてみましょう。これは `eval()` で行うことができます。

```js
var obj = { a: 20, b: 30 };
var propName = getPropName();  // "a" または "b" が返される

eval( 'var result = obj.' + propName );
```

ただし、ここで `eval()` は必要ありません。実際、この使い方はお勧めできません。代わりに[プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)を使用したほうが、より速くて安全です。

```js
var obj = { a: 20, b: 30 };
var propName = getPropName();  // "a" または "b" が返される
var result = obj[ propName ];  //  obj[ "a" ] は obj.a と同じ
```

このメソッドを使用して子孫プロパティにアクセスすることもできます。`eval()` を使うと以下のようになります。

```js
var obj = {a: {b: {c: 0}}};
var propPath = getPropPath();  // "a.b.c" などを返す

eval( 'var result = obj.' + propPath );
```

ここで `eval()` を回避するには、プロパティのパスを分割し、様々なプロパティをループすることで行うことができます。

```js
function getDescendantProp(obj, desc) {
  var arr = desc.split('.');
  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}

var obj = {a: {b: {c: 0}}};
var propPath = getPropPath();  // "a.b.c" などを返す
var result = getDescendantProp(obj, propPath);
```

プロパティの設定も同様に行うことができます。

```js
function setDescendantProp(obj, desc, value) {
  var arr = desc.split('.');
  while (arr.length > 1) {
    obj = obj[arr.shift()];
  }
  return obj[arr[0]] = value;
}

var obj = {a: {b: {c: 0}}};
var propPath = getPropPath();  // "a.b.c" などを返す
var result = setDescendantProp(obj, propPath, 1);  // obj.a.b.c は 1 になる
```

### コードの断片を評価する場合、代わりに関数を使う

JavaScript {{interwiki("wikipedia","第一級関数")}}を備えており、関数を他の API の引数としたり、変数やオブジェクトのプロパティに保存したりすることができます。多くの DOM API はこれを考慮して作られているので、次のように書くことができます (また、書くべきです)。

```js
// setTimeout(" ... ", 1000) を使う代わりに
setTimeout(function() { ... }, 1000);

// elt.setAttribute("onclick", " ... ") を使う代わりに
elt.addEventListener('click', function() { ... } , false); 
```

文字列を連結せずにパラメーター化した関数を作成する方法としては、[クロージャ](/ja/docs/Web/JavaScript/Closures)を使う方法も便利です。

### JSON の解析 (文字列を JavaScript オブジェクトに変換)

`eval()` の呼び出しに使おうとしている文字列がコードではなくデータ (例えば `"[1, 2, 3]"` で配列を表す) を含むものであれば、{{Glossary("JSON")}} に切り替えることを検討してください。これは JavaScript のサブセットを使用することで、文字列でデータを表現することができます。<a href="/ja/docs/Downloading_JSON_and_JavaScript_in_extensions">Downloading JSON and JavaScript in extensions</a> の記事も参照してください。

JSON の構文は JavaScript の構文に比べて制限があり、多くの有効な JavaScript リテラルが JSON としては解釈されないことに注意してください。例えば、最後にカンマを付けることは JSON では許されておらず、オブジェクトリテラル内のプロパティ名 (キー) は引用符で囲む必要があります。後で JSON として解析される文字列を生成するには、JSON シリアライザーを使うようにしてください。

<h3 id="Pass_data_instead_of_code" name="Pass_data_instead_of_code">コードの代わりにデータを渡す</h3>

例えば、ウェブページの内容を取得できるよう設計された拡張であれば、JavaScript コードの代わりに <a href="/ja/docs/Web/XPath">XPath</a> を使って取得ルールを定義できます。

<h2 id="Examples" name="Examples">使用例</h2>

<h3 id="Using_eval" name="Using_eval">`eval` を使用する</h3>

次のコードでは、`eval` を含むどちらの文も 42 を返します。最初のコードは文字列 "`x + y + 1`" を評価します。2 番目のコードは文字列 "`42`" を評価します。

```js
var x = 2;
var y = 39;
var z = '42';
eval('x + y + 1'); // 42 が返される
eval(z);           // 42 が返される
```

### `eval` を使用して JavaScript 文の文字列を評価する

次の例は、`eval()` を使用して文字列 `str` を評価しています。この文字列は `x` が 5 の場合に `z` に 42 の値を代入し、それ以外の場合は `z` に 0 を代入する JavaScript 文で構成されています。2 番目の文が実行される時、`eval` によってこれらの文が実行され、そして一連の文を評価して `z` に代入される値を返します。

```js
var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42;} else z = 0;";

console.log('z is ', eval(str));
```

複数の値を定義した場合、最後の値が返されます。

```js
var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42; x = 420; } else z = 0;";

console.log('x is ', eval(str)); // z is 42  x is 420
```

### 評価される最後の式について

`eval()` は最後に評価された式の値を返します。

```js
var str = 'if ( a ) { 1 + 1; } else { 1 + 2; }';
var a = true;
var b = eval(str);  // 2 が返される

console.log('b is : ' + b);

a = false;
b = eval(str);  // 3 が返される

console.log('b is : ' + b);
```

### 関数定義の文字列の `eval` には先頭と末尾に "(" と ")" が必要

```js
var fctStr1 = 'function a() {}'
var fctStr2 = '(function a() {})'
var fct1 = eval(fctStr1)  // undefined が返される
var fct2 = eval(fctStr2)  // 関数が返される
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Global_Objects/uneval", "uneval()")}}
- [プロパティアクセサー](/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
- [WebExtensions: コンテンツスクリプトでの eval() の使用](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#using_eval_in_content_scripts)
