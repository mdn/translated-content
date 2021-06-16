---
title: New in JavaScript 1.8
slug: orphaned/New_in_JavaScript_1.8
tags:
  - JavaScript
  - JavaScript_version_overviews
original_slug: New_in_JavaScript_1.8
---
<p>JavaScript 1.8 は（<a href="/ja/docs/Mozilla/Firefox/Releases/3" title="Firefox_3_for_developers">Firefox 3</a> に組み込まれている） Gecko 1.9 の一部分です。これは <a href="/ja/docs/Web/JavaScript/New_in_JavaScript/1.7" title="New_in_JavaScript_1.7">JavaScript 1.7</a> よりは大きな更新ではありませんが、ECMAScript 4/JavaScript 2 の進歩に追随するための更新がいくつか含まれています。このリリースは <a href="/ja/docs/Web/JavaScript/New_in_JavaScript/1.6" title="New_in_JavaScript_1.6">JavaScript 1.6</a> および <a href="/ja/docs/Web/JavaScript/New_in_JavaScript/1.7" title="New_in_JavaScript_1.7">JavaScript 1.7</a> で仕様化された新機能の全てを含んでいます。</p>
<p>JavaScript 1.8 の開発状況を追うためには、{{Bug(380236)}} を参照してください。この文書の地位については {{Bug(421027)}} を参照してください。</p>
<h2 id="Using_JavaScript_1.8">JavaScript 1.8 の使用</h2>
<p>JavaScript 1.8 のいくつかの新機能を HTML で使用するためには、以下のようにしてください:</p>
<pre><code>&lt;script type="application/javascript;version=1.8"&gt; ... あなたのコード ... &lt;/script&gt;</code></pre>
<p>もう 1 つの（推奨されない）方法として、<code>&lt;script&gt;</code> の非推奨の language 属性を使い、"JavaScript1.8" と定義することでもできます。</p>
<p><a href="/ja/docs/Introduction_to_the_JavaScript_shell" title="Introduction_to_the_JavaScript_shell">JavaScript shell</a> や JavaScript XPCOM コンポーネント、XUL の <code>&lt;script&gt;</code> 要素を使うときは、JS の最新バージョン（Mozilla 1.9 では JS1.8）が自動的に使われます（{{Bug(381031)}}, {{Bug(385159)}}）。</p>
<p>新たなキーワードである "yield" と "let" を使う必要がある機能は、バージョン 1.7 以上を指定しなければなりません。 なぜなら、既存のコードがそれらのキーワードを変数や関数の名前として使っているかもしれないからです。新しいキーワードを導入していない機能（例えばジェネレータ式）は、JavaScript のバージョンを指定することなく使うことができます。</p>
<h2 id="Expression_Closures">式クロージャ</h2>
<p>この追加機能は、典型的な <a class="external" href="http://en.wikipedia.org/wiki/Lambda_calculus#Lambda_calculus_and_programming_languages">ラムダ記法</a>（<a class="external" href="http://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%A0%E3%83%80%E8%A8%88%E7%AE%97#.E3.83.A9.E3.83.A0.E3.83.80.E8.A8.88.E7.AE.97.E3.81.A8.E3.83.97.E3.83.AD.E3.82.B0.E3.83.A9.E3.83.9F.E3.83.B3.E3.82.B0.E8.A8.80.E8.AA.9E">日本語版</a>）に似た表現を与える、単純な関数を書くための簡略表現に過ぎません。</p>
<p><a href="/ja/docs/Web/JavaScript/New_in_JavaScript/1.7" title="New_in_JavaScript_1.7">JavaScript 1.7</a> 以前:</p>
<pre>function(x) { return x * x; }</pre>
<p>JavaScript 1.8:</p>
<pre>function(x) x * x</pre>
<p>この構文を使うことによって、中括弧と 'return' 文を省くことができます（それらは暗黙的に補われます）。この方式でコードを書くことには、コードを構文的に短くするメリットしかありません。</p>
<p><strong>例:</strong></p>
<p>イベントリスナーを渡す簡略表現:</p>
<pre>document.addEventListener("click", function() false, true);</pre>
<p><a href="/ja/docs/Web/JavaScript/New_in_JavaScript/1.6" title="New_in_JavaScript_1.6">JavaScript 1.6</a> からの array のメソッドである some とともにこの記法を使うと:</p>
<pre>elems.some(function(elem) elem.type == "text");</pre>
<h2 id="Generator_Expressions">ジェネレータ式</h2>
<p>この追加により、ジェネレータ（<a href="/ja/docs/Web/JavaScript/New_in_JavaScript/1.7" title="New_in_JavaScript_1.7">JavaScript 1.7</a> で導入されたものです）を簡単に作成することが可能になります。ジェネレータを生成するには、通常は内部に yield を含むカスタム関数を作成しなければなりませんでしたが、この追加により、配列内包に似た構文を使って同じ性質のジェネレータ文を作成することができるようになります。</p>
<p><a href="/ja/docs/Web/JavaScript/New_in_JavaScript/1.7" title="New_in_JavaScript_1.7">JavaScript 1.7</a> では、あるオブジェクトのためのカスタムジェネレータを作成するために、以下のようなものを書くことでしょう:</p>
<pre class="brush:js">function add3(obj) {
  for ( let i in obj )
    yield i + 3;
}

