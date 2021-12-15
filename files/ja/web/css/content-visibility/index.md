---
title: content-visibility
slug: Web/CSS/content-visibility
translation_of: Web/CSS/content-visibility
---
<p>{{CSSRef}}</p>

<p><span>content-visibility CSSプロパティは、要素がそのコンテンツをレンダリングするかどうかを制御するとともに、強力な包含セットを強制することで、ユーザーエージェントが必要になるまで大量のレイアウトとレンダリング作業を省略できるようにします。基本的に、ユーザーエージェントは、レイアウトやペイントなどの要素のレンダリング作業を必要になるまでスキップできるため、最初のページの読み込みがはるかに高速になります。</span></p>

<p><font face="x-locale-heading-primary, zillaslab, Palatino, Palatino Linotype, x-locale-heading-secondary, serif"><span style="font-size: 37.33327865600586px;"><strong>文法</strong></span></font></p>

<pre class="brush: css no-line-numbers notranslate">/* Keyword values */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* Global values */
content-visibility: initial;
content-visibility: unset;
</pre>

<h3 id="値">値</h3>

<dl>
 <dt><code>visible</code></dt>
 <dd>
 <p dir="ltr" id="tw-target-text">無効。要素のコンテンツは通常どおりにレイアウトおよびレンダリングされます。</p>
 </dd>
 <dt><code>hidden</code></dt>
 <dd>
 <p dir="ltr" id="tw-target-text">要素はその内容をスキップします。スキップされたコンテンツは、ページ内検索、タブオーダーナビゲーションなどのユーザーエージェント機能にアクセスできたり、選択またはフォーカス可能であってはなりません。これは、<code>display: none</code>をコンテンツに与えるのと似ています。</p>
 </dd>
 <dt><code>auto</code></dt>
 <dd>
 <p>この要素は、レイアウトの封じ込め、スタイルの封じ込め、およびペイントの封じ込めをオンにします。要素がユーザーに関連していない場合は、その内容もスキップします。非表示とは異なり、スキップされたコンテンツは、ページ内検索、タブオーダーナビゲーションなどのユーザーエージェント機能に対して通常どおり利用可能である必要があり、通常どおりフォーカス可能で選択可能である必要があります。</p>
 </dd>
</dl>

<h2 id="例"><font face="x-locale-heading-primary, zillaslab, Palatino, Palatino Linotype, x-locale-heading-secondary, serif"><span style="font-size: 37.33327865600586px;"><strong>例</strong></span></font></h2>

<h3 dir="ltr" id="autoを使用して長いページのレンダリングコストを削減">autoを使用して長いページのレンダリングコストを削減</h3>

<p dir="ltr" id="tw-target-text">次の例は、autoを使用して画面外のセクションのペイントとレンダリングをスキップする方法を示しています。ビューポート外のコンテンツはレンダリングされないため、これはページの読み込みと操作の両方に役立ちます。</p>

<pre class="brush: html notranslate">&lt;style&gt;
section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}

&lt;section&gt;...
&lt;section&gt;...
&lt;section&gt;...
&lt;section&gt;...
...
</pre>

<h3 dir="ltr" id="hiddenを使用して手動で可視性を管理">hiddenを使用して手動で可視性を管理</h3>

<p>次の例は、スクリプトで可視性を管理できることを示しています。たとえば、display：noneの代わりにcontent-visiblity：hiddenを使用することの追加の利点は、content-visibilityで非表示にしたときにレンダリングされたコンテンツがレンダリング状態を保持することです。これは、コンテンツが再度表示される場合、他のコンテンツよりも速くレンダリングされることを意味します。</p>

<pre class="brush: html notranslate">&lt;style&gt;
.hidden {
  content-visibility: hidden;
  /* 非表示の場合、要素のサイズを0x500pxサイズの子が1つあるかのようにします */
  contain-intrinsic-size: 0 500px;
}
.visible {
  content-visibility: visible;
  /* これは、.hiddenと.visibleを切り替えるときにレイアウトがシフトしないようにするためです */
  contain: style layout paint;
}



&lt;div class=hidden&gt;...
&lt;div class=visible&gt;...
&lt;div class=hidden&gt;...
&lt;div class=hidden&gt;...
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS Containment 2', '#content-visibility')}}</td>
   <td>{{Spec2('CSS Containment 2')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("css.properties.content-visibility")}}</p>

<h2 id="See_Also">See Also</h2>

<ul>
 <li><a href="https://web.dev/content-visibility/">content-visibility: the new CSS property that boosts your rendering performance</a> (web.dev)</li>
</ul>
