---
title: all
slug: Web/CSS/all
tags:
  - CSS
  - CSS カスケードと継承
  - CSS プロパティ
  - Reference
  - all
translation_of: Web/CSS/all
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/CSS">CSS</a> の <code><strong>all</strong></code> <a href="/ja/docs/Web/CSS/Shorthand_properties">一括指定プロパティ</a>は、要素のすべてのプロパティを ({{cssxref("unicode-bidi")}} および {{cssxref("direction")}} を除いて) 初期化します。</span>プロパティは初期値または継承値、または他のスタイルシートに由来して指定した値に設定される可能性があります。</p>

<div>{{EmbedInteractiveExample("pages/css/all.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* グローバル値 */
all: initial;
all: inherit;
all: unset;

/* CSS カスケードと継承 Level 4 */
all: revert;
</pre>

<p><code>all</code> プロパティは、 CSS のグローバルキーワード値のうちの一つで定義します。なお、これらの値は {{cssxref("unicode-bidi")}} および {{cssxref("direction")}} プロパティには影響しません。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{cssxref("initial")}}</dt>
 <dd>その要素のすべてのプロパティを<a href="/ja/docs/Web/CSS/initial_value">初期値</a>に変更するべきであることを指定します。</dd>
 <dt>{{cssxref("inherit")}}</dt>
 <dd>その要素のすべてのプロパティを<a href="/ja/docs/Web/CSS/inheritance">継承値</a>に変更するべきであることを指定します。</dd>
 <dt>{{cssxref("unset")}}</dt>
 <dd>その要素のすべてのプロパティを、既定値が inherit のものは継承値に、そうでなければ初期値に変更するべきであることを指定します。</dd>
 <dt>{{cssxref("revert")}}</dt>
 <dd>宣言が所属するスタイルシートの出所に応じて動作を指定します。
 <dl>
  <dt><a href="/ja/docs/Web/CSS/Cascade#%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%A8%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%B3%E3%83%88%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%B7%E3%83%BC%E3%83%88">ユーザーエージェントのスタイルシート</a></dt>
  <dd><code>unset</code> と同等です。</dd>
  <dt><a href="/ja/docs/Web/CSS/Cascade#%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%B7%E3%83%BC%E3%83%88">ユーザーのスタイル</a></dt>
  <dd><a href="/ja/docs/Web/CSS/Cascade">カスケード</a>をユーザーエージェントレベルまでロールバックし、<a href="/ja/docs/Web/CSS/specified_value">指定値</a>が、その要素に対して作者レベルまたはユーザーレベルの規則が指定されていないかのように計算されるようにします。</dd>
  <dt><a href="/ja/docs/Web/CSS/Cascade#%E4%BD%9C%E6%88%90%E8%80%85%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%82%B7%E3%83%BC%E3%83%88">作成者のスタイル</a></dt>
  <dd><a href="/ja/docs/Web/CSS/Cascade">カスケード</a>をユーザーのレベルまでロールバックし、作者レベルの規則が要素に指定されていない場合は、<a href="/ja/docs/Web/CSS/specified_value">指定値</a>が計算されます。 <code>revert</code> の用途では、作者のオリジンはオーバーライドおよびアニメーションのオリジンが含まれます。</dd>
 </dl>
 </dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;blockquote id="quote"&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
&lt;/blockquote&gt;
Phasellus eget velit sagittis.</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">body {
  font-size: small;
  background-color: #F0F0F0;
  color: blue;
}

blockquote {
  background-color: skyblue;
  color: red;
}
</pre>

<h3 id="Result" name="Result">結果</h3>

<div id="ex0" style="display: inline-block; width: 225px; vertical-align: top;">
<h4 id="all_プロパティなし"><code>all</code> プロパティなし</h4>

<pre class="brush: html hidden">&lt;blockquote id="quote"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/blockquote&gt; Phasellus eget velit sagittis.</pre>

<pre class="brush: css hidden">body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }</pre>
{{EmbedLiveSample("ex0", "200", "125")}}

<p>{{HTMLElement("blockquote")}} は、特定の背景色と文字色と一緒に、ブラウザーの標準スタイルを使用します。blockquoteは<em>ブロック</em>要素のようにふるまいます。これに続くテキストはその下にあります。</p>
</div>

<div id="ex1" style="display: inline-block; width: 225px; vertical-align: top;">
<h4 id="allunset"><code>all:unset</code></h4>

<pre class="brush: html hidden">&lt;blockquote id="quote"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/blockquote&gt; Phasellus eget velit sagittis.</pre>

<pre class="brush: css hidden">body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
blockquote { all: unset; }</pre>
{{EmbedLiveSample("ex1", "200", "125")}}

<p>{{HTMLElement("blockquote")}} はブラウザーの標準スタイルを使用しません。 blockquote は<em>インライン</em>要素 (初期値) であり、 {{cssxref("background-color")}} は <code>transparent</code> (初期値) ですが、 {{cssxref("font-size")}} は <code>small</code> (継承された値) のままで、かつ {{cssxref("color")}}は<code>blue</code> (継承された値) です。</p>
</div>

<div id="ex2" style="display: inline-block; width: 225px; vertical-align: top;">
<h4 id="allinitial"><code>all:initial</code></h4>

<pre class="brush: html hidden">&lt;blockquote id="quote"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/blockquote&gt; Phasellus eget velit sagittis.</pre>

<pre class="brush: css hidden">body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
blockquote { all: initial; }</pre>
{{EmbedLiveSample("ex2", "200", "125")}}

<p>{{HTMLElement("blockquote")}} はブラウザーの標準スタイルを使用しません。 blockquote は<em>インライン</em>要素 (初期値) であり、{{cssxref("background-color")}}<code>はtransparent</code> (初期値)、{{cssxref("font-size")}}<code>はnormal</code> (初期値)、且つ{{cssxref("color")}}は <code>black</code> (初期値)です。</p>
</div>

<div id="ex3" style="display: inline-block; width: 225px; vertical-align: top;">
<h4 id="allinherit"><code>all:inherit</code></h4>

<pre class="brush: html hidden">&lt;blockquote id="quote"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/blockquote&gt; Phasellus eget velit sagittis.</pre>

<pre class="brush: css hidden">body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue; color: red; }
blockquote { all: inherit; }</pre>
{{EmbedLiveSample("ex3", "200", "125")}}

<p>{{HTMLElement("blockquote")}} はブラウザーの標準スタイルを使用しません。blockquoteは<em>ブロック</em>要素 (blockquoteを含んでいる{{HTMLElement("div")}}から継承された値)であり、{{cssxref("background-color")}}<code>はtransparent</code>(初期値)、{{cssxref("font-size")}}<code>はsmall</code> (継承された値)、且つ {{cssxref("color")}}は<code>blue</code> (継承された値)です。</p>
</div>

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
   <td>{{ SpecName('CSS4 Cascade', '#all-shorthand', 'all') }}</td>
   <td>{{ Spec2('CSS4 Cascade') }}</td>
   <td><code>revert</code> の値を追加。</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS3 Cascade', '#all-shorthand', 'all') }}</td>
   <td>{{ Spec2('CSS3 Cascade') }}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.properties.all")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<p>CSS のグローバルキーワード値: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}</p>
