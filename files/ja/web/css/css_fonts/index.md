---
title: CSS フォント
slug: Web/CSS/CSS_Fonts
tags:
  - CSS
  - CSS フォント
  - Reference
  - 概要
translation_of: Web/CSS/CSS_Fonts
---
<div>{{CSSRef}}</div>

<p><strong>CSS フォント</strong>は CSS のモジュールの一つで、フォントに関するプロパティを定義し、どのようにフォントリソースを読み取るのかを定義します。これによって、単一の文字に利用できる複数のフォントがある場合、使用するフォントのスタイルを、例えばフォントファミリ、寸法、太さ、行の高さ、グリフの種類を定義することができます。</p>

<h2 id="Basic_example" name="Basic_example">基本的な例</h2>

<p>以下の例は、テキストの段落をスタイル付けする基本的なフォントプロパティの使い方を示します。</p>

<pre class="brush: css">p {
  width: 600px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  font-style: italic;
  font-weight: 100;
  font-variant-ligatures: normal;
  font-size: 2rem;
  letter-spacing: 1px;
}</pre>

<pre class="brush: html">&lt;p&gt;Three hundred years ago&lt;br&gt;
  I thought I might get some sleep&lt;br&gt;
  I stretched myself out onna antique bed&lt;br&gt;
  An' my spirit did a midnite creep&lt;/p&gt;</pre>

<p>結果は以下のようになります。</p>

<p>{{EmbedLiveSample('Basic_example', '100%', '200')}}</p>

<h2 id="Variable_fonts_examples" name="Variable_fonts_examples">可変フォントの例</h2>

<p>たくさんの可変フォントの例を <a href="https://v-fonts.com/">v-fonts.com</a> および <a href="https://www.axis-praxis.org/">axis-praxis.org</a> で見ることができます。詳しい情報と使い方の情報は、<a href="/ja/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide">可変フォントガイド</a>も参照してください。</p>

<h2 id="Reference" name="Reference">リファレンス</h2>

<h3 id="Properties" name="Properties">プロパティ</h3>

<div class="index">
<ul>
 <li>{{cssxref("font")}}</li>
 <li>{{cssxref("font-family")}}</li>
 <li>{{cssxref("font-feature-settings")}}</li>
 <li>{{cssxref("font-kerning")}}</li>
 <li>{{cssxref("font-language-override")}}</li>
 <li>{{cssxref("font-optical-sizing")}}</li>
 <li>{{cssxref("font-size")}}</li>
 <li>{{cssxref("font-size-adjust")}}</li>
 <li>{{cssxref("font-stretch")}}</li>
 <li>{{cssxref("font-style")}}</li>
 <li>{{cssxref("font-synthesis")}}</li>
 <li>{{cssxref("font-variant")}}</li>
 <li>{{cssxref("font-variant-alternates")}}</li>
 <li>{{cssxref("font-variant-caps")}}</li>
 <li>{{cssxref("font-variant-east-asian")}}</li>
 <li>{{cssxref("font-variant-ligatures")}}</li>
 <li>{{cssxref("font-variant-numeric")}}</li>
 <li>{{cssxref("font-variant-position")}}</li>
 <li>{{cssxref("font-variation-settings")}}</li>
 <li>{{cssxref("font-weight")}}</li>
 <li>{{cssxref("line-height")}}</li>
</ul>
</div>

<h3 id="At-rules" name="At-rules">@-規則</h3>

<dl>
 <dt>{{cssxref("@font-face")}}</dt>
 <dd>
 <div class="index">
 <ul>
  <li>{{cssxref("@font-face/font-family", "font-family")}}</li>
  <li>{{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}</li>
  <li>{{cssxref("@font-face/font-style", "font-style")}}</li>
  <li>{{cssxref("@font-face/font-variant", "font-variant")}}</li>
  <li>{{cssxref("@font-face/font-weight", "font-weight")}}</li>
  <li>{{cssxref("@font-face/font-stretch", "font-stretch")}}</li>
  <li>{{cssxref("@font-face/src", "src")}}</li>
  <li>{{cssxref("@font-face/unicode-range", "unicode-range")}}</li>
 </ul>
 </div>
 </dd>
 <dt>{{cssxref("@font-feature-values")}}</dt>
</dl>

<h2 id="Guides" name="Guides">ガイド</h2>

<dl>
 <dt><a href="/ja/docs/Learn/CSS/Styling_text/Fundamentals">テキストとフォントのスタイル付けの基礎</a></dt>
 <dd>この初心者向けの学習記事で、基本的なテキストやフォントのスタイル付けを、ウェイト、ファミリとスタイル、 font 一括指定、テキスト配置とその他の効果、行、字間など、詳細にわたって全て通します。</dd>
 <dt><a href="/ja/docs/Web/CSS/CSS_Fonts/OpenType_fonts_guide">OpenType フォント特性ガイド</a></dt>
 <dd>フォント特性またはバリアントは、 OpenType フォントに含まれている様々な字形や文字スタイルを参照します。これらには合字 ('fi' や 'ffl' のような特殊な形の文字の組み合わせ)、カーニング (特定の字形の組み合わせにおける間隔の調整)、分数、数字のスタイル、他にもたくさんあります。これらはすべて OpenType の特性として参照され、特定のプロパティや低水準制御プロパティ — {{cssxref("font-feature-settings")}} を通してウェブ上で使用することができます。この記事は、 CSS で OpenType フォント特性を使用することについて知る必要があるすべてのことを紹介します。</dd>
 <dt><a href="/ja/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide">可変フォントガイド</a></dt>
 <dd><strong>可変フォント</strong>は OpenType フォント仕様書が進化したもので、幅、太さ、スタイルごとに別々のフォントファイルを用意するのではなく、さまざまな種類のフォントを単一のファイルに組み込むことができます。この記事では、可変フォントを使い始めるために必要なことをすべて紹介します。</dd>
</dl>

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
   <td>{{SpecName('CSS4 Fonts')}}</td>
   <td>{{Spec2('CSS4 Fonts')}}</td>
   <td><code>font-variation-settings</code> (および関連する高水準プロパティ) および <code>font-optical-sizing</code> を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Fonts')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td><code>font-feature-settings</code> (および関連する高水準プロパティ)</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'fonts.html#font-shorthand', '')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#font', '')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>({{cssxref("font-weight")}} や {{cssxref("font-style")}} など) 基本フォントプロパティの多くはブラウザー間で良く対応されていますが、もっと新しいもののいくつかは対応が限られています。全体としてはそれぞれのリファレンスページにあるブラウザーの対応情報を見る必要があります。</p>
