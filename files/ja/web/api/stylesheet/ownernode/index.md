---
title: StyleSheet.ownerNode
slug: Web/API/StyleSheet/ownerNode
tags:
  - API
  - CSSOM
  - Property
  - Reference
translation_of: Web/API/StyleSheet/ownerNode
---
<div>{{APIRef("CSSOM")}}</div>

<h2 id="Summary" name="Summary">概要</h2>

<p><strong>ownerNode</strong> は、このスタイルシートを document と関連付けているノードを返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>objRef</em> = stylesheet.ownerNode
</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="eval">&lt;html&gt;
 &lt;head&gt;
  &lt;link rel="StyleSheet" href="example.css" type="text/css" /&gt;
  &lt;script&gt;
   function stilo() {
    alert(document.styleSheets[0].ownerNode);
   }
  &lt;/script&gt;
 &lt;/head&gt;
 &lt;body&gt;
   &lt;button onclick="stilo()"&gt;ss&lt;/button&gt;
 &lt;/body&gt;
&lt;/html&gt;
// displays "object HTMLLinkElement"
</pre>

<h2 id="Notes" name="Notes">補記</h2>

<p>HTML の場合、<strong>ownerNode</strong> は、相当する {{HTMLElement("link")}} 要素または {{HTMLElement("style")}}  要素になるでしょう。XML の場合、リンク処理命令になるでしょう。他のスタイルシートに含まれるスタイルシートの場合、この属性の値は <code>NULL</code> になります。</p>

<h2 id="Specification" name="Specification">仕様書</h2>

<p>DOM Level 2 Styles - STYLESHEET</p>
