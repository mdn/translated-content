---
title: CSS レイアウト料理帳
slug: Web/CSS/Layout_cookbook
tags:
  - CSS
  - ガイド
  - レイアウト
  - 料理帳
  - レシピ
translation_of: Web/CSS/Layout_cookbook
---
{{CSSRef}}

CSS レイアウト料理帳は、よくあるレイアウトパターンや、自分のサイトに実装する可能性がある事柄のレシピを共有するためのものです。プロジェクトの出発点として使うことができるコードを提供することに加えて、これらのレシピは様々な方法のレイアウト仕様書を使用することができることに光を当て、開発者として選択ができるようにします。

> **Note:** CSS のレイアウトが初めてならば、最初に [CSS レイアウト学習モジュール](/ja/docs/Learn/CSS/CSS_layout)を見て、ここのレシピを活用するのに必要な基本的な背景知識を得た方が良いかもしれません。

## レシピ

| レシピ                                                                              | 説明                                                                                        | レイアウト手法                                                                                                                                       |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [メディアオブジェクト](/ja/docs/Web/CSS/Layout_cookbook/Media_objects)              | 一方が画像でもう一方が説明テキストである二列のボックス。 例えば Facebook の投稿やツイート。 | [CSS グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout)、{{cssxref("float")}} による代替、{{cssxref("fit-content")}} による寸法制御                  |
| [欄](/ja/docs/Web/CSS/Layout_cookbook/Column_layouts)                               | 段組みレイアウト、フレックスボックス、グリッドの選択                                        | [CSS グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout), [段組み](/ja/docs/Web/CSS/CSS_Columns), [フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)
| [要素を中央に配置](/ja/docs/Web/CSS/Layout_cookbook/Center_an_element)              | アイテムを水平および垂直方向に中央に配置する方法                                            | [フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout), [ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)
| [張り付くフッター](/ja/docs/Web/CSS/Layout_cookbook/Sticky_footers)                 | コンテンツが短い場合にコンテナーまたはビューポートの最下部に配置されるフッターの作成。      | [CSS グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout), [フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)
| [ナビゲーションの分割](/ja/docs/Web/CSS/Layout_cookbook/Split_Navigation)           | 一部のリンクが他と視覚的に分割されているナビゲーションパターン。                            | [フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout), {{cssxref("margin")}}
| [パンくずナビゲーション](/ja/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation)    | 来訪者がページ階層の上の階層に戻ることができるリンクのリストの作成。                        | [フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout)
| [バッジ付きリストグループ](/ja/docs/Web/CSS/Layout_cookbook/List_group_with_badges) | カウントを表示するバッジの付いたアイテムのリスト。                                          | [フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout), [ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)
| [ページ付け](/ja/docs/Web/CSS/Layout_cookbook/Pagination)                           | コンテンツのページへのリンク (検索結果など)。                                               | [フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout), [ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)
| [カード](/ja/docs/Web/CSS/Layout_cookbook/Card)                                     | カードのグリッドで表示されるカードコンポーネント。                                          | [CSS グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout)
| [グリッドラッパー](/ja/docs/Web/CSS/Layout_cookbook/Grid_wrapper)                   | グリッドコンテンツを中央のラッパー内に配置するためのもので、はみ出すこともできます。        | [CSS グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout)

## レシピにご協力を

MDN 全体として、上記にあるものと同じ形式のレシピを提供していただけると助かります。 例を書くテンプレートやガイドラインは[こちらのページを見て](/ja/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe)ください。
