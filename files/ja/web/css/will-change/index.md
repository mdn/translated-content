---
title: will-change
slug: Web/CSS/will-change
tags:
  - CSS
  - CSS プロパティ
  - CSS 変更予定
  - Reference
  - 'recipe:css-property'
  - transition
  - トランジション
translation_of: Web/CSS/will-change
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>will-change</code></strong> プロパティは、どのような要素の変更が予測されているかブラウザーに助言します。ブラウザーは要素が実際に変更される前に、最適化をセットアップすることができます。</span>この種の最適化は、実際に変化が求められる前に、潜在的に高コストの処理を行うことで、ページの応答を向上させることができます。</p>

<div class="warning">
<p><strong>重要:</strong> <code>will-change</code> は既存の性能問題を扱うための最終解決手段として使用することを意図しています。予想されるパフォーマンス問題に使用しないでください。</p>
</div>

<pre class="brush:css no-line-numbers notranslate">/* キーワード値 */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform;        /* &lt;custom-ident&gt; の例 */
will-change: opacity;          /* &lt;custom-ident&gt; の例 */
will-change: left, top;        /* 2つの &lt;animateable-feature&gt; の例 */

/* グローバル値 */
will-change: inherit;
will-change: initial;
will-change: unset;
</pre>

<p>このプロパティを適切に使用するには、少々注意が必要です。</p>

<ul>
 <li>
  <p id="Don't_apply_will-change_to_too_many_elements"><em>will-change を多くの要素に適用しすぎないでください。</em>ブラウザーはすでに可能な限りすべての最適化を試みています。 <code>will-change</code> を試みるような強力な最適化は、大量のマシンリソースを使ってしまい、使い切ってしまった場合、ページの速度の低下や多量のリソース消費を引き起こします。</p>
 </li>
 <li>
  <p><em>控えめに使用してください。</em>最適化においてブラウザーが行う通常の動作は、可能な限り早く最適化を解除して、通常に戻すことです。しかし、スタイルシートに直接 <code>will-change</code> を追加することは、対象の要素の変更が間近であることを示し続けることであり、ブラウザーはそうでない場合よりも長い間最適化を維持し続けなければなりません。そのため、変化が発生する前後にスクリプトコードを使って <code>will-change</code> のオン/オフを切り替えることを習慣づけると良いでしょう。</p>
 </li>
 <li>
  <p><em>事前の最適化を行うために will-change を要素に適用しないでください。</em> ページが良く動作している場合、少々のスピードアップのためだけに <code>will-change</code> プロパティを要素に追加しないでください。 <code>will-change</code> は既存のパフォーマンス問題を扱うための最終手段として使われるべきものです。そのため、パフォーマンス問題に先んじて使うべきではありません。 過度な <code>will-change</code> の使用は、過度にメモリを消費するとともに、ブラウザーが起こりうる変化に対する準備をしようとすることで、より複雑なレンダリングが発生する原因となります。これはパフォーマンスの悪化につながります。</p>
 </li>
 <li>
  <p id="Give_it_sufficient_time_to_work"><em>処理するために十分な時間を与えてください。</em>このプロパティは、ユーザーエージェントに変更する可能性のあるプロパティについて事前に通知するための方法として用意されています。そして、ブラウザーは、プロパティの変更が実際に発生する前に、プロパティの変更に必要な事前最適化の適用を選択できます。そのため、ブラウザーに実際の最適化を行うためのいくばくかの時間を与えることが重要になります。少なくとも少し早めに何らかの変更が行われることを予測する方法を見つけてから、<code>will-change</code> を設定してください。</p>
 </li>
 <li>
  <p><a href="/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context">重ね合わせコンテキスト</a>を生成するプロパティ値 (例えば will-change: opacity) を、手前に生成される重ね合わせコンテキストとして使用する場合、<em>will-change は実際に要素の視覚的な表現に影響を与える可能性があることに注意してください</em>。</p>
 </li>
</ul>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>このキーワードは特定の意図を表現しません。ユーザーエージェントは通常通りの経験則と最適化を適用します。</dd>
</dl>

<p><code>&lt;animateable-feature&gt;</code> は次の値のいずれかである場合。</p>

<dl>
 <dt><code>scroll-position</code></dt>
 <dd>まもなく要素のスクロール位置をアニメーション化、または変更することが予想されることを示します。</dd>
 <dt><code>contents</code></dt>
 <dd>まもなく要素のコンテンツに対して何らかのアニメーション化、または変更が予想されることを示します。</dd>
 <dt>{{cssxref("custom-ident", "&lt;custom-ident&gt;")}}</dt>
 <dd>まもなく要素で指定された名前のプロパティをアニメーション化、または変更されることが予想されることを示します。指定されたプロパティが一括指定プロパティの場合、それが展開されたすべてのプロパティが予想の対象となります。 <code>unset</code>, <code>initial</code>, <code>inherit</code>, <code>will-change</code>, <code>auto</code>, <code>scroll-position</code>, <code>contents</code> の値は指定できません。仕様では特定の値についての動作を定義していませんが、一般的に <code>transform</code> は合成レイヤーのヒントとなります。特定の CSS プロパティに対しては、 <a href="https://github.com/operasoftware/devopera/pull/330">現在のところ Chrome は2つのアクションを取ります</a>。新しい合成レイヤーを構築するか、または新しい{{Glossary("stacking context","重ね合わせコンテキスト")}}を構築します。</dd>
</dl>

<h3 id="Via_stylesheet" name="Via_stylesheet">スタイルシートで</h3>

<p>しかし、ページが大きく複雑なアルバムやスライドデッキプレゼンテーションのようなキー押下で遷移するアプリケーションの場合、スタイルシートに <code>will-change</code> を含めた方が適切なこともあります。これによって、ブラウザーは事前に切り替えの準備を行い、キーが押されるとすぐに、てきぱきとしたページ間の切り替えができます。しかし、スタイルシートで <code>will-change</code> プロパティを直接使用するのは注意してください。ブラウザーが必要なくなったメモリを最適化のために保存し続けることになる可能性があるからです。</p>

<pre class="brush: css notranslate">.slide {
  will-change: transform;
}</pre>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Via_script" name="Via_script">スクリプトから</h3>

<p>これはスクリプトから <code>will-change</code> プロパティを適用する方法を示しています。おそらく多くの場合はこのようにします。</p>

<pre class="brush: js notranslate">var el = document.getElementById('element');

// 要素がホバーされたとき、will-change を設定する
el.addEventListener('mouseenter', hintBrowser);
el.addEventListener('animationEnd', removeHint);

function hintBrowser() {
  // アニメーションのキーフレームブロックで
  // 変更されるであろう最適化可能なプロパティ
  this.style.willChange = 'transform, opacity';
}

function removeHint() {
  this.style.willChange = 'auto';
}</pre>

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
   <td>{{SpecName('CSS Will Change', '#will-change', 'will-change')}}</td>
   <td>{{Spec2('CSS Will Change')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.will-change")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("transform")}}</li>
</ul>
