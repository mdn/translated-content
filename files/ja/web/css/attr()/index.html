---
title: attr()
slug: Web/CSS/attr()
tags:
  - CSS
  - CSS 関数
  - Reference
  - Web
  - attr
  - レイアウト
translation_of: Web/CSS/attr()
---
<div>{{CSSRef}}</div>

<div class="blockIndicator note"><strong>メモ:</strong> <code>attr()</code> 関数はどの CSS プロパティでも使用することができますが、 {{CSSxRef("content")}} 以外のプロパティでの対応は実験的であり、型や単位の引数の対応はまちまちです。</div>

<p><strong><code>attr()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の関数で、選択された要素の属性の値を受け取り、スタイルシートの中で使うために使用されます。<a href="/ja/docs/Web/CSS/Pseudo-elements">擬似要素</a>で使用することもでき、その場合は擬似要素を作る元になった要素の属性値が返されます。</p>

<pre class="brush: css no-line-numbers notranslate">/* Simple usage */
attr(data-count);
attr(title);

/* 型付き */
attr(src url);
attr(data-count number);
attr(data-width px);

/* 代替値付き */
attr(data-count number, 0);
attr(src url, "");
attr(data-width px, inherit);
attr(data-something, "default");
</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>attribute-name</code></dt>
 <dd>CSS で参照する、 HTML 要素の属性名です。</dd>
 <dt><code style="white-space: nowrap;">&lt;type-or-unit&gt;</code> {{Experimental_Inline}}</dt>
 <dd>属性値の型またはその単位を示すキーワードです。 HTML では暗黙に単位を持つ属性があります。属性に対して無効な値を <code>&lt;type-or-unit&gt;</code> で与えると、 <code>attr()</code> 式も無効になります。省略すると既定値の <code>string</code> になります。有効な値は以下の通りです。
 <table class="standard-table">
  <thead>
   <tr>
    <th scope="col">キーワード</th>
    <th scope="col">関係する型</th>
    <th scope="col">コメント</th>
    <th scope="col">既定値</th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td><code>string</code></td>
    <td style="white-space: nowrap;">{{CSSxRef("&lt;string&gt;")}}</td>
    <td>属性値は CSS {{CSSxRef("&lt;string&gt;")}} として扱われます。再解析はされず、特に文字は CSS エスケープで他の文字に変換されることなく、そのまま使用されます。</td>
    <td>空文字列</td>
   </tr>
   <tr>
    <td><code>color</code> {{Experimental_Inline}}</td>
    <td style="white-space: nowrap;">{{CSSxRef("&lt;color&gt;")}}</td>
    <td>属性値はハッシュ (3値または6値のハッシュ) またはキーワードとして解析されます。妥当な CSS の {{CSSxRef("&lt;string&gt;")}} 値でなければなりません。<br>
     前後の空白は除去されます。</td>
    <td><code>currentcolor</code></td>
   </tr>
   <tr>
    <td><code>url</code> {{Experimental_Inline}}</td>
    <td style="white-space: nowrap;">{{CSSxRef("&lt;url&gt;")}}</td>
    <td>属性値は、 CSS の <code>url()</code> 関数の中で使用される文字列として解析されます。<br>
     相対 URL は、スタイルシートからの相対ではなく、元の文書からの相対で解決されます。<br>
     前後の空白は除去されます。</td>
    <td>一般的なエラーの状況で存在しない文書を指す <code>about:invalid</code> の URL。</td>
   </tr>
   <tr>
    <td><code>integer</code> {{Experimental_Inline}}</td>
    <td style="white-space: nowrap;">{{CSSxRef("&lt;integer&gt;")}}</td>
    <td>属性値は CSS の {{CSSxRef("&lt;integer&gt;")}} として解析されます。妥当ではない場合、つまり整数ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。<br>
     前後の空白は除去されます。</td>
    <td><code>0</code>、または <code>0</code> が妥当な値ではないプロパティでは、プロパティの最小値。</td>
   </tr>
   <tr>
    <td><code>number</code> {{Experimental_Inline}}</td>
    <td style="white-space: nowrap;">{{CSSxRef("&lt;number&gt;")}}</td>
    <td>属性値は CSS の {{CSSxRef("&lt;number&gt;")}} として解析されます。妥当ではない場合、つまり数値ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。<br>
     前後の空白は除去されます。</td>
    <td><code>0</code>、または <code>0</code> が妥当な値ではないプロパティでは、プロパティの最小値。</td>
   </tr>
   <tr>
    <td><code>length</code> {{Experimental_Inline}}</td>
    <td style="white-space: nowrap;">{{CSSxRef("&lt;length&gt;")}}</td>
    <td>属性値は CSS の {{CSSxRef("&lt;length&gt;")}} の距離として単位を含んで (<code>12.5em</code> など) 解釈されます。妥当ではない場合、つまり長さではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。<br>
     指定された値が相対的な長さの場合は、 <code>attr()</code> は絶対的な値に変換して計算します。<br>
     前後の空白は除去されます。</td>
    <td><code>0</code>、または <code>0</code> が妥当な値ではないプロパティでは、プロパティの最小値。</td>
   </tr>
   <tr>
    <td><code>em</code>, <code>ex</code>, <code>px</code>, <code>rem</code>, <code>vw</code>, <code>vh</code>, <code>vmin</code>, <code>vmax</code>, <code>mm</code>, <code>cm</code>, <code>in</code>, <code>pt</code>, or <code>pc</code> {{Experimental_Inline}}</td>
    <td style="white-space: nowrap;">{{CSSxRef("&lt;length&gt;")}}</td>
    <td>属性値は CSS の {{CSSxRef("&lt;number&gt;")}}、つまり単位なし (<code>12.5</code> など) で解析され、特定の単位を付けた {{CSSxRef("&lt;length&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。<br>
     指定された値が相対的な長さの場合は、 <code>attr()</code> は絶対的な値に変換して計算します。<br>
     前後の空白は除去されます。</td>
    <td><code>0</code>、または <code>0</code> が妥当な値ではないプロパティでは、プロパティの最小値。</td>
   </tr>
   <tr>
    <td><code>angle</code> {{Experimental_Inline}}</td>
    <td style="white-space: nowrap;">{{CSSxRef("&lt;angle&gt;")}}</td>
    <td>属性値は CSS の {{CSSxRef("&lt;angle&gt;")}} の大きさとして単位を含んで (<code>30.5deg</code> など) 解釈されます。妥当ではない場合、つまり角度ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。<br>
     前後の空白は除去されます。</td>
    <td><code>0deg</code>、または <code>0deg</code> が妥当な値ではないプロパティでは、プロパティの最小値。</td>
   </tr>
   <tr>
    <td><code>deg</code>, <code>grad</code>, <code>rad</code> {{Experimental_Inline}}</td>
    <td style="white-space: nowrap;">{{CSSxRef("&lt;angle&gt;")}}</td>
    <td>属性値は CSS の {{CSSxRef("&lt;number&gt;")}}、つまり単位なし (<code>12.5</code> など) で解析され、特定の単位を付けた {{CSSxRef("&lt;angle&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。<br>
     前後の空白は除去されます。</td>
    <td><code>0deg</code>、または <code>0deg</code> が妥当な値ではないプロパティでは、プロパティの最小値。</td>
   </tr>
   <tr>
    <td><code>time</code> {{Experimental_Inline}}</td>
    <td style="white-space: nowrap;">{{CSSxRef("&lt;time&gt;")}}</td>
    <td>属性値は CSS の {{CSSxRef("&lt;time&gt;")}} の大きさとして単位を含んで (<code>30.5ms</code> など) 解釈されます。妥当ではない場合、つまり時間ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。<br>
     前後の空白は除去されます。</td>
    <td><code>0s</code>、または <code>0s</code> が妥当な値ではないプロパティでは、プロパティの最小値。</td>
   </tr>
   <tr>
    <td><code>s</code>, <code>ms</code> {{Experimental_Inline}}</td>
    <td style="white-space: nowrap;">{{CSSxRef("&lt;time&gt;")}}</td>
    <td>属性値は CSS の {{CSSxRef("&lt;number&gt;")}}、つまり単位なし (<code>12.5</code> など) で解析され、特定の単位を付けた {{CSSxRef("&lt;time&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。<br>
     前後の空白は除去されます。</td>
    <td><code>0s</code>、または <code>0s</code> が妥当な値ではないプロパティでは、プロパティの最小値。</td>
   </tr>
   <tr>
    <td><code>frequency</code> {{Experimental_Inline}}</td>
    <td style="white-space: nowrap;">{{CSSxRef("&lt;frequency&gt;")}}</td>
    <td>属性値は CSS の {{CSSxRef("&lt;frequency&gt;")}} の大きさとして単位を含んで (<code>30.5ms</code> など) 解釈されます。妥当ではない場合、つまり周波数ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。</td>
    <td><code>0Hz</code>、または <code>0Hz</code> が妥当な値ではないプロパティでは、プロパティの最小値。</td>
   </tr>
   <tr>
    <td><code>Hz</code>, <code>kHz</code> {{Experimental_Inline}}</td>
    <td style="white-space: nowrap;">{{CSSxRef("&lt;frequency&gt;")}}</td>
    <td>属性値は CSS の {{CSSxRef("&lt;number&gt;")}}、つまり単位なし (<code>12.5</code> など) で解析され、特定の単位を付けた {{CSSxRef("&lt;frequency&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。<br>
     前後の空白は除去されます。</td>
    <td><code>0Hz</code>、または <code>0Hz</code> が妥当な値ではないプロパティでは、プロパティの最小値。</td>
   </tr>
   <tr>
    <td><code>%</code> {{Experimental_Inline}}</td>
    <td style="white-space: nowrap;">{{CSSxRef("&lt;percentage&gt;")}}</td>
    <td>属性値は CSS の {{CSSxRef("&lt;number&gt;")}}、つまり単位なし (<code>12.5</code> など) で解析され、 {{CSSxRef("&lt;percentage&gt;")}} として解釈されます。妥当ではない場合、つまり数値ではない場合や CSS プロパティが受け入れ可能な範囲を超えていた場合は、既定値が使用されます。<br>
     指定された値が長さの場合は、 <code>attr()</code> は絶対的な値に変換して計算します。<br>
     前後の空白は除去されます。</td>
    <td><code>0%</code>、または <code>0%</code> が妥当な値ではないプロパティでは、プロパティの最小値。</td>
   </tr>
  </tbody>
 </table>
 </dd>
 <dt><code>&lt;fallback&gt;</code> {{Experimental_Inline}}</dt>
 <dd>関連する属性が見つからないか、無効値を含むときに使われる値です。設定されていない場合は、 CSS は各 <code>&lt;type-or-unit&gt;</code> で定義された既定値を使います。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="content_property" name="content_property">content プロパティ</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;p data-foo="hello"&gt;world&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css highlight[2] notranslate">[data-foo]::before {
  content: attr(data-foo) " ";
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("content_property", "100%", 50)}}</p>

<h3 id="&lt;color>_value" name="&lt;color>_value">&lt;color&gt; 値</h3>

<p>{{SeeCompatTable}}</p>

<div id="color-value">
<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;div class="background" data-background="lime"&gt;background expected to be red if your browser does not support advanced usage of attr()&lt;/div&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<div class="hidden">
<pre class="brush: css notranslate">.background {
  height: 100vh;
}</pre>
</div>

<pre class="brush: css highlight[6] notranslate">.background {
  background-color: red;
}

.background[data-background] {
  background-color: attr(data-background color, red);
}</pre>
</div>

<p>{{EmbedLiveSample("color-value", "100%", 50)}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS4 Values", "#attr-notation", "attr()")}}</td>
   <td>{{Spec2("CSS4 Values")}}</td>
   <td>{{CSSxRef("var()")}} のように動作するように変更。 <code>attr()</code> を含むプロパティ値は解析時に有効となり、属性値の検証は計算値になるまで延期されます。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Values", "#attr-notation", "attr()")}}</td>
   <td>{{Spec2("CSS3 Values")}}</td>
   <td>
    <p>2 つのオプション引数を追加<br>
     全プロパティで使用可能<br>
     {{CSSxRef("&lt;string&gt;")}} 以外の値が返せるようになった。</p>
    これらの変更は実験的であり、ブラウザーの互換性が少なすぎると CR 段階で外される可能性がある</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "generate.html#x18", "attr()")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>{{CSSxRef("content")}} プロパティに限定<br>
    常に {{CSSxRef("&lt;string&gt;")}} を返す</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.types.attr")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/Attribute_selectors">属性セレクター</a></li>
 <li><a href="/ja/docs/Web/HTML/Global_attributes/data-*">HTML <code>data-*</code> 属性</a></li>
 <li><a href="/ja/docs/Web/SVG/Attribute/data-*">SVG <code>data-*</code> 属性</a></li>
</ul>
