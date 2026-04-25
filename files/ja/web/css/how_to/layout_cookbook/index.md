---
title: CSS レイアウト料理帳
short-title: レイアウト料理帳
slug: Web/CSS/How_to/Layout_cookbook
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

CSS レイアウト料理帳は、よくあるレイアウトパターンや、自分のサイトに実装する可能性がある事柄のレシピを共有するためのものです。プロジェクトの出発点として使うことができるコードを提供することに加えて、これらのレシピは様々な方法のレイアウト仕様書を使用することができることに光を当て、開発者として選択ができるようにします。

> [!NOTE]
> CSS のレイアウトが初めてならば、最初に [CSS レイアウト学習モジュール](/ja/docs/Learn_web_development/Core/CSS_layout)を見て、ここのレシピを活用するのに必要な基本的な背景知識を得た方が良いかもしれません。

## レシピ

| レシピ                                   | 説明                                                                                        | レイアウト手法                                                                                       |
| ---------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [メディアオブジェクト][media-objects]    | 一方が画像でもう一方が説明テキストである二列のボックス。 例えば Facebook の投稿やツイート。 | [CSS グリッド][css-grid]、{{cssxref("float")}} による代替、{{cssxref("fit-content")}} による寸法制御 |
| [コラムレイアウト][columns]              | 段組みレイアウト、フレックスボックス、グリッドの選択                                        | [CSS グリッド][css-grid], [段組み][multicol], [フレックスボックス][flexbox]                          |
| [要素を中央に配置][center]               | アイテムを水平および垂直方向に中央に配置する方法                                            | [フレックスボックス][flexbox], [ボックス配置][box-alignment]                                         |
| [張りつくフッター][sticky-footers]       | コンテンツが短い場合にコンテナーまたはビューポートの最下部に配置されるフッターの作成。      | [CSS グリッド][css-grid], [フレックスボックス][flexbox]                                              |
| [分割ナビゲーション][split-navigation]   | 一部のリンクが他と視覚的に分割されているナビゲーションパターン。                            | [フレックスボックス][flexbox], {{cssxref("margin")}}                                                 |
| [パンくずナビゲーション][breadcrumb]     | 来訪者がページ階層の上の階層に戻ることができるリンクのリストの作成。                        | [フレックスボックス][flexbox]                                                                        |
| [バッジ付きリストグループ][list-badges]  | 個数を表示するバッジの付いたアイテムのリスト。                                              | [フレックスボックス][flexbox], [ボックス配置][box-alignment]                                         |
| [ページ切り替え][pagination]             | コンテンツの各ページへのリンク (検索結果など)。                                             | [フレックスボックス][flexbox], [ボックス配置][box-alignment]                                         |
| [カード][card]                           | カードのグリッドで表示されるカードコンポーネント。                                          | [CSS グリッド][css-grid]                                                                             |
| [グリッドラッパー][grid-wrapper]         | グリッドコンテンツを中央のラッパー内に配置するためのもので、はみ出すこともできます。        | [CSS グリッド][css-grid]                                                                             |

[media-objects]: /ja/docs/Web/CSS/How_to/Layout_cookbook/Media_objects
[columns]: /ja/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts
[center]: /ja/docs/Web/CSS/How_to/Layout_cookbook/Center_an_element
[sticky-footers]: /ja/docs/Web/CSS/How_to/Layout_cookbook/Sticky_footers
[split-navigation]: /ja/docs/Web/CSS/How_to/Layout_cookbook/Split_navigation
[breadcrumb]: /ja/docs/Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation
[list-badges]: /ja/docs/Web/CSS/How_to/Layout_cookbook/List_group_with_badges
[pagination]: /ja/docs/Web/CSS/How_to/Layout_cookbook/Pagination
[card]: /ja/docs/Web/CSS/How_to/Layout_cookbook/Card
[grid-wrapper]: /ja/docs/Web/CSS/How_to/Layout_cookbook/Grid_wrapper
[css-grid]: /ja/docs/Web/CSS/Guides/Grid_layout
[multicol]: /ja/docs/Web/CSS/Guides/Multicol_layout
[flexbox]: /ja/docs/Web/CSS/Guides/Flexible_box_layout
[box-alignment]: /ja/docs/Web/CSS/Guides/Box_alignment

## レシピにご協力を

MDN 全体として、上記にあるものと同じ形式のレシピを提供していただけると助かります。 例を書くテンプレートやガイドラインは[こちらのページを見て](/ja/docs/Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe)ください。
