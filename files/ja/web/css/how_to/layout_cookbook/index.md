---
title: CSS レイアウト料理帳
slug: Web/CSS/How_to/Layout_cookbook
original_slug: Web/CSS/Layout_cookbook
---

CSS レイアウト料理帳は、よくあるレイアウトパターンや、自分のサイトに実装する可能性がある事柄のレシピを共有するためのものです。プロジェクトの出発点として使うことができるコードを提供することに加えて、これらのレシピは様々な方法のレイアウト仕様書を使用することができることに光を当て、開発者として選択ができるようにします。

> [!NOTE]
> CSS のレイアウトが初めてならば、最初に [CSS レイアウト学習モジュール](/ja/docs/Learn_web_development/Core/CSS_layout)を見て、ここのレシピを活用するのに必要な基本的な背景知識を得た方が良いかもしれません。

## レシピ

| レシピ                                                                                     | 説明                                                                                        | レイアウト手法                                                                                                                                                            |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [メディアオブジェクト](/ja/docs/Web/CSS/How_to/Layout_cookbook/Media_objects)              | 一方が画像でもう一方が説明テキストである二列のボックス。 例えば Facebook の投稿やツイート。 | [CSS グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)、{{cssxref("float")}} による代替、{{cssxref("fit-content")}} による寸法制御                                           |
| [欄](/ja/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts)                               | 段組みレイアウト、フレックスボックス、グリッドの選択                                        | [CSS グリッド](/ja/docs/Web/CSS/Guides/Grid_layout), [段組み](/ja/docs/Web/CSS/Guides/Multicol_layout), [フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout) |
| [要素を中央に配置](/ja/docs/Web/CSS/How_to/Layout_cookbook/Center_an_element)              | アイテムを水平および垂直方向に中央に配置する方法                                            | [フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout), [ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)                                                  |
| [張り付くフッター](/ja/docs/Web/CSS/How_to/Layout_cookbook/Sticky_footers)                 | コンテンツが短い場合にコンテナーまたはビューポートの最下部に配置されるフッターの作成。      | [CSS グリッド](/ja/docs/Web/CSS/Guides/Grid_layout), [フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)                                                    |
| [ナビゲーションの分割](/ja/docs/Web/CSS/How_to/Layout_cookbook/Split_navigation)           | 一部のリンクが他と視覚的に分割されているナビゲーションパターン。                            | [フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout), {{cssxref("margin")}}                                                                                  |
| [パンくずナビゲーション](/ja/docs/Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation)    | 来訪者がページ階層の上の階層に戻ることができるリンクのリストの作成。                        | [フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)                                                                                                         |
| [バッジ付きリストグループ](/ja/docs/Web/CSS/How_to/Layout_cookbook/List_group_with_badges) | カウントを表示するバッジの付いたアイテムのリスト。                                          | [フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout), [ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)                                                  |
| [ページ付け](/ja/docs/Web/CSS/How_to/Layout_cookbook/Pagination)                           | コンテンツのページへのリンク (検索結果など)。                                               | [フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout), [ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)                                                  |
| [カード](/ja/docs/Web/CSS/How_to/Layout_cookbook/Card)                                     | カードのグリッドで表示されるカードコンポーネント。                                          | [CSS グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)                                                                                                                       |
| [グリッドラッパー](/ja/docs/Web/CSS/How_to/Layout_cookbook/Grid_wrapper)                   | グリッドコンテンツを中央のラッパー内に配置するためのもので、はみ出すこともできます。        | [CSS グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)                                                                                                                       |

## レシピにご協力を

MDN 全体として、上記にあるものと同じ形式のレシピを提供していただけると助かります。 例を書くテンプレートやガイドラインは[こちらのページを見て](/ja/docs/Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe)ください。