let it = add3(someObj);

try {
  while (true) {
    document.write(it.next() + "&lt;br&gt;\n");
  }
} catch (err if err instanceof StopIteration) {
  document.write("End of record.&lt;br&gt;\n");
}
</pre>
<p>JavaScript 1.8 では、ジェネレータ式を代わりに使うことで、カスタムジェネレータ関数を作成する必要性が無くなります:</p>
<pre class="brush:js">let it = (i + 3 for (i in someObj));

try {
  while (true) {
    document.write(it.next() + "&lt;br&gt;\n");
  }
} catch (err if err instanceof StopIteration) {
  document.write("End of record.&lt;br&gt;\n");
}
</pre>
<p>ジェネレータ式は、関数に値として渡すこともできます。これは配列があらかじめ生成される典型的な配列内包の場合と違って、本当に必要とされるまでジェネレータが実行されないので、特に注目に値します。その違いの例を挙げます:</p>
<p>JavaScript 1.7 の配列内包を使った場合</p>
<pre class="brush:js">handleResults([ i for ( i in obj ) if ( i &gt; 3 ) ]);

function handleResults( results ) {
  for ( let i in results )
    // ...
}
</pre>
<p>JavaScript 1.8 のジェネレータ式を使った場合</p>
<pre class="brush:js">handleResults( i for ( i in obj ) if ( i &gt; 3 ) );

function handleResults( results ) {
  for ( let i in results )
    // ...
}
</pre>
<p>この 2 つの例の大きな違いは、配列内包を使った場合には配列を内包するときと繰り返し処理を行うときの 2 度 "obj" 構造に対してループが実行されるのに対して、ジェネレータ式を使った場合には 1 度しかループが実行されずに済むという点です。</p>
<h2 id="More_Array_Extras">さらなる Array の拡張</h2>
<p>JavaScript 1.8 では、 <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array" title="JavaScript/Reference/Global_Objects/Array">Array</a></code> オブジェクトに 2 つの新しい繰り返しのメソッドが導入されました:</p>
<ul>
  <li><code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" title="JavaScript/Reference/Objects/Array/reduce">reduce()</a></code> - 配列の全ての要素に関数を実行し、直前の呼び出しから結果を収集します。</li>
  <li><code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight" title="JavaScript/Reference/Objects/Array/reduceRight">reduceRight()</a></code> - 配列の全ての要素に関数を実行し、直前の呼び出しから結果を収集しますが、逆から実行します。</li>
</ul>
<h2 id="Changes_in_destructuring_for..in">for..in の分配方法の変更</h2>
<p>JavaScript 1.8 のリリースで生じた変更に、JavaScript 1.7 で導入された配列のキー/値の組への<a class="internal" href="/ja/docs/Web/JavaScript/New_in_JavaScript/1.7" title="New in JavaScript 1.7">分割代入</a>に関連するバグ修正があります。これまでは for ( var [key, value] in array ) を使うことで、配列のキー/値の組を分割代入することができました。しかしこのせいで、配列の配列において値を分割代入することが不可能になっていました。現在この問題は解決しています。({{Bug("366941")}})</p>
