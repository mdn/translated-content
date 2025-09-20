---
title: arguments オブジェクト
slug: Web/JavaScript/Reference/Functions/arguments
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`arguments`** は配列風 (array-like) オブジェクトであり、[関数](/ja/docs/Web/JavaScript/Guide/Functions)に渡された引数の値を含んでおり、関数内からアクセスすることができます。

{{InteractiveExample("JavaScript デモ: arguments オブジェクト")}}

```js interactive-example
function func1(a, b, c) {
  console.log(arguments[0]);
  // 予想される結果: 1

  console.log(arguments[1]);
  // 予想される結果: 2

  console.log(arguments[2]);
  // 予想される結果: 3
}

func1(1, 2, 3);
```

## 解説

> [!NOTE]
> 最近のコードでは、[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)が推奨されます。

`arguments` オブジェクトはすべての（[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)ではない）関数内で利用可能なローカル変数です。`arguments` オブジェクトを使うことにより、関数内で関数の引数を参照できます。このオブジェクトは、関数に渡された各引数に対する入力を含みます。最初の入力の添字は 0 から始まります。

たとえば、もし関数に 3 つの引数が渡されたなら、次のようにその引数を参照できます。

```js
arguments[0]; // 1 番目の引数
arguments[1]; // 2 番目の引数
arguments[2]; // 3 番目の引数
```

