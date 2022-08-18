---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/flags
---
<div>{{JSRef}}</div>

<p><strong><code>flags</code></strong> プロパティは、現在の正規表現オブジェクトの<a href="/ja/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags_2">フラグ</a>から成る文字列を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-flags.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>{{JS_Property_Attributes(0, 0, 1)}}</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>flags</code> プロパティのフラグはアルファベット順にソートされます(左から右へ 例えば、<code>"gimuy"</code>)。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_flags" name="Using_flags">flags の使用</h3>

<pre class="brush: js; notranslate">/foo/ig.flags;   // "gi"
/bar/myu.flags;  // "muy"
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<pre class="brush: js; notranslate">if (RegExp.prototype.flags === undefined) {
  Object.defineProperty(RegExp.prototype, 'flags', {
    configurable: true,
    get: function() {
      return this.toString().match(/[gimsuy]*$/)[0];
    }
  });
}
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("ESDraft", "#sec-get-regexp.prototype.flags", "RegExp.prototype.flags")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.RegExp.flags")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{JSxRef("RegExp.prototype.source")}}</li>
</ul>
