---
title: HTMLFormElement.submit
slug: Web/API/HTMLFormElement/submit
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLFormElement/submit
---
<div>
 {{ApiRef}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p><code>submit</code> はフォームを送信します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>HTMLFormElement</var>.submit();
</pre>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">document.forms["myform"].submit()
</pre>
<h2 id="Notes" name="Notes">注記</h2>
<p>このメソッドはフォームの送信ボタンをクリックするのと同じ動作をします。</p>

<p>Gecko ベースのアプリケーションからこのメソッドを呼び出すときに、フォームの <code>onsubmit</code> イベントハンドラ (例 : <code>onsubmit="return false;"</code>) はトリガされません。一般的に、ユーザエージェントによる呼び出しは保証されていません (※参照 : <a href="http://lists.w3.org/Archives/Public/www-dom/2012JanMar/0011.html">http://lists.w3.org/Archives/Public/www-dom/2012JanMar/0011.html</a>)</p>
<p>もしフォームコントロール (送信ボタン等) の <code>name</code> 属性か <code>id</code> 属性の属性値に "<code>submit</code>" が設定されていた場合、フォームの <code>submit</code> メソッドはマスキングされてしまいます。</p>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-76767676">DOM Level 2 HTML: submit</a></li>
</ul>
