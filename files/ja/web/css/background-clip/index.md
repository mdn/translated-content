---
title: background-clip
slug: Web/CSS/background-clip
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/background-clip
---
<p>{{CSSRef}}</p>

<p><strong><code>background-clip</code></strong> は CSS のプロパティで、要素の背景を境界ボックス、パディングボックス、コンテンツボックスのどれまで拡張するかを設定します。</p>

<div>{{EmbedInteractiveExample("pages/css/background-clip.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>要素に {{cssxref("background-image")}} または {{cssxref("background-color")}} がない場合、このプロパティは ({{cssxref("border-style")}} または {{cssxref("border-image")}} によって) 境界に透明な領域や部分的に不透明な領域がある場合のみ視覚効果があります。そうでなければ、境界は異なるマスク方法になります。</p>

<div class="blockIndicator note">
<p><strong>注:</strong> <a href="/ja/docs/Web/HTML/Element/html">ルート要素</a>は異なる背景の描画領域を持っているため、その要素に <code>background-clip</code> プロパティが指定されても効果はありません。「<a href="https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds">特殊要素の背景</a>」を参照してください。</p>
</div>

<div class="blockIndicator note">
<p><strong>注:</strong> <a href="/ja/docs/Web/HTML/Element/html">ルート要素</a>が HTML 要素である文書の場合、ルート要素上の {{cssxref("background-image")}} の計算値が <code>none</code> であり、その {{cssxref("background-color")}} が <code>transparent</code> であると、ユーザーエージェントは代わりに、 {{cssxref("background")}} プロパティの計算値をその要素の HTML の {{HTMLElement("body")}} の子要素から伝搬させなければなりません。その <code>&lt;body&gt;</code> 要素の <code>background</code> プロパティの使用値はその初期値であり、伝搬された値は、それらがルート要素上で指定されたかのように扱われます。 HTML 文書を作成するときは、 HTML 要素ではなく、 <code>&lt;body&gt;</code> 要素にキャンバスの背景を指定することを推奨します。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* キーワード値 */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

/* グローバル値 */
background-clip: inherit;
background-clip: initial;
background-clip: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>border-box</code></dt>
 <dd>背景を境界の外側の辺まで拡張します (但し、境界の下に重ね合わせられます)。</dd>
 <dt><code>padding-box</code></dt>
 <dd>背景をパディングの外側の辺まで拡張します。境界の下には背景が描かれません。</dd>
 <dt><code>content-box</code></dt>
 <dd>背景をコンテンツボックスの中に (切り取って) 表示します。</dd>
 <dt><code>text</code> {{experimental_inline}}</dt>
 <dd>背景を前景のテキストの中に (切り取って) 表示します。</dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;p class="border-box"&gt;背景が境界の裏まで拡張されます。&lt;/p&gt;
&lt;p class="padding-box"&gt;背景が境界の内側の縁まで拡張されます。&lt;/p&gt;
&lt;p class="content-box"&gt;背景がコンテンツボックスの縁までだけ表示されます。&lt;/p&gt;
&lt;p class="text"&gt;背景が前景のテキストで切り取られます。&lt;/p&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">p {
  border: .8em darkviolet;
  border-style: dotted double;
  margin: 1em 0;
  padding: 1.4em;
  background: linear-gradient(60deg, red, yellow, red, yellow, red);
  font: 900 1.2em sans-serif;
  text-decoration: underline;
}

.border-box { background-clip: border-box; }
.padding-box { background-clip: padding-box; }
.content-box { background-clip: content-box; }

.text {
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0,0,0,.2);
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Examples', 600, 580)}}</p>

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
   <td>{{SpecName('CSS3 Backgrounds', '#the-background-clip', 'background-clip')}}</td>
   <td>{{Spec2('CSS3 Backgrounds')}}</td>
   <td>初回定義</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Backgrounds', '#background-clip', 'background-clip')}}</td>
   <td>{{Spec2('CSS4 Backgrounds')}}</td>
   <td><code>text</code> の値を追加。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.background-clip")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("clip-path")}} プロパティは<em>要素全体</em>を表示する部分を定義するクリッピング領域を作成します。</li>
 <li>背景のプロパティ: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}</li>
 <li><a href="/ja/docs/Web/CSS/box_model">CSS ボックスモデルの紹介</a></li>
</ul>
