---
title: CSSRule.cssText
slug: Web/API/CSSRule/cssText
tags:
  - API
  - CSSOM
  - NeedsCompatTable
  - Property
  - Referrence
translation_of: Web/API/CSSRule/cssText
---
<p>要素スタイル {{domxref("CSSStyleDeclaration.cssText")}} と混同しないでください。</p>

<div>{{APIRef("CSSOM") }}</div>

<h2 id="Summary" name="Summary">概要</h2>

<p><strong>cssText</strong> は、{{domxref("CSSStyleSheet")}} スタイル規則の実際のテキストを返します。</p>

<p>補足: <a href="https://www.w3.org/TR/cssom-1/#changes-from-5-december-2013">仕様に明記</a> されたとおり、<em>機能</em> を <strong>暗黙的に</strong> 変更するだけで、直接設定することはできません。これに設定しようとしても、警告もエラーもなく、絶対に<strong>何も起こりません</strong>。さらに、設定可能なサブプロパティもありません。そのため、これを変更するには、スタイルシートの {{domxref("CSSRuleList","cssRules")}}[<em>index</em>] プロパティおよび {{domxref("CSSStyleRule.selectorText",".selectorText")}}、{{domxref("CSSStyleRule.style",".style")}} (または、そのサブプロパティ) を使用してください。詳細は、<a href="/ja/docs/DOM/Using_dynamic_styling_information">動的なスタイル情報の利用</a> を参照してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>string</em> = cssRule.cssText</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:html;">&lt;style&gt;
body { background-color: darkblue; }
&lt;/style&gt;
&lt;script&gt;
  var stylesheet = document.styleSheets[0];
  alert(stylesheet.cssRules[0].cssText); // body { background-color: darkblue; }
&lt;/script&gt;

</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSRule">DOM Level 2 Style CSS - Interface CSSStyleRule (introduced in DOM Level 2)</a></li>
</ul>
