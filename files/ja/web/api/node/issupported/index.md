---
title: Node.isSupported
slug: Web/API/Node/isSupported
tags:
  - DOM
  - DOM Element Methods
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/Node/isSupported
---
<div>
 {{ApiRef}}{{obsolete_header("22")}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p>指定された機能が DOM 実装に含まれており、このノードでサポートされているかどうかをテストします。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox">element.isSupported(feature, version)</pre>
<dl>
 <dt>
  <code>feature</code></dt>
 <dd>
  テストする機能の名前。<a href="/ja/docs/DOM/document.implementation" title="DOM/document.implementation">DOMImplementation</a> の <code>hasFeature</code> メソッドに渡される名前と同じです。コア DOM 仕様に定義された使用可能な値は、DOM Level 2 の <a href="http://www.w3.org/TR/DOM-Level-2-Core/introduction.html#ID-Conformance">Conformance セクション</a> にリストがあります。</dd>
 <dt>
  <code>version</code></dt>
 <dd>
  テストする機能のバージョン番号。DOM Level 2, version 1 では、この文字列は <code>2.0</code> になります。バージョンが指定されていなかったり、対象の機能がどのバージョンでもサポートされている場合は <code>true</code> を返します。</dd>
</dl>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">&lt;div id="doc"&gt;
&lt;/div&gt;

&lt;script&gt;
 // 要素を取得し、その要素が DOM2 HTML モジュールをサポートしているかどうかを確認します
 var main = document.getElementById('doc');
 var output = main.isSupported('HTML', '2.0');
&lt;/script&gt;
</pre>
<h2 id="Specification" name="Specification">仕様</h2>
<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-Node-supports">DOM Level 2 Core: isSupported</a></li>
</ul>
<h2 id="Gecko-specific_notes" name="Gecko-specific_notes">Gecko に関する注記</h2>
<ul>
 <li>Gecko 19.0 {{geckoRelease("19.0")}} 以降では、このメソッドは常に <code>true</code> を返します。また、このメソッドは Gecko 22.0 {{geckoRelease("22.0")}} で削除されています。</li>
</ul>
