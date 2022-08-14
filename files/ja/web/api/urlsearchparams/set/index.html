---
title: URLSearchParams.set()
slug: Web/API/URLSearchParams/set
tags:
  - API
  - Method
  - URL API
  - URLSearchParams
  - set
translation_of: Web/API/URLSearchParams/set
---
<p>{{ApiRef("URL API")}}</p>

<p>{{domxref("URLSearchParams")}} インターフェイスの <strong><code>set()</code></strong> メソッドは、指定された検索パラメーターに関連付けられた値を指定された値に設定します。 一致する値が複数ある場合、このメソッドは他の値を削除します。 検索パラメーターが存在しない場合、このメソッドはそれを作成します。</p>

<p>{{availableinworkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">URLSearchParams.set(<em>name</em>, <em>value</em>)</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt>name</dt>
 <dd>設定するパラメーターの名前。</dd>
 <dt>value </dt>
 <dd>設定するパラメーターの値。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>無効。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>次の簡単な例から始めましょう。</p>

<pre class="brush: js">let url = new URL('https://example.com?foo=1&amp;bar=2');
let params = new URLSearchParams(url.search.slice(1));

// 3番目のパラメーターを追加します。
params.set('baz', 3);
</pre>

<p>以下は、{{domxref("URL")}} を作成し、いくつかの検索パラメーターを設定する方法を示す実際の例です。</p>

<p><a href="/ja/docs/Tools/Scratchpad">スクラッチパッド</a>に例をコピーして貼り付けることができます。</p>

<ul>
 <li>41行目：コンソールへの (debug による) 検索パラメーターのダンプを停止するにはコメントにします。</li>
 <li>43行目：生成されたオブジェクトとその文字列表現をコンソールに (info で) ダンプします。</li>
 <li>44行目：生成された URL で新しいウィンドウ/タブを自動的に開こうとします（コメントが解除されている場合）。</li>
</ul>

<pre class="brush: js;highlight:[41,43,44]" id="genurl">'use strict'

function genURL(rExp, aText, bDebug=false){
	let theURL

	theURL= new URL('https://regexr.com')
	theURL.searchParams.set( 'expression', rExp.toString() )
	theURL.searchParams.set( 'tool', 'replace' )
	theURL.searchParams.set( 'input', '\u2911\u20dc' )// ⤑⃜
	theURL.searchParams.set( 'text', aText.join('\n') )
	if( bDebug ){
		// キー/値のペアを表示
		for(var pair of theURL.searchParams.entries()) {
			console.debug(pair[0] + ' = \'' + pair[1] + '\'');
		}
		console.debug(theURL)
	}
	return theURL
}
var url = genURL(
	/(^\s*\/\/|\s*[^:]\/\/).*\s*$|\s*\/\*(.|\n)+?\*\/\s*$/gm	// 単一行/複数行のコメント
	// /(^\s*\/\/.*|\s*[^:]\/\/.*)/g								// 単一行のコメント
	,[
		"これらは動作します:",
		"",
		"// eslint-disable-next-line no-unused-vars",
		"lockPref(	'keyword.URL',\t\t'https://duckduckgo.com/html/?q=!+'	)\t//      test",
		"/*",
		"	* bla bla    ",
		"*/",
		"",
		"/* bla bla */",
		"",
		"// bla bla ",
		"",
		"これらは動作しません:",
		"console.log(\"http://foo.co.uk/\")",
		"var url = \"http://regexr.com/foo.html?q=bar\"",
		"alert(\"https://mediatemple.net\")",
	]
	, true
)
console.info( url, url.toString() )
// window.open( url, 'regex_site' )
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('URL', '#dom-urlsearchparams-set', "set()")}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>


<p>{{Compat("api.URLSearchParams.set")}}</p>
</div>
