---
title: Intl.Locale() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
tags:
  - Constructor
  - Intl
  - JavaScript
  - Locale
  - Reference
  - コンストラクター
  - ロケール
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>Intl.Locale</code></strong> コンストラクターは、 Intl オブジェクトの標準組み込みプロパティで、 Unicode ロケール識別子を表します。</span></p>

<div>{{EmbedInteractiveExample("pages/js/intl-locale.html")}}</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">new Intl.Locale(<var>tag</var> [, <var>options</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>tag</var></code></dt>
 <dd>Unicode ロケール識別子の文字列です。</dd>
 <dt><code><var>options</var></code></dt>
 <dd>ロケールの構成を含むオブジェクトです。キーは Unicode ロケールタグで、値は有効な Unicode タグ値です。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-intl-locale-constructor')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Intl.Locale.Locale")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://github.com/zbraniecki/Intl.js/tree/intllocale">The Intl.Locale Polyfill</a></li>
 <li><a href="https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers">Unicode locale identifiers spec</a></li>
</ul>
