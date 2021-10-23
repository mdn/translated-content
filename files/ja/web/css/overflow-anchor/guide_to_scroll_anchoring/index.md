---
title: スクロールアンカリングの紹介
slug: Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
tags:
  - CSS
  - Guide
  - overflow-anchor
  - scroll anchoring
  - スクロールアンカリング
translation_of: Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
---
<div>{{CSSRef}}</div>

<p>ウェブのユーザーであれば、おそらくスクロールアンカリングが解決する問題をよく知っているはずです。速度の遅い接続で長いページを閲覧し、コンテンツを読むためにスクロールを始めるとします。一所懸命に読んでいる間に、ページの見ている部分が突然ジャンプしてしまうことがあります。これはコンテンツの上部に、大きな画像やその他の要素が読み込まれたことによって引き起こされます。</p>

<p><ruby>スクロールアンカリング<rp> (</rp><rt>scroll anchoring</rt><rp>) </rp></ruby>はブラウザーの機能で、ユーザーが既に文書の新しい部分にスクロールした後で、コンテンツが読み込まれたことでページ内容の移動が発生してしまう問題を解決するためのものです。</p>

<h2 id="How_does_it_work" name="How_does_it_work">どのように動作するか</h2>

<p>スクロールアンカリングは、表示域 (viewport) 外で起こった変化に対し、スクロール位置を調整する機能です。つまり、文書内のスクロール位置が実際には変わっているのにも関わらず、ユーザーが見ていた個所が表示域に留まり続けます。</p>

<h2 id="How_do_I_turn_on_scroll_anchoring" name="How_do_I_turn_on_scroll_anchoring">スクロールアンカリングを有効にするには</h2>

<p>何もする必要はありません。この機能は、対応しているブラウザーでは既定で有効になっています。ほとんどの場合において、スクロールを固定することは望み通りでしょう。 — コンテンツが急に移動してしまうのは、誰にとっても使い勝手が悪いものです。</p>

<h2 id="What_if_I_need_to_debug_it" name="What_if_I_need_to_debug_it">デバッグする必要がある場合</h2>

<p>スクロールアンカリングを有効にしてページの動作がうまくいかない場合は、一部の <code>scroll</code> イベントリスナーがアンカーノードの動きを補うための余分なスクロールをうまく処理していないことが原因とかもしれません。</p>

<p>Firefox では <code>about:config</code> で <code>layout.css.scroll-anchoring.enabled</code> を <code>false</code> に変更してスクロールアンカリングを無効にすることで、問題が解決するかどうかを確認できます。</p>

<p>解決した場合は、Firefox がアンカーとして使用しているノードを <code>layout.css.scroll-anchoring.highlight</code> スイッチで確認できます。これにより、アンカーノードの上に紫色のオーバーレイが表示されます。</p>

<p>あるノードがアンカーとして適切でないと思われる場合は、以下のように {{cssxref("overflow-anchor")}} を使用してそのノードを除外することができます。</p>

<h2 id="無効にする必要がある場合は">無効にする必要がある場合は</h2>

<p>仕様書では、新しいプロパティである {{cssxref("overflow-anchor")}} を追加し、スクロールアンカリングを文書全体、もしくは一部で無効にできるようにしています。基本的には、自動的に有効にされたスクロールアンカリングをオプトアウトする仕組みです。</p>

<p>指定できる値は、 <code>auto</code> または <code>none</code> のどちらかです。</p>

<ul>
 <li><code>auto</code> が初期値です。対応しているブラウザーでは、スクロールアンカリングの動作をします。そして、コンテンツの急な移動も少なくなります。</li>
 <li><code>none</code> は、文書全体、もしくは一部でスクロールアンカリングを明示的にオプトアウトするための値です。</li>
</ul>

<p>文書全体でスクロールアンカリングを無効にするには、 {{htmlelement("body")}} 要素にプロパティを指定してください。。</p>

<pre class="brush: css notranslate">body {
  overflow-anchor: none;
}</pre>

<p>文書の特定の部分でスクロールアンカリングを無効にしたい場合は、そのコンテンツを囲む要素に <code>overflow-anchor: none</code> を指定します。</p>

<pre class="brush: css notranslate">.container {
  overflow-anchor: none;
}</pre>

<div class="blockIndicator note">
<p><strong>注</strong>: 仕様書にも書かれていますが、スクロールアンカリングが無効にされた場合、その子孫要素から再び有効にすることはできません。例えば、スクロールアンカリングが文書全体で無効にされた際、文書内の一部に <code>overflow-anchor: auto</code> を指定しても、その部分でスクロールアンカリングは動作しません。</p>
</div>

<h3 id="Suppression_triggers" name="Suppression_triggers">抑制トリガー</h3>

<p>仕様書では、問題になる可能性がある場合はその場でスクロールアンカリングを無効にする、抑制トリガー (<em>suppression triggers</em>) についても説明しています。スクロールアンカリングを指定したノードもしくはその祖先でトリガーが発生した場合、スクロールアンカリングが抑制されます。</p>

<p>抑制トリガーとなるのは、次のプロパティの計算値 (computed value) が変更された場合です。</p>

<ul>
 <li>{{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("bottom")}}</li>
 <li>{{cssxref("margin")}}, {{cssxref("padding")}}</li>
 <li>{{cssxref("width")}} もしくは {{cssxref("height")}} に関連するプロパティすべて</li>
 <li>{{cssxref("transform")}}</li>
</ul>

<p>さらに、スクロールボックス内の任意の場所で {{cssxref("position")}} を変更した場合もスクロールアンカリングが無効になります。</p>

<div class="blockIndicator note">
<p>バグ {{bug(1584285)}} で、Firefox Nightly に <code>layout.css.scroll-anchoring.suppressions.enabled</code> フラグが追加され、これらのトリガーを無効化できるようになりました。</p>
</div>

<h2 id="Further_reading" name="Further_reading">その他の解説</h2>

<ul>
 <li><a href="https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md">Explainer document on the WICG site</a></li>
 <li><a href="https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html">Scroll anchoring for web developers on the Chromium blog</a></li>
 <li><a href="https://blog.eqrion.net/pin-to-bottom/">Implement a pin-to-bottom scrolling element using scroll anchoring</a></li>
</ul>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>ブラウザーでスクロールアンカリングが利用できるかどうかを検査する必要がある場合は、<a href="/ja/docs/Web/CSS/@supports">特性クエリ</a>を使用して <code>overflow-anchor</code> プロパティに対応しているかどうかを検査してください。</p>

<p>{{Compat("css.properties.overflow-anchor")}}</p>
