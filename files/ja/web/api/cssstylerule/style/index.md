---
title: CSSStyleRule.style
slug: Web/API/CSSStyleRule/style
tags:
  - API
  - CSSOM
  - Property
  - Reference
translation_of: Web/API/CSSStyleRule/style
---
<p>{{ APIRef("CSSOM") }}</p>

<h2 id="Summary" name="Summary">概要</h2>

<p><strong><code>CSSRule.style</code></strong> プロパティは、{{DOMXref("CSSRule")}} の <a class="external" href="http://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block">宣言ブロック</a> のための {{domxref("CSSStyleDeclaration")}} インターフェイスです。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="eval"><em>styleObj</em> = <em>cssRule</em>.style</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">function stilo() {
  alert(document.styleSheets[0].cssRules[0].style.cssText);
}
// displays "background-color: gray;"
</pre>

<h2 id="Notes" name="Notes">補記</h2>

<p>宣言ブロックは、波括弧内に現れるスタイル規則の部分であり、(波括弧の前に書かれるセレクターのための) 実際のスタイル定義を提供します 。</p>

<h2 id="Specification" name="Specification">仕様書</h2>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleRule-style">DOM Level 2 CSS: styleCSSR</a></p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/CSS/CSS_Reference" title="/DOM/CSS">DOM CSS プロパティ</a></li>
</ul>
