---
title: font-variant-position
slug: Web/CSS/font-variant-position
tags:
  - CSS
  - CSS フォント
  - CSS プロパティ
  - Reference
translation_of: Web/CSS/font-variant-position
---
<div>{{CSSRef}}</div>

<p>CSS の <strong><code>font-variant-position</code></strong> プロパティは、上付き文字または下付き文字として配置された小さな代替文字の使用を制御します。</p>

<p>文字は変更されないまま、フォントのベースラインから相対的に配置されます。これらの文字はふつう、 {{HTMLElement("sub")}} と {{HTMLElement("sup")}} 要素で使用されます。</p>

<pre class="brush:css no-line-numbers">/* キーワード値 */
font-variant-position: normal;
font-variant-position: sub;
font-variant-position: super;

/* グローバル値 */
font-variant-position: inherit;
font-variant-position: initial;
font-variant-position: unset;
</pre>

<p>これらの代替文字の使用が有効の場合、一連の中のある文字がそのような字体 - 強調字体を持っていない場合、一連の文字のセット全体が代替方法を使用して、合成によって描画されます。</p>

<p>これらの代替字体は、フォントの他の部分と同じ em ボックスと同じベースラインを共有します。それらは単にグラフィカルに強化されており、行の高さや他のボックスの特性には影響しません。</p>

<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>font-variant-position</code> プロパティは、以下に列挙されたキーワード値のうちの一つで指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>normal</code></dt>
 <dd>上付き文字および下付き文字の字体の代替を無効にします。</dd>
 <dt><code>sub</code></dt>
 <dd>下付き文字の代替グリフを有効にします。特定の文字列で、そのような文字の1つが使用できない場合、文字列内のすべての文字が合成を使用して描画されます。</dd>
 <dt><code>super</code></dt>
 <dd>上付き文字の代替グリフを有効にします。特定の文字列で、そのような文字の1つが使用できない場合、文字列内のすべての文字が合成を使用して描画されます。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;p class="normal"&gt;Normal!&lt;/p&gt;
&lt;p class="super"&gt;Super!&lt;/p&gt;
&lt;p class="sub"&gt;Sub!&lt;/p&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush:css">p {
  display: inline;
}

.normal {
  font-variant-position: normal;
}

.super {
  font-variant-position: super;
}

.sub {
  font-variant-position: sub;
}
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Examples') }}</p>

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
   <td>{{SpecName('CSS3 Fonts', '#propdef-font-variant-position', 'font-variant-position')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.font-variant-position")}}</p>
