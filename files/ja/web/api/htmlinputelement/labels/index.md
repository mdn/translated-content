---
title: HTMLInputElement.labels
slug: Web/API/HTMLInputElement/labels
tags:
- API
- HTML DOM
- HTMLInputElement
- Property
- Reference
translation_of: Web/API/HTMLInputElement/labels
---
<div>{{APIRef("DOM")}}</div>
<p><code><strong>HTMLInputElement.labels</strong></code> は読み取り専用プロパティで、 {{HTMLElement("input")}} 要素に関連付けられた {{HTMLElement("label")}} 要素の {{domxref("NodeList")}} を返します。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">var <var>labelElements</var> = <var>input</var>.labels;
</pre>

<h3 id="Return_value">返値</h3>

<p>{{domxref("NodeList")}} で、その <code>&lt;input&gt;</code> 要素に関連付けられた <code>&lt;label&gt;</code> 要素が入ったものです。</p>

<h2 id="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;label id="label1" for="test"&gt;Label 1&lt;/label&gt;
&lt;input id="test"/&gt;
&lt;label id="label2" for="test"&gt;Label 2&lt;/label&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">window.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("test");
  for(var i = 0; i &lt; input.labels.length; i++) {
    console.log(input.labels[i].textContent); // "Label 1" and "Label 2"
  }
});</pre>

<p>{{EmbedLiveSample("Example", "100%", 30)}}</p>

<h2 id="Specifications">仕様書</h2>

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
      <td>{{SpecName("HTML WHATWG", "forms.html#dom-lfe-labels", "labels")}}</td>
      <td>{{Spec2("HTML WHATWG")}}</td>
      <td>変更なし</td>
    </tr>
    <tr>
      <td>{{SpecName("HTML5 W3C", "forms.html#dom-lfe-labels", "labels")}}</td>
      <td>{{Spec2("HTML5 W3C")}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.HTMLInputElement.labels")}}</p>
