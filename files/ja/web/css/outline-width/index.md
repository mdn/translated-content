---
title: outline-width
slug: Web/CSS/outline-width
tags:
  - CSS
  - CSS Outline
  - CSS Property
  - Layout
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/outline-width
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>outline-width</code></strong> プロパティは、要素の輪郭線の太さを設定します。輪郭線とは要素の周りに描かれる線のことで、 {{cssxref("border")}} よりも外側です。</p>

<div>{{EmbedInteractiveExample("pages/css/outline-width.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>たいていの場合、輪郭線の見た目を定義するときは一括指定プロパティ {{cssxref("outline")}} を使ったほうが便利です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* キーワード値 */
outline-width: thin;
outline-width: medium;
outline-width: thick;

/* &lt;length&gt; 値 */
outline-width: 1px;
outline-width: 0.1em;

/* グローバル値 */
outline-width: inherit;
</pre>

<p><code>outline-width</code> プロパティは、以下に挙げた値のうちの一つで指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>輪郭線の太さを <code>&lt;length&gt;</code> で指定します。</dd>
 <dt><code>thin</code></dt>
 <dd>ユーザーエージェントに依存します。Firefox のようなデスクトップブラウザーでは、通常は <code>1px</code> です。</dd>
 <dt><code>medium</code></dt>
 <dd>ユーザーエージェントに依存します。Firefox のようなデスクトップブラウザーでは、通常は <code>3px</code> です。</dd>
 <dt><code>thick</code></dt>
 <dd>ユーザーエージェントに依存します。Firefox のようなデスクトップブラウザーでは、通常は <code>5px</code> です。</dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_an_elements_outline_width" name="Setting_an_elements_outline_width">要素の輪郭線の幅の設定</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;span id="thin"&gt;thin&lt;/span&gt;
&lt;span id="medium"&gt;medium&lt;/span&gt;
&lt;span id="thick"&gt;thick&lt;/span&gt;
&lt;span id="twopixels"&gt;2px&lt;/span&gt;
&lt;span id="oneex"&gt;1ex&lt;/span&gt;
&lt;span id="em"&gt;1.2em&lt;/span&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">span {
  outline-style: solid;
  display: inline-block;
  margin: 20px;
}

#thin {
  outline-width: thin;
}

#medium {
  outline-width: medium;
}

#thick {
  outline-width: thick;
}

#twopixels {
  outline-width: 2px;
}

#oneex {
  outline-width: 1ex;
}

#em {
  outline-width: 1.2em;
}

</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Setting_an_elements_outline_width', '100%', '80')}}</p>

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
   <td>{{SpecName('CSS3 Basic UI', '#outline-width', 'outline-width')}}</td>
   <td>{{Spec2('CSS3 Basic UI')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'ui.html#propdef-outline-width', 'outline-width')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.outline-width")}}</p>
