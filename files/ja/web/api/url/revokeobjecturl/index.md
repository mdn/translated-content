---
title: URL.revokeObjectURL()
slug: Web/API/URL/revokeObjectURL
tags:
  - API
  - DOM
  - Method
  - URL
  - URL API
  - revokeObjectURL
translation_of: Web/API/URL/revokeObjectURL
---
<div>{{ApiRef("URL")}}</div>

<p><span class="seoSummary"><strong><code>URL.revokeObjectURL()</code></strong> 静的メソッドは、以前に {{domxref("URL.createObjectURL()") }} を呼び出して生成された既存のオブジェクト URL を解放します。</span> オブジェクト URL を使い終わったら、このメソッドを呼び出して、ファイルへの参照をこれ以上保持しないようにブラウザーに知らせます。</p>

<p>{{AvailableInWorkers}}</p>

<div class="note">
<p><strong>注</strong>: このメソッドは、{{domxref("Blob")}} インターフェイスのライフサイクルの問題とリークの可能性があるため、サービスワーカーからは利用できません。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>window</em>.URL.revokeObjectURL(<em>objectURL</em>);
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>objectURL </code></dt>
 <dd>以前に {{domxref("URL.createObjectURL", "createObjectURL()") }} を呼び出して生成されたオブジェクト URL を表す {{domxref("DOMString")}}。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>無効。</p>

<ul>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<p><a href="/ja/docs/Web/API/File/Using_files_from_web_applications#例_オブジェクト_url_で画像を表示">オブジェクト URL で画像を表示</a>を参照してください。</p>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('File API', '#dfn-revokeObjectURL', 'revokeObjectURL()')}}</td>
   <td>{{Spec2('File API')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.URL.revokeObjectURL")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/File/Using_files_from_web_applications">Web アプリケーションからファイルを扱う</a></li>
 <li><a href="/ja/docs/Web/API/File/Using_files_from_web_applications#例_オブジェクト_url_で画像を表示">オブジェクト URL で画像を表示</a></li>
 <li>{{domxref("URL.createObjectURL()") }}</li>
</ul>
