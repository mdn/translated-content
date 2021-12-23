---
title: バッジ付きリストグループ
slug: Web/CSS/Layout_cookbook/List_group_with_badges
tags:
  - CSS
  - Layout
  - box alignment
  - cookbook
  - flexbox
  - lists
translation_of: Web/CSS/Layout_cookbook/List_group_with_badges
---
<p>{{CSSRef}}</p>

<p class="summary"><span class="seoSummary">このレシピでは、カウントを示すバッジ付きのリストグループのパターンを作成します。</span></p>

<p><img alt="テキストの右側に表示されるカウントを示すバッジ付きの項目のリスト。" src="https://mdn.mozillademos.org/files/16255/list-group-badges.png" style="height: 423px; width: 791px;"></p>

<h2 id="Requirements" name="Requirements">要件</h2>

<p>項目のコンテンツ量に関係なく、リスト項目の右側にバッジを並べて表示する必要があります。 1行のコンテンツでも、複数行のコンテンツでも、バッジは常に垂直方向の中央に配置する必要があります。</p>

<h2 id="Recipe" name="Recipe">レシピ</h2>

<p>{{EmbedGHLiveSample("css-examples/css-cookbook/list-group-badges.html", '100%', 720)}}</p>

<div class="note">
<p><a href="https://github.com/mdn/css-examples/blob/master/css-cookbook/list-group-badges--download.html">この例をダウンロードする</a></p>
</div>

<h2 id="Choices_made" name="Choices_made">行った選択</h2>

<p>フレックスボックスは、この特定のパターンを簡単にし、またレイアウトの変更を容易にします。</p>

<p>テキストとバッジが正しく並ぶようにするために、{{cssxref("justify-content")}} プロパティに <code>space-between</code> の値を使用します。 これにより、項目間に余分なスペースが入ります。 実際の例では、このプロパティを削除すると、テキストが1行より短い項目のバッジがテキストの末尾に移動します。</p>

<p>コンテンツを垂直方向に揃えるには、{{cssxref("align-items")}} プロパティを使用してテキストとバッジを交差軸上で揃えます。 代わりに、バッジをコンテンツの上部に揃える場合は、これを <code>align-items: flex-start</code> に変更します。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>さまざまなレイアウト方法が異なるブラウザーサポートを持っています。 使用されているプロパティの基本的なサポートの詳細については、以下の表を参照してください。</p>

<h4 id="justify-content" name="justify-content">justify-content</h4>

<p>{{Compat("css.properties.justify-content")}}</p>

<h4 id="align-items" name="align-items">align-items</h4>

<p>{{Compat("css.properties.align-items")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox">フレックスボックスでのボックス配置</a></li>
 <li><a href="/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">フレックスコンテナー内のアイテムの配置</a></li>
</ul>
