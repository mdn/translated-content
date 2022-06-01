---
title: Document.selectedStyleSheetSet
slug: Web/API/Document/selectedStyleSheetSet
tags:
  - API
  - CSSOM
  - DOM
  - Property
  - Reference
  - Stylesheets
translation_of: Web/API/Document/selectedStyleSheetSet
---
<div>{{APIRef("DOM")}}{{gecko_minversion_header("1.9")}}{{obsolete_header}}</div>

<p><strong><code>selectedStyleSheetSet</code></strong> プロパティは、<span class="seosummary">現在使用中のスタイルシートセットの名前を示します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>currentStyleSheetSet</var> = <var>document</var>.selectedStyleSheetSet;

<var>document</var>.selectedStyleSheet = <var>newStyleSheetSet</var>;
</pre>

<p>返値である <code>currentStyleSheetSet</code> は、現在使用中のスタイルシートセットの名前を示します。このプロパティを使用して、現在のスタイルシートセットを設定することもできます。</p>

<p>このプロパティに値を設定することは、 {{domxref("document.enableStyleSheetsForSet()")}} を <code>currentStyleSheetSet</code> の値で呼び出し、 <code>lastStyleSheetSet</code> の値をその値に設定することに等価です。</p>

<div class="note"><strong>注:</strong> この属性の値は生きています。スタイルシートの <code>disabled</code> 属性を変更すると、この属性の値に影響します。</div>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">console.log('Current style sheet set: ' + document.selectedStyleSheetSet);

document.selectedStyleSheetSet = 'Some other style sheet';
</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.selectedStyleSheetSet")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("document.lastStyleSheetSet")}}</li>
 <li>{{domxref("document.preferredStyleSheetSet")}}</li>
 <li>{{domxref("document.styleSheetSets")}}</li>
 <li>{{domxref("document.enableStyleSheetsForSet()")}}</li>
</ul>
