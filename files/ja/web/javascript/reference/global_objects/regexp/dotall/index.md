---
title: RegExp.prototype.dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
tags:
  - Draft
  - JavaScript
  - Property
  - Prototype
  - Reference
  - RegExp
  - Regular Expressions
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
---
<p>{{JSRef}}</p>

<p><strong><code>dotAll</code></strong> プロパティは、正規表現で "<code>s</code>" フラグが使用されているかどうかを示します。 <code>dotAll</code> は、個々の正規表現インスタンスの読み取り専用プロパティです。</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-dotall.html")}}</div>

<p>{{JS_Property_Attributes(0, 0, 1)}}</p>

<h2 id="説明">説明</h2>

<p>dotAllの値は {{JSxRef("Boolean")}} であり、"<code>s</code>" フラグが使用されている場合は <code>true</code> 、それ以外の場合は <code>false</code> です。 "<code>s</code>" フラグは、ドット特殊文字 ("<code>.</code>") が以下に示す行末記号 ("<code>newline</code>") 文字と一致することを示します。これ以外の場合は一致しません:</p>

<ul>
 <li>U+000A 改行 (LF) ("<code>\n</code>")</li>
 <li>U+000D キャリッジリターン (CR) ("<code>\r</code>")</li>
 <li>U+2028 ラインセパレーター</li>
 <li>U+2029 段落区切り文字</li>
</ul>

<p>これは事実上、ドットが基本多言語面 (BMP) のすべての文字と一致することを意味します。 アストラル文字と一致させるには、"<code>u</code>" (ユニコード) フラグを使用する必要があります。 両方のフラグを組み合わせて使用すると、ドットは例外なく任意のユニコード文字に一致します。</p>

<p>このプロパティを直接変更することはできません。</p>

<h2 id="例">例</h2>

<h3 id="dotAllを使用する">dotAllを使用する</h3>

<pre class="brush: js notranslate">var str1 = 'bar\nexample foo example';

var regex1 = new RegExp('bar.example','s');

console.log(regex1.dotAll); // Output: true

console.log(str1.replace(regex1,'')); // Output: foo example

var str2 = 'bar\nexample foo example';

var regex2 = new RegExp('bar.example');

console.log(regex2.dotAll); // Output: false

console.log(str2.replace(regex2,'')); // Output: bar
                                      //         example foo example</pre>

<h2 id="仕様書">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-get-regexp.prototype.dotAll', 'RegExp.prototype.dotAll')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーの互換性">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.RegExp.dotAll")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>{{JSxRef("RegExp.lastIndex")}}</li>
 <li>{{JSxRef("RegExp.prototype.global")}}</li>
 <li>{{JSxRef("RegExp.prototype.ignoreCase")}}</li>
 <li>{{JSxRef("RegExp.prototype.multiline")}}</li>
 <li>{{JSxRef("RegExp.prototype.source")}}</li>
 <li>{{JSxRef("RegExp.prototype.sticky")}}</li>
 <li>{{JSxRef("RegExp.prototype.unicode")}}</li>
</ul>
