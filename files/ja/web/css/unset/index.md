---
title: unset
slug: Web/CSS/unset
tags:
  - CSS
  - CSS カスケードと継承
  - CSS 値
  - Keyword
  - Layout
  - Reference
  - Style
  - unset
  - スタイル
  - レイアウト
translation_of: Web/CSS/unset
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>unset</code></strong> は CSS のキーワードで、プロパティをリセットし、親から自然に継承された場合は継承値、そうでなければ<a href="/ja/docs/Web/CSS/initial_value">初期値</a>を設定します。</span>言い換えれば、前者の<a href="/ja/docs/Web/CSS/inheritance#Inherited_properties">継承プロパティ</a>の場合は {{cssxref("inherit")}} キーワードのように動作し、後者の<a href="/ja/docs/Web/CSS/inheritance#Non-inherited_properties">非継承プロパティ</a>の場合は {{cssxref("initial")}} キーワードのように動作します。</p>

<p><strong><code>unset</code></strong> はあらゆる CSS プロパティに対して、一括指定の {{cssxref("all")}} を含み、適用することができます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Color" name="Color">色</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;p&gt;このテキストは赤です。&lt;/p&gt;
&lt;div class="foo"&gt;
  &lt;p&gt;このテキストも赤です。&lt;/p&gt;
&lt;/div&gt;
&lt;div class="bar"&gt;
  &lt;p&gt;このテキストは緑色 (既定の継承値) です。&lt;/p&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">.foo {
  color: blue;
}
.bar {
  color: green;
}

p {
  color: red;
}
.bar p {
  color: unset;
}
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{ EmbedLiveSample('Color') }}</p>

<h3 id="Border" name="Border">境界線</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;p&gt;This text has a red border.&lt;/p&gt;
&lt;div&gt;
  &lt;p&gt;This text has a red border.&lt;/p&gt;
&lt;/div&gt;
&lt;div class="bar"&gt;
  &lt;p&gt;This text has a black border (initial default, not inherited).&lt;/p&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css notranslate">div {
  border: 1px solid green;
}

p {
  border: 1px solid red;
}

.bar p {
  border-color: unset;
}
</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{ EmbedLiveSample('Border', 'auto', 200) }}</p>

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
   <td>{{ SpecName('CSS4 Cascade', '#inherit-initial', 'unset') }}</td>
   <td>{{ Spec2('CSS4 Cascade') }}</td>
   <td>Level 3 から変更なし。</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS3 Cascade', '#inherit-initial', 'unset') }}</td>
   <td>{{ Spec2('CSS3 Cascade') }}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("css.types.global_keywords.unset")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("initial")}} を使用すると、プロパティを初期値に設定します。</li>
 <li>{{cssxref("revert")}} を使用すると、プロパティをユーザーエージェントのスタイルシート (又はもしあれば、ユーザーのスタイル) で設定された値に初期化します。</li>
 <li>{{cssxref("inherit")}} を使用すると、要素のプロパティを親と同じ値にします。</li>
 <li>{{cssxref("all")}} プロパティは、すべてのプロパティを一度に initial, inherit, revert, unset の状態にします。</li>
</ul>
