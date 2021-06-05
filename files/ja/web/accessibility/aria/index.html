---
title: ARIA
slug: Web/Accessibility/ARIA
tags:
  - ARIA
  - Accessibility
  - HTML
translation_of: Web/Accessibility/ARIA
---
<p class="summary"><span class="seoSummary">Accessible Rich Internet Applications <strong>(ARIA)</strong> はウェブコンテンツやウェブアプリケーション (特に JavaScript で開発するもの) を、ハンディキャップを持つ人々にとってよりアクセシブルにする方法を定義します。</span></p>

<p><span class="seoSummary">ARIA は、アプリケーションで一般的に使用されている対話操作やウィジェットを、他のメカニズムがない場合に支援技術に渡すことができるように HTML を補完します。</span>例えば ARIA は、 HTML4 のアクセシブルナビゲーションランドマーク、 JavaScript のウィジェット、フォームのヒントやエラーメッセージ、ライブコンテンツの更新などを可能にします。</p>

<div class="warning">
<p>これらのウィジェットの多くは、後に HTML5 に組み込まれました。意味的に正しい HTML 要素が存在するのであれば、 <strong>ARIA を使用するよりも、その要素を使用したほうがいいでしょう</strong>。例えば、ネイティブな要素には<a href="/ja/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets">キーボードのアクセシビリティ</a>や役割、状態が組み込まれています。しかし、 ARIA を使用する場合は、スクリプトで (同等の) ブラウザーの動作を模倣する責任があります。</p>
</div>

<p>プログレスバーウィジェットのためのマークアップです。</p>

<pre class="brush: html">&lt;div id="percent-loaded" role="progressbar" aria-valuenow="75"
     aria-valuemin="0" aria-valuemax="100"&gt;
&lt;/div&gt;
</pre>

<p>このプログレスバーは、意味を持たない <code>&lt;div&gt;</code> を使って作られています。残念ながら、 HTML 4 には開発者が利用できるより意味のある要素がないので、 ARIA の役割とプロパティを追加する必要があります。要素に属性を追加することでこれを指定します。この例では、 <code>role="progressbar"</code> 属性により、この要素が実際には JavaScript を使用したプログレスバーウィジェットであることをブラウザーに伝えています。 <code>aria-valuemin</code> および <code>aria-valuemax</code> 属性はプログレスバーの最小値と最大値を指定し、 <code>aria-valuenow</code> は現在の状態を表すため、 JavaScript から更新し続けます。</p>

<p>マークアップに直接配置するとともに、 ARIA の属性を要素に追加して、次のような JavaScript コードを使用して動的に更新することができます。</p>

<pre class="brush: js">// プログレスバーの &lt;div&gt; を DOM 内で探す。
var progressBar = document.getElementById("percent-loaded");

// ARIA ロールと状態を設定することで、
// 支援技術がウィジェットの種類を知ることができる。
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// プログレスバーの値を更新したいときにいつでも呼び出せる
// 関数を作成する。
function updateProgress(percentComplete) {
  progressBar.setAttribute("aria-valuenow", percentComplete);
}</pre>

<div class="note">
<p>ARIA は HTML4 以降に導入されたため、 HTML4 や XHTML の派生形では検証できません。ただし、技術的に問題があっても、それを上回るアクセシビリティの向上が得られます。</p>

<p>HTML5 では、すべての ARIA 属性が有効です。新しいランドマーク要素 (<code>&lt;main&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> など) は ARIA ロールに組み込まれたため、重複指定する必要はありません。</p>
</div>

<h2 id="Support">対応</h2>

<p>他のウェブ技術と同様に、 ARIA の対応には様々な程度があります。対応の程度は、使用しているオペレーティングシステムとブラウザー、それらと連携している支援技術の種類によって異なります。また、OS、ブラウザー、支援技術のバージョンも要因となります。古いバージョンのソフトウェアは、特定の ARIA ロールを対応していなかったり、部分的にしか対応していなかったり、機能を誤って報告していたりする可能性があります。</p>

<p>また、支援技術に依存している人の中には、コンピューターやブラウザーとのやり取りができなくなることを恐れて、ソフトウェアの更新に消極的な人がいることも認識しておく必要があります。そのため、できるだけ<a href="/ja/docs/Learn/Accessibility/HTML">意味を持った HTML 要素を使用する</a>ことが重要です。意味を持った HTML は、支援技術への対応がはるかに優れているからです。</p>

<p>また、作成した ARIA を実際の支援技術でテストすることも重要です。ブラウザーのエミュレーターやシミュレーターを使っても、完全な対応をテストするために効果的ではないのと同様に、代理の支援技術ソリューションを使用しても、機能性を完全に保証することはできません。</p>

<h2 id="Tutorials">チュートリアル</h2>

<dl>
 <dt><a href="/ja/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets">ARIA 入門</a></dt>
