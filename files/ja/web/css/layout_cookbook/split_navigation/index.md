---
title: ナビゲーションの分割
slug: Web/CSS/Layout_cookbook/Split_Navigation
tags:
  - CSS
  - Layout
  - Navigation
  - Recipe
  - cookbook
  - flexbox
translation_of: Web/CSS/Layout_cookbook/Split_Navigation
---
<div>{{CSSRef}}</div>

<p class="summary"><span class="seoSummary">1つ以上の要素が他のナビゲーション項目から分離されているナビゲーションのパターンです。</span></p>

<p><img alt="2つのグループに分けられた項目。" src="https://mdn.mozillademos.org/files/16227/split-navigation.png" style="height: 145px; width: 1272px;"></p>

<h2 id="Requirements" name="Requirements">要件</h2>

<p>一般的なナビゲーションのパターンは、ある要素を他の要素から押しのけることです。 2セットの項目を2つの別々のフレックスコンテナにする必要なく、フレックスボックスを使用してこれを実現できます。</p>

<h2 id="Recipe" name="Recipe">レシピ</h2>

<p>{{EmbedGHLiveSample("css-examples/css-cookbook/split-navigation.html", '100%', 520)}}</p>

<div class="note">
<p><a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/split-navigation--download.html">この例をダウンロードする</a></p>
</div>

<h2 id="Choices_made" name="Choices_made">行った選択</h2>

<p>このパターンは、自動マージンとフレックスボックスを組み合わせて項目を分割します。</p>

<p>自動マージンは、適用される方向に利用可能なすべてのスペースを吸収します。 これは、自動マージンを使ってブロックを中央に配置する方法です — ブロックの両側にスペースをすべて取ろうとすると、ブロックが中央に押し込まれます。</p>

<p>この場合、左の自動マージンは利用可能なスペースをすべて占め、項目を右に押します。 リスト内の任意の項目にクラス <code>push</code> を適用できます。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>さまざまなレイアウト方法が異なるブラウザーサポートを持っています。 使用されているプロパティの基本的なサポートの詳細については、以下の表を参照してください。</p>

<h4 id="Flexbox" name="Flexbox">フレックスボックス</h4>

<p>{{Compat("css.properties.flex")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout">CSS フレックスボックスレイアウト</a></li>
</ul>