`arguments`オブジェクトは、形式的に宣言された引数より多くの引数で呼び出された関数（[可変長引数関数](https://ja.wikipedia.org/wiki/可変長引数)と呼ばれる）で有用です。例えば {{jsxref("Math.min()")}} が該当します。この例の関数は任意の数の文字列引数を受け取り、最も長い文字列を返します。

```js
function longestString() {
  let longest = "";
  if (arguments.length === 0) {
    throw new TypeError("1 つ以上の文字列が必要です");
  }
  for (const arg of arguments) {
    if (arg.length > longest.length) {
      longest = arg;
    }
  }
  return longest;
}
```

関数が呼び出された際の引数の数を数えるには、 {{jsxref("Functions/arguments/length", "arguments.length")}} を使用することができます。代わりに、関数が宣言上受け入れる引数の数を数えたい場合は、その関数の {{jsxref("Function/length", "length")}} プロパティを確認してください。

### 位置を指定した代入

それぞれの位置の引数には、設定したり再代入したりすることもできます。

```js
arguments[1] = "new value";
```

厳格モードでない関数で、単純な仮引数のみがある場合（すなわち、残余引数、デフォルト引数、分割引数ではない場合）、 `arguments` オブジェクトで引数に新しい値を代入すると、仮引数と同期します。

```js
function func(a) {
  arguments[0] = 99; // arguments[0] を更新すると a も更新される
  console.log(a);
}
func(10); // 99

function func2(a) {
  a = 99; // a を更新すると arguments[0] も更新される
  console.log(arguments[0]);
}
func2(10); // 99
```

厳格モードでない関数で、[残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)、[デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)、[構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)の引数が渡されると、関数の本体で引数の変数に新しい値が代入されても、 `arguments` オブジェクトと同期されません。複雑な引数を持つ厳格モードでない関数の `arguments` オブジェクトは、関数が呼び出されたときに関数に渡された値を常に反映します。

```js
function funcWithDefault(a = 55) {
  arguments[0] = 99; // arguments[0] を更新しても a は更新されない
  console.log(a);
}
funcWithDefault(10); // 10

function funcWithDefault2(a = 55) {
  a = 99; // a を更新しても arguments[0] は更新されない
  console.log(arguments[0]);
}
funcWithDefault2(10); // 10

// デフォルト引数は追跡されない
function funcWithDefault3(a = 55) {
  console.log(arguments[0]);
  console.log(arguments.length);
}
funcWithDefault3(); // undefined; 0
```

これは、渡す引数の型に関係なく、すべての[厳格モード関数](/ja/docs/Web/JavaScript/Reference/Strict_mode#eval_および_arguments_の単純化)が示すのと同じ挙動です。つまり、関数の本体内で引数に新しい値を代入しても、 `arguments` オブジェクトには一切影響しません。同様に、 `arguments` のインデックスに新しい値を代入しても、引数の値には影響しません。これは、関数が単純な引数のみを持つ場合でも同様です。

> [!NOTE]
> 残余引数、デフォルト引数、または構造分解引数を受け取る関数定義の本体で `"use strict";` ディレクティブを記述することはできません。そうすると[構文エラー](/ja/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params)が発生します。

### arguments は配列風オブジェクト

`arguments` は配列風オブジェクトです。すなわち、 `arguments` が {{jsxref("Functions/arguments/length", "length")}} プロパティと 0 から始まる添字のプロパティを持っているものの、 {{jsxref("Array")}} の組み込みメソッド、例えば {{jsxref("Array/forEach", "forEach()")}} や {{jsxref("Array/map", "map()")}} を持っていないということです。ただし、[`slice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)、{{jsxref("Array.from()")}}、または[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)のいずれかを使用して、実際の `Array` に変換することができます。

```js
const args = Array.prototype.slice.call(arguments);
// or
const args = Array.from(arguments);
// or
const args = [...arguments];
```

一般的な用途では、配列風オブジェクトとして使用すれば十分です。なぜなら、[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)であることに加え、`length` プロパティと数値の添字を持っているからです。例えば、[`Function.prototype.apply()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) は配列風オブジェクトを受け入れます。

```js
function midpoint() {
  return (
    (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2
  );
}

console.log(midpoint(3, 1, 4, 1, 5)); // 3
```

## プロパティ

- {{jsxref("Functions/arguments/callee", "arguments.callee")}} {{deprecated_inline}}
  - : この引数が所属する、現在実行中の関数を参照します。厳格モードでは禁止されています。
- {{jsxref("Functions/arguments/length", "arguments.length")}}
  - : 関数に渡された引数の数を示します。
- [`arguments[Symbol.iterator]()`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator)
  - : 新しい[配列イテレーター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)オブジェクトを返します。これは、 `arguments` のそれぞれの添字の値を処理します。

## 例

### 複数の文字列を連結する関数を定義

この例では、複数の文字列を連結する関数を定義します。この関数の唯一の仮引数は、連結する項目を区切る文字を指定する文字列です。この関数は次のように定義されます。

```js
function myConcat(separator) {
  const args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

この関数へは好きな数だけ引数を渡すことができます。これはリスト中のそれぞれの引数を使用した文字列リストを返します。

```js
myConcat(", ", "red", "orange", "blue");
// "red, orange, blue"

myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// "elephant; giraffe; lion; cheetah"

myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
// "sage. basil. oregano. pepper. parsley"
```

### HTML のリストを作る関数の定義

この例では、リストのための HTML を含む文字列を作る関数を定義します。この関数の唯一の公式な引数は文字列で、 `"u"` を指定すると[順序なし（中黒付き）](/ja/docs/Web/HTML/Reference/Elements/ul)リスト、 `"o"` を指定すると[順序付き（番号付き）](/ja/docs/Web/HTML/Reference/Elements/ol)リストになります。関数は次のように定義します。

```js
function list(type) {
  let html = `<${type}l><li>`;
  const args = Array.prototype.slice.call(arguments, 1);
  html += args.join("</li><li>");
  html += `</li></${type}l>`; // リストの終了
  return html;
}
```

この関数には任意の数の引数を渡すことができ、それぞれの引数を指定された型のリストに項目として追加します。例を示します。

```js
list("u", "One", "Two", "Three");
// "<ul><li>One</li><li>Two</li><li>Three</li></ul>"
```

### typeof を arguments に使用

{{jsxref("Operators/typeof", "typeof")}} 演算子は、`arguments` で使用された場合、`'object'` を返します。

```js
console.log(typeof arguments); // 'object'
```

個々の引数の型は `arguments` をインデックス指定することで特定できます。

```js
console.log(typeof arguments[0]); // 最初の引数の型を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- [残余引数](/ja/docs/Web/JavaScript/Reference/Functions/rest_parameters)