<dd>ARIA で動的コンテンツをアクセシブルにする方法の簡単な紹介です。2008 年に作成された、定評のある <a href="https://dev.opera.com/articles/view/introduction-to-wai-aria/">Gez Lemon 氏による ARIA の紹介</a>もご覧ください。</dd>
 <dt><a href="https://zomigi.com/blog/videos-of-screen-readers-using-aria-updated/">Videos of screen readers using ARIA</a></dt>
 <dd>ARIA の導入「前」および「後」を含む、ウェブ中の簡単な実例のビデオをご覧ください。</dd>
 <dt><a href="https://w3c.github.io/using-aria/">Using ARIA</a></dt>
 <dd>開発者向けの実践的なガイドです。HTML 要素で使用する ARIA 属性は何かについて提案しています。提案内容は、実際の実装状況に基づいています。</dd>
</dl>

<h2 id="Simple_ARIA_Enhancements">単純な ARIA の強化</h2>

<dl>
 <dt><a href="https://www.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/">Enhancing page navigation with ARIA landmarks</a></dt>
 <dd>画面リーダーの利用者向けにウェブページのナビゲーションを向上させるための、 ARIA landmark の使用法を紹介します。 <a href="https://www.paciellogroup.com/blog/2011/07/html5-accessibility-chops-aria-landmark-support/">ARIA landmark の実装状況の覚え書き</a>や実際のサイトでの例もご覧ください (2011 年 7 月更新)。</dd>
 <dt><a href="/ja/docs/Web/Accessibility/ARIA/forms">フォームのアクセシビリティ向上</a></dt>
 <dd>ARIA は動的コンテンツのためだけのものではありません! 付加的な ARIA の属性を使用して HTML フォームのアクセシビリティを向上させる方法を学びましょう。</dd>
</dl>

<h2 id="ARIA_for_Scripted_Widgets">スクリプトウィジェット向け ARIA</h2>

<dl>
 <dt><a href="/ja/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets">キーボードで操作可能な JavaScript ウィジェットを書く</a></dt>
 <dd>&lt;input&gt; や &lt;button&gt; などのような組み込み要素は、キーボードのアクセシビリティが組み込まれています。これらを &lt;div&gt; と ARIA で「偽装」する場合は、ウィジェットがキーボードでアクセシブルであることを保証する必要があります。</dd>
 <dt><a href="/ja/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">ライブリージョン</a></dt>
 <dd>ライブリージョンは、ページのコンテンツが変更された場合に、画面リーダーにどのように対処すべきかを提案します。</dd>
 <dt><a href="https://www.freedomscientific.com/Training/Surfs-up/AriaLiveRegions.htm">Using ARIA Live Regions to announce content changes</a></dt>
 <dd>画面リーダーソフトウェア JAWS のメーカーによる、ライブリージョンについての簡単なまとめです。ライブリージョンは、 Firefox と NVDA、 Safari と VoiceOver でも対応しています。</dd>
</dl>

<h2 class="Tools" id="References">リファレンス</h2>

<dl>
 <dt><a href="/ja/docs/Web/Accessibility/ARIA/Roles">ARIA ロール</a></dt>
 <dd>MDN 上のすべての WAI-ARIA ロールをカバーするリファレンスページです。</dd>
</dl>

<h2 id="Standardization_Efforts">標準化の取り組み</h2>

<dl>
 <dt><a href="https://www.w3.org/TR/wai-aria-1.1/">WAI-ARIA 仕様書</a></dt>
 <dd>W3C の仕様書そのものです。</dd>
 <dt><a href="https://www.w3.org/TR/wai-aria-practices-1.1/">WAI-ARIA Authoring Practices</a></dt>
 <dd>
 <p>一般的なウィジェットや対話操作をどのように ARIA 化するのが最良なのかを記述した、公式のベストプラクティス文書です。優れたリソースです。</p>
 </dd>
</dl>

<h2 id="Videos">動画</h2>

<p>ARIA を理解するには、以下の講演が最適です。</p>

<p><a href="https://www.youtube.com/watch?v=qdB8SRhqvFc">ARIA, Accessibility APIs and coding like you give a damn! – Léonie Watson</a></p>

<h2 id="Filing_Bugs">バグ報告</h2>

<p><a href="/ja/docs/Accessibility/ARIA/How_to_file_ARIA-related_bugs">ブラウザー、スクリーンリーダー、JavaScript ライブラリの ARIA に関するバグを報告してください</a>。</p>

<h2 id="Related_Topics">関連トピック</h2>

<p><a href="/ja/docs/Web/Accessibility">Accessibility</a>, <a href="/ja/docs/Web/Guide/AJAX">AJAX</a>, <a href="/ja/docs/Web/JavaScript">JavaScript</a></p>

<section id="Quick_links">
<ol>
 <li><a href="/ja/docs/Web/Guide">ウェブ開発</a></li>
 <li><a href="/ja/docs/Mozilla/Accessibility">アクセシビリティと Mozilla</a></li>
</ol>
</section>
