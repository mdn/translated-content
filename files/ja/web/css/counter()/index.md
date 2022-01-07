---
title: counter()
slug: Web/CSS/counter()
tags:
  - CSS
  - CSS Counter
  - CSS Function
  - Function
  - Reference
translation_of: Web/CSS/counter()
---
<p>{{CSSRef}}</p>

<p><strong><code>counter()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の関数で、指定された名前付きカウンターの現在値があれば、その文字列を返します。<a href="/ja/docs/Web/CSS/Pseudo-elements">擬似要素</a>において用いるのが多いものの、理論的には<code><a href="/ja/docs/Web/CSS/string">&lt;string&gt;</a></code>に対応するすべての箇所で用いることができます。</p>

<pre class="brush: css notranslate">/* 単純な使用法 */
counter(countername);

/* カウンターの表示の変更 */
counter(countername, upper-roman)</pre>

<p><a href="/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters">カウンター</a>自身には視覚的効果が何もありません。 <code>counter()</code> 関数 (および {{cssxref("counters", "counters()")}} 関数) は開発者が定義した文字列 (または画像) を返すことでカウンターは利用価値が生まれます。</p>

<div class="blockIndicator note">
<p>注: <code>counters()</code> 関数は CSS プロパティとも併用できますが、 {{CSSxRef("content")}} 以外のプロパティにおける対応は実験的であり、型または単位の引数への対応は限られています。</p>

<p><a href="#Browser_compatibility">ブラウザーの互換性の表</a>を注意深く確認してから本番環境に用いてください。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{cssxref("&lt;custom-ident&gt;")}}</dt>
 <dd>カウンターを識別する名前であり、{{cssxref("counter-reset")}} および {{cssxref("counter-increment")}} に用いた名前と、大文字小文字まで同一でなければなりません。名前をダッシュ2つで始めることはできず、また <code>none</code>, <code>unset</code>, <code>initial</code>, <code>inherit</code> という名前は禁止です。</dd>
 <dt><code style="white-space: nowrap;">&lt;counter-style&gt;</code></dt>
 <dd>カウンタースタイル名または {{cssxref("symbols()")}} 関数です。カウンタースタイル名には <code>numeric</code>, <code>alphabetic</code>, <code>symbolic</code> などの単純な定義済みスタイル、より複雑なアジアやエチオピアのカウンタースタイル、その他の<a href="/ja/docs/Web/CSS/CSS_Counter_Styles">定義済みカウンタースタイル</a>があります。省略された場合は、既定で <code>decimal</code> になります。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="default_value_compared_to_upper_Roman" name="default_value_compared_to_upper_Roman">既定値と upper-roman との比較</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html; notranslate">&lt;ol&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
&lt;/ol&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight[2] notranslate">ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::after {
  content: "[" counter(listCounter) "] == ["
               counter(listCounter, upper-roman) "]";
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("default_value_compared_to_upper_Roman", "100%", 150)}}</p>

<h3 id="decimal-leading-zero_compared_to_lower-alpha" name="decimal-leading-zero_compared_to_lower-alpha">decimal-leading-zero と lower-alpha との比較</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html; notranslate">&lt;ol&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
&lt;/ol&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css; highlight[2] notranslate">ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::after {
  content: "[" counter(count, <dfn>decimal-leading-zero</dfn>) "] == ["
               counter(count, lower-alpha) "]";
}</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{EmbedLiveSample("decimal-leading-zero_compared_to_lower-alpha", "100%", 150)}}</p>

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
   <td>{{SpecName("CSS3 Lists", "#counter-functions", "CSS Counters")}}</td>
   <td>{{Spec2("CSS3 Lists")}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "generate.html#counter-styles", "CSS Counters")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.types.counter")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters">CSS カウンターの使用</a></li>
 <li>{{cssxref("counter-reset")}}</li>
 <li>{{cssxref("counter-set")}}</li>
 <li>{{cssxref("counter-increment")}}</li>
 <li>{{cssxref("@counter-style")}}</li>
 <li>CSS の <code><a href="/ja/docs/Web/CSS/counters">counters()</a></code> 関数</li>
</ul>
