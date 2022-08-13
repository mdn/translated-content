---
title: export
slug: Web/JavaScript/Reference/Statements/export
tags:
  - ECMAScript 2015
  - JavaScript
  - Language feature
  - Modules
  - Reference
  - Statement
  - export
translation_of: Web/JavaScript/Reference/Statements/export
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong><code>export</code></strong> 文は JavaScript モジュールを作成するときに使用され、モジュールから関数、オブジェクト、またはプリミティブ値へのライブバインディングのエクスポートを行い、{{jsxref("Statements/import", "import")}} 文を使用した他のプログラムが使用できるようにします。インポートされたモジュールは読み取り専用で、エクスポートされたモジュールが変更されるたびに値が更新されます。</p>

<p>エクスポートされたモジュールは、宣言のあるなしにかかわらず {{jsxref("Strict_mode","Strict モード", "", 1)}}で動作します。export 文は、埋め込みスクリプトでは使えません。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>2種類のエクスポート方法があります。</p>

<ol>
 <li>名前付きエクスポート (モジュールごとに 0 以上のエクスポート)</li>
 <li>デフォルトエクスポート (モジュールごとに 1 つのエクスポート)</li>
</ol>

<pre class="syntaxbox notranslate">// 個々の機能をエクスポート
export let <var>name1</var>, <var>name2</var>, …, <var>nameN</var>; // var, const も
export let <var>name1</var> = …, <var>name2</var> = …, …, <var>nameN</var>; // var, const も
export function functionName(){...}
export class ClassName {...}

// リストでエクスポート
export { <var>name1</var>, <var>name2</var>, …, <var>nameN</var> };

// 名前を変更してエクスポート
export { <var>variable1</var> as <var>name1</var>, <var>variable2</var> as <var>name2</var>, …, <var>nameN</var> };

// 分割代入してエクスポート
export const { <var>name1</var>, <var>name2: bar</var> } = o;

// デフォルトエクスポート
export default <em>expression</em>;
export default function (…) { … } // class, function* も使用可
export default function name1(…) { … } // class, function* も使用可
export { <var>name1</var> as default, … };

// モジュールの集約
export * from …; // デフォルトエクスポートを設定しません
export * as name1 from …; // ECMAScript® 2O21 の草案
export { <var>name1</var>, <var>name2</var>, …, <var>nameN</var> } from …;
export { <var>import1</var> as <var>name1</var>, <var>import2</var> as <var>name2</var>, …, <var>nameN</var> } from …;
export { default } from …;</pre>

<dl>
 <dt><code><var>nameN</var></code></dt>
 <dd>エクスポートする識別子です。(別のスクリプトが {{jsxref("Statements/import", "import")}} を使用してインポート可能になります。) </dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>エクスポート方法は、<strong>名前付き</strong>と<strong>デフォルト</strong>の 2 種類あります。名前付きエクスポートはモジュールごとに複数持てますが、デフォルトエクスポートは 1 つに限ります。それぞれのエクスポート方法は、上記の構文のひとつに対応します。</p>

<p>名前付きエクスポート:</p>

<pre class="brush: js notranslate">// 事前に宣言された機能のエクスポート
export { myFunction, myVariable };

// 個別の機能のエクスポート
// (var, let, const, function, class がエクスポート可能)
export let myVariable = Math.sqrt(2);
export function myFunction() { ... };
</pre>

<p>デフォルトエクスポート:</p>

<pre class="brush: js notranslate">// デフォルトとして事前に定義された機能のエクスポート
export { myFunction as default };

// 個別の機能をデフォルトとしてエクスポート
export default function () { ... }
export default class { .. }

// 各エクスポートは前のエクスポートを上書きします
</pre>

<p>名前付きエクスポートは、さまざまな値をエクスポートするのに役立ちます。インポートするときは、対応するオブジェクトと同じ名前を使用しなければなりません。</p>

<p>一方、デフォルトエクスポートは以下のように任意の名前を使用できます。</p>

<pre class="brush: js notranslate">// ファイル test.js
let k; export default k = 12;
</pre>

<pre class="brush: js notranslate">// 他のファイル
import m from './test'; // k がデフォルトエクスポートなので、インポートする k の代わりに m を使用することができる点に注意してください
console.log(m);        // log 12 になる
</pre>

<p>名前の競合を防ぐために、名前付きエクスポートの名前を変更することもできます。</p>

<pre class="brush: js notranslate">export { <var>myFunction</var> as <var>function1</var>,<var>
         myVariable</var> as variable };</pre>

<h3 id="Re-exporting_Aggregating" name="Re-exporting_Aggregating">再エクスポート / 集約</h3>

<p>また、親モジュール内の異なるモジュールから「インポート/エクスポート」して、そのモジュールからインポートできるようにすることも可能です。言い換えれば、様々なモジュールからの様々なエクスポートを集約した 1 つのモジュールを作成することができます。</p>

