---
title: Node.normalize
slug: Web/API/Node/normalize
tags:
  - DOM
  - Gecko
  - Node
translation_of: Web/API/Node/normalize
---
<div>{{ApiRef}}</div>

<h2 id="Summary" name="Summary">概要</h2>

<p>指定ノードの空のノードを削除し、隣接するテキストノードをひとつに纏め、文書を「正規化 (normalize)」します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>element</em>.normalize();
</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:js;highlight:10;">var wrapper = document.createElement("div");

wrapper.appendChild( document.createTextNode("Part 1 ") );
wrapper.appendChild( document.createTextNode("Part 2 ") );

// wrapper.childNodes[0].textContent === "Part 1 "
// wrapper.childNodes[1].textContent === "Part 2 "
// この時点で、wrapper の 子ノード数は 2 です。 wrapper.childNodes.length === 2

wrapper.normalize(); // 正規化

// 正規化後の wrapper の子ノード数は 1 となっています。 wrapper.childNodes.length === 1
// 挿入処理の為に冗長化したノードはひとつに纏められています。 wrapper.childNodes[0].textContent === "Part 1 Part 2"
</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-normalize">DOM Level 2 Core: Node.normalize</a></li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Text.splitText"><code>Text.splitText</code></a></li>
</ul>
