---
title: メディアクエリの使用
slug: Web/CSS/Media_Queries/Using_media_queries
tags:
  - Advanced
  - CSS
  - Guide
  - ウェブ
  - ガイド
  - メディア
  - メディアクエリ
  - レスポンシブデザイン
translation_of: Web/CSS/Media_Queries/Using_media_queries
---
<div>{{cssref}}</div>

<p><strong>メディアクエリ</strong>は、一般的な端末の種類 (プリンタと画面など)や特定の特性 (画面の解像度やブラウザーの{{glossary("viewport", "ビューポート")}}の幅など) に応じてサイトやアプリを変更したいときに便利です。</p>

<p>メディアクエリは以下の用途で使用されます。</p>

<ul>
 <li><a href="/ja/docs/Web/CSS">CSS</a> の {{cssxref("@media")}} および {{cssxref("@import")}} <a href="/ja/docs/Web/CSS/At-rule">@-規則</a>により、条件付きでスタイルを適用する。</li>
 <li>{{HTMLElement("link")}}, {{HTMLElement("link")}}, {{HTMLElement("source")}}, などの <a href="/ja/docs/Web/HTML">HTML</a> 要素で <code>media=</code> 属性を付けて特定のメディアを対象とする。</li>
 <li><a href="/ja/docs/Web/JavaScript">JavaScript</a> の {{domxref("Window.matchMedia()")}} および {{domxref("MediaQueryList.addListener()")}} メソッドを使用して<a href="/ja/docs/Web/CSS/Media_Queries/Testing_media_queries">メディアの状態を検査および監視</a>する。</li>
</ul>

<div class="note">
<p><strong>メモ:</strong> このページの例では説明のために CSS の <code>@media</code> を使用していますが、基本構文はすべての種類のメディアクエリで共通です。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>メディアクエリは、任意の<em>メディアタイプ</em>と任意の数の<em>メディア特性</em>の式で構成されます。<em>論理演算子</em>を使用して、複数のクエリを様々な形で組み合わせることができます。メディアクエリは大文字・小文字の区別がありません。</p>

<p>メディアクエリは、 (指定されていれば) メディアタイプが文書を表示している端末に一致しており、<em>かつ</em>すべてのメディア特性式が真と計算されれば、真と計算されます。不明なメディアタイプに対するクエリは常に偽です。</p>

<div class="note">
<p><strong>メモ:</strong> {{HTMLElement("link")}} タグによるメディアクエリ付きのスタイルシートは、クエリが偽を返しても<a href="http://scottjehl.github.com/CSS-Download-Tests/">ダウンロードされます</a>。にもかかわらず、中身はクエリが真に変わらない限り、適用されません。</p>
</div>

<h3 id="Media_types" name="Media_types">メディアタイプ</h3>

<p><em>メディアタイプ</em>は端末の全般的なカテゴリを説明します。 <code>not</code> 又は <code>only</code> の論理演算子を使用する場合を除いて、メディアタイプは任意であり、 <code>all</code> タイプが暗黙に含まれています。</p>

<dl>
 <dt><code id="all">all</code></dt>
 <dd>すべての端末に一致します。</dd>
 <dt><code id="print">print</code></dt>
 <dd>ページ付きの素材や、印刷プレビューモードで画面に表示された文書のためのものです。 (これらの形式に特有の整形上の問題について詳しくは、<a href="/ja/docs/Web/CSS/Paged_Media">ページ付きメディア</a>をご覧ください。)</dd>
 <dt><code id="screen">screen</code></dt>
 <dd>主に画面のためのものです。</dd>
 <dt><code id="speech">speech</code></dt>
 <dd>主に音声合成のためのものです。</dd>
</dl>

<div class="note"><strong>非推奨のメディアタイプ:</strong> CSS2.1 及び<a href="https://drafts.csswg.org/mediaqueries-3/#background">メディアクエリ 3</a> では、いくつかの追加のメディアタイプ (<code>tty</code>, <code>tv</code>, <code>projection</code>, <code>handheld</code>, <code>braille</code>, <code>embossed</code>, and <code>aural</code>) を定義しましたが、これらは<a href="http://dev.w3.org/csswg/mediaqueries/#media-types">メディアクエリ 4</a> で非推奨となり、使用するべきではありません。 <code>aural</code> タイプは似ている <code>speech</code> で置き換えられました。</div>

<h3 id="Media_features" name="Media_features">メディア特性</h3>

<p><em>メディア特性</em>は、特定の{{glossary("user agent", "ユーザーエージェント")}}や、出力端末や、環境などの特性を記述します。メディア特性式は、存在又は値を検査するもので、完全に任意です。それぞれのメディア特性式は、括弧で囲む必要があります。</p>

