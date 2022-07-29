---
title: arguments オブジェクト
slug: Web/JavaScript/Reference/Functions/arguments
tags:
  - 関数
  - JavaScript
  - 名前空間
  - リファレンス
  - arguments
browser-compat: javascript.functions.arguments
translation_of: Web/JavaScript/Reference/Functions/arguments
---
{{JSSidebar("Functions")}}

**`arguments`** は配列風 (`Array`-like) オブジェクトであり、[関数](/ja/docs/Web/JavaScript/Guide/Functions)に渡された引数の値を含んでおり、関数内からアクセスすることができます。

{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}

## 解説

> **Note:** ES6 互換のコードを書く場合は、[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)が推奨されます。

> **Note:** 「配列風」とは、 `arguments` が {{jsxref("Functions/arguments/length", "length")}} プロパティと 0 から始まる添字のプロパティを持っているものの、 {{JSxRef("Array")}} の組込みメソッド、例えば {{jsxref("Array.forEach", "forEach()")}} や {{jsxref("Array.map", "map()")}} を持っていないということです。詳しくは[解説](#解説)の節を見てください。

`arguments` オブジェクトはすべての（[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)ではない）関数内で利用可能なローカル変数です。`arguments` オブジェクトを使うことにより、関数内で関数の引数を参照できます。このオブジェクトは、関数に渡された各引数に対する入力を含みます。最初の入力の添字は 0 から始まります。

たとえば、もし関数に 3 つの引数が渡されたなら、次のようにその引数を参照できます。

```js
arguments[0] // 1 番目の引数
arguments[1] // 2 番目の引数
arguments[2] // 3 番目の引数
```

引数を設定したり再代入したりすることもできます。

```js
arguments[1] = 'new value';
```

`arguments` オブジェクトは {{jsxref("Array")}} ではありません。似ていますが、 `Array` のプロパティは {{jsxref("Array.length", "length")}} 以外ありません。たとえば、 {{jsxref("Array.pop", "pop()")}} メソッドはありません。

しかしながら、本当の `Array` に変換することはできます。

```js
var args = Array.prototype.slice.call(arguments);
// 配列リテラルを使用すると上記よりも短くなりますが、空の配列を作成します
var args = [].slice.call(arguments);
```

他の配列風オブジェクトと同様に、 ES2015 の {{jsxref("Array.from()")}} メソッドや[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)を使用することで、 `arguments` を本当の配列に変換することができます。

```js
let args = Array.from(arguments);
// or
let args = [...arguments];
```

`arguments` オブジェクトは、あらかじめ定義された引数の数よりも多くの引数で呼び出される関数に便利です。このテクニックは {{jsxref("Math.min()")}} などの 可変数の引数を受け入れる関数に便利です。この例の関数は、任意の数の文字列が引数で、引数の中で一番長い文字列を返します。

```js
function longestString() {
  var longest = '';
  for (var i=0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}
```

呼び出された関数に渡された引数を数えるために {{jsxref("Functions/arguments/length", "arguments.length")}} を使用することができます。関数が受け取る引数を数えたいのであれば、関数の {{jsxref("Function.length", "length")}} プロパティを調べてください。

### arguments に対する typeof の使用

{{jsxref("Operators/typeof", "typeof")}} 演算子を `arguments` に対して使用すると、 `'object'` が返されます。

```js
console.log(typeof arguments); // 'object'
```

個々の引数の型は、 `arguments` に添字を使用して判断することができます。

```js
console.log(typeof arguments[0]); // 最初の引数の型を返す
```

## プロパティ

- {{jsxref("Functions/arguments/callee", "arguments.callee")}}
  - : 個の引数が所属する、現在実行中の関数を参照します。厳格モードでは禁止されています。
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : 関数に渡された引数の数を示します。
- {{jsxref("Functions/arguments/@@iterator", "arguments[@@iterator]")}}
  - : 新しい{{jsxref("Array/@@iterator", "配列イテレーター", "", 0)}}オブジェクトで、 `arguments` のそれぞれの要素の値を含みます。

## 例

### 複数の文字列を連結する関数を定義

この例では、複数の文字列を連結する関数を定義します。この関数の唯一の仮引数は、連結する項目を区切る文字を指定する文字列です。この関数は次のように定義されます。

```js
function myConcat(separator) {
  let args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

この関数へは好きな数だけ引数を渡すことができます。これはリスト中のそれぞれの引数を使用した文字列リストを返します。

```js
// "red, orange, blue" を返します
myConcat(', ', 'red', 'orange', 'blue');

// "elephant; giraffe; lion; cheetah" を返します
myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// "sage. basil. oregano. pepper. parsley" を返します
myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');
```

### HTML のリストを作る関数の定義

この例では、リストのための HTML を含む文字列を作る関数を定義します。この関数の唯一の公式な引数は文字列で、 "`u`" を指定すると[順序なし（中黒付き）](/ja/docs/Web/HTML/Element/ul)リスト、 "`o`" を指定すると[順序付き（番号付き）](/ja/docs/Web/HTML/Element/ol)リストになります。関数は次のように定義します。

```js
function list(type) {
  var html = '<' + type + 'l><li>';
  var args = Array.prototype.slice.call(arguments, 1);
  html += args.join('<li>');
  html += '</' + type + 'l>'; // end list
  return html;
}
```

この関数には任意の数の引数を渡すことができ、それぞれの引数を指定された型のリストに項目として追加します。例を示します。

```js
let listHTML = list('u', 'One', 'Two', 'Three');

/* listHTML の内容:
"<ul><li>One<li>Two<li>Three</ul>"
*/
```

### 残余引数、デフォルト引数、分割引数

`arguments` オブジェクトを[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)、[デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)、[分割引数](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)と組み合わせて使用できます。

```js
function foo(...args) {
  return args;
}
foo(1, 2, 3); // [1, 2, 3]
```

厳格モードのコードでは、残余引数、デフォルト引数、分割引数があっても [`arguments` オブジェクトの動作は変わりません](/ja/docs/Web/JavaScript/Reference/Strict_mode#eval_および_arguments_の単純化)が、厳格モードでない場合は微妙な違いがあります。

厳格モードでは、 `arguments` オブジェクトは関数に残余引数、デフォルト引数、分割引数が渡されたかどうかにかかわらず同じ動作をします。すなわち、関数の本体で変数に新しい値を代入しても、 `arguments` オブジェクトには影響しません。また、 `arguments` オブジェクトに新しい変数を代入しても、変数の値には影響ありません。

> **Note:** `"use strict";` ディレクティブを、残余引数、デフォルト引数、分割引数を受け付ける関数の本体に書くことはできません。そうすると、[構文エラー](/ja/docs/Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params)が発生します。

厳格モードでない関数で、単純な引数のみを渡した場合（すなわち、残余引数、デフォルト引数、分割引数ではない場合）、関数の本体で変数の値を新しい値にすると、 `arguments` オブジェクトと同期します。

```js
function func(a) {
  arguments[0] = 99; // arguments[0] を更新すると a も更新される
  console.log(a);
}
func(10); // 99
```

および

```js
function func(a) {
  a = 99; // a を更新すると arguments[0] も更新される
  console.log(arguments[0]);
}
func(10); // 99
```

それに対して、厳格モードでない関数で、残余引数、デフォルト引数、分割引数が渡**される**と、関数の本体で引数の変数に新しい値が代入されても、 `arguments` オブジェクトと同期**されません**。複雑な引数を持つ厳格モードでない関数の `arguments` オブジェクトは、関数が呼び出されたときに関数に渡された値を**常に反映します**（これは、渡される変数の型に関係なく、すべての厳格モードの関数の場合と同じ動作です）。

```js
function func(a = 55) {
  arguments[0] = 99; // arguments[0] を更新しても a は更新されない
  console.log(a);
}
func(10); // 10
```

および

```js
function func(a = 55) {
  a = 99; // a を更新しても arguments[0] は更新されない
  console.log(arguments[0]);
}
func(10); // 10
```

および

```js
// デフォルト引数は追跡されません。
function func(a = 55) {
  console.log(arguments[0]);
}
func(); // undefined
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{JSxRef("Function")}}
- [残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)
