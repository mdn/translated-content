---
title: HTMLElement.blur()
slug: Web/API/HTMLElement/blur
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Method
  - Reference
translation_of: Web/API/HTMLElement/blur
original_slug: Web/API/HTMLElement/blur
---
<div>{{ APIRef("HTML DOM") }}</div>

<p><span class="seoSummary"><code><strong>HTMLElement.blur()</strong></code> メソッドは、現在の要素からキーボードフォーカスを取り除きます。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>element</em>.blur();</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Remove_focus_from_a_text_input" name="Remove_focus_from_a_text_input">テキスト入力からフォーカスを取り除く</h3>

<h4 id="HTML" name="HTML">HTML</h4>

<pre class="brush: html">&lt;input type="text" id="myText" value="サンプルテキスト"&gt;
&lt;br&gt;&lt;br&gt;
&lt;button type="button" onclick="focusInput()"&gt;クリックするとフォーカスを得ます&lt;/button&gt;
&lt;button type="button" onclick="blurInput()"&gt;クリックするとフォーカスを失います&lt;/button&gt;</pre>

<h4 id="JavaScript" name="JavaScript">JavaScript</h4>

<pre class="brush: js">function focusInput() {
  document.getElementById('myText').focus();
}
function blurInput() {
  document.getElementById('myText').blur();
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Remove_focus_from_a_text_input') }}</p>

<h2 id="Specification" name="Specification">仕様</h2>

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
   <td>{{SpecName('HTML WHATWG', 'editing.html#dom-blur', 'blur')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', 'editing.html#blur()-0', 'blur')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'editing.html#dom-blur', 'blur')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-28216144', 'blur')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLElement.blur")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>DOM メソッドの {{domxref("HTMLElement.focus()")}}</li>
</ul>