<table>
 <thead>
  <tr>
   <th>名前</th>
   <th>概要</th>
   <th>備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{cssxref("@media/any-hover", "any-hover")}}</td>
   <td>入力メカニズムで、ユーザーが要素上でのホバーを使用することができるものあるか</td>
   <td>Media Queries Level 4 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/any-pointer", "any-pointer")}}</td>
   <td>入力メカニズムにポインティングデバイスがあるか、もしそうであればどれだけ正確なものであるか</td>
   <td>Media Queries Level 4 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/aspect-ratio", "aspect-ratio")}}</td>
   <td>ビューポートの幅対高さのアスペクト比</td>
   <td></td>
  </tr>
  <tr>
   <td>{{cssxref("@media/color", "color")}}</td>
   <td>出力端末の色コンポーネントあたりの色数、または端末がカラーでなければゼロ</td>
   <td></td>
  </tr>
  <tr>
   <td>{{cssxref("@media/color-gamut", "color-gamut")}}</td>
   <td>ユーザーエージェント及び出力端末が対応しているおよその色の範囲</td>
   <td>Media Queries Level 4 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/color-index", "color-index")}}</td>
   <td>出力端末の色参照表の項目数、又は端末がそのような表を使用していないのであればゼロ</td>
   <td></td>
  </tr>
  <tr>
   <td>{{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}} {{obsolete_inline}}</td>
   <td>出力端末の幅対高さのアスペクト比</td>
   <td>Media Queries Level 4 で非推奨。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/device-height", "device-height")}} {{obsolete_inline}}</td>
   <td>出力端末のレンダリング面の高さ</td>
   <td>Media Queries Level 4 で非推奨。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/device-width", "device-width")}} {{obsolete_inline}}</td>
   <td>出力端末のレンダリング面の幅</td>
   <td>Media Queries Level 4 で非推奨。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/display-mode", "display-mode")}}</td>
   <td>ウェブアプリのマニフェストの <a href="/ja/docs/Web/Manifest#display"><code>display</code></a> メンバーで指定されているアプリケーションの表示モード</td>
   <td><a href="http://w3c.github.io/manifest/#the-display-mode-media-feature">Web App Manifest 仕様書</a>で定義</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/forced-colors", "forced-colors")}}</td>
   <td>ユーザーエージェントがカラーパレットを制限しているかどうかを検出する</td>
   <td>Media Queries Level 5 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/grid", "grid")}}</td>
   <td>出力端末はグリッドとビットマップ画面のどちらを使用するか</td>
   <td></td>
  </tr>
  <tr>
   <td>{{cssxref("@media/height", "height")}}</td>
   <td>ビューポートの高さ</td>
   <td></td>
  </tr>
  <tr>
   <td>{{cssxref("@media/hover", "hover")}}</td>
   <td>主要な入力メカニズムで、ユーザーが要素上でのホバーを使用することができるか</td>
   <td>Media Queries Level 4 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/inverted-colors", "inverted-colors")}}</td>
   <td>ユーザーエージェントまたはその下の OS が色を反転しているか</td>
   <td>Media Queries Level 5 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/light-level", "light-level")}}</td>
   <td>環境の明るさレベル</td>
   <td>Media Queries Level 5 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/monochrome", "monochrome")}}</td>
   <td>出力端末のモノクロフレームバッファーにおけるピクセルあたりのビット数、又は端末がモノクロでなければゼロ</td>
   <td></td>
  </tr>
  <tr>
   <td>{{cssxref("@media/orientation", "orientation")}}</td>
   <td>ビューポートの向き</td>
   <td></td>
  </tr>
  <tr>
   <td>{{cssxref("@media/overflow-block", "overflow-block")}}</td>
   <td>ビューポートをブロック軸方向にあふれたコンテンツを出力端末がどのように扱うか</td>
   <td>Media Queries Level 4 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/overflow-inline", "overflow-inline")}}</td>
   <td>ビューポートをインライン軸方向にあふれたコンテンツがスクロールできるか</td>
   <td>Media Queries Level 4 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/pointer", "pointer")}}</td>
   <td>主要な入力メカニズムがポインティングデバイスであるか、もしそうであればどれだけ正確なものであるか</td>
   <td>Media Queries Level 4 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}</td>
   <td>ユーザーが明るいまたは暗い色遣いを望んでいるかどうかを検出する</td>
   <td>Media Queries Level 5 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/prefers-contrast", "prefers-contrast")}}</td>
   <td>ユーザーがシステムに隣り合う色のコントラスト量を増加または減少させるよう要求したかどうかを検出する</td>
   <td>Media Queries Level 5 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}</td>
   <td>ユーザーがページであまり動きを望まないかどうか</td>
   <td>Media Queries Level 5 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}</td>
   <td>ユーザーが透明度を下げるよう望んでいるかどうか</td>
   <td>Media Queries Level 5 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/resolution", "resolution")}}</td>
   <td>出力端末のピクセル密度</td>
   <td></td>
  </tr>
  <tr>
   <td>{{cssxref("@media/scan", "scan")}}</td>
   <td>出力端末のスキャン処理方式</td>
   <td></td>
  </tr>
  <tr>
   <td>{{cssxref("@media/scripting", "scripting")}}</td>
   <td>スクリプト (例えば JavaScript) が利用できるかを検出する</td>
   <td>Media Queries Level 5 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/update-frequency", "update")}}</td>
   <td>どれだけの頻度で出力端末がコンテンツの表示を変更できるか</td>
   <td>Media Queries Level 4 で追加。</td>
  </tr>
  <tr>
   <td>{{cssxref("@media/width", "width")}}</td>
   <td>ビューポートの幅</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h3 id="Logical_operators" name="Logical_operators">論理演算子</h3>