<p>これは "export from" 構文で実現できます。</p>

<pre class="brush: js notranslate">export { default as function1,
         function2 } from 'bar.js';
</pre>

<p>これは、インポートとエクスポートの組み合わせに相当します。</p>

<pre class="brush: js notranslate">import { default as function1,
         function2 } from 'bar.js';
export { function1, function2 };
</pre>

<p>現在のモジュール内で <code>function1</code> と <code>function2</code> が利用できない場合。</p>

<div class="blockIndicator note">
<p><strong>メモ:</strong> 以下は、インポートに相当するにもかかわらず、構文的に無効です。</p>
</div>

<pre class="brush: js notranslate">import DefaultExport from 'bar.js'; // 有効
</pre>

<pre class="brush: js notranslate">export DefaultExport from 'bar.js'; // 無効</pre>

<p>これを行う正しい方法は、エクスポートの名前を変更することです。</p>

<pre class="brush: js notranslate">export { default as DefaultExport } from 'bar.js';
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_named_exports" name="Using_named_exports">名前付きエクスポートの使用</h3>

<p><code>my-module.js</code> モジュールの中で、以下のコードを含めることができます。</p>

<pre class="brush: js notranslate">// "my-module.js" モジュール
function cube(x) {
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

var graph = {
  options: {
      color:'white',
      thickness:'2px'
  },
  draw: function() {
      console.log('From graph draw function');
  }
}

export { cube, foo, graph };
</pre>

<p>HTML ページの中に含まれる最上位モジュールの中では、次のようにすることができます。</p>

<pre class="brush: js notranslate">import { cube, foo, graph } from './my-module.js';

graph.options = {
    color:'blue',
    thickness:'3px'
};

graph.draw();
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888</pre>

<p>以下の点に注意することが重要です。</p>

<ul>
 <li>このスクリプトを HTML の {{htmlelement("script")}} 要素で type="module" を指定したものに入れる必要があり、そうすれば適切にモジュールとして認識され、扱われます。</li>
 <li><code>file://</code> の URL で JavaScript モジュールを実行することはできません。— <a href="/ja/docs/Web/HTTP/CORS">CORS</a> エラーになります。HTTP サーバーを通して実行する必要があります。</li>
</ul>

<h3 id="Using_the_default_export" name="Using_the_default_export">デフォルトエクスポートの使用</h3>

<p>値をひとつエクスポートしたい、あるいはモジュールでフォールバック先の値を持ちたい場合は、デフォルトエクスポートを使用するとよいでしょう。</p>

<pre class="brush: js notranslate">// module "my-module.js"

export default function cube(x) {
  return x * x * x;
}
</pre>

<p>別のスクリプトからの、デフォルトエクスポートのインポートは簡単です。</p>

<pre class="brush: js notranslate">import cube from './my-module.js';
console.log(cube(3)); // 27
</pre>

<h3 id="Using_export_from" name="Using_export_from">export from の使用</h3>

<p>以下のような階層がある場合を例に考えてみましょう。</p>

<ul>
 <li><code>childModule1.js</code>: <code>myFunction</code> および <code>myVariable</code> をエクスポート</li>
 <li><code>childModule2.js</code>: <code>myClass</code> をエクスポート</li>
 <li><code>parentModule.js</code>: 集約元として動作する (他には何もしない)</li>
 <li>最上位モジュール: <code>parentModule.js</code> のエクスポートを利用する</li>
</ul>

<p>コードスニペットを使うとこのような感じになります。</p>

<pre class="brush: js notranslate">// childModule1.js
let myFunction = ...; // myFunction に役立つものを割り当てる
let myVariable = ...; // myVariablemy に役立つものを割り当てる
export {myFunction, myVariable};
</pre>

<pre class="brush: js notranslate">// childModule2.js
let myClass = ...; // myClass に役立つものを代入する
export myClass;
</pre>

<pre class="brush: js notranslate">// parentModule.js
// childModule1 と childModule2 からのエクスポートを
// 集約して再エクスポートする
export { myFunction, myVariable } from 'childModule1.js';
export { myClass } from 'childModule2.js';
</pre>

<pre class="brush: js notranslate">// 最上位モジュール
// parentModule にモジュールが集約しているので、
// 単一のモジュールからエクスポートを利用できます。
import { myFunction, myVariable, myClass } from 'parentModule.js'</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-exports', 'Exports')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.statements.export")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Statements/import", "import")}}</li>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Modules">JavaScript モジュール</a></li>
 <li><a href="https://hacks.mozilla.org/2015/08/es6-in-depth-modules/">ES6 in Depth: Modules</a> Jason Orendorff のブログ記事</li>
 <li><a href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/">ES modules: A cartoon deep-dive</a> Lin Clark のブログ記事</li>
 <li><a href="http://exploringjs.com/es6/ch_modules.html">Axel Rauschmayer's book: "Exploring JS: Modules"</a></li>
</ul>
