---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
tags:
  - JavaScript
  - Language feature
  - Modules
  - Reference
  - Statement
  - import
  - import.meta
translation_of: Web/JavaScript/Reference/Statements/import.meta
original_slug: Web/JavaScript/Reference/Statements/import.meta
---
<div>{{JSSidebar("Statements")}}</div>

<p><strong><code>import.meta</code></strong> オブジェクトはコンテキスト固有のメタデータを JavaScript のモジュールに公開します。これには、モジュールの URL のようなモジュールに関する情報が含まれています。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">import.meta</pre>

<h2 id="Description" name="Description">説明</h2>

<p>構文は、<code>import</code> キーワードとドット、プロパティ名の <code>meta</code> で構成されています。通常、ドットの左側はプロパティアクセスが実行されるオブジェクトですが、ここでの <code>import</code> はオブジェクトではありません。</p>

<p><code>import.meta</code> オブジェクトは ECMAScript 実装によって生成され、プロトタイプは {{jsxref("null")}} です。オブジェクトは拡張でき、そのプロパティは書き込み、構成、列挙可能です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_import.meta" name="Using_import.meta">import.meta を使用する</h3>

<p><code>my-module.mjs</code> モジュールを指定します。</p>

<pre class="brush: html notranslate">&lt;script type="module" src="my-module.js"&gt;&lt;/script&gt;
</pre>

<p><code>import.meta</code> オブジェクトを使用してモジュールのメタ情報にアクセスできます。</p>

<pre class="brush: js; notranslate">console.log(import.meta); // { url: "file:///home/user/my-module.js" }</pre>

<p>モジュールのベース URL を示す <code>url</code> プロパティを持つオブジェクトを返します。これは、外部スクリプトの場合はスクリプトを取得した URL、インラインスクリプトの場合はそれを含むドキュメントのベース URL です。</p>

<p>これには、クエリパラメータまたはハッシュ（つまり、<code>?</code> または <code>#</code>）が含まれることに注意してください。</p>

<p>例えば、以下のような HTML で</p>

<pre class="brush: html notranslate">&lt;script type="module"&gt;
import './index.mjs?someURLInfo=5';
&lt;/script&gt;</pre>

<p>以下の JavaScript ファイルは、<code>someURLInfo</code> パラメータをログに記録します。</p>

<pre class="brush: js notranslate">// index.mjs
new URL(import.meta.url).searchParams.get('someURLInfo'); // 5</pre>

<p>ファイルが別のファイルをインポートする場合も同様です。</p>

<pre class="brush: js notranslate">// index.mjs
import './index2.mjs?someURLInfo=5';

// index2.mjs
new URL(import.meta.url).searchParams.get('someURLInfo'); // 5</pre>

<p>メモ: 後者の例のように Node.js はクエリパラメータ（またはハッシュ）を渡しますが、Node 14.1.0 以降、クエリパラメータを持つ URL を <code>node --experimental-modules index.mjs?someURLInfo=5</code> という形式で読み込むとエラーになることに注意してください（この文脈では URL ではなくファイルとして扱われます）。</p>

<p>このようなファイル固有の引数の受け渡しは、アプリケーション全体の <code>location.href</code>（HTML ファイルパスの後にクエリ文字列やハッシュを追加したもの [Node.js では <code>process.argv</code> を介して]）で使用されているものを補完する場合があります。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td><code><a href="https://tc39.es/proposal-import-meta/#prod-ImportMeta">import.meta</a></code> proposal</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "webappapis.html#hostgetimportmetaproperties", "import.meta")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("javascript.statements.import_meta")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{JSxRef("Statements/import", "import")}}</li>
 <li>{{JSxRef("Statements/export", "export")}}</li>
</ul>