<p><em>論理演算子</em> <code>not</code>, <code>and</code>, <code>only</code> を使用して、複雑なメディアクエリを構成することができます。複数のメディアクエリをカンマで区切って、単一の規則にまとめることもできます。</p>

<h4 id="and" name="and"><code>and</code></h4>

<p><code>and</code> 演算子は、複数のメディア特性を一つのメディアクエリにまとめるために使用し、クエリが真になるためには結合されたそれぞれの特性が真を返す必要があります。メディア特性とメディアタイプを組み合わせるためにも使用します。</p>

<h4 id="not" name="not"><code>not</code></h4>

<p><code>not</code> 演算子は、メディアクエリを否定するために使用し、もしクエリが偽を返せば真を返します。カンマ区切りのクエリのリストの中にある場合、適用された特定のクエリのみを否定します。 <code>not</code> 演算子を使用する場合は、メディアタイプも指定<em>しなければなりません</em>。</p>

<div class="note">
<p><strong>メモ:</strong> Level 3 では、 <code>not</code> キーワードは個別のメディア特性式を否定するために使用することはできず、メディアクエリ全体に対してしか使用できません。</p>
</div>

<h4 id="only" name="only"><code>only</code></h4>

<p><code>only</code> 演算子はクエリ全体が一致した場合にスタイルを適用し、古いブラウザーで選択されたスタイルが適用されるのを防ぐために使用します。 <code>only</code> を使用しない場合、古いブラウザーは <code>screen and (max-width: 500px)</code> というクエリを単なる <code>screen</code> として解釈してクエリの注釈を無視し、あらゆる画面にスタイルを適用します。 <code>only</code> 演算子を使用する場合は、メディアタイプも指定<em>しなければなりません</em>。</p>

<h4 id="comma" name="comma"><code>,</code> (カンマ)</h4>

<p>カンマは、複数のメディアクエリを一つのメディアクエリに結合するために使用します。カンマで区切ったリストの中にあるそれぞれのクエリは、他とは別なものとして扱われます。よって、リストの中の何れかのクエリが真になれば、メディアステートメント全体が真を返します。言い換えれば、リストは論理 <code>or</code> 演算子のように動作します。</p>

<h2 id="Targeting_media_types" name="Targeting_media_types">メディアタイプの対象化</h2>

<p>メディアタイプは、その端末の一般的なカテゴリを記述します。ウェブサイトは一般的に画面を想定してデザインされていますが、プリンターや音声ベースのスクリーンリーダーのような、特殊な端末を対象としたスタイルを作成したい場合もあるでしょう。例えば、この CSS はプリンターを対象としています。</p>

<pre class="brush: css">@media print { ... }</pre>

<p>複数の端末を対象にすることもできます。例えば、この <code>@media</code> ルールは2つのメディアクエリーを使用して、画面とプリンターの両方の端末を対象としています。</p>

<pre class="brush: css">@media screen, print { ... }</pre>

<p>すべてのメディアタイプの一覧は、<a class="internal" href="#Media_types">メディアタイプ</a>を参照してください。とても広い用語で端末を記述するため、数はわずかしかありません。もっと具体的な属性で対象にするには、代わりに<em>メディア特性</em>を使用してください。</p>

<h2 id="Targeting_media_features" name="Targeting_media_features">メディア特性を対象とする</h2>

