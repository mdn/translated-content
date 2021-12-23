---
title: 固定フッター
slug: Web/CSS/Layout_cookbook/Sticky_footers
tags:
  - CSS
  - Guide
  - Layout
  - cookbook
  - flexbox
  - grid
  - sticky footer
translation_of: Web/CSS/Layout_cookbook/Sticky_footers
---
<div>{{CSSRef}}</div>

<p class="summary"><span class="seoSummary">固定フッターのパターンは、コンテンツがビューポートの高さより短い場合に、ページのフッターがビューポートの下部に「固定」されるパターンです。 このレシピでこれを作成するためのいくつかのテクニックを見ていきます。</span></p>

<p><img alt="ボックスの底に押し込まれた張り付くフッター" src="https://mdn.mozillademos.org/files/16184/cookbook-footer.png" style="height: 807px; width: 1213px;"></p>

<h2 id="Requirements" name="Requirements">要件</h2>

<p>固定フッターのパターンは、次の要件を満たす必要があります。</p>

<ul>
 <li>コンテンツが短い場合、フッターはビューポートの下部に固定されます。</li>
 <li>ページのコンテンツがビューポートの下部を超えて広がっている場合、フッターは通常どおりコンテンツの下に配置されます。</li>
</ul>

<h2 id="The_recipe" name="The_recipe">レシピ</h2>

<p>{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer.html", '100%', 720)}}</p>

<div class="note">
<p><a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/sticky-footer--download.html">この例をダウンロードする</a></p>
</div>

<div class="note">
<p><strong>注</strong>: この例と以下の例では、ライブ例がうまくいくように、<code>min-height: 100%</code> に設定された <code>wrapper</code> を使用しています。 また、{{htmlelement("body")}} で {{cssxref("min-height")}} を <code>100vh</code> に設定し、それをグリッドコンテナとして使用することで、ページ全体でこれを実現することもできます。</p>
</div>

<h2 id="Choices_made" name="Choices_made">行った選択</h2>

<p>上記の例では、CSS グリッドレイアウトを使用して固定フッターを実現しています。 <code>.wrapper</code> の最小の高さは <code>100%</code> です。 つまり、コンテナーの高さと同じ高さになります。 次に、レイアウトの各部分につき 1 行で、3 行 1 列のグリッドレイアウトを作成します。</p>

<p>グリッドの自動配置では、項目がソース順に配置されるため、ヘッダーは最初の自動サイズ調整トラックに入り、メインコンテンツは <code>1fr</code> トラックに、フッターは最後の自動サイズ調整トラックに入ります。<code>1fr</code> トラックは使用可能なスペースをすべて占有するため、ギャップを埋めるように大きくなります。</p>

<h2 id="Alternate_method" name="Alternate_method">代替方法</h2>

<p>グリッドレイアウトをサポートしていないブラウザーとの互換性が必要な場合は、フレックスボックスを使用して固定フッターを作成することもできます。</p>

<p>{{EmbedGHLiveSample("css-examples/css-cookbook/sticky-footer-flexbox.html", '100%', 720)}}</p>

<p>フレックスボックスの例は同じように始まりますが、<code>.wrapper</code> では <code>display: grid</code> ではなく <code>display: flex</code> を使用し、<code>flex-direction</code> を <code>column</code> に設定します。次に、メインコンテンツを <code>flex-grow: 1</code> に設定し、他の2つの要素を <code>flex-shrink: 0</code> に設定します — これにより、コンテンツがメイン領域いっぱいになったときにそれらが小さく縮小されるのを防ぎます。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<h4 id="grid-template-rows" name="grid-template-rows">grid-template-rows</h4>

<p>{{Compat("css.properties.grid-template-rows")}}</p>

<h4 id="flex-direction" name="flex-direction">flex-direction</h4>

<p>{{Compat("css.properties.flex-direction")}}</p>

<h4 id="flex-grow" name="flex-grow">flex-grow</h4>

<p>{{Compat("css.properties.flex-grow")}}</p>

<h4 id="flex-shrink" name="flex-shrink">flex-shrink</h4>

<p>{{Compat("css.properties.flex-shrink")}}</p>

<h2 id="Resources_on_MDN" name="Resources_on_MDN">MDN にある資料</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">グリッドレイアウトの基本概念</a></li>
</ul>
