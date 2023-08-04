---
title: New in JavaScript 1.8
slug: orphaned/New_in_JavaScript_1.8
---

JavaScript 1.8 は（[Firefox 3](/ja/docs/Mozilla/Firefox/Releases/3) に組み込まれている） Gecko 1.9 の一部分です。これは [JavaScript 1.7](/ja/docs/Web/JavaScript/New_in_JavaScript/1.7) よりは大きな更新ではありませんが、ECMAScript 4/JavaScript 2 の進歩に追随するための更新がいくつか含まれています。このリリースは [JavaScript 1.6](/ja/docs/Web/JavaScript/New_in_JavaScript/1.6) および [JavaScript 1.7](/ja/docs/Web/JavaScript/New_in_JavaScript/1.7) で仕様化された新機能の全てを含んでいます。

JavaScript 1.8 の開発状況を追うためには、[Firefox バグ 380236](https://bugzil.la/380236) を参照してください。この文書の地位については [Firefox バグ 421027](https://bugzil.la/421027) を参照してください。

## JavaScript 1.8 の使用

JavaScript 1.8 のいくつかの新機能を HTML で使用するためには、以下のようにしてください:

```
<script type="application/javascript;version=1.8"> ... あなたのコード ... </script>
```

もう 1 つの（推奨されない）方法として、`<script>` の非推奨の language 属性を使い、"JavaScript1.8" と定義することでもできます。

[JavaScript shell](/ja/docs/Introduction_to_the_JavaScript_shell) や JavaScript XPCOM コンポーネント、XUL の `<script>` 要素を使うときは、JS の最新バージョン（Mozilla 1.9 では JS1.8）が自動的に使われます（[Firefox バグ 381031](https://bugzil.la/381031), [Firefox バグ 385159](https://bugzil.la/385159)）。

新たなキーワードである "yield" と "let" を使う必要がある機能は、バージョン 1.7 以上を指定しなければなりません。 なぜなら、既存のコードがそれらのキーワードを変数や関数の名前として使っているかもしれないからです。新しいキーワードを導入していない機能（例えばジェネレータ式）は、JavaScript のバージョンを指定することなく使うことができます。

## 式クロージャ

この追加機能は、典型的な [ラムダ記法](http://en.wikipedia.org/wiki/Lambda_calculus#Lambda_calculus_and_programming_languages)（[日本語版](http://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%A0%E3%83%80%E8%A8%88%E7%AE%97#.E3.83.A9.E3.83.A0.E3.83.80.E8.A8.88.E7.AE.97.E3.81.A8.E3.83.97.E3.83.AD.E3.82.B0.E3.83.A9.E3.83.9F.E3.83.B3.E3.82.B0.E8.A8.80.E8.AA.9E)）に似た表現を与える、単純な関数を書くための簡略表現に過ぎません。

[JavaScript 1.7](/ja/docs/Web/JavaScript/New_in_JavaScript/1.7) 以前:

```
function(x) { return x * x; }
```

JavaScript 1.8:

```
function(x) x * x
```

この構文を使うことによって、中括弧と 'return' 文を省くことができます（それらは暗黙的に補われます）。この方式でコードを書くことには、コードを構文的に短くするメリットしかありません。

**例:**

イベントリスナーを渡す簡略表現:

```
document.addEventListener("click", function() false, true);
```

[JavaScript 1.6](/ja/docs/Web/JavaScript/New_in_JavaScript/1.6) からの array のメソッドである some とともにこの記法を使うと:

```
elems.some(function(elem) elem.type == "text");
```

## ジェネレータ式

この追加により、ジェネレータ（[JavaScript 1.7](/ja/docs/Web/JavaScript/New_in_JavaScript/1.7) で導入されたものです）を簡単に作成することが可能になります。ジェネレータを生成するには、通常は内部に yield を含むカスタム関数を作成しなければなりませんでしたが、この追加により、配列内包に似た構文を使って同じ性質のジェネレータ文を作成することができるようになります。

[JavaScript 1.7](/ja/docs/Web/JavaScript/New_in_JavaScript/1.7) では、あるオブジェクトのためのカスタムジェネレータを作成するために、以下のようなものを書くことでしょう:

```js
function add3(obj) {
  for ( let i in obj )
    yield i + 3;
}

let it = add3(someObj);

try {
  while (true) {
    document.write(it.next() + "<br>\n");
  }
} catch (err if err instanceof StopIteration) {
  document.write("End of record.<br>\n");
}
```

JavaScript 1.8 では、ジェネレータ式を代わりに使うことで、カスタムジェネレータ関数を作成する必要性が無くなります:

```js
let it = (i + 3 for (i in someObj));

try {
  while (true) {
    document.write(it.next() + "<br>\n");
  }
} catch (err if err instanceof StopIteration) {
  document.write("End of record.<br>\n");
}
```

ジェネレータ式は、関数に値として渡すこともできます。これは配列があらかじめ生成される典型的な配列内包の場合と違って、本当に必要とされるまでジェネレータが実行されないので、特に注目に値します。その違いの例を挙げます:

JavaScript 1.7 の配列内包を使った場合

```js
handleResults([ i for ( i in obj ) if ( i > 3 ) ]);

function handleResults( results ) {
  for ( let i in results )
    // ...
}
```

JavaScript 1.8 のジェネレータ式を使った場合

```js
handleResults( i for ( i in obj ) if ( i > 3 ) );

function handleResults( results ) {
  for ( let i in results )
    // ...
}
```

この 2 つの例の大きな違いは、配列内包を使った場合には配列を内包するときと繰り返し処理を行うときの 2 度 "obj" 構造に対してループが実行されるのに対して、ジェネレータ式を使った場合には 1 度しかループが実行されずに済むという点です。

## さらなる Array の拡張

JavaScript 1.8 では、 [`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) オブジェクトに 2 つの新しい繰り返しのメソッドが導入されました:

- [`reduce()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) - 配列の全ての要素に関数を実行し、直前の呼び出しから結果を収集します。
- [`reduceRight()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) - 配列の全ての要素に関数を実行し、直前の呼び出しから結果を収集しますが、逆から実行します。

## for..in の分配方法の変更

JavaScript 1.8 のリリースで生じた変更に、JavaScript 1.7 で導入された配列のキー/値の組への[分割代入](/ja/docs/Web/JavaScript/New_in_JavaScript/1.7)に関連するバグ修正があります。これまでは for ( var \[key, value] in array ) を使うことで、配列のキー/値の組を分割代入することができました。しかしこのせいで、配列の配列において値を分割代入することが不可能になっていました。現在この問題は解決しています。([Firefox バグ 366941](https://bugzil.la/366941))