<p>メディア特性は、{{glossary("user agent", "ユーザーエージェント")}}、出力端末、環境などの特定の特徴を記述します。例えば、画面の広いモニター、マウスを使用したコンピューター、暗い状況で使用される端末などに対して特定のスタイルを適用することができます。この例はユーザーの<em>主な</em>入力手段 (マウスなど) が要素の上で停止できる時にスタイルを適用します。</p>

<pre class="brush: css">@media (hover: hover) { ... }</pre>

<p>多くのメディア特性は<em>範囲特性</em>であり、 "min-" 又は "max-" の接頭辞をつけて「最小条件」又は「最大条件」の制約を表現します。例えば、この CSS はブラウザーの{{glossary("viewport", "ビューポート")}}の幅が 12,450px 以下である場合のみ、スタイルを適用します。</p>

<pre class="brush: css">@media (max-width: 12450px) { ... }</pre>

<p>値を指定せずにメディア特性クエリを作成した場合、特性の値がゼロ (または Level 4 では <code>none</code>) ではない場合に中のスタイルが使用されます。例えば、この CSS はカラー画面を持つ任意の端末に適用されます。</p>

<pre class="brush: css">@media (color) { ... }</pre>

<p>ブラウザーを実行している端末である特性が適用されない場合、メディア特性に向けた式は常に偽です。例えば、以下のクエリの中のスタイルは、音声のみの端末には画面のアスペクト比がないので、決して使われません。</p>

<pre class="brush: css">@media speech and (aspect-ratio: 11/5) { ... }</pre>

<p>その他の<a href="#Media_features">メディア特性</a>の例については、それぞれの特性のリファレンスページを参照してください。</p>

<h2 id="Creating_complex_media_queries" name="Creating_complex_media_queries">複雑なメディアクエリの作成</h2>

<p>時々、複数の条件に依存するメディアクエリを作成したくなる場合があるかもしれません。これは、 <code>not</code>, <code>and</code>, <code>only</code> の<strong>論理演算子</strong>の出番です。その上、複数のメディアクエリを<strong>カンマ区切りのリスト</strong>で結合することができます。これによって、同じスタイルを異なる場面に適用することができます。</p>

<p>以前の例で、すでに <code>and</code> 演算子がメディア<em>タイプ</em>とメディア<em>特性</em>をグループ化するために使用されているのを見ました。 <code>and</code>演算子は、複数のメディア特性を1つのメディアクエリに結合することもできます。一方で <code>not</code> 演算子は、メディアクエリを反転し、基本的に普通の意味とは逆になります。 <code>only</code> 演算子は古いブラウザーでスタイルが適用されるのを防止します。</p>

<div class="note">
<p><strong>メモ:</strong> 多くの場合、 <code>all</code> メディアタイプが他のタイプが指定されない場合に既定で使用されます。しかし、 <code>not</code> 又は <code>only</code> 演算子を使用する場合は、メディアタイプを明示的に指定する必要があります。</p>
</div>

<h3 id="Combining_multiple_types_or_features" name="Combining_multiple_types_or_features">複数のタイプ又は特性の組み合わせ</h3>

<p><code>and</code> キーワードはメディア特性をメディアタイプ、<em>又は</em>他のメディア特性に結合します。この例は2つのメディア特性を結合して、スタイルを横長で幅が 30em 以上ある端末に制限します。</p>

<pre class="brush: css">@media (min-width: 30em) and (orientation: landscape) { ... }</pre>

<p>スタイルを画面に限定する場合は、メディア特性に <code>screen</code> メディアタイプを結合します。</p>

<pre class="brush: css">@media screen and (min-width: 30em) and (orientation: landscape) { ... }</pre>

<h3 id="Testing_for_multiple_queries" name="Testing_for_multiple_queries">複数のクエリの検査</h3>

<p>カンマ区切りのリストを使うと、ユーザーの端末が様々なメディアタイプ、特性、状態のいずれか一つに一致する場合にスタイルを適用させることができます。例えば、以下の規則はユーザーの端末の高さが 680px 以上<em>又は</em>画面が縦長モードであるときにスタイルが適用されます。</p>

<pre class="brush: css">@media (min-height: 680px), screen and (orientation: portrait) { ... }</pre>

<p>上記の例について言えば、もしユーザーがページの縦が 800px のプリンターを持っていた場合、最初のクエリが適用されるので media ステートメントは真を返します。同様に、ユーザーが縦長モードでビューポートの高さが 480px のスマートフォンを使っていた場合、2番目のクエリが適用され、 media ステートメントはやはり真を返します。</p>

<h3 id="Inverting_a_querys_meaning" name="Inverting_a_querys_meaning">クエリの意味の反転</h3>

