---
title: HTMLInputElement.select()
slug: Web/API/HTMLInputElement/select
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - Method
  - Reference
translation_of: Web/API/HTMLInputElement/select
---
<div>{{ APIRef("HTML DOM") }}</div>

<p><strong><code>HTMLInputElement.select()</code></strong> メソッドは、{{HTMLElement("textarea")}} 要素またはテキストフィールドを含む {{HTMLElement("input")}} 要素内のすべてのテキストを選択します。</p>

<h2 id="シンタックス">シンタックス</h2>

<pre class="syntaxbox notranslate"><em>element</em>.select();</pre>

<h2 id="例">例</h2>

<p>この例のボタンをクリックすると、<code>&lt;input&gt;</code> 要素内のすべてのテキストが選択されます。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;input type="text" id="text-box" size="20" value="Hello world!"&gt;
&lt;button onclick="selectText()"&gt;Select text&lt;/button&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">function selectText() {
  const input = document.getElementById('text-box');
  input.focus();
  input.select();
}</pre>

<h3 id="結果">結果</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="メモ">メモ</h2>

<p><code>element.select()</code> を呼んだからといって必ずしも入力がフォーカスされるわけではないので、{{domxref("HTMLElement.focus()")}} で使うことが多いです。</p>

<p>これがサポートされていないブラウザでは、パラメータ 0 と入力値の長さを指定して <a href="/ja/docs/Web/API/HTMLInputElement/setSelectionRange">HTMLInputElement.setSelectionRange()</a> を呼び出すことで置き換えることができます。</p>

<pre class="brush: html notranslate">&lt;input onClick="this.select();" value="Sample Text" /&gt;
&lt;!-- equivalent to --&gt;
&lt;input onClick="this.setSelectionRange(0, this.value.length);" value="Sample Text" /&gt;
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'forms.html#dom-textarea/input-select', 'select')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.HTMLInputElement.select")}}</p>

<h2 id="あわせて参照">あわせて参照</h2>

<ul>
 <li>{{ HTMLElement("input") }}</li>
 <li>{{ HTMLElement("textarea") }}</li>
 <li>{{ domxref("HTMLInputElement") }}</li>
 <li>{{ domxref("HTMLInputElement.setSelectionRange") }}</li>
</ul>
