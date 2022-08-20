---
title: HTMLFormElement.enctype
slug: Web/API/HTMLFormElement/enctype
tags:
  - Reference
  - form
translation_of: Web/API/HTMLFormElement/enctype
---
<h2 id="Summary" name="Summary">概要</h2>
<p><code>enctype</code> は form 要素のコンテンツタイプの取得 / 設定に用います。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>string</var> = form.enctype // 取得

form.enctype = <var>string</var> // 設定
</pre>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">var firstForm = document.getElementsByTagName("form")[0]; // 文書中の最初の form 要素を取得

firstForm.enctype = "application/x-www-form-urlencoded"; // 設定
alert( firstForm.enctype ); // 確認
</pre>
<h2 id="Notes" name="Notes">注記</h2>
<p>エンコーディングタイプは一般的に "application/x-www-form-urlencoded" となります。</p>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
  <li><a href="http://www.w3.org/TR/html5/association-of-controls-and-forms.html#dom-fs-method">HTML 5, Section 4.10.19.6, Form submission</a></li>
  <li><a href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-84227810">DOM Level 2 HTML: enctype</a></li>
</ul>
