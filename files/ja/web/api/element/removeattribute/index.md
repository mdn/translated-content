---
title: Element.removeAttribute()
slug: Web/API/Element/removeAttribute
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
  - remove
  - removeAttribute
  - メソッド
translation_of: Web/API/Element/removeAttribute
---
<div>{{ APIRef("DOM") }}</div>

<p><span class="seoSummary">{{domxref("Element")}} の <strong><code>removeAttribute()</code></strong> メソッドは、指定された名前の属性を要素から削除します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>element</em>.removeAttribute(<em>attrName</em>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code><var>attrName</var></code></dt>
 <dd>{{domxref("DOMString")}} で、要素から削除する属性の名前を指定します。指定された属性が存在しない場合、 <code>removeAttribute()</code> はエラーを発生させずに戻ります。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>undefined</code> です。</p>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p>属性の値を直接、または {{domxref("Element.setAttribute", "setAttribute()")}} を使用して <code>null</code> に設定するのではなく、 <code>removeAttribute()</code> を使用してください。多くの属性は <code>null</code> に設定しても、期待通りの動作をしません。</p>

<p>{{ DOMAttributeMethods() }}</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">// Given: &lt;div id="div1" align="left" width="200px"&gt;
document.getElementById("div1").removeAttribute("align");
// Now: &lt;div id="div1" width="200px"&gt;
</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-element-removeattribute', 'Element" removeAttribute')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.removeAttribute")}}</p>
