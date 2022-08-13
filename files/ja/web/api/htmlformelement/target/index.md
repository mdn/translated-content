---
title: HTMLFormElement.target
slug: Web/API/HTMLFormElement/target
tags:
  - Reference
  - form
translation_of: Web/API/HTMLFormElement/target
---
<h2 id="Summary" name="Summary">概要</h2>
<p>フォームのアクションの対象を取得 / 設定します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>string</var> = form.target // 取得

form.target = <var>string</var> // 設定</pre>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">myForm.target = document.frames[1].name;
// フレームセット中の 2 番目のフレームを myForm の操作対象に設定
</pre>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
  <li><a href="http://www.w3.org/TR/html5/association-of-controls-and-forms.html#dom-fs-method">HTML 5, Section 4.10.19.6, Form submission</a></li>
  <li><a href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-6512890">DOM Level 2 HTML: target</a></li>
</ul>
