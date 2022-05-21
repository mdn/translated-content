---
title: 'SVG: Scalable Vector Graphics'
slug: Web/SVG
tags:
  - 2D Graphics
  - Graphics
  - Icons
  - Images
  - Reference
  - Responsive Design
  - SVG
  - Scalable Graphics
  - Scalable Images
  - Vector Graphics
  - Web
  - l10n:priority
translation_of: Web/SVG
---
<div>{{SVGRef}}</div>

<h2 id="Getting_started_with_svg">SVG を始めましょう</h2>

<p class="summary" style="border-top-width: 0; padding-top: 0;"><span class="seoSummary"><strong>Scalable Vector Graphics (SVG)</strong> は、二次元ベースの<a class="external" href="https://ja.wikipedia.org/wiki/ベクタ形式">ベクター形式</a>のための <a href="/ja/docs/Web/XML" title="XML">XML</a> に基づくマークアップ言語です。そのため、どんな大きさでもきれいにレンダリングできる画像を記述するためのテキストベースのオープンなウェブ標準であり、特に他のウェブ標準、例えば <a href="/ja/docs/Web/CSS">CSS</a>, <a href="/ja/docs/Web/API/Document_Object_Model">DOM</a>, <a href="/ja/docs/Web/JavaScript">JavaScript</a>, <a href="/ja/docs/Web/SVG/SVG_animation_with_SMIL">SMIL</a> などとうまく機能するように設計されています。 SVG は本質的に、グラフィックに対するもので、テキストに対する <a href="/ja/docs/Web/HTML">HTML</a> のような位置づけです。</span></p>

<p>SVG 画像と関連する振る舞いは <span class="seoSummary"><a href="/ja/docs/Web/XML">XML</a></span> のテキストファイルに定義されるので、検索したり、インデックスをつけたり、スクリプトで操作したり、圧縮したりすることができます。加えて、これはあらゆるテキストエディターやドローソフトで作成したり編集したりできることを意味します。</p>

<p>旧来の {{Glossary("JPEG")}} や {{Glossary("PNG")}} のようなビットマップ画像形式と比較して、 SVG 形式のベクター画像は、品質を損なうことなく任意の大きさでレンダリングすることができ、テキストを更新することで、グラフィックエディターを使用せずに簡単にローカライズすることができます。適切なライブラリを使用すれば、 SVG ファイルをその場でローカライズすることも可能です。</p>

<p>SVG は1999年から <a href="https://www.w3.org/">World Wide Web Consortium (W3C)</a> によって開発されています。</p>

<p><a href="/ja/docs/Web/SVG/Tutorial">SVG教本</a>も参照してください。</p>

<h2 id="Documentation">ドキュメント</h2>

<dl>
  <dt><a href="/ja/docs/Web/SVG/Element" title="SVG/Element">SVG 要素リファレンス</a></dt>
  <dd>各 SVG 要素についての詳細情報です。</dd>
  <dt><a href="/ja/docs/Web/SVG/Attribute" title="SVG/Attribute">SVG 属性リファレンス</a></dt>
  <dd>各 SVG 属性の詳細情報です。</dd>
  <dt><a href="/ja/docs/Web/API/Document_Object_Model#svg_interfaces">SVG DOM インターフェイスリファレンス</a></dt>
  <dd>JavaScript と連携するための SVG DOM API の詳細情報です。</dd>
  <dt><a href="/ja/docs/Web/SVG/Applying_SVG_effects_to_HTML_content">HTML コンテンツへ SVG 効果を適用する</a></dt>
  <dd>SVG は {{Glossary("HTML")}}、{{Glossary("CSS")}} と {{Glossary("JavaScript")}} と連携して動作します。SVG を使用することで、<a href="/ja/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction">通常の HTML ページや Web アプリケーションを拡張</a>できます。</dd>
</dl>

<h2 id="Community">コミュニティ</h2>

<ul>
 <li>Mozilla のフォーラムを見る... {{DiscussionList("dev-tech-svg", "mozilla.dev.tech.svg")}}</li>
</ul>

<h2 id="Tools">ツール</h2>

<ul>
  <li><a href="https://github.com/w3c/svgwg/wiki/Testing">SVG テストスイート</a></li>
  <li><a href="https://validator.w3.org/#validate_by_input">Markup Validator</a></li>
  <li>その他のリソース: <a href="/ja/docs/Web/XML">XML</a>, <a href="/ja/docs/Web/CSS">CSS</a>, <a href="/ja/docs/Web/API/Document_Object_Model">DOM</a>, <a href="/ja/docs/Web/API/Canvas_API">Canvas</a></li>
</ul>

<h2 class="Related_Topics" id="Examples">例</h2>

<ul>
  <li>Google <a href="http://maps.google.com">マップ</a> (経路のオーバーレイ) と <a href="http://docs.google.com">Docs</a> (spreadsheet のグラフ)</li>
  <li><a href="http://starkravingfinkle.org/projects/demo/svg-bubblemenu-in-html.xml">SVG bubble menus</a></li>
  <li><a href="http://jwatt.org/svg/authoring/">SVG 作成のガイドライン</a></li>
  <li><a href="/ja/docs/Web/SVG/SVG_as_an_Image">画像としての SVG</a></li>
  <li><a href="/ja/docs/Web/SVG/SVG_animation_with_SMIL">SMIL を用いた SVG のアニメーション</a></li>
  <li><a href="http://plurib.us/1shot/2007/svg_gallery/">SVG art gallery</a></li>
</ul>

<h3 id="Animation_and_interactions">アニメーションとインタラクション</h3>

<p>HTML のように、SVG はドキュメントモデル (DOM) およびイベントを持ち、JavaScript からアクセスが可能です。これを利用することで、開発者はリッチなアニメーションやインタラクティブな画像を制作できます。</p>

<ul>
 <li><a href="http://svg-wow.org/">svg-wow.org</a> に掲載されている、見て楽しむ SVG</li>
 <li>Firefox の拡張機能 (<a href="http://schepers.cc/grafox/">Grafox</a>) は、{{Glossary("SMIL")}} アニメーションサポートのサブセットを追加します</li>
 <li>インタラクティブな<a href="http://demo.huihoo.com/amplesdk/examples/applications/svgalbum/index.html">写真</a>の操作</li>
 <li>SVG の <code>foreignObject</code> の利用による <a href="http://starkravingfinkle.org/blog/2007/07/firefox-3-svg-foreignobject/">HTML transformations</a></li>
</ul>

<h3 id="Mapping_charting_games_3D_experiments">地図、グラフ、ゲームおよび 3D の実験</h3>

<p>SVG をほんの少し利用するだけでも、ウェブコンテンツを格段に向上させることができます。以下に挙げるのは、SVG を本格的に使用した例です。</p>

<ul>
 <li><a href="https://web.archive.org/web/20131019072450/http://www.treebuilder.de/svg/connect4.svg" title="元リンク先が要認証となったので、アーカイブへのリンクを示します。">Connect 4</a></li>
 <li><a href="http://jvectormap.com/">jVectorMap</a> (データ視覚化用の双方向マップ)</li>
 <li><a href="http://jointjs.com">JointJS</a> (JavaScript ダイアグラムライブラリ)</li>
 <li><a href="https://d3js.org">D3</a> (HTML、 SVG、 CSS を視覚化する JavaScript ライブラリ)</li>
</ul>
