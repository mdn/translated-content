---
title: HTMLElement.click()
slug: Web/API/HTMLElement/click
tags:
  - API
  - HTML DOM
  - HTMLElement
  - Method
  - Reference
translation_of: Web/API/HTMLElement/click
---
<div>
<div>{{ APIRef("HTML DOM") }}</div>
</div>

<p><span class="seoSummary"><code><strong>HTMLElement.click()</strong></code> メソッドは、要素のマウスクリックをシミュレートします。</span></p>

<p>サポートしている要素（{{HTMLElement("input")}} など）で <code>click()</code> を使用すると、要素の <code>click</code> イベントが発生します。 このイベントは、ドキュメントツリー (またはイベントチェーン) の上位の要素にバブルアップし、<code>click</code> イベントを発生させます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><em>element</em>.click()</pre>

<h2 id="Example" name="Example">例</h2>

<p>チェックボックスの上にマウスポインタを移動させたときのマウスクリックをシミュレートします。</p>

<h3 id="HTML" name="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;input type="checkbox" id="myCheck" onmouseover="myFunction()" onclick="alert('click イベントが発生しました')"&gt;
&lt;/form&gt;</pre>

<h3 id="JavaScript" name="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">// マウスオーバーで、myFunction を実行します
function myFunction() {
  document.getElementById("myCheck").click();
}
</pre>

<h2 id="Specification" name="Specification">仕様</h2>

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
   <td>{{SpecName('HTML WHATWG', 'interaction.html#dom-click')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-2651361')}}</td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザの互換性</h2>

<p>{{Compat("api.HTMLElement.click")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベントハンドラ
  <ul>
   <li>{{domxref("GlobalEventHandlers.onclick")}}</li>
   <li>{{domxref("GlobalEventHandlers.ondblclick")}}</li>
   <li>{{domxref("GlobalEventHandlers.onauxclick")}}</li>
  </ul>
 </li>
</ul>

<div id="eJOY__extension_root"></div>
