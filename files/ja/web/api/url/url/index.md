---
title: URL()
slug: Web/API/URL/URL
tags:
  - API
  - Constructor
  - Reference
  - URL
  - URL API
translation_of: Web/API/URL/URL
---
<div>{{APIRef("URL API")}}</div>

<p><span class="seoSummary"><strong><code>URL()</code></strong> コンストラクターは、パラメーターによって定義された URL を表す、新しく生成された {{domxref("URL")}} オブジェクトを返します。</span></p>

<p>与えられたベース URL または結果の URL が有効な URL でない場合、JavaScript の {{jsxref("TypeError")}} 例外がスローされます。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>url</em> = new URL(<em>url</em>, [<em>base</em>])
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>url</code></dt>
 <dd>絶対 URL または相対 URL を表す {{domxref("USVString")}}。<code>url</code> が相対 URL の場合、<code>base</code> は必須であり、ベース URL として使用されます。<code>url</code> が絶対 URL の場合、指定された <code>base</code> は無視されます。</dd>
 <dt><code>base</code><em> </em>{{optional_inline}}</dt>
 <dd><code>url</code> が相対 URL の場合に使用するベース URL を表す {{domxref("USVString")}}。 指定しない場合のデフォルトは <code>''</code> です。</dd>
</dl>

<div class="note">
<p><strong>注</strong>: 既存の {{domxref("URL")}} オブジェクトを <code>base</code> に使用することも可能で、オブジェクトの {{domxref("URL.href","href")}} プロパティにそれ自体を文字列化します。</p>
</div>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">例外</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("TypeError")}}</td>
   <td><code>url</code> (絶対 URL の場合) または <code>base</code> + <code>url</code> (相対 URL の場合) が、有効な URL ではありません。</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">// ベース URL
var m = 'https://developer.mozilla.org';
var a = new URL("/", m);                                // =&gt; 'https://developer.mozilla.org/'
var b = new URL(m);                                     // =&gt; 'https://developer.mozilla.org/'

        new URL('en-US/docs', b);                      // =&gt; 'https://developer.mozilla.org/en-US/docs'
var d = new URL('/en-US/docs', b);                     // =&gt; 'https://developer.mozilla.org/en-US/docs'
        new URL('/en-US/docs', d);                     // =&gt; 'https://developer.mozilla.org/en-US/docs'
        new URL('/en-US/docs', a);                     // =&gt; 'https://developer.mozilla.org/en-US/docs'

        new URL('/en-US/docs', "https://developer.mozilla.org/fr-FR/toto");
                                                       // =&gt; 'https://developer.mozilla.org/en-US/docs'

        new URL('/en-US/docs', '');                    // '' は有効な URL ではないため、TypeError 例外が発生します
        new URL('/en-US/docs');                        // '/en-US/docs' は有効な URL ではないため、TypeError 例外が発生します
        new URL('http://www.example.com', );           // =&gt; 'http://www.example.com/'
        new URL('http://www.example.com', b);          // =&gt; 'http://www.example.com/'

        new URL("//foo.com", "https://example.com")    // =&gt; 'https://foo.com' (相対 URL を参照)
</pre>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('URL', '#constructors', 'URL.URL()')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.URL.URL")}}</p>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li>所属しているインターフェース: {{domxref("URL")}}。</li>
</ul>
