---
title: Function (関数)
slug: Glossary/Function
tags:
  - CodingScripting
  - IIFE
  - Immediately Invoked Function Expressions (IIFE)
  - Intro
  - JavaScript
translation_of: Glossary/Function
---
<p><strong>関数</strong> は、他のコードや自分自身、関数を参照する {{Glossary("variable", "変数")}} から呼ばれるコード断片です。関数が呼ばれると、{{Glossary("Argument", "引数")}} が関数への入力として渡され、次に関数は任意で値を戻します。{{glossary("JavaScript")}} における関数は、{{glossary("object", "オブジェクト")}} でもあります。</p>

<p>関数名は、関数宣言の一部または関数式に含まれる {{Glossary("identifier", "識別子")}} です。関数名の {{Glossary("scope", "スコープ")}} は、関数名が宣言か式かによって決まります。</p>

<h3 id="Different_types_of_functions" name="Different_types_of_functions">さまざまな関数の種類</h3>

<p><strong>無名関数</strong> とは、関数名のない関数です。無名にできるのは関数式のみで、関数宣言には名前が必要です。</p>

<pre class="brush: js notranslate">// 関数式
(function () {});
// アロー関数
() =&gt; {};
</pre>

<p>下記の用語は、ECMAScript 言語仕様で使用されているものではなく、関数の様々な種類を表すための俗称です。</p>

<p><strong>名前付き関数</strong> とは、関数名のある関数です。</p>

<pre class="brush: js notranslate">// 関数宣言
function foo() {};
// 名前付き関数式
(function bar() {});
// アロー関数
const foo = () =&gt; {};
</pre>

<p><strong>内部関数</strong> は、ほかの関数内に書かれた関数です (この例では <code>square</code>)。<strong>外部関数</strong> は、関数を含む関数です (この例では <code>addSquares</code>):</p>

<pre class="brush: js notranslate">function addSquares(a,b) {
   function square(x) {
      return x * x;
   }
   return square(a) + square(b);
};
// アロー関数を使う
const addSquares = (a,b) =&gt; {
   const square = x =&gt; x*x;
   return square(a) + square(b);
};
</pre>

<p><strong>再帰関数</strong> は自身を呼び出す関数です。{{Glossary("Recursion", "再帰")}} を参照してください。</p>

<pre class="brush: js notranslate">function loop(x) {
   if (x &gt;= 10)
      return;
   loop(x + 1);
};
// アロー関数を使う
const loop = x =&gt; {
   if (x &gt;= 10)
      return;
   loop(x + 1);
};
</pre>

<p><strong>即時実行関数式</strong> ({{glossary("IIFE")}}) は、関数がブラウザーのコンパイラーに読み込まれた直後に呼び出される関数です。IIFE を見分けるには、関数定義の末尾に追加の左括弧と右括弧があるかどうかで判断できます。</p>

<pre class="brush: js notranslate">// 関数宣言は、この方法で即時実行できません。
// (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
/*
​function foo() {
    console.log('Hello Foo');
}();
*/

// 名前付きまたは無名の関数式は即時実行できます。
(function foo() {
    console.log("Hello Foo");
}());

(function food() {
    console.log("Hello Food");
})();

(() =&gt; console.log('hello world'))();
</pre>

<p>IIFE の詳細を知りたい方は、次の Wikipedia のページを確認してください: <a href="https://en.wikipedia.org/wiki/Immediately-invoked_function_expression">Immediately Invoked Function Expression</a></p>

<h2 id="Learn_more" name="Learn_more">関連項目</h2>

<h3 id="Technical_reference" name="Technical_reference">技術リファレンス</h3>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Functions">関数</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー関数</a></li>
</ul>
