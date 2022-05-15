---
title: CSSRule.parentStyleSheet
slug: Web/API/CSSRule/parentStyleSheet
tags:
  - API
  - CSSOM
  - NeedsCompatTable
  - Property
  - Reference
translation_of: Web/API/CSSRule/parentStyleSheet
---
<p>{{ APIRef("CSSOM") }}</p>

<p><strong>parentStyleSheet</strong> は、現在の規則を定義している stylesheet オブジェクトを返します。</p>

<h3 id="Syntax" name="Syntax">構文</h3>

<pre class="syntaxbox">var <em>stylesheet</em> = cssRule.parentStyleSheet</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<ul>
 <li><code>stylesheet</code> はスタイルシートオブジェクトです。</li>
</ul>

<h3 id="Example" name="Example">例</h3>

<pre class="eval">if ( bgRule.parentStyleSheet != mySheet ) {
   // alien style rule!
}
</pre>

<h3 id="Notes" name="Notes">補記</h3>

<p>stylesheet オブジェクトのインターフェイスについての情報は、<a href="/Gecko_DOM_Reference/event#DOM_styleSheet_Object">Gecko DOM Reference:event#DOM_styleSheet_Object</a> を参照してください。</p>

<h3 id="Specification" name="Specification">仕様書</h3>

<p>DOM Level 2 Style - cssRule</p>
