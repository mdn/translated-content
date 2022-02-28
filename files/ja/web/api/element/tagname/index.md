---
title: element.tagName
slug: Web/API/Element/tagName
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/Element/tagName
---
<div>
 {{ApiRef}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p>要素の名前を返します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>elementName</var> = element.tagName
</pre>
<ul>
 <li><code>elementName</code> : 現在の要素の名前を含む文字列</li>
</ul>
<h2 id="Notes" name="Notes">注記</h2>
<p>XML (および XHTML など XML ベースの言語) では、tagName は大文字・小文字が保たれます。HTML では、<code>tagName</code> は標準的な大文字で要素名を返します。 <code>tagName</code> の値は <a href="/ja/docs/Web/API/Node.nodeName">nodeName</a> の値と同じになります。</p>
<h2 id="Example" name="Example">例</h2>
<p>以下のようなマークアップを想定します。</p>
<pre class="brush:html">&lt;span id="born"&gt;When I was born...&lt;/span&gt;
</pre>
<p>上記 HTML に対し以下のスクリプトを実行した場合...</p>
<pre class="brush:js">var span = document.getElementById("born");

alert(span.tagName);
</pre>
<p>XHTML (および他の XML 形式) では、「span」という警告ダイアログが表示されます。HTML では、その代わりに「SPAN」と表示されます。</p>
<h2 id="Specifications" name="Specifications">仕様</h2>
<ul>
 <li><a href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-104682815">DOM Level 2 Core: tagName</a></li>
 <li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents">HTML 5: APIs in HTML documents</a></li>
</ul>
