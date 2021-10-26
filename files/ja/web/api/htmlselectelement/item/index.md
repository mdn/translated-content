---
title: HTMLSelectElement.item()
slug: Web/API/HTMLSelectElement/item
tags:
- API
- HTML DOM
- HTMLSelectElement
- Method
- Reference
translation_of: Web/API/HTMLSelectElement/item
---
<div>{{ APIRef("HTML DOM") }}</div>

<p><code><strong>HTMLSelectElement.item()</strong></code> メソッドは、選択肢のリスト内で引数で渡された位置にある {{domxref("HTMLOptionElement")}} に対応する {{domxref("Element")}} を返します。存在しない場合は <code>null</code> を返します。</p>

<p>JavaScript では、ブラケット構文に <code>unsigned long</code> の値を入れた <code><em>selectElt</em>[<em>index</em>]</code> の形が、 <code><em>selectElt</em></code><code>.namedItem(<em>index</em>)</code> と同等です。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">var <em>item</em> = <em>collection</em>.item(<em>index</em>);
var <em>item </em>=<em> collection</em>[<em>index</em>];
</pre>

<h3 id="Parameters">引数</h3>

<ul>
  <li><code>index</code> は <code>unsigned long</code> の値です。</li>
</ul>

<h3 id="Return_value">返値</h3>

<ul>
  <li><code>item</code> は {{domxref("HTMLOptionElement")}} です。</li>
</ul>

<h2 id="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;form&gt;
  &lt;select id="myFormControl"&gt;
    &lt;option id="o1"&gt;Opt 1&lt;/option&gt;
    &lt;option id="o2"&gt;Opt 2&lt;/option&gt;
  &lt;/select&gt;
&lt;/form&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush:css">// Returns the HTMLOptionElement representing #o2
elem1 = document.forms[0]['myFormControl'][1];
</pre>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">状態</th>
      <th scope="col">備考</th>
    </tr>
    <tr>
      <td>{{SpecName('HTML WHATWG', "#dom-select-item", "HTMLSelectElement.item()")}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td>最新のスナップショット、 {{SpecName('HTML5 W3C')}} から変更なし。</td>
    </tr>
    <tr>
      <td>{{SpecName('HTML5 W3C', "forms.html#dom-select-item",
        "HTMLSelectElement.item()")}}</td>
      <td>{{Spec2('HTML5 W3C')}}</td>
      <td>初回定義、 {{SpecName('HTML WHATWG')}} のスナップショット。</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.HTMLSelectElement.item")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>実装先の {{domxref("HTMLSelectElement")}}</li>
</ul>
