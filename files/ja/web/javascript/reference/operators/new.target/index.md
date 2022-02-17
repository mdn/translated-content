---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
tags:
- Classes
- ECMAScript 2015
- JavaScript
- 言語機能
- リファレンス
translation_of: Web/JavaScript/Reference/Operators/new.target
---
{{JSSidebar("Operators")}}

<strong>`new.target`</strong> は擬似プロパティで、関数やコンストラクターが [new](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子を使用して呼び出されたかどうかを検出することができます。 [new](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子を使用して呼び出されたコンストラクターや関数の中では、 `new.target` はコンストラクターや関数への参照を返します。通常の関数呼び出しの場合、 `new.target` は {{jsxref("undefined")}} になります。

{{EmbedInteractiveExample("pages/js/expressions-newtarget.html")}}

## 構文

<pre class="brush: js">new.target</pre>

## 解説

`new.target` の構文は、`new` キーワードとドット、 `target` 識別子で構成されています。通常、ドットの左側はプロパティアクセスが行われるオブジェクトですが、ここでの `new` はオブジェクトではありません。

`new.target` は、すべての関数で使用できる擬似プロパティです。

クラスのコンストラクターでは、構築されたクラスを参照します。

通常の関数では、[new](/ja/docs/Web/JavaScript/Reference/Operators/new) 演算子を介して呼び出されたと仮定して、関数自体を参照します。それ以外の場合、`new.target` は {{jsxref("undefined")}} になります。

[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)では、`new.target` は周囲のスコープから継承されます。

## 例

<h3 id="new.target_in_function_calls">関数呼び出しにおける new.target の使用</h3>

通常の関数呼び出しでは (コンストラクター関数の呼び出しとは対照的に)、 `new.target` は {{jsxref("undefined")}} になります。これにより、関数が [new](/ja/docs/Web/JavaScript/Reference/Operators/new) でコンストラクターとして呼び出されたかを検出できます。

<pre class="brush: js">function Foo() {
  if (!new.target) { throw 'Foo() must be called with new' }
  console.log('Foo instantiated with new')
}

new Foo()  // logs "Foo instantiated with new"
Foo()      // throws "Foo() must be called with new"
</pre>

<h3 id="new.target_in_constructors">コンストラクターにおける new.target</h3>

クラスのコンストラクターでは、`new.target` は `new` で直接実行されたコンストラクターを参照します。これは、コンストラクターが親クラスにあり、子コンストラクターから委任された場合も同様です。

<pre class="brush: js">class A {
  constructor() {
    console.log(new.target.name)
  }
}

class B extends A { constructor() { super() } }

let a = new A()  // logs "A"
let b = new B()  // logs "B"

class C { constructor() { console.log(new.target)  } }
class D extends C { constructor() { super()  } }

let c = new C()  // logs class C{constructor(){console.log(new.target);}}
let d = new D()  // logs class D extends C{constructor(){super();}}</pre>

<p class="summary">上記の `C` および `D` クラスの例から、 `new.target` は初期化されたクラスのクラス定義を指しているように見えます。たとえば、`d` を `new D()` で初期化した場合は、 `D` のクラス定義が出力され、同様に `c` の場合は `C` のクラスが出力されます。</p>

## 仕様書

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">仕様書</th>
    </tr>
    <tr>
      <td>{{SpecName('ESDraft', '#sec-built-in-function-objects', 'Built-in Function Objects')}}</td>
    </tr>
  </tbody>
</table>

## ブラウザーの互換性

{{Compat("javascript.operators.new_target")}}

## 関連情報

<ul>
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- [クラス](/ja/docs/Web/JavaScript/Reference/Classes)
- `[new](/ja/docs/Web/JavaScript/Reference/Operators/new)`
- `[this](/ja/docs/Web/JavaScript/Reference/Operators/this)`
</ul>
