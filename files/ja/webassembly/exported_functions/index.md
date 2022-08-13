---
title: エクスポートされた WebAssembly 関数
slug: WebAssembly/Exported_functions
tags:
  - Guide
  - JavaScript
  - WebAssembly
  - export
  - exported functions
  - exported wasm functions
  - wasm
translation_of: WebAssembly/Exported_functions
---
<div>{{WebAssemblySidebar}}</div>

<p class="summary">エクスポートされた WebAssembly 関数は WebAssembly 関数が JavaScript でどのように表現されるのか、この記事では、もう少し詳しく説明します。</p>

<h2 id="エクスポートされた...とは">エクスポートされた...とは?</h2>

<p>エクスポートされた WebAssembly 関数は WebAssembly 関数を表現する JavaScript ラッパーです。それらを呼び出したときにバックグラウンドでいくつかの動作を行います。引数を wasm で使える型に(例えば、JavaScript の数値を Int32 に)変換し、wasm モジュール内の関数に渡し、実行し、結果を変換して JavaScript 側に戻します。</p>

<p>エクスポートされた WebAssembly 関数は次の 2 つの方法で取得できます:</p>

<ul>
 <li>既存のテーブルの <code><a href="/ja/docs/WebAssembly/API/Table/get">Table.prototype.get()</a></code> を呼び出す。</li>
 <li>wasm モジュールインスタンスの <code><a href="/ja/docs/WebAssembly/API/Instance/exports">Instance.exports</a></code> を通してエクスポートされた関数にアクセスする。</li>
</ul>

<p>いずれにしても、同じ種類の内在する関数のラッパーを取得できます。JavaScript からみると、すべての wasm 関数は JavaScript 関数のようにみえます。しかし、これは wasm 関数オブジェクトインスタンスによってカプセル化されており、アクセスする方法は限られています。</p>

<h2 id="An_example" name="An_example">例</h2>

<p>物事を明らかにするために例を見ていきましょう(例は GitHub の <a href="https://github.com/mdn/webassembly-examples/blob/master/other-examples/table-set.html">table-set.html</a> と <a href="https://mdn.github.io/webassembly-examples/other-examples/table-set.html">動作例</a>、wasm の <a href="https://github.com/mdn/webassembly-examples/blob/master/ja-api-examples/table.wat">テキスト表現</a> を参照してください):</p>

<pre class="brush: js">var otherTable = new WebAssembly.Table({ element: "anyfunc", initial: 2 });

WebAssembly.instantiateStreaming(fetch('table.wasm'))
.then(function(obj) {
  var tbl = obj.instances.exports.tbl;
  console.log(tbl.get(0)());  // 13
  console.log(tbl.get(1)());  // 42
  otherTable.set(0,tbl.get(0));
  otherTable.set(1,tbl.get(1));
  console.log(otherTable.get(0)());
  console.log(otherTable.get(1)());
});</pre>

<p>ここでは、{{jsxref("WebAssembly.Table")}} コンストラクタを使用して JavaScript からテーブル(<code>otherTable</code>)を作成し、{{jsxref("WebAssembly.instantiateStreaming()")}} ユーティリティ関数を使用して table.wasm をページに読み込みます。</p>

<p>そのあと、モジュールからエクスポートされた関数を取得し、関数の参照を <code><a href="/ja/docs/WebAssembly/API/Table/get">tbl.get()</a></code> を通して取り出し、それぞれを実行した結果をコンソールに出力します。次に、 <code>set()</code> を使用して、<code>tbl</code> テーブルと同じ関数への参照を <code>otherTable</code> テーブルに含まれるようにします。</p>

<p>確認するために、<code>otherTable</code> から参照を取得し直し、その結果もコンソールに出力します(同じ結果が得られます)。</p>

<h2 id="それらは本当の関数です">それらは本当の関数です</h2>

<p>前の例で、<code><a href="/ja/docs/WebAssembly/API/Table/get">Table.prototype.get()</a></code> のそれぞれの返り値はエクスポートされた WebAssembly 関数でした。まさに私達が話していたことです。</p>

<p>これらは WebAssembly 関数のラッパーであるのに加えて本当の JavaScript 関数 であることに注意してください。上の例を <a href="/ja/docs/WebAssembly#Browser_compatibility">WebAssembly をサポートするブラウザー</a>でロードして、コンソール上で実行すると:</p>

<pre class="brush: js">var testFunc = otherTable.get(0);
typeof testFunc;</pre>

<p>結果として関数が返されます。この関数は他の JavaScript の他の <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function">関数</a> と同じように扱うことができます(<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call">call()</a><font face="Open Sans, arial, sans-serif">、</font></code><code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">bind()</a>、その他</code>)。<code>testFunc.toString()</code> は興味深い結果を返します:</p>

<pre class="brush: js">function 0() {
    [native code]
}</pre>

<p>これはラッパー型の性質のアイデアの多くを提供します。</p>

<p>エクスポートされた WebAssembly 関数について他の注意事項は:</p>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length">length</a> プロパティは wasm 内の関数シグネチャで宣言されている引数の数です。</li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/name">name</a> プロパティは <code>toString()</code> の結果で見えている wasm モジュール内での関数のインデックスです。</li>
 <li>i64 型の値を受け取る、または返すエクスポートされた wasm 関数を呼び出そうとすると、現在 JavaScript 上で i64 を表現する的確な方法がないためエラーをスローします。これは将来的に変わる可能性があります。新しい int64 型が将来の標準で検討されており、wasm によって使用される可能性があります。</li>
</ul>
