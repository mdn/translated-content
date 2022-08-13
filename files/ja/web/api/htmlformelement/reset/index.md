---
title: HTMLFormElement.reset
slug: Web/API/HTMLFormElement/reset
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
  - form
  - form Methods
translation_of: Web/API/HTMLFormElement/reset
---
<h2 id="Summary" name="Summary">概要</h2>
<p><code>reset</code> はフォームを初期状態にリセットします。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>HTMLFormElement</var>.reset()
</pre>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">document.forms["myform"].reset();
</pre>
<h2 id="Notes" name="Notes">注記</h2>
<p>このメソッドは、フォームのリセットボタン押下と同様の効果となります。</p>
<p>もしフォームコントロール（※リセットボタンなど）の id 属性か name 属性の値に "<code>reset</code>" が指定されている場合、フォームの <code>reset</code> メソッドをマスキングしてしまうという点に注意して下さい。</p>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
  <li><a href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-76767677">DOM Level 2 HTML: reset</a></li>
</ul>