<p><code>not</code> キーワードはメディアクエリ全体の意味を反転します。これは、適用される特定のメディアクエリを単純に反転します。 (従って、メディアクエリのカンマ区切りのリストの中では、それぞれのメディアクエリは適用されません。) <code>not</code> キーワードは個別の特性クエリに対して使用することができず、クエリ全体のみを反転します。 <code>not</code> は以下のクエリの最後に評価されます。</p>

<pre class="brush: css">@media not all and (monochrome) { ... }
</pre>

<p>... よって、上記のクエリは次のように評価されます。</p>

<pre class="brush: css">@media not (all and (monochrome)) { ... }
</pre>

<p>... このようにはなりません。</p>

<pre class="brush: css example-bad">@media (not all) and (monochrome) { ... }</pre>

<p>他の例を挙げます。以下のメディアクエリは、</p>

<pre class="brush: css">@media not screen and (color), print and (color) { ... }
</pre>

<p>... 次のように評価されます。</p>

<pre class="brush: css">@media (not (screen and (color))), print and (color) { ... }</pre>

<h3 id="Improving_compatibility_with_older_browsers" name="Improving_compatibility_with_older_browsers">古いブラウザーとの互換性の維持</h3>

<p><code>only</code> キーワードは、メディア特性がついたメディアクエリに対応していない古いブラウザーで、そのスタイルが適用されるのを防ぎます。<em>最近のブラウザーでは効果がありません。</em></p>

<pre class="brush: css">@media only screen and (color) { ... }
</pre>

<h2 id="Syntax_improvements_in_Level_4" name="Syntax_improvements_in_Level_4">Level 4 での構文の拡張</h2>

<p>Media Queries Level 4 仕様書では、例えば幅や高さについて、よりすっきりとした "range" 型を持つ特性を使ってメディアクエリを作れるよう構文が拡張されました。 Level 4 はこのようなクエリを書くために<em>範囲コンテキスト</em>を追加しています。例えば、幅について <code>max-</code> の特性を使用する場合は、以下のように書くことができます。</p>

<div class="note">
<p><strong>注:</strong> Media Queries Level 4 仕様は、最新のブラウザーはそれなりに対応していますが、一部のメディア機能には十分に対応していません。詳細は <a href="/ja/docs/Web/CSS/@media#Browser_compatibility"><code>@media</code> ブラウザー互換性一覧表</a>を参照してください。</p>
</div>

<pre class="brush: css">@media (max-width: 30em) { ... }</pre>

<p>Media Queries Level 4 では、これを次のように書くことができます。</p>

<pre class="brush: css">@media (width &lt;= 30em) { ... }</pre>

<p><code>min-</code> および <code>max-</code> を使用すると、次のようにして幅が2つの値の間にあるかどうかを検査することができます。</p>

<pre class="brush: css">@media (min-width: 30em) and (max-width: 50em) { ... }</pre>

<p>Level 4 の構文に変換すると、次のようになります。</p>

<pre class="brush: css">@media (30em &lt;= width &lt;= 50em ) { ... }
</pre>

<p>また、 Media Queries Level 4 では <strong>and</strong>, <strong>not</strong>, <strong>or</strong> を伴う完全な論理代数を使ったメディアクエリの組み合わせの方法も追加されました。</p>

<h3 id="Negating_a_feature_with_not" name="Negating_a_feature_with_not"><code>not</code> による特性の否定</h3>

<p>メディア特性を <code>not()</code> を使用して囲むことで、クエリでその特性を否定します。例えば、 <code>not(hover)</code> は端末でホバーができない場合に一致します。</p>

<pre class="brush: css">@media (not(hover)) { ... }</pre>

<h3 id="or_による特性の結合"><code>or</code> による特性の結合</h3>

<p><code>or</code> を使用して複数の特性の中の一つと一致するか検査することができ、特性のうちの何れかが true であれば <code>true</code> になります。例えば、次のクエリは端末がモノクロ画面である、またはホバーができるかどうかを検査します。</p>

<pre class="brush: css">@media (not (color)) or (hover) { ... }
</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/Using_media_queries_from_code">プログラムからのメディアクエリの検査</a></li>
 <li><a href="http://davidwalsh.name/animate-media-queries">CSS Animations Between Media Queries</a></li>
 <li><a href="/ja/docs/Web/CSS/Mozilla_Extensions#Media_features">Mozilla 拡張メディア特性</a></li>
 <li><a href="/ja/docs/Web/CSS/Webkit_Extensions#Media_features">WebKit 拡張メディア特性</a></li>
</ul>
