---
title: direction
slug: Web/CSS/direction
tags:
  - CSS
  - CSS Reference
translation_of: Web/CSS/direction
---
<div>{{CSSRef}}</div>

<p>CSS の <code>direction</code> プロパティは文章の記述方向にあわせて設定されるべきです。ヘブライ語やアラビア語のテキストでは <code>rtl</code> を、それ以外では <code>ltr</code> を使います。</p>

<div>{{EmbedInteractiveExample("pages/css/direction.html")}}</div>



<p>通常、この設定は CSS から直接行うのではなく、文書の一部として HTML の <code>dir</code> 属性を使うなどして行うほうがよいでしょう。</p>

<p>このプロパティは基本的な文章の方向と {{Cssxref("unicode-bidi")}} プロパティで作られた 埋め込み (embeddings) の方向を設定します。また、テキストやブロックレベル要素のデフォルトの文字揃えや、テーブルの行内にセルが流し込まれる方向を決めます。</p>

<p>HTML の <code>dir</code> 属性と違って、<code>direction</code> プロパティはテーブルの列からテーブルのセルに継承されません。これは CSS の継承が文書木に従うためで、テーブルセルはテーブルの列の中ではなく、行の中にあるからです。</p>

<p><code>direction</code> プロパティと {{cssxref("unicode-bidi")}} プロパティは、 {{cssxref("all")}} 短縮プロパティの影響を受けない唯一のプロパティです。</p>

<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* Keyword values */
direction: ltr;
direction: rtl;

/* Global values */
direction: inherit;
direction: initial;
direction: unset;</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>ltr</code></dt>
 <dd>デフォルト値です。テキストと他の要素は左から右に進みます</dd>
 <dt><code>rtl</code></dt>
 <dd>テキストと他の要素は右から左に進みます</dd>
</dl>

<p>インラインレベル要素で <code>direction</code> プロパティに効果を持たせたいときは、{{Cssxref("unicode-bidi")}} プロパティの値が <code>embed</code> もしくは <code>override</code> である必要があります。</p>

<h3 id="形式文法">形式文法</h3>

{{csssyntax("direction")}}

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: css">blockquote {
  direction: rtl;
}
</pre>

<h2 id="Specification" name="Specification">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Writing Modes', '#direction', 'direction')}}</td>
   <td>{{Spec2('CSS3 Writing Modes')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'visuren.html#direction', 'direction')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<div>
<div>


<p>{{Compat("css.properties.direction")}}</p>
</div>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{Cssxref("unicode-bidi")}}</li>
 <li>{{Cssxref("writing-mode")}}</li>
</ul>
